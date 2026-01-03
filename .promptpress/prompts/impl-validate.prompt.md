---
agent: agent
---

Validate an implementation specification document using the following steps:

- Confirm that the incoming document is an "impl" document based on file name (ending in .impl.md) and frontmatter (phase: implementation).

- Validate this implementation spec against the #templates/impl-template.md document.

- check for invalid design references (e.g., DES-IDs that do not exist in the corresponding design spec or are malformed).

- check for invalid file references
- the `## Files Summary` section must list actual files
- each `### File: {{filepath}}` section must correspond to a file listed in the `## Files Summary`
- each of the listed **Classes**, **Interfaces**, **Methods** must exist in the actual source code file

- Summarize any invalid references at the bottom of the document under [AI-SUMMARY].
