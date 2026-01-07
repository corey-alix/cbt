# Requirements Specification Structure

\*.req.md files must follow this exact structure.  
All top-level sections are required and must appear in this order.  
No extra top-level sections allowed.

- **Frontmatter** (must be first, no content before it)

    ```yaml
    ---
    artifact: <project name>
    phase: requirement
    depends-on: []
    references: []
    last-updated: YYYY-MM-DD
    last-spec-id: FR-<number> or NFR-<number>
    ---
    ```

- **H1 Title**
    - # Requirements Specification for <project name>

- **Overview**
    - ## Overview
    - <one or more paragraphs of free text>
    - <optional requirements summary>

- **Functional Requirements**
    - ## Functional Requirements
    - <one or more requirement blocks>
      - ### FR-<4-digit>
      - - **Description**: <text>
      - - **Priority**: <text>
      - - **Dependencies**: <text>

- **Non-Functional Requirements**
    - ## Non-Functional Requirements
    - <one or more requirement blocks>
      - ### NFR-<4-digit>
      - - **Description**: <text>
      - - **Priority**: <text>
      - - **Dependencies**: <text>

- **Sequence Diagrams** (optional)
    - ## Sequence Diagrams
    - <mermaid diagrams or other>

- **Use Cases**
    - ## Use Cases
    - <one or more use case descriptions>
      - - **<Use Case Name>**: <description>

- **Assumptions**
    - ## Assumptions
    - <free text>

- **Constraints**
    - ## Constraints
    - <free text>

- **Notes**
    - ## Notes
    - <free text>

## Additional Rules (semantic, checked in code)

- All FR-IDs and NFR-IDs must be unique, sequential, 4-digit numbers (e.g., FR-0001), and start after last-spec-id
- Frontmatter keys must match exactly (order does not matter)
