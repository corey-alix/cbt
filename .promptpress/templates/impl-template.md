---
artifact: impl-template.md
phase: requirement
references: []
last-updated: 2025-12-29
---

# Implementation Specification for {{project_name}}

> **Document Organization Rules:**
>
> - The YAML frontmatter header (--- ... ---) must be the first content in the file.
> - No content (including comments) may appear above the YAML header.
> - IMP-IDs must be sequential and unique, with no gaps or duplicates. Use the next available IMP-ID after the last-spec-id in the frontmatter.
> - Design Requirements (DES-XXXX) and their IMP-IDs must be listed in order, grouped by component.
> - All sections (Overview, Design Requirements, Files Summary, Files, Classes, Interfaces, Other Types, Models, Models, Methods, Notes) must appear in the order shown below.
> - Each section must be clearly delimited with headings (##, ###) as shown.
> - All IMP-IDs must be referenced in the Design Requirements section and detailed in the Methods section.
> - When adding new methods, append them after the last existing IMP-ID and update the last-spec-id in the frontmatter.
> - In the Files section, include only the categories (**Classes**, **Models**, **Interfaces**, **Methods**, **Other Elements**) that apply to each file, omitting those with no exports.
> - In the Files section, **Models** and **Methods** must be listed with their associated IMP-ID appended in parentheses, e.g., "findAllImplementations (IMP-1095)".
> - In the Classes section, include only the attributes (**Belongs to**, **Inheritance**, **Properties**, **Methods**, **Fields**, **Constructors**, **Events**, **Nested Types**) that apply to each class, omitting those that are not relevant.
> - In the Interfaces section, include only the attributes (**Methods**, **Properties**, **Events**) that apply to each interface, omitting those that are not relevant.
> - The implementation specification must adhere to the structure defined in impl-structure.md.

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
- **Models**: {{List models with IMP-IDs}}
- **Other Elements**: {{Other elements}}

### File: src/components/{{Component}}.ts

- **Purpose**: {{Detailed purpose}}
- **Classes**: {{List classes}}
- **Models**: {{List models with IMP-IDs}}
- **Interfaces**: {{List interfaces}}
- **Methods**: {{List methods with IMP-IDs}}
- **Other Elements**: {{Other elements}}

## Classes

### {{ClassName}}

- **Description**: {{What the class does}}
- **Belongs to**: {{File or another class}}
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

### {{ModelName}} (**IMP-XXXX**)

- **Description**: {{What the model represents}}
- **Belongs to**: {{File or class}}
- **Properties**: {{property: type}}
- **Fields**: {{field: type}}
- **Constructors**: {{constructor signature}}
- **Events**: {{Events if any}}
- **Nested Types**: {{Any nested types}}

## Methods

### {{methodName}} (**IMP-XXXX**)

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
                - include = '\*_/_'
                - query = `${artifact}/${refId}`
                - exclude = 'specs/\*_/_'
            - Perform workspace search with
                - include = '\*_/_'
                - query = ` ${refId}` (unqualified)
                - exclude = 'specs/\*_/_'
        - Else:
            - Perform workspace search with
                - include = '\*_/_'
                - query = `${artifact}/${refId}`
                - exclude = 'specs/\*_/_'}}
- **Examples**: {{Example scenarios showing expected behavior}}
- **Exceptions**: {{Possible exceptions}}

## Examples

{{Examples of usage scenarios that can be used to infer test cases}}

## Notes

{{Implementation notes}}

## Tests

{{Testing framework and test file details}}

- **Framework**: {{e.g., Vitest}}
- **Test Files**:
    - {{file1.test.ts}}:
        - describe('{{block name}}'):
            - it('{{test description}}')
            - it('{{another test}}')
        - describe('{{another block}}'):
            - it('{{test description}}')
    - {{file2.test.ts}}: {{similar nested structure}}
