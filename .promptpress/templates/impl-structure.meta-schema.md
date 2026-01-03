# Meta-Schema for Structure Definition Files

This file defines the **exact allowed format** for any `*.structure.md` file that describes the structure of implementation specs.  
The VS Code linter uses this meta-schema to validate the structure definition itself (self-hosting validation).

## Global Rules

- File must start with H1: `# Implementation Specification Structure` (or similar fixed title)
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
- `<file path>`
- `<Class Name>`
- `<Interface Name>`
- `<method name>`
- `<number>`
- `<text>`
- `<Component Name>`
- `<purpose description>`
- `<Model Name>`
- `<string>`

## Required Top-Level Sections (strict order)

- **Frontmatter** (required)

    ***
    - artifact: "<project name>"
    - phase: "implementation"
    - depends-on: [ <string>* ]
    - references: [ <string>* ]
    - last-updated: YYYY-MM-DD
    - last-spec-id: IMP-<number>

    ***

- **H1 Title** (required)
    - # Implementation Specification for <project name>

- **Overview** (required)
    - ## Overview
    - <one or more paragraphs of free text>

- **Design Requirements** (required)
    - ## Design Requirements
    - <one or more groups>
      - ### DES-<number>: <Component Name>
      - <one or more lines>
        - - IMP-<number>: <method name>

- **Files Summary** (required)
    - ## Files Summary
    - <one or more lines>
      - - **<file path>** - <purpose description>

- **Files** (required)
    - ## Files
    - <one or more file blocks>
      - ### File: <file path>
      - - **Purpose**: <text>
      - - **Classes**: <text>
      - - **Interfaces**: <text>
      - **Methods**: <text>
      - **Other Elements**: <text>

- **Classes** (required, may be empty)
    - ## Classes
    - <zero or more class blocks>
      - ### <Class Name>
      - - **Description**: <text>
      - - **Inheritance**: <text>
      - - **Properties**: <text>
      - - **Methods**: <text>
      - - **Fields**: <text>
      - - **Constructors**: <text>
      - - **Events**: <text>
      - - **Nested Types**: <text>

- **Interfaces** (required, may be empty)
    - ## Interfaces
    - <zero or more interface blocks>
      - ### <Interface Name>
      - - **Description**: <text>
      - - **Methods**: <text>
      - - **Properties**: <text>
      - - **Events**: <text>

- **Other Types** (required)
    - ## Other Types
    - <free text>

- **Models** (required)
    - ## Models
    - <one or more model blocks>
      - ### <Model Name>
      - <one or more paragraphs>

- **Methods** (required)
    - ## Methods
    - <one or more method blocks>
      - ### <method name> (IMP-<number>)
      - - **Belongs to**: <text>
      - - **Description**: <text>
      - - **Parameters**: <text>
      - - **Return Type**: <text>
      - - **Algorithm**: <text>
      - - **Examples**: <text>
      - - **Exceptions**: <text>

- **Examples** (required)
    - ## Examples
    - <free text>

- **Notes** (required)
    - ## Notes
    - <free text>

## Additional Rules (optional, must be last)

- ## Additional Rules (semantic, checked in code)
- <free text lines>
