---
name: Requirements to Design Specification
agent: agent
description: Upsert changes to a design specification from a requirements specification.
---

## Task Overview

Given a requirements specification document, `requirements/<artifact>.req.md`, upsert a design document, `design/<artifact>.design.md`.

- Refer to [architecture.md](../instructions/architecture.md) for context on the folder structure.
- Follow the structure in [design-template.md](../templates/design-template.md) when generating content for `design/<artifact>.design.md`.
- Create or update the design specification.
- Analyze the requirements spec to identify design elements; a many-to-many relationship is ok.
- Assign DES-XXXX identifiers to each design element.
- For existing design specifications, the last DES-xxxx is in the frontmatter `last-spec-id` field.
- For new design specifications, start at DES-1000
- Increment by 1 for each new element (e.g., DES-1000, DES-1001, DES-1002, ...).
- The specification should be terse, precise, and focused on intent, enabling recreation of the requirements spec's purpose. This is a bridge between requirements and implementation so clarity and completeness are essential.
