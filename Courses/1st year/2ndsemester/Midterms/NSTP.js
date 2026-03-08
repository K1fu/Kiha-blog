const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (50) =====
      {
        type: "mc",
        q: "Sustainable development is grounded in the principle that present needs must be met without compromising which of the following?",
        o: [
          "The profits of current industries",
          "Future generations' ability to meet their own needs",
          "The expansion of urban infrastructure",
          "The growth of national economies"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which three interdependent pillars does the sustainable development approach recognize?",
        o: [
          "Economic growth, technological innovation, and political stability",
          "Human well-being, environmental integrity, and responsible governance",
          "Public health, water security, and transportation",
          "Prevention, efficiency, and inclusion"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "At the community level, sustainable development emphasizes systems that support which of the following?",
        o: [
          "Profit, competition, and privatization",
          "Health, equity, and resilience",
          "Industry, agriculture, and commerce",
          "Education, culture, and recreation"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Sustainable development prioritizes which of the following sets of values?",
        o: [
          "Reaction over prevention, waste over efficiency, inequality over inclusion",
          "Short-term solutions, rapid growth, and economic expansion",
          "Prevention over reaction, efficiency over waste, and inclusion over inequality",
          "Centralization, standardization, and modernization"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Public health refers to organized efforts of society focused primarily on which level?",
        o: [
          "The individual level",
          "The hospital level",
          "The national government level",
          "The population level"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Community wellness emphasizes overall well-being across which dimensions of health?",
        o: [
          "Physical and mental only",
          "Physical, mental, social, and environmental",
          "Social, cultural, political, and economic",
          "Biological, chemical, and ecological"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which approach in public health aims to reduce the likelihood of disease through vaccination, health education, sanitation, and environmental protection?",
        o: [
          "Curative approach",
          "Reactive approach",
          "Preventive approach",
          "Interventional approach"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Why do sustainable health systems prioritize prevention over cure?",
        o: [
          "Because cures are not scientifically proven",
          "Because it reduces long-term costs, lessens strain on healthcare facilities, and improves population-wide outcomes",
          "Because hospitals are too expensive to maintain",
          "Because prevention generates more government revenue"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Vulnerability in public health refers to which of the following?",
        o: [
          "A community's inability to build infrastructure",
          "Increased likelihood of exposure to health risks and reduced capacity to respond to or recover from health threats",
          "The absence of medical professionals in a region",
          "Lack of government funding for hospitals"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following best describes a health challenge specific to urban areas?",
        o: [
          "Limited access to emergency services",
          "Lack of healthcare facilities",
          "Increased risk of communicable disease transmission due to high population density",
          "Poor agricultural output"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which group is NOT mentioned in the handout as a vulnerable population disproportionately affected by health risks?",
        o: [
          "Children",
          "Older adults",
          "Persons with disabilities",
          "Middle-income professionals"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does sanitation primarily refer to?",
        o: [
          "The provision of medical care in communities",
          "Systems and practices that manage human waste, solid waste, wastewater, and drainage to protect communities from disease",
          "Water purification for industrial use",
          "Urban road network planning"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is NOT listed as a key component of sanitation?",
        o: [
          "Solid waste management",
          "Sewage collection and treatment",
          "Vaccination programs",
          "Stormwater drainage"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What do accumulated waste, untreated sewage, and stagnant water create?",
        o: [
          "Opportunities for community gardens",
          "Breeding grounds for disease vectors",
          "Sources of groundwater replenishment",
          "Cooling effects in urban areas"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following are identified as social determinants of health?",
        o: [
          "Genetics, blood type, and age",
          "Income level, education, employment, housing quality, physical environment, and access to basic services",
          "Personality, lifestyle choices, and personal habits only",
          "Climate, geography, and altitude"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the handout, who is responsible for policy-making, regulation, and the provision of basic services that protect health?",
        o: [
          "Individuals",
          "Private corporations",
          "Governments",
          "Non-governmental organizations"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What happens to community health protection when public trust in institutions is low or misinformation is widespread?",
        o: [
          "Compliance with health policies and preventive measures declines",
          "People seek alternative private healthcare",
          "The government increases its budget",
          "Communities form independent health committees"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "Community-based health and prevention initiatives emphasize which approach?",
        o: [
          "Medical treatment after illness occurs",
          "Hospital-centered reactive care",
          "Prevention, early intervention, and health promotion",
          "Pharmaceutical distribution to all residents"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is listed as a preventive strategy used in community-based health programs?",
        o: [
          "Surgical interventions",
          "Disease surveillance",
          "Hospital expansion",
          "Emergency response protocols"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Water security encompasses three interrelated dimensions. Which of the following correctly lists all three?",
        o: [
          "Purity, volume, and distribution",
          "Availability, accessibility, and quality",
          "Supply, demand, and regulation",
          "Storage, treatment, and delivery"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Potable water is described in the handout as which of the following?",
        o: [
          "A luxury reserved for high-income communities",
          "A technical issue to be managed by engineers",
          "A basic human need and a fundamental public good",
          "A commodity subject to market pricing"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which demographic factor significantly increases water demand and strains existing water systems?",
        o: [
          "Declining birth rates",
          "Population growth and rapid urbanization",
          "Aging populations",
          "Rural-to-urban migration only"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Over-extraction of groundwater leads to which of the following consequences?",
        o: [
          "Increased river flow and flood risk",
          "Improved agricultural yields",
          "Declining water tables, land subsidence, and long-term water insecurity",
          "Natural replenishment of aquifers"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which waterborne diseases are commonly associated with unsafe drinking water and inadequate sanitation?",
        o: [
          "Malaria, tuberculosis, and influenza",
          "Diarrhea, cholera, and typhoid",
          "Dengue, Zika, and yellow fever",
          "HIV, hepatitis B, and rubella"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does integrated water resource management emphasize?",
        o: [
          "Managing water systems in isolation from other sectors",
          "Coordination across domestic use, agriculture, industry, and environmental protection",
          "Exclusive focus on domestic water consumption",
          "Privatization of water utilities"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the handout, what does treating water solely as an economic commodity risk?",
        o: [
          "Improving water quality standards",
          "Increasing infrastructure investment",
          "Excluding low-income households and undermining public welfare",
          "Reducing water waste"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Transportation refers to which of the following?",
        o: [
          "The ease and efficiency with which individuals can access destinations",
          "The physical systems and services that enable the movement of people and goods",
          "The planning of road networks in urban areas",
          "The regulation of vehicle emissions"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Mobility describes which of the following?",
        o: [
          "The physical systems that move people",
          "The ease and efficiency with which individuals can access destinations and opportunities",
          "The number of vehicles in a city",
          "The infrastructure investment by governments"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Walkability refers to the extent to which the built environment supports which type of movement?",
        o: [
          "Vehicular traffic",
          "Safe, convenient, and comfortable movement on foot",
          "Cycling and motorized two-wheel transport",
          "Mass transit access"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which urban design features increase the safety and attractiveness of walking?",
        o: [
          "Wide highways and parking lots",
          "Tall buildings and commercial zones",
          "Continuous sidewalks, safe pedestrian crossings, traffic-calming measures, adequate lighting, and mixed-use development",
          "Roundabouts and elevated roads"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "From an environmental perspective, what makes active transport beneficial?",
        o: [
          "It reduces public transport costs",
          "It produces no emissions and reduces dependence on private vehicles",
          "It increases road capacity",
          "It supports construction of bike lanes only"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Open spaces such as parks, plazas, and recreational areas help regulate which environmental factors in cities?",
        o: [
          "Soil erosion and seismic activity",
          "Urban temperature, air quality, and stormwater runoff",
          "Groundwater extraction and wastewater treatment",
          "Noise pollution and road wear"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the primary role of public transportation systems in urban mobility?",
        o: [
          "Providing luxury travel for high-income earners",
          "Providing affordable and efficient alternatives to private vehicle use",
          "Reducing the need for road construction",
          "Supporting freight delivery networks"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is described as a critical feature of effective public transportation?",
        o: [
          "Speed and exclusivity",
          "Accessibility and reliability",
          "High pricing and low capacity",
          "Private ownership and management"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Traffic management complements public transportation by doing which of the following?",
        o: [
          "Reducing public transport routes",
          "Optimizing the use of existing road networks",
          "Increasing the number of private vehicles",
          "Expanding highways outside city centers"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Integrated urban planning recognizes that which systems are interdependent?",
        o: [
          "Education, culture, and recreation",
          "Agriculture, industry, and commerce",
          "Transportation, land use, and community design",
          "Health, water, and sanitation"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What type of development patterns are associated with greater car dependency, congestion, and pollution?",
        o: [
          "Mixed-use, compact developments",
          "Pedestrian-friendly neighborhoods",
          "Car-centered development patterns",
          "Transit-oriented developments"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to the handout, how do compact, mixed-use developments affect transportation behavior?",
        o: [
          "They increase dependence on private vehicles",
          "They reduce travel distances and encourage walking, cycling, and public transport use",
          "They create more parking demand",
          "They lead to higher road construction costs"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The handout states that equity in integrated urban planning is a central concern because access to transportation affects access to which opportunities?",
        o: [
          "Sports, tourism, and entertainment",
          "Employment, education, and healthcare",
          "Housing, banking, and retail",
          "Agriculture, manufacturing, and exports"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following best describes the handout's stance on sanitation infrastructure investment?",
        o: [
          "It is primarily an engineering concern unrelated to public health",
          "It is a preventive public health strategy that reduces healthcare costs and improves quality of life",
          "It is the sole responsibility of private companies",
          "It is optional in areas with low population density"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Climate change intensifies sanitation challenges primarily by doing which of the following?",
        o: [
          "Reducing the demand for water treatment",
          "Improving natural drainage systems",
          "Placing additional strain on existing sanitation systems through increased extreme weather events",
          "Decreasing urban populations"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following best describes environmental health according to the handout?",
        o: [
          "The management of industrial emissions only",
          "A focus on the relationship between the environment and human well-being",
          "The scientific study of ecosystems independent of human activity",
          "The regulation of agricultural pesticide use"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the handout identify as the effect of poor water quality on long-term health?",
        o: [
          "Improved immunity in affected populations",
          "Decreased reliance on healthcare facilities",
          "Long-term health issues including malnutrition and chronic infections",
          "No significant health impact beyond immediate illness"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does demand-side water management include?",
        o: [
          "Building new dams and reservoirs",
          "Reducing water loss, promoting efficient appliances, and encouraging responsible consumption",
          "Drilling deeper groundwater wells",
          "Increasing water import from neighboring regions"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the handout, how do walkable environments affect social cohesion?",
        o: [
          "They discourage pedestrian activity and isolate neighborhoods",
          "They increase vehicle traffic and noise",
          "Streets and public spaces designed for people encourage interaction, community engagement, and a sense of safety",
          "They reduce community identity by spreading populations"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to the handout, what role do communities and households play in water security?",
        o: [
          "No significant role; it is entirely a government responsibility",
          "Responsible water use, conservation practices, and cooperation with local water programs reduce strain on shared resources",
          "They are responsible for building all water infrastructure",
          "They manage national water allocation policies"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The handout mentions that effective public health systems depend on which three elements?",
        o: [
          "Strong police enforcement, heavy fines, and mandatory participation",
          "Transparent governance, credible information, and sustained public engagement",
          "High hospital budgets, advanced technology, and specialist doctors",
          "Government subsidies, private investment, and international aid"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to the handout, what is the significance of vegetation in urban open spaces?",
        o: [
          "It primarily serves aesthetic purposes",
          "It reduces heat buildup and mitigates the effects of urban heat islands, posing health risks during extreme weather",
          "It is mainly used for agricultural production",
          "It increases property values without environmental benefit"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following best describes the relationship between sanitation and water systems according to the handout?",
        o: [
          "They operate independently of each other",
          "Sanitation depends on water but water quality is unaffected by sanitation",
          "They are interdependent; sanitation requires water supply, and inadequate sanitation contaminates water sources",
          "Water systems are only relevant to industrial processes"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The handout states that short-term solutions focusing solely on road expansion often fail to do which of the following?",
        o: [
          "Increase vehicle capacity",
          "Address underlying mobility problems",
          "Reduce public transport usage",
          "Satisfy government infrastructure targets"
        ],
        a: 1
      },

      // ===== Identification (20) =====
      {
        type: "id",
        q: "What term refers to the pursuit of social and economic progress while ensuring the long-term protection of environmental systems and resources?",
        a: "Sustainable development"
      },
      {
        type: "id",
        q: "What is the term for the organized efforts of society to prevent disease, prolong life, and promote health at the population level?",
        a: "Public health"
      },
      {
        type: "id",
        q: "What concept expands public health by emphasizing overall well-being across the physical, mental, social, and environmental dimensions of health?",
        a: "Community wellness"
      },
      {
        type: "id",
        q: "What term refers to the increased likelihood of exposure to health risks and reduced capacity to respond to or recover from health threats?",
        a: "Vulnerability"
      },
      {
        type: "id",
        q: "What fundamental component of public health refers to the systems and practices that manage human waste, solid waste, wastewater, and drainage to protect communities from disease and environmental degradation?",
        a: "Sanitation"
      },
      {
        type: "id",
        q: "What are the social and economic conditions in which people live — such as income level, education, employment, housing quality, and access to basic services — that shape health outcomes called?",
        a: "Social determinants of health"
      },
      {
        type: "id",
        q: "What type of health initiatives focus on improving health outcomes by addressing risks at the local level before illness occurs, emphasizing prevention, early intervention, and health promotion?",
        a: "Community-based health and prevention initiatives"
      },
      {
        type: "id",
        q: "What term refers to a community or society's capacity to ensure sustainable access to adequate quantities of acceptable-quality water to sustain livelihoods, human well-being, and socio-economic development?",
        a: "Water security"
      },
      {
        type: "id",
        q: "What are the three interrelated dimensions of water security?",
        a: "Availability, accessibility, and quality"
      },
      {
        type: "id",
        q: "What term describes the excessive withdrawal of groundwater that depletes aquifers faster than they can be naturally replenished, leading to declining water tables and land subsidence?",
        a: "Over-extraction"
      },
      {
        type: "id",
        q: "What water management approach emphasizes coordination across domestic use, agriculture, industry, and environmental protection, considering the entire water cycle and interconnections between land use, water quality, and ecosystem health?",
        a: "Integrated water resource management"
      },
      {
        type: "id",
        q: "What term describes the physical systems and services that enable the movement of people and goods?",
        a: "Transportation"
      },
      {
        type: "id",
        q: "What term describes the ease and efficiency with which individuals can access destinations and opportunities?",
        a: "Mobility"
      },
      {
        type: "id",
        q: "What term refers to the extent to which the built environment supports safe, convenient, and comfortable movement on foot?",
        a: "Walkability"
      },
      {
        type: "id",
        q: "What planning approach recognizes that transportation, land use, and community design are interdependent systems, and aligns transportation infrastructure with land use to support efficient mobility and sustainable urban growth?",
        a: "Integrated urban planning"
      },
      {
        type: "id",
        q: "What health phenomenon refers to higher temperatures in cities caused by heat buildup in densely built areas, which vegetation in open spaces helps to mitigate?",
        a: "Urban heat islands"
      },
      {
        type: "id",
        q: "What type of transport — including walking and cycling — integrates regular physical activity into daily routines, reduces chronic illness risk, and produces no emissions?",
        a: "Active transport"
      },
      {
        type: "id",
        q: "Name any THREE waterborne diseases mentioned in the handout that are commonly associated with unsafe drinking water and inadequate sanitation.",
        a: "Diarrhea, cholera, and typhoid"
      },
      {
        type: "id",
        q: "What dimension of water security focuses on the ability of individuals and communities to obtain water reliably and affordably?",
        a: "Accessibility"
      },
      {
        type: "id",
        q: "What term describes the environmental health issue caused by accumulated waste, untreated sewage, and stagnant water that create habitats for pathogens and insects that spread disease?",
        a: "Breeding grounds for disease vectors"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "According to the handout, curative approaches in public health are prioritized over preventive approaches in sustainable health systems.",
        a: false
      },
      {
        type: "tf",
        q: "The handout states that health outcomes reflect not only personal behavior but also the effectiveness of community systems and governance.",
        a: true
      },
      {
        type: "tf",
        q: "Rural areas typically face higher risks of communicable disease transmission due to high population density, while urban areas suffer from limited access to healthcare.",
        a: false
      },
      {
        type: "tf",
        q: "Investing in sanitation infrastructure is described in the handout as a preventive public health strategy that reduces healthcare costs and improves quality of life.",
        a: true
      },
      {
        type: "tf",
        q: "According to the handout, water security is solely a technical issue that does not require public governance or community participation.",
        a: false
      },
      {
        type: "tf",
        q: "The handout states that mass transit produces lower emissions per passenger compared to private vehicles and contributes to improved air quality.",
        a: true
      },
      {
        type: "tf",
        q: "The handout indicates that car-centered development patterns support more sustainable urban function compared to cities prioritizing diverse and accessible transport options.",
        a: false
      },
      {
        type: "tf",
        q: "According to the handout, open spaces should be treated as essential infrastructure rather than optional amenities in urban planning.",
        a: true
      },
      {
        type: "tf",
        q: "Climate change is identified in the handout as a factor that intensifies water sustainability challenges by altering rainfall patterns and increasing the frequency of droughts and floods.",
        a: true
      },
      {
        type: "tf",
        q: "The handout states that community-based health programs are less effective than hospital-based treatments because they cannot address local cultural needs.",
        a: false
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "Sustainable development requires a shift from short-term solutions to long-term planning. It prioritizes prevention over reaction, efficiency over waste, and",
        after: "over inequality.",
        a: "inclusion"
      },
      {
        type: "fitb",
        before: "A community is considered well when its members have access to clean environments, basic services, safe living conditions, and opportunities that support",
        after: "lifestyles.",
        a: "healthy"
      },
      {
        type: "fitb",
        before: "High population density in urban areas increases the risk of",
        after: "transmission, particularly in settings with overcrowded housing and inadequate sanitation.",
        a: "communicable disease"
      },
      {
        type: "fitb",
        before: "Environmental factors also shape health risks. Poor air quality, unsafe water, inadequate waste management, and exposure to extreme weather events increase the incidence of respiratory illnesses,",
        after: "diseases, and other health conditions.",
        a: "waterborne"
      },
      {
        type: "fitb",
        before: "Sanitation should therefore be treated not only as an engineering concern but as a",
        after: "priority integrated into urban planning, environmental policy, and community development efforts.",
        a: "public health"
      },
      {
        type: "fitb",
        before: "Poverty restricts access to nutritious food, safe housing, healthcare, and education, all of which are essential to",
        after: "good health.",
        a: "maintaining"
      },
      {
        type: "fitb",
        before: "Because these determinants operate at the community and societal level, public health is a",
        after: "responsibility.",
        a: "collective"
      },
      {
        type: "fitb",
        before: "Water security refers to a community or society's capacity to ensure sustainable access to adequate quantities of acceptable-quality water to sustain livelihoods, human well-being, and",
        after: "development.",
        a: "socio-economic"
      },
      {
        type: "fitb",
        before: "Potable water is a basic human need and a fundamental public good. Access to clean drinking water is essential for survival,",
        after: ", and disease prevention.",
        a: "hygiene"
      },
      {
        type: "fitb",
        before: "Excessive groundwater withdrawal for domestic, agricultural, and industrial use depletes aquifers faster than they can be naturally",
        after: ".",
        a: "replenished"
      },
      {
        type: "fitb",
        before: "Responsible water resource management aims to ensure that water is used efficiently, equitably, and sustainably to meet present needs without compromising future",
        after: ".",
        a: "availability"
      },
      {
        type: "fitb",
        before: "Ethical water governance seeks to balance efficiency with social justice and",
        after: ".",
        a: "environmental protection"
      },
      {
        type: "fitb",
        before: "Walkable communities encourage active transport, such as walking and cycling, as viable alternatives to",
        after: "travel.",
        a: "motorized"
      },
      {
        type: "fitb",
        before: "Open spaces, such as parks, plazas, and recreational areas, are essential components of healthy urban environments. They provide areas for physical activity, social interaction, and",
        after: "balance within densely built communities.",
        a: "environmental"
      },
      {
        type: "fitb",
        before: "Efficient public transport reduces traffic congestion by decreasing the number of",
        after: "on the road.",
        a: "private vehicles"
      },
      {
        type: "fitb",
        before: "Integrated urban planning recognizes that transportation, land use, and community design are",
        after: "systems.",
        a: "interdependent"
      },
      {
        type: "fitb",
        before: "Community participation is a critical factor in the success of preventive health programs. Active resident involvement increases awareness, encourages shared responsibility, and improves compliance with",
        after: "measures.",
        a: "public health"
      },
      {
        type: "fitb",
        before: "The quality of water for consumption and daily use, particularly in preventing waterborne diseases and long-term health risks, is the dimension of water security known as",
        after: ".",
        a: "quality"
      },
      {
        type: "fitb",
        before: "Sanitation and water systems are interdependent. Effective sanitation requires an adequate water supply for waste disposal, sewage treatment, and hygiene practices. Conversely, inadequate sanitation",
        after: "water sources, creating a cycle of environmental pollution and disease transmission.",
        a: "contaminates"
      },
      {
        type: "fitb",
        before: "Long-term sustainability is a key objective of integrated urban planning. Coordinated planning emphasizes balanced transport options, environmental protection, and resilience to future challenges such as population growth and",
        after: ".",
        a: "climate change"
      }
    ];