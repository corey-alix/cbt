---
artifact: impl-template.md
phase: requirement
references: []
last-updated: 2025-12-29
---
# Implementation Specification for {{project_name}}

> **Document Organization Rules:**
> - The YAML frontmatter header (--- ... ---) must be the first content in the file.
> - No content (including comments) may appear above the YAML header.
> - IMP-IDs must be sequential and unique, with no gaps or duplicates. Use the next available IMP-ID after the last-spec-id in the frontmatter.
> - Design Requirements (DES-XXXX) and their IMP-IDs must be listed in order, grouped by component.
> - All sections (Overview, Design Requirements, Files Summary, Files, Classes, Interfaces, Other Types, Methods, Notes) must appear in the order shown below.
> - Each section must be clearly delimited with headings (##, ###) as shown.
> - All IMP-IDs must be referenced in the Design Requirements section and detailed in the Methods section.
> - When adding new methods, append them after the last existing IMP-ID and update the last-spec-id in the frontmatter.

---
artifact: {{project_name}}
phase: implementation
depends-on: []
references: []
last-updated: YYYY-MM-DD
last-spec-id: IMP-nnnn
---

# Implementation Specification for {{project_name}}

## Overview
{{project_name}} is a {{brief description}}. It {{main purpose}}.

## Design Requirements

### DES-XXXX: {{ComponentName}}
- IMP-XXXX: {{methodName}}

## Files Summary
- **src/main.ts** - {{Purpose}}
- **src/components/{{Component}}.ts** - {{Purpose}}

## Files
### File: src/main.ts
- **Purpose**: {{Detailed purpose}}
- **Classes**: {{List classes}}
- **Interfaces**: {{List interfaces}}
- **Methods**: {{List methods}}
- **Other Elements**: {{Other elements}}

### File: src/components/{{Component}}.ts
- **Purpose**: {{Detailed purpose}}
- **Classes**: {{List classes}}
- **Interfaces**: {{List interfaces}}
- **Methods**: {{List methods}}
- **Other Elements**: {{Other elements}}

## Classes
### {{ClassName}}
- **Description**: {{What the class does}}
- **Inheritance**: {{Parent class or none}}
- **Properties**: {{property: type}}
- **Methods**: {{method (IMP-XXXX)}}
- **Fields**: {{field: type}}
- **Constructors**: {{constructor signature}}
- **Events**: {{Events if any}}
- **Nested Types**: {{Any nested types}}

## Interfaces
### {{InterfaceName}}
- **Description**: {{What the interface defines}}
- **Methods**: {{method signatures}}
- **Properties**: {{property signatures}}
- **Events**: {{Events if any}}

## Other Types
{{Any enums, types, etc.}}

## Models

## Methods
### {{methodName}} (IMP-XXXX)
- **Belongs to**: {{Class or file}}
- **Description**: {{What the method does}}
- **Parameters**: {{param: type - description}}
- **Return Type**: {{Type - description}}
- **Algorithm**: {{Step-by-step logic in pseudo code format. Use structured if-else statements, bullet points for sequential steps, and specify function calls with parameters. Example:
  - If fileType === 'req':
    - Perform workspace search with
      - include = getSpecIncludePattern(SpecDocType.Design)
      - query = `${artifact}.req/${refId}`
      - exclude = undefined
    - Perform workspace search with
      - include = getSpecArtifactFilePath(SpecDocType.Design, artifact)
      - query = ` ${refId}` (unqualified)
      - exclude = undefined
  - Else if fileType === 'design':
    - Perform workspace search with
      - include = getSpecIncludePattern(SpecDocType.Impl)
      - query = `${artifact}.design/${refId}`
      - exclude = undefined
    - Perform workspace search with
      - include = getSpecArtifactFilePath(SpecDocType.Impl, artifact)
      - query = ` ${refId}` (unqualified)
      - exclude = undefined
  - Else if fileType === 'impl':
    - implFiles = await vscode.workspace.findFiles(getSpecIncludePattern(SpecDocType.Impl))
    - count = implFiles.length
    - If count === 1:
      - Perform workspace search with
        - include = '**/*'
        - query = `${artifact}/${refId}`
        - exclude = 'specs/**/*'
      - Perform workspace search with
        - include = '**/*'
        - query = ` ${refId}` (unqualified)
        - exclude = 'specs/**/*'
    - Else:
      - Perform workspace search with
        - include = '**/*'
        - query = `${artifact}/${refId}`
        - exclude = 'specs/**/*'}}
- **Examples**: {{Example scenarios showing expected behavior}}
- **Exceptions**: {{Possible exceptions}}

## Examples
{{Examples of usage scenarios that can be used to infer test cases}}

## Notes
{{Implementation notes}}