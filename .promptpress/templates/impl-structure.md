# Implementation Specification Structure

\*.impl.md files must follow this exact structure.  
All top-level sections are required and must appear in this order.  
No extra top-level sections allowed except [AI-CLARIFY] at the end (optional).

- **Frontmatter** (must be first, no content before it)

    ```yaml
    ---
    artifact: <project name>
    phase: implementation
    depends-on: []
    references: []
    last-updated: YYYY-MM-DD
    last-spec-id: IMP-<number>
    ---
    ```

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
      - - **Classes**: <text> (optional)
      - - **Models**: <text> (optional, classes with no methods, listed as name (IMP-xxxx))
      - - **Interfaces**: <text> (optional)
      - - **Methods**: <text> (optional, exported methods, listed as name (IMP-xxxx))
      - - **Other Elements**: <text> (optional)

- **Classes** (may be empty)
    - ## Classes
    - <zero or more class blocks>
      - ### <Class Name>
      - - **Description**: <text>
      - - **Belongs to**: <text>
      - - **Inheritance**: <text> (optional)
      - - **Properties**: <text> (optional)
      - - **Methods**: <text> (optional)
      - - **Fields**: <text> (optional)
      - - **Constructors**: <text> (optional)
      - - **Events**: <text> (optional)
      - - **Nested Types**: <text> (optional)

- **Interfaces** (may be empty)
    - ## Interfaces
    - <zero or more interface blocks>
      - ### <Interface Name>
      - - **Description**: <text>
      - - **Methods**: <text> (optional)
      - - **Properties**: <text> (optional)
      - - **Events**: <text> (optional)

- **Other Types**
    - ## Other Types
    - <free text (may be empty)>

- **Models**
    - ## Models
    - <one or more model blocks>
      - ### <Model Name> (**IMP-<number>**)
      - - **Description**: <text>
      - - **Belongs to**: <text>
      - - **Properties**: <text> (optional)
      - - **Fields**: <text> (optional)
      - - **Constructors**: <text> (optional)
      - - **Events**: <text> (optional)
      - - **Nested Types**: <text> (optional)

- **Methods**
    - ## Methods
    - <one or more method blocks>
      - ### <method name> (**IMP-<number>**)
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

- **Tests**
    - ## Tests
    - <free text or structured list of test files, describes, its>

- **[AI-CLARIFY]** (optional)
    - ## [AI-CLARIFY]
    - <free text>

## Additional Rules (semantic, checked in code)

- All IMP-IDs must be unique, sequential, and start after last-spec-id
- Every IMP-ID in Methods must appear in Design Requirements
- Frontmatter keys must match exactly (order does not matter)
- Primary IMP-IDs in Models and Methods sections must be wrapped in **bold** markdown (e.g., (**IMP-<number>**))
