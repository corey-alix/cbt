---
artifact: cbt
phase: implementation
depends-on: ["cbt.design"]
references: ["cbt.design"]
last-updated: 2026-01-04
last-spec-id: IMP-1010
---

# Implementation Specification for cbt

## Overview
cbt is a cognitive brain training web experience. It guides users through a CBT reflection wizard and a Bible topical viewer to surface scripture notes by topic.

## Design Requirements

```
bug, notice the depends-on is still there...
See @cbt.design for detailed design specifications that this implementation fulfills.
```

### DES-1000: CBT Question Set
- @cbt.design/IMP-1003: questions

### DES-1001: Bible Scripture Data
- @cbt.design/IMP-1005: Bible
- @cbt.design/IMP-1006: VerseType
- @cbt.design/IMP-1007: ChapterType
- @cbt.design/IMP-1008: BibleType
- @cbt.design/IMP-1009: BookName

### DES-1002: Topic Notes Index
- @cbt.design/IMP-1004: Notes
- IMP-1010: Note

### DES-1003: Wizard Form Engine
- IMP-1000: run
- IMP-1002: FormGen

### DES-1004: Topic Input Filter
- IMP-1001: run

## Files Summary
- **index.ts** - Entry point for the CBT wizard; wires DOM event handling and form generation.
- **pages/bible/index.ts** - Entry point for the Bible topical viewer; renders topic input and scripture notes.
- **data/questions.ts** - Static question set driving the CBT wizard steps.
- **pages/bible/Bible.ts** - Static Bible excerpt data and related type definitions.
- **pages/bible/Notes.ts** - Static topical notes with verse references.

## Files
### File: index.ts
- **Purpose**: Initialize and run the CBT wizard UI, bind behaviors, and persist responses.
- **Classes**: FormGen (IMP-1002)
- **Interfaces**: None
- **Methods**: run (IMP-1000)
- **Other Elements**: behaviors map; helper functions applyTriggers, applyBehaviors, getFormData, gotoNextFocusable, autoForLabel, buildForm

### File: pages/bible/index.ts
- **Purpose**: Render a topic input for scripture notes and display matching verses with notes.
- **Classes**: None
- **Interfaces**: None
- **Methods**: run (IMP-1001)
- **Other Elements**: helper functions convertChapterVerseStringToChapterVerseArray, showBibleVerse, getBibleVerseRef, renderTopic, asHtml, forceElement

### File: data/questions.ts
- **Purpose**: Provide the ordered list of CBT questions and follow-up prompts.
- **Classes**: None
- **Interfaces**: None
- **Methods**: None
- **Models**: questions (IMP-1003)
- **Other Elements**: None

### File: pages/bible/Bible.ts
- **Purpose**: Supply Bible excerpt data keyed by book, chapter, and verse along with supporting types.
- **Classes**: None
- **Interfaces**: None
- **Methods**: None
- **Models**: Bible (IMP-1005)
- **Other Elements**: VerseType (IMP-1006), ChapterType (IMP-1007), BibleType (IMP-1008), BookName (IMP-1009)

### File: pages/bible/Notes.ts
- **Purpose**: Provide topical verse notes tied to books and chapter:verse references.
- **Classes**: None
- **Interfaces**: None
- **Methods**: None
- **Models**: Notes (IMP-1004)
- **Other Elements**: Note (IMP-1010)

## Classes

### FormGen (IMP-1002)
- **Description**: Helper that renders wizard steps, labels, and inputs based on the questions data set.
- **Belongs to**: index.ts
- **Inheritance**: None
- **Properties**: form: HTMLFormElement
- **Methods**: render, renderFollowup, createInput, createLabel, createStep
- **Fields**: None
- **Constructors**: constructor(form: HTMLFormElement)
- **Events**: None
- **Nested Types**: None

## Interfaces
None

## Other Types

### VerseType (IMP-1006)
Record<number, string>

### ChapterType (IMP-1007)
Record<number, { verses: VerseType }>

### BibleType (IMP-1008)
Record<string, { chapters: ChapterType }>

### BookName (IMP-1009)
keyof typeof Bible

### Note (IMP-1010)
{ topic: string; book: BookName; verse: string; note: string }

## Models

### questions (IMP-1003)
- **Description**: ordered collection of CBT prompts and optional follow-up prompts.
- **Belongs to**: data/questions.ts
- **Properties**: None
- **Fields**: None
- **Constructors**: None
- **Events**: None
- **Nested Types**: None

### Notes (IMP-1004)
- **Description**: topical verse notes referencing BookName and chapter:verse strings.
- **Belongs to**: pages/bible/Notes.ts

### Bible (IMP-1005)
- **Description**: static excerpt data organized by book, chapter, and verse.
- **Belongs to**: pages/bible/Bible.ts

## Methods
### run (IMP-1000)
- **Belongs to**: index.ts
- **Description**: Initializes CBT wizard behaviors, wires navigation triggers, persists responses, and transitions to the summary page after completion.
- **Return Type**: void
- **Algorithm**:
  - Build the form structure via buildForm, ensure labels have matching for attributes via autoForLabel, and wire behaviors and triggers.
  - Initialize currentStep to 0 and collect wizard step elements into areas.
  - Show the initial area and register listeners:
    - On next-area, advance currentStep if not last; otherwise trigger finish.
    - On prior-area, decrement currentStep if not first.
    - On finish, read form data, prepend to localStorage cbt-db array, then redirect to summary.html.
    - On yesorno-toggler, toggle yes/no classes on containing element based on checkbox state.
- **Examples**: Called on page load to activate the wizard UI and navigation controls.
- **Exceptions**: None explicit; assumes DOM structure and localStorage availability.

### run (IMP-1001)
- **Belongs to**: pages/bible/index.ts
- **Description**: Sets up the Bible topical viewer input, attaches filtering, and renders matching verse notes with scripture text.
- **Parameters**: None
- **Return Type**: void
- **Algorithm**:
  - Acquire or create the topic input using forceElement and focus it; seed value from localStorage topic.
  - Invoke renderTopic for initial value and on each input change to refresh displayed notes.
  - Derive unique topics from Notes, build a datalist, associate it with the input, and insert it after the input element.
- **Examples**: Executed on the Bible page to enable topic-based filtering of verse notes and display verse text.
- **Exceptions**: None explicit; assumes DOM access and presence of Notes and Bible data.

## Examples
- Triggering the CBT wizard by calling run on page load builds the form, enables navigation triggers, and stores user responses before redirecting to the summary page.
- Triggering the Bible viewer by calling run on page load wires the topic input, builds the datalist of topics, and renders matching verses with notes.

## Notes
- DOM structure must provide expected elements (wizard form, grid containers) for helper functions to operate correctly.
- LocalStorage keys cbt-db and topic are used for persistence; clearing storage resets saved progress and topic prefill.

## Tests
- No tests defined yet.

## [AI-CLARIFY]

### IMPIDs with no mention in code
- IMP-1002
- IMP-1000
- IMP-1001
- IMP-1003
- IMP-1005
- IMP-1006
- IMP-1007
- IMP-1008
- IMP-1009
- IMP-1004
- IMP-1010

### IMP-IDs not mapped to any file
- IMP-1002
- IMP-1006
- IMP-1007
- IMP-1008
- IMP-1009
- IMP-1010