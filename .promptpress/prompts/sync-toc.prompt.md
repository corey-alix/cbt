---
agent: agent
description: Sync the Table of Contents with the spec documents by identifying discrepancies or generating the TOC if it doesn't exist.
model: Grok Code Fast 1 (copilot)
tools: [read, edit, search]
---

If the TOC.md already exists, identify discrepancies between the TOC.md and the spec documents, if any, and note them in the TOC.md as such. Discrepancies should be listed at the bottom of the document under a section titled "Discrepancies". Each discrepancy should include the term and a brief explanation of the issue.

If there is no existing TOC.md file, generate a TOC.md file that lists all domain terms in the first column and a brief definition or description of that term in the left column. Include a "## Specification Documents" section with a markdown table listing links to all identified spec documents and brief summaries of each. You may access the README.md and any \*.req.md document to seek further clarification. Refer to the Specs Directory Structure in [architecture.md](../instructions/architecture.md) for the location and organization of spec documents.

## Specification Documents

The spec documents are organized in the `specs/` directory with subdirectories for requirements/, design/, implementation/, and test/. Use the available tools to list the contents of the specs/ directory and its subdirectories to identify all relevant .md files (e.g., _.req.md, _.design.md, _.impl.md, _.md in test/). Read the frontmatter and content of these files to extract domain terms and understand their purpose.

Examples of spec documents include:

| Document Path                   | Summary                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------- |
| specs/ConOps.md                 | Concept of Operations: High-level system overview and operational context.      |
| specs/requirements/\*.req.md    | Requirements specifications: Define functional and non-functional requirements. |
| specs/design/\*.design.md       | Design specifications: Describe system design, components, and data models.     |
| specs/implementation/\*.impl.md | Implementation specifications: Detail code structures, mappings, and IMP-IDs.   |
| specs/test/\*.md                | Test specifications: Define test cases and validation for components.           |
