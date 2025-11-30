const quizData = {
    // Fill-in-the-Blank questions
    fillInTheBlank: [
        {
            question: "According to William James, the **I** self refers to feelings—what you feel like you are in the ___ moment.",
            blankWord: "present",
            explanation: "The 'I' self is the subjective knower, representing your current experience and feelings in the present moment.",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
    ],

    // Multiple Choice questions
    multipleChoice: [
        {
            question: "Which term, as part of William James' theory, represents a more objective approach to the self, including one's profession and role, reflecting how the world views them?",
            options: ["I", "Me", "Ideal Self", "True Self"],
            answer: "Me",
            explanation: "The 'Me' self is the objective knower, representing how the world views you, including your roles and profession.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions
    identification: [
        {
            question: "In the Differentiated Model of self, what specific type of differentiation involves the ability to distinguish your experience from the experience of people you are connected to?",
            correctAnswers: ["Interpersonal differentiation", "Interpersonal", "interpersonal differentiation"],
            explanation: "Interpersonal differentiation is the ability to distinguish your experience from the experience of people you are connected to.",
            scoreValue: 2,
            type: "identification"
        }
    ],

    // True/False questions
    trueFalse: [
        {
            question: "According to Donald Winnicott, the True Self is the protective persona formed through societal pressure.",
            answer: false,
            explanation: "The True Self, according to Winnicott, is the authentic self, while the False Self is the protective persona formed due to societal pressure.",
            scoreValue: 1,
            type: "trueFalse"
        }
    ]
};