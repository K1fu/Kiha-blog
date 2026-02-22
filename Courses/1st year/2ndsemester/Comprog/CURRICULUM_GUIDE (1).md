# curriculum.js — Instructor Authoring Guide

**Code Protocol Education Engine · v1.0**

---

## Overview

`curriculum.js` is the **only file you ever edit** to build a course. The engine (`engine.js`), UI (`ui.js`), and all other files are language-agnostic and never need to change. Swap this one file and the entire system reconfigures itself — a new course title, a new language, new lessons, and a recalibrated XP/rank system.

This document covers everything you need to write a complete, working curriculum from scratch.

---

## File Structure at a Glance

```js
const Curriculum = (() => {

  const meta = {
    title:    "COURSE TITLE",
    subtitle: "Semester X · Module Y",
    language: "Language Name"
  };

  const lessons = [
    {
      id: "lesson_1",
      title: "Lesson Title",
      content: [ /* content blocks */ ],
      exercises: [ /* exercise objects */ ]
    },
    // more lessons...
  ];

  return { meta, lessons };

})();
```

The file exports a single `Curriculum` object with two properties: `meta` and `lessons`. Everything else in the engine reads from these two.

---

## Part 1 — Course Metadata (`meta`)

```js
const meta = {
  title:    "INTRO TO PYTHON",       // Displayed in header and browser tab
  subtitle: "Semester 1 · Module A", // Displayed below the title in the header
  language: "Python"                 // Shown on code block labels throughout the course
};
```

| Field | Required | Purpose |
|---|---|---|
| `title` | Yes | Shown in the header bar, browser tab, and the login modal |
| `subtitle` | No | A secondary line below the title (semester, module, section) |
| `language` | No | Label shown on every code block (e.g. `Python`, `JavaScript`, `HTML`) |

---

## Part 2 — Lessons Array (`lessons`)

Each entry in the `lessons` array is one lesson object. Lessons appear in the sidebar in the order they are defined here.

```js
{
  id:       "lesson_1",            // Unique string ID — no spaces, no duplicates
  title:    "Your First Program",  // Displayed in sidebar and lesson header
  content:  [ /* content blocks */ ],
  exercises: [ /* exercise objects */ ]
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | Must be unique across all lessons. Use `lesson_1`, `lesson_2`, etc. |
| `title` | string | Yes | Shown in sidebar nav and at the top of the lesson panel |
| `content` | array | Yes | Ordered list of content blocks (text and code). Can be empty `[]`. |
| `exercises` | array | Yes | Ordered list of exercises. Can be empty `[]`. |

---

## Part 3 — Content Blocks

Content blocks are the instructional material shown **above** the exercises. They are rendered in order, alternating between explanation and code examples.

There are two types: `text` and `code`.

### `text` — Paragraph block

```js
{
  type:  "text",
  value: "A variable is a named container that stores a value."
}
```

Rendered as a paragraph. Use plain prose. No HTML, no markdown — the engine renders `value` using `textContent` exactly as written.

### `code` — Code block

```js
{
  type:  "code",
  value:
`name = "Jordan"
age  = 17
gpa  = 3.8`.trim()
}
```

Rendered inside a `<pre><code>` block with a language label and a copy button. All whitespace, indentation, and line breaks are preserved **exactly as written**.

**Critical rules for code blocks:**

- Always use a template literal (backticks) so you can write multiline code naturally.
- Always call `.trim()` at the end to remove the leading newline that template literals introduce.
- The value is injected using `textContent`, never `innerHTML`, so angle brackets and special characters are safe to use as-is.
- Do **not** pre-trim or collapse spaces — the engine will display whatever you write.

```js
// ✓ Correct — multiline, trimmed
{
  type: "code",
  value:
`def greet(name):
    print("Hello,", name)

greet("Alex")`.trim()
}

