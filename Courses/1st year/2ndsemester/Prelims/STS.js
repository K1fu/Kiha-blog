const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "What is defined as 'the systematic study of the natural world through observation and experimentation'?",
        o: ["Technology", "Society", "Science", "Ethics"],
        a: 2
      },
      {
        type: "mc",
        q: "What is 'the application of scientific knowledge to create tools and processes that improve life'?",
        o: ["Science", "Technology", "Innovation", "Research"],
        a: 1
      },
      {
        type: "mc",
        q: "Which interdisciplinary field studies how scientific and technological advances affect society and how social factors influence these developments?",
        o: ["Applied Physics", "STS", "Social Science", "Environmental Science"],
        a: 1
      },
      {
        type: "mc",
        q: "Which instruments 'enhance our understanding of the universe and life'?",
        o: ["Compass and Protractor", "Microscopes and telescopes", "Stethoscopes and thermometers", "Scales and rulers"],
        a: 1
      },
      {
        type: "mc",
        q: "According to the sources, what drives scientific research and technological innovation?",
        o: ["Religious mandates", "Society’s needs, values, and economy", "Individual curiosity only", "Alien influence"],
        a: 1
      },
      {
        type: "mc",
        q: "Who significantly funds research through grants, subsidies, and policies?",
        o: ["Advocacy groups", "Individual citizens", "Government", "Religious institutions"],
        a: 2
      },
      {
        type: "mc",
        q: "What invention c. 4000 BCE 'revolutionized transportation and trade'?",
        o: ["The Steam Engine", "The Wheel", "The Balangay", "The Airplane"],
        a: 1
      },
      {
        type: "mc",
        q: "What enabled 'record-keeping and knowledge transfer' in ancient civilizations?",
        o: ["The Printing Press", "Cuneiform and Hieroglyphics", "Mechanical Clocks", "The Internet"],
        a: 1
      },
      {
        type: "mc",
        q: "Which structures were 'engineered to carry water to cities, baths, and fountains'?",
        o: ["Banaue Rice Terraces", "Roman Aqueducts", "Steam Engines", "Pyramids"],
        a: 1
      },
      {
        type: "mc",
        q: "Whose algebra helped establish the foundation for modern mathematics?",
        o: ["Isaac Newton", "Al-Khwarizmi", "Galileo Galilei", "Francis Bacon"],
        a: 1
      },
      {
        type: "mc",
        q: "Where were mechanical clocks installed in 13th-century Europe?",
        o: ["Public markets", "Royal palaces", "Church towers", "University libraries"],
        a: 2
      },
      {
        type: "mc",
        q: "Who invented the printing press c. 1440 CE?",
        o: ["James Watt", "Thomas Edison", "Johannes Gutenberg", "Alexander Fleming"],
        a: 2
      },
      {
        type: "mc",
        q: "Which thinker introduced a systematic approach focused on 'observation, and experimentation'?",
        o: ["Isaac Newton", "Francis Bacon", "Galileo Galilei", "James Watson"],
        a: 1
      },
      {
        type: "mc",
        q: "What groundbreaking discovery did Galileo Galilei make using the telescope?",
        o: ["DNA Structure", "Penicillin", "The moons of Jupiter", "Laws of Motion"],
        a: 2
      },
      {
        type: "mc",
        q: "Who 'laid the foundation for classical physics' with the Laws of Motion?",
        o: ["James Watt", "Isaac Newton", "Thomas Edison", "Gregorio Zara"],
        a: 1
      },
      {
        type: "mc",
        q: "What transformed industries by 'driving mechanized production and boosting productivity'?",
        o: ["The Wheel", "Steam Engine", "Assembly Line", "Smartphones"],
        a: 1
      },
      {
        type: "mc",
        q: "Who introduced the incandescent light bulb in 1879?",
        o: ["James Watt", "Thomas Edison", "Henry Ford", "Alexander Fleming"],
        a: 1
      },
      {
        type: "mc",
        q: "Ransom Olds and Henry Ford are credited with developing the:",
        o: ["Airplane", "Blockchain", "Assembly Line", "Steam Engine"],
        a: 2
      },
      {
        type: "mc",
        q: "What did the Wright Brothers pioneer in 1903?",
        o: ["Wireless communication", "Powered flight", "Antibiotics", "Nuclear energy"],
        a: 1
      },
      {
        type: "mc",
        q: "Alexander Fleming discovered the first effective antibiotic called:",
        o: ["Insulin", "Erythromycin", "Penicillin", "Aspirin"],
        a: 2
      },
      {
        type: "mc",
        q: "Who discovered the 'double-helix structure of DNA' in 1953?",
        o: ["Jennifer Doudna and Emmanuelle Charpentier", "James Watson and Francis Crick", "Lourdes Cruz and Raul Destura", "Isaac Newton and Francis Bacon"],
        a: 1
      },
      {
        type: "mc",
        q: "What technology 'introduced decentralized systems for secure digital transactions'?",
        o: ["Smartphones", "Blockchain", "Artificial Intelligence", "CRISPR"],
        a: 1
      },
      {
        type: "mc",
        q: "Who developed the CRISPR-Cas9 gene-editing technology?",
        o: ["James Watson and Francis Crick", "Jennifer Doudna and Emmanuelle Charpentier", "Maria Orosa and Abelardo Aguilar", "Aisa Mijeno and Raul Destura"],
        a: 1
      },
      {
        type: "mc",
        q: "The Banaue Rice Terraces were an 'engineering marvel' created by which group?",
        o: ["Tagalog", "Cebuano", "Ifugao", "Ilocano"],
        a: 2
      },
      {
        type: "mc",
        q: "What were the 'advanced wooden vessels for trade and transport' in the pre-colonial Philippines?",
        o: ["Galleons", "Balangay", "Canoes", "Aqueducts"],
        a: 1
      },
      {
        type: "mc",
        q: "The SALt lamp utilizes what as a power source?",
        o: ["Solar power", "Kerosene", "Saltwater", "Batteries"],
        a: 2
      },
      {
        type: "mc",
        q: "Who is known for inventing banana ketchup during World War II?",
        o: ["Lourdes Cruz", "Maria Orosa", "Aisa Mijeno", "Emmanuelle Charpentier"],
        a: 1
      },
      {
        type: "mc",
        q: "Abelardo Aguilar contributed to the development of which antibiotic?",
        o: ["Penicillin", "Erythromycin", "Amoxicillin", "Tetracycline"],
        a: 1
      },
      {
        type: "mc",
        q: "Dr. Gregorio Zara is known as the:",
        o: ["Father of Philippine Medicine", "Father of Videoconferencing", "Father of Philippine Physics", "Father of Modern Algebra"],
        a: 1
      },
      {
        type: "mc",
        q: "Which ethical principle involves obtaining 'informed consent from participants'?",
        o: ["Social Responsibility", "Honesty and Integrity", "Respect for People", "Accountability"],
        a: 2
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "The systematic study of the natural world through observation and experimentation.",
        a: "Science"
      },
      {
        type: "id",
        q: "The application of scientific knowledge to create tools and processes that improve life.",
        a: "Technology"
      },
      {
        type: "id",
        q: "The term used when things are dependent upon one another or mutually dependent.",
        a: "Interdependent"
      },
      {
        type: "id",
        q: "The c. 4000 BCE invention from Mesopotamia that revolutionized transportation.",
        a: "The Wheel"
      },
      {
        type: "id",
        q: "Ancient Egyptian system of writing that enabled record-keeping.",
        a: "Hieroglyphics"
      },
      {
        type: "id",
        q: "The period in history (500–1500 CE) where the mechanical clock was developed.",
        a: "Medieval Period"
      },
      {
        type: "id",
        q: "The German innovator who revolutionized communication with the printing press.",
        a: "Johannes Gutenberg"
      },
      {
        type: "id",
        q: "The 16th-18th century period characterized by groundbreaking astronomical discoveries and the systematic approach to discovery.",
        a: "Scientific Revolution"
      },
      {
        type: "id",
        q: "The innovator who transformed industries with the Steam Engine c. 1765 CE.",
        a: "James Watt"
      },
      {
        type: "id",
        q: "The antibiotic derived from the bacterium Streptomyces erythraeus.",
        a: "Erythromycin"
      },
      {
        type: "id",
        q: "The 21st-century portable device that has reshaped communication and daily life.",
        a: "Smartphones"
      },
      {
        type: "id",
        q: "Ifugao engineering marvel used for sustainable farming and irrigation.",
        a: "Banaue Rice Terraces"
      },
      {
        type: "id",
        q: "Pre-colonial herbal remedies such as lagundi and sambong are examples of what?",
        a: "Traditional Medicine"
      },
      {
        type: "id",
        q: "Indigenous metalworking techniques were showcased in tools like the kampilan and...",
        a: "Bolo"
      },
      {
        type: "id",
        q: "The Spanish map 'Carta Hydrographica y Chorographica de las Islas Filipinas' was crucial for understanding what?",
        a: "Topography"
      },
      {
        type: "id",
        q: "The colonial period that introduced refrigeration and canning to the Philippines.",
        a: "American Colonial Period"
      },
      {
        type: "id",
        q: "Scientific institution established in 1952 that monitors volcanic activities and earthquakes.",
        a: "PHIVOLCS"
      },
      {
        type: "id",
        q: "The agency established in 1976 that recognizes and supports scientific achievements in the Philippines.",
        a: "National Academy of Science and Technology"
      },
      {
        type: "id",
        q: "The full name of the SALt lamp invention.",
        a: "Sustainable Alternative Lighting"
      },
      {
        type: "id",
        q: "The Filipino inventor of the SALt lamp.",
        a: "Aisa Mijeno"
      },
      {
        type: "id",
        q: "The bacterium from which erythromycin was derived.",
        a: "Streptomyces erythraeus"
      },
      {
        type: "id",
        q: "The year the first two-way video telephone was invented by Gregorio Zara.",
        a: "1955"
      },
      {
        type: "id",
        q: "The toxic properties of Conus marine snails researched by Dr. Lourdes Cruz.",
        a: "Conotoxins"
      },
      {
        type: "id",
        q: "The rapid diagnostic test for detecting dengue developed by Dr. Raul Destura.",
        a: "Biotek-M Dengue Detection Kit"
      },
      {
        type: "id",
        q: "The ethical principle requiring accurate data collection and avoiding falsifying results.",
        a: "Honesty and Integrity in Research"
      },
      {
        type: "id",
        q: "The ethical principle that considers the long-term impact of innovations on nature.",
        a: "Sustainability and Environmental Care"
      },
      {
        type: "id",
        q: "The practice of cultivating fish like milkfish and tilapia developed in regions like Taal.",
        a: "Aquaculture"
      },
      {
        type: "id",
        q: "The systematic mapping and cartography of the archipelago was introduced by whom?",
        a: "The Spanish"
      },
      {
        type: "id",
        q: "PNRI, established in 1958, promotes which type of energy?",
        a: "Nuclear energy"
      },
      {
        type: "id",
        q: "What is the primary goal of ethics in science and technology?",
        a: "Ensure advancements benefit society while reducing harm"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "Science and technology influence each other: discoveries drive new technologies, and technology enables further exploration.",
        a: true
      },
      {
        type: "tf",
        q: "Society’s values and economy have no influence on scientific research.",
        a: false
      },
      {
        type: "tf",
        q: "International cooperation is key in tackling global challenges like pandemics and climate change.",
        a: true
      },
      {
        type: "tf",
        q: "Cuneiform writing was developed in ancient Egypt.",
        a: false
      },
      {
        type: "tf",
        q: "The mechanical clocks of the 13th century were among the earliest timekeeping devices.",
        a: true
      },
      {
        type: "tf",
        q: "The assembly line reduced manufacturing costs, making products like cars more affordable.",
        a: true
      },
      {
        type: "tf",
        q: "Banana ketchup was invented because tomatoes were abundant during World War II.",
        a: false
      },
      {
        type: "tf",
        q: "Erythromycin was developed as an alternative for patients with a penicillin allergy.",
        a: true
      },
      {
        type: "tf",
        q: "PHIVOLCS stands for Philippine Institute of Volcanology and Seismology.",
        a: true
      },
      {
        type: "tf",
        q: "Ethical guidelines are unnecessary in scientific research as long as the invention works.",
        a: false
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "Science and technology play crucial roles in ",
        after: " our world.",
        a: "shaping"
      },
      {
        type: "fitb",
        before: "Science and technology influence each other: discoveries drive new technologies, and technology enables further ",
        after: ".",
        a: "exploration"
      },
      {
        type: "fitb",
        before: "Ethical concerns and ",
        after: " guide how research is done and how technologies are used.",
        a: "public policy"
      },
      {
        type: "fitb",
        before: "The invention of the ",
        after: "from 4000 BCE, Mesopotamia revolutionized transportation and trade.",
        a: "Wheel"
      },
      {
        type: "fitb",
        before: "Roman Aqueducts were engineered to carry water to cities, baths, and fountains, improving ",
        after: ".",
        a: "public health"
      },
      {
        type: "fitb",
        before: "Al-Khwarizmi’s Algebra helped establish the foundation for modern ",
        after: ".",
        a: "mathematics"
        },
      {
        type: "fitb",
        before: "Johannes Gutenberg’s Printing Press revolutionized communication and ",
        after: ".",
        a: "literacy"
      },
      {
        type: "fitb",
        before: "Isaac Newton's Laws of Motion laid the foundation for ",
        after: " physics.",
        a: "classical"
      },
      {
        type: "fitb",
        before: "Thomas Edison’s Incandescent Light Bulb introduced a more reliable, longer-lasting alternative to candles and ",
        after: ".",
        a: "gas lamps"
      },
      {
        type: "fitb",
        before: "Penicillin revolutionized medicine by providing the first effective ",
        after: ".",
        a: "antibiotic"
      },
      {
        type: "fitb",
        before: "The construction of the Banaue Rice Terraces was by the ",
        after: ".",
        a: "Ifugao"
      },
      {
        type: "fitb",
        before: "Traditional medicine included herbal remedies like lagundi, ",
        after: ", and tawa-tawa.",
        a: "sambong"
      },
      {
        type: "fitb",
        before: "Systematic mapping and cartography of the archipelago created more accurate ",
        after: " knowledge.",
        a: "geographic"
      },
      {
        type: "fitb",
        before: "The American colonial period introduced refrigeration and ",
        after: " methods.",
        a: "canning"
      },
      {
        type: "fitb",
        before: "PNRI was formerly known as the ",
        after: ".",
        a: "Philippine Atomic Energy Commission"
      },
      {
        type: "fitb",
        before: "Maria Orosa was a pioneering Filipino food technologist and ",
        after: ".",
        a: "chemist"
      },
      {
        type: "fitb",
        before: "Gregorio Zara was known as the 'Father of ",
        after: "'.",
        a: "Videoconferencing"
      },
      {
        type: "fitb",
        before: "Lourdes Cruz's findings on Conotoxins have implications for drug development for ",
        after: " management.",
        a: "pain"
      },
      {
        type: "fitb",
        before: "Raul Destura developed the 'Biotek-M ",
        after: " Detection Kit'.",
        a: "Dengue"
      }
    ];