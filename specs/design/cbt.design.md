---
artifact: cbt
phase: design
depends-on: [cbt.req]
references: []
last-updated: 2025-12-31
---

# Design Specification for cbt

## Overview
cbt is a cognitive brain training web experience comprising two primary features:
1. **CBT Wizard**: A multi-step form guiding users through cognitive behavioral therapy reflection, capturing situation, mood, reactions, and reinterpretations, with responses persisted to localStorage.
2. **Bible Viewer**: A topical scripture browsing interface that filters and displays Bible verses with associated notes indexed by topic.

Key design elements:
- Data Models: CBT Question Set (DES-1000), Bible Scripture Data (DES-1001), Topic Notes Index (DES-1002)
- Components: Wizard Form Engine (DES-1000), Topic Input Filter (DES-1001)
- Dependencies: DOM APIs, localStorage, static data sets

## Requirements
- FR-1000: Enable CBT users to step through a reflection questionnaire and persist responses => DES-1003
- FR-1001: Enable Bible users to search verses by topic and view scripture text with notes => DES-1004

## Data Models
### CBT Question Set (DES-1000)
- **Description**: Ordered collection of reflective prompts guiding users through situation analysis, emotional response, thought patterns, and reframing.
- **Fields/Properties**: id (string), q (question text), followup (optional nested array), default (optional boolean)
- **Relationships**: Questions drive form field generation; follow-up questions appear conditionally based on parent response.

### Bible Scripture Data (DES-1001)
- **Description**: Hierarchical storage of Bible excerpts keyed by book name, chapter number, and verse number.
- **Fields/Properties**: Book name (string key), chapters (object with chapter numbers), verses (object with verse numbers and text)
- **Relationships**: Referenced by Notes index to retrieve full verse text by BookName and chapter:verse reference.

### Topic Notes Index (DES-1002)
- **Description**: Array of topical annotations linking Bible verses to learning themes.
- **Fields/Properties**: topic (string), book (BookName), verse (chapter:verse string), note (annotation text)
- **Relationships**: Indexed by topic; filters based on substring match; references Bible data for display.

## Components
### Wizard Form Engine (DES-1003)
- **Description**: Multi-step form UI that dynamically generates input fields from a question set, manages step navigation, collects user input, and persists to localStorage.
- **Type**: Service (entry point run method)
- **Key Methods**: run, buildForm, applyBehaviors, applyTriggers, getFormData
- **Dependencies**: questions data set (DES-1000), localStorage API, DOM manipulation

### Topic Input Filter (DES-1004)
- **Description**: Search UI that filters and renders topical scripture notes, displaying matching verse text alongside annotations.
- **Type**: Service (entry point run method)
- **Key Methods**: run, renderTopic, showBibleVerse, getBibleVerseRef
- **Dependencies**: Notes index (DES-1002), Bible scripture data (DES-1001), localStorage API, DOM manipulation

## Algorithms
- **Wizard Navigation**: Step counter increments on next-area trigger, decrements on prior-area, and on finish collects form data, prepends timestamp, and stores to cbt-db array in localStorage.
- **Topic Filtering**: Converts input string to lowercase and filters Notes array by substring match on topic field; renders matching results by retrieving full verse text from Bible data.
- **Chapter:Verse Parsing**: Parses strings like "1:1", "1:1-2", or "1:1-2:3" into chapter and verse reference objects to support range display.

## Error Handling
- Form submission assumes valid DOM structure with expected elements (wizard form, grid containers); missing elements may cause runtime errors.
- Bible data lookups assume valid book names and chapter:verse references; invalid references return undefined.
- localStorage availability is assumed; code does not handle quota exceeded or disabled storage.

## Performance Considerations
- Questions, Bible, and Notes are static imports; no runtime data fetching.
- Topic filtering is O(n) against Notes array; no indexing optimization for large note sets.
- DOM rendering appends all filtered notes in a single innerHTML assignment; reflow overhead scales with result set size.

## Security Considerations
- User input (topic search, form fields) is stored in localStorage without sanitization; scripts in localStorage are not executed by design (localStorage is string storage).
- innerHTML assignment in renderTopic uses user data; if Notes or form data contain HTML, escaping is not performed.
- No authentication or authorization; all users share the same localStorage instance in a browser.

## Notes
- **External Libraries**: TypeScript (compile-time only); no runtime dependencies.
- **Internal Dependencies**: 
  - pages/bible/Bible.ts supplies scripture data
  - pages/bible/Notes.ts supplies topic index
  - data/questions.ts supplies wizard questions
- **Architecture**: Event-driven DOM manipulation; all state changes trigger custom events (next-area, prior-area, finish, yesorno-toggler) wired to listeners.
- **Persistence**: CBT responses stored to cbt-db array in localStorage; topic search preference stored to topic key.
- **Scope**: Client-side only; no server communication; static data; suitable for progressive enhancement and offline use.
