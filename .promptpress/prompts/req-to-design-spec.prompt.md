---
name: Requirements to Design Specification
agent: agent
description: Upsert changes to a design specification from a requirements specification.
---

## Reference Documents

- **Templates**: Follow [design-template.md](../templates/design-template.md) when generating content for `design/<artifact>.design.md`.
- **Rules**: Follow [impl-common.md](../templates/impl-common.md) for DES assignment.

## Task Overview

Given a requirements specification document, `requirements/<artifact>.req.md`, upsert a design document, `design/<artifact>.design.md`.

- Refer to [architecture.md](../instructions/architecture.md) for context on the folder structure.
- Follow the structure in [design-template.md](../templates/design-template.md) when generating content for `design/<artifact>.design.md`.
- Create or update the design specification.
- Analyze the requirements spec to identify design elements; a many-to-many relationship is ok.
- Follow the common rules in [impl-common.md](../templates/impl-common.md) for DES assignment.
- The specification should be terse, precise, and focused on intent, enabling recreation of the requirements spec's purpose. This is a bridge between requirements and implementation so clarity and completeness are essential.
