import { expect, test, type Page } from "@playwright/test";

const surface = (page: Page, name: "primary" | "main" | "secondary" | "panel") =>
  page.locator(`[data-workbench-surface="${name}"]`);

const tab = (page: Page, name: "primary" | "main" | "secondary" | "panel", label: string) =>
  surface(page, name).locator(".dv-tab").filter({ hasText: label }).first();

async function dragTab(
  page: Page,
  from: "primary" | "main" | "secondary" | "panel",
  label: string,
  to: "primary" | "main" | "secondary" | "panel",
) {
  const source = tab(page, from, label);
  const target = surface(page, to).locator(".workbench-dockview");
  await expect(source).toBeVisible();
  await expect(target).toBeVisible();
  const targetBox = await target.boundingBox();
  if (!targetBox) throw new Error(`missing drag geometry for ${from} -> ${to}`);

  await source.dragTo(target, {
    targetPosition: {
      x: Math.max(20, Math.min(targetBox.width - 20, targetBox.width / 2)),
      y: Math.max(20, Math.min(targetBox.height - 20, targetBox.height / 2)),
    },
  });

  await expect(tab(page, to, label)).toBeVisible();
  await expect(tab(page, from, label)).toHaveCount(0);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test("root regions resize continuously and persist through reload and hide/show", async ({ page }) => {
  const shell = page.locator(".workbench-shell");
  const separator = page.getByRole("separator", { name: "Resize Primary Sidebar" });
  const before = await shell.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--primary-size")),
  );
  const box = await separator.boundingBox();
  if (!box) throw new Error("primary resize separator is not visible");

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await expect(shell).toHaveClass(/root-resizing/);
  await page.mouse.move(box.x + box.width / 2 + 54, box.y + box.height / 2, { steps: 6 });
  await page.mouse.up();

  await expect.poll(async () => shell.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--primary-size")),
  )).toBeGreaterThan(before + 35);
  const resized = await shell.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--primary-size")),
  );

  await page.getByTitle(/Toggle Primary Sidebar/).click();
  await expect(separator).toBeHidden();
  await page.getByTitle(/Toggle Primary Sidebar/).click();
  await expect(separator).toBeVisible();

  const shown = await shell.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--primary-size")),
  );
  expect(Math.abs(shown - resized)).toBeLessThan(2);

  await page.reload();
  const restored = await shell.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--primary-size")),
  );
  expect(Math.abs(restored - resized)).toBeLessThan(2);
});

test("tabs move across all root Dockview surfaces and recover after reload", async ({ page }) => {
  await page.getByTitle(/Toggle Secondary Sidebar/).click();

  await dragTab(page, "primary", "Explorer", "main");
  await dragTab(page, "main", "Explorer", "secondary");
  await dragTab(page, "secondary", "Explorer", "panel");

  await surface(page, "main").getByRole("button", { name: "Browser", exact: true }).click();
  await expect(tab(page, "main", "Browser")).toBeVisible();

  await tab(page, "panel", "Explorer").dragTo(tab(page, "main", "Browser"));
  await expect(tab(page, "main", "Explorer")).toBeVisible();
  await expect(tab(page, "panel", "Explorer")).toHaveCount(0);

  await dragTab(page, "main", "Explorer", "panel");

  const mainDock = surface(page, "main").locator(".workbench-dockview");
  const dockBox = await mainDock.boundingBox();
  if (!dockBox) throw new Error("main Dockview is not visible");
  await tab(page, "panel", "Explorer").dragTo(mainDock, {
    targetPosition: { x: Math.max(4, dockBox.width - 8), y: Math.max(20, dockBox.height / 2) },
  });
  await expect(tab(page, "main", "Explorer")).toBeVisible();
  await expect(tab(page, "panel", "Explorer")).toHaveCount(0);
  await expect(surface(page, "main").locator(".dv-groupview")).toHaveCount(2);

  await page.reload();
  await expect(tab(page, "main", "Explorer")).toBeVisible();
  await expect(tab(page, "main", "Browser")).toBeVisible();
  await expect(surface(page, "main").locator(".dv-groupview")).toHaveCount(2);
});

test("anonymous public repository and browser navigation work in Chromium", async ({ page }) => {
  await page.getByRole("button", { name: /Open Repository/ }).first().click();
  await page.getByRole("textbox", { name: "Repository" }).fill("marius-patrik/DarkFactory-Paper");
  await page.getByRole("button", { name: "Open", exact: true }).click();
  await expect(page.locator(".workspace-repository-button")).toContainText("marius-patrik/DarkFactory-Paper", {
    timeout: 20_000,
  });

  const omnibar = page.getByLabel("Workbench omnibar");
  await omnibar.fill(">Open Browser");
  await omnibar.press("Enter");
  await expect(tab(page, "main", "Browser")).toBeVisible();

  const browser = surface(page, "main").locator(".browser-tab");
  const location = browser.getByRole("textbox", { name: "URL" });
  await location.fill("https://example.com");
  await location.press("Enter");
  await expect(browser.getByRole("button", { name: "Back" })).toBeEnabled();

  await location.fill("https://example.org");
  await location.press("Enter");
  await expect(browser.getByRole("button", { name: "Back" })).toBeEnabled();
  await browser.getByRole("button", { name: "Back" }).click();
  await expect(location).toHaveValue(/example\.com/);

  await browser.getByRole("button", { name: /Reload|Stop/ }).click();
  await expect(browser.getByRole("link", { name: "Open externally" })).toHaveAttribute("href", /example\.com/);
});
