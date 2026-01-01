---
name: Code to Implementation Specification
agent: agent
description: This prompt instructs the AI to convert provided source code files into a detailed implementation specification, following a precise structure and formatting rules.
---

## Task Overview

Given one or more source code files, the AI must:

1. Analyze the source files to extract implementation details.
2. Create or update the specification folder structure.
3. Generate a detailed implementation specification in Markdown format.
4. Update the source code files with reference comments to IMP-XXXX identifiers.

Pre-processing: Execute `/run promptpress.injectImpIds` in the chat to pre-inject IMP-XXXX comments into the source code. This assigns sequential IDs starting from IMP-1000 across files (alphabetical order) and within files (top-to-bottom). The command defaults to the workspace root directory and supports `.cs`, `.ts`, `.js`, and `.py` files.

## Special Cases

-   If the client prompt is "refresh", infer the module name and intended source files from the existing `implementation/<module_name>.impl.md` file. Only process source files that are already mentioned in the spec document; do not include any new source files not previously specified.

## Specification Folder Structure

Create the following folder structure under the project root if it does not exist:

```
specs/
  ├── requirements/
  │   ├── <module_name>.req.md
  ├── design/
  │   ├── <module_name>.design.md
  ├── implementation/
  │   ├── <module_name>.impl.md
```

-   `<module_name>`: Derive from the project name or primary namespace (e.g., "WorkflowEngine.TenPrint").
-   Only generate the `implementation/<module_name>.impl.md` file as per this prompt. The requirements and design files are out of scope for this prompt.

## ID to File Mappings

The following mappings must be clearly understood and followed:

-   FR-nnnn => req.md => requirements folder
-   DES-nnnn => design.md => design folder
-   IMP-nnnn => impl.md => implementation folder

These mappings ensure traceability across specification phases:

-   Functional Requirements (FR) are documented in .req.md files in the requirements/ folder
-   Design Specifications (DES) are documented in .design.md files in the design/ folder
-   Implementation Specifications (IMP) are documented in .impl.md files in the implementation/ folder

## IMP-XXXX Identifier Assignment

-   Scan the source code for existing `// <module_name>/IMP-XXXX` comments to identify assigned IDs.
-   If comments are missing, assign new unique IMP-XXXX identifiers to every public method, starting from IMP-1000 and incrementing sequentially.
-   For TypeScript: Consider exported classes, interfaces, functions, and their public members as public. Assign IMP-XXXX to public methods (those that are not marked private or protected, whether explicitly public or not). Include all exported interfaces, types, enums, and constants in the specification.
-   For other languages: Identify equivalent public constructs (e.g., public methods in C#, Java, etc.) and assign IMP-XXXX accordingly.
-   Assign IDs sequentially across all provided source files, in the order the files are processed (alphabetical by filename).
-   Within each file, assign IDs in the order public methods appear in the code (top-to-bottom).

## Source Code Updates

-   Ensure each public method (not marked private or protected) has a `// <module_name>/IMP-XXXX` comment immediately above its declaration.
-   If the comment is missing, add it using the assigned ID.
-   Do not modify the code logic; only add or verify comments.
-   If a comment already exists, ensure it matches the assigned ID.
-   Use appropriate comment syntax for the language (e.g., // for C-style languages, # for Python, etc.).

## Implementation Specification Format

Generate `<module_name>.impl.md` following the structure and rules defined in [impl-template.md](../templates/impl-template.md). Use the template as the authoritative guide for formatting, organization, and content requirements. Ensure all IMP-XXXX identifiers are properly assigned and referenced throughout the specification.
