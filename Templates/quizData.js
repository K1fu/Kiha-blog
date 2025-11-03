const quizData = {
    // Fill-in-the-Blank questions
    fillInTheBlank: [
        {
            question: "According to William James, the **I** self refers to feelings—what you feel like you are in the ___ moment.",
            blankWord: "present",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ self, as described by Carl Rogers, is how individuals perceive themselves currently.",
            blankWord: "Real",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "Donald Winnicott's ___ Self is described as a protective persona formed through societal pressure.",
            blankWord: "False",
            scoreValue: 2,
            type: "fillInTheBlank"
        }
    ],

    // Multiple Choice questions
    multipleChoice: [
        {
            question: "Which term, as part of William James' theory, represents a more objective approach to the self, including one's profession and role, reflecting how the world views them?",
            options: ["I", "Me", "Ideal Self", "True Self"],
            answer: "Me",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The **Global Model** suggests an individual possesses which of the following?",
            options: [
                "A set of conflicting 'Multiple Selves'",
                "A cohesive, but constantly changing, identity",
                "Consistent traits, values, and personality across different situations",
                "The ability to distinguish thoughts from emotions (Intrapsychic differentiation)"
            ],
            answer: "Consistent traits, values, and personality across different situations",
            scoreValue: 2,
            type: "multipleChoice"
        },
        {
            question: "Which component of Albert Bandura's Human Agency is defined as the process of setting goals?",
            options: ["Forethought", "Self-reactiveness", "Intentionality", "Self-reflection"],
            answer: "Intentionality",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions
    identification: [
        {
            question: "In the Differentiated Model of self, what specific type of differentiation involves the ability to distinguish your experience from the experience of people you are connected to?",
            correctAnswers: ["Interpersonal differentiation", "Interpersonal", "interpersonal differentiation"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which theorist proposed the concepts of the Real Self (current perception) and the Ideal Self (best version)?",
            correctAnswers: ["Carl Rogers", "Rogers", "carl rogers"],
            scoreValue: 2,
            type: "identification"
        }
    ],

    // True/False questions
    trueFalse: [
        {
            question: "According to Donald Winnicott, the True Self is the protective persona formed through societal pressure.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "David Lester's Theory suggests that the 'Unified self' is a cohesive identity.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "In Bandura's theory, **Agentic behavior** is defined as self-initiated behavior.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        }
    ]
};