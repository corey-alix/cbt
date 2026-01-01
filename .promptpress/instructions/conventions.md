# Project Conventions

- **Spec Structure**: All spec files start with YAML frontmatter, followed by markdown content. Use templates in `.github/templates/` for creation: `req-template.md`, `design-template.md`, `impl-template.md`. The frontmatter must include:
  - `artifact`: The name of the project or component (e.g., "promptpress").
  - `phase`: The SDLC phase ("requirement", "design", or "implementation").
  - `depends-on`: An array of prerequisite artifacts (usually empty for requirements).
  - `references`: An array of related spec files (e.g., ["promptpress.req"] for cross-references).
  - `version`: (Optional) A version number or identifier for the spec.
  - `last-updated`: The date of last modification in YYYY-MM-DD format (e.g., "2025-12-29").
  - `last-spec-id`: (For requirements/design phases) The highest ID used in the spec (e.g., "FR-1027" or "DES-1044").
- **References**: Use `@ref:artifact.phase` for cross-spec links (e.g., `@ref:game-of-life.req`)
- **File Naming**: `{artifact}.{phase}.md` in `specs/` subdirs (`requirements/`, `design/`, `implementation/`)
- **Code Generation**: Implementation specs describe file structures in tree format with `/` for dirs, `├──` for branches
- **Error Handling**: Use `logger` from `src/utils/OutputLogger.ts` for logging, diagnostics collection for validation
- **Testability**: Always generate testable components. For VS Code-dependent code, extract logic into testable helper methods. Generate tests for all new testable code immediately.
- **Regex Usage**: Whenever working with regex, define the expression in the `RegexHelper` class in `src/utils/regexHelper.ts` with a meaningful name. Write tests for the regex in `src/test/regexHelper.test.ts` that make assertions against the particular use case. Then reference the regex in business logic.
- **Library Usage**: Always prefer using existing library methods and utilities over implementing custom logic to maintain consistency, reduce errors, and avoid code duplication.