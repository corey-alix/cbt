---
name: updateSpecChain
description: Update the complete specification chain from requirements to implementation when adding new features
argument-hint: Provide the new functional requirement description and the affected design element
---

# Specification Chain Update

When adding a new feature to the system, follow this process to maintain traceability across all specification documents. Use the provided templates and rules for consistent formatting.

## Reference Documents
- **Templates**: Use #file:../templates/ for document structure
  - #file:../templates/req-template.md - Requirements specification format
  - #file:../templates/design-template.md - Design specification format  
  - #file:../templates/impl-template.md - Implementation specification format
- **Rules**: Follow #file:../rules/spec-update-rules.md for consistent updates

## 1. Requirements Specification Update
- Add new FR-XXXX to `<project>.req.md` following #file:../templates/req-template.md
- Update the overview to reflect the new FR range
- Include description, priority, and dependencies

## 2. Design Specification Update  
- Map the new FR-XXXX to existing or new DES-XXXX in `<project>.design.md` following #file:../templates/design-template.md
- Update component descriptions if functionality is extended
- Ensure design elements remain cohesive

## 3. Implementation Specification Update
- Add new IMP-XXXX entries to `<project>.impl.md` for new methods/functions following #file:../templates/impl-template.md
- Update existing IMP descriptions if functionality is extended
- Add algorithm details and examples
- Update Design Requirements mappings

## 4. Code Implementation
- Extract helper functions without VS Code dependencies into separate utility files
- Implement the feature in the appropriate provider/service
- Add IMP-XXXX comments above relevant code elements

## 5. Testing
- Create comprehensive tests for helper functions (classify as 'parser' or 'core')
- Ensure tests don't depend on VS Code APIs
- Run linting and all tests to verify implementation

## Success Criteria
- All spec documents maintain valid Markdown structure per #file:../rules/spec-update-rules.md
- Identifiers are sequential and unique
- Full traceability from FR -> DES -> IMP
- Code compiles and tests pass
- Helper functions are properly tested in isolation