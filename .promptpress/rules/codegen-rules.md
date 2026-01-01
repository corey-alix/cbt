---
artifact: codegen-rules
phase: requirement
depends-on: []
references: []
last-updated: 2025-12-29
---

# Code Generation Rules for PromptPress

This document governs code generation. Follow these rules for consistent outcomes:

- Run generated code through "npm run lint". Retry on errors or warnings.
- Generate helper commands for testing if needed.
- After lint passes and all tests pass, create a test for the new functionality.
- Classify the test as:
  - parser: markup/code processing
  - core: low-level utilities (strings, math, filesystem)
- Output full console to output window.
- Prefer using existing library methods and utilities over implementing custom logic to maintain consistency, reduce errors, and avoid code duplication.
- Use `SpecTypeMapper` from `src/spec/specTypeMapper.ts` for all spec type, folder, file extension, and REFID prefix mappings. Do not hardcode these relationships elsewhere in the codebase.
- For regex expressions, define them in `RegexHelper` class with meaningful names, write tests in `src/test/regexHelper.test.ts`, and reference in business logic.