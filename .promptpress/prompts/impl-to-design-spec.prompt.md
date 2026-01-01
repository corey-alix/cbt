---
name: Implementation to Design Specification
agent: agent
description: Upsert changes to a design specification from an implementation specification.
---

## Task Overview

Given an implementation specification document, `implementation/<artifact>.impl.md`, upsert `design/<artifact>.design.md`.

-   The implementation spec follows the structure in [impl-template.md](../templates/impl-template.md).
-   Follow the structure in [design-template.md](../templates/design-template.md) when generating the design specification.
-   Analyze the implementation spec to extract and generalize key design elements.
-   Create or update the design specification folder structure.
-   Assign DES-XXXX identifiers to each major design element.
-   Update the "Design Requirements" section of `<artifact>.impl.md` to link each DES-XXXX to the IMP-XXXX.
-   Consult [impl-structure.md](../templates/impl-structure.md) for the implementation spec structure and formatting rules.
-   Assign a unique DES-XXXX identifier to every major design element.
-   Identifiers start at DES-1000, incrementing by 1 for each new design element (e.g., DES-1000, DES-1001, ...).
-   The specification should be terse, precise, and focused on intent, enabling recreation of the implementation spec's purpose.
