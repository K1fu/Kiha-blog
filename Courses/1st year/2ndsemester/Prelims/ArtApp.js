const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "Which field 'emphasizes personal engagement with artworks, allowing viewers to derive meaning through aesthetic and emotional experience'?",
        o: ["Art history", "Art appreciation", "Art criticism", "Art production"],
        a: 1
      },
      {
        type: "mc",
        q: "Which assumption states that art 'communicates emotions and ideas that resonate across cultures'?",
        o: ["Art is cultural", "Art involves experience", "Art is universal", "Art is nature"],
        a: 2
      },
      {
        type: "mc",
        q: "Which assumption of art emphasizes that it 'reflects society’s beliefs, values, and traditions'?",
        o: ["Art is universal", "Art is cultural", "Art involves experience", "Art is personal"],
        a: 1
      },
      {
        type: "mc",
        q: "According to the sources, how does art involve experience?",
        o: [
          "By isolating the artist from society",
          "By purely focusing on historical dates",
          "By engaging artists and viewers emotionally and personally",
          "By excluding sensory stimulation"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which form of 2D art 'uses pigments on surfaces like canvas or paper to portray scenes, emotions, or concepts'?",
        o: ["Drawing", "Printmaking", "Painting", "Photography"],
        a: 2
      },
      {
        type: "mc",
        q: "What technique uses 'etching, woodcut, or screen printing to reproduce artwork'?",
        o: ["Sculpture", "Printmaking", "Architecture", "Installation Art"],
        a: 1
      },
      {
        type: "mc",
        q: "Which form of 3D art 'transforms materials like stone, metal, wood, or clay into intricate figures'?",
        o: ["Architecture", "Installation Art", "Sculpture", "Painting"],
        a: 2
      },
      {
        type: "mc",
        q: "What type of art refers to 'large-scale artworks designed for specific spaces, incorporating diverse materials'?",
        o: ["Architecture", "Sculpture", "Installation Art", "2D Art"],
        a: 2
      },
      {
        type: "mc",
        q: "A chair designed by an artist that serves as seating is an example of which function of art?",
        o: ["Social Function", "Personal Function", "Physical Function", "Cultural Function"],
        a: 2
      },
      {
        type: "mc",
        q: "A mural that 'fosters community pride and dialogue' by depicting historical events fulfills which function?",
        o: ["Physical Function", "Social Function", "Personal Function", "Economic Function"],
        a: 1
      },
      {
        type: "mc",
        q: "Which philosopher viewed art as 'imitation' because it represents 'imperfect copies of ideal Forms'?",
        o: ["Aristotle", "Immanuel Kant", "Leo Tolstoy", "Plato"],
        a: 3
      },
      {
        type: "mc",
        q: "According to Aristotle, art serves two main purposes: to give pleasure and to...",
        o: [
          "Distort reality",
          "Teach important lessons about life",
          "Appeal to emotions over reason",
          "Create ideal forms"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Immanuel Kant's idea of 'disinterested judgment' requires viewers to focus on an artwork's...",
        o: ["Individual emotions", "Subjective tastes", "Universal aesthetic qualities", "Personal preferences"],
        a: 2
      },
      {
        type: "mc",
        q: "Which philosopher believed art is a 'means to unite people by sharing inner thoughts and feelings'?",
        o: ["Plato", "Aristotle", "Leo Tolstoy", "Immanuel Kant"],
        a: 2
      },
      {
        type: "mc",
        q: "What type of art 'realistically depicts recognizable objects, scenes, or figures'?",
        o: [
          "Non-representational art",
          "Representational art",
          "Abstract Expressionism",
          "Minimalism"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which is an example of non-representational art?",
        o: ["Portraits", "Landscapes", "Abstract Expressionism", "Still Life"],
        a: 2
      },
      {
        type: "mc",
        q: "Frida Kahlo's self-portraits are an example of which source of subject?",
        o: ["Nature", "History", "Personal Experiences", "Mythology"],
        a: 2
      },
      {
        type: "mc",
        q: "Which level of meaning refers to the 'straightforward depiction or narrative content'?",
        o: ["Symbolic", "Personal", "Literal", "Cultural"],
        a: 2
      },
      {
        type: "mc",
        q: "In the levels of meaning, a red rose symbolizing love is an example of:",
        o: ["Literal", "Symbolic", "Personal", "Physical"],
        a: 1
      },
      {
        type: "mc",
        q: "What focuses on 'craftsmanship and practicality rather than personal expression'?",
        o: ["Artists", "Artisans", "Art Curators", "Art Managers"],
        a: 1
      },
      {
        type: "mc",
        q: "Which stage of production 'pertains to the ideation process of the artist'?",
        o: ["Production", "Post-production", "Pre-production", "Exhibition"],
        a: 2
      },
      {
        type: "mc",
        q: "Which stage involves 'setting up, tweaking, and preparing the artwork for transport, display, and promotion'?",
        o: ["Pre-production", "Production", "Post-production", "Ideation"],
        a: 2
      },
      {
        type: "mc",
        q: "What term refers to the 'material or means that the artist uses to objectify their feelings or thoughts'?",
        o: ["Technique", "Medium", "Style", "Subject"],
        a: 1
      },
      {
        type: "mc",
        q: "What term refers to the 'method and process used to handle and apply' materials?",
        o: ["Medium", "Technique", "Form", "Content"],
        a: 1
      },
      {
        type: "mc",
        q: "Which GAMABA awardee was a 'renowned T’boli dreamweaver' from Lake Sebu?",
        o: ["Estelita Bantilan", "Lang Dulay", "Alonzo Saclag", "Yabing Masalon Dulo"],
        a: 1
      },
      {
        type: "mc",
        q: "Alonzo Ayutu Saclag Sr. was recognized for his mastery in which area?",
        o: ["T'nalak designs", "Mat weaving", "Kalinga music and dance", "Ikat weaving"],
        a: 2
      },
      {
        type: "mc",
        q: "What type of art event involves 'competitive bidding' organized by auction houses?",
        o: ["Art Fairs", "Art Exhibitions", "Open Studios", "Art Auctions"],
        a: 3
      },
      {
        type: "mc",
        q: "Which stakeholder 'selects, presents, and explains artworks in exhibitions'?",
        o: ["Art Manager", "Art Collector", "Art Curator", "Art Dealer"],
        a: 2
      },
      {
        type: "mc",
        q: "Which stakeholder 'facilitates the buying and selling of artworks on behalf of artists, collectors, or galleries'?",
        o: ["Art Manager", "Art Curator", "Art Dealer", "Artisan"],
        a: 2
      },
      {
        type: "mc",
        q: "Under which Republic Act was the GAMABA award institutionalized?",
        o: ["Republic Act 7355", "Republic Act 7356", "Republic Act 8293", "Republic Act 1425"],
        a: 0
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "What field studies the development of art, styles, and artists as well as their influence on society and culture?",
        a: "Art history"
      },
      {
        type: "id",
        q: "Which assumption of art notes that 'historical events and social norms influence it'?",
        a: "Art is cultural"
      },
      {
        type: "id",
        q: "What are the two dimensions of 2D art?",
        a: "Height and width"
      },
      {
        type: "id",
        q: "What are the three dimensions of 3D art?",
        a: "Height, width, and depth"
      },
      {
        type: "id",
        q: "According to the sources, what does architecture involve designing and constructing?",
        a: "Buildings and structures"
      },
      {
        type: "id",
        q: "Which function of art 'offers subjective self-expression and introspection'?",
        a: "Personal Function"
      },
      {
        type: "id",
        q: "What philosopher suggested restricting or excluding art to prevent it from distorting people's understanding of reality?",
        a: "Plato"
      },
      {
        type: "id",
        q: "What did Aristotle view as a 'portrayal of human actions, emotions, and moral dilemmas'?",
        a: "Tragedy"
      },
      {
        type: "id",
        q: "In non-representational art, what elements are used to evoke emotions or ideas instead of recognizable objects?",
        a: "Shapes, colors, forms, and textures"
      },
      {
        type: "id",
        q: "Which source of subject 'aims to document, interpret, or critique' events and periods?",
        a: "History"
      },
      {
        type: "id",
        q: "Which level of meaning 'represents the viewer’s own experiences, beliefs, and emotions'?",
        a: "Personal"
      },
      {
        type: "id",
        q: "Who 'create original works of art, expressing personal ideas and emotions'?",
        a: "Artists"
      },
      {
        type: "id",
        q: "Who is the artist known for 'Starry Night' and 'Sunflowers'?",
        a: "Vincent Van Gogh"
      },
      {
        type: "id",
        q: "Which stage of the production process refers to the 'execution of the artwork'?",
        a: "Production"
      },
      {
        type: "id",
        q: "In auditory arts, what term refers to 'the means through which sound is conveyed'?",
        a: "Medium"
      },
      {
        type: "id",
        q: "In auditory arts, what are the two listed mediums?",
        a: "Music and Voice"
      },
      {
        type: "id",
        q: "What is the English name for 'Gawad sa Manlilikha ng Bayan'?",
        a: "National Living Treasures Award"
      },
      {
        type: "id",
        q: "Who was the master of B’laan mat weaving from Sarangani awarded GAMABA in 2016?",
        a: "Estelita Tumandan Bantilan"
      },
      {
        type: "id",
        q: "Who was the master B’laan ikat weaver from Polomolok awarded GAMABA in 2016?",
        a: "Yabing Masalon Dulo"
      },
      {
        type: "id",
        q: "Which art events are 'curated displays of artwork in galleries or museums'?",
        a: "Art Exhibitions"
      },
      {
        type: "id",
        q: "Which art events are 'commercial events where galleries and dealers exhibit and sell artworks'?",
        a: "Art Fairs"
      },
      {
        type: "id",
        q: "Which art events allow visitors to 'observe the creative process and purchase artworks' at the artist's workspace?",
        a: "Open Studios"
      },
      {
        type: "id",
        q: "Who 'oversee administrative and operational aspects of artistic organizations'?",
        a: "Art Managers"
      },
      {
        type: "id",
        q: "Who 'typically build extensive collections rather than purchasing individual artworks'?",
        a: "Art Collectors"
      },
      {
        type: "id",
        q: "In visual arts, what term refers to the 'method they employ to manipulate the chosen medium'?",
        a: "Technique"
      },
      {
        type: "id",
        q: "Which philosopher believed art communicates emotions like how language conveys information?",
        a: "Leo Tolstoy"
      },
      {
        type: "id",
        q: "What is an example of a medium for architecture listed in the sources?",
        a: "Concrete, steel, glass, wood"
      },
      {
        type: "id",
        q: "What are the common forms of 2D visual arts listed in the source?",
        a: "Painting, Drawing, Printmaking"
      },
      {
        type: "id",
        q: "What are the common forms of 3D visual arts listed in the source?",
        a: "Sculpture, Architecture, Installation Art"
      },
      {
        type: "id",
        q: "What is the specific technique mentioned for combined arts involving spatial arrangements?",
        a: "Interactive elements"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "Art history emphasizes personal engagement with artworks to derive meaning.",
        a: false
      },
      {
        type: "tf",
        q: "Art is cultural because it reflects society’s beliefs, values, and traditions.",
        a: true
      },
      {
        type: "tf",
        q: "According to Plato, art appeals to reason rather than emotions.",
        a: false
      },
      {
        type: "tf",
        q: "Non-representational art emphasizes artistic expression rather than specific subjects.",
        a: true
      },
      {
        type: "tf",
        q: "A self-portrait is an example of art’s social function.",
        a: false
      },
      {
        type: "tf",
        q: "The production process in art is always strictly linear.",
        a: false
      },
      {
        type: "tf",
        q: "Artisans focus on personal expression rather than craftsmanship.",
        a: false
      },
      {
        type: "tf",
        q: "Technique refers to the material or means that the artist uses to objectify thoughts.",
        a: false
      },
      {
        type: "tf",
        q: "GAMABA awardees are recognized for their exceptional traditional craftsmanship.",
        a: true
      },
      {
        type: "tf",
        q: "Art collectors facilitate the buying and selling of artworks on behalf of artists.",
        a: false
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "Art appreciation emphasizes personal engagement with artworks, allowing viewers to derive meaning through",
        after: "and emotional experience.",
        a: "aesthetic"
      },
      {
        type: "fitb",
        before: "Art communicates emotions and ideas that",
        after: "across cultures.",
        a: "resonate"
      },
      {
        type: "fitb",
        before: "Drawing creates images with",
        after: "pens, charcoal, and other tools.",
        a: "pencils"
      },
      {
        type: "fitb",
        before: "Sculpture transforms materials like stone, metal, wood, or",
        after: "into intricate figures.",
        a: "clay"
      },
      {
        type: "fitb",
        before: "The",
        after: "Function of art provides tangible value.",
        a: "Physical"
      },
      {
        type: "fitb",
        before: "Aristotle believed that art serves two main purposes: it gives",
        after: "by turning hardships into humor and teaches important lessons.",
        a: "pleasure"
      },
      {
        type: "fitb",
        before: "According to Kant, aesthetic judgments require a",
        after: "contemplation of the artwork.",
        a: "disinterested"
      },
      {
        type: "fitb",
        before: "Representational art realistically depicts recognizable",
        after: "scenes, or figures.",
        a: "objects"
      },
      {
        type: "fitb",
        before: "Subject types are generally divided into two main types: Representational and",
        after: "art.",
        a: "Non-representational"
      },
      {
        type: "fitb",
        before: "A",
        after: "often symbolizes love or passion across cultures.",
        a: "red rose"
      },
      {
        type: "fitb",
        before: "Frida Kahlo is famous for self-portraits such as The",
        after: "Fridas.",
        a: "Two"
      },
      {
        type: "fitb",
        before: "A",
        after: "uses metalworking skills to forge tools from iron or steel.",
        a: "blacksmith"
      },
      {
        type: "fitb",
        before: "Pre-production pertains to the",
        after: "process of the artist.",
        a: "ideation"
      },
      {
        type: "fitb",
        before: "Post-production involves setting up, tweaking, and preparing the artwork for",
        after: "display, and promotion.",
        a: "transport"
      },
      {
        type: "fitb",
        before: "The National Commission for Culture and the Arts (NCCA) administers the",
        after: "(GAMABA).",
        a: "Gawad sa Manlilikha ng Bayan"
      },
      {
        type: "fitb",
        before: "Lang Dulay was celebrated for her intricate",
        after: "designs.",
        a: "T’nalak"
      },
      {
        type: "fitb",
        before: "Estelita Tumandan Bantilan is a master of",
        after: "weaving.",
        a: "mat"
      },
      {
        type: "fitb",
        before: "Managing audience engagement involves creating",
        after: "experiences through interactive exhibits.",
        a: "immersive"
      },
      {
        type: "fitb",
        before: "Art curators emphasize artistic and",
        after: "significance to educate and engage audiences.",
        a: "cultural"
      },
      {
        type: "fitb",
        before: "Art",
        after: "may operate independently or within galleries and influence market trends.",
        a: "Dealers"
      }
    ];
