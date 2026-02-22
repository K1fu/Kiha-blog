# Curriculum Authoring Guide
## Code Protocol — Education Engine v1.0

---

## Overview

The engine is designed so that **instructors only ever touch one file: `curriculum.js`**. Everything else — the rendering, grading, XP system, cookie storage, and UI — runs automatically based on what you define there.

This guide explains every field, every rule, and every gotcha you need to know to write a complete, working curriculum from scratch. No programming experience beyond basic JavaScript object syntax is required.

---

## How to Deploy a New Curriculum

1. Make a copy of `curriculum.js` and rename it to describe your course (e.g., `curriculum-js-intro.js`).
2. Edit the contents following this guide.
3. In `index.html`, find the script tag that loads the curriculum and update the filename:

```html
<!-- Before -->
<script src="curriculum.js"></script>

<!-- After -->
<script src="curriculum-js-intro.js"></script>
```

That single change is all that's needed. `engine.js`, `ui.js`, `cookie.js`, and `index.html` remain untouched.

---

## File Structure

Every curriculum file must follow this exact shell. Do not rename `Curriculum`, do not remove the IIFE wrapper, and always return both `meta` and `lessons`.

```js
const Curriculum = (() => {

  const meta = {
    // ... course metadata
  };

  const lessons = [
    // ... lesson objects
  ];

  return { meta, lessons };

})();
```

---

## Section 1 — Course Metadata (`meta`)

The `meta` object appears at the top of your curriculum and controls what is displayed in the engine's header bar.

```js
const meta = {
  title:    "INTRO TO JAVASCRIPT",
  subtitle: "Semester 1 · Module B",
  language: "JavaScript"
};
```

| Field | Type | Required | Purpose |
|---|---|---|---|
| `title` | string | Yes | Displayed in the top-left header. Use all caps for the cyberpunk aesthetic. |
| `subtitle` | string | Yes | Displayed below the title in smaller text. Use it for semester/module info. |
| `language` | string | Yes | Shown in the label above every code block (e.g., `JAVASCRIPT`, `PYTHON`, `HTML`). |

**Rules:**
- All three fields are required. Omitting any will leave the header blank or break the display.
- `language` should match what students are actually typing — it's purely a display label.

---

## Section 2 — The Lessons Array (`lessons`)

`lessons` is an array of lesson objects. The engine renders them in the order they appear in this array. The sidebar navigation reflects this order.

```js
const lessons = [
  { /* lesson 1 */ },
  { /* lesson 2 */ },
  { /* lesson 3 */ }
];
```

There is no enforced limit on the number of lessons. Each lesson object has three top-level fields: `id`, `title`, `content`, and `exercises`.

---

## Section 3 — Lesson Object Structure

```js
{
  id:        "lesson_1",
  title:     "Your First Program",
  content:   [ /* content blocks */ ],
  exercises: [ /* exercise objects */ ]
}
```

| Field | Type | Required | Purpose |
|---|---|---|---|
| `id` | string | Yes | A unique identifier for this lesson. Used internally for state tracking. |
| `title` | string | Yes | Displayed as the lesson heading in both the sidebar and the main panel. |
| `content` | array | Yes | The instructional content of the lesson — text and code blocks in order. |
| `exercises` | array | Yes | The interactive challenges that appear below the content. |

**ID Rules:**
- Must be unique across the entire curriculum — no two lessons can share an ID.
- Use a consistent format: `lesson_1`, `lesson_2`, `lesson_3`, and so on.
- IDs are stored in cookies. If you rename an ID after students have started, their progress for that lesson will be lost.
- Stick to lowercase letters, numbers, and underscores. No spaces.

---

## Section 4 — Content Blocks

The `content` array is a sequence of blocks displayed in order, top to bottom, in the lesson's main reading area. There are two types: `text` and `code`.

### Text Block

Renders as a readable paragraph.

```js
{
  type: "text",
  value: "A variable is a named container that stores a value. Think of it as a labelled box."
}
```

