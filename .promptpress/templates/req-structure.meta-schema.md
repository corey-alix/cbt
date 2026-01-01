# Meta-Schema for Structure Definition Files

This file defines the **exact allowed format** for any `*.structure.md` file that describes the structure of requirement specs.
The VS Code linter uses this meta-schema to validate the structure definition itself (self-hosting validation).

## Global Rules
- File must start with H1: `# Requirements Specification Structure` (or similar fixed title)
- Top-level sections must appear **in the exact order** listed below
- No extra top-level `##` sections allowed
- Only the placeholders listed in **Allowed Placeholders** may be used
- All bold keys must use `**` (paired, no single `*` for italics)
- Repetition is indicated by text in parentheses:
  - `(required)` or no marker → exactly once
  - `(may be empty)` → section allowed to have no content
  - `(zero or more)` → *
  - `(one or more)` → +
  - `(optional)` → ?

## Allowed Placeholders
- `<free text>`
- `<one or more paragraphs>`
- `<project name>`
- `<text>`
- `<Use Case Name>`
- `<description>`
- `<number>`

## Required Top-Level Sections (strict order)

- **Frontmatter** (required)
  - ---
  - artifact: "<project name>"
  - phase: "requirement"
  - depends-on: [ <string>* ]
  - references: [ <string>* ]
  - last-updated: YYYY-MM-DD
  - last-spec-id: FR-<number> or NFR-<number>
  - ---

- **H1 Title** (required)
  - # Requirements Specification for <project name>

- **Overview** (required)
  - ## Overview
  - <one or more paragraphs of free text>
  - <optional requirements summary>

- **Functional Requirements** (required)
  - ## Functional Requirements
  - <one or more requirement blocks>
    - ### FR-<number>
    - - **Description**: <text>
    - - **Priority**: <text>
    - - **Dependencies**: <text>

- **Non-Functional Requirements** (required)
  - ## Non-Functional Requirements
  - <one or more requirement blocks>
    - ### NFR-<number>
    - - **Description**: <text>
    - - **Priority**: <text>
    - - **Dependencies**: <text>

- **Sequence Diagrams** (optional)
  - ## Sequence Diagrams
  - <mermaid diagrams or other>

- **Use Cases** (required)
  - ## Use Cases
  - <one or more use case descriptions>
    - - **<Use Case Name>**: <description>

- **Assumptions** (required)
  - ## Assumptions
  - <free text>

- **Constraints** (required)
  - ## Constraints
  - <free text>

- **Notes** (required)
  - ## Notes
  - <free text>

## Additional Rules (optional, must be last)
- ## Additional Rules (semantic, checked in code)
- <free text lines>