# AI Coding Instructions for PromptPress

This document is decomposed into the following sections for better organization:

- [Architecture Overview](architecture.md)
- [Critical Workflows](workflows.md)
- [Project Conventions](conventions.md)
- [Integration Points](integrations.md)

## Referenced Files and Resources

| File                                       | Purpose                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `index.md`                                 | Overview and index of all instruction files, with references to key resources.                                                |
| `architecture.md`                          | Detailed architecture overview, specs directory structure, and tracing specification intent.                                  |
| `workflows.md`                             | Critical workflows for development, testing, AI integration, and spec refinement.                                             |
| `conventions.md`                           | Project conventions for spec structure, references, file naming, error handling, testability, regex usage, and library usage. |
| `integrations.md`                          | Integration points with VS Code API, AI API, and file system.                                                                 |
| `specs/TOC.md`                             | Table of Contents with term definitions and discrepancies for all specs.                                                      |
| `specs/requirements/promptpress.req.md`    | Requirements specification defining what the system must do.                                                                  |
| `specs/design/promptpress.design.md`       | Design specification describing how requirements are realized.                                                                |
| `specs/implementation/promptpress.impl.md` | Implementation specification detailing file structures, code, and mappings to design/requirements.                            |
| `.github/templates/req-template.md`        | Template for creating new requirements spec files (.req.md).                                                                  |
| `.github/templates/design-template.md`     | Template for creating new design spec files (.design.md).                                                                     |
| `.github/templates/impl-template.md`       | Template for creating new implementation spec files (.impl.md).                                                               |
| `.github/rules/spec-update-rules.md`       | Rules for updating and refining spec files.                                                                                   |
| `.github/rules/codegen-rules.md`           | Rules for code generation from implementation specs.                                                                          |

Focus on maintaining spec traceability, using conventions, ensuring AI context for code includes the impl, design, and req specs that define it, and referencing the detailed specs in `specs/` for precise alignment with system requirements and design.
