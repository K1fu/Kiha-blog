const quizData = {
    // Multiple Choice questions (Part 1: 80 Items)
    multipleChoice: [
        {
            question: "Which philosopher proposed the maxim \"Know thyself\" and believed wisdom comes from introspection?",
            options: ["Plato", "Socrates", "Aristotle", "David Hume"],
            answer: "Socrates",
            explanation: "Socrates famously emphasized self-knowledge, believing that the 'unexamined life is not worth living.'",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "According to Plato, the soul consists of three parts. Which of the following is NOT one of them?",
            options: ["Reason", "Spirit", "Appetite", "Emotion"],
            answer: "Emotion",
            explanation: "Plato's tripartite soul consists of Reason (rational), Spirit (courage/will), and Appetite (desires). Emotion is not listed as a distinct separate part in this specific model.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Aristotle rejected Plato's Theory of Forms and argued that the self is a composite of body and soul. What is this concept called?",
            options: ["Dualism", "Hylomorphism", "Empiricism", "Rationalism"],
            answer: "Hylomorphism",
            explanation: "Hylomorphism is the Aristotelian theory that physical objects are a compound of matter (hyle) and form (morphe), applied here to the inseparable body and soul.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "St. Augustine believed that the human soul is restless until it finds rest in:",
            options: ["Knowledge", "Pleasure", "God", "Success"],
            answer: "God",
            explanation: "As a major theologian, St. Augustine believed the self/soul is created by God and finds ultimate peace only in union with the Divine.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Rene Descartes is known as the father of modern philosophy. Which phrase encapsulates his view on existence?",
            options: ["Tabula rasa", "Cogito, ergo sum", "Carpe diem", "Veni, vidi, vici"],
            answer: "Cogito, ergo sum",
            explanation: "\"I think, therefore I am\" is Descartes' foundational proof of his own existence based on the act of doubting and thinking.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "John Locke viewed the self as a \"Tabula Rasa.\" What does this Latin phrase mean?",
            options: ["Blank slate", "Thinking thing", "Inner self", "Ghost in the machine"],
            answer: "Blank slate",
            explanation: "Locke argued that the mind is born as a 'blank slate,' meaning all knowledge comes from sensory experience.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who argued that there is no fixed \"self,\" only a \"bundle of perceptions\" changing over time?",
            options: ["David Hume", "Immanuel Kant", "Sigmund Freud", "Gilbert Ryle"],
            answer: "David Hume",
            explanation: "David Hume, an empiricist, found no constant, unifying impression of the self, concluding it is merely a collection ('bundle') of experiences and perceptions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Immanuel Kant distinguished between two types of self. Which one includes the rational intellect and psychological state?",
            options: ["Outer Self", "Empirical Self", "Inner Self", "Physical Self"],
            answer: "Inner Self",
            explanation: "Kant’s Inner Self is the rational, thinking self, which is distinct from the Outer (phenomenal) Self that is visible to others.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "According to Sigmund Freud, which part of the psyche operates as the mediator between the Id and the Superego?",
            options: ["Conscious", "Ego", "Unconscious", "Libido"],
            answer: "Ego",
            explanation: "The Ego operates on the reality principle, mediating the pleasure-seeking Id and the moralistic Superego.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Gilbert Ryle criticized the concept of a distinct internal self, calling it the:",
            options: ["Monster in the closet", "Ghost in the machine", "Spirit in the shell", "Mind over matter"],
            answer: "Ghost in the machine",
            explanation: "Ryle criticized Descartes’ dualism, arguing that the idea of a non-physical mind (ghost) controlling a physical body (machine) is a fundamental category mistake.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Paul Churchland’s \"Neurophilosophy\" argues that the self is a product of:",
            options: ["Divine intervention", "Brain activity", "Social interaction", "Childhood trauma"],
            answer: "Brain activity",
            explanation: "Churchland advocates for Eliminative Materialism, suggesting that mental states (like the 'self') are entirely explained by physical processes in the brain.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who believed that the self is \"embodied subjectivity,\" rejecting the mind-body dualism?",
            options: ["Maurice Merleau-Ponty", "John Locke", "Socrates", "David Hume"],
            answer: "Maurice Merleau-Ponty",
            explanation: "Merleau-Ponty, a phenomenologist, argued that the mind and body are intrinsically linked, viewing the self as consciousness realized through the physical body.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Charles Horton Cooley’s \"Looking-Glass Self\" theory involves three stages. Which is the first stage?",
            options: ["Interpretation", "Self-feeling", "Imagination", "Role-taking"],
            answer: "Imagination",
            explanation: "The three stages are: 1) We imagine how we appear to others; 2) We imagine their judgment of that appearance; 3) We develop self-feelings (pride or shame) based on those imagined judgments.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In George Herbert Mead’s \"Social Self Theory,\" the \"Me\" represents:",
            options: ["The spontaneous, impulsive self", "The socialized aspect shaped by norms", "The biological drives", "The creative side"],
            answer: "The socialized aspect shaped by norms",
            explanation: "The 'Me' is the organized set of attitudes of others that the individual assumes; it is the self as object, reflecting social expectations. The 'I' is the subjective, impulsive actor.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "During which stage of Mead’s self-development do children start to understand the \"Generalized Other\"?",
            options: ["Preparatory Stage", "Play Stage", "Game Stage", "Imitation Stage"],
            answer: "Game Stage",
            explanation: "In the Game Stage, children take on multiple roles simultaneously and understand the expectations of the community ('Generalized Other'), allowing complex interaction.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which subdiscipline of anthropology interprets human history by analyzing material remains (artifacts)?",
            options: ["Cultural Anthropology", "Linguistic Anthropology", "Archaeology", "Biological Anthropology"],
            answer: "Archaeology",
            explanation: "Archaeology is the study of human past through excavation and analysis of physical remains.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Clifford Geertz described the self as being embedded in:",
            options: ["Genetics", "Culture and symbols", "Political laws", "Economic status"],
            answer: "Culture and symbols",
            explanation: "Geertz viewed culture as a system of inherited conceptions expressed in symbolic forms, and the self is intrinsically bound by these cultural webs of meaning.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "William James distinguished between the \"I\" self and the \"Me\" self. The \"I\" self refers to:",
            options: ["The object of thought (what is known)", "The thinking subject (the knower)", "The material possessions", "The social reputation"],
            answer: "The thinking subject (the knower)",
            explanation: "The 'I' is the pure ego, the subjective process of experiencing or thinking. The 'Me' is the empirical self, the self as an object of knowledge.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "According to Murray Bowen, \"Intrapsychic Differentiation\" is the ability to:",
            options: ["Separate thoughts from emotions", "Separate oneself from others", "Separate needs from wants", "Separate reality from fantasy"],
            answer: "Separate thoughts from emotions",
            explanation: "Intrapsychic differentiation, a component of Bowen's family systems theory, is the ability to separate one's rational thinking from emotional reactivity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Carl Rogers’ theory highlights the gap between the \"Real Self\" and the \"Ideal Self.\" A large gap results in:",
            options: ["Self-actualization", "Incongruence (unhappiness)", "Congruence (peace)", "High self-esteem"],
            answer: "Incongruence (unhappiness)",
            explanation: "Incongruence occurs when there is a mismatch between one's perceived self (Real Self) and one's desired self (Ideal Self), leading to psychological distress.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which theorist proposed the concept of \"True Self\" vs. \"False Self\"?",
            options: ["David Lester", "Albert Bandura", "Donald Winnicott", "William James"],
            answer: "Donald Winnicott",
            explanation: "Winnicott, a pediatrician and psychoanalyst, developed these concepts, where the True Self is authentic and spontaneous, and the False Self is a defensive compliance.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Albert Bandura’s concept of \"Human Agency\" includes \"Forethought,\" which means:",
            options: ["Monitoring current behavior", "Planning actions based on expected outcomes", "Reflecting on past mistakes", "Acting on impulse"],
            answer: "Planning actions based on expected outcomes",
            explanation: "Forethought is the capacity to anticipate future consequences and plan courses of action accordingly, a key element of self-directed behavior.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which culture prioritizes individual autonomy, personal goals, and self-reliance?",
            options: ["Collectivist", "Individualistic", "Eastern", "Tribal"],
            answer: "Individualistic",
            explanation: "Individualistic cultures (like many Western nations) focus on personal identity and achievement over group cohesion.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Confucian thought, \"Filial Piety\" (Xiao) refers to:",
            options: ["Loyalty to the Emperor", "Respect for parents and ancestors", "Financial independence", "Academic excellence"],
            answer: "Respect for parents and ancestors",
            explanation: "Xiao is the virtue of reverence and obedience to one's parents, elders, and ancestors, central to Confucian ethics.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Body Image\" is defined as:",
            options: ["How others see you", "Your actual physical measurements", "Your mental perception of your own body", "Your Body Mass Index (BMI)"],
            answer: "Your mental perception of your own body",
            explanation: "Body image is a psychological construct—it is how an individual perceives and feels about their own physical body, often regardless of objective reality.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which eating disorder is characterized by binging followed by purging (vomiting/laxatives)?",
            options: ["Anorexia Nervosa", "Binge Eating Disorder", "Bulimia Nervosa", "Orthorexia"],
            answer: "Bulimia Nervosa",
            explanation: "Bulimia Nervosa involves cycles of rapid consumption of large amounts of food (binging) followed by compensatory behaviors (purging).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Secondary sex characteristics in males include:",
            options: ["Widening of hips", "Menstruation", "Deepening of voice", "Breast development"],
            answer: "Deepening of voice",
            explanation: "Secondary sex characteristics are physical features that appear during puberty that distinguish the sexes but are not directly part of the reproductive system.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which phase of the Sexual Response Cycle involves the release of pre-ejaculate fluid in males and lubrication in females?",
            options: ["Resolution", "Plateau", "Orgasm", "Excitement"],
            answer: "Excitement",
            explanation: "The Excitement phase is the initial phase of arousal, marked by increased heart rate, blood flow to the genitals (lubrication/erection), and muscle tension.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which chemical is known as the \"cuddle hormone\" and is released during orgasm and breastfeeding?",
            options: ["Dopamine", "Adrenaline", "Oxytocin", "Serotonin"],
            answer: "Oxytocin",
            explanation: "Oxytocin plays a major role in social bonding, trust, and intimacy, hence its nickname, the 'cuddle hormone.'",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the most effective way to prevent both pregnancy and STIs (100% effective)?",
            options: ["Condoms", "Withdrawal", "Abstinence", "Pills"],
            answer: "Abstinence",
            explanation: "Abstinence (avoiding sexual contact) is the only method that offers 100% protection against both pregnancy and STIs.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which STI is caused by the bacterium *Treponema pallidum* and presents with sores (chancre)?",
            options: ["Chlamydia", "Gonorrhea", "Syphilis", "HIV"],
            answer: "Syphilis",
            explanation: "Syphilis is a bacterial infection whose primary stage is characterized by the formation of a painless sore called a chancre.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"Material Self\" concept by William James includes:",
            options: ["Body, Clothes, Family, Home", "Mind, Spirit, Soul, God", "Rights, Duties, Laws, Vote", "Likes, Comments, Shares, Posts"],
            answer: "Body, Clothes, Family, Home",
            explanation: "James' Material Self encompasses all physical possessions and things that one considers 'mine,' extending from the body to immediate family and property.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Consumer Culture\" suggests that our identity is often shaped by:",
            options: ["What we produce", "What we consume/buy", "What we reject", "What we create"],
            answer: "What we consume/buy",
            explanation: "Consumer culture is defined by the heavy emphasis on acquiring goods, where possessions become primary symbols of social status and self-identity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Visayan beliefs, the \"Dungan\" refers to:",
            options: ["A ghost", "A demon", "The life force or spirit", "A ritual dance"],
            answer: "The life force or spirit",
            explanation: "Dungan is the Visayan term for the soul or 'life-force' that resides within a person and can sometimes leave the body, making the person susceptible to illness.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Rituals that mark important life stages (birth, marriage, death) are called:",
            options: ["Seasonal Rituals", "Healing Rituals", "Life Cycle Rituals", "Magic Rituals"],
            answer: "Life Cycle Rituals",
            explanation: "These are also known as rites of passage, marking the transition from one social status or stage of life to another.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Filipino value of \"Bayanihan\" represents:",
            options: ["Debt of gratitude", "Communal unity and cooperation", "Shame or shyness", "Fatalism (Bahala na)"],
            answer: "Communal unity and cooperation",
            explanation: "Bayanihan is the spirit of communal unity, work, and cooperation to achieve a common goal, often without expectation of pay.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Kapwa\" in Filipino psychology means:",
            options: ["Self-interest", "Shared identity / \"The other is also me\"", "Foreigner", "Enemy"],
            answer: "Shared identity / \"The other is also me\"",
            explanation: "Kapwa is the core concept of a shared inner self, emphasizing a fundamental unity and connection between people ('pakikipagkapwa-tao').",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"Digital Self\" involves \"Selective Self-Presentation.\" This means:",
            options: ["Posting everything without filtering", "Curating a specific image to present to others online", "Deleting all social media accounts", "Using an anonymous avatar"],
            answer: "Curating a specific image to present to others online",
            explanation: "Selective self-presentation is a form of impression management where individuals choose which aspects of their identity to display to create a desirable online persona.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Erving Goffman’s \"Front Stage\" behavior refers to:",
            options: ["Our private, authentic self", "Our public performance to manage impressions", "Our subconscious desires", "Our biological instincts"],
            answer: "Our public performance to manage impressions",
            explanation: "In Goffman's dramaturgy, the Front Stage is where individuals attempt to manage the impressions they convey to an audience.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The prefrontal cortex, responsible for decision-making, is still developing during:",
            options: ["Infancy", "Adolescence", "Middle age", "Old age"],
            answer: "Adolescence",
            explanation: "The prefrontal cortex, which governs executive functions and impulse control, is one of the last areas of the brain to fully mature, often continuing development into the mid-20s.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Metacognition\" is best described as:",
            options: ["Thinking about thinking", "Memorizing facts", "Solving math problems", "Ignoring distractions"],
            answer: "Thinking about thinking",
            explanation: "Metacognition is the awareness and understanding of one's own thought processes and learning strategies.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Self-Regulated Learning (SRL), the first phase is:",
            options: ["Performance", "Self-Reflection", "Forethought (Planning)", "Evaluation"],
            answer: "Forethought (Planning)",
            explanation: "The three main phases of SRL are: Forethought (planning), Performance (monitoring/execution), and Self-Reflection (evaluation).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A \"Growth Mindset\" (Carol Dweck) is the belief that:",
            options: ["Intelligence is fixed at birth", "Challenges should be avoided", "Abilities can be developed through effort", "Failure is a lack of talent"],
            answer: "Abilities can be developed through effort",
            explanation: "A Growth Mindset sees intelligence and talent as malleable qualities that can be improved through dedication and hard work.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In Locke’s Goal Setting Theory, goals should be:",
            options: ["Vague and easy", "Specific and challenging", "Secret and private", "Impossible to reach"],
            answer: "Specific and challenging",
            explanation: "Locke's theory states that clear, specific, and difficult (challenging) goals lead to higher performance than vague or easy goals.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Eustress\" refers to:",
            options: ["Negative stress that causes anxiety", "Positive stress that motivates and energizes", "Chronic stress causing burnout", "Lack of any stress"],
            answer: "Positive stress that motivates and energizes",
            explanation: "Eustress is beneficial stress—it is manageable, motivating, and contributes positively to well-being.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"General Adaptation Syndrome\" (GAS) stages are:",
            options: ["Alarm, Resistance, Exhaustion", "Stop, Look, Listen", "Plan, Do, Check", "Excitement, Plateau, Resolution"],
            answer: "Alarm, Resistance, Exhaustion",
            explanation: "Hans Selye’s GAS model describes the body's three-stage physiological response to stress: Alarm (initial shock), Resistance (coping), and Exhaustion (depletion).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Self-Compassion\" involves:",
            options: ["Pitying yourself", "Being harsh on yourself for mistakes", "Treating yourself with kindness during failure", "Blaming others for your problems"],
            answer: "Treating yourself with kindness during failure",
            explanation: "Self-compassion means extending compassion to oneself in instances of perceived inadequacy, suffering, or failure, often involving self-kindness, common humanity, and mindfulness.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which philosopher famously said \"I think, therefore I am\"?",
            options: ["Locke", "Descartes", "Hume", "Kant"],
            answer: "Descartes",
            explanation: "Rene Descartes' 'Cogito, ergo sum' is the foundation of his philosophical method.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "\"Hylomorphism\" (matter + form) is associated with which philosopher?",
            options: ["Plato", "Aristotle", "Socrates", "Augustine"],
            answer: "Aristotle",
            explanation: "Aristotle used hylomorphism to describe all substances, including the self as a composite of body (matter) and soul (form).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who described the self as a \"Machine\" and the mind as the \"Ghost\" (critiquing this view)?",
            options: ["Ryle", "Churchland", "Freud", "Kant"],
            answer: "Ryle",
            explanation: "Gilbert Ryle coined the phrase 'Ghost in the Machine' to ridicule the Cartesian dualism he opposed.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which perspective views the self as \"Interdependent\" (connected to others)?",
            options: ["Western", "Eastern (Collectivist)", "Cartesian", "Socratic"],
            answer: "Eastern (Collectivist)",
            explanation: "Eastern cultures typically emphasize the interconnectedness and relational nature of the self within the group.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is \"Self-Efficacy\"?",
            options: ["High self-esteem", "Belief in one's capacity to execute behaviors to produce results", "The ability to control others", "The desire for wealth"],
            answer: "Belief in one's capacity to execute behaviors to produce results",
            explanation: "Self-efficacy (Bandura) is the belief in one's ability to successfully perform a task or reach a goal.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which hormone is released during the \"fight or flight\" response (Alarm stage)?",
            options: ["Melatonin", "Adrenaline (Epinephrine)", "Estrogen", "Insulin"],
            answer: "Adrenaline (Epinephrine)",
            explanation: "Adrenaline, or Epinephrine, is rapidly released by the adrenal glands during the Alarm stage of stress to mobilize the body's energy reserves.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Utang na Loob\" is best translated as:",
            options: ["Financial Debt", "Debt of Gratitude", "Social Climbing", "Shame"],
            answer: "Debt of Gratitude",
            explanation: "Utang na Loob is the Filipino value of recognizing and reciprocating a favor or benefit received, creating a lifelong obligation of loyalty.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of contraception is a rod placed under the skin of the arm?",
            options: ["IUD", "Implant", "Injectable", "Pill"],
            answer: "Implant",
            explanation: "The contraceptive implant (e.g., Nexplanon) is a flexible rod inserted subdermally to release hormones.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which sexual phase involves the return to a normal physiological state?",
            options: ["Plateau", "Orgasm", "Resolution", "Excitement"],
            answer: "Resolution",
            explanation: "Resolution is the phase following orgasm where the body returns to its unaroused, resting state.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Helen Fisher’s three stages of love are:",
            options: ["Dating, Engagement, Marriage", "Lust, Attraction, Attachment", "Eros, Philia, Agape", "Friendship, Intimacy, Commitment"],
            answer: "Lust, Attraction, Attachment",
            explanation: "Fisher's stages are based on neurochemistry: Lust (driven by hormones), Attraction (driven by dopamine/norepinephrine), and Attachment (driven by oxytocin/vasopressin).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which region of the body is highly sensitive to sexual stimulation?",
            options: ["Erogenous Zone", "Comfort Zone", "Danger Zone", "Neural Zone"],
            answer: "Erogenous Zone",
            explanation: "Erogenous zones are areas that, when stimulated, produce sexual arousal.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Binge Eating Disorder\" differs from Bulimia because it lacks:",
            options: ["Overeating", "Purging behaviors (vomiting)", "Guilt", "Weight gain"],
            answer: "Purging behaviors (vomiting)",
            explanation: "Binge Eating Disorder involves recurrent binging episodes without the compensatory behaviors (purging, excessive exercise) seen in Bulimia Nervosa.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Anorexia Nervosa\" is primarily characterized by:",
            options: ["Uncontrollable eating", "Restriction of energy intake / starvation", "Excessive sleeping", "Fear of heights"],
            answer: "Restriction of energy intake / starvation",
            explanation: "Anorexia Nervosa is defined by an intense fear of gaining weight and restrictive eating patterns leading to significantly low body weight.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the material self, which is considered the \"primary\" component?",
            options: ["Clothes", "Body", "Home", "Car"],
            answer: "Body",
            explanation: "The body is the most immediate and primary component of William James' Material Self.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "\"Needs\" vs \"Wants\": Which of the following is a \"Want\"?",
            options: ["Food", "Shelter", "Designer Handbag", "Water"],
            answer: "Designer Handbag",
            explanation: "Wants are desires that enhance comfort or status but are not essential for human survival, unlike basic needs like food and water.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"Political Self\" is concerned with:",
            options: ["Finding a partner", "Citizenship, rights, and governance", "Spiritual rituals", "Buying goods"],
            answer: "Citizenship, rights, and governance",
            explanation: "The Political Self refers to one's awareness and participation in the political life of the community or state, encompassing rights and duties.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A \"Democratic Culture\" emphasizes:",
            options: ["Dictatorship", "Equality, participation, and rule of law", "Military rule", "Censorship"],
            answer: "Equality, participation, and rule of law",
            explanation: "Democratic culture promotes active citizen participation, respect for fundamental rights, and governance based on laws applied equally.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Online \"Disinhibition Effect\" often leads people to:",
            options: ["Be shy online", "Act more boldly or aggressively online than offline", "Stop using the internet", "Use their real names"],
            answer: "Act more boldly or aggressively online than offline",
            explanation: "The lack of face-to-face accountability and physical cues in online environments often causes people to say or do things they wouldn't in real life.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "\"Impression Management\" is the act of:",
            options: ["Copying others", "Controlling how others perceive you", "Making a good first impression only", "Lying to oneself"],
            answer: "Controlling how others perceive you",
            explanation: "Impression Management is the conscious or subconscious effort to influence the perceptions of other people about a person, object, or event.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which study strategy involves \"Thinking about your thinking\"?",
            options: ["Rote memorization", "Metacognition", "Cramming", "Highlighting text"],
            answer: "Metacognition",
            explanation: "Metacognition is essential for self-regulated learning as it involves reflecting on and managing one's own cognitive processes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"S\" in SMART goals stands for:",
            options: ["Simple", "Scientific", "Specific", "Standard"],
            answer: "Specific",
            explanation: "SMART is an acronym for Specific, Measurable, Achievable, Relevant, and Time-bound.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which is a source of Self-Efficacy according to Bandura?",
            options: ["Mastery Experiences", "Winning the lottery", "Ignoring emotions", "Luck"],
            answer: "Mastery Experiences",
            explanation: "Mastery experiences (personal successes) are the most powerful source of self-efficacy, providing direct evidence of competence.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Vicarious Experiences\" means:",
            options: ["Doing it yourself", "Seeing others succeed (Modeling)", "Reading a book", "Hearing a lecture"],
            answer: "Seeing others succeed (Modeling)",
            explanation: "Vicarious experience (or modeling) is observing others successfully perform a task, which raises the observer's belief in their own capability.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Chronic stress (long-term) can lead to which stage of GAS?",
            options: ["Alarm", "Resistance", "Exhaustion", "Recovery"],
            answer: "Exhaustion",
            explanation: "If stress persists, the body moves past the resistance stage into the final, potentially harmful stage of Exhaustion, where resources are depleted.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A \"Fixed Mindset\" avoids:",
            options: ["Praise", "Challenges", "Easy tasks", "Success"],
            answer: "Challenges",
            explanation: "A fixed mindset views challenges as threats because failure might expose a permanent lack of ability.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which creates a sense of \"we\" or group identity in the Philippines?",
            options: ["Kanya-kanya (Selfishness)", "Kapwa (Shared Identity)", "Crab Mentality", "Colonial Mentality"],
            answer: "Kapwa (Shared Identity)",
            explanation: "Kapwa is the foundational concept for the Filipino social self, fostering solidarity and shared identity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which is NOT a characteristic of a \"Democratic Culture\"?",
            options: ["Active participation", "Respect for diversity", "Blind obedience to authority", "Critical thinking"],
            answer: "Blind obedience to authority",
            explanation: "Democratic cultures rely on skepticism and critical engagement, not blind obedience, to ensure accountability and prevent tyranny.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The \"Id\" in Freud's theory operates on the:",
            options: ["Reality Principle", "Pleasure Principle", "Moral Principle", "Social Principle"],
            answer: "Pleasure Principle",
            explanation: "The Id is the impulsive, unconscious part of the psyche that seeks immediate gratification of instincts and needs.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which philosopher believed the self is a \"tabula rasa\"?",
            options: ["Descartes", "Locke", "Plato", "Kant"],
            answer: "Locke",
            explanation: "John Locke believed the mind starts as a blank slate, filled only by experience.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which component of the \"Material Self\" is an extension of one's identity influencing actions?",
            options: ["Family", "Money", "Job", "School"],
            answer: "Family",
            explanation: "In James' theory, family is the broadest and most personal extension of the material self, influencing one's status and reputation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the \"Dungan\" believed to provide if it is strong?",
            options: ["Wealth", "Protection from harm/illness", "Academic success", "Physical beauty"],
            answer: "Protection from harm/illness",
            explanation: "A strong Dungan (life force) protects the individual, especially children, from evil spirits that cause sickness or misfortune.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Magic\" differs from religion in that it involves:",
            options: ["Worshipping a deity", "Using spells/rituals to influence specific outcomes", "Community gatherings", "Moral codes"],
            answer: "Using spells/rituals to influence specific outcomes",
            explanation: "Magic is often instrumental, aimed at manipulating supernatural forces for a specific, immediate result, whereas religion involves propitiation and moral obligation to a deity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which is a healthy coping mechanism for stress?",
            options: ["Social withdrawal", "Excessive drinking", "Mindfulness and physical activity", "Procrastination"],
            answer: "Mindfulness and physical activity",
            explanation: "Mindfulness reduces stress by focusing on the present moment, and physical activity releases endorphins, effectively countering the negative effects of stress.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions (Part 2: 40 Items)
    identification: [
        {
            question: "The ancient Greek philosopher who stated \"The unexamined life is not worth living.\"",
            correctAnswers: ["Socrates"],
            explanation: "Socrates is renowned for his focus on introspection and the pursuit of self-knowledge.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Plato’s three parts of the soul are Reason, Spirit, and \________\_. (One word answer)",
            correctAnswers: ["Appetite"],
            explanation: "Plato's tripartite soul includes Reason, Spirit (or will), and Appetite (desires).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The philosopher who combined Christian theology with Platonic ideas, viewing the self as seeking union with God.",
            correctAnswers: ["St. Augustine", "Augustine"],
            explanation: "St. Augustine integrated classical philosophy with Christian doctrine, describing the self's ultimate goal as finding rest in God.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Descartes' theory that the mind and body are distinct substances.",
            correctAnswers: ["Dualism"],
            explanation: "Cartesian dualism posits that the mind (res cogitans) and body (res extensa) are fundamentally separate.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The British philosopher who proposed that the self is just a \"bundle of perceptions.\"",
            correctAnswers: ["David Hume", "Hume"],
            explanation: "Hume's empiricist view concluded that there is no persistent self, only a succession of fleeting sensory experiences.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Kant’s term for the self that constructs the world through the mind (the inner self).",
            correctAnswers: ["Inner Self"],
            explanation: "Kant distinguished the Inner Self (the conscious, rational self that organizes experience) from the Outer Self (the empirical self observed by senses).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The sociologist who coined the term \"Looking-Glass Self.\"",
            correctAnswers: ["Charles Horton Cooley", "Cooley"],
            explanation: "Cooley's theory states that our sense of self is built from imagining how others perceive us, how they judge us, and our resulting feelings.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "In Mead’s theory, the spontaneous, unorganized aspect of the self.",
            correctAnswers: ["I", "The I"],
            explanation: "The 'I' is the acting, spontaneous, and impulsive self, which reacts to the 'Me,' the socialized self.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The anthropologist who described culture as a system of inherited conceptions expressed in symbolic forms.",
            correctAnswers: ["Clifford Geertz", "Geertz"],
            explanation: "Geertz famously defined culture as 'webs of significance' that man himself has spun.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The psychological gap between the Real Self and the Ideal Self (Rogers).",
            correctAnswers: ["Incongruence"],
            explanation: "Incongruence is the state of tension and distress when the person one is (Real Self) significantly differs from the person one wishes to be (Ideal Self).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The psychologist who distinguished between the \"True Self\" and the \"False Self.\"",
            correctAnswers: ["Donald Winnicott", "Winnicott"],
            explanation: "Winnicott introduced the True Self (authentic, spontaneous) and the False Self (a protective mask/compliance used to meet others' expectations).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The human capacity to exercise control over the nature and quality of one's life (Bandura).",
            correctAnswers: ["Human Agency"],
            explanation: "Human Agency is the capacity to intentionally influence one's functioning and life circumstances through self-regulation and intentionality.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A culture that emphasizes group harmony, interdependence, and social roles.",
            correctAnswers: ["Collectivist Culture", "Collectivist"],
            explanation: "Collectivist cultures prioritize the needs and goals of the group over individual desires.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Confucian concept of \"human-heartedness\" or benevolence.",
            correctAnswers: ["Ren"],
            explanation: "Ren is the central virtue of Confucianism, representing the ideal moral character—benevolence, empathy, and kindness.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A mental health condition where a person obsesses over perceived flaws in their appearance.",
            correctAnswers: ["Body Dysmorphic Disorder", "BDD"],
            explanation: "Body Dysmorphic Disorder involves preoccupation with one or more perceived defects or flaws in physical appearance that are unnoticeable or slight to others.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The male sex hormone responsible for secondary sex characteristics.",
            correctAnswers: ["Testosterone"],
            explanation: "Testosterone drives the development of male secondary sex characteristics during puberty.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The phase of the sexual response cycle characterized by muscle contractions and release of tension (climax).",
            correctAnswers: ["Orgasm"],
            explanation: "Orgasm is the peak or climax of the sexual response cycle, involving involuntary muscle contractions and the subjective experience of pleasure.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The hormone associated with lust and sexual desire in both men and women.",
            correctAnswers: ["Testosterone", "Lust"],
            explanation: "Testosterone is the hormone primarily responsible for libido or sexual desire in both genders, driving the initial stage of love (Lust).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A bacterial STI that is often asymptomatic but can cause painful urination and discharge (starts with C).",
            correctAnswers: ["Chlamydia"],
            explanation: "Chlamydia is one of the most common bacterial STIs, often asymptomatic but treatable with antibiotics.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A method of contraception that involves tracking the menstrual cycle to avoid fertile days.",
            correctAnswers: ["Calendar Method", "Rhythm Method", "Natural Family Planning", "NFP"],
            explanation: "The Calendar/Rhythm Method tracks the menstrual cycle to predict ovulation and determine safe days for intercourse.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "William James’ term for the self that is known (the object), consisting of material, social, and spiritual selves.",
            correctAnswers: ["Me Self", "The Me", "Me"],
            explanation: "The 'Me' is the empirical self, encompassing everything the person considers as theirs, distinguishing it from the 'I' (the pure subject/knower).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Items we desire but are not essential for survival.",
            correctAnswers: ["Wants"],
            explanation: "Wants are desires that are optional and often culturally determined, contrasting with needs (necessities).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Visayan term for \"soul\" or \"life force.\"",
            correctAnswers: ["Dungan"],
            explanation: "Dungan is the Visayan life-force or spirit, believed to protect a person from harm and illness.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Rituals that mark a change in a person’s social status (e.g., marriage, graduation).",
            correctAnswers: ["Life Cycle Rituals", "Rites of Passage"],
            explanation: "Life Cycle Rituals, or Rites of Passage, symbolize and validate an individual's transition between social statuses.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Filipino value of helping one another in a community spirit.",
            correctAnswers: ["Bayanihan"],
            explanation: "Bayanihan embodies the spirit of communal unity, cooperation, and mutual assistance in Filipino culture.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Filipino trait of being able to recover quickly from difficulties (bouncing back).",
            correctAnswers: ["Resilience"],
            explanation: "Resilience is the ability to adapt well in the face of adversity, trauma, tragedy, threats, or significant sources of stress.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The concept of \"front stage\" and \"backstage\" behavior was introduced by this sociologist.",
            correctAnswers: ["Erving Goffman", "Goffman"],
            explanation: "Goffman's Dramaturgy theory uses theatrical metaphors to explain impression management in social life.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The strategy of controlling the information you present to others online to create a favorable image.",
            correctAnswers: ["Impression Management", "Selective Self-Presentation"],
            explanation: "Impression Management is the conscious or subconscious effort to control the images people convey to their audience.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The part of the brain that controls decision-making and impulse control (still developing in teens).",
            correctAnswers: ["Prefrontal Cortex"],
            explanation: "The prefrontal cortex is the executive center of the brain, responsible for complex cognitive behavior, personality expression, decision-making, and moderating social behavior.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The ability to monitor and evaluate your own learning process.",
            correctAnswers: ["Metacognition"],
            explanation: "Metacognition is 'cognition about cognition,' or thinking about one's own thinking process.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "In the SMART goal framework, 'T' stands for \________\_. (One word answer)",
            correctAnswers: ["Time-bound", "Timebound"],
            explanation: "The 'T' in SMART stands for Time-bound, ensuring goals have a clear deadline.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The belief that basic qualities like intelligence or talent are fixed traits (Fixed Mindset).",
            correctAnswers: ["Fixed Mindset"],
            explanation: "A fixed mindset believes that talents and abilities are inherent and unchangeable, leading to avoidance of challenges.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The theorist who proposed the Goal Setting Theory emphasizing specific and challenging goals.",
            correctAnswers: ["Edwin Locke", "Locke"],
            explanation: "Edwin Locke established the Goal Setting Theory, arguing that specific, difficult goals, combined with feedback, lead to higher performance.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Positive stress that energizes a person.",
            correctAnswers: ["Eustress"],
            explanation: "Eustress is good stress—it motivates, focuses energy, and is often perceived as positive.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The third stage of the General Adaptation Syndrome (Stress Response) where the body's resources are depleted.",
            correctAnswers: ["Exhaustion Stage", "Exhaustion"],
            explanation: "The Exhaustion Stage is the final stage of GAS, where the body can no longer sustain the resistance to stress, leading to system breakdown or illness.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Treating oneself with the same kindness and care that one would give to a good friend.",
            correctAnswers: ["Self-Compassion"],
            explanation: "Self-Compassion involves self-kindness, recognition of common humanity, and mindfulness towards one's suffering.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The hormone released during the \"fight or flight\" response.",
            correctAnswers: ["Adrenaline", "Epinephrine"],
            explanation: "Adrenaline (Epinephrine) is released rapidly during stress to prepare the body for immediate action (fight or flight).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Filipino concept of \"shared inner self.\"",
            correctAnswers: ["Kapwa"],
            explanation: "Kapwa is the foundational concept in Filipino psychology, meaning 'shared identity' or 'the other is also me.'",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The psychological need to repay a debt of gratitude in Filipino culture.",
            correctAnswers: ["Utang na Loob"],
            explanation: "Utang na Loob is the Filipino value of reciprocity and indebtedness for favors received.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "A serious eating disorder characterized by significant weight loss and fear of gaining weight.",
            correctAnswers: ["Anorexia Nervosa"],
            explanation: "Anorexia Nervosa is characterized by restriction of energy intake leading to a significantly low body weight and intense fear of gaining weight.",
            scoreValue: 2,
            type: "identification"
        }
    ]
};