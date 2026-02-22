# curriculum.js — Instructor Authoring Guide

**Code Protocol Education Engine · v2.0**

---

## Overview

`curriculum.js` is the **only file you ever edit** to build a course. The engine, UI, sound system, XP rankings, progress tracking, cookie storage, and all other files are language-agnostic and never need to change. Swap this one file and the entire system reconfigures itself — new course title, new language, new lessons, new home page, and a recalibrated XP rank ladder.

This guide documents every field the engine reads from `curriculum.js`, why it exists, and exactly how to write it correctly.

---

## File Structure at a Glance

```js
const Curriculum = (() => {

  const meta = {
    title:    "COURSE TITLE",
    subtitle: "Semester X · Module Y",
    language: "Language Name",

    home: {
      welcome:     "Welcome heading text",
      tagline:     "Short punchy subheading",
      description: "One paragraph course description.",
      features: [
        "Feature one",
        "Feature two",
      ],
      notice: "Optional notice at the bottom, or null to hide."
    }
  };

  const lessons = [
    {
      id:        "lesson_1",
      title:     "Lesson Title",
      content:   [ /* content blocks */ ],
      exercises: [ /* exercise objects */ ]
    },
    // more lessons...
  ];

  return { meta, lessons };

})();
```

The file wraps everything in an immediately invoked function expression (IIFE) and returns a `Curriculum` object with exactly two properties: `meta` and `lessons`. The engine reads only these two — nothing else in the file is exposed.

---

## Part 1 — Course Metadata (`meta`)

The `meta` object has two categories of fields: basic course identity fields and the `home` sub-object that controls the home page students see when they first log in.

---

### 1.1 Basic Identity Fields

```js
const meta = {
  title:    "INTRO TO PYTHON",       // Header bar, browser tab, login modal
  subtitle: "Semester 1 · Module A", // Below title in header
  language: "Python"                 // Label on every code block
};
```

| Field | Required | Where it appears |
|---|---|---|
| `title` | Yes | Header bar, browser tab title, login modal logo |
| `subtitle` | No | Secondary line below title in the header bar |
| `language` | No | Label on every code block throughout all lessons |

---

### 1.2 Home Page Object (`meta.home`)

The `home` object controls the course landing page that students see immediately after logging in. Every field is optional — the engine falls back gracefully if any field is missing or `null` — but filling them out gives students context before they begin.

