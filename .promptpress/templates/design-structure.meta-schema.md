# Meta-Schema for Structure Definition Files

This file defines the **exact allowed format** for any `*.structure.md` file that describes the structure of design specs.
The VS Code linter uses this meta-schema to validate the structure definition itself (self-hosting validation).

## Global Rules

- File must start with H1: `# Design Specification Structure` (or similar fixed title)
- Top-level sections must appear **in the exact order** listed below
- No extra top-level `##` sections allowed
- Only the placeholders listed in **Allowed Placeholders** may be used
- All bold keys must use `**` (paired, no single `*` for italics)
- Repetition is indicated by text in parentheses:
    - `(required)` or no marker → exactly once
    - `(may be empty)` → section allowed to have no content
    - `(zero or more)` → \*
    - `(one or more)` → +
    - `(optional)` → ?

## Allowed Placeholders

- `<free text>`
- `<one or more paragraphs>`
- `<project name>`
- `<Model Name>`
- `<Component Name>`
- `<algorithm name>`
- `<description>`
- `<text>`
- `<DES-ID>`
- `<FR-ID>`
- `<artifact>`
- `<number>`

## Required Top-Level Sections (strict order)

- **Frontmatter** (required)

    ***
    - artifact: "<project name>"
    - phase: "design"
    - depends-on: [ <string>* ]
    - references: [ <string>* ]
    - last-updated: YYYY-MM-DD
    - last-spec-id: DES-<number>

    ***

- **H1 Title** (required)
    - # Design Specification for <project name>

- **Overview** (required)
    - ## Overview
    - <one or more paragraphs of free text>
    - <optional key design elements list>

- **Requirements** (required)
    - ## Requirements
    - <one or more lines>
      - - @<artifact>.req/<FR-ID>: <DES-ID>[, <DES-ID>]*

- **Data Models** (required)
    - ## Data Models
    - <one or more model blocks>
      - ### <Model Name> (DES-<number>)
      - - **Description**: <text>
      - - **Fields/Properties**: <text>
      - - **Relationships**: <text>

- **Components** (required)
    - ## Components
    - <one or more component blocks>
      - ### <Component Name> (DES-<number>)
      - - **Description**: <text>
      - - **Type**: <text>
      - - **Key Methods**: <text>
      - - **Dependencies**: <text>
      - <optional additional fields like **External Libraries**, **Internal Dependencies**, **System Requirements**>

- **Algorithms** (required)
    - ## Algorithms
    - <one or more bullet points>
      - - <algorithm name>: <description>

- **Error Handling** (required)
    - ## Error Handling
    - <free text>

- **Performance Considerations** (required)
    - ## Performance Considerations
    - <free text>

- **Security Considerations** (required)
    - ## Security Considerations
    - <free text>

- **Notes** (required)
    - ## Notes
    - <free text>

## Additional Rules (optional, must be last)

- ## Additional Rules (semantic, checked in code)
- <free text lines>
