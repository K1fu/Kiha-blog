const quizData = {
    // Fill-in-the-Blank questions (30 Items)
    // Score Value: 1 point per item
    fillInTheBlank: [
        {
            question: "Computer Networking links computers for shared ___ across the internet.",
            blankWord: "resources",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The smallest type of Area network that interconnects compatible personal devices is the ___.",
            blankWord: "Personal Area Network (PAN)",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ interconnects and shares computer resources in an establishment.",
            blankWord: "Local Area Network (LAN)",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A much larger network covering vast areas such as cities, provinces, and countries is called a ___.",
            blankWord: "Wide Area Network (WAN)",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The ___ is a bigger network consisting of LANs and MANs.",
            blankWord: "WAN",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "___ is the diagram or blueprint showing the structure of network devices and services.",
            blankWord: "Network Architecture",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The network architecture that brings users and devices together in campuses and branches is known as ___.",
            blankWord: "Access networks",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "___ link multiple servers with data and apps to make them easily accessible to users.",
            blankWord: "Networks for Data centers",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "In ___ Topology, a direct path exists from each end device to other end devices.",
            blankWord: "Mesh",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Wired networks are generally more secure and ___ than wireless networks.",
            blankWord: "stable",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Wireless networks are easier to install but are less secure and less stable, relying on ___.",
            blankWord: "radio waves",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ interconnects networking devices but risks the broadcast of data it receives to all devices connected to it.",
            blankWord: "Hub",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ initiates a direct connection from the sender to the destination.",
            blankWord: "Switch",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The wired device that uses a cable connection to create a broadband network connection is a ___.",
            blankWord: "Cable Modem",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ acts as a central connector for all wireless devices to communicate and connect to the internet.",
            blankWord: "Wireless Router",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "An ___ connects wireless-enabled devices to a wired network.",
            blankWord: "Access Point",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The protection of data, programs, and devices in a network is called ___.",
            blankWord: "Network Security",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The goal of network security is to protect from ___.",
            blankWord: "unauthorized access",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A social engineering technique that tricks people into clicking a link or providing personal information is called ___.",
            blankWord: "Phishing",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Malicious software that blocks users from accessing their files until a ransom is paid is called ___.",
            blankWord: "Ransomware",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ is a type of malware that can replicate itself without a host file and spreads across the network.",
            blankWord: "Worm",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ disguises itself as a useful program or app but contains malicious code.",
            blankWord: "Trojan Horse",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The network security measure that monitors and filters incoming and outgoing network traffic is a ___.",
            blankWord: "Firewall",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "A ___ encrypts a user’s internet traffic, making their online activities publicly hidden.",
            blankWord: "Virtual Private Network (VPN)",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "___ deals with the fundamental human rights of a person on the internet.",
            blankWord: "Internet Privacy",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Network downtime puts operations and transactions on hold, leading to ___.",
            blankWord: "Revenue Loss",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "The cost associated with repairing network equipment after a failure is called ___.",
            blankWord: "Maintenance cost",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "When employees remain stagnant during downtime, the consequence is ___.",
            blankWord: "Lesser Productivity",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Regular network failures can be interpreted as negligence, which leads to ___.",
            blankWord: "Damaged Reputation",
            scoreValue: 1,
            type: "fillInTheBlank"
        },
        {
            question: "Failure to meet agreed-upon outputs and deliverables on time due to network issues can result in ___.",
            blankWord: "Legal Repercussions",
            scoreValue: 1,
            type: "fillInTheBlank"
        }
    ],

    // Multiple Choice questions (40 Items)
    // Score Value: 1 point per item
    multipleChoice: [
        {
            question: "What is the primary purpose of Computer Networking?",
            options: [
                "To create unique digital content",
                "To link computers for shared resources across the internet",
                "To replace physical storage with cloud storage",
                "To allow access to proprietary software"
            ],
            answer: "To link computers for shared resources across the internet",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network category is defined as the smallest and interconnects personal devices?",
            options: ["LAN", "MAN", "PAN", "WAN"],
            answer: "PAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Local Area Network (LAN) is used to interconnect computer resources within a single:",
            options: ["City", "Country", "Establishment", "Continent"],
            answer: "Establishment",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Campus Area Network (CAN) covers multiple buildings in a:",
            options: ["Residential block", "Industrial park", "Campus environment", "Single home"],
            answer: "Campus environment",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network category is city-scale and covers multiple city buildings and traffic lights?",
            options: ["PAN", "MAN", "CAN", "WAN"],
            answer: "MAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of network covers vast areas such as cities, provinces, and countries?",
            options: ["LAN", "CAN", "MAN", "WAN"],
            answer: "WAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the blueprint that shows the structure of network devices and services called?",
            options: ["Network Topology", "Network Architecture", "Network Category", "Network Protocol"],
            answer: "Network Architecture",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The Access network architecture is designed to connect:",
            options: [
                "Multiple servers to each other",
                "End-user devices for communication",
                "Data centers to the core network",
                "Traffic lights to the city network"
            ],
            answer: "End-user devices for communication",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which architecture links multiple servers with data and apps to make them easily accessible to users?",
            options: [
                "Wide-Area networks (WANs)",
                "Networks for Data centers",
                "Access networks",
                "Local Area networks (LANs)"
            ],
            answer: "Networks for Data centers",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "In which network topology does a direct path exist from each end device to every other end device?",
            options: ["Bus Topology", "Star Topology", "Mesh Topology", "Ring Topology"],
            answer: "Mesh Topology",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which characteristic is a drawback of a Wired Network?",
            options: [
                "It is more secure",
                "It is labor intensive to install",
                "It uses radio waves for connection",
                "It is generally more stable"
            ],
            answer: "It is labor intensive to install",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The main advantage of a Wireless Network is its:",
            options: [
                "Stability and security",
                "Use of physical cables",
                "Ease of installation and flexibility",
                "Lower maintenance cost"
            ],
            answer: "Ease of installation and flexibility",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which wired network device broadcasts data it receives to all connected devices?",
            options: ["Switch", "Hub", "Cable Modem", "Access Point"],
            answer: "Hub",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The primary function of a Switch is to:",
            options: [
                "Broadcast data to all connected devices",
                "Initiate a direct connection from sender to destination",
                "Convert analog signals to digital",
                "Act as a central connector for wireless devices"
            ],
            answer: "Initiate a direct connection from sender to destination",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Cable Modem is used to create what kind of network connection?",
            options: ["Narrowband", "Dial-up", "Broadband", "Satellite"],
            answer: "Broadband",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which device acts as a central connector for all wireless devices and connects them to the internet?",
            options: ["Cable Modem", "Access Point", "Wireless Router", "Hub"],
            answer: "Wireless Router",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "An Access Point connects wireless-enabled devices to a:",
            options: ["Wired network", "WAN backbone", "Satellite uplink", "PAN device"],
            answer: "Wired network",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the goal of network security?",
            options: [
                "To ensure 100% network uptime",
                "To minimize maintenance costs",
                "To protect data, programs, and devices from unauthorized access",
                "To maximize data transmission speed"
            ],
            answer: "To protect data, programs, and devices from unauthorized access",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which component is NOT explicitly listed as a part of network security?",
            options: ["Hardware", "Software", "People", "Network Architecture"],
            answer: "Network Architecture",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which malicious software encrypts a user's files and demands payment to restore access?",
            options: ["Worm", "Trojan Horse", "Ransomware", "Virus"],
            answer: "Ransomware",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the social engineering technique used to trick users into providing personal information, often via email?",
            options: ["Phishing", "Hacking", "Spoofing", "DoS Attack"],
            answer: "Phishing",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The type of malware that can replicate itself without a host file is a:",
            options: ["Virus", "Worm", "Trojan Horse", "Spyware"],
            answer: "Worm",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A malicious program that disguises itself as a useful application is known as a:",
            options: ["Worm", "Trojan Horse", "Virus", "Rootkit"],
            answer: "Trojan Horse",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What security measure monitors and filters network traffic based on an established set of security rules?",
            options: ["Anti-Virus", "VPN", "Firewall", "Email Security"],
            answer: "Firewall",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A Virtual Private Network (VPN) primarily functions to:",
            options: [
                "Block malicious software installation",
                "Encrypt user's internet traffic",
                "Filter spam from emails",
                "Initiate direct connections between computers"
            ],
            answer: "Encrypt user's internet traffic",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Why is Email Security critical in network protection?",
            options: [
                "Emails are restricted to LAN environments",
                "Emails are always encrypted by default",
                "Emails allow scripts to be embedded inside the device, potentially compromising it",
                "Emails are the only way to send ransomware"
            ],
            answer: "Emails allow scripts to be embedded inside the device, potentially compromising it",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The fundamental human rights of a person on the internet are collectively referred to as:",
            options: ["Network Security", "Internet Privacy", "Data Protection Act", "Legal Repercussions"],
            answer: "Internet Privacy",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The consequence of network failure where operations and transactions are put on hold is:",
            options: [
                "Maintenance cost",
                "Revenue Loss",
                "Lesser productivity",
                "Damaged Reputation"
            ],
            answer: "Revenue Loss",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "To prevent 'Lesser Productivity' during sudden downtimes, what measure is advised?",
            options: [
                "Daily monitoring of cables",
                "Having a backup network and internet",
                "Reassuring clients of security",
                "Alerting all concerned parties immediately"
            ],
            answer: "Having a backup network and internet",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Regular network failures can lead to which consequence due to being interpreted as negligence?",
            options: [
                "Legal Repercussions",
                "Maintenance cost",
                "Damaged Reputation",
                "Revenue Loss"
            ],
            answer: "Damaged Reputation",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Failure to meet agreed-upon outputs and deliverables on time due to network issues can result in:",
            options: [
                "Lesser productivity",
                "Legal Repercussions",
                "Damaged Reputation",
                "Maintenance cost"
            ],
            answer: "Legal Repercussions",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which action is recommended to prevent Legal Repercussions during a failure?",
            options: [
                "Reassure partners of internet security",
                "Maintain a system to prevent recurrence",
                "Alert every concerned party as soon as the failure happens",
                "Immediately repair network equipment"
            ],
            answer: "Alert every concerned party as soon as the failure happens",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which type of network is known for interconnecting computers and sharing resources in a localized establishment?",
            options: ["PAN", "LAN", "MAN", "WAN"],
            answer: "LAN",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "WANs are typically used for which type of program or service connection?",
            options: [
                "Local printer sharing",
                "Personal device synchronization",
                "Connecting users to remote programs/services (e.g., hospital EMRs)",
                "Interconnecting servers in a single data center"
            ],
            answer: "Connecting users to remote programs/services (e.g., hospital EMRs)",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which of the following operations is NOT listed as a function requiring networking?",
            options: ["Web browsing", "Sending and retrieving emails", "Sharing files and images", "Creating new software"],
            answer: "Creating new software",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "The primary cost associated with network failure is immediately categorized as:",
            options: ["Revenue Loss", "Maintenance cost", "Legal Repercussions", "Lesser productivity"],
            answer: "Maintenance cost",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "Which network device risks broadcasting data to all connected devices?",
            options: ["Switch", "Router", "Hub", "Modem"],
            answer: "Hub",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "A firewall is essential for network security because it:",
            options: [
                "Encrypts data transmission",
                "Filters incoming and outgoing network traffic",
                "Blocks all outgoing connections",
                "Automatically removes all malware"
            ],
            answer: "Filters incoming and outgoing network traffic",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What is the key advantage of a Wired Network over a Wireless Network?",
            options: ["Mobility", "Ease of installation", "Less cabling", "More security and stability"],
            answer: "More security and stability",
            scoreValue: 1,
            type: "multipleChoice"
        },
        {
            question: "What can be done daily to prevent sudden company downtime?",
            options: [
                "Implement a new VPN",
                "Daily monitoring of cables and network devices",
                "Only use wireless connections",
                "Install new anti-malware software"
            ],
            answer: "Daily monitoring of cables and network devices",
            scoreValue: 1,
            type: "multipleChoice"
        }
    ],

    // Identification questions (30 Items)
    // Score Value: 1 point per item
    identification: [
        {
            question: "What term describes the smallest type of Area network that interconnects compatible personal devices?",
            correctAnswers: ["PAN", "Personal Area Network"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What type of network covers multiple city buildings and traffic lights, operating at a city-scale?",
            correctAnswers: ["MAN", "Metropolitan Area Network"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What network category covers vast areas like cities, provinces, and countries?",
            correctAnswers: ["WAN", "Wide Area Network"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the name for the diagram or blueprint showing the structure of network devices and services?",
            correctAnswers: ["Network Architecture"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "Which network architecture type brings users and devices together in campuses and branches?",
            correctAnswers: ["Access networks"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "The network architecture that links multiple servers with data and apps to make them easily accessible is called Networks for ___.",
            correctAnswers: ["Data centers", "Data Centres"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What topology has a direct path existing from each end device to every other end device in the network?",
            correctAnswers: ["Mesh Topology", "Mesh"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What type of network relies on physical cables for connections and is known for being more secure and stable?",
            correctAnswers: ["Wired Network", "Wired"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the device that interconnects networking devices but risks broadcasting data to all connected devices?",
            correctAnswers: ["Hub"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What wired network device initiates a direct connection from the sender to the destination?",
            correctAnswers: ["Switch"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What device uses a cable connection to create a broadband network connection?",
            correctAnswers: ["Cable Modem"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the wireless device that acts as a central connector for all wireless devices and connects to the internet?",
            correctAnswers: ["Wireless Router", "Router"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What wireless device connects wireless-enabled devices to a wired network?",
            correctAnswers: ["Access Point"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the general term for the protection of data, programs, and devices in a network?",
            correctAnswers: ["Network Security"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "The goal of network security is to protect from ___ access.",
            correctAnswers: ["unauthorized"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the term for all software designed to cause damage to a device?",
            correctAnswers: ["Malware"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What type of malicious software blocks user access to files until a payment is made?",
            correctAnswers: ["Ransomware"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What security threat floods a network or server with traffic to overwhelm it?",
            correctAnswers: ["Denial of Service (DoS) attack", "DoS attack"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What social engineering technique tricks people into clicking a malicious link or providing information?",
            correctAnswers: ["Phishing"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What type of malware can replicate itself without requiring a host file?",
            correctAnswers: ["Worm"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What type of malware disguises itself as a useful program or app?",
            correctAnswers: ["Trojan Horse"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What network security measure monitors and filters incoming and outgoing network traffic?",
            correctAnswers: ["Firewall"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What security measure encrypts a user's internet traffic, making their online activities publicly hidden?",
            correctAnswers: ["Virtual Private Network (VPN)", "VPN"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What is the term for the fundamental human rights of a person on the internet?",
            correctAnswers: ["Internet Privacy"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What consequence of network failure occurs when operations and transactions are put on hold?",
            correctAnswers: ["Revenue Loss"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What consequence involves the cost associated with repairing network equipment?",
            correctAnswers: ["Maintenance cost"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What consequence results from employees remaining stagnant because tasks rely heavily on the internet?",
            correctAnswers: ["Lesser productivity"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What negative outcome arises from regular network failures being interpreted as negligence?",
            correctAnswers: ["Damaged Reputation"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "What consequence is tied to the failure to meet agreed-upon outputs and deliverables on time?",
            correctAnswers: ["Legal Repercussions"],
            scoreValue: 1,
            type: "identification"
        },
        {
            question: "Which network category is an enterprise network covering multiple buildings in a campus environment?",
            correctAnswers: ["CAN", "Campus Area Network"],
            scoreValue: 1,
            type: "identification"
        }
    ],

    // True/False questions (20 Items)
    // Score Value: 1 point per item
    trueFalse: [
        {
            question: "Networking requires computers to share resources for operations like web browsing and downloading music.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Personal Area Network (PAN) is the biggest type of Area network.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Metropolitan Area Network (MAN) is considered city-scale.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Wide Area Network (WAN) is a smaller network consisting of PANs and LANs.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Network Architecture is the blueprint of how network devices interconnect.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Networks for Data centers architecture primarily deals with connecting end-user devices.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Mesh Topology is characterized by a direct path from each device to all other devices.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Wired networks are generally less labor intensive to install than wireless networks.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Hub is preferred over a Switch because it guarantees a direct connection between the sender and destination.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Cable Modem is a wireless device used to connect wireless-enabled devices to a wired network.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "An Access Point acts as the central connector for all wireless devices to communicate with one another and connect to the internet.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The main goal of network security is to ensure a stable and fast connection.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Ransomware is a malicious software that replicates itself without a host file.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Virus can be attached to an email, which can compromise the device upon clicking.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "A Firewall encrypts a user’s internet traffic.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Using a backup network and internet is advised to mitigate Lesser Productivity during sudden downtimes.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "Daily monitoring of cables and network devices helps prevent Legal Repercussions.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The consequence of Damaged Reputation arises when operations and transactions are put on hold.",
            answer: false,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The three components of network security are Hardware, Software, and People.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        },
        {
            question: "The best way to prevent Legal Repercussions is to alert every concerned party as soon as a failure happens.",
            answer: true,
            scoreValue: 1,
            type: "trueFalse"
        }
    ]
};