| Field | Value |
|---|---|
| `type` | Must be the exact string `"text"` |
| `value` | Any string. Displayed as a paragraph. |

**Rules:**
- The `value` is rendered using `textContent`, so HTML tags will appear as literal characters — do not use HTML inside text blocks.
- Line breaks inside the string will be preserved visually if you use `\n`, but for multi-paragraph content it is better to use multiple separate text blocks.
- There is no length limit, but shorter, focused paragraphs are more readable for beginners.

### Code Block

Renders as a styled, copyable code snippet inside a framed terminal box.

```js
{
  type: "code",
  value:
`function greet(name) {
  console.log("Hello, " + name);
}
greet("World");`.trim()
}
```

| Field | Value |
|---|---|
| `type` | Must be the exact string `"code"` |
| `value` | A string containing the code. Always use a template literal and call `.trim()`. |

**The `.trim()` Rule — Critical:**

Always place your template literal on a new line after `value:` and call `.trim()` at the end. This removes the invisible leading newline that JavaScript adds when you open a template literal on a new line.

```js
// CORRECT — clean output, no leading blank line
value:
`print("Hello")`.trim()

// WRONG — produces a blank first line in the display
value: `
print("Hello")`

// ALSO WRONG — trim applied but structure misplaced
value: `print("Hello")`.trim()  // fine for one line, but breaks multiline indentation
```

**Indentation Rule:**

The engine preserves whitespace exactly as written. Your indentation inside the template literal is what the student sees. Write it exactly as a student should read it.

```js
// CORRECT — Python indentation preserved correctly
value:
`def greet(name):
    print("Hello,", name)

greet("World")`.trim()

// WRONG — the editor's own indentation bleeds into the output
value:
`def greet(name):
        print("Hello,", name)`.trim()
//      ↑ this extra indentation is visible in the code block
```

**Best practice:** After writing a code block, count the spaces on indented lines carefully. What you write is what the student reads.

---

## Section 5 — Exercise Objects

Each item in the `exercises` array is one challenge. All exercise objects share these common fields:

| Field | Type | Required | Purpose |
|---|---|---|---|
| `id` | string | Yes | Unique identifier. Used to track completion and award XP exactly once. |
| `type` | string | Yes | Determines which exercise widget is rendered. See types below. |
| `prompt` | string | Yes | The question or instruction shown to the student above the exercise. |
| `xp` | number | Yes | XP awarded when the student answers correctly. Whole numbers only. |

**Exercise ID Rules:**
- Must be unique across the **entire curriculum**, not just within a lesson.
- Recommended format: `lesson_1_ex_0`, `lesson_1_ex_1`, `lesson_2_ex_0`, etc.
- Same persistence warning as lesson IDs: renaming an ID after deployment erases completion history for that exercise.

**XP Guidance:**
- Easy / quick exercises: 10 XP
- Medium exercises: 15–20 XP
- Longer or harder exercises: 25–30 XP
- Students level up every 100 XP, so plan your XP totals per lesson accordingly.

---

## Section 6 — Exercise Type: `reorder`

Students drag lines into the correct order. This is the best exercise type for teaching sequence, syntax structure, and indentation order.

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

| Field | Type | Required | Details |
|---|---|---|---|
| `lines` | array of strings | Yes | The individual lines of code, in any scrambled order you choose. |
| `correctOrder` | array of numbers | Yes | The correct sequence expressed as original array indices. |

### Understanding `correctOrder`

`correctOrder` is the answer key. It answers the question: "Reading from top to bottom, which original line belongs in each position?"

Each number in `correctOrder` is the **index** (0-based position) of the line in your `lines` array that should appear at that display position.

**Example walkthrough:**

```js
lines: [
  `print("Goodbye!")`,    // index 0
  `print("Hello!")`,      // index 1
  `print("My name is Alex.")`  // index 2
]
```

