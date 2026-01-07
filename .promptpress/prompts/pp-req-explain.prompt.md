---
name: Explain Requirement Implementation
agent: agent
description: Analyzes how a functional requirement (FR) is implemented by tracing through design, implementation specs, and source code, then generates a clear explanation.
---

## Reference Documents

- **Architecture**: See [architecture.md](../instructions/architecture.md) for traceability patterns.
- **Templates**: Reference [impl-template.md](../templates/impl-template.md) for implementation spec structure.

## Task Overview

Given a functional requirement identifier (e.g., FR-1008), trace its implementation through the specification hierarchy and source code, then generate a comprehensive explanation of how the requirement is satisfied.

## Process

### Step 1: Locate the Requirement

1. Search `specs/requirements/*.req.md` files for the specified FR-XXXX.
2. Extract the requirement's description, priority, and dependencies.
3. Note the artifact name from the file (e.g., `prompt-press` from `prompt-press.req.md`).

### Step 2: Trace to Design Specification

1. Open the corresponding `specs/design/<artifact>.design.md` file.
2. Search the `## Requirements` section for references to the FR-XXXX.
3. Identify which DES-XXXX design elements satisfy this requirement.
4. For each linked DES-XXXX, extract:
    - Component/module name
    - Design description
    - Key interfaces or data structures

### Step 3: Trace to Implementation Specification

1. Open the corresponding `specs/implementation/<artifact>.impl.md` file.
2. Search the `## Design Requirements` section for each DES-XXXX identified above.
3. Identify which IMP-XXXX implementation elements realize the design.
4. For each linked IMP-XXXX, extract:
    - File path
    - Class/function name
    - Implementation notes

### Step 4: Resolve File Locations from Impl Spec

The impl.md file already contains the file-to-class/function mapping in its `## Files` section. Use this structured data instead of searching source code:

1. In the `## Files` section of the impl.md, each `### File: <path>` subsection lists:
    - **Classes**: The classes defined in that file
    - **Functions**: The functions defined in that file
    - **IMP-IDs**: Referenced within the file's content blocks

2. For each IMP-XXXX identified in Step 3:
    - Locate the IMP-XXXX definition in the impl.md (it appears under a `### File:` block or in `## Design Requirements`)
    - Extract the file path from the parent `### File: <path>` heading
    - Extract class/function names from the **Classes** or **Functions** list items

3. This approach mirrors the `BelongsToFixer.buildClassToFileMap()` algorithm which parses the Files section to build a class-to-file mapping using `MarkdownSection.getNamedListItem()`.

**Note**: Only search source code as a fallback if the impl.md lacks the required mapping.

### Step 5: Generate Explanation

Create a structured explanation following this format:

```markdown
# FR-XXXX Implementation Explanation

## Requirement

> [Original requirement description from .req.md]

**Priority**: [priority]  
**Dependencies**: [dependencies]

## Design Approach

### DES-XXXX: [Component Name]

[Description of how this design element addresses the requirement]

## Implementation Details

### IMP-XXXX: [File/Function Name]

- **File**: `[file path]`
- **Purpose**: [Brief description]
- **Key Logic**: [Explanation of what the code does]

## Code Locations

| IMP-ID   | File             | Line | Description         |
| -------- | ---------------- | ---- | ------------------- |
| IMP-XXXX | src/path/file.ts | ~NN  | [Brief description] |

## Summary

[2-3 sentence summary explaining how the requirement is fulfilled, connecting the dots from requirement through design to actual code implementation]

## Traceability Chain
```

FR-XXXX (Requirement)
└── DES-XXXX (Design)
└── IMP-XXXX (Implementation)
└── src/path/file.ts (Code)

```

## Special Cases

- **Missing Links**: If a design or implementation link is not found, note it as `[UNTRACED]` and suggest that the traceability may need updating.
- **Multiple Paths**: If a requirement is satisfied by multiple design elements, trace each path separately.
- **Cross-Artifact References**: Use qualified references like `@other-artifact.design/DES-XXXX` when tracing across artifacts.

## Example Usage

**User Input**: Explain how FR-1008 is implemented

**Expected Action**:
1. Find FR-1008 in `specs/requirements/prompt-press.req.md`
2. Search `specs/design/prompt-press.design.md` for FR-1008 references → find linked DES-XXXX
3. Search `specs/implementation/prompt-press.impl.md` `## Design Requirements` for linked DES-XXXX → find IMP-XXXX
4. In the same impl.md, locate each IMP-XXXX under `## Files` / `### File: <path>` to get file paths and class/function names
5. Generate the explanation document

```
