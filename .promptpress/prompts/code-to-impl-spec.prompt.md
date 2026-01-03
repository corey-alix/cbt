---
name: Code to Implementation Specification
agent: agent
description: This prompt instructs the AI to convert provided source code files into a detailed implementation specification, following a precise structure and formatting rules.
---

## Task Overview

Given one or more source code files, the AI must:

1. If no specific files are provided, scan the src/ directory for all .ts files and associated .test.ts files.
2. Analyze the source files to extract implementation details.
3. Analyze any associated test files (e.g., \*.test.ts) to extract testing details, including framework, describe blocks, and it descriptions.
4. Create or update the specification folder structure.
5. Generate a detailed implementation specification in Markdown format, including a "Tests" section with testing framework and test file summaries.
6. Update the source code files with reference comments to IMP-XXXX identifiers.

Follow the common rules in [impl-common.md](../templates/impl-common.md) for IMP assignment, traceability, and validation.

Pre-processing: Execute `/run promptpress.injectImpIds` in the chat to pre-inject IMP-XXXX comments into the source code. This assigns sequential IDs starting from IMP-1000 across files (alphabetical order) and within files (top-to-bottom). The command defaults to the workspace root directory and supports `.cs`, `.ts`, `.js`, and `.py` files.

## Special Cases

- If the client prompt is "refresh", infer the module name and intended source files from the existing `implementation/<module_name>.impl.md` file. Only process source files that are already mentioned in the spec document; do not include any new source files not previously specified.

Follow the common rules in [impl-common.md](../templates/impl-common.md) for specification structure, IMP assignment, traceability, and validation.