The correct running order should be: Hello → Name → Goodbye.
That means position 0 should show index 1, position 1 should show index 2, position 2 should show index 0.

```js
correctOrder: [1, 2, 0]
//             ↑  ↑  ↑
//      pos 0  pos 1  pos 2
```

**Verification method:** Read `correctOrder` left to right. For each number, look up the line at that index in `lines`. The sequence of looked-up lines should read as a working program from top to bottom.

**Rules:**
- `correctOrder` must contain exactly as many numbers as there are entries in `lines`.
- Every index must appear exactly once — no duplicates, no gaps.
- The lines displayed to the student are always shuffled from their original order. The student sees them starting in the order they appear in your `lines` array, so arrange `lines` in a scrambled (wrong) order to make the exercise meaningful.

---

## Section 7 — Exercise Type: `fill_blank`

Students complete a line of code by typing into one or more blank fields. Best for teaching syntax, keywords, and small precise values.

```js
{
  id:       "lesson_2_ex_1",
  type:     "fill_blank",
  prompt:   "Complete the assignment so the variable holds the integer 25.",
  template: `age = _____`,
  blanks:   ["25"],
  xp: 10
}
```

| Field | Type | Required | Details |
|---|---|---|---|
| `template` | string | Yes | The code line shown to the student. Use `_____` (five underscores) wherever a blank input should appear. |
| `blanks` | array of strings | Yes | The correct answer for each blank, in left-to-right order. |

### Multiple Blanks

You can have more than one blank in a single exercise. Place multiple `_____` markers in the template and provide the matching answers in `blanks` in the same left-to-right order.

```js
{
  id:       "lesson_3_ex_1",
  type:     "fill_blank",
  prompt:   "Fill in the function keyword and its name.",
  template: `_____ greet(_____):`,
  blanks:   ["def", "name"],
  xp: 15
}
```

**Grading rules — exact string matching:**
- The student's input is compared character-for-character against the corresponding entry in `blanks`.
- Case-sensitive: `"Print"` does not match `"print"`.
- Whitespace-sensitive: `" 25"` (with a leading space) does not match `"25"`.
- No trimming is applied to student input. If your answer is `"Hello"`, the student must type exactly `Hello` with no extra spaces.

**Design advice:**
- Keep blanks focused on the concept being tested. A blank that requires typing 30 characters becomes frustrating — use `code_editor` instead.
- Include the surrounding context in `template` so students can see exactly where the blank fits in.
- If the answer contains quotes, include them in the blank answer: `blanks: ['"Hello"']`.

---

## Section 8 — Exercise Type: `code_editor`

Students write one or more lines of code in a textarea. The best exercise type for open-ended writing practice, multi-line programs, and synthesizing multiple concepts.

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

| Field | Type | Required | Details |
|---|---|---|---|
| `correctAnswer` | string | Yes | The exact string the student must produce. Written as a template literal. Do NOT call `.trim()` here. |

### Writing `correctAnswer` — Critical Rules

The grader uses strict exact string comparison: `studentInput === correctAnswer`. This means every character must match, including newlines, spaces, and indentation.

```js
// CORRECT — template literal written flush left, no leading newline
correctAnswer:
`def square(n):
    print(n * n)

square(4)`,
```

Notice: no `.trim()` call here, unlike content code blocks. The reason is that when a student presses Enter in the textarea, they produce a `\n` character. The template literal above also starts with a newline only if you put one before the first line of code. The structure above — opening backtick, then immediately the first line of code — produces no leading newline and matches what a student would naturally type.

**The indentation trap:**

```js
// WRONG — the editor's indentation adds spaces to the correctAnswer
      correctAnswer:
      `def square(n):
          print(n * n)`,
//        ↑ these extra spaces are inside the string and will cause all students to fail
```

Always write the template literal content flush against the left margin of the file, regardless of where in the code you are.

**The newline trap:**

