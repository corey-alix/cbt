# Design Specification Structure

\*.design.md files must follow this exact structure.  
All top-level sections are required and must appear in this order.  
No extra top-level sections allowed.

- **Frontmatter** (must be first, no content before it)

    ```yaml
    ---
    artifact: <project name>
    phase: design
    depends-on: []
    references: []
    last-updated: YYYY-MM-DD
    last-spec-id: DES-<number>
    ---
    ```

- **H1 Title**
    - # Design Specification for <project name>

- **Overview**
    - ## Overview
    - <one or more paragraphs of free text>
    - <optional key design elements list>

- **Requirements**
    - ## Requirements
    - <one or more lines>
      - - @<artifact>.req/<FR-4-digit>: <DES-4-digit>[, <DES-4-digit>]*

- **Data Models**
    - ## Data Models
    - <one or more model blocks>
      - ### <Model Name> (DES-<4-digit>)
      - - **Description**: <text>
      - - **Fields/Properties**: <text>
      - - **Relationships**: <text>

- **Components**
    - ## Components
    - <one or more component blocks>
      - ### <Component Name> (DES-<4-digit>)
      - - **Description**: <text>
      - - **Type**: <text>
      - - **Key Methods**: <text>
      - - **Dependencies**: <text>
      - <optional additional fields like **External Libraries**, **Internal Dependencies**, **System Requirements**>

- **Algorithms**
    - ## Algorithms
    - <one or more bullet points>
      - - <algorithm name>: <description>

- **Error Handling**
    - ## Error Handling
    - <free text>

- **Performance Considerations**
    - ## Performance Considerations
    - <free text>

- **Security Considerations**
    - ## Security Considerations
    - <free text>

- **Notes**
    - ## Notes
    - <free text>

## Additional Rules (semantic, checked in code)

- All DES-IDs must be unique, sequential, 4-digit numbers (e.g., DES-0001), and start after last-spec-id
- Every DES-ID in Requirements must reference valid FR-IDs
- Frontmatter keys must match exactly (order does not matter)
