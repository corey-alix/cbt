---
name: Spec to Code
agent: agent
description: Upsert source code from an implementation specification.
---

## Task Overview

Given an implementation specification document, `implementation/<artifact>.impl.md`, upsert the source code files to match the specification.

- Analyze the impl spec to extract code details, including classes, interfaces, methods, and other elements.
- Optionally reference the requirements (`requirements/<artifact>.req.md`) and design (`design/<artifact>.design.md`) documents for additional context on intent, functional requirements, and high-level design.
- Update or create source code files as described in the "Files" and "Files Summary" sections.
- Implement methods based on the "Algorithm" descriptions in the "Methods" section, translating pseudo-code into executable TypeScript code.
- Generate or upsert test files (e.g., \*.test.ts) with unit tests derived from the 'Examples' subsections in the 'Methods' section, using a testing framework like Vitest.
- Recreate interfaces, enums, and other types from the "Interfaces" and "Other Types" sections.
- Add or verify IMP-XXXX comments in the source code (e.g., // <module_name>/IMP-XXXX above declarations).
- Ensure the generated code is functional, follows TypeScript best practices, and compiles without errors.
- For external dependencies (e.g., Three.js), assume they are imported correctly.
- Validate that the updated code aligns with the spec by running tests or linters if possible.

Follow the common rules in [impl-common.md](../templates/impl-common.md) for IMP assignment and traceability.

## Special Cases

- If source files already exist, update them to match the spec without breaking existing functionality.
- For methods with detailed algorithms, implement step-by-step logic faithfully.
- If the spec references external files or configs (e.g., package.json), note them but do not modify unless specified.
- Preserve existing code comments and structure where possible.

## Output

- Update the source code files in the appropriate directories.
- Generate or update test files with unit tests based on spec examples.
- Ensure IMP-XXXX comments are present and correct.
- Run `npm run lint` and `npm run test` to validate the code and tests.
- If regeneration is complete, confirm the code recreates the project as per the spec.
