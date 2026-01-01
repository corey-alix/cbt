---
name: Design to Implementation Specification
agent: agent
description: Upsert changes to an implementation specification from a design specification.
---

## Task Overview

Given a design specification document, `design/<artifact>.design.md`, upsert `implementation/<artifact>.impl.md`.

-   The design spec follows the structure in [design-structure.md](../templates/design-structure.md).
-   Follow the structure in [impl-template.md](../templates/impl-template.md) when generating the implementation specification.
-   Analyze the design spec to identify new or changed design elements (data models, components, etc.).
-   Update the implementation specification document to reflect these changes by adding new IMP-XXXX identifiers for new methods, classes, or other implementation elements.
-   Assign IMP-XXXX identifiers sequentially, starting after the last-spec-id in the implementation spec's frontmatter.
-   Update the "Design Requirements" section of `<artifact>.impl.md` to link each DES-XXXX to the IMP-XXXX elements that are implemented.
-   Assign a unique IMP-XXXX identifier to every new implementation element.
-   Identifiers must be sequential and unique, with no gaps or duplicates. Use the next available IMP-ID after the last-spec-id in the implementation spec's frontmatter.
-   The specification should be terse, precise, and focused on intent, enabling recreation of the design spec's purpose.