// ✗ Wrong — indentation is destroyed because the template literal starts mid-line
{
  type: "code",
  value: `def greet(name):
print("Hello,", name)`
}
```

---

## Part 4 — Exercises

Exercises appear below the lesson content. There are three supported types.

Every exercise shares these common fields:

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | Must be **globally unique** across all exercises in all lessons |
| `type` | string | Yes | One of: `"reorder"`, `"fill_blank"`, `"code_editor"` |
| `prompt` | string | Yes | The question or instruction shown to the student. Supports `\n` for line breaks. |
| `xp` | number | Yes | XP awarded on correct first submission. Recommended: 10 for simple, 20 for complex. |

---

### Exercise Type 1 — `reorder`

Students drag and drop (or use arrow buttons) to arrange lines of code into the correct order.

```js
{
  id:   "lesson_1_ex_0",
  type: "reorder",
  prompt: "Arrange these lines so the program prints a greeting, then a name, then a farewell.",
  lines: [
    `print("Goodbye!")`,
    `print("Hello!")`,
    `print("My name is Alex.")`
  ],
  correctOrder: [1, 2, 0],
  xp: 10
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `lines` | string[] | Yes | The code lines to be reordered. Written in any scrambled order. |
| `correctOrder` | number[] | Yes | The correct sequence, expressed as **0-indexed positions** of the `lines` array. |

**Understanding `correctOrder`:**

`correctOrder` describes the correct reading order using the original indices from `lines`.

In the example above, `lines` is:

```
Index 0 → print("Goodbye!")
Index 1 → print("Hello!")
Index 2 → print("My name is Alex.")
```

The correct program should read: Hello first, then name, then Goodbye. That is items at index `1`, `2`, `0` — so `correctOrder: [1, 2, 0]`.

**Step-by-step guide to writing `correctOrder`:**

1. Write your `lines` array in any order (scrambled is fine for the student experience).
2. Mentally read through the lines in their correct program order.
3. For each step in the correct sequence, note the **original array index** of that line.

```
Correct program order:
  Step 0 → print("Hello!")           → lives at index 1 in lines[]
  Step 1 → print("My name is Alex.") → lives at index 2 in lines[]
  Step 2 → print("Goodbye!")         → lives at index 0 in lines[]

Therefore: correctOrder: [1, 2, 0]
```

**Rules:**
- `lines` and `correctOrder` must have the same length.
- Every index from `lines` must appear exactly once in `correctOrder`.
- Grading is a strict exact match — every position must be correct.

---

### Exercise Type 2 — `fill_blank`

Students fill in one or more blanks within a line of code.

```js
{
  id:       "lesson_1_ex_1",
  type:     "fill_blank",
  prompt:   "Complete the print statement to display the text: Hello, Python!",
  template: `print(_____)`,
  blanks:   [`"Hello, Python!"`],
  xp: 10
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `template` | string | Yes | The code line with `_____` (exactly 5 underscores) marking each blank. |
| `blanks` | string[] | Yes | The exact correct answers, one per blank, in left-to-right order. |

**Multiple blanks:**

Use `_____` once per blank. The number of `_____` occurrences must match the length of `blanks`.

```js
{
  id:       "lesson_2_ex_multi",
  type:     "fill_blank",
  prompt:   "Fill in both blanks to complete the variable assignments.",
  template: `name = _____\nage = _____`,
  blanks:   [`"Jordan"`, `17`],
  xp: 15
}
```

**Grading rules — STRICT:**
- Comparison is case-sensitive: `"hello"` ≠ `"Hello"`
- Comparison is whitespace-sensitive: `"Jordan "` ≠ `"Jordan"`
- No trimming, no fuzzy matching
- The student's input must match `blanks[i]` character-for-character

**Tip — be explicit in your prompt:**

Tell students exactly what format is expected. If the answer requires quotes, say so:

```
✓ Clear:     "Type the string value including its surrounding quotes."
✗ Ambiguous: "Fill in the name."
```

---

### Exercise Type 3 — `code_editor`

Students write multiple lines of free-form code in a textarea. This is the most open-ended exercise type.

```js
{
  id:   "lesson_1_ex_2",
  type: "code_editor",
  prompt: "Write a program that prints exactly two lines:\nLine 1: Hello!\nLine 2: I am learning Python.",
  correctAnswer:
`print("Hello!")
print("I am learning Python.")`,
  xp: 20
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `correctAnswer` | string | Yes | The exact string the student must submit to pass. |

**Grading rules — STRICTLY EXACT:**

The engine compares `studentInput === correctAnswer` with zero processing:

- Case-sensitive: `Print` ≠ `print`
- Whitespace-sensitive: 4 spaces ≠ 1 tab, trailing spaces cause failure
- Line-break-sensitive: always use Unix line endings (`\n`) in `correctAnswer`
- No trimming of leading or trailing whitespace
- No partial credit
- No AI grading

**Writing `correctAnswer`:**

Always use a template literal so multiline code is natural. Do **not** call `.trim()` on `correctAnswer`. Unlike content code blocks, the raw string is what students must match — any transformation changes the target.

```js
// ✓ Correct — template literal, no .trim()
correctAnswer:
`def square(n):
    print(n * n)

square(4)`,

// ✗ Wrong — .trim() strips leading/trailing whitespace, can silently break grading
correctAnswer:
`def square(n):
    print(n * n)

square(4)`.trim(),
```

**Writing good prompts for `code_editor`:**

Be explicit about every detail the grader will enforce. Use `\n` for line breaks in the prompt:

```js
prompt: "Write a function called square that takes one parameter n and prints n times n.\nThen call it with the value 4.\nUse exactly 4 spaces for indentation.",
```

---

## Part 5 — XP Design Guidelines

The XP rank system auto-calibrates to your curriculum. The engine dynamically computes `maxPossibleXP` by summing every `xp` field across all exercises. You do not configure it separately — just set `xp` values consistently and the rank ladder scales itself.

**Recommended XP values:**

| Exercise Type | Suggested XP | Rationale |
|---|---|---|
| `reorder` | 10 | Mechanical recognition — low cognitive load |
| `fill_blank` | 10 | Recall with context provided |
| `code_editor` (1–3 lines) | 20 | Requires synthesis from memory |
| `code_editor` (4–8 lines) | 30 | Moderate program construction |
| `code_editor` (full program) | 40–50 | Complex logic, high effort |

Keep XP values consistent across similar exercise types so progress feels proportional to effort. A `reorder` exercise should never be worth more than a `code_editor`.

---

## Part 6 — ID Naming Conventions

Exercise IDs must be unique across the **entire curriculum**, not just within a single lesson. The engine stores completed IDs in the student's browser cookie and looks them up globally.

Follow this pattern:

```
lesson_{lessonNumber}_ex_{exerciseIndex}
```

Examples:

```
lesson_1_ex_0   ← Lesson 1, first exercise   (index 0)
lesson_1_ex_1   ← Lesson 1, second exercise  (index 1)
lesson_2_ex_0   ← Lesson 2, first exercise   (index 0)
lesson_2_ex_1   ← Lesson 2, second exercise  (index 1)
```

**Never reuse an ID**, even if you delete an exercise. A student who completed the old exercise has that ID in their cookie — if you reuse the ID for a new exercise, the engine will incorrectly mark it as already complete for that student.

---

## Part 7 — Common Mistakes

### 1. Forgetting `.trim()` on content code blocks

Without `.trim()`, the template literal introduces a blank first line because the opening backtick is followed by a newline.

```js
// ✗ Wrong — the rendered code block starts with an empty line
{
  type: "code",
  value:
`print("hello")`
}

// ✓ Correct
{
  type: "code",
  value:
`print("hello")`.trim()
}
```

### 2. Adding `.trim()` to `correctAnswer`

The opposite mistake. `.trim()` removes content the student needs to match, silently breaking the grader.

```js
// ✗ Wrong
correctAnswer: `print("hello")`.trim()

// ✓ Correct
correctAnswer:
`print("hello")`
```

### 3. Miscounting `correctOrder` indices

A common source of grading bugs. Always verify by tracing each index back to its line.

```js
lines: [
  `print("C")`,  // index 0
  `print("A")`,  // index 1
  `print("B")`   // index 2
]

// The correct program prints A, B, C
// A is at index 1, B is at index 2, C is at index 0
correctOrder: [1, 2, 0]  // ✓ Correct

correctOrder: [0, 1, 2]  // ✗ Wrong — this would print C, A, B
```

### 4. Duplicate exercise IDs

The engine silently fails for duplicate IDs — whichever exercise is completed first marks both as done.

```js
// ✗ Wrong
{ id: "lesson_1_ex_0", ... },
{ id: "lesson_1_ex_0", ... }  // duplicate — will break progress tracking

// ✓ Correct
{ id: "lesson_1_ex_0", ... },
{ id: "lesson_1_ex_1", ... }
```

### 5. Mismatched blank count in `fill_blank`

The number of `_____` markers in `template` must equal the length of `blanks`.

```js
// ✗ Wrong — two blanks in template, only one answer provided
template: `x = _____; y = _____`,
blanks:   ["10"]

// ✓ Correct
template: `x = _____; y = _____`,
blanks:   ["10", "20"]
```

### 6. Windows line endings in `correctAnswer`

If you paste code from a Windows editor, line endings may be `\r\n`. The student's browser submits `\n`. This causes silent grading failures where a visually correct answer is rejected. Always write `correctAnswer` directly in your source file using Unix line endings (`\n`).

---

## Part 8 — Complete Lesson Template

Copy and adapt this skeleton for each new lesson:

```js
{
  id:    "lesson_N",
  title: "Lesson Title Here",

  content: [
    {
      type:  "text",
      value: "Opening explanation paragraph. One concept per paragraph works best."
    },
    {
      type:  "code",
      value:
`# First code example
example = "value"
print(example)`.trim()
    },
    {
      type:  "text",
      value: "Follow-up explanation that references what the code above demonstrated."
    },
    {
      type:  "code",
      value:
`# A second, more complete example
for i in range(3):
    print(i)`.trim()
    },
    {
      type:  "text",
      value: "Closing sentence that summarizes the concept and leads into the exercises."
    }
  ],

  exercises: [

    // ── Exercise 1: Reorder ──────────────────────────────────
    {
      id:     "lesson_N_ex_0",
      type:   "reorder",
      prompt: "Arrange these lines into the correct order.",
      lines: [
        `third_line = "c"`,   // index 0
        `first_line = "a"`,   // index 1
        `second_line = "b"`   // index 2
      ],
      correctOrder: [1, 2, 0],  // first_line, second_line, third_line
      xp: 10
    },

    // ── Exercise 2: Fill Blank ───────────────────────────────
    {
      id:       "lesson_N_ex_1",
      type:     "fill_blank",
      prompt:   "Fill in the blank to complete the statement.",
      template: `result = _____`,
      blanks:   ["42"],
      xp: 10
    },

    // ── Exercise 3: Code Editor ──────────────────────────────
    {
      id:   "lesson_N_ex_2",
      type: "code_editor",
      prompt: "Write a program that does X.\nRequirement 2.\nRequirement 3.",
      correctAnswer:
`your_answer = "here"
print(your_answer)`,
      xp: 20
    }

  ]
},
```

---

## Part 9 — Switching Languages or Courses

To deploy a completely different course (for example, JavaScript instead of Python):

1. Create a new file named `curriculum.js`.
2. Update `meta.language` to match the new language (e.g. `"JavaScript"`).
3. Update `meta.title` and `meta.subtitle`.
4. Write your lessons and exercises following this guide.
5. Replace the existing `curriculum.js` with your new file.

No other file in the project changes. The XP rank system, progress tracking, drag-and-drop exercises, cookie persistence, and all UI elements adapt automatically.

---

## Quick Reference Card

```
COURSE META
  meta.title       → Header, browser tab, login modal
  meta.subtitle    → Secondary header line
  meta.language    → Code block label

LESSON
  id               → Unique string  e.g. "lesson_1"
  title            → Sidebar + lesson header
  content[]        → Array of text/code blocks
  exercises[]      → Array of exercise objects

CONTENT BLOCK — TEXT
  { type: "text", value: "Plain prose here." }

CONTENT BLOCK — CODE
  { type: "code", value: `multiline code`.trim() }
  ↳ Always .trim(). Never innerHTML. Whitespace preserved exactly.

EXERCISE COMMON FIELDS
  id               → Globally unique  e.g. "lesson_1_ex_0"
  type             → "reorder" | "fill_blank" | "code_editor"
  prompt           → Instruction string  (\n for line breaks)
  xp               → Integer XP reward

REORDER
  lines[]          → Code line strings in any scrambled order
  correctOrder[]   → Correct sequence as 0-based indices into lines[]

FILL_BLANK
  template         → Code string with _____ (5 underscores) per blank
  blanks[]         → Exact correct answer per blank (left to right)

CODE_EDITOR
  correctAnswer    → Exact multiline string. No .trim(). Use \n endings.

GRADING (all types)
  Strict exact match. Case-sensitive. Whitespace-sensitive. No AI.
```

---

*Code Protocol Education Engine · curriculum.js Authoring Guide · v1.0*
