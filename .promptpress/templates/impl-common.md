# Common Implementation Specification Rules

This document contains shared rules and guidelines for generating and updating implementation specifications (impl.md files) in the PromptPress workflow.

## General Rules

- Follow the structure defined in [impl-structure.md](../templates/impl-structure.md).
- Use [impl-template.md](../templates/impl-template.md) as the authoritative guide for formatting, organization, and content requirements.
- Ensure all IMP-XXXX identifiers are properly assigned and referenced throughout the specification.
- IMP-XXXX identifiers must be sequential and unique, with no gaps or duplicates. Use the next available IMP-ID after the last-spec-id in the implementation spec's frontmatter.
- Update the "Design Requirements" section to link each DES-XXXX to the IMP-XXXX elements that are implemented, including for data models and other non-method elements.
- For interfaces, enums, and other types, include the IMP-XXXX in the section heading (e.g., "### Dimensions (IMP-XXXX)").
- All IMP-IDs must be referenced in the Design Requirements section and detailed in the Methods section (for methods) or appropriate sections (for other elements).
- Validate the resulting impl.md using [impl-validate.prompt.md](../prompts/impl-validate.prompt.md) to ensure compliance.

## IMP-XXXX Assignment

- Assign IMP-XXXX identifiers sequentially, starting after the last-spec-id in the implementation spec's frontmatter.
- Assign to new methods, classes, interfaces, enums, constants, and other implementation elements.
- For TypeScript: Consider exported classes, interfaces, functions, and their public members as public. Assign IMP-XXXX to public methods and include exported interfaces, types, enums, and constants.
- Ensure comments are added to source code where applicable (e.g., // <module_name>/IMP-XXXX above declarations).

## Traceability

- Link DES-XXXX from design specs to IMP-XXXX in the Design Requirements section.
- Ensure every IMP-ID appears in Design Requirements.
- Maintain references to FR-XXXX indirectly through DES-XXXX.

## Validation

- Confirm the document is an "impl" document based on file name (.impl.md) and frontmatter (phase: implementation).
- Check for invalid design references (e.g., DES-IDs that do not exist in the corresponding design spec).
- Verify file references: Files Summary must list actual files, and each File section must correspond.
- Ensure listed Classes, Interfaces, Methods exist in the actual source code.
- Summarize any invalid references under [AI-SUMMARY] at the bottom of the document.
