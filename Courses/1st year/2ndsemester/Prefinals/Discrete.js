const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
  // ===== Multiple Choice (50) =====
  {
    type: "mc",
    q: "What is Number Theory?",
    o: [
      "A branch of mathematics concerned with integers and their properties",
      "A branch of mathematics focused on real numbers and calculus",
      "A study of geometric shapes and their measurements",
      "A branch of mathematics dealing with probability and statistics"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What does $d \\mid n$ mean?",
    o: [
      "d does not divide n",
      "d divides n if there is no remainder on the division",
      "d is less than n",
      "d is a multiple of n"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the notation for 'd does not divide n'?",
    o: [
      "$d \\mid n$",
      "$d \\nmid n$",
      "$n \\mid d$",
      "$d \\div n$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 2 divides $n$ if:",
    o: [
      "the sum of digits is even",
      "the last digit of the number is even (0, 2, 4, 6, or 8)",
      "the number ends in 0",
      "the last two digits form a number divisible by 2"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 3 divides $n$ if:",
    o: [
      "the last digit is divisible by 3",
      "the number ends in 0 or 3",
      "the sum of the digits is divisible by 3",
      "the last two digits are divisible by 3"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 4 divides $n$ if:",
    o: [
      "the last digit is divisible by 4",
      "the sum of digits is divisible by 4",
      "the number formed by the last two (2) digits is divisible by 4",
      "the number is even and divisible by 2"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 5 divides $n$ if:",
    o: [
      "the last digit is 5",
      "the last digit is either 0 or 5",
      "the sum of digits is divisible by 5",
      "the last two digits are divisible by 5"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 6 divides $n$ if:",
    o: [
      "the last digit is 0 or 6",
      "the sum of digits is divisible by 6",
      "it is divisible by 2 and it is divisible by 3",
      "the last two digits are divisible by 6"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "To check if 7 divides $n$, which procedure is used?",
    o: [
      "Check if the sum of all digits is divisible by 7",
      "Check if the last digit is 0 or 7",
      "Take the last digit, double it, and subtract it from the rest of the number; if the result is divisible by 7, then 7 divides $n$",
      "Check if the last three digits form a number divisible by 7"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 8 divides $n$ if:",
    o: [
      "the last digit is divisible by 8",
      "the sum of digits is divisible by 8",
      "the number formed by the last two digits is divisible by 8",
      "the number formed by the last three digits is divisible by 8"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 9 divides $n$ if:",
    o: [
      "the last digit is 9",
      "the sum of the digits is divisible by 9",
      "the last two digits form a number divisible by 9",
      "the number is divisible by 3 twice"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 10 divides $n$ if:",
    o: [
      "the last digit is even",
      "the sum of digits is divisible by 10",
      "the last digit is 0",
      "the last two digits are 00"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 11 divides $n$ if:",
    o: [
      "the sum of digits is divisible by 11",
      "the last digit is 0 or 1",
      "the difference between the sum of one set of alternate digits and the sum of the other set of alternate digits (from left to right) is 0 or divisible by 11",
      "the last two digits form a number divisible by 11"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the divisibility rule, 12 divides $n$ if:",
    o: [
      "the number is divisible by 2 and by 6",
      "the sum of digits is divisible by 12",
      "the number is divisible by both 3 and 4",
      "the last digit is 0 or 2"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Does $2 \\mid 128$?",
    o: [
      "No, because 128 is odd",
      "Yes, because the last digit (8) is even",
      "No, because the sum of digits is not even",
      "Yes, because 1+2+8 = 11 is odd"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Does $3 \\mid 381$?",
    o: [
      "No, because 381 is not even",
      "No, because the last digit is not divisible by 3",
      "Yes, because the sum of digits $3+8+1=12$ is divisible by 3",
      "Yes, because the last two digits (81) are divisible by 3"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Does $4 \\mid 1312$?",
    o: [
      "No, because the sum of digits is not divisible by 4",
      "Yes, because the last two digits (12) are divisible by 4",
      "No, because 1312 is not divisible by 8",
      "Yes, because the last digit (2) is even"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Does $5 \\mid 809$?",
    o: [
      "Yes, because 809 is odd",
      "Yes, because the last digit is 9",
      "No, because the last digit (9) is neither 0 nor 5",
      "No, because 809 is not even"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Does $9 \\mid 1629$?",
    o: [
      "No, because $1+6+2+9=18$ is not divisible by 9",
      "Yes, because $1+6+2+9=18$ is divisible by 9",
      "Yes, because the last digit is 9",
      "No, because 1629 is odd"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Does $10 \\mid 220$?",
    o: [
      "No, because 220 is not divisible by 5",
      "Yes, because the last digit of 220 is 0",
      "No, because the sum of digits is not 10",
      "Yes, because 220 is even"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What are prime numbers?",
    o: [
      "Positive integers greater than 0 that can only be divided by themselves",
      "Positive integers greater than 1 that cannot be divided by any number except themselves and 1",
      "Positive integers that are divisible by exactly two factors including zero",
      "Integers that have no factors other than zero"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What are composite numbers?",
    o: [
      "Positive integers greater than 1 that are not prime; divisible by at least one number (a factor) other than itself",
      "Positive integers that are only divisible by themselves and 1",
      "Integers that have exactly two prime factors",
      "Negative integers that have multiple factors"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "In the Sieve of Eratosthenes, why is the number 1 crossed off?",
    o: [
      "Because 1 is a composite number",
      "Because 1 is even",
      "Because all primes are greater than 1",
      "Because 1 is a multiple of every number"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the Sieve of Eratosthenes, after keeping 2, what is the next step?",
    o: [
      "Cross off the multiples of 2",
      "Double the number 2",
      "Find the sum of all numbers up to 2",
      "Divide every number by 2"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Which of the following is a prime number?",
    o: [
      "24",
      "28",
      "29",
      "20"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following is a composite number?",
    o: [
      "11",
      "17",
      "23",
      "12"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "What is the Greatest Common Factor (GCF)?",
    o: [
      "The smallest integer that is a common multiple of all the given integers",
      "The largest non-zero integer $d$ that is a common divisor of all the given integers",
      "The product of all prime factors of the given integers",
      "The sum of all common divisors of the given integers"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the Least Common Multiple (LCM)?",
    o: [
      "The largest non-zero integer that is a common divisor of all given integers",
      "The smallest prime factor of the given integers",
      "The smallest integer that is a common multiple of all the given integers",
      "The product of the given integers"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The GCF is denoted by:",
    o: [
      "$\\text{lcm}(a, b)$",
      "$\\text{gcd}(a) \\times \\text{gcd}(b)$",
      "$\\text{gcf}(a, b)$",
      "$\\text{prime}(a, b)$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The LCM is denoted by:",
    o: [
      "$\\text{gcf}(a, b)$",
      "$\\text{lcm}(a, b)$",
      "$\\text{lce}(a, b)$",
      "$\\text{mcl}(a, b)$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is $\\text{gcf}(375, 525)$?",
    o: [
      "5",
      "15",
      "25",
      "75"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In prime factorization, once all factors are deduced to primes, they are written:",
    o: [
      "From greatest to least",
      "In random order",
      "From least to greatest",
      "In alphabetical order"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "When finding the LCM using prime factorization, which prime divisors are selected?",
    o: [
      "The smallest power of each prime factor",
      "All prime factors without repetition",
      "The prime divisors with the greatest power of all the given integers",
      "Only the common prime factors"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the Number Systems theorem, if $k > 1$ is a positive integer and $n$ is a positive integer, $n$ can be expressed uniquely as:",
    o: [
      "$n = a_m k^m + a_{m-1} k^{m-1} + \\cdots + a_1 k + a_0$",
      "$n = a_m + a_{m-1} + \\cdots + a_1 + a_0$",
      "$n = a_m \\times a_{m-1} \\times \\cdots \\times a_1 \\times a_0$",
      "$n = k^{a_m} + k^{a_{m-1}} + \\cdots + k^{a_0}$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What is the base and digit set of the binary number system?",
    o: [
      "$k = 2$, digits: $\\{0, 1, 2\\}$",
      "$k = 2$, digits: $\\{0, 1\\}$",
      "$k = 8$, digits: $\\{0, 1\\}$",
      "$k = 2$, digits: $\\{1, 2\\}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the base and digit set of the octal number system?",
    o: [
      "$k = 8$, digits: $\\{0, 1, 2, 3, 4, 5, 6, 7\\}$",
      "$k = 8$, digits: $\\{0, 1, 2, 3, 4, 5, 6, 7, 8\\}$",
      "$k = 7$, digits: $\\{0, 1, 2, 3, 4, 5, 6, 7\\}$",
      "$k = 8$, digits: $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What is the base of the hexadecimal number system?",
    o: [
      "$k = 8$",
      "$k = 10$",
      "$k = 16$",
      "$k = 12$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The hexadecimal digit set includes:",
    o: [
      "$\\{0, 1, 2, \\ldots, 9, A, B, C, D, E, F\\}$",
      "$\\{0, 1, 2, \\ldots, 9, A, B, C, D, E, F, G\\}$",
      "$\\{1, 2, \\ldots, 9, A, B, C, D, E, F\\}$",
      "$\\{0, 1, 2, \\ldots, 9, a, b, c, d, e\\}$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What is the decimal equivalent of $(101101)_2$?",
    o: [
      "43",
      "45",
      "47",
      "53"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the binary equivalent of $(45)_{10}$?",
    o: [
      "$(110101)_2$",
      "$(101110)_2$",
      "$(101101)_2$",
      "$(111001)_2$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the decimal equivalent of $(2467)_8$?",
    o: [
      "1245",
      "1335",
      "1425",
      "1535"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the octal equivalent of $(1335)_{10}$?",
    o: [
      "$(2364)_8$",
      "$(2476)_8$",
      "$(2467)_8$",
      "$(2674)_8$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the decimal equivalent of $(BF4)_{16}$?",
    o: [
      "2960",
      "3060",
      "3160",
      "2860"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the hexadecimal equivalent of $(3060)_{10}$?",
    o: [
      "$(AF4)_{16}$",
      "$(BF4)_{16}$",
      "$(CF4)_{16}$",
      "$(BF3)_{16}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the hexadecimal system, what decimal value does the letter B represent?",
    o: [
      "10",
      "11",
      "12",
      "13"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the hexadecimal system, what decimal value does the letter F represent?",
    o: [
      "13",
      "14",
      "15",
      "16"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "When converting from decimal to binary, the remainders are read as digits starting from:",
    o: [
      "Left to right (top to bottom)",
      "The middle outward",
      "Bottom to top (last remainder first)",
      "Top to bottom (first remainder first)"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "To convert from one number system to another, it is common practice to convert first to:",
    o: [
      "Binary (base 2)",
      "Octal (base 8)",
      "Base 10 (decimal)",
      "Hexadecimal (base 16)"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the decimal number system, the digit 3 in 3854 has place value:",
    o: [
      "$10^0$",
      "$10^1$",
      "$10^2$",
      "$10^3$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "In binary $(101101)_2$, what is the place value and value of the leftmost digit 1?",
    o: [
      "Place value $2^4$, value 16",
      "Place value $2^5$, value 32",
      "Place value $2^6$, value 64",
      "Place value $2^3$, value 8"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "If $d \\mid a$ and $d \\mid b$, then $d$ is called a:",
    o: [
      "Least common multiple of $a$ and $b$",
      "Common divisor/factor of $a$ and $b$",
      "Prime factor of $a$ and $b$",
      "Greatest common multiple of $a$ and $b$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is prime factorization?",
    o: [
      "A way of expressing a number as a sum of its prime factors",
      "A way of expressing a number as a product of its prime factors",
      "A method to find all composite factors of a number",
      "A method to determine the LCM of two numbers directly"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In finding $\\text{gcf}(375, 525)$ using prime factorization, what are the common prime factors identified?",
    o: [
      "3 and 5",
      "5 and 7",
      "5 and 5",
      "3 and 3"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Does $11 \\mid 3729$?",
    o: [
      "No, because the sum of all digits is not divisible by 11",
      "Yes, because $(3+2)-(7+9)=5-16=-11$, which is divisible by 11",
      "No, because 3729 is odd",
      "Yes, because the last digit is 9"
    ],
    a: 1
  },

  // ===== Identification (20) =====
  {
    type: "id",
    q: "What symbol is used to denote 'd divides n'? (Format: d | n)",
    a: "d | n"
  },
  {
    type: "id",
    q: "Name the procedure used for finding prime numbers from 1 to 100 by crossing off multiples.",
    a: "Sieve of Eratosthenes"
  },
  {
    type: "id",
    q: "What is the notation for the Greatest Common Factor of $a$ and $b$? (Format: gcf(a, b))",
    a: "gcf(a, b)"
  },
  {
    type: "id",
    q: "What is the notation for the Least Common Multiple of $a$ and $b$? (Format: lcm(a, b))",
    a: "lcm(a, b)"
  },
  {
    type: "id",
    q: "Convert $(101101)_2$ to decimal. (Answer as integer)",
    a: "45"
  },
  {
    type: "id",
    q: "Convert $(45)_{10}$ to binary. (Format: 101101)",
    a: "101101"
  },
  {
    type: "id",
    q: "Convert $(2467)_8$ to decimal. (Answer as integer)",
    a: "1335"
  },
  {
    type: "id",
    q: "Convert $(1335)_{10}$ to octal. (Format: 2467)",
    a: "2467"
  },
  {
    type: "id",
    q: "Convert $(BF4)_{16}$ to decimal. (Answer as integer)",
    a: "3060"
  },
  {
    type: "id",
    q: "Convert $(3060)_{10}$ to hexadecimal. (Format: BF4)",
    a: "BF4"
  },
  {
    type: "id",
    q: "What is $\\text{gcf}(375, 525)$? (Answer as integer)",
    a: "25"
  },
  {
    type: "id",
    q: "In the hexadecimal system, what single letter represents the decimal value 11?",
    a: "B"
  },
  {
    type: "id",
    q: "In the hexadecimal system, what single letter represents the decimal value 15?",
    a: "F"
  },
  {
    type: "id",
    q: "What is the base $k$ of the binary number system? (Answer as integer)",
    a: "2"
  },
  {
    type: "id",
    q: "What is the base $k$ of the hexadecimal number system? (Answer as integer)",
    a: "16"
  },
  {
    type: "id",
    q: "Number Theory is a branch of mathematics concerned with ___ and their properties. (One word)",
    a: "integers"
  },
  {
    type: "id",
    q: "In the Sieve of Eratosthenes, the numbers from 1 to 100 are written in how many rows of 10? (Answer as integer)",
    a: "10"
  },
  {
    type: "id",
    q: "In the decimal-to-octal conversion of 1335: $1335 \\div 8 = 166$ remainder ___. (Answer as integer)",
    a: "7"
  },
  {
    type: "id",
    q: "What is the sum of digits of 1629, used to check divisibility by 9? (Answer as integer)",
    a: "18"
  },
  {
    type: "id",
    q: "What is the base $k$ of the octal number system? (Answer as integer)",
    a: "8"
  },

  // ===== True or False (10) =====
  {
    type: "tf",
    q: "Number Theory is a branch of mathematics concerned with integers and their properties.",
    a: true
  },
  {
    type: "tf",
    q: "$d \\mid n$ means d does not divide n.",
    a: false
  },
  {
    type: "tf",
    q: "2 divides $n$ if the last digit of $n$ is even (0, 2, 4, 6, or 8).",
    a: true
  },
  {
    type: "tf",
    q: "6 divides $n$ if it is divisible by 2 and divisible by 4.",
    a: false
  },
  {
    type: "tf",
    q: "Prime numbers are positive integers greater than 1 that cannot be divided by any number except themselves and 1.",
    a: true
  },
  {
    type: "tf",
    q: "Composite numbers are positive integers that are greater than 1 and are not prime.",
    a: true
  },
  {
    type: "tf",
    q: "The Greatest Common Factor (GCF) is the smallest integer that is a common multiple of all the given integers.",
    a: false
  },
  {
    type: "tf",
    q: "$(101101)_2 = (45)_{10}$",
    a: true
  },
  {
    type: "tf",
    q: "In the hexadecimal system, the digits include letters A through G.",
    a: false
  },
  {
    type: "tf",
    q: "To convert from one number system to another, it is common practice to convert first to base 10.",
    a: true
  },

  // ===== Fill in the Blank (10) =====
  {
    type: "fitb",
    before: "$d \\mid n$; $d$ divides $n$ if there is",
    after: "on the division.",
    a: "no remainder"
  },
  {
    type: "fitb",
    before: "3 divides $n$ if the",
    after: "is divisible by 3.",
    a: "sum of the digits"
  },
  {
    type: "fitb",
    before: "8 divides $n$ if the number formed by the last",
    after: "digits is divisible by 8.",
    a: "three (3)"
  },
  {
    type: "fitb",
    before: "These are positive integers greater than 1 that cannot be divided by any number except themselves and 1:",
    after: ".",
    a: "Prime numbers"
  },
  {
    type: "fitb",
    before: "If $d \\mid a$ and $d \\mid b$, then $d$ is a common",
    after: "of $a$ and $b$.",
    a: "divisor/factor"
  },
  {
    type: "fitb",
    before: "The least common multiple is denoted by",
    after: ".",
    a: "lcm(a, b)"
  },
  {
    type: "fitb",
    before: "According to the Number Systems theorem, if $n$ is a positive integer, it can be expressed uniquely in the form: $n = a_m k^m + a_{m-1} k^{m-1} + \\cdots + a_1 k +$",
    after: ".",
    a: "$a_0$"
  },
  {
    type: "fitb",
    before: "In the hexadecimal number system, the base is $k =$",
    after: ".",
    a: "16"
  },
  {
    type: "fitb",
    before: "In binary to decimal conversion of $(101101)_2$: $32 + 0 + 8 + 4 + 0 + 1 =$",
    after: ".",
    a: "45"
  },
  {
    type: "fitb",
    before: "In prime factorization, when all the factors are deduced to primes, write the numbers from",
    after: ".",
    a: "least to greatest"
  }
];