```js
// WRONG — extra blank line at the end means students must also press Enter one extra time
correctAnswer:
`print("Hello!")
print("Goodbye!")
`,  // ← trailing newline inside the backtick — students won't produce this
```

**Golden rule for `correctAnswer`:** Type the answer yourself in a plain text editor with no leading or trailing spaces, then copy it exactly into the template literal. What you type is what the student must type.

### Newlines in `prompt`

The `prompt` field supports `\n` for line breaks. This is useful for multi-step instructions:

```js
prompt: "Write a program that does the following:\n1. Assigns the value 10 to a variable called x\n2. Assigns the value 20 to a variable called y\n3. Prints their sum",
```

---

## Section 9 — Complete Lesson Template

Use this as a copy-paste starting point for every new lesson.

```js
{
  id: "lesson_N",
  title: "Lesson Title Here",

  content: [

    {
      type: "text",
      value: "Opening paragraph that introduces the concept. Keep it short and direct."
    },

    {
      type: "code",
      value:
`// First example — simple and clear
yourCodeHere();`.trim()
    },

    {
      type: "text",
      value: "Explain what the code above does, line by line if needed."
    },

    {
      type: "code",
      value:
`// Second example — builds on the first
moreComplexExample();
withMultipleLines();`.trim()
    },

    {
      type: "text",
      value: "Closing paragraph that sets up what the student will practice in exercises."
    }

  ],

  exercises: [

    // Exercise 1 — Reorder (easy warm-up)
    {
      id: "lesson_N_ex_0",
      type: "reorder",
      prompt: "Arrange the lines into the correct order.",
      lines: [
        `thirdLine();`,
        `firstLine();`,
        `secondLine();`
      ],
      correctOrder: [1, 2, 0],
      xp: 10
    },

    // Exercise 2 — Fill Blank (medium)
    {
      id: "lesson_N_ex_1",
      type: "fill_blank",
      prompt: "Complete the missing part.",
      template: `someFunction(_____)`,
      blanks: ["correctAnswer"],
      xp: 10
    },

    // Exercise 3 — Code Editor (harder synthesis)
    {
      id: "lesson_N_ex_2",
      type: "code_editor",
      prompt: "Write a complete program that does X.\nRemember: Y.",
      correctAnswer:
`firstLine();
secondLine();`,
      xp: 20
    }

  ]
},
```

---

## Section 10 — Common Mistakes Reference

| Mistake | Symptom | Fix |
|---|---|---|
| Duplicate lesson `id` | Second lesson's progress overwrites the first in cookies | Use unique IDs across all lessons |
| Duplicate exercise `id` | XP only awarded once across both exercises | Use unique IDs across the entire curriculum |
| `.trim()` on `correctAnswer` | Students cannot pass code_editor exercises | Remove `.trim()` from `correctAnswer` — only use it on content code blocks |
| Editor indentation inside template literal | Code blocks have unexpected leading spaces; correctAnswer never matches | Write template literal content flush to the left margin |
| Trailing newline in `correctAnswer` | Students pass correctly but then fail again after backspacing | Remove any blank line inside the closing backtick |
| Wrong `correctOrder` length | Reorder exercise always grades incorrect | `correctOrder` must have the same number of entries as `lines` |
| `correctOrder` index out of range | Exercise silently fails | Indices in `correctOrder` are 0-based and cannot exceed `lines.length - 1` |
| Missing `xp` field | Exercise awards 0 XP or crashes | Every exercise object must have an `xp` number field |
| HTML in text block `value` | Tags appear as literal `<b>` text on screen | Use plain text only in text blocks |
| Forgetting `return { meta, lessons }` | Engine loads with no course data | Always keep the return statement at the bottom of the IIFE |

---

## Section 11 — XP Planning Worksheet

Use this to plan XP distribution across a module so that students progress through levels at a satisfying pace.

