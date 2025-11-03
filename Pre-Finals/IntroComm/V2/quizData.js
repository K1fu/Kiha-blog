const quizData = {
    // Fill-in-the-Blank questions (10 Items Total)
    fillInTheBlank: [
        {
            question: "A computer network that interconnects and shares computer resources in a single establishment is a ___.",
            blankWord: "Local Area Network (LAN)",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The Presentation Layer is responsible for data translation, including converting data between different encoding systems like EBCDIC to ___.",
            blankWord: "ASCII",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The type of network architecture that links multiple servers with data and apps to make them easily accessible to users is for ___.",
            blankWord: "Data Centers",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "A question generator should avoid absolutes such as ___ and ___ in Multiple Choice Question stems.",
            blankWord: "always and never",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "___ (Internet Protocol) is the main network layer protocol used across the internet for routing.",
            blankWord: "IP",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The simplest type of Identification test is a statement with one or more key words missing, also known as Completion or ___.",
            blankWord: "Fill-in-the-Blanks",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "___ is a security issue where an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating.",
            blankWord: "Man-in-the-middle",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The highest of the seven OSI layers, providing the interface for end-user processes, is the ___ Layer.",
            blankWord: "Application",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "To facilitate rapid scoring of Identification tests, it is recommended to arrange the students' responses in a ___ at the right of the sentences.",
            blankWord: "column",
            scoreValue: 2,
            type: "fillInTheBlank"
        },
        {
            question: "The Transport Layer uses ___ (User Datagram Protocol), which offers faster transmission without acknowledgment, making it ideal for real-time applications.",
            blankWord: "UDP",
            scoreValue: 2,
            type: "fillInTheBlank"
        }
    ],

    // Multiple Choice questions (70 Items Total)
    multipleChoice: [
        // A. Networking Fundamentals & Categories (Q1-18)
        {
            question: "Which of the following is defined as a much larger network covering vast areas such as cities, provinces, and countries, and is often a bigger network consisting of LANs and MANs?",
            options: ["Metropolitan Area Network (MAN)", "Campus Area Network (CAN)", "Wide Area Network (WAN)", "Personal Area Network (PAN)"],
            answer: "Wide Area Network (WAN)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The smallest type of area network that interconnects compatible personal devices is known as a:",
            options: ["Local Area Network (LAN)", "Personal Area Network (PAN)", "Wide Area Network (WAN)", "Campus Area Network (CAN)"],
            answer: "Personal Area Network (PAN)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network category covers multiple city buildings and traffic lights, operating at a city-scale?",
            options: ["WAN", "CAN", "MAN", "PAN"],
            answer: "MAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The blueprint of how network devices interconnect, showing the structure of network devices and services, is called:",
            options: ["Network Topology", "OSI Model", "Network Architecture", "Network Protocol"],
            answer: "Network Architecture",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What type of network architecture connects end-user devices and brings users together in campuses and branches?",
            options: ["Data Center Network", "Wide-Area Network (WAN) Architecture", "Access Network", "Metropolitan Network"],
            answer: "Access Network",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which wired networking device is primarily used to connect multiple computers in a LAN and simply broadcasts data to all connected ports?",
            options: ["Switch", "Hub", "Wireless Repeater", "Cable Modem"],
            answer: "Hub",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A wireless device that extends the range of an existing wireless network is called a/an:",
            options: ["Cellular modem", "Wireless router", "Wireless Repeater/Extender", "Access Point"],
            answer: "Wireless Repeater/Extender",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term describes the act of linking computers together for the purpose of sharing resources across the internet?",
            options: ["Data Encapsulation", "Network Segmentation", "Computer Networking", "Remote Access"],
            answer: "Computer Networking",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network architecture links multiple servers with data and applications to make them easily accessible to users?",
            options: ["Access networks", "Networks for Data Centers", "Metropolitan Area Networks", "Wide-Area networks (WANs)"],
            answer: "Networks for Data Centers",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The LAN Ethernet Cable is an example of what type of network device?",
            options: ["Wireless Device", "Modulating Device", "Wired Device", "Access Point"],
            answer: "Wired Device",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network category is defined as interconnecting and sharing computer resources within a single establishment?",
            options: ["PAN", "LAN", "MAN", "CAN"],
            answer: "LAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A network that covers multiple buildings in a campus environment is specifically called a:",
            options: ["WAN", "CAN", "MAN", "LAN"],
            answer: "CAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is not listed as a purpose of computer networking?",
            options: ["Web browsing", "Sending and retrieving emails", "Centralized hardware manufacturing", "Sharing files and images"],
            answer: "Centralized hardware manufacturing",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Cellular modem falls under which category of network devices?",
            options: ["Wired Devices", "Wireless Devices", "Network Topology Devices", "Security Devices"],
            answer: "Wireless Devices",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of topology is mentioned in the provided networking notes?",
            options: ["Ring Topology", "Bus Topology", "Star Topology", "Mesh Topology"],
            answer: "Mesh Topology",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The concept of Networking requires computers to access multiple networks to share resources for operations such as:",
            options: ["Modulating signals", "Downloading music", "Encapsulating data", "Physical layer transmission"],
            answer: "Downloading music",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What distinguishes a Switch from a Hub in a wired LAN?",
            options: ["Switches only support fiber optic cables.", "Hubs are used for connecting wireless devices.", "Switches intelligently forward data to the intended destination port.", "Hubs operate at the Network Layer."],
            answer: "Switches intelligently forward data to the intended destination port.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network architecture is described as connecting users to programs and services, such as hospital systems?",
            options: ["Access Networks", "Networks for Data Centers", "Wide-Area Networks (WANs)", "Personal Area Networks"],
            answer: "Wide-Area Networks (WANs)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // B. OSI Model Layers & Functions (Q19-35)
        {
            question: "Which layer of the OSI model is responsible for end-to-end communication between two devices, including segmentation and reassembly of data?",
            options: ["Network Layer", "Session Layer", "Transport Layer", "Data Link Layer"],
            answer: "Transport Layer",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Physical Layer (Layer 1) is primarily concerned with:",
            options: ["Logical addressing (IP)", "Synchronization of data transfers", "The transmission of raw bit streams over a physical medium", "Data encryption and compression"],
            answer: "The transmission of raw bit streams over a physical medium",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "At which layer does the protocol IP (Internet Protocol) operate, managing routing and traffic control across a multi-node network?",
            options: ["Data Link Layer", "Network Layer (Layer 3)", "Transport Layer", "Application Layer"],
            answer: "Network Layer (Layer 3)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Presentation Layer (Layer 6) is also known as the syntax layer because it is responsible for:",
            options: ["Creating communication sessions", "Translating data formats, encryption, and compression", "Providing a user interface", "Logical addressing"],
            answer: "Translating data formats, encryption, and compression",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which protocols are commonly associated with the Transport Layer (Layer 4), providing connection-oriented and connectionless services?",
            options: ["HTTP and FTP", "IP and ICMP", "TCP and UDP", "SMTP and POP3"],
            answer: "TCP and UDP",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Data Link Layer (Layer 2) breaks packets from the Network Layer into smaller units called:",
            options: ["Segments", "Packets", "Frames", "Bits"],
            answer: "Frames",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Protocols like HTTP, FTP, and SMTP operate at which layer of the OSI model?",
            options: ["Presentation Layer", "Session Layer", "Application Layer (Layer 7)", "Transport Layer"],
            answer: "Application Layer (Layer 7)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The function of synchronizing data transfer with checkpoints to allow session recovery is performed by which layer?",
            options: ["Presentation Layer", "Transport Layer", "Session Layer (Layer 5)", "Data Link Layer"],
            answer: "Session Layer (Layer 5)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The PDU (Protocol Data Unit) at the Transport Layer is commonly referred to as a:",
            options: ["Packet", "Frame", "Segment", "Datagram"],
            answer: "Segment",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is a key function of the Data Link Layer (Layer 2)?",
            options: ["Routing", "Physical addressing (MAC addresses)", "Establishing sessions", "Providing user interfaces"],
            answer: "Physical addressing (MAC addresses)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Physical Layer is responsible for converting data into a:",
            options: ["Frame", "Segment", "Packet", "Bit stream (1s and 0s)"],
            answer: "Bit stream (1s and 0s)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Application Layer (Layer 7) includes protocols designed for:",
            options: ["Error control", "Data compression", "End-users", "Session termination"],
            answer: "End-users",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Transport Layer utilizes TCP for:",
            options: ["Faster, connectionless transmission.", "Encryption of data.", "Reliable, connection-oriented delivery with acknowledgments.", "Logical network addressing."],
            answer: "Reliable, connection-oriented delivery with acknowledgments.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which layer is responsible for determining the best physical path for data to reach its destination (routing)?",
            options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
            answer: "Network Layer",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Encryption and decryption of data for secure transmission (e.g., using SSL/TLS) are handled at the:",
            options: ["Application Layer", "Presentation Layer", "Session Layer", "Physical Layer"],
            answer: "Presentation Layer",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The OSI model is a conceptual framework that divides network communication into how many abstract layers?",
            options: ["Four", "Five", "Seven", "Eight"],
            answer: "Seven",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Data Link Layer is often split into two sub-layers: the Media Access Control (MAC) layer and the:",
            options: ["Transport Layer Control (TLC) layer", "Data Control Layer (DCL) layer", "Logical Link Control (LLC) layer", "Physical Control (PC) layer"],
            answer: "Logical Link Control (LLC) layer",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // C. Security & Network Failure (Q36-40)
        {
            question: "Which network security issue is described as a malicious attempt to make a machine or network resource unavailable to its intended users?",
            options: ["Man-in-the-middle", "Eavesdropping", "Denial of Service (DoS/DDoS)", "Phishing"],
            answer: "Denial of Service (DoS/DDoS)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The consequence of network failure that occurs because network downtime puts operations and transactions on hold is known as:",
            options: ["Maintenance Cost", "Legal Repercussions", "Revenue Loss", "Damaged Reputation"],
            answer: "Revenue Loss",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of attack involves a fraudulent attempt, often made through email, to steal sensitive information by disguising oneself as a trustworthy entity?",
            options: ["SQL Injection", "Cross-site Scripting", "Phishing", "Man-in-the-middle"],
            answer: "Phishing",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The use of a VPN (Virtual Private Network) is recommended to ensure that a user's online activities are publicly hidden, as it:",
            options: ["Allows scripts to be embedded inside the device.", "Prevents maintenance costs.", "Creates backs on a public network to directly access the server.", "Eliminates all DoS attacks."],
            answer: "Creates backs on a public network to directly access the server.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Failure to meet agreed-upon outputs and deliverables on time due to network failure can result in:",
            options: ["Lesser Productivity", "Damaged Reputation", "Legal Repercussions", "Eavesdropping"],
            answer: "Legal Repercussions",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // D. Question Generation & Pedagogy (Q41-70)
        {
            question: "According to the guides, which level of the cognitive domain does the Identification/Short-Answer test primarily measure?",
            options: ["Application", "Analysis", "Lowest level (Remembering/Recall)", "Synthesis"],
            answer: "Lowest level (Remembering/Recall)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A major drawback of constructing good Multiple Choice Questions (MCQ) is that it is:",
            options: ["Restricted to short answers", "Prone to guessing by students", "Time-consuming", "Only measures rote memory"],
            answer: "Time-consuming",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the recommended number of answer options to include in a Multiple Choice Question?",
            options: ["2 to 3", "3 to 5", "5 to 7", "No more than 2"],
            answer: "3 to 5",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is a recommended tip for writing MCQ answer options?",
            options: ["Make options vastly different in length for clarity.", "Always use the option \"all of the above.\"", "Make options similar in grammar, length, complexity, and style.", "Use \"none of the above\" frequently."],
            answer: "Make options similar in grammar, length, complexity, and style.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In writing MCQ stems, it is recommended to include most of the information in the stem so that:",
            options: ["The options can be more complex.", "The options can be short.", "Grammatical clues are minimized.", "Students can use process of elimination easily."],
            answer: "The options can be short.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which guideline for Fill-in-the-Blank (FITB) questions is aimed at preventing visual clues to the expected answer?",
            options: ["Avoid Grammatical Hints", "Do Not Lift from Text", "Prevent Inter-Item Clues", "Standardize Blank Length"],
            answer: "Standardize Blank Length",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a key limitation of Identification/Short-Answer tests?",
            options: ["They are difficult to construct.", "They are easy to guess.", "They are usually restricted to short answers, making it hard to measure complex outcomes.", "They cannot be scored objectively."],
            answer: "They are usually restricted to short answers, making it hard to measure complex outcomes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "According to the MCQ guide, which of the following words should generally be avoided in the stem?",
            options: ["Always, Never, All", "Rarely, Usually, Sometimes", "Most, Least, Best", "Often, Frequently, Occasionally"],
            answer: "Always, Never, All",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The CRESST criteria for test quality includes which of the following standards?",
            options: ["Test-wiseness and Guessing", "Content Quality and Fairness", "Rote Memory and Recall", "Time to Score and Cost"],
            answer: "Content Quality and Fairness",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the highest level of intellectual understanding (cognitive complexity) mentioned in the guidelines?",
            options: ["Application", "Analysis", "Synthesis", "Evaluation"],
            answer: "Evaluation",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When writing an FITB question, the main rule regarding the answer is to:",
            options: ["Ensure the answer is always a single word.", "Ensure a Unique Answer", "Make the answer a long phrase for specificity.", "Lift the answer directly from the text."],
            answer: "Ensure a Unique Answer",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which guideline is violated when a statement is taken directly from a textbook for an identification question?",
            options: ["Be Specific", "Avoid Overmutilated Statements", "Don't Lift Directly from the Book", "Focus on Significance"],
            answer: "Don't Lift Directly from the Book",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The advantage of Multiple Choice Items is that they can be scored rapidly, providing quick feedback to students and enabling:",
            options: ["Measurement of higher order thinking only.", "Efficient ways to assess large numbers of students over a broad range of content.", "The elimination of all student guessing.", "The use of only rote memory skills."],
            answer: "Efficient ways to assess large numbers of students over a broad range of content.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Allowing one point for each blank correctly filled in an Identification test is part of the guideline for:",
            options: ["Avoiding Overmutilated Statements", "Focusing on Significance", "Scoring Weight", "Facilitating Scoring"],
            answer: "Scoring Weight",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the structure of an MCQ item, the incorrect options presented to the student are called:",
            options: ["Stems", "Keys", "Distractors", "Objectives"],
            answer: "Distractors",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is considered an objective test item type?",
            options: ["Essay", "Matching", "Short Answer (if graded subjectively)", "Case Study"],
            answer: "Matching",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The process of starting by writing the correct answer first, and then writing the question or statement for that answer, is recommended for which test type?",
            options: ["True-False", "Identification/Completion", "Matching", "Essay"],
            answer: "Identification/Completion",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When creating an MCQ, it is suggested to write the components in this order:",
            options: ["Correct Answer, Distractors, Prompt", "Prompt (Stem), Correct Answer, Distractors", "Distractors, Prompt, Correct Answer", "Prompt, Distractors, Correct Answer"],
            answer: "Prompt (Stem), Correct Answer, Distractors",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Using words like \"a\" or \"an\" immediately before a blank in a Fill-in-the-Blank question violates the guideline to:",
            options: ["Standardize Blank Length", "Avoid Grammatical Hints", "Focus on Significance", "Keep it Simple and Clear"],
            answer: "Avoid Grammatical Hints",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is not one of the six levels of intellectual understanding mentioned in the educational guide?",
            options: ["Comprehension", "Analysis", "Memorization (part of Knowledge)", "Synthesis"],
            answer: "Memorization (part of Knowledge)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "For an Identification item, the guideline \"Avoid Overmutilated Statements\" refers to:",
            options: ["Making the sentence grammatically incorrect.", "Avoiding too many blanks in a single sentence.", "Using complex vocabulary.", "Lifting statements from a textbook."],
            answer: "Avoiding too many blanks in a single sentence.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In comparing objective tests (like MCQ) and subjective tests (like essay), which statement is true?",
            options: ["Essay tests cover a broader range of content.", "Objective tests encourage more guessing.", "Objective tests are easier to construct.", "Essay tests require less writing skill."],
            answer: "Objective tests encourage more guessing.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The purpose of a VPN is to address which type of network issue?",
            options: ["Cross-site Scripting", "SQL Injection", "Eavesdropping/Privacy concerns", "Maintenance Cost"],
            answer: "Eavesdropping/Privacy concerns",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the cognitive focus of a Fill-in-the-Blank question?",
            options: ["Application of skills", "Recall of terms, facts, and basic concepts", "Synthesis of new ideas", "Analysis of complex problems"],
            answer: "Recall of terms, facts, and basic concepts",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When writing identification questions, what is the key recommendation regarding the answer's significance?",
            options: ["Ask for sheer memory work constantly.", "Minimize questions that call for sheer memory work unless the answer has significant analytical importance.", "Focus only on trivia.", "The answer should be a full paragraph."],
            answer: "Minimize questions that call for sheer memory work unless the answer has significant analytical importance.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "An efficient way to prevent sudden company network downtime is the encouragement of:",
            options: ["Revenue collection.", "Daily monitoring of cables and network devices.", "Legal repercussions.", "Decreasing employee productivity."],
            answer: "Daily monitoring of cables and network devices.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term for network categories is described as an enterprise network covering multiple buildings in a campus environment?",
            options: ["LAN", "CAN", "MAN", "WAN"],
            answer: "CAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The best way to prevent legal repercussions from network failure is to:",
            options: ["Damage the company's reputation.", "Stop all maintenance.", "Alert every concerned party as soon as failure happens.", "Increase maintenance costs."],
            answer: "Alert every concerned party as soon as failure happens.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a recommended approach to handling options like \"all of the above\" or \"both A and B\" in MCQ options?",
            options: ["Use them as frequently as possible.", "Use only \"all of the above.\"", "Decrease the possibility of students guessing by avoiding them.", "Use only \"both A and B.\""],
            answer: "Decrease the possibility of students guessing by avoiding them.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which cognitive level is tested when a student is asked to distinguish between facts and inferences, a process of breaking down information into parts?",
            options: ["Knowledge", "Application", "Analysis", "Evaluation"],
            answer: "Analysis",
            scoreValue: 1,
            type: "multipleChoice"
        },
    ],

    // Identification questions (30 Items Total)
    identification: [
        {
            question: "Which OSI layer's primary function is framing and using MAC addresses for local network identification?",
            correctAnswers: ["Data Link Layer", "Data Link"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the smallest type of Area Network that interconnects compatible personal devices?",
            correctAnswers: ["Personal Area Network", "PAN"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which type of network architecture involves bringing users and devices together in campuses and branches by connecting end-user devices?",
            correctAnswers: ["Access Network", "Access networks"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the primary function of the Network Layer (Layer 3)?",
            correctAnswers: ["Routing", "Addressing", "Traffic Control", "Routing/Addressing/Traffic Control"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The fraudulent attempt to steal sensitive information by disguising as a trustworthy entity, typically via email, is called",
            correctAnswers: ["Phishing"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the cognitive level of intellectual understanding that focuses on breaking down information into its constituent parts?",
            correctAnswers: ["Analysis"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which wired device is known for interconnecting multiple computers in a LAN and sharing computer resources in an establishment?",
            correctAnswers: ["Switch", "Hub"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which layer of the OSI model manages the opening, closing, and synchronization of communication between two devices?",
            correctAnswers: ["Session Layer", "Session"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The consequence of network failure that results from a negative interpretation of regular network failures, impacting clients and partners, is",
            correctAnswers: ["Damaged Reputation"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which network category is defined by covering multiple city buildings and traffic lights on a city-scale?",
            correctAnswers: ["Metropolitan Area Network", "MAN"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the PDU (Protocol Data Unit) used at the Data Link Layer?",
            correctAnswers: ["Frame"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for a communication network that connects end-user devices?",
            correctAnswers: ["Access Networks", "Access Network"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which security issue involves a client-side code injection attack where an attacker injects malicious data into an application?",
            correctAnswers: ["Cross-site Scripting", "XSS"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What network topology is explicitly mentioned in the networking notes?",
            correctAnswers: ["Mesh Topology"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the lowest level of the cognitive domain that Identification tests are most often used to measure?",
            correctAnswers: ["Remembering", "Recall", "Knowledge"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which network category is a bigger network consisting of LANs and MANs?",
            correctAnswers: ["Wide Area Network", "WAN"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The use of SSL/TLS protocols to secure transmission and protect data during network communications is a function of which OSI layer?",
            correctAnswers: ["Presentation Layer", "Presentation"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which network security measure creates a secure, encrypted tunnel over a public network to directly access a server and hide online activities?",
            correctAnswers: ["Virtual Private Network", "VPN"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What PDU is found at the Network Layer (Layer 3)?",
            correctAnswers: ["Packet", "Datagram"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which layer of the OSI model is responsible for converting raw data into a bit stream (1s and 0s) for physical transmission?",
            correctAnswers: ["Physical Layer", "Physical"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What general suggestion is given for writing MCQ items regarding the sequence of creation?",
            correctAnswers: ["Prompt first", "Stem first"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which connection-oriented protocol at the Transport Layer provides reliable delivery with a three-way handshake?",
            correctAnswers: ["TCP", "Transmission Control Protocol"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The consequence of network failure that involves the repair and daily monitoring of network equipment is related to",
            correctAnswers: ["Maintenance Cost"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which type of network is an enterprise network covering multiple buildings in a campus environment?",
            correctAnswers: ["Campus Area Network", "CAN"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the general term for the incorrect options in a Multiple Choice Question?",
            correctAnswers: ["Distractors"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which layer of the OSI model includes high-level protocols such as HTTP and FTP for resource sharing or remote file access?",
            correctAnswers: ["Application Layer", "Application"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The concept that involves linking computers for shared resources across the internet is called",
            correctAnswers: ["Computer Networking", "Networking"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which type of test item has the limitation of being primarily restricted to measuring rote memory?",
            correctAnswers: ["Identification", "Completion", "Fill-in-the-Blank"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The guideline to ensure an item is phrased so that only one correct response is possible is known as ensuring a",
            correctAnswers: ["Unique Answer"],
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which cognitive level is tested when a student is asked to judge the value or worth of a theory or solution?",
            correctAnswers: ["Evaluation"],
            scoreValue: 2,
            type: "identification"
        }
    ],

    // True/False questions (10 Items Total)
    trueFalse: [
        {
            question: "The Presentation Layer of the OSI model is responsible for managing communication sessions and synchronization.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A drawback of Multiple Choice Questions is that the examinee must supply the answer, which lowers the probability of guessing.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Eavesdropping is a type of internet security issue where a third party secretly intercepts network traffic.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The Wide-Area Network (WAN) architecture specifically links multiple servers with data and applications to make them easily accessible to users.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "In a Fill-in-the-Blank question, using \"an\" immediately before the blank is an example of an unintended grammatical hint.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The Transport Layer (Layer 4) is responsible for the Physical Addressing (MAC address) of devices on a local network.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A major consequence of network failure is Lesser Productivity because tasks rely heavily on the internet, causing employees to remain stagnant.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The LAN (Local Area Network) is the smallest type of area network, interconnecting compatible personal devices.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "In writing Multiple Choice items, it is recommended to vary the positions of the correct options.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "UDP (User Datagram Protocol) is the connectionless transport layer protocol, prioritizing speed over guaranteed delivery.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        }
    ]
};
