// Quiz template

const subjectName = "Understanding the Self - Midterms"; // Define the subject name

const conceptData = [
    {
        id: 'anthropology-core-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Which statement best defines the field of Anthropology?",
            options: [
                "The study of ancient civilizations through written texts and monuments.",
                "The study of the physical environment and its impact on human culture.",
                "The exclusive study of primitive societies and their social structures.",
                "The study of people throughout the world in all periods of time."
            ],
            answer: "The study of people throughout the world in all periods of time.",
        },
        identification: {
            question: "What is the primary focus of Anthropology as a discipline?",
            correctAnswers: [
                "The study of people throughout the world in all periods of time"
            ],
        },
        explanation: "Anthropology is a broad field defined as **the study of people throughout the world in all periods of time**. This holistic approach is what distinguishes it from other social sciences, as it includes biology, culture, language, and history. Other options are too narrow.",
    },
    {
        id: 'anthropology-greek-origin',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The word 'Anthropology' is derived from which combination of Greek words?",
            options: [
                "Anthropos (human) and Logia (study)",
                "Andros (man) and Logos (reason)",
                "Anthros (life) and Pathos (suffering)",
                "Philos (love) and Sophia (wisdom)"
            ],
            answer: "Anthropos (human) and Logia (study)",
        },
        identification: {
            question: "What Greek words form the origin of 'Anthropology'?",
            correctAnswers: [
                "Anthropos and Logia",
                "Anthropos (human) and Logia (study)"
            ],
        },
        explanation: "The term **Anthropology** comes from the Greek words **Anthropos** meaning 'human' and **Logia** meaning 'study'. A common mix-up is with **Logos** (reason, word) or with **Philosophia** (love of wisdom), but anthropology specifically emphasizes the study of humans.",
    },
    {
        id: 'anthropology-number-subdisciplines',
        stage: 1,
        mastered: false,
        mcq: {
            question: "How many major subdisciplines are traditionally recognized within the field of Anthropology?",
            options: [
                "Three (3)",
                "Four (4)",
                "Five (5)",
                "Two (2)"
            ],
            answer: "Four (4)",
        },
        identification: {
            question: "In the four-field approach, how many subdisciplines constitute Anthropology?",
            correctAnswers: [
                "Four",
                "4"
            ],
        },
        explanation: "Anthropology is traditionally divided into **four** major subdisciplines in the American tradition: Cultural (or Social) Anthropology, Archaeological Anthropology, Biological (or Physical) Anthropology, and Linguistic Anthropology.",
    },
    {
        id: 'cultural-anthropology-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Which subdiscipline of anthropology primarily focuses on the learned behavior of groups of people in specific environments?",
            options: [
                "Archaeology",
                "Linguistic anthropology",
                "Biological anthropology",
                "Cultural anthropology"
            ],
            answer: "Cultural anthropology",
        },
        identification: {
            question: "What subdiscipline of anthropology studies the learned behavior of human groups in specific environments?",
            correctAnswers: [
                "Cultural anthropology"
            ],
        },
        explanation: "**Cultural anthropology** studies the learned, shared behavior of people, including their customs, beliefs, and social organization. This focus on learned behavior is key to understanding its scope, which often overlaps with sociology but is typically more holistic and cross-cultural.",
    },
    {
        id: 'cultural-anthropology-alternative-name',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Cultural anthropology is also frequently referred to by what other name?",
            options: [
                "Physical anthropology",
                "Historical anthropology",
                "Social anthropology",
                "Applied anthropology"
            ],
            answer: "Social anthropology",
        },
        identification: {
            question: "What is the alternative name for Cultural anthropology, particularly common in the United Kingdom and Commonwealth countries?",
            correctAnswers: [
                "Social anthropology"
            ],
        },
        explanation: "**Cultural anthropology** is often known as **Social anthropology**, particularly outside of the US. While the names have slightly different historical emphasis (culture vs. social structure), they largely describe the same subdiscipline.",
    },
    {
        id: 'linguistic-anthropology-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The subdiscipline of anthropology that investigates how language influences social life and culture is called:",
            options: [
                "Forensic anthropology",
                "Linguistic anthropology",
                "Archaeology",
                "Biological anthropology"
            ],
            answer: "Linguistic anthropology",
        },
        identification: {
            question: "Which subdiscipline of anthropology studies the role of language in social life and human culture?",
            correctAnswers: [
                "Linguistic anthropology"
            ],
        },
        explanation: "**Linguistic anthropology** explores the relationship between language and culture. It studies how language shapes and is shaped by social life, patterns of thought, and communication, making it distinct from the other three core subdisciplines.",
    },
    {
        id: 'biological-anthropology-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Which subdiscipline of anthropology focuses on human evolution within the context of human culture and behavior?",
            options: [
                "Linguistic anthropology",
                "Archaeology",
                "Biological anthropology",
                "Socio-cultural anthropology"
            ],
            answer: "Biological anthropology",
        },
        identification: {
            question: "What subdiscipline of anthropology focuses on human evolution, physical variation, and the relationship between biology and culture?",
            correctAnswers: [
                "Biological anthropology"
            ],
        },
        explanation: "**Biological anthropology** (also known as **Physical anthropology**) is concerned with humans as a biological species, focusing on topics like human evolution, genetics, and how culture and environment influence our physical form and behavior.",
    },
    {
        id: 'biological-anthropology-alternative-name',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Biological anthropology is also commonly referred to as what?",
            options: [
                "Physical Anthropology",
                "Cultural Anthropology",
                "Forensic Anthropology",
                "Applied Anthropology"
            ],
            answer: "Physical Anthropology",
        },
        identification: {
            question: "What is the older, alternative name for Biological Anthropology?",
            correctAnswers: [
                "Physical Anthropology"
            ],
        },
        explanation: "**Biological anthropology** is the more current name for the field that was traditionally known as **Physical Anthropology**. Both terms describe the study of human biological variation, evolution, and primatology.",
    },
    {
        id: 'archaeology-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The subdiscipline of anthropology that interprets human history by analyzing material remains is:",
            options: [
                "Linguistic anthropology",
                "Ethnography",
                "Archaeology",
                "Biological anthropology"
            ],
            answer: "Archaeology",
        },
        identification: {
            question: "What is the subdiscipline of anthropology that analyzes material remains to interpret human history and prehistory?",
            correctAnswers: [
                "Archaeology"
            ],
        },
        explanation: "**Archaeology** involves the systematic recovery and analysis of **material remains** (artifacts, features, ecofacts) to reconstruct and interpret past human culture and behavior. This makes it distinct from the focus on living cultures in cultural anthropology.",
        },
        {
        id: 'self-cultural-shaping',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Contemporary anthropology views the 'Self' primarily as a concept shaped by what factors?",
            options: [
                "Universal, innate biological drives and genetic blueprints.",
                "Individual introspection, completely independent of social life.",
                "Culturally specific norms, values, and social practices.",
                "Economic status and global political movements alone."
            ],
            answer: "Culturally specific norms, values, and social practices.",
        },
        identification: {
            question: "According to contemporary anthropology, the 'Self' is primarily shaped by what three cultural elements?",
            correctAnswers: [
                "Norms, values, and social practices"
            ],
        },
        explanation: "In contemporary anthropology, the **Self** is understood to be profoundly **culturally shaped**. It is constructed through exposure to cultural norms, values, and the routine social practices of a given society. It is not viewed as a purely universal or innate concept.",
    },
    {
        id: 'social-relationships-identity',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The anthropological perspective emphasizes that social relationships have a profound influence on an individual's:",
            options: [
                "Physical health and diet preference.",
                "Identity and self-concept.",
                "Geographical location and migration patterns.",
                "Subconscious fears and anxieties."
            ],
            answer: "Identity and self-concept.",
        },
        identification: {
            question: "What specific aspect of the 'Person' is significantly influenced and constructed through social relationships?",
            correctAnswers: [
                "Identity",
                "Self-concept"
            ],
        },
        explanation: "Anthropologists highlight that **social relationships** are critical in forming an individual's **identity** and sense of personhood. Identity is not solo-generated but rather emerges and is maintained through interaction with others.",
    },
    {
        id: 'gender-roles-cultural-variation',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Based on anthropological findings, how are gender roles characterized across different cultures?",
            options: [
                "They are largely biologically determined and identical worldwide.",
                "They are rigid, inflexible, and resistant to change in every society.",
                "They differ significantly, being products of cultural context rather than universals.",
                "They are purely dictated by government laws and economic policies."
            ],
            answer: "They differ significantly, being products of cultural context rather than universals.",
        },
        identification: {
            question: "What conclusion does anthropology draw regarding the nature of gender roles across the spectrum of human societies?",
            correctAnswers: [
                "Gender roles differ across cultures",
                "Gender roles are culturally variable",
                "Gender roles differ significantly across cultures"
            ],
        },
        explanation: "Anthropology demonstrates that **gender roles** are highly variable and **differ across cultures**. This is a central critique of universalist claims, showing that what is considered 'masculine' or 'feminine' is defined by cultural context.",
    },
    {
        id: 'socialization-function',
        stage: 1,
        mastered: false,
        mcq: {
            question: "What is the primary function of **socialization** within a cultural context?",
            options: [
                "To establish rigid social hierarchies and caste systems.",
                "To teach individuals the core cultural norms and expected behaviors.",
                "To promote isolation and discourage community interaction.",
                "To document historical events for future generations."
            ],
            answer: "To teach individuals the core cultural norms and expected behaviors.",
        },
        identification: {
            question: "What process is responsible for teaching an individual the cultural norms, values, and expected behaviors of their society?",
            correctAnswers: [
                "Socialization"
            ],
        },
        explanation: "**Socialization** is the lifelong process through which individuals learn and internalize the beliefs, customs, and **cultural norms** necessary to function effectively as a member of their society. It is how culture is transmitted.",
    },
    {
        id: 'identity-flexibility',
        stage: 1,
        mastered: false,
        mcq: {
            question: "A key feature of human identities recognized by anthropologists is their quality of being:",
            options: [
                "Permanent and unchangeable after childhood.",
                "Solely dependent on national citizenship.",
                "Flexible and adaptable to new social contexts.",
                "Determined exclusively by professional career paths."
            ],
            answer: "Flexible and adaptable to new social contexts.",
        },
        identification: {
            question: "Anthropologically, identities are not fixed but are characterized by what two qualities when facing new contexts?",
            correctAnswers: [
                "Flexible and adaptable",
                "Adaptable and flexible"
            ],
        },
        explanation: "The anthropological view of identity is dynamic: identities are considered **flexible and adaptable**. They change over an individual's lifespan and can shift as a person moves between different social groups, environments, or cultural roles."
    },
    {
        id: 'geertz-interpretive-anthropology',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Which American anthropologist is best known for his theories on **interpretive anthropology** and the symbolic significance of culture?",
            options: [
                "Franz Boas",
                "Clifford James Geertz",
                "Marvin Harris",
                "Claude Lévi-Strauss"
            ],
            answer: "Clifford James Geertz",
        },
        identification: {
            question: "Name the American anthropologist who contributed significantly to interpretive anthropology, focusing on the symbolic nature of culture.",
            correctAnswers: [
                "Clifford James Geertz",
                "Clifford Geertz",
                "Geertz"
            ],
        },
        explanation: "**Clifford James Geertz** is the most prominent figure in **interpretive anthropology**, arguing that culture is a system of symbols and meaning that must be interpreted, much like a text, to be understood.",
    },
    {
        id: 'symbolic-anthropology-definition',
        stage: 1,
        mastered: false,
        mcq: {
            question: "Which field of anthropology posits that cultural symbols and meanings significantly influence individual identities?",
            options: [
                "Archaeology",
                "Symbolic anthropology",
                "Biological anthropology",
                "Materialist anthropology"
            ],
            answer: "Symbolic anthropology",
        },
        identification: {
            question: "What school of thought within anthropology emphasizes that cultural symbols and meanings are crucial in shaping individual identities?",
            correctAnswers: [
                "Symbolic anthropology"
            ],
        },
        explanation: "**Symbolic anthropology** focuses on the symbolic rather than the material aspects of culture. It emphasizes that human actions and individual identities are given meaning and direction by shared cultural symbols and the interpretations people make of them.",
    },
    {
        id: 'cultural-embeddedness-concept',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The concept that an individual's sense of self is deeply rooted in and inseparable from their cultural contexts is termed:",
            options: [
                "Psychological universalism",
                "Cultural embeddedness",
                "Cognitive dissonance",
                "Biological determinism"
            ],
            answer: "Cultural embeddedness",
        },
        identification: {
            question: "What term describes the anthropological idea that an individual's sense of self is deeply rooted in cultural contexts?",
            correctAnswers: [
                "Cultural embeddedness"
            ],
        },
        explanation: "**Cultural embeddedness** refers to the idea that the self is not a free-standing, universal entity but is deeply integrated into and shaped by the specific cultural environment, including its norms and practices.",
    },
    {
        id: 'performance-interpretation-concept',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The idea that the self is continuously negotiated, expressed, and is not fixed, but rather acted out through social interactions and interpretations of cultural symbols is known as:",
            options: [
                "Ecological adaptation",
                "Social determinism",
                "Performance and Interpretation",
                "Structural functionalism"
            ],
            answer: "Performance and Interpretation",
        },
        identification: {
            question: "What concept describes the view that identity is continuously negotiated and expressed through interactions and interpretations of cultural symbols?",
            correctAnswers: [
                "Performance and Interpretation"
            ],
        },
        explanation: "The concept of **Performance and Interpretation** views the self as a flexible entity that is constantly 'performed' and negotiated in social life. Individuals express their identities through interactions that are interpreted according to shared cultural symbols.",
    },
    {
        id: 'mead-cultural-relativism',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The American cultural anthropologist renowned for her studies on cultural relativism, gender roles, and the influence of socialization on individuals is:",
            options: [
                "Ruth Benedict",
                "Margaret Mead",
                "Zora Neale Hurston",
                "Nancy Scheper-Hughes"
            ],
            answer: "Margaret Mead",
        },
        identification: {
            question: "Name the American cultural anthropologist known for her pioneering work on cultural relativism, gender, and socialization (e.g., *Coming of Age in Samoa*).",
            correctAnswers: [
                "Margaret Mead",
                "Mead"
            ],
        },
        explanation: "**Margaret Mead** was an influential American cultural anthropologist who is famous for her work demonstrating the cultural variability of gender roles and the profound influence of **socialization** on identity, supporting the principle of **cultural relativism**.",
    },
    {
        id: 'cultural-relativity-self',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The principle that cultural norms and values shape individual identities, suggesting that what is 'normal' or 'good' for the self is culturally specific, is an application of:",
            options: [
                "Ethnocentrism",
                "Sociobiology",
                "Cultural Relativity",
                "Historical materialism"
            ],
            answer: "Cultural Relativity",
        },
        identification: {
            question: "What anthropological principle asserts that the norms and values shaping individual identities must be understood within their specific cultural context?",
            correctAnswers: [
                "Cultural Relativity"
            ],
        },
        explanation: "**Cultural Relativity** is the principle that an individual's beliefs and activities should be understood in terms of their own culture. Applied to the self, it means that the cultural norms and values shape identity differently across societies.",
    },
    {
        id: 'socialization-learning-process',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The broad process through which individuals acquire knowledge, skills, values, and identities from their upbringing and social interactions is known as:",
            options: [
                "Genetic inheritance",
                "Acculturation",
                "Socialization and learning",
                "Biological maturation"
            ],
            answer: "Socialization and learning",
        },
        identification: {
            question: "What term describes the process by which individuals internalize their culture through upbringing and social interactions?",
            correctAnswers: [
                "Socialization and learning",
                "Socialization"
            ],
        },
        explanation: "**Socialization and learning** encompass the methods—from formal schooling to informal interactions—by which individuals are taught to become functional members of their society, acquiring cultural knowledge and developing a sense of self.",
    },
    {
        id: 'identity-adaptability',
        stage: 1,
        mastered: false,
        mcq: {
            question: "The statement that 'Identities are adaptable cross cultures' refers to which quality of identity?",
            options: [
                "Rigidity of cultural boundaries",
                "Innate permanence",
                "Flexibility of identity",
                "Static social roles"
            ],
            answer: "Flexibility of identity",
        },
        identification: {
            question: "What key characteristic allows identities to change and adjust when individuals move or interact across different cultures?",
            correctAnswers: [
                "Flexibility of identity",
                "Adaptability"
            ],
        },
        explanation: "**Flexibility of identity** recognizes that the self is not a fixed construct but can adjust, change, and be negotiated as individuals encounter new cultural expectations and social environments.",
    },
    {
        id: 'geertz-mead-comparison',
        stage: 1,
        mastered: false,
        mcq: {
            question: "How do Clifford Geertz's and Margaret Mead's primary contributions to the study of the self differ?",
            options: [
                "Geertz focused on genetics; Mead focused on economics.",
                "Geertz focused on socialization; Mead focused on material culture.",
                "Geertz focused on symbolic interpretation; Mead explored diversity and socialization.",
                "Geertz focused on evolution; Mead focused on historical archaeology."
            ],
            answer: "Geertz focused on symbolic interpretation; Mead explored diversity and socialization.",
        },
        identification: {
            question: "Fill in the blank: Geertz focused on symbolic interpretation and performance, while Mead explored the diversity of identities shaped by cultural norms and the _________ process.",
            correctAnswers: [
                "Socialization"
            ],
        },
        explanation: "**Geertz** is known for his interpretive approach, focusing on **symbolic interpretation** and 'performance' of culture. **Mead** is famous for documenting the **diversity of identities** and the impact of **socialization** across different cultures, strongly promoting cultural relativism."
    },
    {
        "id": "james-objective-self-me",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "According to William James, the objective aspect of the self, which includes external attributes like profession, social roles, and reputation (how the world views you), is known as the:",
        "options": [
            "The I",
            "The Global Self",
            "The Ideal Self",
            "The Me"
        ],
        "answer": "The Me"
        },
        "identification": {
        "question": "What term did William James use for the objective, knowable aspect of the self, encompassing social roles and reputation?",
        "correctAnswers": [
            "The Me",
            "Me"
        ]
        },
        "explanation": "William James divided the self into the **Me** (the empirical, known self—objective, social roles, reputation) and the **I** (the pure ego—subjective, process of knowing). The **Me** is the objective self that the world views."
    },
    {
        "id": "james-subjective-self-i",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "When an individual is focusing purely on their subjective experiences, feelings, and the sense of being in the present moment, they are experiencing the self as defined by William James's concept of the:",
        "options": [
            "Me",
            "Agentic Behavior",
            "Real Self",
            "I"
        ],
        "answer": "I"
        },
        "identification": {
        "question": "What is the term William James used for the subjective, active self, representing one's current experience, feelings, and sense of agency?",
        "correctAnswers": [
            "The I",
            "I"
        ]
        },
        "explanation": "The **I** is William James's term for the pure, subjective self, or the 'stream of consciousness.' It represents the immediate experience of being, distinct from the **Me**, which is the objective, known self."
    },
    {
        "id": "global-self-consistency",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The Global Model of the self would best predict which of the following behaviors?",
        "options": [
            "An individual acting shy at a party but bold at work.",
            "An individual distinguishing between their own feelings and their friend's feelings.",
            "An individual having consistent honesty across all situations (at home, school, and work).",
            "An individual frequently adjusting their goals based on new feedback."
        ],
        "answer": "An individual having consistent honesty across all situations (at home, school, and work)."
        },
        "identification": {
        "question": "Which model of the self primarily predicts consistent behavior and personality traits across all different contexts and situations?",
        "correctAnswers": [
            "The Global Model",
            "Global Model"
        ]
        },
        "explanation": "The **Global Model** suggests the self is a unified, single entity, predicting high consistency in behavior across all situations. Distractors like situation-specific behavior align better with models like the **Theory of Multiple Selves**."
    },
    {
        "id": "bowen-differentiated-model-separation",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Murray Bowen's contribution to self-theory, the Differentiated Model, emphasizes that psychological and interpersonal functioning is rooted in:",
        "options": [
            "The individual's ability to achieve their Ideal Self.",
            "The constant monitoring of behavior for consistency.",
            "The protective persona formed under societal pressure.",
            "The degree to which one can separate one's own self from others."
        ],
        "answer": "The degree to which one can separate one's own self from others."
        },
        "identification": {
        "question": "Murray Bowen's Differentiated Model focuses on the degree of emotional and intellectual separation between one's self and others, which is termed what?",
        "correctAnswers": [
            "Differentiation of self",
            "Differentiation"
        ]
        },
        "explanation": "Bowen's **Differentiated Model** centers on the 'differentiation of self,' which is the ability to separate one's intellectual/emotional processes from others, thus preventing emotional fusion in relationships."
    },
    {
        "id": "bowen-intrapsychic-differentiation",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A person who can calmly identify that they are feeling angry, but simultaneously distinguish that this anger is separate from their rational decision-making process, is demonstrating high:",
        "options": [
            "Interpersonal differentiation",
            "Self-reactiveness",
            "Global consistency",
            "Intrapsychic differentiation"
        ],
        "answer": "Intrapsychic differentiation"
        },
        "identification": {
        "question": "What is the component of Bowen's differentiation that refers to the ability to separate one's own intellectual/thought process from one's emotional/feeling process?",
        "correctAnswers": [
            "Intrapsychic differentiation"
        ]
        },
        "explanation": "**Intrapsychic differentiation** is the internal component of Bowen's model, focusing on the ability to separate one's own thoughts (rationality) from one's emotions. **Interpersonal differentiation** is the external component, separating one's experience from another's."
    },
    {
        "id": "bowen-interpersonal-differentiation",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Interpersonal differentiation is the component of Bowen’s theory that focuses on the ability to:",
        "options": [
            "Control one's own goals and destinies.",
            "Distinguish one's own experience from the experience of people one is connected to.",
            "Think ahead and anticipate outcomes.",
            "Distinguish thoughts from emotions."
        ],
        "answer": "Distinguish one's own experience from the experience of people one is connected to."
        },
        "identification": {
        "question": "Which type of differentiation in Bowen's model refers to the ability to maintain a sense of self separate from the emotional influence of others in relationships?",
        "correctAnswers": [
            "Interpersonal differentiation"
        ]
        },
        "explanation": "**Interpersonal differentiation** is the ability to maintain a separate emotional and intellectual identity from important others. Distinguishing thoughts from emotions is **Intrapsychic differentiation**."
    },
    {
        "id": "rogers-real-self",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "In Carl Rogers's Self theory, the term used to describe how an individual currently perceives their abilities, traits, and characteristics is the:",
        "options": [
            "Ideal self",
            "Unified self",
            "True Self",
            "Real Self"
        ],
        "answer": "Real Self"
        },
        "identification": {
        "question": "What term did Carl Rogers use to describe a person's current perception of their own qualities, abilities, and characteristics?",
        "correctAnswers": [
            "Real Self",
            "The Real Self"
        ]
        },
        "explanation": "Carl Rogers defined the **Real Self** (or actual self) as how a person currently sees themselves. The **Ideal Self** is the person they wish to be, and the gap between them is a source of psychological distress."
    },
    {
        "id": "rogers-congruence-gap",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "If a clinical psychologist is working with a patient to narrow the gap between 'who they are' and 'who they want to be,' the psychologist is primarily working to reconcile the patient's:",
        "options": [
            "Multiple Selves and Unified Self",
            "I and Me",
            "True Self and False Self",
            "Real Self and Ideal Self"
        ],
        "answer": "Real Self and Ideal Self"
        },
        "identification": {
        "question": "In Carl Rogers's theory, psychological distress is often caused by the incongruence between which two components of the self?",
        "correctAnswers": [
            "Real Self and Ideal Self",
            "The Real Self and the Ideal Self"
        ]
        },
        "explanation": "In Rogers's theory, the goal of therapy is to achieve **congruence**, or a smaller gap, between the **Real Self** (who one is) and the **Ideal Self** (who one wants to be). This is a central concept in humanistic psychology."
    },
    {
        "id": "lester-multiple-selves",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "David Lester's Theory of Multiple Selves suggests that an individual can:",
        "options": [
            "Only exist as a cohesive, single identity.",
            "Fail to achieve any form of Human Agency.",
            "Never separate their thoughts from their feelings.",
            "Simultaneously exhibit different values and personalities in different contexts."
        ],
        "answer": "Simultaneously exhibit different values and personalities in different contexts."
        },
        "identification": {
        "question": "What theory, proposed by David Lester, suggests that a person possesses distinct, context-dependent roles and personalities rather than a single identity?",
        "correctAnswers": [
            "Theory of Multiple Selves",
            "Multiple Selves Theory"
        ]
        },
        "explanation": "Lester's **Theory of Multiple Selves** rejects the Global Model, positing that individuals possess different, context-specific selves (e.g., 'work self,' 'family self') and can hold different values across these roles."
    },
    {
        "id": "lester-unified-self-goal",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The goal of achieving a cohesive identity by integrating all the different roles and personalities a person exhibits across contexts, according to David Lester's framework, is the:",
        "options": [
            "False Self",
            "Global Model",
            "Agentic behavior",
            "Unified self"
        ],
        "answer": "Unified self"
        },
        "identification": {
        "question": "In David Lester's framework, what is the term for the goal of integrating all of one's different contextual roles and personalities into a single, cohesive identity?",
        "correctAnswers": [
            "Unified self",
            "The Unified Self"
        ]
        },
        "explanation": "While Lester acknowledges the existence of multiple selves, the **Unified self** is the aspirational goal—the integration of these different roles into a single, cohesive identity, much like an overarching 'manager' self."
    },
    {
        "id": "winnicott-true-self",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "According to Donald Winnicott, the self characterized by authentic and innate qualities that are present from birth is the:",
        "options": [
            "False Self",
            "Me",
            "Real Self",
            "True Self"
        ],
        "answer": "True Self"
        },
        "identification": {
        "question": "What term did Donald Winnicott use for the self based on genuine, authentic, and innate personal qualities present from birth?",
        "correctAnswers": [
            "True Self",
            "The True Self"
        ]
        },
        "explanation": "Donald Winnicott's **True Self** is the spontaneous, authentic core of the individual. This is contrasted with the **False Self**, which develops as a protective shield to conform to the expectations of others."
    },
    {
        "id": "winnicott-false-self",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A student who behaves in a way they think their strict parents expect, rather than expressing their personal interests, may be relying on which aspect of Donald Winnicott's theory?",
        "options": [
            "The Agentic Self",
            "The True Self",
            "The Ideal Self",
            "The False Self"
        ],
        "answer": "The False Self"
        },
        "identification": {
        "question": "According to Donald Winnicott, what is the term for the self that acts as a protective shield, complying with external demands rather than expressing genuine needs?",
        "correctAnswers": [
            "False Self",
            "The False Self"
        ]
        },
        "explanation": "The **False Self** is a defensive organization, a kind of 'mask' that develops when a child has to comply with the demands of an environment that fails to meet their genuine needs, thus hiding the **True Self**."
    },
    {
        "id": "bandura-proactive-behavior",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Albert Bandura described the self as engaged in Proactive behavior, which means the behavior is:",
        "options": [
            "Reactive to external feedback from others.",
            "A protective response to societal pressure.",
            "Primarily focused on maintaining consistency.",
            "Initiated by the self, rather than by external demands."
        ],
        "answer": "Initiated by the self, rather than by external demands."
        },
        "identification": {
        "question": "What term did Albert Bandura use to describe behavior that is self-initiated, rather than being solely a response to external feedback or demands?",
        "correctAnswers": [
            "Proactive behavior",
            "Proaction"
        ]
        },
        "explanation": "Bandura views the self as **proactive**, meaning it acts upon and influences the environment, rather than being merely reactive. This ties into his concept of **Human Agency**."
    },
    {
        "id": "bandura-agentic-behavior",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Bandura's concept of Agentic behavior primarily refers to the individual's ability to:",
        "options": [
            "Conform to the expectations of their social roles (Me).",
            "Reflect on past actions without making adjustments.",
            "Distinguish their experiences from others (Interpersonal differentiation).",
            "Control their own goals, actions, and destinies."
        ],
        "answer": "Control their own goals, actions, and destinies."
        },
        "identification": {
        "question": "What is the term for Bandura's concept that refers to the individual's capacity to control their own functioning and the nature and quality of their life?",
        "correctAnswers": [
            "Agentic behavior",
            "Human Agency",
            "Agency"
        ]
        },
        "explanation": "**Agentic behavior**, or **Human Agency**, is the ability to exert influence over one's life. Its four core features are Intentionality, Forethought, Self-reactiveness, and Self-reflection."
    },
    {
        "id": "bandura-agency-intentionality",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A young executive dedicates time every Sunday to writing out her career milestones for the next five years. This aligns best with which core feature of Human Agency?",
        "options": [
            "Self-reflection",
            "Forethought",
            "Self-reactiveness",
            "Intentionality"
        ],
        "answer": "Intentionality"
        },
        "identification": {
        "question": "Which core feature of Bandura's Human Agency is defined by the formulation of action plans and the setting of goals for the future?",
        "correctAnswers": [
            "Intentionality"
        ]
        },
        "explanation": "**Intentionality** involves forming action plans and setting goals, representing a proactive commitment to a future course of action. This is the goal-setting element of Bandura's **Human Agency**."
    },
    {
        "id": "bandura-agency-forethought",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Before beginning a complex DIY home project, a homeowner spends an hour reviewing the instructions and visualizing potential problems and necessary steps. This is an example of which feature of Human Agency?",
        "options": [
            "Intentionality",
            "Self-reactiveness",
            "Global consistency",
            "Forethought"
        ],
        "answer": "Forethought"
        },
        "identification": {
        "question": "Which core feature of Bandura's Human Agency involves anticipating the likely consequences of one's actions, and planning to meet future needs and goals?",
        "correctAnswers": [
            "Forethought"
        ]
        },
        "explanation": "**Forethought** is the ability to anticipate and plan for the future, including the likely consequences of actions. This allows an individual to guide and motivate their current behavior effectively."
    },
    {
        "id": "bandura-agency-self-reactiveness",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A musician records a song and then listens back to the track multiple times, comparing the performance to their original vision to ensure the recording is consistent with their artistic goals. This process is called:",
        "options": [
            "Self-reflection",
            "Intrapsychic differentiation",
            "Self-reactiveness",
            "Interpersonal differentiation"
        ],
        "answer": "Self-reactiveness"
        },
        "identification": {
        "question": "Which core feature of Bandura's Human Agency involves the monitoring and adjustment of one's behavior to ensure it aligns with one's goals and standards?",
        "correctAnswers": [
            "Self-reactiveness"
        ]
        },
        "explanation": "**Self-reactiveness** involves monitoring one's progress and regulating behavior to match the intended goals and performance standards (like a musician checking their track against their vision). It's the self-regulatory aspect of agency."
    },
    {
        "id": "bandura-agency-self-reflection",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A hiker reaches the peak of a mountain and mentally congratulates herself for sticking to her training regimen and achieving her goal. She decides to sign up for a more difficult hike next month. This is an example of:",
        "options": [
            "Forethought",
            "Proactive behavior",
            "False Self",
            "Self-reflection"
        ],
        "answer": "Self-reflection"
        },
        "identification": {
        "question": "Which core feature of Bandura's Human Agency involves self-examination and the evaluation of one's own functioning, thoughts, and personal efficacy?",
        "correctAnswers": [
            "Self-reflection"
        ]
        },
        "explanation": "**Self-reflection** is the metacognitive ability to examine one's own functioning, thoughts, and personal efficacy. The hiker is reflecting on her success and competence, which motivates her subsequent goal-setting (forethought)."
    },
    {
        "id": "inauthentic-self-comparison",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which two concepts are MOST related to a protective, inauthentic self that arises from external demands, rather than genuine internal feelings?",
        "options": [
            "The I (James) and the Real Self (Rogers)",
            "The Me (James) and the Unified self (Lester)",
            "The False Self (Winnicott) and the Differentiated Model (Bowen)",
            "The False Self (Winnicott) and the Me (James)"
        ],
        "answer": "The False Self (Winnicott) and the Me (James)"
        },
        "identification": {
        "question": "The False Self (Winnicott) and the Me (James) are similar in that both concepts represent a self that is highly influenced by what type of demands?",
        "correctAnswers": [
            "External demands",
            "Societal expectations",
            "Social roles and expectations"
        ]
        },
        "explanation": "The **False Self** (Winnicott) is a self developed to meet external expectations, and the **Me** (James) is the objective self defined by social roles and reputation (how others see you). Both are externally driven/defined, in contrast to the subjective **True Self** or **I**."
    },
    {
        "id": "bandura-intentionality-goals",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which core feature of Bandura's Human Agency is most closely linked to the idea of setting goals?",
        "options": [
            "Self-reactiveness",
            "Forethought",
            "Self-reflection",
            "Intentionality"
        ],
        "answer": "Intentionality"
        },
        "identification": {
        "question": "Intentionality, as a core feature of Human Agency, is primarily associated with which proactive action?",
        "correctAnswers": [
            "Setting goals",
            "Formulating action plans",
            "Goal setting"
        ]
        },
        "explanation": "**Intentionality** is the planning and goal-setting component of **Human Agency**. Forethought is the planning to meet those goals, and Self-reactiveness is the regulating of action to achieve them."
    },
    {
        "id": "differentiation-primary-distinction",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The primary distinction between Intrapsychic differentiation and Interpersonal differentiation is whether the separation occurs:",
        "options": [
            "Between the Real Self and the Ideal Self.",
            "Between one's own thoughts/emotions (within) or one's own experience and another's (between).",
            "Between goals and actions, or between actions and outcomes.",
            "Between the objective Me and the subjective I."
        ],
        "answer": "Between one's own thoughts/emotions (within) or one's own experience and another's (between)."
        },
        "identification": {
        "question": "What is the key difference between Intrapsychic differentiation and Interpersonal differentiation?",
        "correctAnswers": [
            "Intrapsychic is internal (separating thoughts from feelings); Interpersonal is external (separating self from others)."
        ]
        },
        "explanation": "**Intrapsychic differentiation** is internal, separating thoughts from feelings (within the psyche). **Interpersonal differentiation** is external, separating one's self/experience from the experience of others (between people)."
    },
    {
        "id": "self-individualistic-western",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which characteristic is central to the Individualistic Self model, commonly associated with Western thought?",
        "options": [
            "Prioritizing group harmony and communal expectations.",
            "Focusing primarily on group membership and family reputation.",
            "Valuing personal autonomy, self-expression, and pursuing individual goals.",
            "Advocating for complete social isolation and self-sufficiency."
        ],
        "answer": "Valuing personal autonomy, self-expression, and pursuing individual goals."
        },
        "identification": {
        "question": "The self model emphasizing unique attributes, independence, and the pursuit of personal goals is known as the what?",
        "correctAnswers": [
            "Individualistic self",
            "Western self"
        ]
        },
        "explanation": "The **Individualistic Self**, prevalent in Western cultures, emphasizes personal autonomy, independence, and the pursuit of individual goals, often driven by unique attributes and achievements. This is sometimes associated with **egoism**, but it does not advocate isolation."
    },
    {
        "id": "self-collective-eastern",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The Collective Self model, typical of Eastern thought, is primarily defined by which characteristic?",
        "options": [
            "A strong stress on self-reliance and complete independence from the group.",
            "The prioritization of individual preferences over societal obligations.",
            "An identity closely tied to group membership, prioritizing harmony and communal expectations.",
            "The belief that individual attributes are the sole source of identity."
        ],
        "answer": "An identity closely tied to group membership, prioritizing harmony and communal expectations."
        },
        "identification": {
        "question": "The self model where identity is closely tied to group membership and communal expectations, prioritizing group harmony and cooperation, is known as the what?",
        "correctAnswers": [
            "Collective self",
            "Eastern self"
        ]
        },
        "explanation": "The **Collective Self**, common in Eastern cultures, defines identity through group membership, prioritizing **group harmony** and cooperation over individual needs. This is in sharp contrast to the Western focus on personal autonomy."
    },
    {
        "id": "confucius-birth-date",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Confucius, China's most influential teacher and philosopher, was born in what year?",
        "options": [
            "551 BC",
            "479 BC",
            "621 AD",
            "206 BC"
        ],
        "answer": "551 BC"
        },
        "identification": {
        "question": "In what year was Confucius, the influential Chinese philosopher, born?",
        "correctAnswers": [
            "551 BC"
        ]
        },
        "explanation": "Confucius, born as **Kong Fuzi** (Master Kong), was born in **551 BC** and became China's most influential teacher and philosopher, profoundly shaping Chinese and East Asian civilizations."
    },
    {
        "id": "confucius-relational-self",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "From a Confucian perspective, one's identity is primarily formed by the group they belong to, leading to the concept of the:",
        "options": [
            "Individualistic self",
            "Subdued self",
            "Transcendental self",
            "Relational self"
        ],
        "answer": "Relational self"
        },
        "identification": {
        "question": "What term is used in the Confucian perspective to describe the self as fundamentally defined and formed by the group and its social relationships?",
        "correctAnswers": [
            "Relational self",
            "Relational self (Confucian perspective)"
        ]
        },
        "explanation": "The Confucian perspective defines identity as the **Relational self**, meaning one's identity is formed and maintained through their role within the group and the established social order, such as the **Five Cardinal Relationships**."
    },
    {
        "id": "confucian-five-relationships",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which of the following is NOT one of Confucius's Five Cardinal Relationships that structure social and personal identity?",
        "options": [
            "Husband - Wife",
            "Elder Brother - Younger Brother",
            "Ruler - Subject",
            "Teacher - Student"
        ],
        "answer": "Teacher - Student"
        },
        "identification": {
        "question": "Name two of the Five Cardinal Relationships established by Confucius as foundational to social identity and order.",
        "correctAnswers": [
            "Ruler - Subject, Father - Son",
            "Husband - Wife, Elder Brother - Younger Brother",
            "Friends"
        ]
        },
        "explanation": "The **Five Cardinal Relationships** define the Confucian social order: Ruler-Subject, Father-Son, Husband-Wife, Elder Brother-Younger Brother, and Friends. These define the roles and duties central to the **Relational self**."
    },
    {
        "id": "confucian-subdued-self",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "In Confucianism, the concept of the Subdued Self means:",
        "options": [
            "Actively pursuing one's personal desires above all else.",
            "Emphasizing spiritual growth over moral cultivation.",
            "Prioritizing social duties and communal obligations over personal desires.",
            "Achieving complete isolation from the community."
        ],
        "answer": "Prioritizing social duties and communal obligations over personal desires."
        },
        "identification": {
        "question": "What term in Confucianism refers to the self that achieves harmony by prioritizing social duties and societal obligations over personal desires?",
        "correctAnswers": [
            "Subdued self",
            "The Subdued Self"
        ]
        },
        "explanation": "The **Subdued self** is a Confucian ideal where one sacrifices personal desires in favor of fulfilling social duties and moral obligations. This self embodies **Ren** (human-heartedness) and strives for harmony."
    },
    {
        "id": "confucian-ren-definition",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The Confucian concept of Ren (Human-heartedness) primarily emphasizes:",
        "options": [
            "The pursuit of wealth and personal achievement.",
            "Isolation and self-reliance in decision-making.",
            "Altruism, benevolence, and fulfilling societal obligations.",
            "The separation of thoughts from emotions."
        ],
        "answer": "Altruism, benevolence, and fulfilling societal obligations."
        },
        "identification": {
        "question": "What is the core Confucian concept, often translated as 'Human-heartedness,' that emphasizes altruism, benevolence, and the fulfilling of societal obligations?",
        "correctAnswers": [
            "Ren"
        ]
        },
        "explanation": "**Ren** is the foundational Confucian virtue, representing 'human-heartedness' or 'benevolence.' It encompasses **altruism** and the commitment to uphold moral order by fulfilling societal obligations (the core of the **Subdued Self**)."
    },
    {
        "id": "confucian-self-development",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The Confucian view states that the self primarily develops through:",
        "options": [
            "Intense focus on inner reflection and individual preferences.",
            "Achieving maximum personal profit and status.",
            "Relationships, moral cultivation, and harmony with the natural order.",
            "Rejecting tradition in favor of personal choice and freedom."
        ],
        "answer": "Relationships, moral cultivation, and harmony with the natural order."
        },
        "identification": {
        "question": "According to the Confucian perspective, what three elements are emphasized in the development of the self?",
        "correctAnswers": [
            "Relationships, moral cultivation, and harmony with the natural order."
        ]
        },
        "explanation": "The Confucian self develops through active participation in **relationships**, rigorous **moral cultivation** (like practicing Ren and Xiao), and achieving **harmony** with the social and natural order."
    },
    {
        "id": "confucian-xiao-filial-piety",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "What is the Confucian concept that describes the virtue of filial piety by respecting and taking care of one's parents and elders?",
        "options": [
            "Ren",
            "Tao",
            "Xiao",
            "Li"
        ],
        "answer": "Xiao"
        },
        "identification": {
        "question": "What is the Confucian term for the virtue of filial piety, which mandates respect and care for one's parents and elders?",
        "correctAnswers": [
            "Xiao"
        ]
        },
        "explanation": "**Xiao** is the Confucian term for **filial piety**, a core virtue that involves deep respect and care for one's parents, elders, and ancestors. This duty is fundamental to the **Relational Self**."
    },
    {
        "id": "western-focus-core-value",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The Individualistic Self in Western thought primarily focuses on which trio of core values?",
        "options": [
            "Group harmony, cooperation, and social duty.",
            "Filial piety, benevolence, and the Subdued Self.",
            "Freedom, choice, and independence.",
            "Relational identity, spiritual growth, and moral cultivation."
        ],
        "answer": "Freedom, choice, and independence."
        },
        "identification": {
        "question": "Name one of the three core values (freedom, choice, or independence) that the Western Individualistic self model stresses.",
        "correctAnswers": [
            "Freedom",
            "Choice",
            "Independence"
        ]
        },
        "explanation": "The Western Individualistic Self strongly emphasizes **freedom**, personal **choice**, and **independence**. These values underpin its stress on personal goals, self-realization, and autonomy in decision-making."
    },
    {
        "id": "eastern-prioritization-goal",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "In the Eastern Collective Self, what takes precedence over the pursuit of individual goals?",
        "options": [
            "Egoism and unique attributes.",
            "Self-realization and personal autonomy.",
            "Group harmony and communal expectations.",
            "The subjective 'I' and self-expression."
        ],
        "answer": "Group harmony and communal expectations."
        },
        "identification": {
        "question": "What are the two concepts that the Eastern Collective Self prioritizes above individual desires?",
        "correctAnswers": [
            "Group harmony and communal expectations",
            "Group harmony and cooperation"
        ]
        },
        "explanation": "The Eastern **Collective Self** prioritizes **group harmony** and **communal expectations**. This focus drives cooperation and the fulfillment of social duties, contrasting with the Western emphasis on individual achievement."
    },
    {
        "id": "james-bowen-contrast-separation",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which two theorists are primarily concerned with the concept of separation, where one emphasizes separating the objective self from the subjective self, and the other emphasizes separating the self from the influence of others?",
        "options": [
            "Carl Rogers (Real/Ideal) and Donald Winnicott (True/False)",
            "Murray Bowen (Differentiation) and Albert Bandura (Agency)",
            "William James (I/Me) and Carl Rogers (Real/Ideal)",
            "William James (I/Me) and Murray Bowen (Differentiation)"
        ],
        "answer": "William James (I/Me) and Murray Bowen (Differentiation)"
        },
        "identification": {
        "question": "The theoretical contrast between James's 'I' vs. 'Me' and Bowen's 'Intrapsychic vs. Interpersonal Differentiation' both deal fundamentally with the concept of what?",
        "correctAnswers": [
            "Separation",
            "Differentiation"
        ]
        },
        "explanation": "William James separates the internal **I** from the external **Me**. Murray Bowen's **Differentiation of Self** separates the self from others (Interpersonal) and thoughts from feelings (Intrapsychic). Both central themes are about distinguishing components of the self."
    },
    {
        "id": "false-self-external-origins",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "In the theories of both Donald Winnicott and William James, what common theme links the False Self and the Me?",
        "options": [
            "Both represent the individual's inherent, spontaneous core.",
            "Both are driven by achieving congruence between two internal states.",
            "Both are aspects of the self that are shaped by or responsive to external demands and social roles.",
            "Both reflect the self's capacity for self-regulation and goal setting."
        ],
        "answer": "Both are aspects of the self that are shaped by or responsive to external demands and social roles."
        },
        "identification": {
        "question": "The False Self (Winnicott) and the Me (James) share the characteristic of being primarily defined by what kind of influence?",
        "correctAnswers": [
            "External influence",
            "Social roles",
            "Societal expectations"
        ]
        },
        "explanation": "Winnicott's **False Self** is a shield built for external conformity, and James's **Me** is the objective self defined by social roles. Both are non-authentic, externally-driven aspects of identity, unlike the spontaneous **True Self** or subjective **I**."
    },
    {
        "id": "bandura-agency-components",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "A student sets a specific goal (Intentionality), creates a weekly study schedule (Forethought), and modifies that schedule based on quiz results (Self-reactiveness). Which core feature of Human Agency is missing from this scenario?",
        "options": [
            "Proactivity",
            "Self-reflection",
            "Self-efficacy",
            "Self-determination"
        ],
        "answer": "Self-reflection"
        },
        "identification": {
        "question": "Name the four core features of Albert Bandura's Human Agency.",
        "correctAnswers": [
            "Intentionality, Forethought, Self-reactiveness, and Self-reflection"
        ]
        },
        "explanation": "The four core features of **Human Agency** are Intentionality (setting goals), Forethought (planning), Self-reactiveness (monitoring and adjustment), and **Self-reflection** (evaluating one's thoughts and functioning). All four are necessary for complete agency."
    },
    {
        "id": "rogers-unification-goal",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The primary goal of the self, according to Carl Rogers's theory, is to achieve what state between the two components of the self?",
        "options": [
            "Interpersonal differentiation",
            "Congruence",
            "Subdued self",
            "Agentic behavior"
        ],
        "answer": "Congruence"
        },
        "identification": {
        "question": "What is the term for the state of harmony that Carl Rogers believed the self must achieve between the Real Self and the Ideal Self?",
        "correctAnswers": [
            "Congruence"
        ]
        },
        "explanation": "Rogers's theory centers on achieving **congruence**, a state where the **Real Self** (who you are) aligns with the **Ideal Self** (who you want to be). Incongruence is the source of maladjustment."
    },
    {
        "id": "bowen-low-differentiation-outcome",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "According to Murray Bowen's Differentiated Model, a person with low Interpersonal differentiation would MOST likely exhibit which behavior?",
        "options": [
            "The capacity to set highly specific, proactive goals.",
            "Emotional fusion with a partner, leading to difficulty making independent decisions.",
            "High self-reflection about past choices and outcomes.",
            "A preference for individual goals over group harmony."
        ],
        "answer": "Emotional fusion with a partner, leading to difficulty making independent decisions."
        },
        "identification": {
        "question": "In Bowen's theory, what term describes the lack of distinction between one's feelings and the feelings of connected others, often seen in individuals with low Interpersonal Differentiation?",
        "correctAnswers": [
            "Emotional fusion",
            "Fusion"
        ]
        },
        "explanation": "Low **Interpersonal differentiation** results in emotional **fusion**, where boundaries between the self and others are blurred. The person struggles to maintain their own thoughts and feelings when under pressure from the relationship."
    },
    {
        "id": "eastern-vs-western-identity-source",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "The fundamental difference between the Western Individualistic Self and the Eastern Collective Self lies in the primary source of identity. The Western self is defined by unique attributes, while the Eastern self is defined by:",
        "options": [
            "Subdued emotions and spiritual isolation.",
            "Abstract moral philosophy (Ren).",
            "The gap between the Real and Ideal Self.",
            "Relational membership and social roles."
        ],
        "answer": "Relational membership and social roles."
        },
        "identification": {
        "question": "What is the primary source of identity in the Eastern Collective Self, according to Confucian and related thought?",
        "correctAnswers": [
            "Relational membership",
            "Group membership",
            "Social roles"
        ]
        },
        "explanation": "The Western self is rooted in individual attributes (**egoism**), while the Eastern self is rooted in **Relational membership** and fulfilling social roles (like the **Five Cardinal Relationships**), prioritizing harmony over self-expression."
    },
    {
        "id": "self-theory-cross-concept-test",
        "stage": 1,
        "mastered": false,
        "mcq": {
        "question": "Which pairing correctly links a self-concept with its primary psychological function?",
        "options": [
            "Real Self (Rogers): Self-regulatory adjustment toward goals.",
            "Intentionality (Bandura): Evaluation of past actions and competence.",
            "Intrapsychic Differentiation (Bowen): Separation of one’s thoughts from one’s feelings.",
            "Me (James): Subjective, unobservable stream of consciousness."
        ],
        "answer": "Intrapsychic Differentiation (Bowen): Separation of one’s thoughts from one’s feelings."
        },
        "identification": {
        "question": "What self-concept involves separating one's rational thinking process from one's emotional state, a component of Murray Bowen's Differentiated Model?",
        "correctAnswers": [
            "Intrapsychic Differentiation"
        ]
        },
        "explanation": "**Intrapsychic Differentiation** is the internal separation of emotionality from intellect. The **Real Self** is current perception, not adjustment; **Intentionality** is goal-setting, not evaluation; and the **Me** is the objective, observable self, not the subjective 'I'."
    }
]
