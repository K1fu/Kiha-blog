const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice =====
      {
        type: "mc",
        q: "What are the elements of art described as in the handout?",
        o: [
          "Fundamental guidelines for organizing art",
          "The building blocks that artists use to create a work of art",
          "Rules that govern visual composition",
          "Techniques used to evoke emotion"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which element of art 'gives structure and shape to artwork, guides the viewer's eye, and conveys emotion or movement'?",
        o: [
          "Shape",
          "Form",
          "Line",
          "Value"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which element of art 'provides the basic forms that make up a composition, organizes elements, and creates patterns'?",
        o: [
          "Line",
          "Texture",
          "Color",
          "Shape"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which element of art 'evokes mood, expresses emotions, creates visual interest, conveys symbolism, and highlights focal points'?",
        o: [
          "Value",
          "Color",
          "Texture",
          "Space"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which element of art 'determines the relationships between objects in composition and creates depth, perspective, and a sense of openness or confinement'?",
        o: [
          "Form",
          "Value",
          "Space",
          "Line"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which element of art 'enhances the tactile quality of artwork and makes it visually and physically interesting by indicating how surfaces would feel'?",
        o: [
          "Texture",
          "Value",
          "Form",
          "Shape"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "Which element of art 'contrasts light and dark areas, creates depth, emphasizes shapes, and gives objects a sense of solidity'?",
        o: [
          "Color",
          "Form",
          "Texture",
          "Value"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which element of art 'adds depth and realism to artwork by representing three-dimensional objects and giving them volume'?",
        o: [
          "Shape",
          "Space",
          "Form",
          "Line"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Transcreation in the arts involves which of the following?",
        o: [
          "Copying an artwork exactly as it is",
          "Reinterpreting or adapting creative works to fit new cultural contexts while preserving their essence and purpose",
          "Destroying original artworks to create new ones",
          "Translating artworks into a different language"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Van Gogh's painting 'The Courtesan (after Eisen)' (1887) draws on a print by which artist?",
        o: [
          "Katsushika Hokusai",
          "Auguste Rodin",
          "Keisai Eisen",
          "Aristide Maillol"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which factor of transcreation refers to 'changing the visual characteristics of the original piece, such as shape, color, or brushstroke, to reflect the artist's personal style'?",
        o: [
          "Transformation",
          "Appropriation",
          "Distortion",
          "Replication"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which factor of transcreation refers to 'changing the medium, format, or context of the original work to create a new experience'?",
        o: [
          "Distortion",
          "Transformation",
          "Appropriation",
          "Imitation"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which factor of transcreation refers to 'borrowing elements from an existing work and incorporating them into a new creation while maintaining identifiable references to the original'?",
        o: [
          "Distortion",
          "Transformation",
          "Plagiarism",
          "Appropriation"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What are the principles of art described as in the handout?",
        o: [
          "The building blocks that artists use to create a work of art",
          "The tools artists use to paint",
          "Fundamental guidelines for organizing the elements of art within the creation",
          "Rules that restrict an artist's freedom"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which principle of art 'ensures all elements in the composition work together harmoniously to create a cohesive whole'?",
        o: [
          "Balance",
          "Unity",
          "Emphasis",
          "Variety"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which painting by Sandro Botticelli is cited as an example of the principle of Unity?",
        o: [
          "The Starry Night",
          "Vitruvian Man",
          "The Birth of Venus",
          "The Persistence of Memory"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The principle of Balance can be symmetrical, asymmetrical, or which third type?",
        o: [
          "Linear",
          "Radial",
          "Circular",
          "Diagonal"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which painting by Vincent van Gogh demonstrates asymmetrical balance?",
        o: [
          "Bridge in the Rain (after Hiroshige)",
          "The Courtesan (after Eisen)",
          "The Starry Night",
          "Composition VIII"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which principle of art refers to 'the focal point or area that stands out and attracts the viewer's attention, often created through contrast, size, or placement'?",
        o: [
          "Unity",
          "Pattern",
          "Proportion",
          "Emphasis"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Salvador Dalí's 'The Persistence of Memory' is cited as an example of which principle?",
        o: [
          "Unity",
          "Emphasis",
          "Pattern",
          "Variety"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which principle of art refers to 'the noticeable differences between elements, enhancing their strengths and creating visual interest'?",
        o: [
          "Emphasis",
          "Proportion",
          "Contrast",
          "Balance"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Wassily Kandinsky's 'Composition VIII' is cited as an example of which principle?",
        o: [
          "Unity",
          "Contrast",
          "Pattern",
          "Proportion"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Leonardo da Vinci's 'Vitruvian Man' illustrates the concept of ideal human proportions based on the writings of which ancient architect?",
        o: [
          "Pythagoras",
          "Archimedes",
          "Vitruvius",
          "Euclid"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which principle refers to 'the arrangement of alternating or repeated elements, such as shapes, lines, colors, or motifs'?",
        o: [
          "Variety",
          "Emphasis",
          "Pattern",
          "Unity"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Katsushika Hokusai's 'The Great Wave Off Kanagawa' is cited as an example of which principle?",
        o: [
          "Unity",
          "Balance",
          "Variety",
          "Pattern"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Andy Warhol's 'Campbell's Soup Cans' is cited as an example of which principle?",
        o: [
          "Pattern",
          "Variety",
          "Emphasis",
          "Unity"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The Rule of Thirds is a compositional guideline that divides an image into how many equal parts both horizontally and vertically?",
        o: [
          "Two",
          "Four",
          "Three",
          "Five"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the Rule of Thirds, what are the intersections of the dividing lines often used as?",
        o: [
          "Borders",
          "Focal points",
          "Color guides",
          "Shadow markers"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which Swiss linguist introduced the Saussurean Model of the Sign?",
        o: [
          "Charles Sanders Peirce",
          "Erwin Panofsky",
          "Ferdinand de Saussure",
          "Roland Barthes"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to Saussure, a sign is the basic unit of meaning and is composed of which two parts?",
        o: [
          "Icon and Index",
          "Symbol and Image",
          "Signifier and Signified",
          "Form and Content"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the Saussurean Model, the 'Signifier' refers to which of the following?",
        o: [
          "The concept or meaning that the sign represents",
          "The physical form of the sign, what you perceive, such as a sound, word, shape, or image",
          "The cultural context of the image",
          "The emotional response to the sign"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the Saussurean Model, the 'Signified' refers to which of the following?",
        o: [
          "The physical form of the sign",
          "The sound of a word",
          "The concept or meaning that the signifier represents",
          "The color used in the sign"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Charles Sanders Peirce was an American philosopher who developed which theory?",
        o: [
          "Saussurean Model of the Sign",
          "Peircean Semiotics",
          "Iconographic Method",
          "Rule of Thirds"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "According to Peirce, which type of sign 'resembles the objects they represent'?",
        o: [
          "Indexes",
          "Symbols",
          "Icons",
          "Signifiers"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to Peirce, which type of sign has 'a direct connection to their objects through a causal or physical relationship'?",
        o: [
          "Icons",
          "Symbols",
          "Indexes",
          "Signifieds"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to Peirce, which type of sign has 'an arbitrary relationship to their objects'?",
        o: [
          "Icons",
          "Indexes",
          "Signifiers",
          "Symbols"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Smoke serving as an indication of fire is an example of which type of Peircean sign?",
        o: [
          "Icon",
          "Symbol",
          "Index",
          "Signifier"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "A red light meaning 'stop' due to social convention is an example of which type of Peircean sign?",
        o: [
          "Index",
          "Icon",
          "Signified",
          "Symbol"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Erwin Panofsky was a German art historian who popularized which method?",
        o: [
          "The Rule of Thirds",
          "The Saussurean Model",
          "The Iconographic Method",
          "Peircean Semiotics"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Panofsky's Primary Level (Pre-iconography) refers to which of the following?",
        o: [
          "Examining deeper symbolic and cultural meanings",
          "Recognizing and interpreting symbols and specific themes",
          "The most basic level of understanding, focusing on fundamental elements such as composition, color, and style",
          "Understanding the historical context of the artwork"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of Panofsky's three steps involves 'recognizing and interpreting symbols and specific themes in the artwork to uncover deeper meanings'?",
        o: [
          "Primary Level (Pre-iconography)",
          "Second Level (Iconography)",
          "Third Level (Iconological Analysis)",
          "Fourth Level (Contextual Analysis)"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of Panofsky's three steps 'examines the deeper symbolic and cultural meanings of the artwork, taking into account its iconographic context as well as broader historical and cultural aspects'?",
        o: [
          "Primary Level (Pre-iconography)",
          "Second Level (Iconography)",
          "Third Level (Iconological Analysis)",
          "Contextual Plane"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In Leonardo da Vinci's 'The Last Supper', identifying the 13 people at the table and the overall composition corresponds to which level of Panofsky's approach?",
        o: [
          "Second Level (Iconography)",
          "Third Level (Iconological Analysis)",
          "Primary Level (Pre-iconography)",
          "Contextual Plane"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The three planes of visual communication discussed in the handout are:",
        o: [
          "Line, Shape, and Color",
          "Semiotic, Iconic, and Contextual",
          "Icon, Index, and Symbol",
          "Primary, Secondary, and Tertiary"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The Contextual Plane considers which of the following?",
        o: [
          "Only the colors used in the artwork",
          "The physical form of signs",
          "The historical, cultural, and social context of an image",
          "The resemblance between images and their representations"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Aristide Maillol's 'La Nuit' (1902–1909) was inspired by the innovative style of which artist?",
        o: [
          "Vincent van Gogh",
          "Auguste Rodin",
          "Leonardo da Vinci",
          "Salvador Dalí"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In Van Gogh's 'Bridge in the Rain (after Hiroshige)', which factor of transcreation is primarily demonstrated?",
        o: [
          "Appropriation",
          "Transformation",
          "Distortion",
          "Imitation"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Panofsky used his iconographic method to analyze Jan van Eyck's:",
        o: [
          "The Last Supper",
          "Arnolfini Portrait",
          "The Birth of Venus",
          "Starry Night"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Samuel Peploe's 'Still Life with Coffee Pot (c. 1905)' is cited in the handout as an example of which compositional guideline?",
        o: [
          "The Golden Ratio",
          "Symmetrical Balance",
          "The Rule of Thirds",
          "The Principle of Unity"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The Semiotic Plane focuses on:",
        o: [
          "How images resemble what they represent",
          "The historical and cultural context of images",
          "How signs and symbols create meaning",
          "The physical texture of artworks"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The Iconic Plane focuses on:",
        o: [
          "How signs and symbols create meaning",
          "The historical context of the artwork",
          "How images resemble what they represent",
          "The emotional response of the viewer"
        ],
        a: 2
      },

      // ===== Identification =====
      {
        type: "id",
        q: "What term describes reinterpreting or adapting creative works to fit new cultural contexts while preserving their essence and purpose?",
        a: "Transcreation"
      },
      {
        type: "id",
        q: "What are the building blocks that artists use to create a work of art called?",
        a: "Elements of Art"
      },
      {
        type: "id",
        q: "What are the fundamental guidelines for organizing the elements of art within a creation called?",
        a: "Principles of Art"
      },
      {
        type: "id",
        q: "What element of art adds depth and realism to artwork by representing three-dimensional objects?",
        a: "Form"
      },
      {
        type: "id",
        q: "What element of art contrasts light and dark areas to create depth and emphasize shapes?",
        a: "Value"
      },
      {
        type: "id",
        q: "What principle of art refers to the distribution of visual weight in a composition?",
        a: "Balance"
      },
      {
        type: "id",
        q: "What principle of art refers to the size relationships between different elements in a composition?",
        a: "Proportion"
      },
      {
        type: "id",
        q: "What compositional guideline divides an image into three equal parts both horizontally and vertically?",
        a: "Rule of Thirds"
      },
      {
        type: "id",
        q: "What is the study of signs and how they communicate ideas called?",
        a: "Semiotics"
      },
      {
        type: "id",
        q: "Who introduced the Saussurean Model of the Sign?",
        a: "Ferdinand de Saussure"
      },
      {
        type: "id",
        q: "In the Saussurean Model, what is the physical form of the sign — what you perceive, such as a sound, word, shape, or image — called?",
        a: "Signifier"
      },
      {
        type: "id",
        q: "In the Saussurean Model, what is the concept or meaning that the signifier represents called?",
        a: "Signified"
      },
      {
        type: "id",
        q: "Who developed the Peircean Semiotics framework classifying signs into three main types?",
        a: "Charles Sanders Peirce"
      },
      {
        type: "id",
        q: "In Peircean Semiotics, what type of signs resemble the objects they represent?",
        a: "Icons"
      },
      {
        type: "id",
        q: "In Peircean Semiotics, what type of signs have a direct connection to their objects through a causal or physical relationship?",
        a: "Indexes"
      },
      {
        type: "id",
        q: "In Peircean Semiotics, what type of signs have an arbitrary relationship to their objects?",
        a: "Symbols"
      },
      {
        type: "id",
        q: "Who popularized the iconographic method in the 1930s to analyze medieval and Renaissance art?",
        a: "Erwin Panofsky"
      },
      {
        type: "id",
        q: "What is the first level of Panofsky's iconographic approach called?",
        a: "Primary Level (Pre-iconography)"
      },
      {
        type: "id",
        q: "What is the second level of Panofsky's iconographic approach that involves recognizing and interpreting symbols and specific themes?",
        a: "Second Level (Iconography)"
      },
      {
        type: "id",
        q: "What is the third level of Panofsky's iconographic approach that examines deeper symbolic and cultural meanings?",
        a: "Third Level (Iconological Analysis)"
      },

      // ===== True or False =====
      {
        type: "tf",
        q: "The elements of art are the building blocks that artists use to create a work of art.",
        a: true
      },
      {
        type: "tf",
        q: "Transcreation requires copying an original artwork exactly without any creative adaptation.",
        a: false
      },
      {
        type: "tf",
        q: "Distortion alters visual style, transformation changes medium or context, and appropriation borrows recognizable elements to create something new.",
        a: true
      },
      {
        type: "tf",
        q: "The Rule of Thirds divides an image into four equal parts both horizontally and vertically.",
        a: false
      },
      {
        type: "tf",
        q: "Ferdinand de Saussure was an American philosopher who developed Peircean Semiotics.",
        a: false
      },
      {
        type: "tf",
        q: "In the Saussurean Model, a sign is composed of the signifier and the signified.",
        a: true
      },
      {
        type: "tf",
        q: "Symbols in Peircean Semiotics have an arbitrary relationship to their objects based on social agreement.",
        a: true
      },
      {
        type: "tf",
        q: "The contextual plane focuses only on the visual similarity between signs and their meanings.",
        a: false
      },
      {
        type: "tf",
        q: "Panofsky's Third Level (Iconological Analysis) examines the deeper symbolic and cultural meanings of the artwork.",
        a: true
      },
      {
        type: "tf",
        q: "Variety in the principles of art refers to the use of several elements of design to hold the viewer's attention and guide the eye through and around the work of art.",
        a: true
      },

      // ===== Fill in the Blank =====
      {
        type: "fitb",
        before: "The elements of art are the",
        after: "that artists use to create a work of art.",
        a: "building blocks"
      },
      {
        type: "fitb",
        before: "Line gives structure and shape to artwork, guides the viewer's eye, and conveys emotion or",
        after: ".",
        a: "movement"
      },
      {
        type: "fitb",
        before: "Color evokes",
        after: ", expresses emotions, creates visual interest, conveys symbolism, and highlights focal points.",
        a: "mood"
      },
      {
        type: "fitb",
        before: "Transcreation in the arts involves reinterpreting or adapting creative works to fit new cultural contexts while preserving their",
        after: "and purpose.",
        a: "essence"
      },
      {
        type: "fitb",
        before: "Distortion refers to changing the",
        after: "of the original piece, such as shape, color, or brushstroke, to reflect the artist's personal style.",
        a: "visual characteristics"
      },
      {
        type: "fitb",
        before: "The principles of art are fundamental guidelines for",
        after: "the elements of art within the creation.",
        a: "organizing"
      },
      {
        type: "fitb",
        before: "Unity ensures all elements in the composition work together harmoniously to create a",
        after: ".",
        a: "cohesive whole"
      },
      {
        type: "fitb",
        before: "Emphasis refers to the focal point or area that stands out and attracts the viewer's attention, often created through contrast, size, or",
        after: ".",
        a: "placement"
      },
      {
        type: "fitb",
        before: "The Rule of Thirds is a compositional guideline that divides an image into three equal parts both horizontally and",
        after: ".",
        a: "vertically"
      },
      {
        type: "fitb",
        before: "The intersections of the Rule of Thirds lines are often used as",
        after: "to draw the viewer's attention to important elements of the composition.",
        a: "focal points"
      },
      {
        type: "fitb",
        before: "Semiotics is the study of",
        after: "and how they communicate ideas.",
        a: "signs"
      },
      {
        type: "fitb",
        before: "According to Saussure, a sign is the basic unit of meaning and is composed of two parts: the signifier and the",
        after: ".",
        a: "signified"
      },
      {
        type: "fitb",
        before: "The Signifier is the",
        after: "of the sign, what you perceive, such as a sound, word, shape, or image.",
        a: "physical form"
      },
      {
        type: "fitb",
        before: "Indexes are signs that have a direct connection to their objects through a causal or",
        after: "relationship.",
        a: "physical"
      },
      {
        type: "fitb",
        before: "Symbols are signs that have an",
        after: "relationship to their objects.",
        a: "arbitrary"
      },
      {
        type: "fitb",
        before: "The contextual plane considers the historical, cultural, and",
        after: "context of an image.",
        a: "social"
      },
      {
        type: "fitb",
        before: "Erwin Panofsky's Primary Level is also called",
        after: ".",
        a: "Pre-iconography"
      },
      {
        type: "fitb",
        before: "Pattern refers to the arrangement of alternating or",
        after: "elements, such as shapes, lines, colors, or motifs.",
        a: "repeated"
      },
      {
        type: "fitb",
        before: "Value",
        after: "light and dark areas, creates depth, emphasizes shapes, and gives objects a sense of solidity.",
        a: "contrasts"
      },
      {
        type: "fitb",
        before: "The three planes of visual communication are the Semiotic Plane, the Iconic Plane, and the",
        after: ".",
        a: "Contextual Plane"
      }
    ];