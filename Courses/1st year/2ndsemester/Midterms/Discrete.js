const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [

  // ===== Multiple Choice (30) =====

  // --- Algorithms (Handout 03) ---
  {
    type: "mc",
    q: "According to the source, an algorithm is defined as:",
    o: [
      "A finite sequence of well-defined steps to perform some tasks",
      "A programming language instruction set",
      "A mathematical model for solving problems",
      "A diagram that illustrates the flow of a program"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Which property of an algorithm states that 'the steps of an algorithm must be defined precisely'? (Rosen, 2019)",
    o: [
      "Correctness",
      "Definiteness",
      "Finiteness",
      "Effectiveness"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which property of an algorithm states that 'it must be possible to perform each step of an algorithm exactly and in a finite amount of time'? (Rosen, 2019)",
    o: [
      "Generality",
      "Finiteness",
      "Effectiveness",
      "Correctness"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which property of an algorithm states that 'the procedure should be applicable for all problems of the desired form, not just for a particular set of input values'? (Rosen, 2019)",
    o: [
      "Correctness",
      "Finiteness",
      "Definiteness",
      "Generality"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "A pseudocode provides an intermediate step between:",
    o: [
      "A flowchart and a program",
      "An English language description of an algorithm to its translation to a specific computer language",
      "A mathematical model and a flowchart",
      "A program and its output"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which flowchart symbol represents a decision used to split into multiple paths for selection and repetition?",
    o: [
      "Rectangle (Process)",
      "Parallelogram (Input/Output)",
      "Oval (Start/Stop)",
      "Diamond (Decision)"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "Which flowchart symbol represents data entry by a user or display of data by the program?",
    o: [
      "Rectangle",
      "Diamond",
      "Parallelogram (Input/Output)",
      "Arrow"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the pseudocode for finding the minimum value: 'procedure min($a_1, a_2, \\ldots, a_n$: integers)', what is the initial assignment?",
    o: [
      "min := 0",
      "min := $a_n$",
      "min := $a_1$",
      "min := $\\infty$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Control structures are described as instructions that tell the algorithm:",
    o: [
      "What the input values are",
      "What commands to be executed and when and how they would be executed",
      "How to display output to the user",
      "How to translate pseudocode into a programming language"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which kind of control structure sets a condition for the execution of an algorithm step? (Fortney, 2021)",
    o: [
      "Loop Controls",
      "Repetition Controls",
      "Conditional Controls",
      "Sequence Controls"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the if-then-else example for determining pass/fail, the condition used is:",
    o: [
      "$x > 60$",
      "$x \\leq 60$",
      "$x \\geq 60$",
      "$x = 60$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which loop control structure is used in the algorithm 'Find the order of the factor two for a given integer n ($n = 2^{order}$)'?",
    o: [
      "for-do",
      "repeat-until",
      "if-then",
      "while-do"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "In the repeat-until example listing all integers from n to 1, the loop ends when:",
    o: [
      "i = n",
      "i = 1",
      "i = 0",
      "i < 0"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Tracing an algorithm is described as: (Fortney, 2021)",
    o: [
      "Writing the pseudocode for an algorithm",
      "Going through the steps in the algorithm to generate a result",
      "Converting an algorithm to a flowchart",
      "Checking the syntax of a program"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the algorithm trace for the set {5, 4, 8, 3}, what is the final output (min)?",
    o: [
      "5",
      "4",
      "8",
      "3"
    ],
    a: 3
  },

  // --- Matrices (Handout 04) ---
  {
    type: "mc",
    q: "A matrix is defined as: (Fortney, 2020)",
    o: [
      "A sequence of numbers arranged in a single row",
      "A mathematical object that contains a rectangular table or array of numbers or variables arranged in horizontal rows (m) and vertical columns (n) enclosed in brackets or large parentheses",
      "A set of equations with multiple variables",
      "A diagonal arrangement of numbers"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "A column matrix is defined as:",
    o: [
      "A matrix with the same number of rows and columns",
      "A matrix that has all its elements equal to zero",
      "A matrix having all its elements in a single column",
      "A matrix having all its elements in a single row"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "A square matrix is defined as:",
    o: [
      "A matrix with ones on the main diagonal",
      "A matrix having all elements equal to zero",
      "A matrix with more rows than columns",
      "A matrix with the same number of rows and columns"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "For matrix equality (A = B), which two conditions must be satisfied? (Pierce, 2020)",
    o: [
      "They have the same determinant and same trace",
      "They have the same size and equal corresponding entries",
      "They have the same inverse and same transpose",
      "They have the same number of rows and same diagonal"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Matrix addition is only possible when:",
    o: [
      "The matrices are square",
      "The number of columns in the first equals the number of rows in the second",
      "The matrices have the same dimension",
      "The matrices have the same determinant"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In scalar multiplication, a single number is:",
    o: [
      "Added to the diagonal entries only",
      "Multiplied with every entry of the matrix",
      "Multiplied with the first row only",
      "Divided into the determinant"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Matrix multiplication of an entire matrix by another entire matrix is possible if, and only if: (Pierce, 2020)",
    o: [
      "Both matrices are square",
      "Both matrices have the same dimension",
      "The number of columns in the first matrix equals the number of rows in the second matrix",
      "The determinants of both matrices are non-zero"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The transpose of a matrix is obtained by:",
    o: [
      "Multiplying each entry by -1",
      "Swapping the diagonal entries",
      "Changing the rows into columns and columns into rows",
      "Dividing each entry by the determinant"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "An identity matrix is described as:",
    o: [
      "A square matrix with ones on the main diagonal and zeros elsewhere",
      "A matrix with all entries equal to one",
      "A matrix where the determinant equals one",
      "A matrix that equals its own transpose"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "For a 2x2 matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant equals:",
    o: [
      "$a \\cdot c - b \\cdot d$",
      "$a \\cdot b - c \\cdot d$",
      "$a \\cdot d + b \\cdot c$",
      "$a \\cdot d - b \\cdot c$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "The inverse of matrix $A$ (denoted $A^{-1}$) is defined such that:",
    o: [
      "$A + A^{-1} = I$",
      "$A \\cdot A^{-1} = I$",
      "$A - A^{-1} = 0$",
      "$A^{-1} = A^T$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Using the minor determinants, cofactors, and adjoint method, the formula for the inverse of matrix A is:",
    o: [
      "$A^{-1} = |A| \\cdot Adj\\,A$",
      "$A^{-1} = Adj\\,A - |A|$",
      "$A^{-1} = \\frac{1}{|A|} \\cdot Adj\\,A$",
      "$A^{-1} = \\frac{Adj\\,A}{A}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "To find the adjoint of A (Adj A), you must:",
    o: [
      "Find the transpose of the matrix of minors",
      "Find the transpose of the cofactor of A",
      "Multiply the cofactor matrix by the determinant",
      "Negate all entries of the cofactor matrix"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In solving a system of linear equations $A \\cdot V = B$ using matrix algebra, the solution for V is:",
    o: [
      "$V = A \\cdot B$",
      "$V = B \\cdot A^{-1}$",
      "$V = A^{-1} \\cdot B$",
      "$V = A^T \\cdot B$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which type of matrix has all its elements equal to zero?",
    o: [
      "Identity Matrix",
      "Row Matrix",
      "Zero Matrix",
      "Square Matrix"
    ],
    a: 2
  },

  // ===== Identification (30) =====

  // --- Algorithms ---
  {
    type: "id",
    q: "What term describes a finite sequence of well-defined steps to perform some tasks? (Answer: one word)",
    a: "Algorithm"
  },
  {
    type: "id",
    q: "What provides an intermediate step between an English language description of an algorithm to its translation to a specific computer language? (Answer: one word)",
    a: "Pseudocode"
  },
  {
    type: "id",
    q: "What is used to illustrate algorithms and aid in the visualization of a program, read from top to bottom and left to right? (Answer: one word)",
    a: "Flowchart"
  },
  {
    type: "id",
    q: "Name the flowchart symbol that represents the beginning and end of a program. (Answer: two words)",
    a: "Start/Stop"
  },
  {
    type: "id",
    q: "Name the flowchart symbol that represents an instruction to be carried out by the program. (Answer: one word)",
    a: "Process"
  },
  {
    type: "id",
    q: "What algorithm property states that 'an algorithm has input values from a specified set'? (Answer: one word)",
    a: "Input"
  },
  {
    type: "id",
    q: "What algorithm property states that 'an algorithm should produce the desired output after a finite number of steps for any input in the set'? (Rosen, 2019) (Answer: one word)",
    a: "Finiteness"
  },
  {
    type: "id",
    q: "What algorithm property states that 'an algorithm should produce the correct output values for each set of input values'? (Rosen, 2019) (Answer: one word)",
    a: "Correctness"
  },
  {
    type: "id",
    q: "What are the two main kinds of control structures? (Answer: two words separated by 'and')",
    a: "Conditional Controls and Loop Controls"
  },
  {
    type: "id",
    q: "Which loop control structure checks the condition BEFORE executing the loop body? (Answer: two words with a hyphen)",
    a: "while-do"
  },
  {
    type: "id",
    q: "Which loop control structure executes the loop body first, then checks the condition? (Answer: two words with a hyphen)",
    a: "repeat-until"
  },
  {
    type: "id",
    q: "Which loop control structure iterates over a fixed range (e.g., i = 2 to n)? (Answer: two words with a hyphen)",
    a: "for-do"
  },
  {
    type: "id",
    q: "In the trace table for the algorithm 'find the least number in the set {5, 4, 8, 3}', what is the value of min after Step 3? (Answer: integer)",
    a: "5"
  },
  {
    type: "id",
    q: "In the student pass/fail algorithm, a student with score $x = 75\\%$ produces what output? (Answer: one word)",
    a: "Passed"
  },
  {
    type: "id",
    q: "In the student pass/fail algorithm, a student with score $x = 50\\%$ produces what output? (Answer: one word)",
    a: "Failed"
  },

  // --- Matrices ---
  {
    type: "id",
    q: "What do you call the matrix $\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$? (Answer: two words)",
    a: "Identity Matrix"
  },
  {
    type: "id",
    q: "What is the term for the matrix obtained by changing the rows into columns and columns into rows of a given matrix? (Answer: one word)",
    a: "Transpose"
  },
  {
    type: "id",
    q: "For the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$, what is the order of the matrix? (Answer in the form: m x n)",
    a: "3 x 3"
  },
  {
    type: "id",
    q: "For the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$, what is the $A_{23}$ entry? (Answer: integer)",
    a: "6"
  },
  {
    type: "id",
    q: "What is the determinant of a 2x2 matrix $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$? (Answer: integer)",
    a: "10"
  },
  {
    type: "id",
    q: "In matrix algebra, what is the result of $A^{-1} \\cdot A$? (Answer: one word or symbol)",
    a: "I"
  },
  {
    type: "id",
    q: "What is the term for the matrix consisting of determinants of submatrices formed by removing each element's row and column? (Answer: three words)",
    a: "Matrix of Minors"
  },
  {
    type: "id",
    q: "What is the term for a matrix that is the transpose of the cofactor matrix? (Answer: two words)",
    a: "Adjoint (Adj A)"
  },
  {
    type: "id",
    q: "In the system $A \\cdot V = B$, what matrix represents the unknowns $x$, $y$, $z$? (Answer: one letter)",
    a: "V"
  },
  {
    type: "id",
    q: "What type of matrix has all elements in a single row? (Answer: two words)",
    a: "Row Matrix"
  },
  {
    type: "id",
    q: "Given $A = \\begin{pmatrix} 1 & 6 \\\\ 9 & 3 \\\\ 6 & 0 \\end{pmatrix}$, what is the order of matrix $2A$? (Answer in the form: m x n)",
    a: "3 x 2"
  },
  {
    type: "id",
    q: "In the cofactor sign pattern $\\begin{pmatrix} +1 & -1 & +1 \\\\ -1 & +1 & -1 \\\\ +1 & -1 & +1 \\end{pmatrix}$, what sign is assigned to the $a_{22}$ entry? (Answer: + or -)",
    a: "+"
  },
  {
    type: "id",
    q: "What is the value of $\\det(A)$ for $A = \\begin{pmatrix} 2 & 1 & -1 \\\\ -3 & -1 & 2 \\\\ -2 & 1 & 2 \\end{pmatrix}$ as computed in the handout? (Answer: integer)",
    a: "-1"
  },
  {
    type: "id",
    q: "From the system of linear equations in the handout, what is the value of $x$ in the solution $x = ?, y = 3, z = -1$? (Answer: integer)",
    a: "2"
  },
  {
    type: "id",
    q: "What operation on matrices requires that the two matrices have the same dimension? (Answer: two words)",
    a: "Addition and Subtraction"
  },

  // ===== True or False (10) =====

  {
    type: "tf",
    q: "An algorithm is guaranteed to stop after a finite number of steps have been done.",
    a: true
  },
  {
    type: "tf",
    q: "A pseudocode is a specific programming language used to write algorithms.",
    a: false
  },
  {
    type: "tf",
    q: "The 'Generality' property of an algorithm means it should be applicable for all problems of the desired form, not just for a particular set of input values. (Rosen, 2019)",
    a: true
  },
  {
    type: "tf",
    q: "In the repeat-until control structure, the loop body is executed at least once before the condition is checked.",
    a: true
  },
  {
    type: "tf",
    q: "A flowchart is read from bottom to top and right to left.",
    a: false
  },
  {
    type: "tf",
    q: "Only square matrices have determinants.",
    a: true
  },
  {
    type: "tf",
    q: "For matrix multiplication AB to be possible, the number of rows in A must equal the number of columns in B.",
    a: false
  },
  {
    type: "tf",
    q: "The identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere.",
    a: true
  },
  {
    type: "tf",
    q: "Two matrices A and B are equal if they have the same size and equal corresponding entries.",
    a: true
  },
  {
    type: "tf",
    q: "A Zero Matrix is a matrix that has all its diagonal elements equal to zero.",
    a: false
  },

  // ===== Fill in the Blank (20) =====

  // --- Algorithms ---
  {
    type: "fitb",
    before: "An algorithm is a",
    after: "of well-defined steps to perform some tasks.",
    a: "finite sequence"
  },
  {
    type: "fitb",
    before: "The",
    after: "property of an algorithm states that 'the output values are the solution to the problem.' (Rosen, 2019)",
    a: "Output"
  },
  {
    type: "fitb",
    before: "Control structures are instructions that tell the algorithm what to do: what commands to be executed and",
    after: "they would be executed. (Fortney, 2021)",
    a: "when and how"
  },
  {
    type: "fitb",
    before: "In the if-then-else algorithm, if $x \\geq 60$ then output 'Passed', else output",
    after: "",
    a: "'Failed'"
  },
  {
    type: "fitb",
    before: "In the pseudocode for finding minimum value: 'for i := 2 to n, if min >",
    after: "then min := $a_i$'",
    a: "$a_1$"
  },
  {
    type: "fitb",
    before: "Tracing an algorithm is a good practice to test the algorithm's consistency and to",
    after: ". (Fortney, 2021)",
    a: "spot errors or lapses"
  },
  {
    type: "fitb",
    before: "The flowchart symbol that indicates the flow of the algorithm is called",
    after: "",
    a: "Arrows"
  },
  {
    type: "fitb",
    before: "The while-do loop in the algorithm for finding the order of factor two repeats while $n$ is",
    after: "",
    a: "even"
  },

  // --- Matrices ---
  {
    type: "fitb",
    before: "A matrix is a mathematical object that contains a rectangular table arranged in horizontal rows ($m$) and vertical",
    after: "($n$) enclosed in brackets.",
    a: "columns"
  },
  {
    type: "fitb",
    before: "A",
    after: "matrix is a matrix having all its elements in a single column.",
    a: "column"
  },
  {
    type: "fitb",
    before: "The determinant of a 2x2 matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ equals",
    after: "",
    a: "$a \\cdot d - b \\cdot c$"
  },
  {
    type: "fitb",
    before: "The inverse of matrix A is found using the formula $A^{-1} = \\frac{1}{|A|} \\cdot$",
    after: "",
    a: "$Adj\\,A$"
  },
  {
    type: "fitb",
    before: "The adjoint of A is obtained by taking the",
    after: "of the cofactor of A.",
    a: "transpose"
  },
  {
    type: "fitb",
    before: "To add or subtract matrices, just add or subtract the",
    after: "entries.",
    a: "corresponding"
  },
  {
    type: "fitb",
    before: "In matrix multiplication, scalar multiplication is when a single number is multiplied with",
    after: "of a matrix.",
    a: "every entry"
  },
  {
    type: "fitb",
    before: "For a system of linear equations $A \\cdot V = B$, solving for $V$ gives $V =$",
    after: "",
    a: "$A^{-1} \\cdot B$"
  },
  {
    type: "fitb",
    before: "The Matrix of Cofactors is obtained from the Matrix of Minors by multiplying elements by $+1$ or $-1$ using the sign",
    after: "",
    a: "pattern $\\begin{pmatrix} +1 & -1 & +1 \\\\ -1 & +1 & -1 \\\\ +1 & -1 & +1 \\end{pmatrix}$"
  },
  {
    type: "fitb",
    before: "A square matrix with ones on the main diagonal and zeros elsewhere is called the",
    after: "matrix.",
    a: "Identity"
  },
  {
    type: "fitb",
    before: "Matrix multiplication of matrix A by matrix B is possible if and only if the number of columns in A equals the number of",
    after: "in B.",
    a: "rows"
  },
  {
    type: "fitb",
    before: "In the example system of equations, multiplying both sides of $A \\cdot V = B$ by $A^{-1}$ gives $I \\cdot V =$",
    after: ", so $V = A^{-1} \\cdot B$.",
    a: "$A^{-1} \\cdot B$"
  }
];