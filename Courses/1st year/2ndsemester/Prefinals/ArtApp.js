const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [

  // ===== Multiple Choice (50) =====

  {
    type: "mc",
    q: "Cave art dates back to approximately how many years ago?",
    o: ["10,000 years ago", "20,000 years ago", "40,000 years ago", "100,000 years ago"],
    a: 2
  },
  {
    type: "mc",
    q: "Which cave in France is famous for paintings of animals, human figures, and abstract symbols?",
    o: ["Altamira Cave", "Chauvet Cave", "Lascaux Cave", "El Castillo Cave"],
    a: 2
  },
  {
    type: "mc",
    q: "What natural materials did cave artists use to create paint?",
    o: ["Berries and clay", "Ochre, charcoal, and minerals mixed with animal fats or water", "Tree sap and ash", "Mud and plant dyes"],
    a: 1
  },
  {
    type: "mc",
    q: "Egyptian art flourished from approximately which time period?",
    o: ["5000 BCE to 100 BCE", "3000 BCE to 30 BCE", "1000 BCE to 500 CE", "2000 BCE to 0 CE"],
    a: 1
  },
  {
    type: "mc",
    q: "In Egyptian art, the 'hieratic scale' refers to which convention?",
    o: ["Figures painted in profile view", "Larger figures indicating higher status", "Use of gold paint for sacred subjects", "Symmetrical compositions in all artworks"],
    a: 1
  },
  {
    type: "mc",
    q: "In Egyptian art, the color green represented which concept?",
    o: ["Death and mourning", "Royalty and power", "Fertility and rebirth", "War and conquest"],
    a: 2
  },
  {
    type: "mc",
    q: "Imhotep is notable in Egyptian art history for designing which structure?",
    o: ["The Great Sphinx", "The Karnak Temple", "The Pyramid of Djoser", "The Valley of the Kings"],
    a: 2
  },
  {
    type: "mc",
    q: "Greek art (800 BCE to 30 BCE) was distinguished by naturalism in sculpture and the use of which technique to create lifelike figures with a sense of movement and balance?",
    o: ["Chiaroscuro", "Contrapposto", "Sfumato", "Tenebrism"],
    a: 1
  },
  {
    type: "mc",
    q: "Which Greek artist is renowned for the statue of Zeus at Olympia?",
    o: ["Praxiteles", "Phidias", "Myron", "Polyclitus"],
    a: 1
  },
  {
    type: "mc",
    q: "The black-figure François Vase and the red-figure Panathenaic Amphora are examples of which Greek art medium?",
    o: ["Marble sculpture", "Bronze casting", "Pottery", "Fresco painting"],
    a: 2
  },
  {
    type: "mc",
    q: "Roman art (500 BCE to 500 CE) used which architectural innovations exemplified by the Pantheon and Roman aqueducts?",
    o: ["The column and pediment", "The arch and dome", "The pyramid and obelisk", "The frieze and cornice"],
    a: 1
  },
  {
    type: "mc",
    q: "Which Roman emperor promoted idealized art styles and commissioned the Ara Pacis and the Forum of Augustus?",
    o: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
    a: 2
  },
  {
    type: "mc",
    q: "Medieval art (500 to 1400 CE) was primarily characterized by which influence?",
    o: ["Greek humanism", "The Church and religious themes", "Roman imperial power", "Trade and merchant culture"],
    a: 1
  },
  {
    type: "mc",
    q: "Which illuminated manuscript is mentioned as a notable example of monastic art contributions in Medieval art?",
    o: ["The Gutenberg Bible", "The Lindisfarne Gospels", "The Book of Kells", "The Book of Hours"],
    a: 2
  },
  {
    type: "mc",
    q: "Chinese painting's two main styles are:",
    o: ["Portraiture and calligraphy", "Landscape and calligraphy", "Landscape and sculpture", "Portraiture and landscape"],
    a: 1
  },
  {
    type: "mc",
    q: "Wang Wei was a notable Chinese artist from which dynasty?",
    o: ["Han dynasty", "Ming dynasty", "Tang dynasty", "Song dynasty"],
    a: 2
  },
  {
    type: "mc",
    q: "Ukiyo-e emerged in Japan during which period?",
    o: ["Meiji period (1868–1912)", "Edo period (1603–1868)", "Heian period (794–1185)", "Kamakura period (1185–1333)"],
    a: 1
  },
  {
    type: "mc",
    q: "The term 'ukiyo' means:",
    o: ["Floating world", "Eastern spirit", "Ancient wisdom", "Sacred land"],
    a: 0
  },
  {
    type: "mc",
    q: "Ukiyo-e artists used which technique to create color gradients and depth?",
    o: ["Impasto", "Sfumato", "Bokashi", "Pointillism"],
    a: 2
  },
  {
    type: "mc",
    q: "Katsushika Hokusai is famous for which work?",
    o: ["Fifty-Three Stations of the Tōkaidō", "The Great Wave off Kanagawa", "A Solitary Temple Amid Clearing Peaks", "Dynamism of a Dog on a Leash"],
    a: 1
  },
  {
    type: "mc",
    q: "The Renaissance emerged after which historical event that devastated Europe?",
    o: ["The Hundred Years' War", "The Fall of Rome", "The Black Death (1347–1351)", "The Crusades"],
    a: 2
  },
  {
    type: "mc",
    q: "Which Renaissance artist is known for the Mona Lisa and The Last Supper?",
    o: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    a: 2
  },
  {
    type: "mc",
    q: "Mannerism emerged in Europe around which decade?",
    o: ["1420s", "1520s", "1620s", "1720s"],
    a: 1
  },
  {
    type: "mc",
    q: "Mannerism is characterized by which stylistic features?",
    o: ["Realistic proportions and balanced compositions", "Elongated forms, exaggerated poses, and unusual spatial relationships", "Dark backgrounds with dramatic lighting", "Simple geometric shapes and flat colors"],
    a: 1
  },
  {
    type: "mc",
    q: "The term 'Baroque' derives from the Portuguese word 'barroco', meaning:",
    o: ["Golden era", "Irregular pearl", "Grand spectacle", "Dark shadow"],
    a: 1
  },
  {
    type: "mc",
    q: "Which Baroque technique features dramatic lighting that highlights certain areas while leaving much in shadow?",
    o: ["Sfumato", "Contrapposto", "Tenebrism", "Bokashi"],
    a: 2
  },
  {
    type: "mc",
    q: "Caravaggio is celebrated for his dramatic use of light and shadow in which work?",
    o: ["The Elevation of the Cross", "The Calling of Saint Matthew", "The School of Athens", "Madonna with the Long Neck"],
    a: 1
  },
  {
    type: "mc",
    q: "Rococo art emerged in which country?",
    o: ["Italy", "Spain", "England", "France"],
    a: 3
  },
  {
    type: "mc",
    q: "Rococo art is known for its ornate style featuring which common motifs?",
    o: ["Skulls, bones, and dark imagery", "Shells, flowers, and curved lines", "Geometric shapes and industrial forms", "Religious icons and gold leaf"],
    a: 1
  },
  {
    type: "mc",
    q: "Neo-Classicism revived classical styles from which ancient civilizations?",
    o: ["Egypt and Mesopotamia", "China and India", "Ancient Greece and Rome", "Persia and Babylon"],
    a: 2
  },
  {
    type: "mc",
    q: "Jacques-Louis David is known for which Neo-Classical work?",
    o: ["Liberty Leading the People", "The Death of Socrates", "The Gleaners", "The Starry Night"],
    a: 1
  },
  {
    type: "mc",
    q: "Romanticism emerged as a reaction against which movement?",
    o: ["Baroque", "Impressionism", "Neo-Classicism", "Realism"],
    a: 2
  },
  {
    type: "mc",
    q: "Eugène Delacroix is renowned for which Romantic work?",
    o: ["The Gleaners", "The Stone Breakers", "Liberty Leading the People", "La Grande Odalisque"],
    a: 2
  },
  {
    type: "mc",
    q: "Realism emerged in the mid-19th century as a reaction against which two movements?",
    o: ["Baroque and Rococo", "Romanticism and Neo-Classicism", "Impressionism and Symbolism", "Fauvism and Expressionism"],
    a: 1
  },
  {
    type: "mc",
    q: "Gustave Courbet's The Stone Breakers portrays which subject?",
    o: ["Peasant women collecting crops", "Laborers at work", "A bourgeois family at leisure", "Soldiers in battle"],
    a: 1
  },
  {
    type: "mc",
    q: "The term 'Impressionism' comes from which Claude Monet painting?",
    o: ["Water Lilies", "Impression, Sunrise", "The Haystacks Series", "Rouen Cathedral"],
    a: 1
  },
  {
    type: "mc",
    q: "Impressionist artists frequently painted 'en plein air', which means:",
    o: ["Using a thick paint technique", "Painting in complete darkness", "Painting outdoors", "Working in a group studio"],
    a: 2
  },
  {
    type: "mc",
    q: "Neo-Impressionism's most famous technique is:",
    o: ["Chiaroscuro", "Impasto", "Pointillism", "Bokashi"],
    a: 2
  },
  {
    type: "mc",
    q: "Georges Seurat pioneered Neo-Impressionism; his painting 'A Sunday Afternoon on the Island of La Grande Jatte' is a prime example of:",
    o: ["Tenebrism", "Fauvism", "Pointillism", "Cubism"],
    a: 2
  },
  {
    type: "mc",
    q: "Symbolism emerged primarily in which country?",
    o: ["Germany", "Spain", "Italy", "France"],
    a: 3
  },
  {
    type: "mc",
    q: "Paul Gauguin is a notable Symbolist figure known for which painting?",
    o: ["The Scream", "Where Do We Come From? What Are We? Where Are We Going?", "The Persistence of Memory", "Campbell's Soup Cans"],
    a: 1
  },
  {
    type: "mc",
    q: "Art Nouveau's name means which phrase in French?",
    o: ["Old Masters", "New Art", "Beautiful Life", "Pure Form"],
    a: 1
  },
  {
    type: "mc",
    q: "Antoni Gaudí is an Art Nouveau architect famous for which building?",
    o: ["The Eiffel Tower", "The Louvre", "La Sagrada Família", "St. Paul's Cathedral"],
    a: 2
  },
  {
    type: "mc",
    q: "The term 'Fauvism' comes from the French word 'fauves', meaning:",
    o: ["Bright colors", "Wild beasts", "Pure form", "Shadow play"],
    a: 1
  },
  {
    type: "mc",
    q: "Expressionism emerged particularly in which country?",
    o: ["France", "Italy", "Germany", "Russia"],
    a: 2
  },
  {
    type: "mc",
    q: "Cubism is divided into two main phases. Which phase (1907–1912) emphasized deconstructing objects into geometric shapes using a muted color palette of browns and grays?",
    o: ["Synthetic Cubism", "Analytic Cubism", "Neo-Cubism", "Abstract Cubism"],
    a: 1
  },
  {
    type: "mc",
    q: "Pablo Picasso's work 'Les Demoiselles d'Avignon' is associated with which movement?",
    o: ["Surrealism", "Futurism", "Cubism", "Fauvism"],
    a: 2
  },
  {
    type: "mc",
    q: "Futurism began in which country?",
    o: ["France", "Germany", "Russia", "Italy"],
    a: 3
  },
  {
    type: "mc",
    q: "Marcel Duchamp's 'Fountain', a urinal presented as art, is associated with which movement?",
    o: ["Surrealism", "Dadaism", "Minimalism", "Pop Art"],
    a: 1
  },
  {
    type: "mc",
    q: "Salvador Dalí's 'The Persistence of Memory' is a key work of which movement?",
    o: ["Dadaism", "Surrealism", "Expressionism", "Constructivism"],
    a: 1
  },
  {
    type: "mc",
    q: "Andy Warhol is the most famous artist of which movement?",
    o: ["Minimalism", "Conceptual Art", "Pop Art", "Optical Art"],
    a: 2
  },

  // ===== Identification (20) =====

  {
    type: "id",
    q: "This Egyptian architect designed the Pyramid of Djoser, the first large stone building.",
    a: "Imhotep"
  },
  {
    type: "id",
    q: "This Greek sculptor is known for the Aphrodite of Knidos (Cnidus), praised for its more relatable and sensual approach.",
    a: "Praxiteles"
  },
  {
    type: "id",
    q: "This Ukiyo-e artist is known for the landscape series 'Fifty-Three Stations of the Tōkaidō'.",
    a: "Utagawa Hiroshige"
  },
  {
    type: "id",
    q: "This Renaissance artist is famed for the David and the Sistine Chapel ceiling.",
    a: "Michelangelo"
  },
  {
    type: "id",
    q: "This Mannerist artist is known for 'Madonna with the Long Neck'.",
    a: "Parmigianino"
  },
  {
    type: "id",
    q: "This Baroque artist is celebrated for 'The Elevation of the Cross' and was a master of color and movement.",
    a: "Peter Paul Rubens"
  },
  {
    type: "id",
    q: "This Rococo artist depicted mythological subjects with sensuality, as seen in 'La Cage (The Cage)'.",
    a: "François Boucher"
  },
  {
    type: "id",
    q: "This Neo-Classical artist is renowned for portraits and depictions of women, such as 'La Grande Odalisque'.",
    a: "Jean-Auguste-Dominique Ingres"
  },
  {
    type: "id",
    q: "This Post-Impressionist is known for his swirling brushstrokes and vivid colors in 'The Starry Night'.",
    a: "Vincent van Gogh"
  },
  {
    type: "id",
    q: "This Post-Impressionist emphasized structure and form by breaking objects into geometric shapes, as seen in 'The Basket of Apples'.",
    a: "Paul Cézanne"
  },
  {
    type: "id",
    q: "This Expressionist artist's painting 'The Scream' epitomizes existential dread.",
    a: "Edvard Munch"
  },
  {
    type: "id",
    q: "This Cubist artist developed 'Violin and Candlestick'.",
    a: "Georges Braque"
  },
  {
    type: "id",
    q: "This Futurist painter and sculptor's work 'The City Rises' embodies Futurism's emphasis on dynamism and vitality.",
    a: "Umberto Boccioni"
  },
  {
    type: "id",
    q: "This Constructivist artist is renowned for his 'Monument to the Third International', which combined art and architecture.",
    a: "Vladimir Tatlin"
  },
  {
    type: "id",
    q: "This Op Art figure is known for 'Movement in Squares', an intricate pattern that creates optical illusions.",
    a: "Bridget Riley"
  },
  {
    type: "id",
    q: "This Minimalist artist is known for box-like sculptures such as 'Untitled', highlighting form and space.",
    a: "Donald Judd"
  },
  {
    type: "id",
    q: "This Conceptual artist is known for works emphasizing the idea behind the art, such as 'Wall Drawing #1136'.",
    a: "Sol LeWitt"
  },
  {
    type: "id",
    q: "This Installation artist is famous for 'Infinity Mirror Rooms' and 'Obliteration Room', offering immersive experiences.",
    a: "Yayoi Kusama"
  },
  {
    type: "id",
    q: "This Land artist is known for 'Spiral Jetty', a massive earthwork made from black basalt rocks at Rozel Point on the north arm of Great Salt Lake in Utah.",
    a: "Robert Smithson"
  },
  {
    type: "id",
    q: "This Performance artist is known for 'Cut Piece', where viewers were invited to cut pieces of her clothing.",
    a: "Yoko Ono"
  },

  // ===== True or False (10) =====

  {
    type: "tf",
    q: "Cave art's individual artists are known and well-documented by historians.",
    a: false
  },
  {
    type: "tf",
    q: "In Egyptian art, the ankh symbolizes life.",
    a: true
  },
  {
    type: "tf",
    q: "Greek art used only marble, and bronze was never employed for sculpture.",
    a: false
  },
  {
    type: "tf",
    q: "The Book of Kells is a notable example of an illuminated manuscript from the Medieval period.",
    a: true
  },
  {
    type: "tf",
    q: "Ukiyo-e artists primarily used oil painting rather than woodblock printing.",
    a: false
  },
  {
    type: "tf",
    q: "Baroque art emerged following the Renaissance, with the term derived from the Portuguese word 'barroco' meaning 'irregular pearl'.",
    a: true
  },
  {
    type: "tf",
    q: "Romanticism arose as a reaction in support of the strict rules of Neo-Classicism.",
    a: false
  },
  {
    type: "tf",
    q: "Surrealism emerged in the 1920s, influenced by Dadaism and Sigmund Freud's psychological theories.",
    a: true
  },
  {
    type: "tf",
    q: "Pop Art aimed to blur the lines between high art and popular culture.",
    a: true
  },
  {
    type: "tf",
    q: "Land art uses only man-made synthetic materials rather than natural elements found in the environment.",
    a: false
  },

  // ===== Fill in the Blank (20) =====

  {
    type: "fitb",
    before: "The Lascaux Cave in France features paintings of animals, human figures, and abstract symbols, suggesting that early humans used art for",
    after: "and connection with their environment.",
    a: "communication"
  },
  {
    type: "fitb",
    before: "Egyptian art featured conventions like the hieratic scale, where larger figures indicate",
    after: "status.",
    a: "higher"
  },
  {
    type: "fitb",
    before: "The primary purposes of Egyptian art were religious and",
    after: ", with artworks intended for temples or tombs.",
    a: "funerary"
  },
  {
    type: "fitb",
    before: "Roman art is marked by a focus on portraiture, especially in busts, and architectural innovations like the arch and dome, exemplified by the",
    after: "and Roman aqueducts.",
    a: "Pantheon"
  },
  {
    type: "fitb",
    before: "Medieval art is noted for its flat, symbolic representations, with figures being stylized and prioritizing",
    after: "rather than naturalism.",
    a: "spirituality"
  },
  {
    type: "fitb",
    before: "In Chinese painting, traditional works primarily use ink and brush on",
    after: "or paper.",
    a: "silk"
  },
  {
    type: "fitb",
    before: "Ukiyo-e is known for vibrant colors, bold lines, and perspective. Artists often used a technique called",
    after: "to create color gradients and depth.",
    a: "bokashi"
  },
  {
    type: "fitb",
    before: "The Renaissance emerged after the Black Death and the decline of feudalism. Renaissance art is characterized by realism, perspective, and",
    after: "compositions.",
    a: "complex"
  },
  {
    type: "fitb",
    before: "Mannerist compositions often appear unbalanced or crowded, creating a sense of",
    after: ".",
    a: "tension"
  },
  {
    type: "fitb",
    before: "Baroque artists often used chiaroscuro, creating strong contrasts between light and dark to show depth, and",
    after: ", featuring dramatic lighting that highlights certain areas while leaving much in shadow.",
    a: "tenebrism"
  },
  {
    type: "fitb",
    before: "The primary purpose of Neo-Classical art was to educate and inspire viewers. Artworks were meant to convey moral messages and celebrate virtues such as courage, loyalty, and",
    after: ".",
    a: "sacrifice"
  },
  {
    type: "fitb",
    before: "Impressionist artists frequently painted",
    after: "(outdoors) to capture the ever-changing qualities of light and atmosphere.",
    a: "en plein air"
  },
  {
    type: "fitb",
    before: "Post-Impressionism emerged roughly from",
    after: "to 1905, as a reaction against the limitations of Impressionism.",
    a: "1886"
  },
  {
    type: "fitb",
    before: "Neo-Impressionism's pointillism involves placing tiny dots of color next to each other, allowing the viewer's eye to",
    after: "them from a distance.",
    a: "blend"
  },
  {
    type: "fitb",
    before: "Dadaism emerged in the early 20th century as a reaction to",
    after: ", rejecting traditional artistic values and embracing chaos, absurdity, and spontaneity.",
    a: "World War I"
  },
  {
    type: "fitb",
    before: "Constructivism originated in 1920s",
    after: "and aimed to create art with a social purpose that was accessible to everyone.",
    a: "Russia"
  },
  {
    type: "fitb",
    before: "Optical art, or",
    after: ", became popular in the 1960s, emphasizing visual effects and optical illusions.",
    a: "Op Art"
  },
  {
    type: "fitb",
    before: "Minimalism emerged in the late 1950s as a reaction against the complexity of",
    after: ", emphasizing simplicity and clarity.",
    a: "Abstract Expressionism"
  },
  {
    type: "fitb",
    before: "In the Philippines, Luis E. Yee, Jr. (Junyee) is a pioneer of installation art, known for",
    after: ", featuring dried banana stalks and kapok pods.",
    a: "Wood Things"
  },
  {
    type: "fitb",
    before: "Body art serves various purposes, including personal expression, cultural significance, and challenging societal norms related to beauty and",
    after: ".",
    a: "body image"
  }

];