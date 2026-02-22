/* ============================================================
   curriculum.js — Example Curriculum Definition
   ============================================================
   INSTRUCTIONS FOR INSTRUCTORS:
   - This file defines the language, course title, and lessons array.
   - Swap this file entirely to change the subject/language.
   - engine.js and ui.js never need to change.
   - All code trimming should be done HERE in the template literals.
   - correctAnswer for code_editor uses EXACT string matching.
   - correctOrder is a 0-indexed array of original line positions.
   ============================================================ */

const Curriculum = (() => {

  // ── Course Metadata ─────────────────────────────────────────
  const meta = {
    title:    "INTRO TO PYTHON",
    subtitle: "Semester 1 · Module A",
    language: "Python",

    // ── Home Page Content ──────────────────────────────────
    // Edit this block to customize what students see on the home screen.
    home: {
      welcome:     "Welcome to Intro to Python",
      tagline:     "Your entry point into the world of code. No experience needed.",
      description: "This course teaches you Python from the ground up. You will write real programs, solve exercises, and earn XP as you go. Each lesson builds on the last — by the end, you will be able to read, write, and understand Python code with confidence.",

      // Short highlights shown as a feature grid on the home page.
      // Keep each item to one concise sentence.
      features: [
        "Write and run Python programs from lesson one",
        "Learn variables, functions, loops, and more",
        "Earn XP and unlock ranks as you complete exercises",
        "Drag-and-drop, fill-in-the-blank, and free-code challenges",
        "All progress saved automatically in your browser",
        "No setup required — works entirely in the browser"
      ],

      // Optional prerequisite or notice shown at the bottom of the home page.
      // Set to null or "" to hide it.
      notice: "No prior programming experience required. All you need is a browser and curiosity."
    }
  };

  // ── Lesson Definitions ──────────────────────────────────────
  const lessons = [

    /* ────────────────────────────────────────────────────────
       LESSON 1 — Your First Program
    ──────────────────────────────────────────────────────── */
    {
      id: "lesson_1",
      title: "Your First Program",
      content: [
        {
          type: "text",
          value: "Welcome to programming! A program is a set of instructions that tells the computer what to do. In Python, the simplest thing you can do is display text on the screen using the print() function."
        },
        {
          type: "code",
          value:
`print("Hello, World!")`.trim()
        },
        {
          type: "text",
          value: "When Python runs this line, it reads the word print, finds the parentheses, and outputs whatever text is inside the quotes to the screen. The quotes tell Python that Hello, World! is text, not a command."
        },
        {
          type: "code",
          value:
`print("Hello, World!")
print("My name is Alex.")
print("I am learning Python.")`.trim()
        },
        {
          type: "text",
          value: "You can use as many print() calls as you like. Each one outputs a new line. Notice how the text inside the quotes appears exactly as written — spaces, punctuation, and all."
        }
      ],
      exercises: [
        {
          id: "lesson_1_ex_0",
          type: "reorder",
          prompt: "Arrange these lines so the program prints a greeting, then a name, then a farewell.",
          lines: [
            `print("Goodbye!")`,
            `print("Hello!")`,
            `print("My name is Alex.")`
          ],
          correctOrder: [1, 2, 0],
          xp: 10
        },
        {
          id: "lesson_1_ex_1",
          type: "fill_blank",
          prompt: "Complete the print statement to display the text: Hello, Python!",
          template: `print(_____)`,
          blanks: [`"Hello, Python!"`],
          xp: 10
        },
        {
          id: "lesson_1_ex_2",
          type: "code_editor",
          prompt: "Write a program that prints exactly two lines:\nLine 1: Hello!\nLine 2: I am learning Python.",
          correctAnswer:
`print("Hello!")
print("I am learning Python.")`,
          xp: 20
        }
      ]
    },

    /* ────────────────────────────────────────────────────────
       LESSON 2 — Variables and Data
    ──────────────────────────────────────────────────────── */
    {
      id: "lesson_2",
      title: "Variables and Data",
      content: [
        {
          type: "text",
          value: "A variable is a named container that stores a value. Think of it as a labelled box. You choose a name, use the equals sign (=) to assign a value, and Python remembers it for you."
        },
        {
          type: "code",
          value:
`name = "Jordan"
age  = 17
gpa  = 3.8`.trim()
        },
        {
          type: "text",
          value: "Python supports different types of data. Text is called a string and is wrapped in quotes. Whole numbers are integers. Numbers with decimal points are floats. True/False values are booleans."
        },
        {
          type: "code",
          value:
`# String — text in quotes
student_name = "Jordan"

# Integer — whole number
grade_level = 11

# Float — decimal number
gpa = 3.85

# Boolean — True or False
is_enrolled = True`.trim()
        },
        {
          type: "text",
          value: "Once you have a variable, you can use it anywhere you would use the value directly. You can also combine variables and text inside print() using a comma or an f-string."
        },
        {
          type: "code",
          value:
`name = "Jordan"
age  = 17

# Using a comma — adds a space automatically
print("Name:", name)

# Using an f-string — embed variables with {}
print(f"Hi, I am {name} and I am {age} years old.")`.trim()
        }
      ],
      exercises: [
        {
          id: "lesson_2_ex_0",
          type: "reorder",
          prompt: "Put these lines in order: first assign the variable, then print it.",
          lines: [
            `print(f"My city is {city}.")`,
            `city = "Manila"`
          ],
          correctOrder: [1, 0],
          xp: 10
        },
        {
          id: "lesson_2_ex_1",
          type: "fill_blank",
          prompt: "Fill in the blank so the variable stores the integer 25.",
          template: `age = _____`,
          blanks: ["25"],
          xp: 10
        },
        {
          id: "lesson_2_ex_2",
          type: "code_editor",
          prompt: "Write a program that:\n1. Creates a variable called language and assigns it the string \"Python\"\n2. Prints: I am learning Python\n\n(Use the variable, not the string directly in print.)",
          correctAnswer:
`language = "Python"
print("I am learning", language)`,
          xp: 20
        }
      ]
    },

    /* ────────────────────────────────────────────────────────
       LESSON 3 — Functions
    ──────────────────────────────────────────────────────── */
    {
      id: "lesson_3",
      title: "Writing Functions",
      content: [
        {
          type: "text",
          value: "A function is a reusable block of code with a name. Instead of writing the same instructions over and over, you define the instructions once and call the function whenever you need them."
        },
        {
          type: "code",
          value:
`def greet():
    print("Hello from the function!")

greet()`.trim()
        },
        {
          type: "text",
          value: "The keyword def starts the definition. After the function name comes a pair of parentheses and a colon. The body of the function is indented by four spaces — Python uses indentation to know what belongs inside the function."
        },
        {
          type: "code",
          value:
`def greet(name):
    print("Hello,", name)

greet("Alex")
greet("Jordan")`.trim()
        },
        {
          type: "text",
          value: "Parameters are variables listed in the parentheses. When you call the function and pass in a value (called an argument), the parameter holds that value for that call. This makes functions flexible and reusable."
        },
        {
          type: "code",
          value:
`def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(3, 5)
add(10, 20)`.trim()
        }
      ],
      exercises: [
        {
          id: "lesson_3_ex_0",
          type: "reorder",
          prompt: "Arrange the lines to correctly define and then call a greet function.",
          lines: [
            `greet("Sam")`,
            `def greet(name):`,
            `    print("Hello,", name)`
          ],
          correctOrder: [1, 2, 0],
          xp: 10
        },
        {
          id: "lesson_3_ex_1",
          type: "fill_blank",
          prompt: "Fill in the blank to complete the function definition keyword.",
          template: `_____ say_hi():`,
          blanks: ["def"],
          xp: 10
        },
        {
          id: "lesson_3_ex_2",
          type: "code_editor",
          prompt: "Write a function called square that takes one parameter n and prints n times n. Then call it with the value 4.",
          correctAnswer:
`def square(n):
    print(n * n)

square(4)`,
          xp: 20
        }
      ]
    }

  ]; // end lessons

  // Public API
  return { meta, lessons };

})();
