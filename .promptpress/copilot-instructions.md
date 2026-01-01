# AI Coding Instructions for PromptPress

**Mission**: PromptPress is a VS Code extension that enables prompt-driven development by maintaining AI prompts as persistent, versioned Markdown specifications, integrating with the VS Code CHAT window to parse specs, scaffold code, validate changes, and synchronize requirements with implementation through AI-assisted workflows.

This document is decomposed into the following sections for better organization:

-   [Index and Overview](instructions/index.md)
-   [Architecture Overview](instructions/architecture.md)
-   [Critical Workflows](instructions/workflows.md)
-   [Project Conventions](instructions/conventions.md)
-   [Integration Points](instructions/integrations.md)

Focus on maintaining spec traceability using conventions, ensuring AI context for code includes the impl, design, and req specs that define it.

## Preventing Future Issues with Spec IDs and Implementation

When updating specs or code, especially during AI-assisted refinement or cascading operations:

-   Always verify if new methods or features share implementation with existing ones before generating new IMP-IDs. Avoid creating redundant IDs (e.g., don't assign a new IMP-ID like IMP-1101 for a method that delegates to or shares logic with an existing one like IMP-1083).
-   When using AI for spec refinement, include explicit prompts to check for shared implementations (e.g., via `refineDocument.md` or custom prompts in `src/prompts/`).
-   Follow project conventions: Always generate tests for new/changed code immediately, and use the `logger` from `src/utils/OutputLogger.ts` for debugging spec updates or ID assignments.
-   During spec updates, ensure `last-spec-id` in the frontmatter is incremented sequentially without unnecessary skips, and validate against the TOC.md for consistency.
-   If discrepancies arise (e.g., an IMP-ID seems "hijacked" or redundant), review the code comments, spec mappings, and related design/requirements before proceeding—trace intent from code to impl spec to design spec to req spec.

## Logging Guidelines

When asked to "add logging" or debug code:

-   Use the `OutputLogger` class from `src/utils/OutputLogger.ts`.
-   Import the global `logger` instance: `import { logger } from '../utils/OutputLogger.js';`
-   Call `logger.log(message: string)` to output to console and optionally to VS Code's output channel.
-   Logging is controlled by the `promptpress.enableLogging` VS Code setting (default: false).
-   Add meaningful log messages at key decision points, function entries, and error conditions to aid debugging.
-   Do not add logging to production code unless necessary; prefer removing or commenting out debug logs after use.

## File Referencing Guidelines

When referencing files, templates, or prompts in specifications, instructions, or prompts, always use markdown links to ensure proper navigation and traceability. Use the format `[display text](#file:relative/path/to/file)` for workspace-relative paths.

For example, instead of writing "following the structure in req-template.md", write "following the structure in [req-template.md](./templates/req-template.md)".

This prevents plain text references and enables clickable links in the editor.
