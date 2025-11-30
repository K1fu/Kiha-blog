const quizData = {
    // Multiple Choice questions (80 questions)
    multipleChoice: [
        {
            question: "What is Computing defined as, according to the document?",
            options: [
                "The process of building computers and mobile devices.",
                "Any activity that utilizes computers to manage, process, and communicate critical information.",
                "The design and implementation of the Internet and World Wide Web.",
                "The mathematical study of algorithms and data structures."
            ],
            answer: "Any activity that utilizes computers to manage, process, and communicate critical information.",
            explanation: "The document defines Computing as any activity that utilizes computers to manage, process, and communicate critical information that is an integral part of modern industrial technology.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which ancient civilization thrived in Mesopotamia (Iraq) from about 2000 BC to 500 BC and contributed early mathematical texts?",
            options: [
                "The Egyptians",
                "The Greeks",
                "The Babylonians",
                "The Romans"
            ],
            answer: "The Babylonians",
            explanation: "The Babylonians thrived in Mesopotamia (Iraq) and their clay cuneiform tables contained mathematical texts, including basic arithmetic operations, cubes, and square roots.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What did the Babylonians use for their numerical system symbols?",
            options: [
                "Zero and one (binary system)",
                "One, five, and ten",
                "Two symbols (1 and 10)",
                "Twenty symbols based on base-20"
            ],
            answer: "Two symbols (1 and 10)",
            explanation: "The Babylonians used only two symbols (1 and 10) to symbolize numbers, which were then combined to form all other numbers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the purpose of the Counting Boards used by the Babylonians?",
            options: [
                "To write cuneiform texts.",
                "To assist with counting and simple calculations.",
                "To predict astronomical events.",
                "To measure land."
            ],
            answer: "To assist with counting and simple calculations.",
            explanation: "Counting boards existed in the Babylonian civilization to assist with counting and simple calculations, similar to an abacus.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term is used to describe the Babylonian system for symbolizing numbers?",
            options: [
                "Decimal system",
                "Positional numeral system",
                "Roman numeral system",
                "Base-2 system"
            ],
            answer: "Positional numeral system",
            explanation: "The Babylonians are attributed with the invention of the positional numeral system, where the value of a digit depends on its position.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which ancient counting tool is believed to precede the Babylonian counting boards?",
            options: [
                "Quipu",
                "Abacus",
                "Napier's Bones",
                "Slide Rule"
            ],
            answer: "Abacus",
            explanation: "The counting board, similar to an abacus, is believed to be preceded by the abacus.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The first mechanical calculator, the Pascaline, was invented by which individual?",
            options: [
                "Charles Babbage",
                "Gottfried Wilhelm Leibniz",
                "Blaise Pascal",
                "John Napier"
            ],
            answer: "Blaise Pascal",
            explanation: "Blaise Pascal invented the Pascaline, which is considered the first mechanical calculator.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When was the Pascaline invented?",
            options: [
                "1542",
                "1642",
                "1742",
                "1842"
            ],
            answer: "1642",
            explanation: "Blaise Pascal invented the Pascaline in 1642.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which two operations could the Pascaline perform?",
            options: [
                "Multiplication and division",
                "Addition and subtraction",
                "Square roots and cubes",
                "Logarithms and trigonometry"
            ],
            answer: "Addition and subtraction",
            explanation: "The Pascaline was designed to perform additions and subtractions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the name of the calculating machine developed by Gottfried Wilhelm Leibniz in 1672?",
            options: [
                "Difference Engine",
                "Stepped Reckoner",
                "Analytical Engine",
                "Arithmometer"
            ],
            answer: "Stepped Reckoner",
            explanation: "The Stepped Reckoner was a calculating machine developed by Gottfried Wilhelm Leibniz in 1672.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What operations could the Stepped Reckoner perform that the Pascaline could not?",
            options: [
                "Addition and subtraction",
                "Only subtraction",
                "Multiplication and division",
                "Logarithms"
            ],
            answer: "Multiplication and division",
            explanation: "The Stepped Reckoner could perform addition, subtraction, multiplication, and division, unlike the Pascaline which only performed addition and subtraction.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who is credited with being the 'Father of the Computer'?",
            options: [
                "Alan Turing",
                "John von Neumann",
                "Charles Babbage",
                "Konrad Zuse"
            ],
            answer: "Charles Babbage",
            explanation: "Charles Babbage is credited as the 'Father of the Computer' for his design of the Difference Engine and the Analytical Engine.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the purpose of Charles Babbage's Difference Engine?",
            options: [
                "To perform complex division.",
                "To calculate and tabulate polynomial functions.",
                "To process logical operations.",
                "To generate random numbers."
            ],
            answer: "To calculate and tabulate polynomial functions.",
            explanation: "The Difference Engine was designed to automatically calculate and tabulate polynomial functions, avoiding human errors in mathematical tables.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the significance of Charles Babbage's Analytical Engine?",
            options: [
                "It was the first commercially successful calculator.",
                "It was the first machine to use electricity.",
                "It was the first general-purpose mechanical computer design.",
                "It was the first machine to use the binary system."
            ],
            answer: "It was the first general-purpose mechanical computer design.",
            explanation: "The Analytical Engine was Babbage's design for a general-purpose mechanical computer, which included an Arithmetic Logic Unit (ALU), memory, and programmable control.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Who is considered the 'First Computer Programmer' for writing the first algorithm intended to be processed by the Analytical Engine?",
            options: [
                "Grace Hopper",
                "Ada Lovelace",
                "Herman Hollerith",
                "Mary Kenneth Keller"
            ],
            answer: "Ada Lovelace",
            explanation: "Ada Lovelace wrote the first algorithm intended to be processed by the Analytical Engine and is widely regarded as the 'First Computer Programmer'.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What technology did Herman Hollerith invent to process data for the 1890 US Census?",
            options: [
                "Integrated Circuits",
                "Punch Cards",
                "Magnetic Tape",
                "Vacuum Tubes"
            ],
            answer: "Punch Cards",
            explanation: "Herman Hollerith invented a machine that utilized punch cards to quickly tabulate data for the 1890 US Census.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Herman Hollerith founded a company that eventually became which modern-day technology giant?",
            options: [
                "Microsoft",
                "Apple",
                "Hewlett-Packard (HP)",
                "International Business Machines (IBM)"
            ],
            answer: "International Business Machines (IBM)",
            explanation: "Hollerith's Tabulating Machine Company eventually merged and transformed into International Business Machines (IBM).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following describes the function of a relay in early computing?",
            options: [
                "It stored data as magnetic pulses.",
                "It was a mechanical switch that could be controlled by electricity.",
                "It displayed the output on a screen.",
                "It provided power to the computer."
            ],
            answer: "It was a mechanical switch that could be controlled by electricity.",
            explanation: "A relay is a mechanical switch that can be controlled by electricity, used in early computers to perform calculations.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computer, built by Konrad Zuse in 1941, is often considered the first functional, program-controlled computer?",
            options: [
                "Colossus",
                "Z3",
                "ENIAC",
                "Harvard Mark I"
            ],
            answer: "Z3",
            explanation: "Konrad Zuse's Z3, completed in 1941, is considered the first functional, program-controlled computer.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computer, built at Harvard University in 1944, was based on Charles Babbage's design and used relays for its operation?",
            options: [
                "Harvard Mark I (IBM Automatic Sequence Controlled Calculator - ASCC)",
                "ENIAC",
                "EDSAC",
                "UNIVAC"
            ],
            answer: "Harvard Mark I (IBM Automatic Sequence Controlled Calculator - ASCC)",
            explanation: "The Harvard Mark I (or IBM Automatic Sequence Controlled Calculator - ASCC), completed in 1944, was an electro-mechanical computer based on Babbage's work and utilized relays.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What were Vacuum Tubes primarily used for in the First Generation of computers?",
            options: [
                "Permanent storage of programs.",
                "To control the temperature of the machine.",
                "As electronic switches and amplifiers.",
                "To display output data."
            ],
            answer: "As electronic switches and amplifiers.",
            explanation: "Vacuum tubes served as the primary electronic switching components and amplifiers in First Generation computers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which characteristic was NOT typical of First Generation computers (1940s-1950s)?",
            options: [
                "Large size and high power consumption.",
                "Used magnetic drum for memory.",
                "Programming done through machine language.",
                "Used integrated circuits for processing."
            ],
            answer: "Used integrated circuits for processing.",
            explanation: "First Generation computers used Vacuum Tubes, not integrated circuits (which came in the Third Generation).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What does ENIAC stand for?",
            options: [
                "Electronic Numerical Integrator and Calculator",
                "Electrical Numerical Input and Automation Computer",
                "Electronic Navigation Integrated Analytical Computer",
                "Early Non-programmable Integrated Analog Calculator"
            ],
            answer: "Electronic Numerical Integrator and Calculator",
            explanation: "ENIAC stands for Electronic Numerical Integrator and Calculator.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "When was the ENIAC completed, and by whom?",
            options: [
                "1941, Konrad Zuse",
                "1944, Howard Aiken",
                "1946, John W. Mauchly and J. Presper Eckert",
                "1951, John von Neumann"
            ],
            answer: "1946, John W. Mauchly and J. Presper Eckert",
            explanation: "The ENIAC was completed in 1946 by John W. Mauchly and J. Presper Eckert.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which First Generation computer was the first commercially available computer and was used for census data processing?",
            options: [
                "ENIAC",
                "UNIVAC I",
                "EDSAC",
                "EDVAC"
            ],
            answer: "UNIVAC I",
            explanation: "The UNIVAC I (Universal Automatic Computer I) was the first commercially available computer, used for the 1950 US Census.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What critical architectural concept, developed by John von Neumann, did the EDVAC and subsequent computers implement?",
            options: [
                "Parallel Processing",
                "The Stored-Program Concept",
                "Time-Sharing",
                "Virtual Memory"
            ],
            answer: "The Stored-Program Concept",
            explanation: "John von Neumann's Stored-Program Concept, implemented in EDVAC, allowed the program instructions and data to be stored in the same memory.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What technology replaced vacuum tubes as the primary electronic component in Second Generation computers (1950s-1960s)?",
            options: [
                "Integrated Circuits",
                "Transistors",
                "Microprocessors",
                "LSI Chips"
            ],
            answer: "Transistors",
            explanation: "Transistors, smaller, faster, and more reliable than vacuum tubes, defined the Second Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A key development in the Second Generation was the shift from machine language to what type of programming languages?",
            options: [
                "Scripting languages (e.g., Python)",
                "Object-Oriented languages (e.g., C++)",
                "High-level languages (e.g., FORTRAN, COBOL)",
                "Web markup languages (e.g., HTML)"
            ],
            answer: "High-level languages (e.g., FORTRAN, COBOL)",
            explanation: "The Second Generation saw the rise of high-level programming languages like FORTRAN and COBOL, making programming easier.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the defining component of Third Generation computers (1960s-1970s)?",
            options: [
                "Vacuum Tubes",
                "Transistors",
                "Integrated Circuits (ICs)",
                "Very Large-Scale Integration (VLSI)"
            ],
            answer: "Integrated Circuits (ICs)",
            explanation: "The invention and use of Integrated Circuits, combining multiple transistors on a single chip, defined the Third Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was a major benefit of using Integrated Circuits in the Third Generation, as opposed to transistors?",
            options: [
                "Higher cost of manufacturing.",
                "Significantly increased size and power consumption.",
                "Increased processing speed, reliability, and smaller size.",
                "The ability to run only one program at a time."
            ],
            answer: "Increased processing speed, reliability, and smaller size.",
            explanation: "ICs allowed for smaller, faster, and more reliable computers due to the miniaturization of components.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The introduction of operating systems that enabled simultaneous running of multiple programs (multiprogramming) occurred in which computer generation?",
            options: [
                "First Generation",
                "Second Generation",
                "Third Generation",
                "Fourth Generation"
            ],
            answer: "Third Generation",
            explanation: "Multiprogramming and the initial development of operating systems capable of managing it were characteristic of the Third Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the key technological innovation that characterizes the Fourth Generation of computers (1970s-Present)?",
            options: [
                "The invention of the Transistor.",
                "Very Large-Scale Integration (VLSI) and the Microprocessor.",
                "The use of Vacuum Tubes.",
                "The development of the Abacus."
            ],
            answer: "Very Large-Scale Integration (VLSI) and the Microprocessor.",
            explanation: "The Fourth Generation is defined by VLSI technology, which led to the creation of the microprocessor (CPU on a single chip).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which company created the first commercially available microprocessor, the Intel 4004?",
            options: [
                "IBM",
                "Apple",
                "Intel",
                "Microsoft"
            ],
            answer: "Intel",
            explanation: "Intel introduced the Intel 4004, the first commercially available microprocessor, in 1971.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The shift towards personal computers (PCs) and distributed networking became widespread during which computer generation?",
            options: [
                "Second Generation",
                "Third Generation",
                "Fourth Generation",
                "Fifth Generation"
            ],
            answer: "Fourth Generation",
            explanation: "The microprocessor enabled the development of smaller, cheaper computers, leading to the rise of personal computers and the wide use of networking in the Fourth Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT a defining characteristic of the Fifth Generation (Present and Beyond)?",
            options: [
                "Artificial Intelligence (AI)",
                "Parallel Processing",
                "Quantum Computing",
                "Programming primarily in machine language"
            ],
            answer: "Programming primarily in machine language",
            explanation: "Fifth Generation focuses on AI, natural language processing, and quantum computing, moving far beyond the simple machine language of the First Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which field of computing focuses on developing systems that can learn, reason, and solve problems like humans?",
            options: [
                "Database Management",
                "Network Security",
                "Artificial Intelligence (AI)",
                "Operating Systems Development"
            ],
            answer: "Artificial Intelligence (AI)",
            explanation: "Artificial Intelligence is the defining goal of the Fifth Generation, aiming for systems with human-like intelligence.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a computer that provides services (resources and data) to other computers (clients) over a network?",
            options: [
                "Client",
                "Workstation",
                "Server",
                "Mainframe"
            ],
            answer: "Server",
            explanation: "A Server is a powerful computer that provides various services (data, resources, etc.) to client computers on a network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What category of computer is a powerful system typically used by a large organization for complex calculations and data processing?",
            options: [
                "Microcomputer",
                "Mainframe Computer",
                "Supercomputer",
                "Embedded Computer"
            ],
            answer: "Mainframe Computer",
            explanation: "Mainframe computers are large, expensive, and powerful systems used by corporations for large-scale data processing.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of computer is designed to perform extremely complex calculations at very high speeds, often used for scientific research and weather forecasting?",
            options: [
                "Minicomputer",
                "Personal Computer (PC)",
                "Supercomputer",
                "Tablet"
            ],
            answer: "Supercomputer",
            explanation: "Supercomputers are the fastest and most powerful computers, specialized for tasks requiring immense computational power.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What are Microcomputers commonly known as?",
            options: [
                "Servers",
                "Mainframes",
                "Personal Computers (PCs)",
                "Embedded systems"
            ],
            answer: "Personal Computers (PCs)",
            explanation: "Microcomputers are the smallest and least expensive category, commonly referred to as Personal Computers (PCs).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of an Embedded Computer?",
            options: [
                "To serve websites.",
                "To manage a large corporate network.",
                "To perform a specific, dedicated function within a larger mechanical or electronic system.",
                "To run complex scientific simulations."
            ],
            answer: "To perform a specific, dedicated function within a larger mechanical or electronic system.",
            explanation: "Embedded computers are tiny computers integrated into devices like cars, home appliances, and medical equipment to control specific functions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which component is the 'brain' of the computer, responsible for executing instructions and processing data?",
            options: [
                "Random Access Memory (RAM)",
                "Central Processing Unit (CPU)",
                "Graphics Card (GPU)",
                "Hard Disk Drive (HDD)"
            ],
            answer: "Central Processing Unit (CPU)",
            explanation: "The Central Processing Unit (CPU) is the main processing chip that executes instructions and performs calculations.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following describes the function of the Arithmetic Logic Unit (ALU) within the CPU?",
            options: [
                "It fetches instructions from memory.",
                "It performs arithmetic and logical operations.",
                "It manages the flow of data between components.",
                "It stores temporary data."
            ],
            answer: "It performs arithmetic and logical operations.",
            explanation: "The ALU is the part of the CPU responsible for carrying out arithmetic (addition, subtraction, etc.) and logic (AND, OR, NOT) operations.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the Control Unit's primary role within the CPU?",
            options: [
                "Storing permanent data.",
                "Executing arithmetic operations.",
                "Coordinating the fetching, decoding, and execution of instructions.",
                "Generating graphical output."
            ],
            answer: "Coordinating the fetching, decoding, and execution of instructions.",
            explanation: "The Control Unit directs and coordinates the sequence of operations within the CPU and other computer components.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the function of the Register within the CPU?",
            options: [
                "To connect the CPU to the Internet.",
                "To provide high-speed temporary storage for data and instructions currently being processed.",
                "To permanently store the operating system.",
                "To cool the CPU."
            ],
            answer: "To provide high-speed temporary storage for data and instructions currently being processed.",
            explanation: "Registers are small, high-speed storage locations within the CPU that temporarily hold data and instructions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which component acts as the main circuit board connecting all components of the computer system?",
            options: [
                "CPU",
                "RAM",
                "Motherboard",
                "Power Supply Unit (PSU)"
            ],
            answer: "Motherboard",
            explanation: "The Motherboard is the main circuit board that facilitates communication between the CPU, memory, and all other peripherals.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What are the physical communication pathways that connect components on the motherboard?",
            options: [
                "Ports",
                "Cables",
                "Buses",
                "Slots"
            ],
            answer: "Buses",
            explanation: "Buses are the electrical pathways (sets of wires) that transfer data between the CPU, memory, and I/O devices.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What type of memory is volatile, meaning data is lost when the computer is turned off, and is used for currently running programs and data?",
            options: [
                "Read-Only Memory (ROM)",
                "Flash Memory",
                "Random Access Memory (RAM)",
                "Cache Memory"
            ],
            answer: "Random Access Memory (RAM)",
            explanation: "RAM is the primary working memory; it is volatile and stores data temporarily while the computer is on.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What type of memory is non-volatile and stores the BIOS/UEFI firmware needed to boot the computer?",
            options: [
                "Random Access Memory (RAM)",
                "Cache Memory",
                "Solid State Drive (SSD)",
                "Read-Only Memory (ROM)"
            ],
            answer: "Read-Only Memory (ROM)",
            explanation: "ROM is non-volatile and stores essential boot instructions (firmware) that are not lost when power is off.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of storage device uses spinning magnetic platters to store data?",
            options: [
                "Solid State Drive (SSD)",
                "Flash Drive",
                "Hard Disk Drive (HDD)",
                "Blu-ray Disc"
            ],
            answer: "Hard Disk Drive (HDD)",
            explanation: "Hard Disk Drives (HDD) use magnetic media on rotating platters for data storage.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the key advantage of Solid State Drives (SSDs) over Hard Disk Drives (HDDs)?",
            options: [
                "They are significantly cheaper to manufacture.",
                "They are non-volatile and magnetic-based.",
                "They are faster, more durable, and consume less power.",
                "They have a much larger storage capacity."
            ],
            answer: "They are faster, more durable, and consume less power.",
            explanation: "SSDs use flash memory, providing faster access times, greater durability, and lower power consumption compared to magnetic HDDs.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is considered an Input Device?",
            options: [
                "Monitor",
                "Printer",
                "Keyboard",
                "Speakers"
            ],
            answer: "Keyboard",
            explanation: "Input devices are used to enter data or commands into the computer, and the Keyboard is a primary example.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is considered an Output Device?",
            options: [
                "Scanner",
                "Mouse",
                "Microphone",
                "Monitor"
            ],
            answer: "Monitor",
            explanation: "Output devices display or produce processed data from the computer, and the Monitor is a primary example.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which category of software is responsible for managing the computer hardware and providing a platform for application software to run?",
            options: [
                "Utility Software",
                "Application Software",
                "System Software",
                "Programming Software"
            ],
            answer: "System Software",
            explanation: "System software (like the Operating System) manages computer hardware and provides a user interface and environment for applications.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the most crucial piece of System Software?",
            options: [
                "Antivirus program",
                "Device Driver",
                "Operating System (OS)",
                "Web browser"
            ],
            answer: "Operating System (OS)",
            explanation: "The Operating System is the core system software that manages all hardware and software resources.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Software designed to help users perform specific tasks, such as creating documents, spreadsheets, or editing photos, is known as what?",
            options: [
                "Firmware",
                "System Software",
                "Application Software",
                "Utility Software"
            ],
            answer: "Application Software",
            explanation: "Application software is designed for end-users to perform specific functions or tasks.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is NOT an example of Application Software?",
            options: [
                "Word Processor (e.g., MS Word)",
                "Spreadsheet program (e.g., MS Excel)",
                "Operating System (e.g., Windows)",
                "Presentation Software (e.g., PowerPoint)"
            ],
            answer: "Operating System (e.g., Windows)",
            explanation: "An Operating System is System Software, not Application Software.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the fundamental unit of information in computing, represented by a single binary digit (0 or 1)?",
            options: [
                "Byte",
                "Nibble",
                "Word",
                "Bit"
            ],
            answer: "Bit",
            explanation: "A bit (binary digit) is the smallest unit of data, representing a 0 or a 1.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "How many bits are in one Byte?",
            options: [
                "4",
                "8",
                "16",
                "32"
            ],
            answer: "8",
            explanation: "A byte is a collection of 8 bits, typically the smallest addressable unit of memory.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which unit of storage is approximately one thousand bytes?",
            options: [
                "Megabyte (MB)",
                "Kilobyte (KB)",
                "Gigabyte (GB)",
                "Terabyte (TB)"
            ],
            answer: "Kilobyte (KB)",
            explanation: "A Kilobyte (KB) is $2^{10}$ bytes, or 1024 bytes, which is approximately one thousand bytes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which unit of storage is approximately one million bytes?",
            options: [
                "Gigabyte (GB)",
                "Terabyte (TB)",
                "Megabyte (MB)",
                "Petabyte (PB)"
            ],
            answer: "Megabyte (MB)",
            explanation: "A Megabyte (MB) is $2^{20}$ bytes, or 1,048,576 bytes, which is approximately one million bytes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which unit of storage is $2^{30}$ bytes?",
            options: [
                "Terabyte (TB)",
                "Petabyte (PB)",
                "Gigabyte (GB)",
                "Exabyte (EB)"
            ],
            answer: "Gigabyte (GB)",
            explanation: "A Gigabyte (GB) is $2^{30}$ bytes, or 1,073,741,824 bytes, which is approximately one billion bytes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the next unit of storage size after Terabyte (TB)?",
            options: [
                "Exabyte (EB)",
                "Zettabyte (ZB)",
                "Petabyte (PB)",
                "Yottabyte (YB)"
            ],
            answer: "Petabyte (PB)",
            explanation: "The standard hierarchy is KB, MB, GB, TB, PB, EB, ZB, YB.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a major component of the CPU's processing cycle?",
            options: [
                "Printing",
                "Formatting",
                "Executing",
                "Archiving"
            ],
            answer: "Executing",
            explanation: "The CPU cycle involves fetching, decoding, and executing instructions.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the process called where the Control Unit retrieves an instruction from memory?",
            options: [
                "Decoding",
                "Fetching",
                "Executing",
                "Writing back"
            ],
            answer: "Fetching",
            explanation: "Fetching is the stage where the instruction is retrieved from memory.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the purpose of the Decoding step in the CPU processing cycle?",
            options: [
                "To carry out the instruction.",
                "To determine what the instruction means.",
                "To store the result in memory.",
                "To get the next instruction's address."
            ],
            answer: "To determine what the instruction means.",
            explanation: "Decoding involves the Control Unit interpreting the instruction to determine what operation to perform.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of the Arithmetic Logic Unit (ALU) during the Execute phase of the CPU cycle?",
            options: [
                "Interpreting the instruction.",
                "Performing the required calculation or logical test.",
                "Sending data to the hard drive.",
                "Refreshing the display."
            ],
            answer: "Performing the required calculation or logical test.",
            explanation: "During execution, the ALU performs the calculation or logic operation specified by the decoded instruction.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the context of the Internet, what is a protocol?",
            options: [
                "A specific type of computer hardware.",
                "A set of rules for communication between devices.",
                "A physical cable connecting networks.",
                "A software application for browsing the web."
            ],
            answer: "A set of rules for communication between devices.",
            explanation: "A protocol is a standardized set of rules that governs communication and data exchange between computers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the purpose of the Internet Protocol (IP) address?",
            options: [
                "To ensure a webpage is secure (HTTPS).",
                "To identify and locate a device on a network.",
                "To encrypt data transmission.",
                "To translate domain names into web pages."
            ],
            answer: "To identify and locate a device on a network.",
            explanation: "The IP address is a unique numerical label assigned to every device connected to a computer network that uses the Internet Protocol for communication.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a global network of interconnected computer networks that communicate using TCP/IP?",
            options: [
                "World Wide Web (WWW)",
                "Intranet",
                "The Internet",
                "Local Area Network (LAN)"
            ],
            answer: "The Internet",
            explanation: "The Internet is the vast, global system of interconnected computer networks.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the World Wide Web (WWW)?",
            options: [
                "The physical infrastructure of the Internet.",
                "A system of interconnected documents and resources accessed via the Internet.",
                "A specific protocol for network data transfer.",
                "A form of digital currency."
            ],
            answer: "A system of interconnected documents and resources accessed via the Internet.",
            explanation: "The WWW is a collection of interconnected web pages and other resources accessed via the Internet, using HTTP/HTTPS.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which protocol is primarily used for transferring hypertext documents (web pages) over the Internet?",
            options: [
                "FTP",
                "SMTP",
                "HTTP/HTTPS",
                "TCP"
            ],
            answer: "HTTP/HTTPS",
            explanation: "The HyperText Transfer Protocol (Secure) is the foundation of data communication for the World Wide Web.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the difference between HTTP and HTTPS?",
            options: [
                "HTTP is faster than HTTPS.",
                "HTTPS uses encryption to secure communication, while HTTP does not.",
                "HTTP is used for text, and HTTPS is used for images.",
                "HTTP is used on the Internet, and HTTPS is used on Intranets."
            ],
            answer: "HTTPS uses encryption to secure communication, while HTTP does not.",
            explanation: "The 'S' in HTTPS stands for Secure, indicating that communication is encrypted using Transport Layer Security (TLS) or Secure Sockets Layer (SSL).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a URL (Uniform Resource Locator)?",
            options: [
                "A company that provides Internet access.",
                "The address used to locate a web resource (like a web page) on the Internet.",
                "The software used to view web pages.",
                "The core programming language of the Internet."
            ],
            answer: "The address used to locate a web resource (like a web page) on the Internet.",
            explanation: "A URL is the mechanism used by web browsers to retrieve any published resource on the World Wide Web.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary function of a Domain Name System (DNS)?",
            options: [
                "To provide security against viruses.",
                "To manage email accounts.",
                "To translate human-readable domain names (like example.com) into IP addresses.",
                "To compress data before transmission."
            ],
            answer: "To translate human-readable domain names (like example.com) into IP addresses.",
            explanation: "DNS is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the term for a small network of interconnected devices within a single location, such as an office building or school?",
            options: [
                "Wide Area Network (WAN)",
                "Local Area Network (LAN)",
                "Metropolitan Area Network (MAN)",
                "Global Area Network (GAN)"
            ],
            answer: "Local Area Network (LAN)",
            explanation: "A LAN connects devices in a small, localized area.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a network that covers a large geographical area, such as a state or country, connecting multiple smaller networks?",
            options: [
                "Personal Area Network (PAN)",
                "Wide Area Network (WAN)",
                "Local Area Network (LAN)",
                "Storage Area Network (SAN)"
            ],
            answer: "Wide Area Network (WAN)",
            explanation: "A WAN connects networks over a vast distance.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network topology connects all devices to a single central cable?",
            options: [
                "Star Topology",
                "Ring Topology",
                "Mesh Topology",
                "Bus Topology"
            ],
            answer: "Bus Topology",
            explanation: "In a Bus Topology, all nodes are connected to a single main cable (the bus).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network topology connects all devices to a central hub or switch?",
            options: [
                "Star Topology",
                "Ring Topology",
                "Bus Topology",
                "Tree Topology"
            ],
            answer: "Star Topology",
            explanation: "In a Star Topology, every device is connected directly to a central networking device.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of network connection uses radio waves to transmit data wirelessly?",
            options: [
                "Fiber Optic",
                "Ethernet",
                "Coaxial Cable",
                "Wi-Fi"
            ],
            answer: "Wi-Fi",
            explanation: "Wi-Fi uses radio frequency (RF) to provide wireless access to a network.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the name for the technology that uses light to transmit data through thin glass or plastic strands?",
            options: [
                "Twisted-Pair Cable",
                "Coaxial Cable",
                "Fiber Optic Cable",
                "Wireless Satellite"
            ],
            answer: "Fiber Optic Cable",
            explanation: "Fiber optic cables transmit data as pulses of light, offering very high bandwidth and speed.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the primary characteristic of Cloud Computing?",
            options: [
                "Using only local servers for data storage.",
                "Delivering computing services (servers, storage, databases, networking, software, analytics) over the Internet.",
                "Using only supercomputers for processing tasks.",
                "Installing all applications directly onto a personal computer."
            ],
            answer: "Delivering computing services (servers, storage, databases, networking, software, analytics) over the Internet.",
            explanation: "Cloud Computing involves accessing shared computing resources and services 'over the cloud' (the Internet).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What type of Cloud service provides users with raw computing infrastructure, such as virtual machines, storage, and networks?",
            options: [
                "Software as a Service (SaaS)",
                "Platform as a Service (PaaS)",
                "Infrastructure as a Service (IaaS)",
                "Function as a Service (FaaS)"
            ],
            answer: "Infrastructure as a Service (IaaS)",
            explanation: "IaaS gives users the fundamental building blocks of cloud IT, like servers and storage.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Cloud service model allows users to develop, run, and manage applications without the complexity of managing the infrastructure?",
            options: [
                "Infrastructure as a Service (IaaS)",
                "Platform as a Service (PaaS)",
                "Software as a Service (SaaS)",
                "Recovery as a Service (RaaS)"
            ],
            answer: "Platform as a Service (PaaS)",
            explanation: "PaaS provides a complete environment (platform) for developing and deploying applications.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Cloud service model provides ready-to-use applications over the Internet, such as email services or CRM software?",
            options: [
                "Infrastructure as a Service (IaaS)",
                "Platform as a Service (PaaS)",
                "Software as a Service (SaaS)",
                "Anything as a Service (XaaS)"
            ],
            answer: "Software as a Service (SaaS)",
            explanation: "SaaS provides users with access to application software over the Internet on demand.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the context of technology, what is Digital Inequality?",
            options: [
                "The difference between two types of computers.",
                "A phenomenon where individuals or groups lack access to or skills for using information and communication technologies.",
                "The gap in download speeds between urban and rural areas.",
                "The difference between licensed and pirated software."
            ],
            answer: "A phenomenon where individuals or groups lack access to or skills for using information and communication technologies.",
            explanation: "Digital Inequality refers to the unequal access, use, and impact of ICTs based on various factors.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is another term often used synonymously with Digital Inequality, specifically referring to the gap between those who have and those who do not have access to digital technology?",
            options: [
                "The Digital Revolution",
                "The Digital Divide",
                "Digital Transformation",
                "Digital Literacy"
            ],
            answer: "The Digital Divide",
            explanation: "The Digital Divide specifically describes the gap between people with access to and knowledge of digital technology and those without.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What condition is defined as having the information technology capacity for full participation in society, democracy, and the economy?",
            options: [
                "Digital Competence",
                "Digital Transformation",
                "Digital Equity",
                "Digital Literacy"
            ],
            answer: "Digital Equity",
            explanation: "Digital Equity is the condition wherein individuals and communities have the information technology capacity for full participation in society, democracy, and the economy.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is necessary to ensure that individuals and communities, including the least privileged, have access to information and communication technologies (ICTs)?",
            options: [
                "Digital Ethics",
                "Digital Inclusion",
                "Digital Economics",
                "Digital Governance"
            ],
            answer: "Digital Inclusion",
            explanation: "Digital Inclusion ensures that individuals and communities have access to and can use ICTs effectively.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "According to the document, what is significant for civic and cultural duties, employment, and access to essential services, enabled by IT capacity?",
            options: [
                "Digital Poverty",
                "Digital Divide",
                "Digital Equity",
                "Digital Economy"
            ],
            answer: "Digital Equity",
            explanation: "Digital Equity is significant for civic and cultural duties, employment, and access to essential services.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following advancements is cited as having led to significant benefits to society and improvements in the standard of living?",
            options: [
                "The steam engine",
                "Computers, mobile devices, and the Internet",
                "The printing press",
                "Nuclear power"
            ],
            answer: "Computers, mobile devices, and the Internet",
            explanation: "The document explicitly mentions computers, mobile devices, the Internet, the World Wide Web (WWW), and social media as advancements leading to societal benefits.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the collective term for computers, mobile devices, the Internet, and the World Wide Web (WWW) mentioned in the document?",
            options: [
                "First Generation Technology",
                "Information Architecture",
                "Technological Change and Innovation",
                "Industrial Revolution Tools"
            ],
            answer: "Technological Change and Innovation",
            explanation: "The document states, 'The rise of technological change and innovation over the last decades has brought immense significance to society.'",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the name of the ancient Babylonian writing system that appears on the clay tables with mathematical texts?",
            options: [
                "Hieroglyphics",
                "Alphabet",
                "Cuneiform",
                "Pictograms"
            ],
            answer: "Cuneiform",
            explanation: "Clay cuneiform tables with mathematical texts were found and deciphered from the Babylonian civilization.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the Babylonian numerical system, what was the principle by which the value of a digit depends on its position?",
            options: [
                "Fractional system",
                "Positional numeral system",
                "Non-positional system",
                "Binary system"
            ],
            answer: "Positional numeral system",
            explanation: "The Babylonians are credited with the invention of the positional numeral system.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What material was the Babylonian counting board usually made of?",
            options: [
                "Metal plates",
                "Clay, wood, or stone",
                "Papyrus scrolls",
                "Animal hides"
            ],
            answer: "Clay, wood, or stone",
            explanation: "The counting board was usually made of clay, wood, or stone, with lines or marks etched on them.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the core mechanism of the Pascaline that allowed it to perform calculations?",
            options: [
                "A system of rods and sliding parts.",
                "Gears that turned with each input.",
                "A series of electronic relays.",
                "Pneumatic tubes for number transfer."
            ],
            answer: "Gears that turned with each input.",
            explanation: "The Pascaline, a mechanical calculator, used a system of gears that turned to represent numbers and perform addition/subtraction.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Stepped Reckoner used a specialized cylinder for its mechanism. What was this component called?",
            options: [
                "The Analytical Drum",
                "The Stepped Wheel (Leibniz wheel)",
                "The Control Rod",
                "The Mechanical Lever"
            ],
            answer: "The Stepped Wheel (Leibniz wheel)",
            explanation: "The Stepped Reckoner used the 'stepped wheel' (or Leibniz wheel) mechanism to perform multiplication and division through repeated addition/subtraction.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was a major limitation of early mechanical calculators like the Pascaline and Stepped Reckoner?",
            options: [
                "They could only use binary numbers.",
                "They could not perform basic arithmetic.",
                "They required constant manual intervention.",
                "They were extremely cheap and widely available."
            ],
            answer: "They required constant manual intervention.",
            explanation: "These were not automatic or programmable; they required manual setting of inputs and operation for each calculation step.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Charles Babbage's Difference Engine was designed to solve what kind of functions automatically?",
            options: [
                "Trigonometric functions",
                "Polynomial functions",
                "Exponential functions",
                "Logarithmic functions"
            ],
            answer: "Polynomial functions",
            explanation: "The Difference Engine was specifically designed to calculate and tabulate polynomial functions automatically.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What component of the Analytical Engine is comparable to the computer's memory unit?",
            options: [
                "The Mill",
                "The Store",
                "The Arithmetic Logic Unit (ALU)",
                "The Input Device"
            ],
            answer: "The Store",
            explanation: "In Babbage's design, the 'Store' was intended to hold data and intermediate results, functioning as the memory unit.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What component of the Analytical Engine is comparable to the computer's CPU or processing unit?",
            options: [
                "The Store",
                "The Printer",
                "The Mill",
                "The Control Unit"
            ],
            answer: "The Mill",
            explanation: "The 'Mill' was the part of the Analytical Engine designed to perform the actual calculations, similar to a modern CPU/ALU.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The punch cards used by Herman Hollerith for the census were primarily used to represent what?",
            options: [
                "Program instructions only.",
                "Mathematical constants only.",
                "Demographic data.",
                "Security keys."
            ],
            answer: "Demographic data.",
            explanation: "Hollerith's system recorded census data (demographics) by punching holes in cards, which could then be automatically read and tabulated.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the significance of the Z3's use of the binary system?",
            options: [
                "It was the first computer to use a decimal system.",
                "It simplified the machine's complexity and improved reliability.",
                "It allowed it to use vacuum tubes.",
                "It made the computer much larger."
            ],
            answer: "It simplified the machine's complexity and improved reliability.",
            explanation: "Konrad Zuse's Z3 was a significant milestone because it used the binary number system for all its operations, which is the foundation of modern computing.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What was the primary input method for the Harvard Mark I (ASCC)?",
            options: [
                "Punch cards and paper tape",
                "Magnetic disks",
                "A keyboard and mouse",
                "Voice commands"
            ],
            answer: "Punch cards and paper tape",
            explanation: "Like Babbage's design, the Mark I used sequential electromechanical switches, receiving instructions and data primarily from punch cards and paper tape.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What major problem did the Stored-Program Concept solve for early computers like ENIAC?",
            options: [
                "The lack of high-level languages.",
                "The need for massive re-wiring every time a new program needed to be run.",
                "The slow speed of the vacuum tubes.",
                "The inability to perform arithmetic operations."
            ],
            answer: "The need for massive re-wiring every time a new program needed to be run.",
            explanation: "The Stored-Program Concept allowed a program to be changed simply by loading new instructions into memory, avoiding the physically cumbersome process of re-plugging cables (re-wiring) needed on machines like the ENIAC.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which computer is considered the first electronic computer to fully implement the Stored-Program Concept?",
            options: [
                "ENIAC",
                "UNIVAC I",
                "EDSAC",
                "Harvard Mark I"
            ],
            answer: "EDSAC",
            explanation: "The EDSAC (Electronic Delay Storage Automatic Calculator), built in the UK, is generally credited as the first practical electronic stored-program computer.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following describes the memory component used in Second Generation computers?",
            options: [
                "Magnetic Drum",
                "Core Memory (Magnetic Core)",
                "Semiconductor Memory (RAM)",
                "Flash Storage"
            ],
            answer: "Core Memory (Magnetic Core)",
            explanation: "Magnetic core memory was the dominant form of random-access main memory in Second and Third Generation computers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the Second Generation, what invention in programming made instructions more human-readable and less machine-specific?",
            options: [
                "Machine language",
                "Assembly language",
                "Natural language processing",
                "Binary code"
            ],
            answer: "Assembly language",
            explanation: "Assembly language, an intermediate step between machine code and high-level languages, used mnemonics for instructions, making it easier to program than pure machine language.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What technology primarily replaced Magnetic Core Memory as the main memory in Third Generation computers?",
            options: [
                "Magnetic Tape",
                "Optical Discs",
                "Semiconductor Memory (RAM chips)",
                "Punch Cards"
            ],
            answer: "Semiconductor Memory (RAM chips)",
            explanation: "RAM chips based on integrated circuits began replacing magnetic core memory in the Third Generation.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The concept of 'Time-Sharing' was a major software advancement in the Third Generation. What does it allow?",
            options: [
                "Multiple users to share the cost of one computer.",
                "One CPU to run multiple programs almost simultaneously.",
                "Connecting computers over the Internet.",
                "Writing programs in a common language."
            ],
            answer: "One CPU to run multiple programs almost simultaneously.",
            explanation: "Time-sharing allows the CPU time to be divided among multiple users or programs, giving the illusion of simultaneous execution (multiprogramming).",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What term describes the integration of thousands to millions of transistors onto a single silicon chip in the Fourth Generation?",
            options: [
                "Small-Scale Integration (SSI)",
                "Medium-Scale Integration (MSI)",
                "Very Large-Scale Integration (VLSI)",
                "Ultra-Scale Integration (USI)"
            ],
            answer: "Very Large-Scale Integration (VLSI)",
            explanation: "VLSI is the process of creating integrated circuits by combining thousands of transistor-based circuits onto a single chip, leading to the microprocessor.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which major technological breakthrough enabled the development of the Personal Computer (PC)?",
            options: [
                "The Vacuum Tube",
                "The Transistor",
                "The Microprocessor",
                "The Magnetic Drum"
            ],
            answer: "The Microprocessor",
            explanation: "The invention of the compact and powerful microprocessor in the Fourth Generation made PCs economically and physically feasible.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is a major research area of the Fifth Generation focused on developing computer interfaces that allow users to interact using everyday human language?",
            options: [
                "Virtual Reality (VR)",
                "Natural Language Processing (NLP)",
                "High-Performance Computing (HPC)",
                "Database Queries"
            ],
            answer: "Natural Language Processing (NLP)",
            explanation: "NLP is a key goal of AI and the Fifth Generation, allowing computers to understand and generate human language.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which emerging computing paradigm focuses on using quantum phenomena (like superposition and entanglement) to perform calculations much faster than classical computers?",
            options: [
                "Parallel Computing",
                "Cloud Computing",
                "Quantum Computing",
                "Fog Computing"
            ],
            answer: "Quantum Computing",
            explanation: "Quantum Computing is a focus of the Fifth Generation, promising massive increases in computational power for certain problems.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A computer used by engineers for high-end graphic and complex data processing tasks in a client-server environment is typically referred to as a:",
            options: [
                "Minicomputer",
                "Workstation",
                "Laptop",
                "Supercomputer"
            ],
            answer: "Workstation",
            explanation: "Workstations are high-performance single-user computers designed for technical or scientific applications.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is an example of an Embedded Computer?",
            options: [
                "A corporate file server.",
                "A desktop Personal Computer.",
                "The computer chip inside a smart washing machine.",
                "A scientific Supercomputer."
            ],
            answer: "The computer chip inside a smart washing machine.",
            explanation: "Embedded computers are dedicated to specific functions within larger systems, like controlling a smart appliance.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the CPU, what is the role of the System Clock?",
            options: [
                "To tell the user the current time.",
                "To control the speed and synchronization of all computer operations.",
                "To store the BIOS settings.",
                "To cool the CPU."
            ],
            answer: "To control the speed and synchronization of all computer operations.",
            explanation: "The system clock generates regular pulses that synchronize all data transfer and control activities within the CPU and computer system.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which term describes the rate at which the CPU executes instructions, measured in Hertz (Hz)?",
            options: [
                "Bus Speed",
                "Clock Speed (or Frequency)",
                "Data Rate",
                "Cache Size"
            ],
            answer: "Clock Speed (or Frequency)",
            explanation: "Clock speed, measured in GHz (gigahertz) or MHz (megahertz), determines how many cycles the CPU completes per second.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the purpose of Cache Memory?",
            options: [
                "To store data permanently.",
                "To store files from the Internet.",
                "To speed up the retrieval of data and instructions between the CPU and main memory (RAM).",
                "To store the operating system."
            ],
            answer: "To speed up the retrieval of data and instructions between the CPU and main memory (RAM).",
            explanation: "Cache memory is a small, fast memory used by the CPU to temporarily hold frequently accessed data, bridging the speed gap between the CPU and RAM.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of Input Device converts physical documents or images into digital format?",
            options: [
                "Plotter",
                "Scanner",
                "Projector",
                "Touchpad"
            ],
            answer: "Scanner",
            explanation: "A scanner is an input device that captures images from physical media and converts them to digital data.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which Output Device creates large-scale, high-quality graphics and images, often used for architectural drawings or billboards?",
            options: [
                "3D Printer",
                "Inkjet Printer",
                "Laser Printer",
                "Plotter"
            ],
            answer: "Plotter",
            explanation: "A plotter is a specialized output device designed for printing vector graphics on large sheets of paper.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following is considered both an Input and Output (I/O) Device?",
            options: [
                "Monitor",
                "Mouse",
                "Touchscreen",
                "Speaker"
            ],
            answer: "Touchscreen",
            explanation: "A touchscreen allows input via touch and displays output, making it both an input and output device.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which unit of time is commonly used to measure the execution speed of a CPU instruction (in modern terms)?",
            options: [
                "Millisecond (ms)",
                "Microsecond (μs)",
                "Nanosecond (ns)",
                "Second (s)"
            ],
            answer: "Nanosecond (ns)",
            explanation: "CPU operations are typically measured in nanoseconds (one billionth of a second), reflecting modern clock speeds in the GHz range.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In the context of the Internet, what is the role of TCP (Transmission Control Protocol)?",
            options: [
                "To provide a unique address for a device.",
                "To encrypt data during transmission.",
                "To break data into packets and reassemble them correctly at the destination.",
                "To manage domain names."
            ],
            answer: "To break data into packets and reassemble them correctly at the destination.",
            explanation: "TCP provides reliable, ordered, and error-checked delivery of a stream of bytes between programs running on computers.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is an Intranet?",
            options: [
                "A global public network like the Internet.",
                "A private network accessible only to an organization's members, often using Internet protocols.",
                "A type of Wide Area Network (WAN).",
                "The hardware used for network security."
            ],
            answer: "A private network accessible only to an organization's members, often using Internet protocols.",
            explanation: "An Intranet is a private network using Internet technology for internal use within a company or organization.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is an Extranet?",
            options: [
                "A physical connection between two LANs.",
                "A private network that allows controlled access to an organization's Intranet by external partners, suppliers, or customers.",
                "A public Wi-Fi hotspot.",
                "A type of mobile device network."
            ],
            answer: "A private network that allows controlled access to an organization's Intranet by external partners, suppliers, or customers.",
            explanation: "An Extranet extends an Intranet to authorized external users for business purposes.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the main concern that Digital Equity and Digital Inclusion aim to resolve?",
            options: [
                "High electricity consumption by computers.",
                "The challenges of digital inequality and the digital divide.",
                "The lack of high-level programming languages.",
                "The reliance on physical media for data storage."
            ],
            answer: "The challenges of digital inequality and the digital divide.",
            explanation: "Digital Equity and Digital Inclusion are vital strategies to address and overcome the challenges of digital inequality and the digital divide.",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Why is it important for digital inclusion strategies to evolve rapidly?",
            options: [
                "To keep up with changing government regulations.",
                "Because they must adapt to the rapid development and changes in technology.",
                "To reduce the cost of computer hardware.",
                "To simplify the process of writing code."
            ],
            answer: "Because they must adapt to the rapid development and changes in technology.",
            explanation: "The document states that 'Digital inclusion strategies must evolve as rapidly as the development and changes in technology.'",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions (40 questions)
    identification: [
        {
            question: "What term describes any activity that utilizes computers to manage, process, and communicate critical information?",
            correctAnswers: ["Computing", "computing"],
            explanation: "Computing is defined as any activity that utilizes computers to manage, process, and communicate critical information.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "The Babylonians are attributed with the invention of what type of numerical system, where the value of a digit depends on its position?",
            correctAnswers: ["Positional numeral system", "positional numeral system"],
            explanation: "The Babylonians invented the positional numeral system.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What was the name of the first mechanical calculator invented by Blaise Pascal in 1642?",
            correctAnswers: ["Pascaline"],
            explanation: "The Pascaline was the first mechanical calculator, invented by Blaise Pascal.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What calculating machine, capable of multiplication and division, did Gottfried Wilhelm Leibniz develop in 1672?",
            correctAnswers: ["Stepped Reckoner"],
            explanation: "The Stepped Reckoner was Leibniz's machine that could perform all four basic arithmetic operations.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Who is known as the 'Father of the Computer' for his designs of the Difference Engine and Analytical Engine?",
            correctAnswers: ["Charles Babbage"],
            explanation: "Charles Babbage is universally credited as the 'Father of the Computer'.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Who is recognized as the 'First Computer Programmer' for writing the first algorithm intended for the Analytical Engine?",
            correctAnswers: ["Ada Lovelace"],
            explanation: "Ada Lovelace wrote the first algorithm intended for Babbage's Analytical Engine.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What electromechanical device was used by Herman Hollerith to process the data from the 1890 US Census?",
            correctAnswers: ["Punch cards", "punch cards", "Hollerith punch cards"],
            explanation: "Herman Hollerith used a system based on punch cards to tabulate census data.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of mechanical switch, controlled by electricity, was used in early computers like the Harvard Mark I?",
            correctAnswers: ["Relay", "relays"],
            explanation: "Relays are mechanical switches controlled by electricity, used in electro-mechanical computers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the first functional, program-controlled computer, built by Konrad Zuse in 1941?",
            correctAnswers: ["Z3"],
            explanation: "The Z3, built by Konrad Zuse, is widely considered the first functional program-controlled computer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What major electronic component characterized the First Generation of computers (1940s-1950s)?",
            correctAnswers: ["Vacuum Tubes", "vacuum tubes"],
            explanation: "The First Generation relied on vacuum tubes for electronic switching.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What First Generation computer, completed in 1946 by Mauchly and Eckert, stands for Electronic Numerical Integrator and Calculator?",
            correctAnswers: ["ENIAC"],
            explanation: "ENIAC was a massive First Generation electronic computer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What concept, developed by John von Neumann and implemented in EDVAC, allows program instructions and data to be stored in the same memory?",
            correctAnswers: ["Stored-Program Concept", "stored-program concept"],
            explanation: "The Stored-Program Concept is fundamental to modern computer architecture.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What new component replaced vacuum tubes in the Second Generation of computers (1950s-1960s)?",
            correctAnswers: ["Transistors", "transistor"],
            explanation: "Transistors were smaller, faster, and more reliable replacements for vacuum tubes.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What technology, combining multiple transistors on a single chip, defined the Third Generation of computers (1960s-1970s)?",
            correctAnswers: ["Integrated Circuits", "integrated circuits", "IC"],
            explanation: "Integrated Circuits defined the Third Generation, leading to smaller, faster, and more powerful computers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term describes the process of integrating thousands to millions of transistors onto a single silicon chip, leading to the microprocessor?",
            correctAnswers: ["Very Large-Scale Integration", "VLSI"],
            explanation: "VLSI is the technology that led to the development of the microprocessor in the Fourth Generation.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the name of the single-chip processor that characterizes the Fourth Generation (1970s-Present)?",
            correctAnswers: ["Microprocessor", "microprocessor"],
            explanation: "The microprocessor is the CPU on a single chip, the defining innovation of the Fourth Generation.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the main computing paradigm of the Fifth Generation (Present and Beyond)?",
            correctAnswers: ["Artificial Intelligence", "AI"],
            explanation: "Artificial Intelligence is the defining characteristic and focus of the Fifth Generation.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of computer is a powerful system used by large organizations for massive data processing and complex transaction management?",
            correctAnswers: ["Mainframe Computer", "mainframe"],
            explanation: "Mainframe computers are used for large-scale, high-volume computing tasks in major corporations.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the type of computer dedicated to high-speed, complex calculations, often used in scientific research and weather modeling?",
            correctAnswers: ["Supercomputer", "supercomputer"],
            explanation: "Supercomputers are the fastest and most powerful class of computers.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the common name for the smallest and least expensive category of computers, also known as Microcomputers?",
            correctAnswers: ["Personal Computer", "PC"],
            explanation: "Microcomputers are commonly referred to as Personal Computers (PCs).",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "Which component is known as the 'brain' of the computer, executing instructions and performing calculations?",
            correctAnswers: ["Central Processing Unit", "CPU"],
            explanation: "The CPU is the core processor that executes all instructions.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What part of the CPU performs all the arithmetic and logical operations?",
            correctAnswers: ["Arithmetic Logic Unit", "ALU"],
            explanation: "The ALU is responsible for calculation and logic testing.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What component of the CPU directs and coordinates the fetching, decoding, and execution of instructions?",
            correctAnswers: ["Control Unit", "control unit"],
            explanation: "The Control Unit manages the overall operation of the CPU.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What component serves as the main circuit board to which all other computer components are connected?",
            correctAnswers: ["Motherboard", "motherboard"],
            explanation: "The Motherboard is the central connection hub for the entire system.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What are the electrical pathways used to transfer data and control signals between components in a computer system?",
            correctAnswers: ["Buses", "bus"],
            explanation: "Buses are the communication pathways connecting hardware components.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of volatile memory is used for temporary storage of data and programs currently being used by the CPU?",
            correctAnswers: ["Random Access Memory", "RAM"],
            explanation: "RAM is the primary, temporary working memory of the computer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of non-volatile memory stores the essential startup instructions (firmware) for the computer?",
            correctAnswers: ["Read-Only Memory", "ROM"],
            explanation: "ROM stores the BIOS/UEFI firmware necessary to boot the system.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What type of permanent storage device uses spinning magnetic platters to store data?",
            correctAnswers: ["Hard Disk Drive", "HDD"],
            explanation: "HDDs are traditional storage devices using magnetic rotating disks.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What modern storage device uses flash memory chips instead of mechanical parts, resulting in faster access speeds?",
            correctAnswers: ["Solid State Drive", "SSD"],
            explanation: "SSDs are fast, durable, and non-volatile storage using flash memory.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of device is used to send data or commands into a computer system?",
            correctAnswers: ["Input Device", "input device"],
            explanation: "Input devices allow users to interact with and provide data to the computer.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of device displays or produces processed data or information from the computer system?",
            correctAnswers: ["Output Device", "output device"],
            explanation: "Output devices present the results of processing to the user.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of software is responsible for managing the computer hardware and providing a user interface?",
            correctAnswers: ["System Software", "system software"],
            explanation: "System software includes the Operating System and utilities.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the core system software that manages all computer hardware and software resources?",
            correctAnswers: ["Operating System", "OS"],
            explanation: "The Operating System is the most critical piece of system software.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What category of software is designed to help users perform specific tasks, such as word processing or photo editing?",
            correctAnswers: ["Application Software", "application software"],
            explanation: "Application software performs specialized, user-oriented tasks.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the fundamental unit of information in computing, represented by a single binary digit (0 or 1)?",
            correctAnswers: ["Bit"],
            explanation: "A Bit (binary digit) is the smallest unit of data.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What unit of data is composed of 8 bits?",
            correctAnswers: ["Byte"],
            explanation: "A Byte is the common unit of measurement for storage and memory capacity.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the set of rules that governs communication and data exchange between devices over a network?",
            correctAnswers: ["Protocol", "protocols"],
            explanation: "Protocols are essential for network communication.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What is the unique numerical label assigned to every device connected to a computer network that uses the Internet Protocol?",
            correctAnswers: ["IP address", "Internet Protocol address"],
            explanation: "The IP address is used for device identification and location.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What term describes the condition wherein individuals and communities have the information technology capacity for full participation in society, democracy, and the economy?",
            correctAnswers: ["Digital Equity", "digital equity"],
            explanation: "Digital Equity refers to the fairness in access and capacity to use information technology.",
            scoreValue: 2,
            type: "identification"
        },
        {
            question: "What strategy is necessary to ensure that individuals and communities, including the least privileged, have access to information and communication technologies (ICTs)?",
            correctAnswers: ["Digital Inclusion", "digital inclusion"],
            explanation: "Digital Inclusion focuses on providing access to ICTs for everyone.",
            scoreValue: 2,
            type: "identification"
        }
    ]
};