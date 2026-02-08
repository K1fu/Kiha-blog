const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "Based on the handout, what is a proposition?",
        o: [
          "A question to be answered",
          "A declarative sentence that is either false or true (NOT both)",
          "An imperative command",
          "An algebraic equation with an unknown variable"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Using numerical symbols in propositional logic, which value represents 'true'?",
        o: ["0", "1", "T", "F"],
        a: 1
      },
      {
        type: "mc",
        q: "Which law states that 'every proposition must be either true or false, not both and not neither'?",
        o: ["Law of Identity", "Law of Non-Contradiction", "Law of Excluded Middle", "Law of Syllogism"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the Law of Identity represented symbolically?",
        o: ["$P \\neq P$", "$P \\approx P$", "$P = P$", "$P \\to P$"],
        a: 2
      },
      {
        type: "mc",
        q: "According to the Law of Non-Contradiction, logically correct propositions cannot:",
        o: [
          "Be simple sentences",
          "Use capital letters",
          "Affirm and deny the same thing",
          "Be represented in tables"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Why is the sentence '$x > 10$' not considered a proposition in the source?",
        o: [
          "It is too short",
          "The truth value depends on the value of $x$",
          "It uses mathematical symbols",
          "It is a request"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What tool is defined as a 'chart to keep track of all the possibilities in the proposition'?",
        o: ["Venn Diagram", "Roster Method", "Truth Table", "Set-Builder Notation"],
        a: 2
      },
      {
        type: "mc",
        q: "A proposition constructed by combining one or more existing propositions is called a:",
        o: ["Simple Proposition", "Compound Proposition", "Logical Connective", "Universal Set"],
        a: 1
      },
      {
        type: "mc",
        q: "Which connective uses the symbol $\\wedge$ and the keyword 'and'?",
        o: ["Negation", "Conjunction", "Disjunction", "Conditional"],
        a: 1
      },
      {
        type: "mc",
        q: "The disjunction of two propositions is true if:",
        o: [
          "Both propositions are false",
          "At least one of the propositions is true",
          "Only the first proposition is true",
          "Both propositions are true only"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "How is a 'set' defined in the mathematical material?",
        o: [
          "An ordered sequence of numbers",
          "A well-defined and unordered collection of objects",
          "A group of elements that must be numbers",
          "A list of objects that must be finite"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which method of set notation involve 'listing' the elements, such as $S = \\{0, 1, 2, 3\\}$?",
        o: ["Descriptive Method", "Set Builder Method", "Roster Method", "Venn Method"],
        a: 2
      },
      {
        type: "mc",
        q: "Which set contains 'all elements relevant to a particular discussion or problem'?",
        o: ["Finite Set", "Universal Set", "Subset", "Empty Set"],
        a: 1
      },
      {
        type: "mc",
        q: "What does the notation $x \\in S$ represent?",
        o: ["$x$ is not an element of $S$", "$x$ is equal to $S$", "$x$ is an element of $S$", "$x$ is a subset of $S$"],
        a: 2
      },
      {
        type: "mc",
        q: "In an infinite set, what do the three dots ($\\dots$) indicate?",
        o: ["The set is empty", "The list goes on", "The set is finite", "The elements are unknown"],
        a: 1
      },
      {
        type: "mc",
        q: "Two sets are identical 'if and only if they contain EXACTLY THE SAME elements'. This is:",
        o: ["Set Inequality", "Set Equality", "Set Inclusion", "Set Properness"],
        a: 1
      },
      {
        type: "mc",
        q: "Which symbol is used to represent 'for every' in the definition of a subset?",
        o: ["$\\exists$", "$\\in$", "$\\forall$", "$\\to$"],
        a: 2
      },
      {
        type: "mc",
        q: "A proper subset $A \\subset B$ is a subset that:",
        o: ["Is equal to set $B$", "Is not equal to set $B$", "Contains more elements than $B$", "Is the universal set"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the formula to determine the number of subsets for a set with $n$ elements?",
        o: ["$n^2$", "$2n$", "$2^n$", "$n!$"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the formula for the number of proper subsets?",
        o: ["$2^n$", "$2^{n-1}$", "$2^n - 1$", "$n^2 - 1$"],
        a: 2
      },
      {
        type: "mc",
        q: "Which visual representation uses logical relationships to decide how items should be grouped?",
        o: ["Truth Table", "Venn Diagram", "Roster List", "Bar Chart"],
        a: 1
      },
      {
        type: "mc",
        q: "If $A = \\{dog, cat\\}$, how many subsets does it have?",
        o: ["2", "3", "4", "5"],
        a: 2
      },
      {
        type: "mc",
        q: "If $A = \\{dog, cat\\}$, how many proper subsets does it have?",
        o: ["2", "3", "4", "1"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the truth value of the statement '2022 < 100'?",
        o: ["True", "False", "Neither", "Both"],
        a: 1
      },
      {
        type: "mc",
        q: "Which connective uses the symbol $\\sim$ or $\\neg$?",
        o: ["Conjunction", "Disjunction", "Negation", "Universal"],
        a: 2
      },
      {
        type: "mc",
        q: "In the conjunction $A \\wedge B$, if $A$ is True and $B$ is False, the result is:",
        o: ["True", "False", "1", "T"],
        a: 1
      },
      {
        type: "mc",
        q: "In the disjunction $A \\vee B$, if $A$ is True and $B$ is False, the result is:",
        o: ["True", "False", "0", "F"],
        a: 0
      },
      {
        type: "mc",
        q: "Which law is being applied: 'Is it January 1 today? The answer could only be yes or no and not both'?",
        o: ["Law of Identity", "Law of Non-Contradiction", "Law of Excluded Middle", "Aristotelian Law"],
        a: 1
      },
      {
        type: "mc",
        q: "What does the symbol $\\to$ represent in the handout's subset definition?",
        o: ["And", "Or", "If-then", "Equal to"],
        a: 2
      },
      {
        type: "mc",
        q: "Which set is defined as 'unordered collection/aggregate of objects'?",
        o: ["A sequence", "A set", "A proposition", "A table"],
        a: 1
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "State the number of subsets for a set with 4 elements. (Answer as integer)",
        a: "16"
      },
      {
        type: "id",
        q: "State the number of proper subsets for a set with 3 elements. (Answer as integer)",
        a: "7"
      },
      {
        type: "id",
        q: "What letter is used to represent a true statement in propositional logic tables?",
        a: "T"
      },
      {
        type: "id",
        q: "What numerical symbol represents a false statement?",
        a: "0"
      },
      {
        type: "id",
        q: "Identify the name of the law: $P = P$.",
        a: "Law of Identity"
      },
      {
        type: "id",
        q: "What is the truth value of 'Chickens can fly' according to the examples? (Answer: T or F)",
        a: "F"
      },
      {
        type: "id",
        q: "Identify the method of notation for: $S = \\{whole\\ numbers\\ less\\ than\\ 10\\}$.",
        a: "Descriptive Method"
      },
      {
        type: "id",
        q: "Identify the symbol meaning 'is NOT an element of'.",
        a: "$\\notin$"
      },
      {
        type: "id",
        q: "What type of set has a number of elements that is NOT COUNTABLE?",
        a: "Infinite Set"
      },
      {
        type: "id",
        q: "Identify the connective that combines propositions using the keyword 'not'.",
        a: "Negation"
      },
      {
        type: "id",
        q: "Identify the symbol used for 'and' in a conjunction.",
        a: "$\\wedge$"
      },
      {
        type: "id",
        q: "Identify the symbol used for 'or' in a disjunction.",
        a: "$\\vee$"
      },
      {
        type: "id",
        q: "If $f(x) = x^2$ and $x = 4$, find the truth value of $x > 10$. (Answer: True or False)",
        a: "True"
      },
      {
        type: "id",
        q: "Give the symbolic definition of a Proper Subset $A$ of $B$. (Format: A subset B and A not equal B)",
        a: "A \\subset B"
      },
      {
        type: "id",
        q: "What is the number of subsets for the set $\\{S, L, E, D\\}$? (Answer as integer)",
        a: "16"
      },
      {
        type: "id",
        q: "What is the number of proper subsets for the set $\\{1, 2\\}$? (Answer as integer)",
        a: "3"
      },
      {
        type: "id",
        q: "Identify the symbol meaning 'if-then'.",
        a: "$\\to$"
      },
      {
        type: "id",
        q: "What do we call the objects inside a set?",
        a: "elements"
      },
      {
        type: "id",
        q: "Identify the method: $B = \\{cat, horse, dog\\}$.",
        a: "Roster Method"
      },
      {
        type: "id",
        q: "A set with a countable number of elements is called what?",
        a: "Finite Set"
      },
      {
        type: "id",
        q: "Identify the symbol for a Universal Set.",
        a: "U"
      },
      {
        type: "id",
        q: "What is the truth value of $\\neg P$ if $P$ is True?",
        a: "False"
      },
      {
        type: "id",
        q: "What is the truth value of $P \\wedge Q$ if $P=1$ and $Q=0$?",
        a: "0"
      },
      {
        type: "id",
        q: "Identify the symbol $\\forall$.",
        a: "for every"
      },
      {
        type: "id",
        q: "What is the value of $2^5$ if a set has 5 elements? (Answer as integer)",
        a: "32"
      },
      {
        type: "id",
        q: "Identify the term for a subset contained in a larger set or an equal set.",
        a: "Subset"
      },
      {
        type: "id",
        q: "According to the handout, capital letters are usually used for what?",
        a: "proposition"
      },
      {
        type: "id",
        q: "Identify the author/source associated with the Truth Table definition in Handout 1.1.",
        a: "Levin"
      },
      {
        type: "id",
        q: "Is 'Please keep your phones on silent mode' a proposition? (Answer: Y or N)",
        a: "N"
      },
      {
        type: "id",
        q: "How many elements are in the set $A = \\{whole\\ numbers\\ less\\ than\\ 5\\}$? (Answer as integer)",
        a: "5"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "A proposition can be both true and false at the same time.",
        a: false
      },
      {
        type: "tf",
        q: "In numerical symbols, 1 represents true and 0 represents false.",
        a: true
      },
      {
        type: "tf",
        q: "The Law of Excluded Middle states a proposition must be either true or false.",
        a: true
      },
      {
        type: "tf",
        q: "A set is an ordered collection of objects.",
        a: false
      },
      {
        type: "tf",
        q: "The Roster Method is also known as the Listing Method.",
        a: true
      },
      {
        type: "tf",
        q: "An infinite set has a countable number of elements.",
        a: false
      },
      {
        type: "tf",
        q: "The negation of a proposition states the opposite of that proposition.",
        a: true
      },
      {
        type: "tf",
        q: "A conjunction $(\\wedge)$ is true if at least one proposition is true.",
        a: false
      },
      {
        type: "tf",
        q: "A proper subset cannot be equal to the set it belongs to.",
        a: true
      },
      {
        type: "tf",
        q: "Venn Diagrams are used for visually representing sets.",
        a: true
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "A proposition is a",
        after: "sentence that is either false or true.",
        a: "declarative"
      },
      {
        type: "fitb",
        before: "The Law of",
        after: "states that things must be identical with themselves.",
        a: "Identity"
      },
      {
        type: "fitb",
        before: "The Law of Non-Contradiction states propositions cannot",
        after: "and deny the same thing.",
        a: "affirm"
      },
      {
        type: "fitb",
        before: "A",
        after: "table is a chart to keep track of all possibilities.",
        a: "Truth"
      },
      {
        type: "fitb",
        before: "A compound proposition combines one or more existing propositions using logical",
        after: ".",
        a: "connectives"
      },
      {
        type: "fitb",
        before: "The symbol $(\\wedge)$ represents the word",
        after: "in logic.",
        a: "and"
      },
      {
        type: "fitb",
        before: "The symbol $(\\vee)$ represents the word",
        after: "in logic.",
        a: "or"
      },
      {
        type: "fitb",
        before: "A set is defined as a well-defined and",
        after: "collection of objects.",
        a: "unordered"
      },
      {
        type: "fitb",
        before: "The objects in a set are referred to as",
        after: "or members.",
        a: "elements"
      },
      {
        type: "fitb",
        before: "The number of subsets of a set with $n$ elements is",
        after: ".",
        a: "$2^n$"
      },
      {
        type: "fitb",
        before: "The number of proper subsets is",
        after: ".",
        a: "$2^n - 1$"
      },
      {
        type: "fitb",
        before: "The Roster Method is also called the",
        after: "method.",
        a: "Listing"
      },
      {
        type: "fitb",
        before: "Sets are usually denoted by",
        after: "case letters.",
        a: "upper"
      },
      {
        type: "fitb",
        before: "The set containing all elements relevant to a problem is the",
        after: "set.",
        a: "Universal"
      },
      {
        type: "fitb",
        before: "The symbol $\\in$ means that $x$ is an",
        after: "of set $S$.",
        a: "element"
      },
      {
        type: "fitb",
        before: "The three dots $(\\dots)$ in a set list are called an",
        after: ".",
        a: "ellipsis"
      },
      {
        type: "fitb",
        before: "Two sets are",
        after: "if they contain exactly the same elements.",
        a: "equal"
      },
      {
        type: "fitb",
        before: "The symbol $\\subseteq$ indicates that $A$ is a",
        after: "of $U$.",
        a: "subset"
      },
      {
        type: "fitb",
        before: "In the subset definition, the symbol $\\forall$ means",
        after: ".",
        a: "for every"
      },
      {
        type: "fitb",
        before: "A proper subset $A$ of $B$ requires that $A$ is a subset of $B$ and $A$ is",
        after: "to $B$.",
        a: "not equal"
      }
    ];