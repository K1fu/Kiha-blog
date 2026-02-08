const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "According to the provided material, how do we tend to think of patterns?",
        o: ["Random sequences that do not repeat", "Sequences or designs that are orderly and that repeat", "Anything that has no symmetry", "Mathematical equations used in physics"],
        a: 1
      },
      {
        type: "mc",
        q: "What is defined as a pattern that is 'not random'?",
        o: ["Fractals", "The spots on a giraffe", "A mathematical sentence", "Logarithmic spirals"],
        a: 1
      },
      {
        type: "mc",
        q: "Which type of pattern is described as 'when different sides of something are alike'?",
        o: ["Fractals", "Symmetry", "Tessellations", "Fibonacci sequence"],
        a: 1
      },
      {
        type: "mc",
        q: "Snowflakes are mentioned as having which type of symmetry?",
        o: ["Two-fold", "Four-fold", "Six-fold", "Infinite"],
        a: 2
      },
      {
        type: "mc",
        q: "What are 'never-ending' patterns that repeat indefinitely as the pattern is iterated on an infinitely smaller scale?",
        o: ["Spirals", "Tessellations", "Fractals", "Symmetry"],
        a: 2
      },
      {
        type: "mc",
        q: "A special type of spiral that gets smaller as it goes is called a:",
        o: ["Iterated spiral", "Fibonacci spiral", "Logarithmic spiral", "Symmetrical spiral"],
        a: 2
      },
      {
        type: "mc",
        q: "In the Fibonacci sequence ($1, 1, 2, 3, 5, 8, 13, 21...$), how is each number determined?",
        o: ["It is the product of the two numbers before it", "It is the sum of the two numbers before it", "It is double the previous number", "It is the square of the previous number"],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following in nature exhibits a Fibonacci pattern?",
        o: ["The spots on a giraffe", "A snowflake", "The family tree within a honeybee colony", "A water droplet splash"],
        a: 2
      },
      {
        type: "mc",
        q: "What are patterns formed by repeated cubes or tiles?",
        o: ["Fractals", "Spirals", "Tessellations", "Symmetry"],
        a: 2
      },
      {
        type: "mc",
        q: "Modern GPS devices depend on math and statistics to determine what value?",
        o: ["The Earth's circumference", "The speed of light", "The distance to the Moon", "The weight of the satellite"],
        a: 1
      },
      {
        type: "mc",
        q: "Which area of engineering uses math to 'model real-life situations for testing and learning purposes'?",
        o: ["Robotics", "Surveying", "All engineering fields", "Automotive Design"],
        a: 2
      },
      {
        type: "mc",
        q: "In media, math is related to the convincing nature of what used in advertising?",
        o: ["Colors", "Sounds", "Numbers", "Actors"],
        a: 2
      },
      {
        type: "mc",
        q: "Advanced medical devices rely on studies supported by which mathematical field?",
        o: ["Algebra", "Statistics", "Calculus", "Geometry"],
        a: 1
      },
      {
        type: "mc",
        q: "Overseeing which aspect of a company is described as 'key to survival and success'?",
        o: ["Marketing", "Finances", "Human Resources", "Product design"],
        a: 1
      },
      {
        type: "mc",
        q: "Which characteristic of the language of mathematics means being 'able to make very fine distinctions'?",
        o: ["Concise", "Powerful", "Precise", "Symbolic"],
        a: 2
      },
      {
        type: "mc",
        q: "The mathematical analog of a 'noun' is called a(n):",
        o: ["Sentence", "Relation", "Expression", "Function"],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is an example of an expression?",
        o: ["$3 + 4 = 7$", "$5$", "$x = 2$", "Carol loves mathematics"],
        a: 1
      },
      {
        type: "mc",
        q: "What must a mathematical sentence do, just as an English sentence does?",
        o: ["Include at least one variable", "State a complete thought", "Contain only numbers", "Be always true"],
        a: 1
      },
      {
        type: "mc",
        q: "Sentences in mathematics must have:",
        o: ["Brackets", "Verbs", "Exponents", "Fractions"],
        a: 1
      },
      {
        type: "mc",
        q: "In the sentence $3 + 4 = 7$, what is the verb?",
        o: ["$3$", "$+$", "$=$", "$7$"],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following sentences is 'sometimes true/sometimes false'?",
        o: ["$1 + 2 = 3$", "$1 + 2 = 4$", "$x = 2$", "$x + 3 = 3 + x$"],
        a: 2
      },
      {
        type: "mc",
        q: "Which meaning of 'is' indicates that two objects are 'one and the same object'?",
        o: ["Adjectival phrase", "Is an example of", "Equals", "Potential relationship"],
        a: 2
      },
      {
        type: "mc",
        q: "The 'is' in '5 is less than 10' describes a:",
        o: ["Property", "Transformation", "Logic operator", "Naming convention"],
        a: 0
      },
      {
        type: "mc",
        q: "A collection of objects in mathematical discourse is called a:",
        o: ["Function", "Relation", "Set", "Expression"],
        a: 2
      },
      {
        type: "mc",
        q: "What symbol is used for 'is an element of'?",
        o: ["$=$", "$\\in$", "$\\wedge$", "$\\sim$"],
        a: 1
      },
      {
        type: "mc",
        q: "What is a 'mathematical transformation' that takes an object and transforms it into another?",
        o: ["Relation", "Function", "Expression", "Connective"],
        a: 1
      },
      {
        type: "mc",
        q: "Which mathematical 'object' behaves like an adjective and refers to a potential relationship?",
        o: ["Noun", "Expression", "Relation", "Symbol"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the symbol for 'negation'?",
        o: ["$\\wedge$", "$\\vee$", "$\\sim$", "$\\therefore$"],
        a: 2
      },
      {
        type: "mc",
        q: "A compound sentence formed by using the word 'and' is a:",
        o: ["Negation", "Conjunction", "Disjunction", "Implication"],
        a: 1
      },
      {
        type: "mc",
        q: "What does the statement $p \\Rightarrow q$ mean?",
        o: ["$p$ is equal to $q$", "$p$ or $q$ is true", "If $p$ is true, then $q$ must also be true", "$p$ and $q$ are both false"],
        a: 2
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "Identify the next number in the sequence: $1, 1, 2, 3, 5, \\dots$ (Answer as integer)",
        a: "8"
      },
      {
        type: "id",
        q: "According to the source, what is the speed of light value determined by? (Answer format: X and Y)",
        a: "math and experimentation"
      },
      {
        type: "id",
        q: "Identify the mathematical symbol: $\\approx$",
        a: "approximately equal to"
      },
      {
        type: "id",
        q: "Identify the mathematical symbol: $\\therefore$",
        a: "therefore"
      },
      {
        type: "id",
        q: "What is the meaning of the symbol: $\\neq$?",
        a: "not equal to"
      },
      {
        type: "id",
        q: "What is the name given to a mathematical object of interest, analogous to a 'noun'?",
        a: "expression"
      },
      {
        type: "id",
        q: "State the characteristic: 'able to say things briefly'.",
        a: "concise"
      },
      {
        type: "id",
        q: "State the characteristic: 'able to express complex thoughts with relative ease'.",
        a: "powerful"
      },
      {
        type: "id",
        q: "In the sentence '5 is a prime number', what does 'is' mean?",
        a: "is an example of"
      },
      {
        type: "id",
        q: "What do we call the members of a set?",
        a: "elements"
      },
      {
        type: "id",
        q: "Identify the logical connective used in: 'Mariella eats fries and Mae drinks soda'.",
        a: "conjunction"
      },
      {
        type: "id",
        q: "What is the symbolic expression for 'p or q'? (Answer using LaTeX symbol)",
        a: "$p \\vee q$"
      },
      {
        type: "id",
        q: "In an implication $p \\Rightarrow q$, what is statement $p$ called?",
        a: "premise"
      },
      {
        type: "id",
        q: "In an implication $p \\Rightarrow q$, what is statement $q$ called?",
        a: "conclusion"
      },
      {
        type: "id",
        q: "Identify the pattern seen in trees, rivers, and mountains that repeats indefinitely.",
        a: "fractals"
      },
      {
        type: "id",
        q: "What is the symbol for the 'radical' or square root?",
        a: "$\\sqrt{}$"
      },
      {
        type: "id",
        q: "What mathematical grouping symbol is used for sets?",
        a: "{}"
      },
      {
        type: "id",
        q: "According to the handout, what value does $\\pi$ approximately equal? (Round to 2 decimal places)",
        a: "3.14"
      },
      {
        type: "id",
        q: "Identify the symbol for 'infinity'.",
        a: "$\\infty$"
      },
      {
        type: "id",
        q: "What is the mathematical analog of an English sentence?",
        a: "sentence"
      },
      {
        type: "id",
        q: "Is the sentence $x + 3 = 3 + x$ always true, always false, or sometimes true? (Answer as stated in source)",
        a: "always true"
      },
      {
        type: "id",
        q: "What term describes a mathematical transformation like 'the cosine of'?",
        a: "function"
      },
      {
        type: "id",
        q: "Identify the symbol used for 'implication' or 'implies'.",
        a: "$\\Rightarrow$"
      },
      {
        type: "id",
        q: "What pattern is formed by unfertilized eggs in a honeybee colony?",
        a: "Fibonacci pattern"
      },
      {
        type: "id",
        q: "Identify the use of math involved in 'MRI and Tomography'.",
        a: "Medicine and Health"
      },
      {
        type: "id",
        q: "Which finance application involves 'Pricing Strategies'?",
        a: "Finance and Business"
      },
      {
        type: "id",
        q: "Identify the symbol $\\wedge$.",
        a: "conjunction"
      },
      {
        type: "id",
        q: "What word is usually employed in a negation?",
        a: "not"
      },
      {
        type: "id",
        q: "What do we call the 'vocabulary' of a language?",
        a: "words"
      },
      {
        type: "id",
        q: "Which pattern is seen in hurricanes and galaxies?",
        a: "logarithmic spiral"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "Patterns can be thought of as anything that is not random.",
        a: true
      },
      {
        type: "tf",
        q: "Symmetry in non-living things, like snowflakes, is perfectly understood by scientists.",
        a: false
      },
      {
        type: "tf",
        q: "A logarithmic spiral is one that gets larger as it goes.",
        a: false
      },
      {
        type: "tf",
        q: "Tessellations can occur with both living and non-living things.",
        a: true
      },
      {
        type: "tf",
        q: "Mathematical language is primarily comprised of three things: numbers, symbols, and letters.",
        a: false
      },
      {
        type: "tf",
        q: "An expression states a complete thought.",
        a: false
      },
      {
        type: "tf",
        q: "It makes sense to ask if an expression is true or false.",
        a: false
      },
      {
        type: "tf",
        q: "A logical connective can be expressed as a truth function.",
        a: true
      },
      {
        type: "tf",
        q: "In the English sentence 'Carol loves mathematics', 'loves' is a noun.",
        a: false
      },
      {
        type: "tf",
        q: "Public Key Cryptography is an application of mathematics in technology.",
        a: true
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "Symmetry is when different sides of something are",
        after: ".",
        a: "alike"
      },
      {
        type: "fitb",
        before: "Fractals iterate on an",
        after: "smaller scale.",
        a: "infinitely"
      },
      {
        type: "fitb",
        before: "The Fibonacci sequence starts with",
        after: ", 1, 2, 3...",
        a: "1"
      },
      {
        type: "fitb",
        before: "A drone in a honeybee colony hatches from an",
        after: "egg.",
        a: "unfertilized"
      },
      {
        type: "fitb",
        before: "Math is used in engineering to",
        after: "real-life situations for testing.",
        a: "model"
      },
      {
        type: "fitb",
        before: "Every language has its",
        after: "and its rules for combining them.",
        a: "vocabulary"
      },
      {
        type: "fitb",
        before: "Mathematics is precise, concise, and",
        after: ".",
        a: "powerful"
      },
      {
        type: "fitb",
        before: "The mathematical analog of a 'noun' will be called an",
        after: ".",
        a: "expression"
      },
      {
        type: "fitb",
        before: "A mathematical sentence must state a",
        after: ".",
        a: "complete thought"
      },
      {
        type: "fitb",
        before: "Expressions like 5 and $2 + 3$ are names for the",
        after: "number.",
        a: "same"
      },
      {
        type: "fitb",
        before: "A mathematical 'object' that behaves like a potential relationship is called a",
        after: ".",
        a: "relation"
      },
      {
        type: "fitb",
        before: "The word 'is' in 'grass is green' is similar to 'is' in",
        after: ".",
        a: "5 is less than 10"
      },
      {
        type: "fitb",
        before: "The symbol $\\in$ is usually read as",
        after: ".",
        a: "is an element of"
      },
      {
        type: "fitb",
        before: "A function is a mathematical",
        after: "of an object into another.",
        a: "transformation"
      },
      {
        type: "fitb",
        before: "Logical connectives are also called logical",
        after: ".",
        a: "operators"
      },
      {
        type: "fitb",
        before: "Negation is the",
        after: "of a statement.",
        a: "opposite"
      },
      {
        type: "fitb",
        before: "A conjunction joins two simple sentences using the word",
        after: ".",
        a: "and"
      },
      {
        type: "fitb",
        before: "A disjunction joins two simple sentences using the word",
        after: ".",
        a: "or"
      },
      {
        type: "fitb",
        before: "In an implication, if $p$ is true, then $q$ must",
        after: "be true.",
        a: "also"
      },
      {
        type: "fitb",
        before: "Modern technology depends on basic",
        after: "to advance.",
        a: "research"
      }
    ];