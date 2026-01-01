---
artifact: cbt
phase: implementation
depends-on: [cbt.design]
references: []
last-updated: 2025-12-31
last-spec-id: IMP-1001
---

# Implementation Specification for cbt

## Overview
cbt is a cognitive brain training web experience. It guides users through a CBT reflection wizard and a Bible topical viewer to surface scripture notes by topic.

## Design Requirements

### DES-1003: Wizard Form Engine
- IMP-1000: run

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
- **Classes**: FormGen
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
- **Other Elements**: questions constant

### File: pages/bible/Bible.ts
- **Purpose**: Supply Bible excerpt data keyed by book, chapter, and verse along with supporting types.
- **Classes**: None
- **Interfaces**: None
- **Methods**: None
- **Other Elements**: VerseType, ChapterType, BibleType, BookName types; Bible constant

### File: pages/bible/Notes.ts
- **Purpose**: Provide topical verse notes tied to books and chapter:verse references.
- **Classes**: None
- **Interfaces**: None
- **Methods**: None
- **Other Elements**: Notes constant; Note type (internal)

## Classes
### FormGen
- **Description**: Helper that renders wizard steps, labels, and inputs based on the questions data set.
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
- VerseType: Record<number, string>
- ChapterType: Record<number, { verses: VerseType }>
- BibleType: Record<string, { chapters: ChapterType }>
- BookName: keyof typeof Bible
- Note: { topic: string; book: BookName; verse: string; note: string }

## Models
- questions: ordered collection of CBT prompts and optional follow-up prompts.
- Notes: topical verse notes referencing BookName and chapter:verse strings.
- Bible: static excerpt data organized by book, chapter, and verse.

## Methods
### run (IMP-1000)
- **Belongs to**: index.ts
- **Description**: Initializes CBT wizard behaviors, wires navigation triggers, persists responses, and transitions to the summary page after completion.
- **Parameters**: None
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
