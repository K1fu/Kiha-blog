const quizData = {
    // SECTION 1: MULTIPLE CHOICE (Expanded to ~80 questions)
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
        {
            question: "Which Greek mathematician is credited with a theorem stating that if A, B, and C are points on a circle where AC is the diameter, then angle ABC is a right angle?",
            options: ["Pythagoras", "Thales", "Euclid", "Archimedes"],
            answer: "Thales",
            explanation: "Thales' theorem in Euclidean geometry is one of his best contributions to mathematics.",
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
            question: "Although Charles Babbage designed the Difference Engine, who actually built the first working model in 1853?",
            options: ["Ada Lovelace", "George and Edward Schuetz", "Gottfried Wilhelm Leibniz", "Vannevar Bush"],
            answer: "George and Edward Schuetz",
            explanation: "Swedish engineers George and Edward Schuetz built the first working Difference Engine in 1853 based on Babbage's design.",
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
            question: "Who published 'Mathematical Analysis of Logic' in 1847 and introduced the concept of 1 symbolizing the universe of thinkable objects?",
            options: ["Charles Babbage", "George Boole", "Alan Turing", "John von Neumann"],
            answer: "George Boole",
            explanation: "George Boole developed symbolic logic and Boolean algebra, essential for digital circuit design.",
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
        {
            question: "Who created a detailed geodetic model of the Earth that became the basis for the Global Positioning System (GPS)?",
            options: ["Katherine Johnson", "Gladys Mae West", "Grace Hopper", "Margaret Hamilton"],
            answer: "Gladys Mae West",
            explanation: "Gladys Mae West programmed the computer that calculated Earth's geoid to adequate precisions to enable GPS.",
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
        {
            question: "What is 'Fog Computing'?",
            options: ["Computing done entirely in the sky", "An expansion of cloud computing where servers are placed near end-users", "A weather forecasting supercomputer", "Computing done without the internet"],
            answer: "An expansion of cloud computing where servers are placed near end-users",
            explanation: "Fog computing places servers closer to the ground (end-users) compared to the remote 'cloud' to allow local data analytics.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which technology is considered the foundation of Artificial Intelligence?",
            options: ["Cloud Computing", "Big Data", "Internet of Things", "Virtualization"],
            answer: "Cloud Computing",
            explanation: "The text states that Cloud Computing is the foundation of AI, while IoT provides raw materials and Big Data is the fertilizer.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Evolution of Computers (Analog vs Digital) ---
        {
            question: "Which type of computer represents data using physical quantities like electric voltage?",
            options: ["Digital Computer", "Analog Computer", "Quantum Computer", "Mainframe"],
            answer: "Analog Computer",
            explanation: "Analog computers represent data by reflecting the properties of the data being modeled, often using physical quantities.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who developed the 'Differential Analyzer', the first large-scale general-purpose analog computer?",
            options: ["James Thomson", "Lord Kelvin", "Vannevar Bush", "Charles Babbage"],
            answer: "Vannevar Bush",
            explanation: "Vannevar Bush developed the Differential Analyzer, which weighed 100 tons and solved differential equations.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the main drawback of Analog computers compared to Digital ones?",
            options: ["They were too small", "Data was constantly subjected to noise corruption", "They could not perform addition", "They required no electricity"],
            answer: "Data was constantly subjected to noise corruption",
            explanation: "Analog data representation is compact but susceptible to noise corruption, unlike digital signals.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Evolution of Computers (Generations) ---
        {
            question: "Which technology was the primary component of First Generation computers (1940s-1950s)?",
            options: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"],
            answer: "Vacuum Tubes",
            explanation: "First-generation computers like ENIAC and UNIVAC I used thousands of bulky vacuum tubes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is an example of a First Generation computer?",
            options: ["IBM 701", "MacBook Air", "Intel 4004", "Raspberry Pi"],
            answer: "IBM 701",
            explanation: "The IBM 701 (1953) is listed as an example of a first-generation computer using vacuum tubes.",
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
        {
            question: "The invention of the Integrated Circuit (IC) by Jack Kilby marked the beginning of which computer generation?",
            options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            answer: "Third Generation",
            explanation: "The Third Generation is characterized by the use of Integrated Circuits, which combined many electronic circuits onto a small chip.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which generation of computers introduced the microprocessor, effectively putting a computer on a single chip?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Fourth",
            explanation: "The Fourth Generation is defined by the microprocessor (like the Intel 4004).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the world's first microprocessor, released in 1969?",
            options: ["Intel Core i7", "Intel P4004", "AMD Ryzen", "Motorola 68000"],
            answer: "Intel P4004",
            explanation: "The Intel P4004 was the world's first microprocessor, providing computer functions at a chip level.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Computer Components & OS ---
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
        {
            question: "Which of the following is considered a disadvantage of an Operating System?",
            options: ["Abstraction", "User-friendly interface", "Volatility", "Executable programs"],
            answer: "Volatility",
            explanation: "Volatility is a disadvantage because users may lose contents stored in the system if an issue occurs.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When was the first Android smartphone released?",
            options: ["2005", "2007", "2008", "2010"],
            answer: "2008",
            explanation: "The first Android smartphone was released in late 2008.",
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
        {
            question: "What was the URL of the first-ever website?",
            options: ["http://www.google.com", "http://info.cern.ch/hypertext/WWW/TheProject.html", "http://www.w3.org", "http://arpanet.gov"],
            answer: "http://info.cern.ch/hypertext/WWW/TheProject.html",
            explanation: "The first web page went live on August 6, 1991, at this CERN address.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which event refers to the period between 1995-2000 when investors heavily funded Internet-based startups?",
            options: ["The AI Winter", "The Dot-com Bubble", "The Crypto Boom", "The Industrial Revolution"],
            answer: "The Dot-com Bubble",
            explanation: "The dot-com bubble was a period of massive investment in Internet startups, many of which failed by 2001.",
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
            question: "What is a 'Campus Area Network' (CAN)?",
            options: ["A network for a single room", "An enterprise network covering multiple buildings in a campus environment", "A network connecting traffic lights in a city", "A global network"],
            answer: "An enterprise network covering multiple buildings in a campus environment",
            explanation: "CANs connect multiple buildings within a university or large organization campus.",
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
            question: "Which OSI layer provides the control functions required to start, manage, and end connections?",
            options: ["Session Layer", "Presentation Layer", "Network Layer", "Physical Layer"],
            answer: "Session Layer",
            explanation: "The Session layer establishes, manages, and terminates sessions to satisfy user requests.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which OSI layer is responsible for data compression and encryption?",
            options: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
            answer: "Presentation Layer",
            explanation: "The Presentation layer formats message codes, compression, and encryption.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network device connects multiple devices in a LAN but broadcasts data to *all* connected ports?",
            options: ["Switch", "Router", "Hub", "Firewall"],
            answer: "Hub",
            explanation: "A hub is a multiport repeater that broadcasts received data to all connected devices, unlike a switch.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In which network topology do all devices connect directly to a central switch or hub?",
            options: ["Bus Topology", "Star Topology", "Ring Topology", "Mesh Topology"],
            answer: "Star Topology",
            explanation: "In a Star topology, all nodes connect individually to a central connection point.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a major disadvantage of the 'Bus' topology?",
            options: ["It requires a central hub", "If the main cable breaks, the entire network fails", "It is too expensive", "It is difficult to install"],
            answer: "If the main cable breaks, the entire network fails",
            explanation: "Bus topology uses a single backbone cable; if it breaks, transmission stops for all devices.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which topology connects devices directly to each other, creating multiple paths for data?",
            options: ["Star", "Mesh", "Bus", "Token Ring"],
            answer: "Mesh",
            explanation: "Mesh topology features direct connections between devices, offering redundancy.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Security ---
        {
            question: "What is the primary function of a Firewall in network security?",
            options: ["To speed up internet connection", "To monitor and filter incoming and outgoing network traffic", "To store backup data", "To route data between local networks"],
            answer: "To monitor and filter incoming and outgoing network traffic",
            explanation: "A firewall acts as a barrier between a trusted internal network and untrusted external networks.",
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
        {
            question: "What does WPA3 stand for?",
            options: ["Wireless Privacy Action 3", "Wi-Fi Protected Access 3", "Wide Public Access 3", "Web Protection Algorithm 3"],
            answer: "Wi-Fi Protected Access 3",
            explanation: "WPA3 is the latest wireless network security certificate protocol.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of Intrusion Detection System (IDS) runs on individual hosts and takes snapshots of the file system?",
            options: ["Network IDS (NIDS)", "Host IDS (HIDS)", "Cloud IDS", "Hybrid IDS"],
            answer: "Host IDS (HIDS)",
            explanation: "HIDS runs on individual hosts and monitors file system modifications by comparing snapshots.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Future Computing ---
        {
            question: "What is Moore's Law?",
            options: ["The cost of computers halves every year.", "The number of transistors in an integrated circuit doubles approximately every two years.", "Internet speed doubles every decade.", "Data storage capacity increases linearly."],
            answer: "The number of transistors in an integrated circuit doubles approximately every two years.",
            explanation: "Gordon Moore observed in 1965 that transistor density doubles every two years.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which future computing technology uses 'qubits' that can represent multiple states simultaneously?",
            options: ["Optical Computing", "DNA Computing", "Quantum Computing", "Neuromorphic Computing"],
            answer: "Quantum Computing",
            explanation: "Quantum computing uses quantum bits (qubits) and subatomic particle properties.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which material is being researched for future transistors because it is a one-atom-thick sheet that is highly conductive?",
            options: ["Silicon", "Graphene", "Copper", "Fiberglass"],
            answer: "Graphene",
            explanation: "Graphene is a thin, one-atom-thick material that is more conductive than silicon.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the key advantage of DNA Computing?",
            options: ["It uses light for speed", "It can analyze all possible answers at once via parallel processing", "It uses neurons", "It is purely mechanical"],
            answer: "It can analyze all possible answers at once via parallel processing",
            explanation: "DNA computing uses the density of DNA storage and parallel processing to analyze many answers simultaneously.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which technology aims to create a computer that imitates the architecture of the human brain?",
            options: ["Quantum Computing", "Neuromorphic Technology", "Optical Computing", "Distributed Computing"],
            answer: "Neuromorphic Technology",
            explanation: "Neuromorphic technology mimics the neural architecture of the brain.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is 'Collapse OS'?",
            options: ["A virus that destroys OS", "An OS designed for scavenged electronics after a societal collapse", "The latest Windows update", "A cloud-based OS"],
            answer: "An OS designed for scavenged electronics after a societal collapse",
            explanation: "Collapse OS is an open-source OS designed to run on simple chips (like Z80) in a post-collapse world.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        // --- Challenges ---
        {
            question: "What term describes the gap between those who have access to the Internet and those who do not?",
            options: ["Digital Inequality", "Digital Divide", "Net Neutrality", "Data Breach"],
            answer: "Digital Divide",
            explanation: "The Digital Divide is the gap in access to technology and the Internet.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What distinguishes 'Digital Inequality' from the 'Digital Divide'?",
            options: ["They are exactly the same.", "Inequality refers to the speed of the internet.", "Inequality focuses on the discrepancy in skills and usage, not just physical access.", "Divide refers only to rich vs poor countries."],
            answer: "Inequality focuses on the discrepancy in skills and usage, not just physical access.",
            explanation: "Digital Inequality highlights differences in IT skills and usage (the 'how'), whereas Digital Divide focuses on the 'have vs have-nots'.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT an element of Digital Inequality?",
            options: ["Educational", "Infrastructural", "Usable Design", "Planetary"],
            answer: "Planetary",
            explanation: "The elements listed are Educational, Infrastructural, Social, Economical, and Usable Design.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is 'Digital Equity'?",
            options: ["Giving everyone a free laptop", "The condition where individuals have the IT capacity for full participation in society", "Equal internet speed for everyone", "Banning the internet"],
            answer: "The condition where individuals have the IT capacity for full participation in society",
            explanation: "Digital Equity ensures everyone has the capacity for full participation in society, democracy, and the economy.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which distributed computing project helps model protein molecules to cure diseases?",
            options: ["SETI@home", "Folding@home", "Bitcoin Mining", "GIMPS"],
            answer: "Folding@home",
            explanation: "Folding@home models protein molecules to discover cures for diseases like Alzheimer's and COVID-19.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is 'Optical Computing'?",
            options: ["Computing using glasses", "Using photons (light) to perform calculations", "Scanning documents", "Visualizing data"],
            answer: "Using photons (light) to perform calculations",
            explanation: "Optical computing uses photons and light-intensity levels to process data at the speed of light.",
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
            question: "Which wireless network device combines the functionality of a modem and a router?",
            options: ["Wi-Fi Modem", "Switch", "Hub", "Access Point"],
            answer: "Wi-Fi Modem",
            explanation: "A Wi-Fi modem combines modem and router functionality for convenient internet connectivity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a consequence of internet and network failure for a business?",
            options: ["Increased productivity", "Revenue Loss", "Better reputation", "Lower maintenance cost"],
            answer: "Revenue Loss",
            explanation: "Downtime puts operations on hold, leading to revenue loss and potential reputation damage.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What simple habit can protect you from phishing links?",
            options: ["Clicking every link", "Double-checking the URL before clicking", "Sharing passwords", "Using public Wi-Fi"],
            answer: "Double-checking the URL before clicking",
            explanation: "Phishing sites often use deceiving links; checking the URL helps verify authenticity.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is 'Multi-factor Authentication'?",
            options: ["Using two different passwords", "An added verification step besides a password (like a code sent to a phone)", "Logging in from two devices", "Sharing accounts"],
            answer: "An added verification step besides a password (like a code sent to a phone)",
            explanation: "MFA adds security by requiring a second form of verification.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of network connects personal devices like headphones to a smartphone?",
            options: ["LAN", "WAN", "PAN", "MAN"],
            answer: "PAN",
            explanation: "PAN (Personal Area Network) covers the smallest area for personal devices.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which OSI layer handles MAC addressing?",
            options: ["Physical", "Data Link", "Network", "Transport"],
            answer: "Data Link",
            explanation: "The Data Link layer handles physical addressing (MAC) and error recovery.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of a 'Switch'?",
            options: ["Broadcasts data to all ports", "Initiates a direct connection to the destination device", "Connects to the ISP", "Filters internet traffic"],
            answer: "Initiates a direct connection to the destination device",
            explanation: "Unlike a hub, a switch directs data only to the specific destination device, improving efficiency.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which generation of computers used Integrated Circuits?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Third",
            explanation: "The Third Generation is defined by the use of Integrated Circuits (ICs).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who proposed the idea for a global computer network in 1962?",
            options: ["Tim Berners-Lee", "Joseph Carl Robnett Licklider", "Leonard Kleinrock", "Vint Cerf"],
            answer: "Joseph Carl Robnett Licklider",
            explanation: "Licklider started the idea for a global computer network in 1962.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the first domain name registered in 1984?",
            options: ["google.com", "symbolics.com", "apple.com", "microsoft.com"],
            answer: "symbolics.com",
            explanation: "symbolics.com was the first domain registered in 1984.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which protocol allows sending emails without relying on the web?",
            options: ["HTTP", "HTML", "SMTP", "FTP"],
            answer: "SMTP",
            explanation: "SMTP (Simple Mail Transfer Protocol) is used for email and does not rely on the Web.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is 'RFID' used for in IoT?",
            options: ["Processing data", "Electronic tags and smart cards", "Cloud storage", "Virtual reality"],
            answer: "Electronic tags and smart cards",
            explanation: "Radio Frequency Identification (RFID) is used in tags to identify objects in an IoT network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the main function of the 'Input Unit'?",
            options: ["Process data", "Display results", "Take user commands and convert them to digital format", "Store data permanently"],
            answer: "Take user commands and convert them to digital format",
            explanation: "Input units (keyboard, mouse) accept user commands and send them to the CPU.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which ancient Greek contribution involves the theorem about points on a circle and diameter?",
            options: ["Pythagorean Theorem", "Thales' Theorem", "Euclidean Algorithm", "Archimedes Principle"],
            answer: "Thales' Theorem",
            explanation: "Thales' theorem states that a triangle inscribed in a semicircle is a right triangle.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What device was used by the Romans to assist with calculations due to the difficulty of their numeral system?",
            options: ["Calculator", "Abacus", "Difference Engine", "Slide Rule"],
            answer: "Abacus",
            explanation: "The Romans used the abacus to perform calculations because Roman numerals were difficult to manipulate mathematically.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who developed the 'Step Reckoner'?",
            options: ["Pascal", "Leibniz", "Babbage", "Boole"],
            answer: "Leibniz",
            explanation: "Gottfried Wilhelm Leibniz developed the Step Reckoner.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computer was developed in 1944 as part of the First Generation?",
            options: ["Colossus", "Macintosh", "IBM PC", "Altair"],
            answer: "Colossus",
            explanation: "Colossus (1944) is an example of a First Generation computer.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does ALU stand for?",
            options: ["Advanced Logic Unit", "Arithmetic-Logical Unit", "Automated Learning Unit", "Analog Linear Unit"],
            answer: "Arithmetic-Logical Unit",
            explanation: "ALU stands for Arithmetic-Logical Unit.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the smallest type of network mentioned?",
            options: ["LAN", "MAN", "PAN", "WAN"],
            answer: "PAN",
            explanation: "Personal Area Network (PAN) is the smallest.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which topology typically uses a token passing protocol?",
            options: ["Bus", "Star", "Token Ring", "Mesh"],
            answer: "Token Ring",
            explanation: "Token Ring topology uses a token to control access to the network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the main risk of using a Hub?",
            options: ["It is too fast", "It broadcasts data to all devices, risking privacy and traffic", "It disconnects frequently", "It cannot connect to the internet"],
            answer: "It broadcasts data to all devices, risking privacy and traffic",
            explanation: "Hubs broadcast data to all ports, which is less secure and efficient than switches.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which future tech might use 'nanotubes'?",
            options: ["Graphene-based transistors", "Silicon chips", "Vacuum tubes", "Relays"],
            answer: "Graphene-based transistors",
            explanation: "Graphene can be rolled into nanotubes for faster electron movement.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which distributed computing project allows quintillion calculations per second?",
            options: ["Folding@home", "Google Cloud", "AWS", "Azure"],
            answer: "Folding@home",
            explanation: "The text highlights Folding@home's collective power.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a 'human computer'?",
            options: ["A robot", "A person who performs calculations manually", "A cyborg", "A smart device"],
            answer: "A person who performs calculations manually",
            explanation: "Before electronic computers, 'computer' was a job title for people doing calculations.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which organization proposed Fog Computing?",
            options: ["Google", "Cisco", "IBM", "Apple"],
            answer: "Cisco",
            explanation: "Fog Computing was proposed by Cisco.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which OS has the highest market share in personal computers?",
            options: ["macOS", "Linux", "Microsoft Windows", "ChromeOS"],
            answer: "Microsoft Windows",
            explanation: "Microsoft Windows dominates the PC market with over 90% share.",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // SECTION 2: IDENTIFICATION (Expanded to ~40 questions)
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
        },
        {
            question: "Who was the Greek mathematician known for a theorem about right angles in a circle?",
            correctAnswers: ["Thales"],
            explanation: "Thales' theorem is a significant contribution to Geometry.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What technology decouples software from hardware to create virtual machines?",
            correctAnswers: ["Virtualization"],
            explanation: "Virtualization allows running multiple OS on one machine.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What network topology is characterized by a single backbone cable?",
            correctAnswers: ["Bus", "Bus Topology"],
            explanation: "Bus topology uses a single cable to connect all devices.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What CPU microprocessor chip was the first to be released in 1969?",
            correctAnswers: ["Intel 4004", "Intel P4004", "4004"],
            explanation: "The Intel 4004 was the first microprocessor.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the component of the CPU that directs the flow of data?",
            correctAnswers: ["Control Unit", "CU"],
            explanation: "The Control Unit manages CPU operations.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What security protocol for Wi-Fi offers forward secrecy?",
            correctAnswers: ["WPA3"],
            explanation: "WPA3 is the modern standard for Wi-Fi security.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term describes the discrepancy in digital skills and usage?",
            correctAnswers: ["Digital Inequality"],
            explanation: "Digital Inequality focuses on the skill gap.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the writing surface used by Egyptians made from a plant?",
            correctAnswers: ["Papyrus"],
            explanation: "Papyrus was used for writing in ancient Egypt.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What does HTML stand for?",
            correctAnswers: ["Hypertext Markup Language"],
            explanation: "HTML is the standard language for documents designed to be displayed in a web browser.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What does DNS stand for?",
            correctAnswers: ["Domain Name System"],
            explanation: "DNS translates domain names to IP addresses.",
            scoreValue: 2,
            type: "identification"
        }
    ]
};