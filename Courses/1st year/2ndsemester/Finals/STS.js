const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length) ? window.QUESTIONS : [

  // ===== Multiple Choice (70) =====

  // --- Online Learning ---
  {
    type: "mc",
    q: "Online learning is also known as which of the following? (Select the MOST complete answer)",
    o: ["Digital learning only", "E-learning, digital learning, or virtual learning", "Virtual learning and blended learning", "Distance education and e-learning"],
    a: 1
  },
  {
    type: "mc",
    q: "Which statement BEST describes online learning?",
    o: ["Instruction and learning occur in a physical classroom", "Instruction and learning occur on the Internet using digital tools or platforms", "Learning happens only through printed textbooks", "A mix of radio and television broadcasts for education"],
    a: 1
  },
  {
    type: "mc",
    q: "Unlike traditional classroom settings, online learning utilizes technology for which of the following?",
    o: ["Physical demonstrations, board work, and exams", "Content delivery, communication, and assessment", "Field trips, laboratory work, and recitations", "Printing, binding, and distributing learning materials"],
    a: 1
  },
  {
    type: "mc",
    q: "Synchronous learning is best described as:",
    o: ["Self-paced learning where students access materials at their own pace", "A combination of online and face-to-face instruction", "Real-time interaction between instructors and students", "Pre-recorded lectures submitted through an LMS"],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following tools is listed as an example used in synchronous learning?",
    o: ["Khan Academy", "Quizlet", "Google Meet", "Duolingo"],
    a: 2
  },
  {
    type: "mc",
    q: "A college professor conducts a live Zoom lecture every Monday and Wednesday at 10 AM. This is an example of:",
    o: ["Asynchronous learning", "Blended learning", "Synchronous learning", "Self-paced learning"],
    a: 2
  },
  {
    type: "mc",
    q: "Asynchronous learning includes which of the following elements?",
    o: ["Live video conferencing, chat rooms, and virtual classrooms", "Pre-recorded lectures, discussion forums, online quizzes, and other interactive elements", "Face-to-face lectures supplemented by online homework", "Scheduled group discussions via Zoom or Skype"],
    a: 1
  },
  {
    type: "mc",
    q: "Students who watch pre-recorded video lectures and submit assignments through an LMS at their own pace are engaged in:",
    o: ["Synchronous learning", "Blended learning", "Asynchronous learning", "Reactive learning"],
    a: 2
  },
  {
    type: "mc",
    q: "Blended learning is defined as:",
    o: ["Purely online education with no physical component", "Real-time online classes with synchronous tools only", "A combination of online instruction with traditional face-to-face instruction", "Self-paced learning through pre-recorded materials"],
    a: 2
  },
  {
    type: "mc",
    q: "A high school science class meets in person twice a week for lab experiments while completing lectures and quizzes online through Google Classroom. This is an example of:",
    o: ["Synchronous learning", "Asynchronous learning", "Blended learning", "Distance learning"],
    a: 2
  },
  {
    type: "mc",
    q: "What is the primary advantage of blended learning mentioned in the handout?",
    o: ["Students never need to attend class physically", "It provides flexibility while still allowing direct engagement with instructors and peers", "All assessments are automated and self-graded", "It eliminates the need for internet connectivity"],
    a: 1
  },

  // --- E-Learning Platforms: LMS ---
  {
    type: "mc",
    q: "What does LMS stand for?",
    o: ["Learning and Monitoring System", "Learning Management System", "Learner Media Service", "Lecture Management Software"],
    a: 1
  },
  {
    type: "mc",
    q: "Learning Management Systems (LMS) are platforms that can:",
    o: ["Only deliver content to students", "Manage, deliver, and track learning processes", "Only track student attendance", "Create and print physical study materials"],
    a: 1
  },
  {
    type: "mc",
    q: "Canvas LMS was launched in which year?",
    o: ["2005", "2009", "2011", "2013"],
    a: 2
  },
  {
    type: "mc",
    q: "Canvas LMS was built by:",
    o: ["Microsoft", "Google", "Instructure, Inc.", "Hanson Robotics"],
    a: 2
  },
  {
    type: "mc",
    q: "Canvas LMS is widely recognized for which of the following features?",
    o: ["Complex interface, limited mobile access, and standalone tools", "Simple interface, strong mobile access, and smooth tool integration with third-party tools", "Advanced coding environment and hardware integration", "Only offline access and physical device support"],
    a: 1
  },
  {
    type: "mc",
    q: "Which third-party tools does Canvas LMS integrate with, as mentioned in the handout?",
    o: ["Zoom and Microsoft Teams", "Google Drive and Microsoft 365", "Kahoot! and Quizlet", "Duolingo and Khan Academy"],
    a: 1
  },
  {
    type: "mc",
    q: "CYPHER Learning was formerly known as:",
    o: ["Canvas LMS", "NEO LMS", "Moodle", "Blackboard"],
    a: 1
  },
  {
    type: "mc",
    q: "CYPHER Learning is described as a:",
    o: ["Cloud-based video conferencing platform", "Global AI-powered learning platform", "Study tool for flashcard creation", "Language learning app with interactive games"],
    a: 1
  },
  {
    type: "mc",
    q: "Who founded CYPHER Learning?",
    o: ["Sal Khan", "Eric Yuan", "Graham Glass", "Luis von Ahn"],
    a: 2
  },
  {
    type: "mc",
    q: "In what year was CYPHER Learning founded?",
    o: ["2005", "2006", "2009", "2011"],
    a: 2
  },
  {
    type: "mc",
    q: "CYPHER Learning provides its LMS for which of the following groups?",
    o: ["Only universities and colleges", "Schools, businesses, and entrepreneurs", "Only government agencies", "Elementary schools only"],
    a: 1
  },

  // --- Educational Content Platforms ---
  {
    type: "mc",
    q: "Educational Content Platforms are described as platforms that provide:",
    o: ["Only video conferencing for live classes", "Subject-based content and exercises", "Tools for scheduling and attendance tracking", "AI-powered curriculum builders"],
    a: 1
  },
  {
    type: "mc",
    q: "Khan Academy was founded by:",
    o: ["Luis von Ahn", "Andrew Sutherland", "Sal Khan", "Graham Glass"],
    a: 2
  },
  {
    type: "mc",
    q: "In what year was Khan Academy founded?",
    o: ["2005", "2006", "2009", "2011"],
    a: 1
  },
  {
    type: "mc",
    q: "Khan Academy offers which of the following?",
    o: ["Only paid courses for professionals", "Educational videos, exercises, and resources for a wide range of subjects", "Only language learning through games", "Only university-level courses"],
    a: 1
  },
  {
    type: "mc",
    q: "Duolingo is best described as:",
    o: ["An LMS for schools and businesses", "A language learning platform offering courses through interactive games and lessons", "A video conferencing tool for live online classes", "A study tool for creating flashcards"],
    a: 1
  },
  {
    type: "mc",
    q: "Duolingo was co-founded by:",
    o: ["Sal Khan and Andrew Sutherland", "Eric Yuan and Graham Glass", "Luis von Ahn and Severin Hacker", "Johan Brand and Jamie Brooker"],
    a: 2
  },
  {
    type: "mc",
    q: "In what year was Duolingo co-founded?",
    o: ["2006", "2009", "2011", "2013"],
    a: 2
  },

  // --- Study Tools ---
  {
    type: "mc",
    q: "Study Tools are designed to help students with:",
    o: ["Content delivery, communication, and assessment", "Review, memorization, or practice", "Scheduling and attendance monitoring", "Creating and submitting assignments"],
    a: 1
  },
  {
    type: "mc",
    q: "Quizlet allows students to do which of the following?",
    o: ["Attend live lectures and group discussions", "Create flashcards, practice quizzes, and share study materials", "Record and upload video lectures", "Manage school timetables and calendars"],
    a: 1
  },
  {
    type: "mc",
    q: "Who founded Quizlet?",
    o: ["Sal Khan", "Johan Brand", "Andrew Sutherland", "Eric Yuan"],
    a: 2
  },
  {
    type: "mc",
    q: "How old was Andrew Sutherland when he founded Quizlet?",
    o: ["12 years old", "15 years old", "17 years old", "18 years old"],
    a: 1
  },
  {
    type: "mc",
    q: "Quizlet was founded in October 2005 and made public in:",
    o: ["October 2005", "January 2006", "January 2007", "March 2007"],
    a: 2
  },
  {
    type: "mc",
    q: "Kahoot! is described as a:",
    o: ["Cloud-based LMS launched in Norway", "Norwegian online game-based learning platform", "Language learning app with AI features", "Video conferencing tool for synchronous classes"],
    a: 1
  },
  {
    type: "mc",
    q: "Kahoot! was launched in:",
    o: ["2009", "2011", "2012", "2013"],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following was a founder of Kahoot!?",
    o: ["Sal Khan", "Professor Alf Inge Wang", "Andrew Sutherland", "Graham Glass"],
    a: 1
  },
  {
    type: "mc",
    q: "The interactive multiple-choice quizzes created on Kahoot! are called:",
    o: ["Flashcards", "Kahoots", "Quizlets", "Modules"],
    a: 1
  },
  {
    type: "mc",
    q: "Kahoot! engages students by utilizing:",
    o: ["Leaderboards, timers, and music", "Pre-recorded videos and discussion forums", "Breakout rooms and virtual backgrounds", "Channels and file sharing"],
    a: 0
  },

  // --- Video Conferencing Tools ---
  {
    type: "mc",
    q: "Video Conferencing Tools primarily support which type of learning?",
    o: ["Asynchronous learning", "Blended learning only", "Synchronous learning and online interaction", "Self-paced learning"],
    a: 2
  },
  {
    type: "mc",
    q: "Zoom provides which of the following features?",
    o: ["Leaderboards, timers, and music", "Screen sharing, virtual backgrounds, and breakout rooms", "Channels, file sharing, and Microsoft 365 integration", "Flashcards, quizzes, and study materials"],
    a: 1
  },
  {
    type: "mc",
    q: "Who founded Zoom?",
    o: ["Graham Glass", "Eric Yuan", "Luis von Ahn", "Johan Brand"],
    a: 1
  },
  {
    type: "mc",
    q: "Zoom was officially launched in:",
    o: ["2011", "2012", "2013", "2014"],
    a: 2
  },
  {
    type: "mc",
    q: "Microsoft Teams was launched by Microsoft in:",
    o: ["2013", "2015", "2017", "2019"],
    a: 2
  },
  {
    type: "mc",
    q: "Microsoft Teams organizes conversations by:",
    o: ["Folders and subfolders", "Channels", "Leaderboards", "Breakout rooms"],
    a: 1
  },
  {
    type: "mc",
    q: "Microsoft Teams integrates with which suite of tools?",
    o: ["Google Workspace", "Adobe Creative Cloud", "Microsoft 365", "Apple iWork"],
    a: 2
  },

  // --- Digital Divide ---
  {
    type: "mc",
    q: "The digital divide in the Philippines refers to the gap between individuals, communities, and regions that:",
    o: ["Use different social media platforms", "Have access to modern ICTs and those that do not", "Prefer online learning over traditional classroom learning", "Use different programming languages"],
    a: 1
  },
  {
    type: "mc",
    q: "The disparity caused by the digital divide affects which areas in the Philippines?",
    o: ["Only education and entertainment", "Education, employment, healthcare, and access to government services", "Only healthcare and business", "Only government services and social media"],
    a: 1
  },
  {
    type: "mc",
    q: "Geographic disparities as a driver of the digital divide means that:",
    o: ["Urban and rural areas have the same internet speeds", "Rural areas often lack infrastructure for reliable internet access", "Only coastal areas lack internet connectivity", "Cities in the Philippines have no internet access"],
    a: 1
  },
  {
    type: "mc",
    q: "Economic barriers contributing to the digital divide include:",
    o: ["Language differences between communities", "The cost of devices and internet services", "Differences in educational curriculum", "Limited availability of e-learning platforms"],
    a: 1
  },
  {
    type: "mc",
    q: "Which government initiative aims to expand internet access across the Philippines, focusing on underserved areas?",
    o: ["Bayanihan Act only", "DepEd's Learning Continuity Plan only", "National Broadband Plan", "GILAS program"],
    a: 2
  },
  {
    type: "mc",
    q: "Programs like DepEd's Learning Continuity Plan and the Bayanihan Act support students by:",
    o: ["Building new school buildings in rural areas", "Providing devices and internet subsidies", "Training teachers in advanced AI tools", "Subsidizing international e-learning platforms"],
    a: 1
  },
  {
    type: "mc",
    q: "The GILAS program stands for:",
    o: ["General Internet Literacy and Access for Schools", "Gearing Up Internet Literacy and Access for Students", "Government Initiative for Learning and Academic Support", "Global Internet Literacy Advancement for Students"],
    a: 1
  },
  {
    type: "mc",
    q: "The GILAS program aims to provide internet access and digital literacy to:",
    o: ["Private universities across the Philippines", "Public secondary schools in the Philippines", "All government offices and agencies", "Elementary schools in Metro Manila"],
    a: 1
  },
  {
    type: "mc",
    q: "The GILAS program was handed over to DepEd in:",
    o: ["2005", "2009", "2011", "2013"],
    a: 2
  },

  // --- Robotics ---
  {
    type: "mc",
    q: "Robotics involves designing machines that can:",
    o: ["Only follow pre-programmed scripts with no autonomy", "Perform tasks autonomously or with human control", "Only function in laboratory environments", "Only replicate human emotions and social behavior"],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following is given as an example of a robot in the handout?",
    o: ["Google Maps", "IBM Deep Blue", "Roomba", "Sophia"],
    a: 2
  },
  {
    type: "mc",
    q: "Sensors help robots understand their surroundings by detecting:",
    o: ["Only visual information through cameras", "Temperature, light, pressure, sound, and movement", "Only obstacles on the road", "Only human voice commands"],
    a: 1
  },
  {
    type: "mc",
    q: "Self-driving cars use cameras and LiDAR to detect obstacles. LiDAR stands for:",
    o: ["Light Intensity Detection and Recognition", "Light Detection and Ranging", "Laser Infrared Detection and Relay", "Linear Detection and Ranging"],
    a: 1
  },
  {
    type: "mc",
    q: "Actuators are described in the handout as functioning like:",
    o: ["The brain of the robot", "The sensors of the robot", "Muscles of the robot", "The memory of the robot"],
    a: 2
  },
  {
    type: "mc",
    q: "Actuators are typically powered by which of the following?",
    o: ["Solar energy, wind energy, or kinetic energy", "Electricity, compressed air, or hydraulic fluids", "Only batteries and solar cells", "Only electricity and fuel cells"],
    a: 1
  },
  {
    type: "mc",
    q: "Controllers in robotics serve as the 'brain' of a robot because they:",
    o: ["Detect environmental factors like temperature and sound", "Enable robot movement by functioning like muscles", "Process data from sensors, make decisions, and direct actuators", "Provide power to other robot components"],
    a: 2
  },
  {
    type: "mc",
    q: "In self-driving cars, the controller makes real-time decisions such as:",
    o: ["Choosing the best music for the passenger", "When to steer, accelerate, or brake to avoid obstacles", "Displaying maps and navigation routes", "Communicating with traffic authorities"],
    a: 1
  },

  // --- AI Types by Functionality ---
  {
    type: "mc",
    q: "Artificial Intelligence (AI) enables machines to:",
    o: ["Only store and retrieve data", "Learn and solve problems", "Only respond to voice commands", "Only process images and videos"],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following is given as an example of AI in the handout?",
    o: ["Roomba", "Google Maps locating the optimal route", "Microsoft Teams", "Canvas LMS"],
    a: 1
  },
  {
    type: "mc",
    q: "Reactive Machines AI is described as the most basic type of AI because it:",
    o: ["Can learn from past experiences and store memories", "Only responds to the current input and does not store memories or learn from past experiences", "Can understand human emotions and beliefs", "Can perform tasks across multiple domains"],
    a: 1
  },
  {
    type: "mc",
    q: "IBM's Deep Blue is a classic example of which type of AI?",
    o: ["Limited Memory AI", "Theory of Mind AI", "Reactive Machines AI", "General AI"],
    a: 2
  },
  {
    type: "mc",
    q: "Limited Memory AI can use past data to make better decisions but:",
    o: ["Stores all information permanently", "Only stores information for a short period", "Cannot make any decisions", "Understands human emotions fully"],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following is an example of Limited Memory AI?",
    o: ["IBM's Deep Blue playing chess", "Sophia the Robot recognizing faces", "Self-driving cars using data from recent trips to adjust speed", "A theoretical AI that can switch between all tasks"],
    a: 2
  },
  {
    type: "mc",
    q: "Theory of Mind AI aims to understand:",
    o: ["Only factual information from databases", "Human emotions, beliefs, intentions, and social interactions", "Only language patterns and grammar rules", "Only physical obstacles in the environment"],
    a: 1
  },
  {
    type: "mc",
    q: "The current status of Theory of Mind AI is:",
    o: ["Fully realized and widely deployed", "Still under development and has not yet been fully realized", "Available only for military applications", "Abandoned due to ethical concerns"],
    a: 1
  },
  {
    type: "mc",
    q: "Sophia the Robot, developed by Hanson Robotics, is an example related to which type of AI?",
    o: ["Reactive Machines AI", "Limited Memory AI", "Theory of Mind AI", "General AI"],
    a: 2
  },
  {
    type: "mc",
    q: "According to the handout, Sophia the Robot:",
    o: ["Truly grasps human thoughts and feelings", "Can recognize facial expressions and hold conversations, but only imitates emotional understanding", "Has full Limited Memory AI capabilities", "Is a fully realized Theory of Mind AI"],
    a: 1
  },

  // --- AI Types by Capabilities ---
  {
    type: "mc",
    q: "Narrow AI (Weak AI) is designed to:",
    o: ["Perform tasks across all domains like humans", "Perform a specific task and cannot go beyond what it was trained to do", "Store memories and learn from all past experiences", "Understand human emotions and social interactions"],
    a: 1
  },
  {
    type: "mc",
    q: "Generative AI is described as a form of Narrow AI that:",
    o: ["Manages and tracks learning processes", "Creates new content such as text, images, music, or code by learning patterns from large datasets", "Controls robotic actuators and sensors", "Replaces human teachers in classrooms"],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following is listed as an example of Narrow AI?",
    o: ["A theoretical AI that thinks independently", "Sophia the Robot understanding emotions", "ChatGPT answering questions based on language patterns", "IBM's Deep Blue developing emotional intelligence"],
    a: 2
  },
  {
    type: "mc",
    q: "General AI (Strong AI) is described as AI that would:",
    o: ["Perform only one specialized task", "Comprehend, learn, and apply knowledge across different tasks like humans", "Respond only to current inputs without memory", "Understand emotions but not facts"],
    a: 1
  },
  {
    type: "mc",
    q: "What is the current status of General AI according to the handout?",
    o: ["It is available only to research institutions", "It remains theoretical and does not yet exist", "It has been achieved by a few tech companies", "It exists but is kept classified"],
    a: 1
  },

  // --- Ethical Use of AI (AIM Framework) ---
  {
    type: "mc",
    q: "The AIM framework guides users in making responsible decisions when using AI and robotics. What does AIM stand for?",
    o: ["Accuracy, Intelligence, Mindfulness", "Accountability, Integrity, Mindfulness", "Autonomy, Innovation, Morality", "Adaptability, Integration, Monitoring"],
    a: 1
  },
  {
    type: "mc",
    q: "Under the AIM framework, Accountability means:",
    o: ["Being transparent about AI capabilities and avoiding biases", "Being aware of AI's impact on society, jobs, and privacy", "Being responsible for the actions and outcomes of AI and robotics systems", "Creating accurate and unbiased AI training datasets"],
    a: 2
  },
  {
    type: "mc",
    q: "Under the AIM framework, Integrity means:",
    o: ["Being responsible for unintended consequences", "Being transparent about AI and robotics capabilities and avoiding biases", "Being mindful of AI's environmental impact", "Developing AI that can understand emotions"],
    a: 1
  },
  {
    type: "mc",
    q: "Under the AIM framework, Mindfulness means:",
    o: ["Making AI systems as powerful as possible", "Being aware of AI's impact on society, jobs, and privacy", "Ensuring AI is transparent and avoids biases", "Being responsible for the outcomes of AI actions"],
    a: 1
  },
  {
    type: "mc",
    q: "Which example illustrates the Accountability principle of the AIM framework?",
    o: ["AI in hiring must be free of bias to ensure fair treatment", "In self-driving cars, companies must be accountable for accidents caused by system failures", "AI in healthcare must respect patient privacy", "Robots in farming should consider worker displacement"],
    a: 1
  },
  {
    type: "mc",
    q: "Which example illustrates the Integrity principle of the AIM framework?",
    o: ["Companies accountable for self-driving car accidents", "AI in healthcare must respect patient privacy", "AI in hiring must be free of bias to ensure fair treatment of all applicants", "Robots in farming should consider worker displacement"],
    a: 2
  },
  {
    type: "mc",
    q: "Which example illustrates the Mindfulness principle of the AIM framework?",
    o: ["Companies accountable for self-driving car system failures", "AI in hiring must be free of bias", "AI in healthcare must respect patient privacy, and robots in farming should consider worker displacement", "IBM's Deep Blue analyzing chess moves"],
    a: 2
  },

  // ===== Identification (20) =====

  {
    type: "id",
    q: "This type of online learning uses video conferencing tools like Zoom, Skype, and Google Meet to provide real-time interaction between instructors and students.",
    a: "Synchronous Learning"
  },
  {
    type: "id",
    q: "This type of online learning is self-paced, allowing students to access materials and complete assignments at their own convenience through pre-recorded lectures and discussion forums.",
    a: "Asynchronous Learning"
  },
  {
    type: "id",
    q: "This type of online learning combines online instruction with traditional face-to-face instruction.",
    a: "Blended Learning"
  },
  {
    type: "id",
    q: "This cloud-based LMS launched in 2011, built by Instructure, Inc., is widely recognized for its simple interface, strong mobile access, and smooth integration with Google Drive and Microsoft 365.",
    a: "Canvas LMS"
  },
  {
    type: "id",
    q: "Formerly known as NEO LMS, this global AI-powered learning platform was founded by Graham Glass in 2009 to provide personalized, automated, and engaging learning experiences.",
    a: "CYPHER Learning"
  },
  {
    type: "id",
    q: "Founded by Sal Khan in 2006, this educational content platform offers educational videos, exercises, and resources for a wide range of subjects.",
    a: "Khan Academy"
  },
  {
    type: "id",
    q: "Co-founded by Luis von Ahn and Severin Hacker in 2011, this language learning platform offers courses through interactive games and lessons.",
    a: "Duolingo"
  },
  {
    type: "id",
    q: "Founded by a 15-year-old student in October 2005 and made public in January 2007, this study tool allows students to create flashcards, practice quizzes, and share study materials.",
    a: "Quizlet"
  },
  {
    type: "id",
    q: "This Norwegian online game-based learning platform launched in 2012 allows educators to create interactive multiple-choice quizzes and engages students using music, timers, and leaderboards.",
    a: "Kahoot!"
  },
  {
    type: "id",
    q: "This video conferencing platform founded by Eric Yuan and officially launched in 2013 is widely used for live online classes and provides screen sharing, virtual backgrounds, and breakout rooms.",
    a: "Zoom"
  },
  {
    type: "id",
    q: "This gap between individuals, communities, and regions that have access to modern ICTs and those that do not affects areas such as education, employment, healthcare, and government services in the Philippines.",
    a: "Digital Divide"
  },
  {
    type: "id",
    q: "This government initiative aims to expand internet access across the Philippines, focusing on underserved areas.",
    a: "National Broadband Plan"
  },
  {
    type: "id",
    q: "This program, which stands for Gearing Up Internet Literacy and Access for Students, aims to provide internet access and digital literacy to public secondary schools in the Philippines and was handed over to DepEd in 2011.",
    a: "GILAS"
  },
  {
    type: "id",
    q: "This basic component of robots detects factors such as temperature, light, pressure, sound, and movement to help robots understand their surroundings.",
    a: "Sensors"
  },
  {
    type: "id",
    q: "This basic component of robots enables movement by functioning like muscles, performing actions such as turning wheels, lifting arms, or rotating joints, powered by electricity, compressed air, or hydraulic fluids.",
    a: "Actuators"
  },
  {
    type: "id",
    q: "This basic component of robots serves as the 'brain': it processes data from sensors, makes decisions, and directs actuators to perform tasks.",
    a: "Controllers"
  },
  {
    type: "id",
    q: "This is the most basic type of AI. It does not store memories or learn from past experiences; it only responds to the current input. IBM's Deep Blue is a classic example.",
    a: "Reactive Machines AI"
  },
  {
    type: "id",
    q: "This type of AI, which includes most AI systems used today, can use past data to make better decisions but only stores information for a short period. Self-driving cars and virtual assistants like Siri and Alexa are examples.",
    a: "Limited Memory AI"
  },
  {
    type: "id",
    q: "This form of Narrow AI creates new content such as text, images, music, or code by learning patterns from large datasets. Tools like ChatGPT and DALL·E are examples.",
    a: "Generative AI"
  },
  {
    type: "id",
    q: "This ethical framework guides users in making responsible decisions when using AI and robotics, standing for Accountability, Integrity, and Mindfulness.",
    a: "AIM framework"
  }
];