const quizData = {
    // SECTION 1: MULTIPLE CHOICE (Aiming for exam coverage of all topics)
    multipleChoice: [
        // --- History & Early Civilizations ---
        {
            question: "Which ancient civilization used clay cuneiform tables and a numerical system consisting of only two symbols (1 and 10)?",
            options: ["The Egyptians", "The Babylonians", "The Greeks", "The Romans"],
            answer: "The Babylonians",
            explanation: "The Babylonians thrived in Mesopotamia and used clay cuneiform tables and a simple two-symbol numerical system.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the primary writing surface used by the Egyptians for their arithmetic and geometric problems, such as the Rhind Papyrus?",
            options: ["Clay tablets", "Papyrus", "Animal parchment", "Stone slates"],
            answer: "Papyrus",
            explanation: "The Egyptians used papyrus, a writing surface like paper, to document their mathematical problems.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Roman contribution to computing involved a sequence of letters to symbolize numbers, often requiring an abacus for calculation due to its complexity?",
            options: ["Hieroglyphics", "Cuneiform", "Roman Numerals", "Binary System"],
            answer: "Roman Numerals",
            explanation: "The Roman number system used letters (I, V, X, L, C, D, M) to symbolize numbers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Notable Figures ---
        {
            question: "Who is credited with designing the 'Difference Engine' and is often considered one of the grandfathers of the computing field?",
            options: ["Gottfried Wilhelm Leibniz", "Charles Babbage", "George Boole", "Blaise Pascal"],
            answer: "Charles Babbage",
            explanation: "Charles Babbage designed the Difference Engine in 1821 to compute mathematical tables precisely.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which mathematician developed the binary number system and the 'Step Reckoner', the first calculator to perform all four basic arithmetic operations?",
            options: ["Gottfried Wilhelm Leibniz", "Ada Lovelace", "Grace Hopper", "George Boole"],
            answer: "Gottfried Wilhelm Leibniz",
            explanation: "Leibniz developed the Step Reckoner (1672-1964) and the binary number system used in digital computers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who is known for developing COBOL (Common Business-oriented Language) and promoting its adoption in the military and private sectors?",
            options: ["Katherine Johnson", "Gladys Mae West", "Grace Brewster Murray Hopper", "Ada Lovelace"],
            answer: "Grace Brewster Murray Hopper",
            explanation: "Grace Hopper was a pioneer in developing COBOL in 1959, which became a standardized business language.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which NASA 'human computer' calculated the trajectories that allowed astronauts to orbit Earth and land on the moon?",
            options: ["Gladys Mae West", "Katherine Johnson", "Grace Hopper", "Ada Lovelace"],
            answer: "Katherine Johnson",
            explanation: "Katherine Johnson studied geometry for space travel and calculated paths for spacecraft to orbit Earth and land on the moon.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Modern Computing ---
        {
            question: "Which technology simulates hardware functions by creating multiple virtual machines on a single physical server?",
            options: ["Cloud Computing", "Virtualization", "Internet of Things", "Edge Computing"],
            answer: "Virtualization",
            explanation: "Virtualization detaches software from hardware, allowing multiple operating systems or functions to run on one physical device.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What term describes the massive and complex datasets characterized by high volume, variety, and velocity?",
            options: ["Cloud Storage", "Big Data", "Fog Computing", "Database Management"],
            answer: "Big Data",
            explanation: "Big Data refers to datasets that are too large and complex for traditional processing, defined by volume, variety, and velocity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computing model brings data storage and processing closer to the data sources (e.g., sensors) rather than relying solely on a distant cloud?",
            options: ["Mainframe Computing", "Edge Computing", "Centralized Computing", "Utility Computing"],
            answer: "Edge Computing",
            explanation: "Edge computing processes data locally near the source (the 'edge'), reducing latency compared to sending everything to a centralized cloud.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Evolution of Computers ---
        {
            question: "Which technology was the primary component of First Generation computers (1940s-1950s)?",
            options: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"],
            answer: "Vacuum Tubes",
            explanation: "First-generation computers like ENIAC and UNIVAC I used thousands of bulky vacuum tubes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The invention of the Integrated Circuit (IC) by Jack Kilby marked the beginning of which computer generation?",
            options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            answer: "Third Generation",
            explanation: "The Third Generation is characterized by the use of Integrated Circuits, which combined many electronic circuits onto a small chip.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the fundamental building block of modern electronics that replaced vacuum tubes in the Second Generation of computers?",
            options: ["The Resistor", "The Transistor", "The Capacitor", "The Inductor"],
            answer: "The Transistor",
            explanation: "Transistors were smaller, cheaper, and more reliable than vacuum tubes, defining the Second Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Computer Components ---
        {
            question: "Which component of the CPU is responsible for performing mathematical calculations and logical comparisons?",
            options: ["Control Unit (CU)", "Memory Unit", "Arithmetic-Logical Unit (ALU)", "Input Unit"],
            answer: "Arithmetic-Logical Unit (ALU)",
            explanation: "The ALU handles addition, subtraction, multiplication, and decision-making logic within the CPU.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which unit manages the computer's functions, interprets signals, and maintains data flow inside the system?",
            options: ["Arithmetic-Logical Unit", "Control Unit", "Output Unit", "Storage Unit"],
            answer: "Control Unit",
            explanation: "The Control Unit acts as the manager, interpreting instructions and directing the flow of data.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Web and Internet ---
        {
            question: "Who is credited with inventing the World Wide Web (WWW) in 1989 while working at CERN?",
            options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vinton Cerf"],
            answer: "Tim Berners-Lee",
            explanation: "Tim Berners-Lee proposed the WWW in 1989 to combine computers, networks, and hypertext.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the key difference between the Internet and the World Wide Web?",
            options: ["They are synonymous.", "The Web is the physical cables; the Internet is the software.", "The Internet is the infrastructure; the Web is a system of information accessed via the Internet.", "The Internet is for military use; the Web is for civilians."],
            answer: "The Internet is the infrastructure; the Web is a system of information accessed via the Internet.",
            explanation: "The Internet is the massive interconnection of networks (infrastructure), while the Web is an application built on top of that infrastructure.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which 1960s project by the Advanced Research Projects Agency is considered the precursor to the modern Internet?",
            options: ["MILNET", "ARPANET", "NSFNET", "ETHERNET"],
            answer: "ARPANET",
            explanation: "ARPANET, pioneered by Lawrence G. Roberts and others, was the first wide-area packet-switching network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Networking ---
        {
            question: "Which type of network covers a large geographic area, such as a country or continent?",
            options: ["LAN (Local Area Network)", "PAN (Personal Area Network)", "MAN (Metropolitan Area Network)", "WAN (Wide Area Network)"],
            answer: "WAN (Wide Area Network)",
            explanation: "WANs cover vast areas, often connecting smaller networks like LANs and MANs across cities or countries.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the OSI Model, which layer is responsible for end-to-end delivery and error-free packets?",
            options: ["Physical Layer", "Data Link Layer", "Transport Layer", "Application Layer"],
            answer: "Transport Layer",
            explanation: "The Transport Layer (Layer 4) manages message integrity, segmentation, and end-to-end delivery.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network device connects multiple devices in a LAN but broadcasts data to *all* connected ports, potentially causing traffic congestion?",
            options: ["Switch", "Router", "Hub", "Firewall"],
            answer: "Hub",
            explanation: "A hub is a multiport repeater that broadcasts received data to all connected devices, unlike a switch which directs data only to the destination.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In which network topology do all devices connect directly to a central switch or hub?",
            options: ["Bus Topology", "Star Topology", "Ring Topology", "Mesh Topology"],
            answer: "Star Topology",
            explanation: "In a Star topology, all nodes connect individually to a central connection point (hub or switch).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Security ---
        {
            question: "What is the primary function of a Firewall in network security?",
            options: ["To speed up internet connection", "To monitor and filter incoming and outgoing network traffic", "To store backup data", "To route data between local networks"],
            answer: "To monitor and filter incoming and outgoing network traffic",
            explanation: "A firewall acts as a barrier between a trusted internal network and untrusted external networks, filtering traffic based on rules.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which security tool encrypts internet traffic and hides the user's IP address, providing privacy on public networks?",
            options: ["Firewall", "Antivirus", "VPN (Virtual Private Network)", "WPA3"],
            answer: "VPN (Virtual Private Network)",
            explanation: "A VPN protects incoming and outgoing traffic with encryption and masks the user's identity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Future Computing ---
        {
            question: "What is Moore's Law?",
            options: ["The cost of computers halves every year.", "The number of transistors in an integrated circuit doubles approximately every two years.", "Internet speed doubles every decade.", "Data storage capacity increases linearly."],
            answer: "The number of transistors in an integrated circuit doubles approximately every two years.",
            explanation: "Gordon Moore observed in 1965 that transistor density doubles every two years, driving computing power up and costs down.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which future computing technology uses 'qubits' that can represent multiple states simultaneously?",
            options: ["Optical Computing", "DNA Computing", "Quantum Computing", "Neuromorphic Computing"],
            answer: "Quantum Computing",
            explanation: "Quantum computing uses quantum bits (qubits) and subatomic particle properties to perform complex calculations faster than traditional bits.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which material is being researched for future transistors because it is a one-atom-thick sheet that is highly conductive?",
            options: ["Silicon", "Graphene", "Copper", "Fiberglass"],
            answer: "Graphene",
            explanation: "Graphene is a thin, one-atom-thick material that is more conductive than silicon and is being explored for nanotube processors.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Challenges ---
        {
            question: "What term describes the gap between those who have access to the Internet and those who do not?",
            options: ["Digital Inequality", "Digital Divide", "Net Neutrality", "Data Breach"],
            answer: "Digital Divide",
            explanation: "The Digital Divide is the gap in access to technology and the Internet based on availability, affordability, and relevance.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What distinguishes 'Digital Inequality' from the 'Digital Divide'?",
            options: ["They are exactly the same.", "Inequality refers to the speed of the internet.", "Inequality focuses on the discrepancy in skills and usage, not just physical access.", "Divide refers only to rich vs poor countries."],
            answer: "Inequality focuses on the discrepancy in skills and usage, not just physical access.",
            explanation: "Digital Inequality highlights differences in IT skills and usage (the 'how'), whereas Digital Divide focuses on the 'have vs have-nots' of access.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which OSI layer is responsible for finding the best path for data to travel from source to destination (routing)?",
            options: ["Data Link", "Network", "Transport", "Session"],
            answer: "Network",
            explanation: "The Network layer (Layer 3) handles addressing and routing decisions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which topology connects all devices to a single central cable, where a break in the cable stops all transmission?",
            options: ["Star", "Ring", "Bus", "Mesh"],
            answer: "Bus",
            explanation: "The Bus topology uses a single coaxial cable (backbone) to which all devices connect.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which generation of computers introduced the microprocessor?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Fourth",
            explanation: "The Fourth Generation is defined by the microprocessor (like the Intel 4004), putting a computer on a single chip.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does 'IoT' stand for?",
            options: ["Internet of Technology", "Internet of Telecommunications", "Internet of Things", "Internal of Things"],
            answer: "Internet of Things",
            explanation: "IoT stands for Internet of Things, a network of physical objects sharing data.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which ancient civilization used a base-10 number system with distinct symbols for 1, 10, 100, etc.?",
            options: ["Greeks", "Egyptians", "Babylonians", "Romans"],
            answer: "Egyptians",
            explanation: "The Egyptians used a base 10 system with hieroglyphs for powers of 10.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who developed the 'Mathematical Analysis of Logic' and introduced the concept of 1 symbolizing the universe of thinkable objects?",
            options: ["George Boole", "Charles Babbage", "Alan Turing", "John von Neumann"],
            answer: "George Boole",
            explanation: "George Boole developed symbolic logic and Boolean algebra, essential for digital circuit design.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which modern technology relies on 'fog' and 'edge' computing to process data closer to the user?",
            options: ["Mainframe", "Cloud Computing", "Distributed Computing", "Quantum Computing"],
            answer: "Cloud Computing",
            explanation: "Fog and Edge computing are extensions of Cloud computing, moving processing closer to the ground (fog) or source (edge).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary disadvantage of a 'Mesh' topology?",
            options: ["It is unreliable.", "It is expensive and complex to wire.", "It relies on a central hub.", "It cannot handle high traffic."],
            answer: "It is expensive and complex to wire.",
            explanation: "Full mesh topologies require cabling between every single device, making them expensive and labor-intensive.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What refers to the right of an individual to keep their personal information on the internet secure and private?",
            options: ["Digital Rights", "Internet Privacy", "Copyright", "Net Protocol"],
            answer: "Internet Privacy",
            explanation: "Internet Privacy deals with the control over identity and stored personal data.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term describes the condition where individuals have the IT capacity for full participation in society and the economy?",
            options: ["Digital Equity", "Digital Literacy", "Digital Divide", "Digital Native"],
            answer: "Digital Equity",
            explanation: "Digital Equity is the goal/condition where everyone has the capacity for full participation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT a layer in the OSI model?",
            options: ["Hardware Layer", "Physical Layer", "Session Layer", "Application Layer"],
            answer: "Hardware Layer",
            explanation: "Hardware is not a named layer in the 7-layer OSI model.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the name of the first general-purpose analog computer developed by Vannevar Bush?",
            options: ["The Difference Engine", "The Differential Analyzer", "The Step Reckoner", "The Analytical Engine"],
            answer: "The Differential Analyzer",
            explanation: "Vannevar Bush developed the Differential Analyzer, a massive analog computer.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which wireless security protocol is the latest standard mentioned for Wi-Fi?",
            options: ["WEP", "WPA", "WPA2", "WPA3"],
            answer: "WPA3",
            explanation: "WPA3 is the latest protocol mentioned, offering forward secrecy and better protection.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which scientist contributed to the geodetic model of the Earth that GPS is based on?",
            options: ["Gladys Mae West", "Katherine Johnson", "Grace Hopper", "Ada Lovelace"],
            answer: "Gladys Mae West",
            explanation: "Gladys Mae West's work on the geodetic model of Earth was the basis for GPS.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does 'RFID' stand for in the context of IoT?",
            options: ["Radio Frequency Identification", "Remote Frequency ID", "Radio Frequency Internet", "Remote File ID"],
            answer: "Radio Frequency Identification",
            explanation: "RFID is used in tags and smart cards to share data wirelessly.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computing innovation uses DNA molecules to process data?",
            options: ["Biological Computing", "DNA Computing", "Genetic Processing", "Organic Computing"],
            answer: "DNA Computing",
            explanation: "DNA computing uses the density of DNA storage and parallel processing capabilities.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the function of the 'Session Layer' in the OSI model?",
            options: ["Routes packets", "Manages and terminates connections", "Converts data formats", "Transmits bits"],
            answer: "Manages and terminates connections",
            explanation: "The Session layer establishes, manages, and terminates sessions between applications.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which operating system was developed by Google and the Open Handset Alliance?",
            options: ["iOS", "Windows Mobile", "Android", "Symbian"],
            answer: "Android",
            explanation: "Android is the mobile OS developed by Google.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // SECTION 3: IDENTIFICATION (30+ Items)
    identification: [
        {
            question: "What ancient device, similar to a counting board, uses beads with holes placed on specific rods?",
            correctAnswers: ["Abacus", "The Abacus"],
            explanation: "The abacus differs from the counting board by using beads on rods.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which German philosopher and mathematician developed the binary number system?",
            correctAnswers: ["Leibniz", "Wilhelm Gottfried Leibniz", "Gottfried Wilhelm Leibniz"],
            explanation: "Leibniz developed the binary system used in digital computers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What machine did Charles Babbage design to precisely compute polynomial functions?",
            correctAnswers: ["Difference Engine", "The Difference Engine"],
            explanation: "The Difference Engine was Babbage's machine for calculating mathematical tables.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Who is considered the 'first computer programmer' for her work on Babbage's Analytical Engine?",
            correctAnswers: ["Ada Lovelace", "Lovelace"],
            explanation: "Ada Lovelace is widely recognized as the first programmer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What 19th-century mathematician developed the symbolic logic that became the foundation for digital circuit design?",
            correctAnswers: ["George Boole", "Boole"],
            explanation: "Boole's symbolic logic (Boolean algebra) is the basis of modern computing logic.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which programming language did Grace Hopper help develop for business purposes in 1959?",
            correctAnswers: ["COBOL", "Common Business-oriented Language"],
            explanation: "COBOL was developed by Hopper for standardized business computing.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term refers to the delivery of computing services over the Internet, often described as a 'utility'?",
            correctAnswers: ["Cloud Computing", "The Cloud"],
            explanation: "Cloud computing delivers services (storage, processing) over the internet on-demand.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What technology allows physical objects to connect and share data over the Internet?",
            correctAnswers: ["IoT", "Internet of Things"],
            explanation: "IoT connects physical objects (things) to the internet.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What was the main electronic component used in First Generation computers?",
            correctAnswers: ["Vacuum Tube", "Vacuum Tubes"],
            explanation: "Vacuum tubes were the bulky components of 1st gen computers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What device invented by Jack Kilby characterizes the Third Generation of computers?",
            correctAnswers: ["Integrated Circuit", "IC"],
            explanation: "The Integrated Circuit (IC) defined the 3rd generation.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What part of the CPU is responsible for mathematical operations like addition and subtraction?",
            correctAnswers: ["ALU", "Arithmetic-Logical Unit", "Arithmetic Logical Unit"],
            explanation: "The ALU performs arithmetic and logic operations.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What input device is used to type commands into a computer?",
            correctAnswers: ["Keyboard"],
            explanation: "The keyboard is a primary input unit.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Who invented the World Wide Web in 1989?",
            correctAnswers: ["Tim Berners-Lee", "Berners-Lee"],
            explanation: "Tim Berners-Lee invented the WWW at CERN.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What was the name of the first wide-area packet-switching network developed by ARPA?",
            correctAnswers: ["ARPANET"],
            explanation: "ARPANET was the precursor to the Internet.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which network topology uses a central hub or switch to which all devices connect?",
            correctAnswers: ["Star", "Star Topology"],
            explanation: "Star topology connects all nodes to a central point.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which layer of the OSI model handles physical addressing (MAC addresses)?",
            correctAnswers: ["Data Link", "Data Link Layer"],
            explanation: "The Data Link layer handles MAC addressing and error recovery.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What network device is used to connect a home network to an Internet Service Provider (ISP) via cable?",
            correctAnswers: ["Modem", "Cable Modem"],
            explanation: "A modem connects the local network to the ISP.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What security system monitors and controls incoming and outgoing network traffic based on security rules?",
            correctAnswers: ["Firewall"],
            explanation: "A firewall filters traffic to secure the network.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What does VPN stand for?",
            correctAnswers: ["Virtual Private Network"],
            explanation: "VPN stands for Virtual Private Network.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the term for the gap between people with internet access and those without?",
            correctAnswers: ["Digital Divide"],
            explanation: "Digital Divide is the gap in access.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What material is considered a potential successor to silicon in transistors due to its high conductivity?",
            correctAnswers: ["Graphene"],
            explanation: "Graphene is a one-atom-thick material for future transistors.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What unit of information does a quantum computer use?",
            correctAnswers: ["Qubit", "Quantum Bit"],
            explanation: "Qubits are the basic unit of quantum information.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What project allows users to donate computing power to help cure diseases like Alzheimer's?",
            correctAnswers: ["Folding@home"],
            explanation: "Folding@home is a distributed computing project.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What operating system is designed to run on scavenged electronics after a societal collapse?",
            correctAnswers: ["Collapse OS"],
            explanation: "Collapse OS is for post-apocalyptic computing.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which OSI layer interacts directly with software applications like email?",
            correctAnswers: ["Application", "Application Layer"],
            explanation: "The Application layer interacts with user software.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of network connects personal devices like headphones to a smartphone?",
            correctAnswers: ["PAN", "Personal Area Network"],
            explanation: "PAN covers the smallest area, for personal devices.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What device acts as a multiport repeater, broadcasting data to all connected devices?",
            correctAnswers: ["Hub"],
            explanation: "A hub broadcasts data to all ports.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Who developed the Differential Analyzer, a large-scale analog computer?",
            correctAnswers: ["Vannevar Bush", "Bush"],
            explanation: "Vannevar Bush created the Differential Analyzer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the observation that transistor density doubles every two years?",
            correctAnswers: ["Moore's Law"],
            explanation: "Moore's Law describes the exponential growth of computing power.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which African-American mathematician calculated the geodetic model of the Earth for GPS?",
            correctAnswers: ["Gladys Mae West", "Gladys West"],
            explanation: "Gladys West's work was foundational for GPS.",
            scoreValue: 2,
            type: "identification"
        }
    ]
};