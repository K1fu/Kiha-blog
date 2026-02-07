const quizData = {
    // Fill-in-the-Blank questions (35)
    fillInTheBlank: [
        {
            question: "In Java, the standard output device, by default, is the ___.",
            blankWord: "computer monitor",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "A Java statement is terminated with a ___.",
            blankWord: "semicolon",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ statement in Java outputs the string within double quotation marks to the screen without moving the cursor to a new line.",
            blankWord: "System.out.print",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ class in Java is used to read input from the keyboard.",
            blankWord: "Scanner",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `nextLine()` method of the `Scanner` class reads an entire line of text of type ___.",
            blankWord: "String",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "A program must perform or produce any type of ___ to be considered useful.",
            blankWord: "output",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `next()` method of the `Scanner` class reads a ___ of a String type that ends before a space.",
            blankWord: "word",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "An output message that helps the user understand what input is expected is referred to as a ___.",
            blankWord: "prompt",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "Java uses ___ to refer to the console output.",
            blankWord: "System.out",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `nextInt()` method of the `Scanner` class is used to read an input value of type ___.",
            blankWord: "int",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "___ statements are decision-making statements that include `if`, `if-else`, and `switch`.",
            blankWord: "Selection",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The execution order of a program is based on supplied data values and the ___ logic.",
            blankWord: "conditional",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `switch` statement can test for equality between a variable and a set of ___.",
            blankWord: "constants",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "A set of statements between two curly braces (`{ }`) is called a ___.",
            blankWord: "block",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ block is executed whenever the `if` statement evaluates to a false outcome.",
            blankWord: "else",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ loop executes a block of statements as long as the boolean expression is true.",
            blankWord: "while",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ control structure is used to execute a block of statements repeatedly.",
            blankWord: "Repetition",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ statement in a loop immediately skips the remaining statements in its current iteration and resumes with the next iteration.",
            blankWord: "continue",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ loop always executes its statements at least once before checking the condition.",
            blankWord: "do-while",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "In a `for` loop, the ___ expression is executed at the end of each iteration.",
            blankWord: "update",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ statement can be used within a `switch` block to transfer control to the statement following the `switch` block.",
            blankWord: "break",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `return` statement transfers the control to the ___ of the method.",
            blankWord: "caller",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `return;` form of the return statement is used when a method is declared with a ___ return type.",
            blankWord: "void",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `switch` statement requires a ___ statement to prevent fall-through to the next case.",
            blankWord: "break",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `while` loop is classified as a ___ loop because the condition is checked before the loop body executes.",
            blankWord: "pretest",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `for` loop is most suitable when the number of ___ is known beforehand.",
            blankWord: "iterations",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `do-while` loop is classified as a ___ loop because the condition is checked after the loop body executes.",
            blankWord: "posttest",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `break` and `continue` keywords fall under the category of ___ control statements.",
            blankWord: "Branching",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `System.out.print()` statement does not insert a ___ character after its output.",
            blankWord: "newline",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `Scanner` method `nextDouble()` is used to read an input value of type ___.",
            blankWord: "double",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The term used to describe the flow of execution in a program based on supplied data and conditional logic is ___ structures.",
            blankWord: "Control",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `if` decision construct is followed by a ___ expression wherein data is compared.",
            blankWord: "logical",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `switch` statement includes a ___ label to handle values that do not match any of the defined cases.",
            blankWord: "default",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `return expression;` form of the return statement returns the value evaluated from the ___.",
            blankWord: "expression",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The `continue` statement skips the statements written after it and resumes the ___ iteration of the loop.",
            blankWord: "next",
            scoreValue: 2,
            type: "fillInTheBlank"
        }
    ],

    // Multiple Choice questions (42)
    multipleChoice: [
        {
            question: "Which Java statement is commonly used for standard console output and automatically adds a newline character?",
            options: ["System.out.print()", "Console.write()", "System.out.newLine()", "System.out.println()"],
            answer: "System.out.println()",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary purpose of the 'Hello World!' program for a beginner learning a new programming language?",
            options: [
                "To demonstrate complex variable declarations.",
                "To ensure the compiler and basic program structure are working correctly.",
                "To showcase advanced input handling.",
                "To print the current system time."
            ],
            answer: "To ensure the compiler and basic program structure are working correctly.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What must terminate every Java statement?",
            options: ["Colon (:)", "Comma (,)", "Semicolon (;)", "Period (.)"],
            answer: "Semicolon (;)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What Java class must be imported from `java.util` to handle user input from the keyboard?",
            options: ["java.io.Input", "java.lang.Keyboard", "java.util.Scanner", "java.console.Read"],
            answer: "java.util.Scanner",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `nextInt()` method of the `Scanner` class is used to read which type of input?",
            options: ["String", "double", "boolean", "int"],
            answer: "int",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If a user wants to read a full line of text, including spaces, which `Scanner` method should be used?",
            options: ["next()", "nextLine()", "nextWord()", "nextDouble()"],
            answer: "nextLine()",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term describes the output message intended to help the user understand what is expected to be entered in an input process?",
            options: ["Log", "Feedback", "Prompt", "Trace"],
            answer: "Prompt",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which `Scanner` method reads a word of String type that terminates *before* a space?",
            options: ["nextLine()", "nextString()", "next()", "nextWord()"],
            answer: "next()",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does the term 'Input' primarily refer to in programming?",
            options: [
                "Data processed by the software.",
                "The final working application.",
                "The process of entering data into software through various means like typed text or mouse commands.",
                "Messages sent to the console."
            ],
            answer: "The process of entering data into software through various means like typed text or mouse commands.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of control statement is the `switch` statement categorized as?",
            options: ["Repetition", "Branching", "Selection", "Iteration"],
            answer: "Selection",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `if` decision construct is followed by which type of expression?",
            options: ["Arithmetic", "Logical", "Assignment", "Declarative"],
            answer: "Logical",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which statement is an extension of the `if` statement that provides an alternative action for a false outcome?",
            options: ["switch", "else", "break", "continue"],
            answer: "else",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the set of statements between two curly braces (`{, }`) called?",
            options: ["Structure", "Component", "Block", "Segment"],
            answer: "Block",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which control structure is used to execute a block of statements repeatedly, based on a condition?",
            options: ["Selection", "Branching", "Repetition", "Declaration"],
            answer: "Repetition",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the structure of a `for` loop, which part is executed only once, at the beginning of the loop?",
            options: ["Condition/Boolean Expression", "Update/Increment Expression", "Initialization Expression", "Loop Body"],
            answer: "Initialization Expression",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A `while` loop checks the boolean expression for the first time:",
            options: ["After the loop body executes.", "After the update expression.", "Before the loop body executes.", "Only after the loop body has completed one full cycle."],
            answer: "Before the loop body executes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What guarantees that the `do-while` loop will execute its body at least once?",
            options: [
                "The condition is checked first.",
                "The condition is checked at the end of the loop.",
                "It does not require an initialization expression.",
                "It only works with arrays."
            ],
            answer: "The condition is checked at the end of the loop.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which statement is used within a loop to immediately exit the loop entirely?",
            options: ["return", "continue", "exit", "break"],
            answer: "break",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `continue` statement performs which action in a loop?",
            options: [
                "Exits the loop entirely.",
                "Terminates the program execution.",
                "Skips the remaining statements in the current iteration and starts the next iteration.",
                "Restarts the loop from the beginning."
            ],
            answer: "Skips the remaining statements in the current iteration and starts the next iteration.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of the `return` statement in a method?",
            options: [
                "To print a value to the console.",
                "To transfer control back to the caller of the method.",
                "To declare a new variable.",
                "To repeat the method execution."
            ],
            answer: "To transfer control back to the caller of the method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If a method is declared with a `void` return type, which form of the `return` statement should be used if a value is not being returned?",
            options: ["return value;", "return;", "return null;", "return 0;"],
            answer: "return;",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In a `switch` statement, what is the role of the `default` label?",
            options: [
                "It is mandatory and executes regardless of the matching case.",
                "It handles the scenario where none of the `case` constants match the variable.",
                "It is used to initialize the switch variable.",
                "It prevents the switch block from falling through."
            ],
            answer: "It handles the scenario where none of the `case` constants match the variable.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of control statement includes `break` and `continue`?",
            options: ["Selection", "Repetition", "Branching", "Iteration"],
            answer: "Branching",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is one main difference between `System.out.println()` and `System.out.print()`?",
            options: [
                "`println()` outputs to a file, while `print()` outputs to the console.",
                "`println()` accepts a single argument, while `print()` accepts multiple.",
                "`println()` automatically moves the cursor to the next line after outputting.",
                "`print()` is used only for String data, while `println()` is for all data types."
            ],
            answer: "`println()` automatically moves the cursor to the next line after outputting.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When using the `Scanner` class, how do you correctly pass the standard input stream?",
            options: ["new Scanner(System.out)", "new Scanner(keyboard)", "new Scanner(System.in)", "new Scanner(console)"],
            answer: "new Scanner(System.in)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `switch` statement in Java can test for equality between a variable and a set of:",
            options: ["Runtime variables", "Boolean expressions", "Constants", "Methods"],
            answer: "Constants",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `for` loop combines three essential expressions into a single line. Which is *not* one of the three core expressions?",
            options: ["Initialization expression", "Condition expression", "Declaration of the loop variable's type", "Update expression"],
            answer: "Declaration of the loop variable's type",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Consider the following code snippet. What is the value of `x` after the code executes? `int x = 5; if (x < 3) { x = x + 1; } else if (x < 10) { x = x * 2; } else { x = 0; }`",
            options: ["5", "6", "10", "0"],
            answer: "10",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If the `return` statement is used in the form `return expression;`, the returned value type must:",
            options: ["Be a `String`.", "Be a `void` type.", "Match the return type declared in the method signature.", "Be an `int`."],
            answer: "Match the return type declared in the method signature.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the process of entering data into software through various types of files, typed text, or mouse commands?",
            options: ["Processing", "Output", "Compilation", "Input"],
            answer: "Input",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What control structure is utilized when a program executes instructions in a continuous loop until a specific boolean condition becomes false?",
            options: ["Selection", "Branching", "Repetition", "Logic Flow"],
            answer: "Repetition",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which loop structure is ideal when the exact number of times a block of code needs to run is known prior to execution?",
            options: ["while loop", "do-while loop", "for loop", "if loop"],
            answer: "for loop",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the provided example for the `continue` statement, why is the line of code immediately following `continue` unreachable?",
            options: [
                "It is outside the loop's block.",
                "The `break` statement was executed.",
                "The `continue` statement immediately skips to the next iteration upon execution.",
                "The array is empty."
            ],
            answer: "The `continue` statement immediately skips to the next iteration upon execution.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `nextDouble()` method of the `Scanner` class reads a number of which data type?",
            options: ["int", "float", "double", "long"],
            answer: "double",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which keyword is typically used as the last option in a `switch` statement to catch all non-matching values?",
            options: ["else", "finally", "default", "catch"],
            answer: "default",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the result of the expression `16 % 2 == 0`?",
            options: ["false", "1", "true", "0"],
            answer: "true",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Java object refers to the console output?",
            options: ["System.in", "System.err", "System.out", "Console.log"],
            answer: "System.out",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If the `if` condition in an `if-else` statement is false, which block is executed?",
            options: [
                "The `if` block is executed again.",
                "The program terminates.",
                "The `else` block is executed.",
                "The code proceeds to the next statement outside the `if-else` structure."
            ],
            answer: "The `else` block is executed.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The definition of a good user input prompt emphasizes that it must be user-friendly and not:",
            options: ["Too long", "Aggressive", "Capitalized", "Include numbers"],
            answer: "Aggressive",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the fundamental purpose of any control statement?",
            options: [
                "To declare variables and methods.",
                "To define the sequence in which instructions will be executed.",
                "To link multiple Java files together.",
                "To handle errors and exceptions."
            ],
            answer: "To define the sequence in which instructions will be executed.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A `do-while` loop's condition check is located:",
            options: ["In the loop initialization.", "At the start of the loop body.", "At the end of the loop body.", "Inside a separate method call."],
            answer: "At the end of the loop body.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions (32)
    identification: [
        {
            question: "What general type of statement is used to control the execution flow of a program based on conditional logic?",
            correctAnswers: ["Control Statements", "Control Structures", "control statements"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the standard output object in Java used to refer to the console output?",
            correctAnswers: ["System.out", "system.out"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which specific Java statement is used to output a string to the screen and ensures the cursor moves to the next line?",
            correctAnswers: ["System.out.println()", "System.out.println", "system.out.println()"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the Java utility class required to read input from a computer's keyboard?",
            correctAnswers: ["Scanner", "Scanner class"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What part of a program (e.g., in `new Scanner(System.in)`) represents the standard input stream?",
            correctAnswers: ["System.in", "system.in"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which `Scanner` method is used to read a single floating-point number from the input?",
            correctAnswers: ["nextDouble()", "nextDouble"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term is used for the output message that precedes an input operation, instructing the user what to enter?",
            correctAnswers: ["Prompt", "prompt"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the primary function of an `if` statement?",
            correctAnswers: ["Decision-making", "Selection", "decision making"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which decision-making structure is suitable for checking a single variable against multiple constant values?",
            correctAnswers: ["switch statement", "switch"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for the set of statements enclosed within curly braces `{}`?",
            correctAnswers: ["Block", "block of statements"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of control statements includes `if`, `if-else`, and `switch`?",
            correctAnswers: ["Selection", "Selection statements"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What specific loop is defined by having its boolean expression checked at the end of the loop's execution?",
            correctAnswers: ["do-while loop", "do-while"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which statement is used to forcefully exit a loop or a `switch` block?",
            correctAnswers: ["break statement", "break"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which statement, when executed inside a loop, causes the current iteration to stop and the next iteration to begin?",
            correctAnswers: ["continue statement", "continue"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What keyword is used to declare a method that does not return any value?",
            correctAnswers: ["void"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for the expression that is executed at the end of each iteration in a `for` loop (e.g., `i++`)?",
            correctAnswers: ["Update Expression", "Increment Expression", "Update", "Increment/Decrement Expression"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What control statement transfers control back to the method that called the current one?",
            correctAnswers: ["return statement", "return"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the category of control statements that includes `break` and `continue`?",
            correctAnswers: ["Branching", "Branching statements"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the most common first program written by beginners to ensure proper compiler use?",
            correctAnswers: ["Hello World!", "Hello World"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which `Scanner` method is used to read an integer data type?",
            correctAnswers: ["nextInt()", "nextInt"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the loop structure where the condition is checked *before* the loop body runs for the first time?",
            correctAnswers: ["Pretest loop", "while loop", "for loop"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The decision-making construct, which is followed by a logical expression for data comparison, is called the ___ statement.",
            correctAnswers: ["if statement", "if"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The ___ label in a `switch` statement handles all values that do not match the defined cases.",
            correctAnswers: ["default label", "default"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the process of entering data in software running on a computer?",
            correctAnswers: ["Input"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the data processed by the software that can be directed at printers, screens, monitors, and other devices?",
            correctAnswers: ["Output"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which type of control statement is used to execute a block of statements repeatedly, such as the `for` loop?",
            correctAnswers: ["Repetition", "Repetition statement"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The `if-else` statement is an extension of what simpler selection statement?",
            correctAnswers: ["if statement", "if"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which `Scanner` method reads a sequence of characters up to the first space character?",
            correctAnswers: ["next()", "next"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "In a `for` loop, what is the expression used for checking whether the loop should continue execution?",
            correctAnswers: ["Condition", "Boolean Expression", "condition expression"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What character is required at the end of a Java statement?",
            correctAnswers: ["Semicolon", "semi-colon"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The form of the return statement that returns the value evaluated from an expression is written as `return` followed by what?",
            correctAnswers: ["Expression"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the primary purpose of the `Scanner` class in a Java application?",
            correctAnswers: ["Reading Input", "Handling Input"],
            scoreValue: 2,
            type: "identification"
        }
    ],

    // True/False questions (25)
    trueFalse: [
        {
            question: "The standard output device in Java is, by default, the printer.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A program must produce some form of output to be considered useful.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `System.out.println()` statement does not require a semicolon to terminate it.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `Scanner` class is part of the `java.io` package and does not require an import.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `next()` method of the `Scanner` class is suitable for reading a user's full name, including a middle name.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A prompt is an output message that serves to inform the user about the expected input.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Selection statements are decision-making statements that include the `for` and `while` loops.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `else` block is executed only when the `if` statement evaluates to a true outcome.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `switch` statement in Java can test for a range of values rather than just equality with constants.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `for` loop is considered the most appropriate repetition structure when the number of iterations is known.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `break` statement only transfers control to the statement following the loop in which it resides.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `do-while` loop always checks the condition before executing the loop body.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `continue` statement terminates the execution of the entire loop.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `return;` statement is used when a method is declared with a non-void return type.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "In Java, control statements are categorized into Selection, Repetition, and Branching.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `return` statement is used to return a value and transfer control to the caller of the method.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `nextInt()` method of the `Scanner` class is used to read input as a `float` data type.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `switch` statement requires a `break` statement in every `case` to prevent 'fall-through'.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The process of entering data into software is universally called 'Output.'",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The logical expression in an `if` construct makes a decision based on data comparison.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "In programming, only output to a screen is expected.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `nextLine()` method is used to read an entire line, including spaces.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `while` loop checks its condition at the end of the loop body.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The `break` and `return` statements are both classified under Branching control structures.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The returned value type from a method must match the method's declared return type.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        }
    ]
};
