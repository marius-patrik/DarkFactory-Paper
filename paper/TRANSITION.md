# Finished version of the paper

This directory is the finished, modular version of the thesis, moved here from
`marius-patrik/DarkFactory` (`paper/`, plus the built `THESIS_CASE_STUDY.pdf`)
now that the paper no longer lives in the pipeline repository.

- `main.typ` is the entry point; `pages/` holds the sections.
- `typst compile main.typ out/paper.pdf` from this directory builds it. The
  `out/` directory is not tracked and must be created before compiling — typst
  does not create it, and it exits 0 when it cannot, so a missing `out/` looks
  exactly like a successful build.
- `THESIS_CASE_STUDY.pdf` is the built artefact as it stood at the move.

The repository's own canonical publication is unchanged and still builds from
`index.typ` to `ODBORNA_PRACE.pdf` via `bun run publication`.
