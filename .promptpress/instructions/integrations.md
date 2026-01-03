# Integration Points

## VS Code API

Extensive use of VS Code extension APIs for providers, commands, menus, configuration, and UI components:

- **Providers**: DefinitionProvider, LinkProvider, HoverProvider for navigation and tooltips (e.g., specRefDefinitionProvider.ts, SpecHoverProviderForSource.ts).
- **Commands**: Registered commands for spec operations (e.g., promptpress.createRequirementSpec, promptpress.findAllImplementations) in extension.ts.
- **Menus**: Context menus in editor for navigation (e.g., findAllImplementations when in specs/\*.md).
- **Configuration**: Settings like promptpress.apiKey, promptpress.model via VS Code settings API.
- **Views**: Activity bar views for Artifacts and Conversations (e.g., promptpressArtifacts view).
- **File System Watchers**: Monitor specs/ directory changes (specFileWatcher.ts).
- **Output Channels**: Logging to VS Code output channel (OutputLogger.ts).
- **Activation**: Triggers on workspaceContains:**/specs/**/\*.md.

## AI API

xAI-compatible API integration with fallbacks; stateless, context aggregated from related specs:

- **Client**: xaiClient.ts handles chat completions, model listing, connection testing.
- **Configuration**: API key via settings or env var (PROMPT_PRESS_XAI_API_KEY), endpoint, model (default: grok-code-fast-1).
- **Stateless Design**: No session state; context built from specs (ContextBuilder.ts).
- **Fallbacks**: Supports multiple providers if xAI unavailable.

## File System

Async file system operations with path resolution and utilities:

- **Async FS**: Node.js fs/promises for reading/writing specs and code.
- **Path Resolution**: resolveSpecPath.ts for locating spec files by ID.
- **Utilities**: dirname.ts, markdownFormatter.ts for file handling.
- **Git Integration**: GitHelper.ts for staging, committing changes.

## Other Integrations

- **TypeScript Parser**: Used in providers for class/interface/method extraction (e.g., tsImpLinkProvider.ts).
- **Markdown Parsing**: Custom markdownParser.ts for spec structure extraction.
- **Prompt Management**: Predefined prompts in src/prompts/ for AI interactions.
- **Testing Framework**: Custom test runner in src/test/ with assertions and utilities.
