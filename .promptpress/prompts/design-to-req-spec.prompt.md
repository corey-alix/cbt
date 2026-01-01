---
name: Design to Requirements Specification
agent: agent
description: Upsert changes to a requirements specification from a design specification.
---

## Task Overview

Given a design specification document, `design/<artifact>.design.md`, upsert `requirements/<artifact>.req.md`.

-   Follow the structure in [req-template.md](../templates/req-template.md) when generating the requirements specification.
-   Analyze the design spec to extract and generalize key requirements.
-   Create or update the requirements specification folder structure.
-   Assign FR-XXXX identifiers to functional requirements and NFR-XXXX to non-functional requirements.
-   Update the `Requirements` section of `<artifact>.design.md` to link each FR-XXXX to the DES-XXXX.
-   Consult [architecture/requirements.md](../templates/req-structure.md) for file structure and formatting rules.
-   Assign a unique FR-XXXX identifier to every functional requirement.
-   Assign a unique NFR-XXXX identifier to every non-functional requirement.
-   Identifiers start at FR-1000 and NFR-1000, incrementing by 1 for each new requirement (e.g., FR-1000, FR-1001, NFR-1000, NFR-1001, ...).
-   The specification should be terse, precise, and focused on intent, enabling recreation of the design spec's purpose.
