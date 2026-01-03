---
name: Design to Implementation Specification
agent: agent
description: Upsert changes to an implementation specification from a design specification.
---

## Task Overview

Given a design specification document, `design/<artifact>.design.md`, upsert `implementation/<artifact>.impl.md`.

- The design spec follows the structure in [design-structure.md](../templates/design-structure.md).
- Analyze the design spec to identify new or changed design elements (data models, components, etc.).
- Update the implementation specification document to reflect these changes by adding new IMP-XXXX identifiers for new methods, classes, or other implementation elements (including data models, interfaces, enums, and constants that are implemented in the code).

Follow the common rules in [impl-common.md](../templates/impl-common.md) for specification structure, IMP assignment, traceability, and validation.
