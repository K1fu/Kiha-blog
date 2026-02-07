const quizData = {
    // Multiple Choice questions (80 total)
    multipleChoice: [
        // --- SECTION 1: PROGRAMMING BASICS (10 Questions) ---
        {
            question: "A sequential set of instructions, known as codes, written or 'programmed' in a computer language to let the computer perform a specific computation task is called a:",
            options: ["Algorithm", "Flowchart", "Computer Program", "Syntax Rule"],
            answer: "Computer Program",
            explanation: "A computer program is defined as a sequential set of instructions (codes) written in a computer language to perform a specific computational task.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The 'art and science of instructing computers to perform tasks using a specific programming language' best defines:",
            options: ["Computation", "Debugging", "Programming", "System Analysis"],
            answer: "Programming",
            explanation: "Programming is the art and science of instructing computers to perform tasks using a specific programming language.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which phase of computer program development involves translating the design into actual code using a programming language?",
            options: ["Analysis", "Design", "Implementation", "Maintenance"],
            answer: "Implementation",
            explanation: "The Implementation phase involves writing the code based on the design specifications.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT listed as a benefit of programming proficiency in the module?",
            options: ["Enhances critical thinking", "Improves logical reasoning", "Guarantees high-paying jobs immediately", "Enhances problem-solving abilities"],
            answer: "Guarantees high-paying jobs immediately",
            explanation: "The module mentions career opportunities, critical thinking, logical reasoning, and problem-solving, but not a guarantee of high-paying jobs immediately.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What refers to a set of grammatical rules that commands a computer or a device to behave in a specific way?",
            options: ["Computer Program", "Code Block", "Programming Language", "Algorithm"],
            answer: "Programming Language",
            explanation: "A computer language (or programming language) is a set of grammatical rules that commands a computer or device to behave in a specific way.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of software is explicitly mentioned as an example of a computer program?",
            options: ["Operating System Kernels", "Spreadsheet Software", "Database Servers", "Game Engines"],
            answer: "Spreadsheet Software",
            explanation: "Examples given include system software, web browsers, utility software, multimedia software, and spreadsheet software.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The sequential execution of instructions in a computer program is MANDATORY unless what condition is met?",
            options: ["The computer's memory is full", "The code encounters a fatal error", "The computer is directed otherwise", "The program finishes execution"],
            answer: "The computer is directed otherwise",
            explanation: "The set of instructions must be performed sequentially 'unless directed otherwise' (e.g., by control structures like loops or conditionals).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which phase of program development involves monitoring and updating the program after it has been deployed?",
            options: ["Problem Definition", "Testing", "Maintenance", "Analysis"],
            answer: "Maintenance",
            explanation: "Maintenance involves monitoring, updating, and fixing bugs after deployment.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which programming language type focuses on defining what needs to be solved rather than how to solve it?",
            options: ["Procedural Language", "Object-Oriented Language", "Logic Programming Language", "Functional Language"],
            answer: "Logic Programming Language",
            explanation: "Logic Programming Languages, like Prolog, focus on 'what' is to be solved rather than 'how' to solve it.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the Generations of Programming Languages, what is the defining characteristic of a 2GL language?",
            options: ["Uses natural language processing", "Uses Assembly Language (mnemonic codes)", "Uses machine code (binary)", "Uses high-level English-like statements"],
            answer: "Uses Assembly Language (mnemonic codes)",
            explanation: "2GL (Second Generation Language) primarily uses Assembly Language, which employs mnemonic codes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- SECTION 2: ALGORITHMS & FLOWCHARTS (10 Questions) ---
        {
            question: "Which characteristic of a good algorithm ensures that the process stops after a finite number of steps?",
            options: ["Definiteness", "Effectiveness", "Finiteness", "Input"],
            answer: "Finiteness",
            explanation: "Finiteness means the algorithm must stop after a finite number of steps.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of a Flow Line symbol in a flowchart?",
            options: ["To represent a process", "To indicate the start or end of the program", "To show the direction of flow and logical sequence", "To represent a decision point"],
            answer: "To show the direction of flow and logical sequence",
            explanation: "Flow Lines (arrows) connect symbols and indicate the direction of the program's flow.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which characteristic requires that each step of the algorithm be precisely defined and unambiguous?",
            options: ["Definiteness", "Output", "Effectiveness", "Input"],
            answer: "Definiteness",
            explanation: "Definiteness means each step must be precisely defined and unambiguous.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Flowchart symbol represented by a parallelogram is used for:",
            options: ["Process", "Input/Output", "Decision", "Terminal"],
            answer: "Input/Output",
            explanation: "The parallelogram symbol is used to indicate data entry (input) or display (output).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What term describes a step-by-step procedure for solving a problem?",
            options: ["Program", "Syntax", "Algorithm", "Compiler"],
            answer: "Algorithm",
            explanation: "An algorithm is a step-by-step procedure for solving a given problem.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The rectangular symbol in a flowchart is used to represent which action?",
            options: ["Conditional Check", "Start/Stop", "Initialization or Calculation", "Data Input"],
            answer: "Initialization or Calculation",
            explanation: "The Process symbol (rectangle) represents any processing, such as a calculation or variable initialization.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of symbol is used to indicate a question or choice with multiple possible outcomes in a flowchart?",
            options: ["Process", "Terminal", "Connector", "Decision"],
            answer: "Decision",
            explanation: "The Decision symbol (diamond) is used to represent a conditional check or choice.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What must a good algorithm have, referring to the necessary data to be provided to the process?",
            options: ["Finiteness", "Output", "Definiteness", "Input"],
            answer: "Input",
            explanation: "The Input characteristic requires that the algorithm must be supplied with the necessary input data.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A small circle symbol in a flowchart is typically used as a(n):",
            options: ["Decision Point", "Process Step", "Terminal Point", "Connector"],
            answer: "Connector",
            explanation: "The Connector symbol (small circle) is used to connect different parts of a flowchart.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The characteristic 'Effectiveness' in an algorithm means:",
            options: ["The algorithm must use minimum memory", "The operations must be sufficiently basic to be executable", "The algorithm must produce exactly two outputs", "The algorithm must be written in a high-level language"],
            answer: "The operations must be sufficiently basic to be executable",
            explanation: "Effectiveness means the operations must be sufficiently basic that they can be done exactly and in a finite amount of time.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- SECTION 3: DATA TYPES, VARIABLES, OPERATORS (20 Questions) ---
        {
            question: "Which Java primitive data type is used to store a single 16-bit Unicode character?",
            options: ["byte", "short", "char", "int"],
            answer: "char",
            explanation: "The `char` data type stores a single 16-bit Unicode character.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which primitive data type is used to represent truth values and can only be true or false?",
            options: ["boolean", "byte", "float", "int"],
            answer: "boolean",
            explanation: "The `boolean` data type is used to store truth values (true or false).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the largest-sized integer primitive data type mentioned in the numeric types?",
            options: ["byte", "short", "int", "long"],
            answer: "long",
            explanation: "The numeric integer primitive types are byte, short, int, and long, with long being the largest.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is an example of a Non-Primitive (Reference) Data Type mentioned in the module?",
            options: ["int", "char", "String", "double"],
            answer: "String",
            explanation: "String, Array, and Class are listed as Non-Primitive data types.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term refers to giving a variable an initial value when it is created?",
            options: ["Declaration", "Instantiation", "Initialization", "Assignment"],
            answer: "Initialization",
            explanation: "Initialization is the act of giving a variable an initial value.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Java, variables are declared by specifying the data type followed by what?",
            options: ["The value", "The access specifier", "The variable name", "The semicolon"],
            answer: "The variable name",
            explanation: "Variable declaration syntax is `dataType variableName;`.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which rule for variable naming is generally recommended, although not a strict syntax rule, for better readability?",
            options: ["Start with a number", "Use spaces between words", "Start with an uppercase letter", "Use Camel Case (e.g., `studentName`)"],
            answer: "Use Camel Case (e.g., `studentName`)",
            explanation: "While not a syntax rule, using camel case is a common convention mentioned for readability.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which operator is used to check if two values are NOT equal?",
            options: ["=", "!=", "<>", "=="],
            answer: "!=",
            explanation: "The `!=` is the Relational operator for 'not equal to'.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the purpose of the modulus operator (`%`)?",
            options: ["Multiplication", "Division", "Exponentiation", "Calculates the remainder of a division"],
            answer: "Calculates the remainder of a division",
            explanation: "The modulus operator (%) returns the remainder of an integer division.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Logical operator returns `true` only if BOTH operands are true?",
            options: ["|| (OR)", "&& (AND)", "! (NOT)", "^ (XOR)"],
            answer: "&& (AND)",
            explanation: "The Logical AND operator (`&&`) returns true only if both conditions are true.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does the compound assignment operator `a += 5;` mean?",
            options: ["a = a - 5;", "a = a * 5;", "a = 5;", "a = a + 5;"],
            answer: "a = a + 5;",
            explanation: "The `+=` operator is a shorthand for adding the right operand to the left operand and storing the result back in the left operand.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the effect of the post-increment operator (`i++`)?",
            options: ["Increments the value of `i` and then uses the new value.", "Increments the value of `i` after the current expression is evaluated.", "Decrements the value of `i` after the current expression is evaluated.", "Multiplies `i` by 1 and then uses the new value."],
            answer: "Increments the value of `i` after the current expression is evaluated.",
            explanation: "The post-increment operator uses the current value in the expression first, and then increments the variable.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The use of the `final` keyword in a Java variable declaration makes that variable a(n):",
            options: ["Local variable", "Instance variable", "Constant", "Temporary variable"],
            answer: "Constant",
            explanation: "The `final` keyword is used to declare a constant, meaning its value cannot be changed once initialized.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is an example of an Expression Statement?",
            options: ["`int x;`", "`if (x > 0) {}`", "`x = y + 5;`", "`public class MyClass {}`"],
            answer: "`x = y + 5;`",
            explanation: "An expression statement performs an action, such as assignment or method call. `x = y + 5;` is an assignment expression statement.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the code snippet: `result = (x > y) ? x : y;`, what type of operator is `?:`?",
            options: ["Relational", "Logical", "Assignment", "Conditional/Ternary"],
            answer: "Conditional/Ternary",
            explanation: "The `?:` operator is the Conditional or Ternary operator.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the result of the Java expression `10 / 3` when both operands are integers?",
            options: ["3.333...", "4", "3", "1"],
            answer: "3",
            explanation: "In integer arithmetic, division truncates the decimal part, resulting in 3.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a block of code enclosed in curly braces `{}`?",
            options: ["Module", "Statement", "Method", "Block Statement"],
            answer: "Block Statement",
            explanation: "A block statement, or compound statement, is a group of zero or more statements enclosed in curly braces.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which operator is used to check if the value of the left operand is less than or equal to the value of the right operand?",
            options: ["<", ">", "<=", ">="],
            answer: "<=",
            explanation: "The `<=` operator is the Relational operator for 'less than or equal to'.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Declaration Statement in Java is used to:",
            options: ["Perform a calculation", "Transfer control flow", "Create a new variable", "Execute a method"],
            answer: "Create a new variable",
            explanation: "Declaration statements are used to declare (create) a new variable.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What type of data stores numbers with fractional parts, such as 3.14?",
            options: ["Integer Numeric", "Boolean", "Character", "Floating-point Numeric"],
            answer: "Floating-point Numeric",
            explanation: "The floating-point types (`float` and `double`) store numbers with fractional parts.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- SECTION 4: CONTROL STRUCTURES (20 Questions) ---
        {
            question: "Which control statement is used to execute a block of code only if a specified condition is true?",
            options: ["while", "for", "switch", "if"],
            answer: "if",
            explanation: "The `if` statement is the basic selection structure that executes a block of code if the condition is true.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In an `if-else` statement, the code block in the `else` clause executes when:",
            options: ["The condition is true", "The condition is false", "The code inside the `if` block fails", "Always"],
            answer: "The condition is false",
            explanation: "The `else` block executes only when the condition in the corresponding `if` statement is false.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is used to handle multiple conditions sequentially, where only one block of code is executed?",
            options: ["Nested if", "Switch statement", "If-else-if ladder", "Do-while loop"],
            answer: "If-else-if ladder",
            explanation: "The `if-else-if` ladder is used for checking multiple conditions in sequence.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the purpose of the `default` case in a `switch` statement?",
            options: ["It executes the code block only if the previous `case` was successful.", "It acts as a mandatory exit point for the `switch` block.", "It executes when none of the specified `case` values match the expression.", "It executes only if there is a syntax error in the `switch` block."],
            answer: "It executes when none of the specified `case` values match the expression.",
            explanation: "The `default` case executes when the value of the expression does not match any of the `case` labels.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `while` loop continues to execute as long as its condition is:",
            options: ["False", "True", "Greater than zero", "Null"],
            answer: "True",
            explanation: "A `while` loop executes a block of code repeatedly as long as the specified boolean condition is true.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which looping statement is guaranteed to execute its block of code at least once, regardless of the condition?",
            options: ["for loop", "while loop", "do-while loop", "if statement"],
            answer: "do-while loop",
            explanation: "The `do-while` loop checks the condition at the end of the loop, ensuring the body executes at least once.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which part of the `for` loop statement is executed only once at the beginning?",
            options: ["Condition", "Initialization", "Iteration (Update)", "Body"],
            answer: "Initialization",
            explanation: "The initialization expression is executed once before the loop begins.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the effect of the `break` statement when executed inside a loop?",
            options: ["It restarts the loop from the beginning.", "It skips the current iteration and moves to the next one.", "It immediately terminates the loop (or `switch` statement).", "It halts the entire program execution."],
            answer: "It immediately terminates the loop (or `switch` statement).",
            explanation: "The `break` statement immediately exits the innermost loop or `switch` it is contained within.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The `continue` statement is used to:",
            options: ["Immediately exit the loop.", "Skip the rest of the statements in the current iteration and proceed to the next iteration.", "Restart the loop from the beginning.", "Exit the entire method."],
            answer: "Skip the rest of the statements in the current iteration and proceed to the next iteration.",
            explanation: "The `continue` statement skips the remaining code in the loop body for the current iteration and continues with the next iteration.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When is a `nested if` statement used?",
            options: ["When a single decision is based on multiple conditions being true simultaneously.", "When a sequence of unrelated conditions must be tested.", "When one `if` statement is placed inside the body of another `if` or `else` statement.", "When the number of iterations is known beforehand."],
            answer: "When one `if` statement is placed inside the body of another `if` or `else` statement.",
            explanation: "A `nested if` is an `if` statement that is the target of another `if` or `else` statement.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the `for` loop structure, what separates the initialization, condition, and iteration expressions?",
            options: ["Comma (`,`)", "Colon (`:`)", "Semicolon (`;`)", "Space (` `)"],
            answer: "Semicolon (`;`)",
            explanation: "The three parts of the `for` loop header are separated by semicolons: `for (initialization; condition; iteration)`.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is equivalent to a `switch` statement with multiple `case` labels?",
            options: ["A simple `if-else` statement.", "A `do-while` loop with a counter.", "A series of nested `if` statements.", "An `if-else-if` ladder."],
            answer: "An `if-else-if` ladder.",
            explanation: "Both `switch` and the `if-else-if` ladder are selection structures used to evaluate multiple possibilities, where the `if-else-if` ladder is the equivalent to a `switch`.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In a `while` loop, where is the condition checked?",
            options: ["At the end of the loop body.", "After the first iteration.", "At the beginning of the loop.", "Only if a `break` is present."],
            answer: "At the beginning of the loop.",
            explanation: "The `while` loop is a pre-test loop; the condition is checked before the loop body executes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What statement is used to exit from the current method and optionally return a value?",
            options: ["break", "continue", "exit", "return"],
            answer: "return",
            explanation: "The `return` statement is used to explicitly exit from a method and optionally return a value.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Consider the Java code: `int x = 10; if (x > 5) { if (x < 15) { System.out.print(\"A\"); } } else { System.out.print(\"B\"); }` What is the output?",
            options: ["A", "B", "AB", "No Output"],
            answer: "A",
            explanation: "The outer `if` (10 > 5) is true. The inner `if` (10 < 15) is also true, so 'A' is printed.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What happens if a `break` statement is omitted from a `case` block in a `switch` statement?",
            options: ["A compile-time error occurs.", "The program enters an infinite loop.", "Execution 'falls through' to the next `case` block.", "The `default` block executes."],
            answer: "Execution 'falls through' to the next `case` block.",
            explanation: "Without a `break`, execution continues into the next `case` block, which is called 'fall-through'.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The iteration expression in a `for` loop is executed:",
            options: ["Only once at the beginning.", "After the loop body has been executed and before the condition is checked again.", "Before the loop body is executed.", "Only when the condition is false."],
            answer: "After the loop body has been executed and before the condition is checked again.",
            explanation: "The iteration expression (e.g., `i++`) runs after the loop body completes and before the condition check for the next iteration.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A repetition control structure is primarily used for:",
            options: ["Making a choice between two paths.", "Defining a step-by-step procedure.", "Executing the same block of code multiple times.", "Declaring new variables."],
            answer: "Executing the same block of code multiple times.",
            explanation: "Repetition structures (loops) execute a statement or block of statements repeatedly.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which logical operator can be used to make the condition for an `if` statement true if at least one of two sub-conditions is true?",
            options: ["&& (AND)", "|| (OR)", "! (NOT)", "="],
            answer: "|| (OR)",
            explanation: "The Logical OR operator (`||`) requires only one of the operands to be true for the whole condition to be true.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the `do-while` loop, where is the semicolon placed that terminates the loop structure?",
            options: ["After the `do` keyword.", "After the opening brace `{`.", "After the closing brace `}` and the `while (condition)`.", "At the start of the loop body."],
            answer: "After the closing brace `}` and the `while (condition)`.",
            explanation: "The `do-while` loop structure ends with a semicolon after the `while(condition)` part: `do { ... } while (condition);`",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- SECTION 5: FUNCTIONS/METHODS (20 Questions) ---
        {
            question: "What term is used in Java to refer to a named block of code that executes a specific set of operations, which is often called a function in other languages?",
            options: ["Module", "Procedure", "Method", "Class"],
            answer: "Method",
            explanation: "In Java, functions are referred to as methods.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which component of a method specifies who can access the method?",
            options: ["Return Type", "Method Name", "Access Specifier", "Parameter List"],
            answer: "Access Specifier",
            explanation: "The access specifier (e.g., `public`, `private`) specifies the access rights of the method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What must be specified in the method declaration if the method does not return any value?",
            options: ["A value of 0", "The data type `null`", "The keyword `void`", "The keyword `return`"],
            answer: "The keyword `void`",
            explanation: "The return type is specified as `void` if the method does not return a value.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a list of variables separated by commas, which are inputs to the method?",
            options: ["Argument List", "Type List", "Parameter List", "Component List"],
            answer: "Parameter List",
            explanation: "The parameter list contains the type and name of the inputs to the method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Java, what is the special method that serves as the entry point for program execution?",
            options: ["init()", "run()", "main()", "start()"],
            answer: "main()",
            explanation: "The `main` method (`public static void main(String a[])`) is the entry point.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Methods like `System.out.println()` that are pre-defined in the programming environment are known as:",
            options: ["User-defined methods", "Library methods", "Static methods", "Overloaded methods"],
            answer: "Library methods",
            explanation: "Predefined methods, or built-in functions, are often referred to as Library methods.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a method defined by the programmer to perform a specific task within the application?",
            options: ["Library Method", "Primitive Method", "System Method", "User-defined Method"],
            answer: "User-defined Method",
            explanation: "Methods created by the programmer are called user-defined methods.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What principle describes calling a method by passing copies of the actual values of the arguments to the parameters?",
            options: ["Call by Reference", "Pass by Address", "Call by Value", "Pass by Pointer"],
            answer: "Call by Value",
            explanation: "Call by Value passes a copy of the argument's value to the method parameter.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which keyword in Java is used to denote that a method belongs to the class itself rather than an instance of the class, allowing it to be called without creating an object?",
            options: ["public", "final", "static", "void"],
            answer: "static",
            explanation: "The `static` keyword means the method belongs to the class and can be called directly without object instantiation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A variable declared inside the body of a method is known as a(n):",
            options: ["Global variable", "Instance variable", "Class variable", "Local variable"],
            answer: "Local variable",
            explanation: "A local variable is declared within a method or block and can only be accessed within that scope.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the method definition commonly referred to as?",
            options: ["Method Calling", "Method Declaration", "Method Signature", "Method Body"],
            answer: "Method Body",
            explanation: "The method definition includes the implementation (the code in the body). The header is the declaration.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The concept of having two or more methods in the same class with the same name but different parameters is called:",
            options: ["Method Overriding", "Method Hiding", "Method Overloading", "Method Signature"],
            answer: "Method Overloading",
            explanation: "Method Overloading allows multiple methods with the same name but distinct parameter lists.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The part of the method that includes the access specifier, return type, name, and parameter list is collectively known as the:",
            options: ["Method Call", "Method Definition", "Method Signature", "Method Implementation"],
            answer: "Method Signature",
            explanation: "The Method Signature (often including the return type in general terminology) is the header of the method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which part of the method specifies the data type of the value that the method will send back to the calling function?",
            options: ["Access Specifier", "Return Type", "Parameter List", "Method Name"],
            answer: "Return Type",
            explanation: "The Return Type specifies the data type of the value to be returned.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the context of the scope of variables, an Instance Variable is a variable that is declared:",
            options: ["Inside the main method.", "Inside a loop.", "Outside any method but inside the class.", "Inside a nested if statement."],
            answer: "Outside any method but inside the class.",
            explanation: "An Instance Variable (often called a Global Variable in general programming contexts, but Java refers to it as an instance/field variable) is declared outside any method, but within the class.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When a method is called, the execution flow transfers from the caller to the called method. When does the flow return to the caller?",
            options: ["When a new variable is declared.", "When a loop finishes execution.", "When the `return` statement is executed or the method body completes.", "When a compilation error occurs."],
            answer: "When the `return` statement is executed or the method body completes.",
            explanation: "The flow returns when the method finishes execution, typically by hitting a `return` statement or the end of the method body.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If a method is overloaded, what *must* be different between the methods?",
            options: ["The return type.", "The access specifier.", "The method name.", "The number, type, or order of parameters."],
            answer: "The number, type, or order of parameters.",
            explanation: "Method overloading requires the methods to have the same name but different parameter lists (signature).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for the process of using a method after it has been defined?",
            options: ["Method Declaration", "Method Initialization", "Method Calling", "Method Compiling"],
            answer: "Method Calling",
            explanation: "Method calling is the act of invoking or using a method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which access specifier generally provides the broadest access to a method, allowing it to be called from anywhere?",
            options: ["private", "protected", "public", "default (package-private)"],
            answer: "public",
            explanation: "The `public` access specifier allows the method to be accessed from any class.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A variable's scope determines:",
            options: ["Its default value.", "The data type it can store.", "The region of the program where it can be accessed.", "Whether it is a primitive or non-primitive type."],
            answer: "The region of the program where it can be accessed.",
            explanation: "The scope of a variable defines the region of the code where the variable is recognized and can be used.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- SECTION 6: ARRAYS (20 Questions - 10 MC, 10 ID is too skewed, I'll adjust to 10 MC, 5 ID, and shift 5 ID to Control Structures/Data Types for better balance) ---
        // (Adjusted plan: 80 MC, 40 ID. Distribute the remaining MC to Arrays for a total of 80 MC)
        // (New distribution: Basics 10MC, Algo/Flow 10MC, Data/Var/Ops 20MC, Control 20MC, Functions 15MC, Arrays 5MC) -> Total 80 MC.
        {
            question: "An array is a collection of elements that are all of the _____ data type.",
            options: ["Mixed", "Reference", "Similar", "Sequential"],
            answer: "Similar",
            explanation: "A key characteristic of an array is that it holds a collection of elements of the same (similar) data type (homogeneous).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT a characteristic of an array, as described in the module?",
            options: ["Fixed size", "Homogeneous elements", "Elements are stored randomly", "Indexed elements"],
            answer: "Elements are stored randomly",
            explanation: "Array elements are stored sequentially and accessed by index, not stored randomly.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the index of the first element in a one-dimensional array?",
            options: ["1", "The size of the array", "0", "The last element's index minus one"],
            answer: "0",
            explanation: "Array indexing starts at 0.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "How are the elements of a multi-dimensional array accessed in Java?",
            options: ["Using parentheses `()` for row and column.", "Using a single index in square brackets `[]`.", "Using a separate set of square brackets `[]` for each dimension.", "Using dot notation, e.g., `array.row.col`."],
            answer: "Using a separate set of square brackets `[]` for each dimension.",
            explanation: "Multi-dimensional arrays use additional index specifications, such as `twoD[i][j]` for a two-dimensional array.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary purpose of the square brackets `[]` when declaring an array?",
            options: ["To specify the initial values.", "To indicate that the variable is an array.", "To define the data type.", "To denote a block statement."],
            answer: "To indicate that the variable is an array.",
            explanation: "The square brackets are used to specify the index and also to declare an array variable, e.g., `int[] numbers;`.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "If a two-dimensional array is declared as `int twoD[][] = new int[4][5];`, what is the total number of elements it can hold?",
            options: ["4", "5", "9", "20"],
            answer: "20",
            explanation: "The total size is the product of the dimensions: 4 rows * 5 columns = 20 elements.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Given the array `i[10]`, which index correctly represents the last accessible element?",
            options: ["i[10]", "i[9]", "i[1]", "i[0]"],
            answer: "i[9]",
            explanation: "For an array of size N, the indices run from 0 to N-1. The last index for a size 10 array is 9.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What refers to an 'array of arrays'?",
            options: ["One-dimensional Array", "Reference Type", "Multi-dimensional Array", "Collection Class"],
            answer: "Multi-dimensional Array",
            explanation: "A multi-dimensional array refers to an array of arrays.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which keyword is used in Java to allocate memory for a new array object?",
            options: ["class", "create", "array", "new"],
            answer: "new",
            explanation: "The `new` keyword is used to instantiate and allocate memory for a new object, including arrays.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "To access the element at the 3rd row and 2nd column (using 0-based indexing) of a 2D array named `matrix`, the correct notation is:",
            options: ["matrix(3, 2)", "matrix[3][2]", "matrix[2, 1]", "matrix[2][1]"],
            answer: "matrix[2][1]",
            explanation: "3rd row is index 2, 2nd column is index 1. The syntax uses separate brackets: `matrix[row_index][col_index]`.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Remaining 5 MC to reach 80 total ---
        {
            question: "Which Java primitive data type is recommended for single-precision floating-point numbers?",
            options: ["double", "long", "float", "short"],
            answer: "float",
            explanation: "`float` is for single-precision floating-point numbers; `double` is for double-precision.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which programming language generation is characterized by the use of English-like statements and is considered a high-level language?",
            options: ["1GL", "2GL", "3GL", "4GL"],
            answer: "3GL",
            explanation: "3GL (Third Generation Languages) use high-level, human-readable syntax (English-like statements).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The phase of program development where a programmer carefully checks the code for errors and mistakes is:",
            options: ["Implementation", "Testing", "Analysis", "Design"],
            answer: "Testing",
            explanation: "The Testing phase involves verifying the program's correctness and functionality, often through debugging.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which category of programming language types includes Java, C++, and Python, focusing on objects and classes?",
            options: ["Procedural", "Functional", "Logic", "Object-Oriented"],
            answer: "Object-Oriented",
            explanation: "Object-Oriented Languages organize code around objects and classes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of statement determines the flow of program execution based on certain conditions?",
            options: ["Expression Statement", "Declaration Statement", "Block Statement", "Control Statement"],
            answer: "Control Statement",
            explanation: "Control statements (selection and repetition) are used to manage the flow of execution.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions (40 total)
    identification: [
        // --- SECTION 1: PROGRAMMING BASICS (5 Questions) ---
        {
            question: "In the program development process, what is the initial phase where the exact problem to be solved and the expected solution's requirements are determined?",
            correctAnswers: ["Problem Definition", "Problem definition"],
            explanation: "Problem Definition is the first phase, where the problem is clearly stated.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of low-level language uses only binary code (0s and 1s)?",
            correctAnswers: ["Machine Language", "Machine Code"],
            explanation: "Machine language (1GL) is the lowest level and uses binary code.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term is synonymous with Computer Language, referring to the set of rules that commands a computer?",
            correctAnswers: ["Programming Language"],
            explanation: "A computer language is also referred to as a programming language.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which high-level language type focuses on defining steps in a sequence, such as C and Pascal?",
            correctAnswers: ["Procedural Language", "Procedural"],
            explanation: "Procedural languages focus on a series of computational steps to be carried out.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What programming language generation often involves using an IDE with visual tools to create code, like SQL or non-procedural languages?",
            correctAnswers: ["4GL", "Fourth Generation Language"],
            explanation: "4GLs (Fourth Generation Languages) are designed to be closer to human language and often use IDEs/visual tools.",
            scoreValue: 2,
            type: "identification"
        },
        // --- SECTION 2: ALGORITHMS & FLOWCHARTS (5 Questions) ---
        {
            question: "What is the graphical representation of an algorithm?",
            correctAnswers: ["Flowchart"],
            explanation: "A flowchart is a graphical representation of an algorithm.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which flowchart symbol is an oval or pill shape, used to indicate the starting or ending point of the program?",
            correctAnswers: ["Terminal"],
            explanation: "The Terminal symbol (oval) marks the start and end points.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What characteristic of a good algorithm means the result must be produced, such as displaying 'hello world' or a calculated result?",
            correctAnswers: ["Output"],
            explanation: "Output means the algorithm must produce one or more results.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "In the algorithm characteristic 'Effectiveness', the operations must be basic and executable in what period of time?",
            correctAnswers: ["Finite time", "a finite amount of time"],
            explanation: "Effectiveness requires operations to be executable in a finite amount of time.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The diamond-shaped symbol in a flowchart is designated for what type of operation?",
            correctAnswers: ["Decision", "Conditional check"],
            explanation: "The Decision symbol (diamond) indicates a point where a choice must be made.",
            scoreValue: 2,
            type: "identification"
        },
        // --- SECTION 3: DATA TYPES, VARIABLES, OPERATORS (15 Questions) ---
        {
            question: "What type of Java primitive data stores the smallest range of whole numbers (8-bit)?",
            correctAnswers: ["byte"],
            explanation: "The `byte` is the smallest integer primitive data type.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the collective term for data types like String, Array, and Class?",
            correctAnswers: ["Non-Primitive Data Types", "Reference Data Types", "Non-Primitive"],
            explanation: "String, Array, and Class are Non-Primitive (or Reference) data types.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the Java keyword used to declare a constant whose value cannot be changed?",
            correctAnswers: ["final"],
            explanation: "The `final` keyword is used to declare a constant.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What arithmetic operator calculates the remainder of an integer division?",
            correctAnswers: ["Modulus operator", "%", "percent sign"],
            explanation: "The modulus operator (%) returns the remainder.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the logical operator that negates a boolean expression (makes true false, and false true)?",
            correctAnswers: ["NOT operator", "!", "Logical NOT"],
            explanation: "The Logical NOT operator (!) reverses the truth value.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What relational operator is used to test if two values are exactly the same?",
            correctAnswers: ["Equality operator", "=="],
            explanation: "The equality operator (==) checks for sameness.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for a variable that is given a value when it is created?",
            correctAnswers: ["Initialized variable", "Initialized", "Initialization"],
            explanation: "A variable given an initial value is an initialized variable.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of data is stored by the `double` primitive data type?",
            correctAnswers: ["Double-precision floating-point number", "Floating-point number"],
            explanation: "`double` stores double-precision floating-point numbers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term describes a simple instruction that ends with a semicolon in Java?",
            correctAnswers: ["Statement", "Expression Statement", "Declaration Statement"],
            explanation: "A Statement is a simple instruction that expresses a unit of work.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The compound assignment operator `*=` is shorthand for which full assignment operation?",
            correctAnswers: ["Multiplication assignment", "a = a * b", "a *= b"],
            explanation: "The `*=` operator is the multiplication assignment operator.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the general term for a combination of variables, constants, and operators that resolves to a single value?",
            correctAnswers: ["Expression"],
            explanation: "An expression is a combination that evaluates to a single value.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the ternary operator also known as?",
            correctAnswers: ["Conditional operator", "Conditional"],
            explanation: "The ternary operator `?:` is also known as the conditional operator.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the relational operator for 'greater than or equal to'?",
            correctAnswers: [">="],
            explanation: "The `>=` operator is for greater than or equal to.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for the process of creating a variable by specifying its data type and name?",
            correctAnswers: ["Declaration", "Variable Declaration"],
            explanation: "Declaration is the process of creating a variable.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which increment operator uses the current value of the variable in an expression *before* it is incremented?",
            correctAnswers: ["Post-increment", "i++"],
            explanation: "The post-increment operator (`i++`) uses the value before incrementing.",
            scoreValue: 2,
            type: "identification"
        },
        // --- SECTION 4: CONTROL STRUCTURES (10 Questions) ---
        {
            question: "What keyword is used in a selection structure to provide an alternative block of code to execute if the main condition is false?",
            correctAnswers: ["else"],
            explanation: "The `else` keyword provides the alternative path in an `if-else` structure.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for an `if` statement placed inside the body of another `if` or `else` statement?",
            correctAnswers: ["Nested if", "Nested selection"],
            explanation: "A `nested if` is a selection statement within another selection statement.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The phenomenon where execution flows from one `case` block into the next in a `switch` statement because the `break` keyword is missing is called:",
            correctAnswers: ["Fall-through", "Fallthrough"],
            explanation: "Omitting `break` causes execution to 'fall-through' to the next case.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which looping structure checks the condition *after* the body of the loop has executed?",
            correctAnswers: ["do-while loop", "do-while"],
            explanation: "The `do-while` loop is a post-test loop.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What part of a `for` loop is executed last in each iteration, typically used for incrementing or decrementing the counter?",
            correctAnswers: ["Iteration", "Update expression"],
            explanation: "The iteration/update expression is executed after the body and before the condition check.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which jump statement is used to skip the remaining code in the current iteration of a loop and immediately proceed to the next iteration?",
            correctAnswers: ["continue"],
            explanation: "The `continue` statement skips the current iteration.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What kind of flow structure is the `while` loop (pre-test or post-test)?",
            correctAnswers: ["Pre-test loop", "Pre-test"],
            explanation: "The `while` loop checks the condition before executing the body (pre-test).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What separates the `case` values from their corresponding code blocks in a `switch` statement?",
            correctAnswers: ["Colon", ":"],
            explanation: "The `case` label is followed by a colon (`:`).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The primary purpose of a 'repetition' control structure is to facilitate what?",
            correctAnswers: ["Looping", "Iteration"],
            explanation: "Repetition structures (loops) facilitate repeated execution of code.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the part of an `if-else-if` structure that executes if none of the preceding conditions are true?",
            correctAnswers: ["Final else", "Final else block", "The last else"],
            explanation: "The final `else` block executes if all previous `if` and `else if` conditions are false.",
            scoreValue: 2,
            type: "identification"
        },
        // --- SECTION 5: FUNCTIONS/METHODS (10 Questions) ---
        {
            question: "What is the technical term for the method that serves as the entry point for a standalone Java application?",
            correctAnswers: ["main method", "main"],
            explanation: "The `main` method is the program's starting point.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What Java keyword is used to indicate that a method returns no value?",
            correctAnswers: ["void"],
            explanation: "The `void` keyword is used for methods without a return value.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The actual values that are passed to a method when it is called are called what?",
            correctAnswers: ["Arguments", "Actual Parameters"],
            explanation: "Arguments are the actual values passed during a method call.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What principle of method calling involves the method receiving only a copy of the value of the argument?",
            correctAnswers: ["Call by Value", "Pass by Value"],
            explanation: "Call by Value passes a copy of the argument's value.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of method is one like `System.out.println()` that is built into the language environment?",
            correctAnswers: ["Predefined method", "Library method", "Built-in method"],
            explanation: "These are predefined or library methods.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the scope of a variable that is declared outside any method but inside the class?",
            correctAnswers: ["Instance scope", "Instance variable", "Global scope"],
            explanation: "Variables declared at the class level are instance variables (or global in general terms).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "When a method's name is the same as another method's name, but the number or type of its parameters is different, this is known as:",
            correctAnswers: ["Method Overloading", "Overloading"],
            explanation: "Method Overloading is defining multiple methods with the same name but different signatures.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which component of a method specifies the kind of data the method will send back to the caller?",
            correctAnswers: ["Return Type"],
            explanation: "The return type defines the data type of the value returned.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the Java keyword that allows a method to be called directly on the class without needing an object instance?",
            correctAnswers: ["static"],
            explanation: "The `static` keyword enables method calling via the class name.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the scope of a variable declared within a method's body?",
            correctAnswers: ["Local scope", "Local variable"],
            explanation: "Variables declared within a method have local scope.",
            scoreValue: 2,
            type: "identification"
        },
        // --- SECTION 6: ARRAYS (5 Questions) ---
        {
            question: "What is the term for a collection of elements where all elements share the same data type?",
            correctAnswers: ["Array"],
            explanation: "An array is a collection of similar (homogeneous) data types.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "If an array is declared with a size of 5, what is the maximum index number that can be used to access an element?",
            correctAnswers: ["4"],
            explanation: "The indices run from 0 to Size - 1. For size 5, the max index is 4.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the key characteristic of an array regarding its size, once it has been initialized?",
            correctAnswers: ["Fixed size", "Fixed"],
            explanation: "Arrays are characterized by having a fixed size.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A multi-dimensional array declaration requires an additional set of what symbols for each dimension?",
            correctAnswers: ["Square brackets", "[]"],
            explanation: "Multi-dimensional arrays use additional square brackets to specify indices.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the concept of accessing array elements based on their position called?",
            correctAnswers: ["Indexing", "Array indexing"],
            explanation: "Elements are accessed using their index (position).",
            scoreValue: 2,
            type: "identification"
        }
    ]
};