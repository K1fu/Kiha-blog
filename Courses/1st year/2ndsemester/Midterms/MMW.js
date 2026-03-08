const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [

  // ===== Multiple Choice (30) =====

  {
    type: "mc",
    q: "What is Inductive Reasoning?",
    o: [
      "The process of reaching a general conclusion by examining specific examples",
      "The process of reaching a conclusion by applying general assumptions or principles",
      "The process of solving logic puzzles using charts",
      "The process of finding patterns in difference tables"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What is a conjecture?",
    o: [
      "A proven mathematical theorem",
      "A conclusion formed by inductive reasoning that may or may not be correct",
      "A definitive answer reached through deductive reasoning",
      "A formula used to find the nth term of a sequence"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Using inductive reasoning, what is the next number in the list: 3, 6, 9, 12, 15, ?",
    o: [
      "17",
      "18",
      "20",
      "21"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Using inductive reasoning, what is the next number in the list: 1, 3, 6, 10, 15, ?",
    o: [
      "18",
      "19",
      "21",
      "20"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is Deductive Reasoning?",
    o: [
      "The process of reaching a general conclusion by examining specific examples",
      "The process of forming a conjecture based on patterns",
      "The process of reaching a conclusion by applying general assumptions, procedures, or principles",
      "The process of predicting numbers in a sequence"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Consider this procedure: Pick a number, multiply by 8, add 6, divide by 2, subtract 3. What is the result in relation to the original number?",
    o: [
      "2 times the original number",
      "3 times the original number",
      "4 times the original number",
      "8 times the original number"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following correctly represents the deductive reasoning step: 'Divide the sum by 2' when the sum is $8n + 6$?",
    o: [
      "$4n + 6$",
      "$4n + 3$",
      "$8n + 3$",
      "$4n + 2$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "George Polya's problem-solving strategy consists of how many steps?",
    o: [
      "3",
      "5",
      "4",
      "6"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which is the correct order of Polya's Four-Step Problem Solving Strategy?",
    o: [
      "Devise a plan, Understand the problem, Carry out the plan, Review the solution",
      "Understand the problem, Devise a plan, Carry out the plan, Review the solution",
      "Understand the problem, Carry out the plan, Devise a plan, Review the solution",
      "Devise a plan, Carry out the plan, Understand the problem, Review the solution"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the handout, which step of Polya's strategy is 'often overlooked'?",
    o: [
      "Devise a plan",
      "Carry out the plan",
      "Review the solution",
      "Understand the problem"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "Which of the following is NOT listed as a technique under 'Devise a Plan' in Polya's strategy?",
    o: [
      "Make a table or a chart",
      "Work backwards",
      "Memorize formulas",
      "Look for a pattern"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Gauss solved the sum of the first 100 natural numbers by pairing numbers. Each pair summed to what value?",
    o: [
      "99",
      "100",
      "101",
      "50"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Using the summation formula, what is the sum of the first 100 natural numbers?",
    o: [
      "4950",
      "5000",
      "5050",
      "5100"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The summation formula for the first $n$ natural numbers is:",
    o: [
      "$\\frac{n(n-1)}{2}$",
      "$\\frac{n(n+1)}{2}$",
      "$\\frac{(n+1)(n+2)}{2}$",
      "$n(n+1)$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "How many different orders can a baseball team win exactly 2 out of 4 games?",
    o: [
      "4",
      "5",
      "6",
      "8"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "An ordered list of numbers such as 5, 14, 27, 44, 65, … is called a:",
    o: [
      "Series",
      "Sequence",
      "Set",
      "Progression table"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What does the notation $a_n$ represent?",
    o: [
      "The first term of a sequence",
      "The sum of all terms in a sequence",
      "The $n$th term of a sequence",
      "The difference between consecutive terms"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "For the nth-term formula: nth term $= dn + (a - d)$, what does $d$ represent?",
    o: [
      "The first term of the sequence",
      "The term number",
      "The difference between successive terms",
      "The last term of the sequence"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "For the sequence 1, 4, 7, 10, …, what is the nth-term formula?",
    o: [
      "$3n + 1$",
      "$3n - 1$",
      "$3n - 2$",
      "$4n - 3$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In a difference table for the sequence 2, 5, 8, 11, 14, …, what are the first differences?",
    o: [
      "All 2",
      "All 3",
      "All 4",
      "Varying"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Using the difference table for 2, 5, 8, 11, 14, …, what is the next predicted term?",
    o: [
      "15",
      "16",
      "17",
      "18"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the difference table for 5, 14, 27, 44, 65, …, what are the second differences?",
    o: [
      "All 3",
      "All 4",
      "All 9",
      "Varying"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "For the sequence 5, 14, 27, 44, 65, …, using the difference table, what is the next predicted term?",
    o: [
      "85",
      "88",
      "90",
      "92"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In Galileo's pendulum experiment, if a pendulum has a length of 49 units, what is its period in heartbeats?",
    o: [
      "6",
      "7",
      "8",
      "9"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to Galileo's pendulum data, if the length of a pendulum is quadrupled, what happens to its period?",
    o: [
      "It quadruples",
      "It triples",
      "It doubles",
      "It stays the same"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which type of reasoning is demonstrated by: 'All home improvements cost more than the estimate. My improvement was estimated at ₱35,000. Therefore, it will cost more than ₱35,000.'?",
    o: [
      "Inductive reasoning",
      "Deductive reasoning",
      "Conjectural reasoning",
      "Pattern reasoning"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which type of reasoning is used when a tree has produced plums every other year for 10 years, so we conclude it will produce plums this year?",
    o: [
      "Deductive reasoning",
      "Logical reasoning",
      "Inductive reasoning",
      "Sequential reasoning"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the logic puzzle, what occupation did Sarah have?",
    o: [
      "Editor",
      "Banker",
      "Chef",
      "Dentist"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the logic puzzle, what occupation did Brian have?",
    o: [
      "Editor",
      "Banker",
      "Chef",
      "Dentist"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "The numbers in a sequence that are separated by commas are called the:",
    o: [
      "Elements",
      "Terms",
      "Factors",
      "Indices"
    ],
    a: 1
  },

  // ===== Identification (30) =====

  {
    type: "id",
    q: "What term refers to a conclusion formed by inductive reasoning that may or may not be correct? (Answer: one word)",
    a: "conjecture"
  },
  {
    type: "id",
    q: "What type of reasoning reaches a conclusion by applying general assumptions, procedures, or principles? (Answer: two words)",
    a: "deductive reasoning"
  },
  {
    type: "id",
    q: "What type of reasoning forms a conclusion based on the examination of specific examples? (Answer: two words)",
    a: "inductive reasoning"
  },
  {
    type: "id",
    q: "Who developed the four-step problem-solving strategy discussed in the handout? (Answer: full name)",
    a: "George Polya"
  },
  {
    type: "id",
    q: "What are the years of George Polya's birth and death? (Answer in format: YYYY-YYYY)",
    a: "1877-1985"
  },
  {
    type: "id",
    q: "What is the first step of Polya's Four-Step Problem Solving Strategy? (Answer: four words)",
    a: "Understand the problem"
  },
  {
    type: "id",
    q: "What is the second step of Polya's Four-Step Problem Solving Strategy? (Answer: three words)",
    a: "Devise a plan"
  },
  {
    type: "id",
    q: "What is the third step of Polya's Four-Step Problem Solving Strategy? (Answer: four words)",
    a: "Carry out the plan"
  },
  {
    type: "id",
    q: "What is the fourth step of Polya's Four-Step Problem Solving Strategy? (Answer: three words)",
    a: "Review the solution"
  },
  {
    type: "id",
    q: "Using the summation formula, find the sum: $1 + 2 + 3 + \\cdots + 50$. (Answer as integer)",
    a: "1275"
  },
  {
    type: "id",
    q: "What is the sum of the first 100 natural numbers as computed by Gauss? (Answer as integer)",
    a: "5050"
  },
  {
    type: "id",
    q: "In the sequence 1, 4, 7, 10, …, what is the nth-term formula? (Answer in the form: dn + c)",
    a: "3n - 2"
  },
  {
    type: "id",
    q: "What is the next number in the sequence: 3, 6, 9, 12, 15, ? (Answer as integer)",
    a: "18"
  },
  {
    type: "id",
    q: "What is the next number in the sequence: 1, 3, 6, 10, 15, ? (Answer as integer)",
    a: "21"
  },
  {
    type: "id",
    q: "In Galileo's pendulum data, each pendulum has a period that is the ______ of its length. (Answer: two words)",
    a: "square root"
  },
  {
    type: "id",
    q: "In Polya's procedure (multiply by 8, add 6, divide by 2, subtract 3), if you start with $n$, the result is: (Answer in terms of n)",
    a: "4n"
  },
  {
    type: "id",
    q: "In the logic puzzle, what occupation did Sean have? (Answer: one word)",
    a: "banker"
  },
  {
    type: "id",
    q: "In the logic puzzle, what occupation did Maria have? (Answer: one word)",
    a: "editor"
  },
  {
    type: "id",
    q: "Using the nth-term formula $dn + (a - d)$, what is the 10th term of the sequence 1, 4, 7, 10, …? (Answer as integer)",
    a: "28"
  },
  {
    type: "id",
    q: "Using the summation formula $\\frac{n(n+1)}{2}$, what is the sum of the first 10 natural numbers? (Answer as integer)",
    a: "55"
  },
  {
    type: "id",
    q: "What notation is used to designate the $n$th term of a sequence? (Answer in the form: letter with subscript)",
    a: "a_n"
  },
  {
    type: "id",
    q: "In a difference table, what are the differences of the first differences called? (Answer: two words)",
    a: "second differences"
  },
  {
    type: "id",
    q: "In a difference table, what are the differences of the second differences called? (Answer: two words)",
    a: "third differences"
  },
  {
    type: "id",
    q: "How many different orders can a baseball team win exactly 2 out of 4 games? (Answer as integer)",
    a: "6"
  },
  {
    type: "id",
    q: "In Galileo's experiment, if a pendulum has a length of 49 units, what is its period in heartbeats? (Answer as integer)",
    a: "7"
  },
  {
    type: "id",
    q: "Gauss found that 100 numbers could be grouped into how many pairs, each with a sum of 101? (Answer as integer)",
    a: "50"
  },
  {
    type: "id",
    q: "For the sequence 5, 14, 27, 44, 65, …, what is the next term predicted using the difference table? (Answer as integer)",
    a: "90"
  },
  {
    type: "id",
    q: "In the nth-term formula $dn + (a - d)$, what does $a$ represent? (Answer: three words)",
    a: "the first term"
  },
  {
    type: "id",
    q: "In the difference table for 5, 14, 27, 44, 65, …, what are all the second differences equal to? (Answer as integer)",
    a: "4"
  },
  {
    type: "id",
    q: "A list produced using a system that ensures each different order is listed once and only once is called an ______ list. (Answer: two words)",
    a: "organized list"
  },

  // ===== True or False (10) =====

  {
    type: "tf",
    q: "Inductive reasoning is the process of reaching a general conclusion by examining specific examples.",
    a: true
  },
  {
    type: "tf",
    q: "A conjecture formed by inductive reasoning is always correct.",
    a: false
  },
  {
    type: "tf",
    q: "Deductive reasoning reaches a conclusion by applying general assumptions, procedures, or principles.",
    a: true
  },
  {
    type: "tf",
    q: "According to Polya's strategy, 'Understand the Problem' is often the most overlooked step.",
    a: true
  },
  {
    type: "tf",
    q: "The summation formula for the first $n$ natural numbers is $\\frac{n(n+1)}{2}$.",
    a: true
  },
  {
    type: "tf",
    q: "George Polya was born in the United States and moved to Hungary in 1940.",
    a: false
  },
  {
    type: "tf",
    q: "In Galileo's pendulum experiment, the period of the pendulum is the square root of its length in units.",
    a: true
  },
  {
    type: "tf",
    q: "The first differences in a difference table are found by subtracting the upper right number from the upper left number.",
    a: false
  },
  {
    type: "tf",
    q: "For the sequence 1, 4, 7, 10, …, the nth-term formula is $3n - 2$.",
    a: true
  },
  {
    type: "tf",
    q: "In Polya's procedure (multiply by 8, add 6, divide by 2, subtract 3), starting with the number 10 produces a final result of 40.",
    a: true
  },

  // ===== Fill in the Blank (20) =====

  {
    type: "fitb",
    before: "Inductive Reasoning is the process of reaching a general conclusion by examining",
    after: ".",
    a: "specific examples"
  },
  {
    type: "fitb",
    before: "The conclusion formed by inductive reasoning is often called a",
    after: ", since it may or may not be correct.",
    a: "conjecture"
  },
  {
    type: "fitb",
    before: "Deductive Reasoning is the process of reaching a conclusion by applying general",
    after: ", procedures, or principles.",
    a: "assumptions"
  },
  {
    type: "fitb",
    before: "Logic Puzzles can be solved by using deductive reasoning and a",
    after: "that enables us to display the given information in a visual manner.",
    a: "chart"
  },
  {
    type: "fitb",
    before: "Polya's Four-Step Strategy: (1) Understand the problem, (2) Devise a plan, (3) Carry out the plan, (4)",
    after: ".",
    a: "Review the solution"
  },
  {
    type: "fitb",
    before: "The summation formula for the first $n$ natural numbers is: $1 + 2 + 3 + \\cdots + n =$",
    after: ".",
    a: "$\\frac{n(n+1)}{2}$"
  },
  {
    type: "fitb",
    before: "Gauss computed $50 \\times 101$ and arrived at",
    after: "as the sum of the first 100 natural numbers.",
    a: "5050"
  },
  {
    type: "fitb",
    before: "An ordered list of numbers such as 5, 14, 27, 44, 65 … is called a",
    after: ".",
    a: "sequence"
  },
  {
    type: "fitb",
    before: "The numbers in a sequence that are separated by commas are called the",
    after: "of the sequence.",
    a: "terms"
  },
  {
    type: "fitb",
    before: "The notation $a_n$ is used to designate the",
    after: "term of a sequence.",
    a: "nth"
  },
  {
    type: "fitb",
    before: "The nth-term formula is: nth term $=$",
    after: ", where $d$ is the common difference, $a$ is the first term, and $n$ is the term number.",
    a: "$dn + (a - d)$"
  },
  {
    type: "fitb",
    before: "For the sequence 1, 4, 7, 10, …, the nth-term formula simplifies to: nth term $=$",
    after: ".",
    a: "$3n - 2$"
  },
  {
    type: "fitb",
    before: "A difference table shows the differences between",
    after: "terms of the sequence.",
    a: "successive"
  },
  {
    type: "fitb",
    before: "The differences in row (1) of a difference table are called the",
    after: "of the sequence.",
    a: "first differences"
  },
  {
    type: "fitb",
    before: "The differences of the first differences are called the",
    after: ".",
    a: "second differences"
  },
  {
    type: "fitb",
    before: "The differences of the second differences are called the",
    after: ".",
    a: "third differences"
  },
  {
    type: "fitb",
    before: "In Galileo's pendulum table, the period of each pendulum equals the",
    after: "of its length in units.",
    a: "square root"
  },
  {
    type: "fitb",
    before: "George Polya was born in Hungary and moved to the United States in",
    after: ".",
    a: "1940"
  },
  {
    type: "fitb",
    before: "An organized list is a list produced using a system that ensures each of the different orders will be listed",
    after: ".",
    a: "once and only once"
  },
  {
    type: "fitb",
    before: "In Polya's procedure, starting with $n$: multiply by 8 gives $8n$; add 6 gives $8n+6$; divide by 2 gives $4n+3$; subtract 3 gives",
    after: ".",
    a: "$4n$"
  }

];