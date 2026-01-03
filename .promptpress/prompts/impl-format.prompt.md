---
name: Implementation Specification Format
agent: agent
description: Reformat an implementation specification document to conform to the required structure and rules.
---

## Task Overview

Given an implementation specification document, `implementation/<artifact>.impl.md`, reformat it to ensure it strictly follows the structure defined in [impl-structure.md](../templates/impl-structure.md) and applies the rules from [impl-template.md](../templates/impl-template.md).

- Analyze the existing impl spec document.
- Restructure the content to match the exact section order and formatting requirements.
- Ensure all IMP-IDs are unique, sequential, and properly referenced.
- Update frontmatter as needed (last-updated, last-spec-id).
- Remove any extra top-level sections except [AI-CLARIFY] if present.
- Validate the formatted document using the lint-spec.mts script to ensure compliance.

Follow the common rules in [impl-common.md](../templates/impl-common.md) for specification structure, IMP assignment, traceability, and validation.

## Special Cases

- If the document is already compliant, confirm and proceed to validation.
- Preserve all meaningful content while reorganizing into the required structure.
- Do not add new IMP-IDs or change existing ones unless required for structure compliance.

After reformatting, execute the validation by running the lint-spec.mts script on the updated file.