| Guideline | Recommendation |
|---|---|
| XP per level | 100 XP |
| Target levels per semester | Instructor's choice — 5 to 10 levels is a good range |
| Easy exercise (reorder, fill_blank) | 10 XP |
| Medium exercise (fill_blank, 2+ blanks) | 15 XP |
| Hard exercise (code_editor) | 20–25 XP |
| Exercises per lesson | 2–4 |
| Typical XP per lesson | 30–50 XP |
| Lessons to reach level 5 | ~10 lessons at 50 XP each |

**Example planning calculation:**

- 12 lessons planned for the semester
- Each lesson has 1 reorder (10 XP) + 1 fill_blank (10 XP) + 1 code_editor (20 XP) = 40 XP per lesson
- Total semester XP: 12 × 40 = 480 XP = level 4 at completion

Adjust XP values on individual exercises to hit your target final level.

---

## Section 12 — Full Working Example

Below is a minimal but complete two-lesson curriculum for HTML, ready to drop in as a replacement for `curriculum.js`.

```js
const Curriculum = (() => {

  const meta = {
    title:    "INTRO TO HTML",
    subtitle: "Semester 1 · Module C",
    language: "HTML"
  };

  const lessons = [

    {
      id: "lesson_1",
      title: "Tags and Elements",
      content: [
        {
          type: "text",
          value: "HTML is the language of web pages. Everything you see in a browser is built from HTML elements. An element is made of an opening tag, some content, and a closing tag."
        },
        {
          type: "code",
          value:
`<p>This is a paragraph.</p>`.trim()
        },
        {
          type: "text",
          value: "The opening tag is <p> and the closing tag is </p>. The slash in the closing tag tells the browser where the element ends."
        },
        {
          type: "code",
          value:
`<h1>Page Title</h1>
<p>First paragraph.</p>
<p>Second paragraph.</p>`.trim()
        }
      ],
      exercises: [
        {
          id: "lesson_1_ex_0",
          type: "reorder",
          prompt: "Arrange the tags to produce a heading followed by a paragraph.",
          lines: [
            `<p>Some text.</p>`,
            `<h1>My Title</h1>`
          ],
          correctOrder: [1, 0],
          xp: 10
        },
        {
          id: "lesson_1_ex_1",
          type: "fill_blank",
          prompt: "Complete the closing tag for a paragraph element.",
          template: `<p>Hello!</_____>`,
          blanks: ["p"],
          xp: 10
        },
        {
          id: "lesson_1_ex_2",
          type: "code_editor",
          prompt: "Write an h1 element with the text: Welcome",
          correctAnswer:
`<h1>Welcome</h1>`,
          xp: 20
        }
      ]
    },

    {
      id: "lesson_2",
      title: "Links and Images",
      content: [
        {
          type: "text",
          value: "The anchor tag creates a hyperlink. The href attribute tells the browser where the link goes."
        },
        {
          type: "code",
          value:
`<a href="https://example.com">Click here</a>`.trim()
        },
        {
          type: "text",
          value: "Images use a self-closing tag. The src attribute is the image address, and alt provides a text description for accessibility."
        },
        {
          type: "code",
          value:
`<img src="photo.jpg" alt="A description of the photo">`.trim()
        }
      ],
      exercises: [
        {
          id: "lesson_2_ex_0",
          type: "fill_blank",
          prompt: "Complete the href attribute value to link to example.com.",
          template: `<a href="_____">Visit</a>`,
          blanks: ["https://example.com"],
          xp: 10
        },
        {
          id: "lesson_2_ex_1",
          type: "code_editor",
          prompt: "Write an image tag with src set to logo.png and alt set to: Site logo",
          correctAnswer:
`<img src="logo.png" alt="Site logo">`,
          xp: 20
        }
      ]
    }

  ];

  return { meta, lessons };

})();
```

---

*Code Protocol Education Engine — Curriculum Authoring Guide v1.0*
*Engine files: `index.html`, `engine.js`, `ui.js`, `cookie.js` — do not modify these when authoring curriculum.*
