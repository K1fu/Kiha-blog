const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (50) =====
      {
        type: "mc",
        q: "Which of the following best describes 'misinformation'?",
        o: [
          "Deliberately false information spread to deceive",
          "Unintentional sharing of incorrect information",
          "Information shared by AI-driven bots",
          "False reviews posted by companies"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following best describes 'disinformation'?",
        o: [
          "Accidental sharing of false news",
          "Information spread through search engines",
          "Deliberate spreading of false information",
          "Excessive use of social media"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which platforms are mentioned as examples of social media that let users communicate and engage on various topics?",
        o: [
          "YouTube, TikTok, and Pinterest",
          "Facebook, Instagram, and X (formerly Twitter)",
          "LinkedIn, Snapchat, and Reddit",
          "Discord, Telegram, and WhatsApp"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is one negative effect of excessive social media use mentioned in the material?",
        o: [
          "Reduced internet speed",
          "Increased cybersecurity threats",
          "Digital addiction and mental health concerns",
          "Lower information accessibility"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "E-Government primarily focuses on which of the following?",
        o: [
          "Political participation and online petitions",
          "Governmental efficiency and public service delivery using digital tools",
          "Spreading political influence through social media",
          "Regulating AI-driven bots in elections"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which platform is mentioned as an example that makes activism 'more immediate and widespread'?",
        o: [
          "Twitter and Reddit",
          "YouTube and Spotify",
          "Facebook and Change.org",
          "Instagram and TikTok"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What challenge do policymakers face regarding digital politics?",
        o: [
          "Managing satellite communications",
          "Regulating online spaces while protecting free speech",
          "Controlling e-commerce transactions",
          "Preventing the use of robo-advisors"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is an example of a FinTech service mentioned in the material?",
        o: [
          "Lazada and Shopee",
          "GCash and Maya",
          "Facebook and Change.org",
          "Betterment and Shopee"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the material, robo-advisors such as Betterment and Wealthfront offer which of the following?",
        o: [
          "Fast delivery and personalized ads",
          "Electronic voting and voter registration",
          "Alternatives to traditional banking and personalized financial services",
          "AI-driven automation for manufacturing"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which type of pollution 'occurs from the release of harmful substances into the atmosphere'?",
        o: [
          "Soil Pollution",
          "Water Pollution",
          "Air Pollution",
          "Noise Pollution"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is listed as an effect of fossil fuel combustion on air quality?",
        o: [
          "Waterborne diseases",
          "Rising global temperatures (climate change)",
          "Soil erosion and desertification",
          "Biodiversity loss"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the proposed solution to vehicle and industry emissions causing smog and acid rain?",
        o: [
          "Promotion of organic farming",
          "Reduction of single-use plastics",
          "Stricter emission regulations for industries",
          "Enforcement of wastewater regulations"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Industrial waste in water bodies can cause which of the following effects?",
        o: [
          "Soil erosion and desertification",
          "Waterborne diseases such as cholera and dysentery",
          "Respiratory diseases like asthma",
          "Reduced crop productivity"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Soil pollution caused by hazardous waste disposal leads to which effect?",
        o: [
          "Contaminated drinking water",
          "Melting glaciers",
          "Reduced crop productivity",
          "Acid rain"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the solution proposed for excessive use of chemical fertilizers and pesticides?",
        o: [
          "Implementation of hazardous waste management strategies",
          "Promotion of organic farming and sustainable agriculture practices",
          "Transition to renewable energy sources",
          "Enforcement of strict wastewater regulations"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Greenhouse Gas Emissions (GHGs) trap heat in the Earth's atmosphere, causing which primary effect?",
        o: [
          "Soil erosion",
          "Water contamination",
          "Global warming and climate instability",
          "Reduced biodiversity"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Industrial emissions from factories contribute to which climate change effect?",
        o: [
          "Rising temperatures only",
          "Melting glaciers and sea-level rise",
          "Soil erosion and desertification",
          "Acid rain and smog"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is described as an effect of poor land management, such as deforestation for agriculture?",
        o: [
          "Rising sea levels",
          "Biodiversity loss and ecosystem imbalances",
          "Increased greenhouse gas absorption",
          "Improved soil fertility"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which renewable energy technology uses 'floating platforms in deeper waters for energy generation'?",
        o: [
          "Advanced Solar Panels (Photovoltaics)",
          "Smart Grid Integration",
          "Floating Wind Turbines",
          "Smart Irrigation Systems"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is a listed challenge of Advanced Solar Panels (Photovoltaics)?",
        o: [
          "Cybersecurity risks",
          "High installation cost and requires storage for consistent power",
          "Maintenance challenges offshore",
          "Slow adoption in traditional farming systems"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Smart Grid Integration uses which technologies to manage renewable energy distribution?",
        o: [
          "GPS, sensors, and drones",
          "AI and IoT",
          "Incineration and biogas production",
          "Robotics and satellite data"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which sustainable agriculture technique 'uses GPS, sensors, drones, and AI to monitor crop health'?",
        o: [
          "AI-Driven Agroforestry",
          "Smart Irrigation Systems",
          "Precision Agriculture",
          "Waste-to-Energy (WTE)"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "AI-Driven Agroforestry integrates AI and drones to manage tree planting alongside crops. What is one of its listed benefits?",
        o: [
          "Reduces landfill waste",
          "Enhances forest management, prevents erosion, boosts soil fertility",
          "Optimizes water usage and increases crop yields",
          "Increases recycling efficiency and reduces contamination"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which waste management approach 'uses waste to generate electricity through incineration or biogas production'?",
        o: [
          "Smart Waste Management Systems",
          "AI-Driven Recycling",
          "Waste-to-Energy (WTE)",
          "Precision Agriculture"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does biotechnology use to develop new technologies and products that improve human life?",
        o: [
          "Fossil fuels, minerals, and synthetic chemicals",
          "Living organisms, cells, and biological processes",
          "Satellites, drones, and AI systems",
          "Nuclear energy and quantum computing"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which GMO crop is mentioned as an example of a nutrient-enriched crop developed through genetic engineering?",
        o: [
          "Arctic Apples",
          "Bt Corn",
          "Golden Rice",
          "Enviropig"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In medicine, what do genetically engineered bacteria produce for diabetics?",
        o: [
          "Stem cells",
          "Insulin",
          "CRISPR enzymes",
          "Antibiotics"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the name of the famous cloned sheep mentioned in the material?",
        o: [
          "Eve",
          "Dolly",
          "Enviropig",
          "GIFT"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What gene-editing technology is mentioned as driving medical breakthroughs but also sparking debate on human genetic modification?",
        o: [
          "PCR (Polymerase Chain Reaction)",
          "CRISPR-Cas9",
          "mRNA technology",
          "Recombinant DNA"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which GMO food example is mentioned as extending shelf life by resisting browning?",
        o: [
          "Golden Rice",
          "Bt Corn",
          "Arctic Apples",
          "Genetically Improved Farmed Tilapia"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In 2002, who claimed to have created the first human clone, Eve, without proof?",
        o: [
          "NASA",
          "Clonaid",
          "Biotech Corp",
          "CRISPR Labs"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The possibility of 'designer babies' raises ethical concerns about which of the following?",
        o: [
          "Space debris and rocket pollution",
          "Social inequality, genetic discrimination, and morality of altering human DNA for non-medical purposes",
          "Corporate control of food seeds",
          "Animal welfare in research"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Genetically Improved Farmed Tilapia (GIFT) was developed in which country?",
        o: [
          "Bangladesh",
          "Vietnam",
          "India",
          "Philippines"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which type of stem cells are mentioned as offering an 'ethical alternative' to embryonic stem cells?",
        o: [
          "Synthetic stem cells from labs",
          "Adult stem cells from bone marrow or umbilical cords",
          "GMO-derived stem cells",
          "Cloned stem cells from CRISPR"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the material, biotech companies patenting GMO seeds increases what among farmers?",
        o: [
          "Crop yield and sustainability",
          "Dependence on biotech companies' products",
          "Access to free seed exchanges",
          "Reduction in pesticide use"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "As of February 2025, what is the status of GMO labeling legislation in the Philippines?",
        o: [
          "There is a mandatory GMO labeling law in effect",
          "No specific legislation mandating the labeling of GMOs in food products",
          "GMO products are completely banned",
          "Only imported GMO products require labeling"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which was the first artificial satellite launched, marking the beginning of the Space Age?",
        o: [
          "Apollo 11",
          "Sputnik 1",
          "James Webb Space Telescope",
          "Perseverance Rover"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Who were the astronauts mentioned as part of the Apollo 11 mission?",
        o: [
          "Yuri Gagarin, Buzz Aldrin, and John Glenn",
          "Neil Armstrong, Edwin 'Buzz' Aldrin, and Michael Collins",
          "Neil Armstrong, John Glenn, and Sally Ride",
          "Michael Collins, Alan Shepard, and Buzz Aldrin"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What type of experiments do astronauts conduct at the International Space Station?",
        o: [
          "Deep ocean experiments",
          "Atmospheric chemistry experiments",
          "Microgravity experiments",
          "Quantum computing experiments"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which NASA rovers are mentioned as gathering data on Mars' surface, climate, and potential for past life?",
        o: [
          "Spirit and Opportunity",
          "Curiosity and Perseverance",
          "Phoenix and InSight",
          "Sojourner and Pathfinder"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The James Webb Space Telescope was launched in which year?",
        o: [
          "2019",
          "2020",
          "2021",
          "2023"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is listed as a technological innovation driven by space programs?",
        o: [
          "CRISPR gene editing",
          "GPS, weather forecasting, and medical imaging",
          "Social media platforms",
          "FinTech and mobile banking"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What health risks does long-term space travel expose astronauts to?",
        o: [
          "Cybersecurity risks and digital addiction",
          "Radiation, muscle atrophy, and psychological stress",
          "Waterborne diseases and soil contamination",
          "Air pollution and respiratory diseases"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Space debris poses which type of risk?",
        o: [
          "Atmospheric ozone depletion",
          "Collision risks for operational spacecraft and astronauts",
          "Signal interference with satellites",
          "Increased greenhouse gas emissions"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the name of NASA's program that aims to establish a long-term human presence on the Moon?",
        o: [
          "Apollo Program",
          "Mars 2020",
          "Artemis Program",
          "Galactic 01"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which company, founded by Richard Branson, offers suborbital flights for paying customers?",
        o: [
          "SpaceX",
          "Blue Origin",
          "Virgin Galactic",
          "Boeing Space"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What was the name of Virgin Galactic's first commercial space tourism flight in 2023?",
        o: [
          "Apollo 12",
          "Galactic 01",
          "Artemis 1",
          "SpaceX Crew Dragon"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which country launched Sputnik 1 in 1957?",
        o: [
          "United States",
          "China",
          "Germany",
          "Soviet Union"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is a listed environmental impact of rocket launches?",
        o: [
          "Increased soil erosion",
          "Water contamination from fuel leaks",
          "Atmospheric pollution including gases and particulates affecting the ozone layer and climate",
          "Deforestation around launch sites"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The Philippines regulates GMOs through which Department of Agriculture administrative order?",
        o: [
          "Administrative Order No. 2 (2000)",
          "Administrative Order No. 8 (2002)",
          "Administrative Order No. 15 (2005)",
          "Administrative Order No. 3 (2010)"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is a benefit of the International Space Station mentioned in the material?",
        o: [
          "Providing suborbital tourist flights",
          "Advancing medicine, technology, and deep-space exploration through microgravity experiments",
          "Gathering data on Mars' potential for past life",
          "Capturing images of distant galaxies and exoplanets"
        ],
        a: 1
      },

      // ===== Identification (20) =====
      {
        type: "id",
        q: "This term refers to the unintentional sharing of incorrect information, such as unknowingly sharing incorrect news.",
        a: "Misinformation"
      },
      {
        type: "id",
        q: "This term refers to the deliberate spreading of false information, such as a company faking positive reviews.",
        a: "Disinformation"
      },
      {
        type: "id",
        q: "This aspect of technology's political impact is about governmental efficiency and public service delivery using digital tools.",
        a: "E-Government"
      },
      {
        type: "id",
        q: "This type of pollution 'occurs when contaminants enter water bodies, which harms ecosystems and human health.'",
        a: "Water Pollution"
      },
      {
        type: "id",
        q: "This type of pollution 'occurs when toxic substances accumulate in the soil, which affects plant growth and food security.'",
        a: "Soil Pollution"
      },
      {
        type: "id",
        q: "This renewable energy technology uses 'AI and IoT to manage the distribution of renewable energy across the grid.'",
        a: "Smart Grid Integration"
      },
      {
        type: "id",
        q: "This sustainable agriculture technique 'uses IoT sensors, AI, and weather data to automate water usage in agriculture, minimizing waste.'",
        a: "Smart Irrigation Systems"
      },
      {
        type: "id",
        q: "This waste management approach 'uses AI and robotics to automate and optimize waste sorting and recycling processes.'",
        a: "AI-Driven Recycling"
      },
      {
        type: "id",
        q: "This field of biotechnology modifies an organism's DNA to introduce or change traits.",
        a: "Genetic Engineering"
      },
      {
        type: "id",
        q: "This GMO crop developed in the Philippines enhances aquaculture by improving growth rates and food production.",
        a: "Genetically Improved Farmed Tilapia (GIFT)"
      },
      {
        type: "id",
        q: "This controversial stem cell type is sourced from embryos and is used in treatments for conditions like Parkinson's Disease or spinal cord injuries.",
        a: "Embryonic Stem Cells"
      },
      {
        type: "id",
        q: "This gene-editing tool drives medical breakthroughs but also sparks debate on human genetic modification.",
        a: "CRISPR-Cas9"
      },
      {
        type: "id",
        q: "This was the first artificial satellite launched by the Soviet Union in 1957, marking the beginning of the Space Age.",
        a: "Sputnik 1"
      },
      {
        type: "id",
        q: "This space observatory launched in 2021 captures detailed images of distant galaxies and exoplanets.",
        a: "James Webb Space Telescope"
      },
      {
        type: "id",
        q: "NASA's program that aims to establish a long-term human presence on the Moon.",
        a: "Artemis Program"
      },
      {
        type: "id",
        q: "This transgenic animal is mentioned in the material as helping reduce environmental impact.",
        a: "Enviropig"
      },
      {
        type: "id",
        q: "This GMO crop is designed to resist browning and is an example of a food security and sustainability application of genetic engineering.",
        a: "Arctic Apples"
      },
      {
        type: "id",
        q: "This is the name of Virgin Galactic's first commercial space tourism flight launched in 2023.",
        a: "Galactic 01"
      },
      {
        type: "id",
        q: "This process accelerates climate change by reducing carbon sinks and disrupting ecosystems.",
        a: "Deforestation and Land Degradation"
      },
      {
        type: "id",
        q: "This type of technology focuses on farming practices that 'enhance productivity while preserving natural resources and ecosystems.'",
        a: "Sustainable Agriculture"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "Misinformation is deliberate, while disinformation is unintentional.",
        a: false
      },
      {
        type: "tf",
        q: "E-Government refers to political participation, influence, and discourse in the digital age.",
        a: false
      },
      {
        type: "tf",
        q: "Plastic waste in water bodies can lead to contaminated drinking water.",
        a: true
      },
      {
        type: "tf",
        q: "Floating Wind Turbines are placed on floating platforms in deeper waters for energy generation.",
        a: true
      },
      {
        type: "tf",
        q: "As of February 2025, the Philippines has a specific law mandating the labeling of GMOs in food products.",
        a: false
      },
      {
        type: "tf",
        q: "Neil Armstrong, Edwin 'Buzz' Aldrin, and Michael Collins were the astronauts of the Apollo 11 mission.",
        a: true
      },
      {
        type: "tf",
        q: "Sputnik 1 was launched by the United States in 1957.",
        a: false
      },
      {
        type: "tf",
        q: "Space debris poses collision risks for operational spacecraft and astronauts.",
        a: true
      },
      {
        type: "tf",
        q: "Adult stem cells from bone marrow or umbilical cords are considered ethical alternatives to embryonic stem cells.",
        a: true
      },
      {
        type: "tf",
        q: "Rocket launches have no environmental impact on the ozone layer or climate.",
        a: false
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "Social media platforms like Facebook, Instagram, and X (formerly Twitter) also create virtual communities where people with shared",
        after: "or goals can connect and support each other.",
        a: "interests"
      },
      {
        type: "fitb",
        before: "Technology has transformed political participation, allowing citizens to express opinions, advocate for causes, and mobilize support through social media and",
        after: ".",
        a: "online petitions"
      },
      {
        type: "fitb",
        before: "AI-driven automation boosts productivity in manufacturing, logistics, and customer service, resulting in cost savings, faster production, and enhanced",
        after: ".",
        a: "customer experiences"
      },
      {
        type: "fitb",
        before: "Pollution is one of the most pressing environmental challenges caused by industrialization and technological advancements. It affects ecosystems, human health, and",
        after: ".",
        a: "biodiversity"
      },
      {
        type: "fitb",
        before: "Fossil fuel combustion produces Carbon dioxide (CO₂) and greenhouse gases, which cause",
        after: "and climate instability.",
        a: "global warming"
      },
      {
        type: "fitb",
        before: "Sustainable technologies aim to reduce environmental impact while promoting economic and social",
        after: ".",
        a: "well-being"
      },
      {
        type: "fitb",
        before: "Precision Agriculture uses GPS, sensors, drones, and AI to monitor crop health, optimize resource use, and improve",
        after: ".",
        a: "yields"
      },
      {
        type: "fitb",
        before: "Waste-to-Energy (WTE) uses waste to generate electricity through incineration or",
        after: "production.",
        a: "biogas"
      },
      {
        type: "fitb",
        before: "Biotechnology uses living organisms, cells, and biological processes to develop new technologies and products that improve",
        after: ".",
        a: "human life"
      },
      {
        type: "fitb",
        before: "Genetic engineering has led to the development of genetically modified organisms (GMOs), including enhanced crops, medical treatments, and genetically engineered",
        after: ".",
        a: "animals"
      },
      {
        type: "fitb",
        before: "Scientists create pest-resistant, drought-tolerant, and nutrient-enriched crops, such as Bt corn and Golden Rice, which help increase yield and reduce",
        after: "use.",
        a: "pesticide"
      },
      {
        type: "fitb",
        before: "Gene editing holds the potential to create 'designer babies' by modifying embryos for specific traits, such as intelligence or",
        after: ".",
        a: "appearance"
      },
      {
        type: "fitb",
        before: "In 2002, Clonaid claimed to have created the first human clone,",
        after: ", without proof.",
        a: "Eve"
      },
      {
        type: "fitb",
        before: "The Philippines' Bt Corn industry is an example of biotech companies patenting GMO seeds, increasing farmer dependence on their products, where farmers must repurchase seeds each",
        after: ".",
        a: "season"
      },
      {
        type: "fitb",
        before: "Sputnik 1, launched in 1957, marked the beginning of the Space Age and intensified the",
        after: ".",
        a: "Space Race"
      },
      {
        type: "fitb",
        before: "The International Space Station is a global research station that orbits Earth, where astronauts conduct",
        after: "experiments.",
        a: "microgravity"
      },
      {
        type: "fitb",
        before: "NASA's Mars Science Laboratory Mission, Curiosity and Perseverance Rover, gather data on Mars' surface, climate, and potential for",
        after: ".",
        a: "past life"
      },
      {
        type: "fitb",
        before: "Space exploration offers the benefit of Environmental Monitoring, where satellites help track climate change, natural disasters, and",
        after: ", aiding conservation efforts.",
        a: "deforestation"
      },
      {
        type: "fitb",
        before: "If too much space debris builds up, one crash could cause a chain reaction of more crashes, making some areas of space too",
        after: "to use.",
        a: "dangerous"
      },
      {
        type: "fitb",
        before: "NASA, SpaceX, and others plan to send astronauts to",
        after: "within the next few decades.",
        a: "Mars"
      }
    ];