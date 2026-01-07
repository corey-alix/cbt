---
name: Implementation to Design Specification
agent: agent
description: Upsert changes to a design specification from an implementation specification.
---

## Reference Documents

- **Templates**: Follow [design-template.md](../templates/design-template.md) when generating the design specification.
- **Rules**: Follow [impl-common.md](../templates/impl-common.md) for DES assignment.

## Task Overview

Given an implementation specification document, `implementation/<artifact>.impl.md`, upsert `design/<artifact>.design.md`.

- The implementation spec follows the structure in [impl-template.md](../templates/impl-template.md).
- Follow the structure in [design-template.md](../templates/design-template.md) when generating the design specification.
- Analyze the implementation spec to extract and generalize key design elements, including data models, interfaces, enums, and constants.
- Create or update the design specification folder structure.
- Follow the common rules in [impl-common.md](../templates/impl-common.md) for DES assignment.
- Update the "Design Requirements" section of `<artifact>.impl.md` to link each DES-XXXX to the IMP-XXXX, including for data models and other elements where applicable.
- When referencing design elements from other artifacts, qualify the DES-XXXX with the artifact name (e.g., WRMS/DES-xxxx). If the design and implementation share the same artifact name, qualification is not needed.
- Consult [impl-structure.md](../templates/impl-structure.md) for the implementation spec structure and formatting rules.
- The specification should be terse, precise, and focused on intent, enabling recreation of the implementation spec's purpose.
