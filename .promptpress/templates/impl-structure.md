# Implementation Specification Structure

*.impl.md files must follow this exact structure.  
All top-level sections are required and must appear in this order.  
No extra top-level sections allowed.

- **Frontmatter** (must be first, no content before it)
  - ---
  - artifact: "<project name>"
  - phase: "implementation"
  - depends-on: [ <string>* ]
  - references: [ <string>* ]
  - last-updated: YYYY-MM-DD
  - last-spec-id: IMP-<number>
  - ---

- **H1 Title**
  - # Implementation Specification for <project name>

- **Overview**
  - ## Overview
  - <one or more paragraphs of free text>

- **Design Requirements**
  - ## Design Requirements
  - <one or more groups>
    - ### DES-<number>: <Component Name>
    - <one or more IMP lines>
      - - IMP-<number>: <method name>

- **Files Summary**
  - ## Files Summary
  - <one or more lines>
    - - **<file path>** - <purpose description>

- **Files**
  - ## Files
  - <one or more file blocks>
    - ### File: <file path>
    - - **Purpose**: <text>
    - - **Classes**: <text>
    - - **Interfaces**: <text>
    - - **Methods**: <text>
    - - **Other Elements**: <text>

- **Classes** (may be empty)
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

- **Interfaces** (may be empty)
  - ## Interfaces
  - <zero or more interface blocks>
    - ### <Interface Name>
    - - **Description**: <text>
    - - **Methods**: <text>
    - - **Properties**: <text>
    - - **Events**: <text>

- **Other Types**
  - ## Other Types
  - <free text (may be empty)>

- **Models**
  - ## Models
  - <one or more model blocks>
    - ### <Model Name>
    - <one or more paragraphs>

- **Methods**
  - ## Methods
  - <one or more method blocks>
    - ### <method name> (IMP-<number>)
    - - **Belongs to**: <text>
    - - **Description**: <text>
    - - **Parameters**: [<type> <name>]
    - - **Return Type**: <text>
    - - **Algorithm**: <text>
    - - **Examples**: <text>
    - **Exceptions**: <text>

- **Examples**
  - ## Examples
  - <free text>

- **Notes**
  - ## Notes
  - <free text>

## Additional Rules (semantic, checked in code)
- All IMP-IDs must be unique, sequential, and start after last-spec-id
- Every IMP-ID in Methods must appear in Design Requirements
- Frontmatter keys must match exactly (order does not matter)