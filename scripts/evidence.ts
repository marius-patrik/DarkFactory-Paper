import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const DATA = join("data", "evidence.json");
const OUTPUT = join("img", "generated", "gradually-ai-usage-2026.svg");

type Category = {
  key: "never" | "free" | "paid" | "coding";
  label_cs: string;
  people_approx: number;
  share_percent: number;
  dots: number;
  estimate_range_people?: [number, number];
};

type Evidence = {
  darkfactory: {
    evaluated_revision: string;
  };
  gradually: {
    world_population: number;
    dot_count: number;
    people_per_dot_approx: number;
    categories: Category[];
  };
};

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[character] ?? character);
}

function text(
  x: number,
  y: number,
  value: string,
  size = 18,
  weight = "normal",
  anchor = "start",
) {
  return (
    '<text x="' + x.toFixed(2) +
    '" y="' + y.toFixed(2) +
    '" font-family="sans-serif" font-size="' + size +
    '" font-weight="' + weight +
    '" text-anchor="' + anchor +
    '" fill="#111827">' + escapeXml(value) + "</text>"
  );
}

async function gitlinkRevision() {
  const process = Bun.spawn(["git", "rev-parse", "HEAD:darkfactory"], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const [exitCode, stdout, stderr] = await Promise.all([
    process.exited,
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
  ]);
  if (exitCode !== 0) {
    throw new Error("could not resolve darkfactory gitlink: " + stderr.trim());
  }
  return stdout.trim();
}

export async function renderEvidence() {
  const payload = JSON.parse(await readFile(DATA, "utf8")) as Evidence;
  const pinnedRevision = await gitlinkRevision();
  if (payload.darkfactory.evaluated_revision !== pinnedRevision) {
    throw new Error(
      "DarkFactory evidence revision " + payload.darkfactory.evaluated_revision +
      " does not match gitlink " + pinnedRevision,
    );
  }

  const categories = payload.gradually.categories;
  const dotCount = categories.reduce((total, item) => total + item.dots, 0);

  if (dotCount !== payload.gradually.dot_count || dotCount !== 2500) {
    throw new Error("Gradually evidence dot count is inconsistent");
  }

  const fills = {
    never: "#e5e7eb",
    free: "#a8a29e",
    paid: "#57534e",
    coding: "#111827",
  } as const;
  const strokes = {
    never: "#9ca3af",
    free: "#78716c",
    paid: "#44403c",
    coding: "#111827",
  } as const;
  const approximatePeople = (value: number) => {
    const divisor = value >= 1_000_000_000 ? 1_000_000_000 : 1_000_000;
    const unit = divisor === 1_000_000_000 ? "mld." : "mil.";
    const scaled = value / divisor;
    const digits = Number.isInteger(scaled) ? 0 : 1;
    return "≈ " + scaled.toFixed(digits).replace(".", ",") + " " + unit;
  };
  const percentage = (value: number) => String(value).replace(".", ",") + " %";

  const width = 1000;
  const height = 560;
  const originX = 34;
  const originY = 34;
  const step = 9.5;
  const radius = 3.25;
  const categoryByIndex: Category["key"][] = [];

  for (const item of categories) {
    categoryByIndex.push(...Array.from({ length: item.dots }, () => item.key));
  }

  const parts = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + width +
      '" height="' + height + '" viewBox="0 0 ' + width + " " + height + '">',
    '<rect width="100%" height="100%" fill="white"/>',
  ];

  categoryByIndex.forEach((key, index) => {
    const row = Math.floor(index / 50);
    const column = index % 50;
    const x = originX + column * step;
    const y = originY + row * step;
    parts.push(
      '<circle cx="' + x.toFixed(2) +
      '" cy="' + y.toFixed(2) +
      '" r="' + radius +
      '" fill="' + fills[key] +
      '" stroke="' + strokes[key] +
      '" stroke-width="0.65"/>',
    );
  });

  const legendX = 545;
  parts.push(
    text(
      legendX,
      42,
      (payload.gradually.world_population / 1_000_000_000).toFixed(1).replace(".", ",") +
        " mld. lidí = " + payload.gradually.dot_count.toLocaleString("cs-CZ") + " bodů",
      22,
      "bold",
    ),
  );
  parts.push(
    text(
      legendX,
      70,
      "1 bod " + approximatePeople(payload.gradually.people_per_dot_approx),
      17,
    ),
  );

  let y = 120;
  for (const item of categories) {
    parts.push(
      '<circle cx="' + (legendX + 7) +
      '" cy="' + (y - 5) +
      '" r="6.5" fill="' + fills[item.key] +
      '" stroke="' + strokes[item.key] +
      '" stroke-width="1"/>',
    );
    parts.push(text(legendX + 25, y, item.label_cs, 16, item.key === "coding" ? "bold" : "normal"));
    parts.push(
      text(
        legendX + 25,
        y + 24,
        approximatePeople(item.people_approx) + " · " + percentage(item.share_percent) +
          " · " + item.dots + " bodů",
        15,
      ),
    );
    y += 86;
  }

  parts.push(text(legendX, 485, "Kategorie se nepřekrývají; člověk je zařazen", 14));
  parts.push(text(legendX, 505, "podle nejpokročilejší použité kategorie.", 14));
  const coding = categories.find((item) => item.key === "coding");
  if (!coding?.estimate_range_people) {
    throw new Error("Coding-agent estimate range is missing");
  }
  const [estimateLow, estimateHigh] = coding.estimate_range_people;
  parts.push(
    text(
      legendX,
      535,
      "Coding agents: redakční deduplikovaný odhad (" +
        Math.round(estimateLow / 1_000_000) + "–" +
        Math.round(estimateHigh / 1_000_000) + " mil.).",
      14,
      "bold",
    ),
  );
  parts.push("</svg>");

  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, parts.join(""), "utf8");
}

if (import.meta.main) {
  await renderEvidence();
  console.log("ok: validated pinned evidence and rendered " + OUTPUT);
}