```js
home: {
  welcome:     "Welcome to Intro to Python",
  tagline:     "Your entry point into the world of code. No experience needed.",
  description: "This course teaches you Python from the ground up. You will write real programs, solve exercises, and earn XP as you go. Each lesson builds on the last.",

  features: [
    "Write and run Python programs from lesson one",
    "Learn variables, functions, loops, and more",
    "Earn XP and unlock ranks as you complete exercises",
    "Drag-and-drop, fill-in-the-blank, and free-code challenges",
    "All progress saved automatically in your browser",
    "No setup required — works entirely in the browser"
  ],

  notice: "No prior programming experience required. All you need is a browser and curiosity."
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `welcome` | string | No | Large H1 heading at the top of the home page. Falls back to `meta.title` if absent. |
| `tagline` | string | No | Short monospace subheading rendered below the welcome heading. Keep to one sentence. |
| `description` | string | No | A paragraph of plain text describing the course. Rendered as a normal paragraph below the tagline. |
| `features` | string[] | No | Array of short bullet points rendered as a grid of feature cards. Each string becomes one card. |
| `notice` | string or null | No | A notice block rendered at the bottom of the home page (yellow warning icon). Set to `null` or `""` to hide it entirely. |

**How the home page uses these fields:**

The engine automatically generates the rest of the home page — you do not configure it. This includes the lesson overview cards (with per-lesson progress bars, exercise counts, XP values, and START/RESUME buttons), the course-wide totals bar (total lessons · total exercises · total XP), and the CTA button (automatically reads `▶ START LEARNING` for new students, `▶ CONTINUE LEARNING` for returning ones). All of that is derived from your `lessons` array at runtime.

**Changing the home page CTA destination:**

The CTA button always sends the student to their last saved lesson, or to lesson 1 if they are new. This behavior is automatic and requires no configuration.

---

## Part 2 — Lessons Array (`lessons`)

Each object in the `lessons` array defines one lesson. Lessons appear in the sidebar and home page overview in the **order they are defined here**.

```js
{
  id:        "lesson_1",            // Unique string identifier
  title:     "Your First Program",  // Sidebar label and lesson header
  content:   [ /* content blocks */ ],
  exercises: [ /* exercise objects */ ]
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | Must be unique across all lessons. Convention: `lesson_1`, `lesson_2`, etc. No spaces. |
| `title` | string | Yes | Displayed in the sidebar nav, lesson header, home page overview, and lesson-complete banner. |
| `content` | array | Yes | Ordered list of instructional content blocks. Can be `[]` for exercise-only lessons. |
| `exercises` | array | Yes | Ordered list of exercise objects. Can be `[]` for reading-only lessons. |

---

## Part 3 — Content Blocks

Content blocks are the instructional material — text and code — displayed above the exercises in reading order. They are rendered exactly in the order defined in the `content` array.

There are two block types: `"text"` and `"code"`.

---

### 3.1 Text Block

```js
{
  type:  "text",
  value: "A variable is a named container that stores a value."
}
```

Rendered as a standard paragraph. The `value` is injected using `textContent`, so no HTML is parsed — angle brackets, ampersands, and quotes are all safe and will display literally. Do not use HTML tags inside text blocks.

---

### 3.2 Code Block

```js
{
  type:  "code",
  value:
`name = "Jordan"
age  = 17
gpa  = 3.8`.trim()
}
```

Rendered inside a `<pre><code>` block with a language label badge (from `meta.language`) and a copy-to-clipboard button. Every character is injected using `textContent` — whitespace, indentation, and line breaks are preserved **exactly as written in the source file**.

**The `.trim()` rule:**

Template literals in JavaScript include a newline immediately after the opening backtick when you start the content on the next line. Without `.trim()`, the rendered code block will begin with a blank first line. Always call `.trim()` at the end of every code block value.

```js
// ✓ Correct — starts the content on the next line, trims the opening newline
{
  type: "code",
  value:
`def greet(name):
    print("Hello,", name)

greet("Alex")`.trim()
}

// ✗ Wrong — content starts on the same line as the backtick,
//            which breaks indentation for all subsequent lines
{
  type: "code",
  value: `def greet(name):
    print("Hello,", name)`
}

// ✗ Wrong — missing .trim(), first line of the rendered block will be blank
{
  type: "code",
  value:
`def greet(name):
    print("Hello,", name)`
}
```

**Important:** `.trim()` is for content blocks only. Do **not** use `.trim()` on `correctAnswer` in exercises (see Part 4.3).

---

## Part 4 — Exercises

Exercises appear below the lesson content. They are rendered in the order defined in the `exercises` array. Three types are supported: `reorder`, `fill_blank`, and `code_editor`.

Every exercise, regardless of type, requires these four fields:

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | Globally unique across **all** exercises in **all** lessons. See Part 6 for naming conventions. |
| `type` | string | Yes | `"reorder"`, `"fill_blank"`, or `"code_editor"` |
| `prompt` | string | Yes | The question or instruction shown to the student above the interactive element. Use `\n` for line breaks. |
| `xp` | number | Yes | XP awarded on the student's first correct submission. Not awarded again on repeat attempts. |

---

### 4.1 `reorder` — Drag-and-Drop Line Ordering

Students arrange scrambled lines of code into the correct order using drag-and-drop or up/down arrow buttons.

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

**Additional fields:**

| Field | Type | Required | Description |
|---|---|---|---|
| `lines` | string[] | Yes | The code lines, written in any order (scrambled is fine — students will reorder them). |
| `correctOrder` | number[] | Yes | The correct reading sequence expressed as 0-based indices into `lines[]`. |

---

**Understanding `correctOrder` — the most important concept in `reorder`:**

`correctOrder` does not mean "the correct order of the lines as you want them". It means "the index of the item from `lines[]` that should appear at each position."

Given this `lines` array:

```
lines[0] → print("Goodbye!")
lines[1] → print("Hello!")
lines[2] → print("My name is Alex.")
```

The correct program is: Hello → Name → Goodbye. So:

- Position 0 of the correct program = `print("Hello!")` = **index 1** in `lines[]`
- Position 1 of the correct program = `print("My name is Alex.")` = **index 2** in `lines[]`
- Position 2 of the correct program = `print("Goodbye!")` = **index 0** in `lines[]`

Therefore: `correctOrder: [1, 2, 0]`

**Step-by-step method for any reorder exercise:**

1. Write your `lines` array in any scrambled order.
2. Mentally read the lines in their correct program order.
3. For each step of the correct program, find that line in your `lines` array and write down its index.
4. The list of those indices, in order, is your `correctOrder`.

**Verification checklist:**
- `lines.length` must equal `correctOrder.length`
- Every index 0 through `lines.length - 1` must appear exactly once in `correctOrder`
- No duplicates, no gaps

```js
// ✓ Correct — three lines, three indices, each used exactly once
lines:        ["C", "A", "B"],  // index: 0   1   2
correctOrder: [1, 2, 0]         // means: A first, B second, C third

// ✗ Wrong — index 0 appears twice, index 2 missing
correctOrder: [1, 0, 0]

// ✗ Wrong — only two entries for three lines
correctOrder: [1, 2]
```

---

### 4.2 `fill_blank` — Fill in the Blanks

Students type the missing values into one or more blanks within a line of code.

```js
{
  id:       "lesson_1_ex_1",
  type:     "fill_blank",
  prompt:   "Complete the print statement to display: Hello, Python!",
  template: `print(_____)`,
  blanks:   [`"Hello, Python!"`],
  xp: 10
}
```

**Additional fields:**

| Field | Type | Required | Description |
|---|---|---|---|
| `template` | string | Yes | The code line with `_____` (exactly five underscores) in place of each blank. |
| `blanks` | string[] | Yes | The exact correct answer for each blank, in left-to-right order. |

**Multiple blanks:**

Place one `_____` per blank in `template`. The number of `_____` markers must equal the length of `blanks`.

```js
{
  id:       "lesson_2_ex_multi",
  type:     "fill_blank",
  prompt:   "Fill in both blanks to complete the assignments.",
  template: `x = _____\ny = _____`,
  blanks:   ["10", "20"],
  xp: 15
}
```

**Grading is strictly exact:**

- Case-sensitive: `"Hello"` ≠ `"hello"`
- Whitespace-sensitive: `"Jordan "` ≠ `"Jordan"` (trailing space fails)
- No trimming applied — what the student types is compared directly

**Write your prompt to eliminate ambiguity.** If the correct answer requires quotes, tell students to include the quotes:

```
// ✓ Clear
"Type the string value including its surrounding quote characters."

// ✗ Ambiguous
"Enter the name."
```

---

### 4.3 `code_editor` — Free-Form Code Writing

Students write one or more lines of code into a textarea. This is the most open-ended exercise type and the most demanding on the grader.

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

**Additional field:**

| Field | Type | Required | Description |
|---|---|---|---|
| `correctAnswer` | string | Yes | The exact string the student must submit to pass. No processing is applied. |

---

**Grading is strictly exact — no exceptions:**

The engine runs a single comparison: `studentInput === correctAnswer`. There is no trimming, no normalization, no fuzzy matching, and no AI.

- Case-sensitive: `Print` ≠ `print`
- Whitespace-sensitive: a trailing space anywhere causes failure
- Indentation-sensitive: 4 spaces ≠ 1 tab
- Line-ending-sensitive: always write `correctAnswer` with Unix line endings (`\n`). Avoid copying from Windows editors that use `\r\n`.
- No partial credit

**The `.trim()` rule for `correctAnswer` — the opposite of content blocks:**

Do **not** call `.trim()` on `correctAnswer`. The raw template literal value is the grading target. Adding `.trim()` strips the string in a way that is invisible in the source but can silently cause correct-looking answers to fail.

```js
// ✓ Correct — template literal, no .trim()
correctAnswer:
`def square(n):
    print(n * n)

square(4)`,

// ✗ Wrong — .trim() modifies the target string invisibly
correctAnswer:
`def square(n):
    print(n * n)

square(4)`.trim(),
```

**Writing good prompts for `code_editor`:**

Because grading is exact, the prompt must describe every constraint the student's answer will be tested against. Use `\n` to create line breaks in the displayed prompt:

```js
prompt: "Write a function called square that takes one parameter n and prints n times n.\nThen call it with the value 4.\nUse 4 spaces for indentation."
```

If indentation matters (it always does in Python), say so explicitly. If blank lines between function definition and call matter, say so. Leave nothing to interpretation.

---

## Part 5 — XP Design

XP serves two purposes: rewarding students per exercise, and calibrating the rank ladder. The rank system computes `maxPossibleXP` dynamically by summing every `xp` value in every exercise across all lessons. You never configure the rank system directly — your XP values determine everything.

**Recommended values:**

| Exercise type | Suggested XP | Rationale |
|---|---|---|
| `reorder` | 10 | Recognition and ordering — lower cognitive load |
| `fill_blank` (1 blank) | 10 | Recall with context |
| `fill_blank` (2+ blanks) | 15 | Slightly more recall required |
| `code_editor` (1–3 lines) | 20 | Active synthesis from memory |
| `code_editor` (4–8 lines) | 30 | Moderate program construction |
| `code_editor` (full program) | 40–50 | Complex logic, high effort |

Keep XP proportional to difficulty. A `reorder` should never be worth more than a `code_editor`. Keep values consistent across equivalent exercises so students feel progress is earned fairly.

**The rank ladder and your XP total:**

The 21 ranks (Glitch → King of the Grid) are mapped to percentage bands of `maxPossibleXP`. A student who earns 20% of the total available XP reaches the "Runner" rank, 50% reaches "Chrome Fang", and 100% reaches "King of the Grid". This scales automatically — if you add or remove exercises, the bands recalibrate to match your new total.

---

## Part 6 — ID Naming Conventions

IDs are stored in the student's browser cookie. The engine searches the full list of completed exercise IDs globally to determine which exercises are done — there is no per-lesson scope.

**Lesson IDs** — use `lesson_` followed by a number:

```
lesson_1, lesson_2, lesson_3, ...
```

**Exercise IDs** — use the lesson ID as a prefix, then `_ex_` and a zero-based index:

```
lesson_1_ex_0   ← Lesson 1, first exercise
lesson_1_ex_1   ← Lesson 1, second exercise
lesson_2_ex_0   ← Lesson 2, first exercise
```

**Never reuse an ID after deleting an exercise.** If a student completed exercise `lesson_2_ex_1` and you later delete it and create a new exercise with the same ID, the engine will mark the new exercise as already completed for that student without them ever having done it. Always increment the index for new exercises.

---

## Part 7 — Complete Lesson Template

Copy and adapt this skeleton when writing a new lesson:

```js
{
  id:    "lesson_N",
  title: "Lesson Title Here",

  content: [

    // ── Opening paragraph ────────────────────────────────────
    {
      type:  "text",
      value: "Opening explanation. One concept per paragraph. Plain prose, no HTML."
    },

    // ── First code example ───────────────────────────────────
    {
      type:  "code",
      value:
`# Minimal example of the concept
result = 1 + 2
print(result)`.trim()
    },

    // ── Follow-up paragraph ──────────────────────────────────
    {
      type:  "text",
      value: "Explanation of what the code above demonstrates."
    },

    // ── Second, more complete example ────────────────────────
    {
      type:  "code",
      value:
`# A more realistic use case
for i in range(5):
    print(i)`.trim()
    },

    // ── Closing paragraph ────────────────────────────────────
    {
      type:  "text",
      value: "Summary sentence. Connects what was learned to the exercises below."
    }

  ],

  exercises: [

    // ── Exercise 1 — Reorder ─────────────────────────────────
    {
      id:     "lesson_N_ex_0",
      type:   "reorder",
      prompt: "Arrange these lines into the correct order.",
      lines: [
        `third = "c"`,    // index 0
        `first = "a"`,    // index 1
        `second = "b"`    // index 2
      ],
      // Correct program: first → second → third
      // = index 1, index 2, index 0
      correctOrder: [1, 2, 0],
      xp: 10
    },

    // ── Exercise 2 — Fill Blank ──────────────────────────────
    {
      id:       "lesson_N_ex_1",
      type:     "fill_blank",
      prompt:   "Fill in the blank to complete the statement.",
      template: `result = _____`,
      blanks:   ["42"],
      xp: 10
    },

    // ── Exercise 3 — Code Editor ─────────────────────────────
    {
      id:   "lesson_N_ex_2",
      type: "code_editor",
      prompt: "Write a program that does X.\nConstraint 1.\nConstraint 2.",
      correctAnswer:
`your_answer = "here"
print(your_answer)`,
      xp: 20
    }

  ]
},
```

---

## Part 8 — Common Mistakes

### Mistake 1: Missing `.trim()` on a code block

The template literal starts with a newline after the opening backtick. Without `.trim()`, the rendered code block has a blank first line.

```js
// ✗ Wrong — first rendered line is blank
{ type: "code", value:
`print("hello")` }

// ✓ Correct
{ type: "code", value:
`print("hello")`.trim() }
```

### Mistake 2: Using `.trim()` on `correctAnswer`

Opposite of the above. `.trim()` invisibly alters the grading target.

```js
// ✗ Wrong — trim() silently changes what students must match
correctAnswer: `print("hello")`.trim()

// ✓ Correct — no .trim()
correctAnswer:
`print("hello")`
```

### Mistake 3: Miscounting `correctOrder` indices

The most frequent logic error. Always trace each index back to the line it represents.

```js
lines: [
  `print("B")`,  // 0
  `print("A")`,  // 1
  `print("C")`   // 2
]
// Correct program: A, B, C = indices 1, 0, 2
correctOrder: [1, 0, 2]  // ✓

correctOrder: [0, 1, 2]  // ✗ — prints B, A, C
correctOrder: [1, 2]     // ✗ — wrong length
```

### Mistake 4: Duplicate exercise IDs

```js
{ id: "lesson_1_ex_1", ... }
{ id: "lesson_1_ex_1", ... }  // ✗ — second exercise will appear pre-completed
```

### Mistake 5: Blank count mismatch in `fill_blank`

```js
template: `x = _____; y = _____`,  // two blanks
blanks:   ["10"]                    // ✗ — only one answer, engine reads both
blanks:   ["10", "20"]             // ✓
```

### Mistake 6: Windows line endings in `correctAnswer`

Pasting code from a Windows environment can introduce `\r\n` line endings. The student's browser sends `\n`. The strings look identical but fail comparison. Write `correctAnswer` directly in the source file.

### Mistake 7: Starting a template literal mid-line

```js
// ✗ Wrong — indentation of subsequent lines is destroyed
value: `def f():
    print("hi")`

// ✓ Correct — content starts on the next line at column 0
value:
`def f():
    print("hi")`.trim()
```

---

## Part 9 — Switching Courses

To deploy a completely different course:

1. Create a new file named `curriculum.js`.
2. Change `meta.title`, `meta.subtitle`, and `meta.language`.
3. Write new content for `meta.home`.
4. Write your lessons and exercises following this guide.
5. Replace the existing `curriculum.js` with the new file.

No other file changes. The home page, sidebar, XP rank system, progress tracking, profile panel, lesson complete banners, and all cookie keys adapt automatically.

---

## Quick Reference Card

```
META
  meta.title               → Header, tab, login modal
  meta.subtitle            → Secondary header line
  meta.language            → Code block label

  meta.home.welcome        → Home page H1 heading
  meta.home.tagline        → Monospace subheading
  meta.home.description    → Paragraph below tagline
  meta.home.features[]     → Array of feature card strings
  meta.home.notice         → Notice at page bottom, or null to hide

LESSON
  id                       → Unique string, e.g. "lesson_1"
  title                    → Sidebar + lesson header + home overview
  content[]                → Ordered array of text/code blocks
  exercises[]              → Ordered array of exercise objects

CONTENT BLOCK — TEXT
  { type: "text", value: "Plain prose." }
  → No HTML. Exact display. textContent only.

CONTENT BLOCK — CODE
  { type: "code", value: `multiline code`.trim() }
  → Always .trim(). Whitespace preserved exactly. textContent only.

EXERCISE — COMMON FIELDS
  id          → Globally unique across all lessons, e.g. "lesson_1_ex_0"
  type        → "reorder" | "fill_blank" | "code_editor"
  prompt      → Instruction string. \n for line breaks.
  xp          → Integer XP reward on first correct submission.

EXERCISE — REORDER
  lines[]         → Code line strings in any order
  correctOrder[]  → Indices from lines[] in the correct reading sequence
                    length must equal lines.length, all indices used once

EXERCISE — FILL_BLANK
  template        → Code string with _____ (5 underscores) per blank
  blanks[]        → Exact correct answer per blank, left to right
                    count of _____ must equal blanks.length

EXERCISE — CODE_EDITOR
  correctAnswer   → Exact multiline string. No .trim(). Unix \n endings.

GRADING RULES (all types)
  Strict === comparison. Case-sensitive. Whitespace-sensitive. No AI.

XP SYSTEM
  maxPossibleXP = sum of all exercise xp values in curriculum
  Rank bands are % of maxPossibleXP — auto-recalibrate when you edit

IDs
  Lesson:   lesson_1, lesson_2, ...
  Exercise: lesson_1_ex_0, lesson_1_ex_1, lesson_2_ex_0, ...
  Never reuse IDs after deletion.
```

---

*Code Protocol Education Engine · curriculum.js Authoring Guide · v2.0*
