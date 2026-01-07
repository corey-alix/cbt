---
name: Design to Requirements Specification
agent: agent
description: Upsert changes to a requirements specification from a design specification.
---

## Reference Documents

- **Templates**: Follow [req-template.md](../templates/req-template.md) when generating the requirements specification.
- **Rules**: Follow [impl-common.md](../templates/impl-common.md) for FR and NFR assignment.

## Task Overview

Given a design specification document, `design/<artifact>.design.md`, upsert `requirements/<artifact>.req.md`.

- Follow the structure in [req-template.md](../templates/req-template.md) when generating the requirements specification.
- Analyze the design spec to extract and generalize key requirements.
- Create or update the requirements specification folder structure.
- Follow the common rules in [impl-common.md](../templates/impl-common.md) for FR and NFR assignment.
- Update the `Requirements` section of `<artifact>.design.md` to link each FR-XXXX to the DES-XXXX.
- Consult [req-template.md](../templates/req-template.md) for file structure and formatting rules.
- The specification should be terse, precise, and focused on intent, enabling recreation of the design spec's purpose.
