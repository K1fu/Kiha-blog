const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length) ? window.QUESTIONS : [

  // ===== Multiple Choice (70) =====
  {
    type: "mc",
    q: "A function between two sets X and Y is a set of ordered pairs of the form $(x, y)$ where $x$ from set X is paired to:",
    o: [
      "Two or more elements in set Y",
      "Only one element $y$ in set Y",
      "Any number of elements in set Y",
      "No elements in set Y"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the function $A = s^2$ (area of a square), which variable is the independent variable?",
    o: [
      "$A$",
      "$s^2$",
      "$s$",
      "Both $A$ and $s$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Given $f(x) = x^2 + 1$, what is $f(2)$?",
    o: [
      "3",
      "4",
      "5",
      "6"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Given $f(x) = x^2 + 1$, what is $f(3)$?",
    o: [
      "8",
      "9",
      "10",
      "11"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "For the function $f(x) = 3x + 2$, what is $f(a) + f(0)$?",
    o: [
      "$3a + 2$",
      "$3a + 4$",
      "$3a + 6$",
      "$6a + 4$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which operation on functions is defined as $(f \\circ g)(x) = f(g(x))$?",
    o: [
      "Addition",
      "Multiplication",
      "Division",
      "Composition"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $f(x) + g(x)$?",
    o: [
      "$x^2 + x + 2$",
      "$x^2 + x - 2$",
      "$x^2 - x + 2$",
      "$x^2 - x - 2$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $f(x) - g(x)$?",
    o: [
      "$-x^2 + x + 6$",
      "$x^2 + x - 6$",
      "$-x^2 - x + 6$",
      "$x^2 - x + 6$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $f(x) \\cdot g(x)$?",
    o: [
      "$x^3 - 2x^2 - 4x + 8$",
      "$x^3 + 2x^2 + 4x - 8$",
      "$x^3 + 2x^2 - 4x - 8$",
      "$x^3 - 2x^2 + 4x + 8$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $\\frac{f(x)}{g(x)}$ in simplified form?",
    o: [
      "$x + 2$",
      "$x - 2$",
      "$\\frac{1}{x + 2}$",
      "$\\frac{1}{x - 2}$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $(f \\circ g)(x)$?",
    o: [
      "$x^2 + 2$",
      "$x^2 - 2$",
      "$x^2 + 4x$",
      "$x^2 - 4x$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given $f(x) = x + 2$ and $g(x) = x^2 - 4$, what is $(g \\circ f)(x)$?",
    o: [
      "$x^2 + 4x$",
      "$x^2 - 4x$",
      "$x^2 + 4x + 4$",
      "$x^2 + 4x - 4$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "The domain of $f(x) = \\sqrt{x}$ is:",
    o: [
      "All real numbers",
      "All positive real numbers only ($x > 0$)",
      "All non-negative real numbers ($x \\geq 0$)",
      "All negative real numbers"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The domain of $f(x) = \\frac{1}{x}$ excludes which value?",
    o: [
      "$x = 1$",
      "$x = -1$",
      "$x = 0$",
      "$x = \\infty$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The domain of $f(x) = \\log(x)$ is:",
    o: [
      "All real numbers",
      "All non-negative real numbers ($x \\geq 0$)",
      "All positive real numbers ($x > 0$)",
      "All integers"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In interval notation, $x > a$ is written as:",
    o: [
      "$[a, \\infty)$",
      "$(a, \\infty)$",
      "$(-\\infty, a)$",
      "$(-\\infty, a]$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In interval notation, $x \\leq a$ is written as:",
    o: [
      "$(a, \\infty)$",
      "$[a, \\infty)$",
      "$(-\\infty, a)$",
      "$(-\\infty, a]$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "In interval notation, $a \\leq x \\leq b$ (both endpoints included) is written as:",
    o: [
      "$(a, b)$",
      "$[a, b)$",
      "$(a, b]$",
      "$[a, b]$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "What is the domain of $f(x) = x^2 - 1$?",
    o: [
      "$(0, \\infty)$",
      "$(-\\infty, 0)$",
      "$(-\\infty, \\infty)$",
      "$[-1, \\infty)$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the domain of $f(x) = \\frac{x+1}{2-x}$?",
    o: [
      "$(-\\infty, \\infty)$",
      "$(-\\infty, 2) \\cup (2, \\infty)$",
      "$(-\\infty, -1) \\cup (-1, \\infty)$",
      "$(2, \\infty)$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "For the function $f(x) = \\sqrt{7 - x}$, which condition must be satisfied?",
    o: [
      "$7 - x > 0$, so $x < 7$",
      "$7 - x \\geq 0$, so $x \\leq 7$",
      "$7 - x \\geq 0$, so $x \\geq 7$",
      "$7 - x < 0$, so $x > 7$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In set-builder notation, the domain $(-\\infty, 2) \\cup (2, \\infty)$ is written as:",
    o: [
      "$\\{x | x \\in \\mathbb{R}, x \\neq 1\\}$",
      "$\\{x | x \\in \\mathbb{R}, x \\neq 2\\}$",
      "$\\{x | x \\in \\mathbb{R}, x > 2\\}$",
      "$\\{x | x \\in \\mathbb{R}, x < 2\\}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The symbol $f^{-1}(x)$ represents:",
    o: [
      "$\\frac{1}{f(x)}$",
      "The multiplicative inverse of $f(x)$",
      "The inverse function of $f$",
      "$[f(x)]^{-1}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the first step in finding the inverse of a function?",
    o: [
      "Switch $x$ to $y$",
      "Express $f(x)$ as variable $y$",
      "Isolate the variable $y$",
      "Replace $y$ with $f^{-1}(x)$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the inverse of $f(x) = 2x - 7$?",
    o: [
      "$f^{-1}(x) = \\frac{x - 7}{2}$",
      "$f^{-1}(x) = \\frac{x + 7}{2}$",
      "$f^{-1}(x) = 2x + 7$",
      "$f^{-1}(x) = \\frac{2}{x - 7}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the inverse of $f(x) = x^3 + 8$?",
    o: [
      "$f^{-1}(x) = \\sqrt[3]{x + 8}$",
      "$f^{-1}(x) = \\sqrt[3]{x - 8}$",
      "$f^{-1}(x) = x^3 - 8$",
      "$f^{-1}(x) = \\sqrt{x - 8}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The graph of the constant function $f(x) = c$ is:",
    o: [
      "A parabola",
      "A straight line with a slope",
      "A straight line parallel to the x-axis",
      "A V-shape"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The graph of $f(x) = x^2$ has which shape?",
    o: [
      "A straight line",
      "A parabola",
      "A V-shape",
      "An S-curve"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The graph of $f(x) = |x|$ has which characteristic shape?",
    o: [
      "A parabola",
      "An S-curve",
      "A V-shape",
      "A horizontal line"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which function graph has asymptotes — lines the curve approaches but never touches?",
    o: [
      "$f(x) = x^2$",
      "$f(x) = |x|$",
      "$f(x) = \\frac{1}{x}$",
      "$f(x) = x^3$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The graph of $f(x) = e^x$ has a horizontal asymptote at:",
    o: [
      "$y = 1$",
      "$y = -1$",
      "$x = 0$",
      "$y = 0$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "The logarithmic function $f(x) = \\ln(x)$ is the inverse of which function?",
    o: [
      "$f(x) = x^2$",
      "$f(x) = e^x$",
      "$f(x) = \\sin(x)$",
      "$f(x) = \\frac{1}{x}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The graph of $f(x) = \\sin(x)$ has a maximum value of:",
    o: [
      "2",
      "$\\pi$",
      "0",
      "1"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "The sine function $f(x) = \\sin(x)$ repeats itself every:",
    o: [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$4\\pi$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The tangent function $f(x) = \\tan(x)$ repeats itself every:",
    o: [
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$4\\pi$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The Vertical Line Test determines:",
    o: [
      "If a function is one-to-one",
      "If a graph represents a function",
      "If a function is continuous",
      "If a function has an inverse"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The Horizontal Line Test determines:",
    o: [
      "If a graph represents a function",
      "If a function is continuous",
      "If a function is one-to-one",
      "If a function has a domain restriction"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If a vertical line intersects a graph more than once, then the graph:",
    o: [
      "Is a function",
      "Is one-to-one",
      "Is not a function",
      "Is continuous"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "The formal definition of a limit states: $\\lim_{x \\to a} f(x) = L$ if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that if $0 < |x - a| < \\delta$, then:",
    o: [
      "$|f(x) - L| > \\varepsilon$",
      "$|f(x) - L| < \\varepsilon$",
      "$|f(x) - L| = \\varepsilon$",
      "$|f(x) + L| < \\varepsilon$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given $f(x) = \\frac{x^2 - 4}{x - 2}$, what is $\\lim_{x \\to 2} f(x)$?",
    o: [
      "Undefined",
      "2",
      "0",
      "4"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "In proving $\\lim_{x \\to 4}(5x - 7) = 13$, what is $\\delta$ in terms of $\\varepsilon$?",
    o: [
      "$\\delta = 5\\varepsilon$",
      "$\\delta = \\varepsilon$",
      "$\\delta = \\frac{\\varepsilon}{5}$",
      "$\\delta = \\frac{5}{\\varepsilon}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the four cases of limits, Case 2 states:",
    o: [
      "The limit exists and approaches a real number $L$",
      "The limit does not exist",
      "The limit diverges to $+\\infty$ or $-\\infty$",
      "The left limit is not equal to the right limit"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The notation $\\lim_{x \\to a^+} f(x)$ denotes:",
    o: [
      "The left-handed limit",
      "The right-handed limit",
      "The two-sided limit",
      "The infinite limit"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The notation $x \\to a^-$ means we approach $a$ from:",
    o: [
      "The right (positive side)",
      "Both sides equally",
      "The left (negative side)",
      "Infinity"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Given $p(x) = \\begin{cases} x - 1 & x \\leq 0 \\\\ 3x & x > 0 \\end{cases}$, what is $\\lim_{x \\to 0^+} p(x)$?",
    o: [
      "$-1$",
      "$1$",
      "$3$",
      "$0$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "Given $p(x) = \\begin{cases} x - 1 & x \\leq 0 \\\\ 3x & x > 0 \\end{cases}$, what is $\\lim_{x \\to 0^-} p(x)$?",
    o: [
      "$-1$",
      "$0$",
      "$1$",
      "$3$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "If $\\lim_{x \\to b^+} f(x) = L$ and $\\lim_{x \\to b^-} f(x) = L$, then:",
    o: [
      "$\\lim_{x \\to b} f(x)$ does not exist",
      "$\\lim_{x \\to b} f(x) = 2L$",
      "$\\lim_{x \\to b} f(x) = L$",
      "$\\lim_{x \\to b} f(x) = 0$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following is an UNDEFINED operation involving infinity?",
    o: [
      "$\\infty + \\infty$",
      "$c + \\infty$ where $c > 0$",
      "$\\infty - \\infty$",
      "$c \\times \\infty$ where $c > 0$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is $\\lim_{x \\to 0} \\frac{1}{x^2}$?",
    o: [
      "$0$",
      "$-\\infty$",
      "$1$",
      "$\\infty$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "What is $\\lim_{x \\to \\infty}(x^3 - x)$?",
    o: [
      "$0$",
      "$-\\infty$",
      "$\\infty$",
      "Undefined"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "For rational functions, if the degree of the numerator is LESS than the degree of the denominator, the limit at infinity is:",
    o: [
      "$\\infty$",
      "$-\\infty$",
      "$1$",
      "$0$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "For rational functions, if the degrees of the numerator and denominator are EQUAL, the limit at infinity is:",
    o: [
      "The ratio of the leading coefficients",
      "$0$",
      "$\\infty$",
      "Undefined"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "What is $\\lim_{x \\to \\infty} \\frac{2x^2 - 3x + 7}{x^2 + 47x + 1}$?",
    o: [
      "$0$",
      "$1$",
      "$2$",
      "$\\infty$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is $\\lim_{x \\to \\infty} \\frac{2x^3 + 3}{5x^2 + x}$?",
    o: [
      "$0$",
      "$\\frac{2}{5}$",
      "$1$",
      "$\\infty$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "For the function $f(x) = \\frac{1}{x}$, as $x$ approaches $+\\infty$, $f(x)$ approaches:",
    o: [
      "$1$",
      "$\\infty$",
      "$-\\infty$",
      "$0$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "A function $f$ is continuous at $a$ if and only if three conditions are met. Which is NOT one of these conditions?",
    o: [
      "$f(a)$ exists",
      "$\\lim_{x \\to a} f(x)$ exists",
      "$f'(a)$ exists (the derivative exists)",
      "$\\lim_{x \\to a} f(x) = f(a)$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If at least one of the three continuity conditions is not satisfied, then $f$ is said to be:",
    o: [
      "Invertible",
      "Discontinuous",
      "One-to-one",
      "Unbounded"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which type of discontinuity occurs when $\\lim_{x \\to a} f(x)$ exists but $\\lim_{x \\to a} f(x) \\neq f(a)$?",
    o: [
      "Jump discontinuity",
      "Infinite discontinuity",
      "Removable discontinuity",
      "Essential discontinuity"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which type of discontinuity is characterized by a 'jump' between curves, where the one-sided limits are not equal?",
    o: [
      "Removable discontinuity",
      "Jump discontinuity",
      "Infinite discontinuity",
      "Point discontinuity"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which type of discontinuity occurs when the limit from one side approaches positive or negative infinity?",
    o: [
      "Removable discontinuity",
      "Jump discontinuity",
      "Infinite discontinuity",
      "Asymptotic discontinuity"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If $f(x)$ and $g(x)$ are continuous at $a$, which of the following is also guaranteed to be continuous at $a$ (assuming $g(a) \\neq 0$)?",
    o: [
      "Only $f(x) + g(x)$",
      "Only $f(x) \\cdot g(x)$",
      "$f(x) \\pm g(x)$, $f(x) \\cdot g(x)$, and $\\frac{f(x)}{g(x)}$",
      "Only $\\frac{f(x)}{g(x)}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which of the following is listed as a common type of continuous function?",
    o: [
      "Piecewise functions",
      "Polynomial functions",
      "Functions with removable discontinuities",
      "Step functions"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "The square root function $f(x) = \\sqrt{x}$: which statement about its domain is correct?",
    o: [
      "It has no domain restriction; all real numbers are allowed",
      "It has a restricted domain since the square root of a negative number has no real solution",
      "It only accepts negative values",
      "It only accepts integers"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "How does the cube root function $f(x) = \\sqrt[3]{x}$ differ from the square root function in terms of domain?",
    o: [
      "It also only accepts positive values",
      "Its domain is restricted to $x \\geq 0$",
      "It does not have a restricted domain; $x$ can be negative or positive",
      "It is not a function"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If an element in set $X$ pairs with two distinct values in set $Y$, then it is:",
    o: [
      "A function",
      "A one-to-one function",
      "Not a function, but a relation",
      "An inverse function"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In the function $f(x) = 10x + 2$, the term $f(x)$ is read as:",
    o: [
      "\"f times x\"",
      "\"function of x\"",
      "\"f divided by x\"",
      "\"f plus x\""
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the limit proof for $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3} = 4$, what is $\\delta$ in terms of $\\varepsilon$?",
    o: [
      "$\\delta = \\frac{\\varepsilon}{3}$",
      "$\\delta = 3\\varepsilon$",
      "$\\delta = \\varepsilon$",
      "$\\delta = \\frac{\\varepsilon}{4}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "To find the limit from a graph, which final step must you perform?",
    o: [
      "Check that the function is defined at $x = a$",
      "Check if function values from both sides approach the same number",
      "Verify the graph passes the vertical line test",
      "Confirm the function is one-to-one"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In Case 3 of limit evaluation, 'limit diverges to $+\\infty$ or $-\\infty$' means:",
    o: [
      "$f(x)$ approaches a specific real number",
      "$f(x)$ does not approach any value",
      "The absolute value of $f(x)$ increases infinitely as $x$ approaches $b$",
      "The left and right limits differ"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "A function $f$ is continuous on an open interval $(a, b)$ if:",
    o: [
      "It is continuous only at the endpoints",
      "It is continuous at every point in the interval",
      "It is continuous at the midpoint only",
      "It has no inverse on the interval"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following is correctly classified as a common continuous function type?",
    o: [
      "Piecewise step functions",
      "Functions undefined at integers",
      "Trigonometric functions",
      "Rational functions at points where the denominator is zero"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which correctly states the requirement for the two-sided limit $\\lim_{x \\to b} f(x)$ to exist?",
    o: [
      "The left-hand limit must be greater than the right-hand limit",
      "Both one-sided limits must exist and be equal to each other",
      "Only the right-hand limit needs to exist",
      "Both limits must equal zero"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the step-by-step proof of a limit, after assuming $|x - a| < \\delta$, what is the final goal?",
    o: [
      "Show $|x - a| = 0$",
      "Show $\\delta > 0$",
      "Reach the form $|f(x) - L| < \\varepsilon$",
      "Reach the form $|f(x) + L| < \\delta$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "For a polynomial function such as $f(x) = 3x^3 - 2x + 1$, as $x$ approaches $+\\infty$, which term dominates?",
    o: [
      "$-2x$",
      "$1$",
      "$3x^3$",
      "$3x^2$"
    ],
    a: 2
  },

  // ===== Fill in the Blank (30) =====
  {
    type: "fitb",
    before: "A function between two sets X and Y is a set of ordered pairs (x, y) where x from set X is paired to only",
    after: "element y in set Y.",
    a: "one"
  },
  {
    type: "fitb",
    before: "In a function, the variable x is called the",
    after: "variable.",
    a: "independent"
  },
  {
    type: "fitb",
    before: "In a function, the variable y is called the",
    after: "variable.",
    a: "dependent"
  },
  {
    type: "fitb",
    before: "Given $f(x) = x^2 + 1$, the value of $f(1)$ is",
    after: ".",
    a: "2"
  },
  {
    type: "fitb",
    before: "For the function $f(x) = 3x + 2$, $f(0)$ equals",
    after: ".",
    a: "2"
  },
  {
    type: "fitb",
    before: "The composition operation $(f \\circ g)(x)$ means applying $f$ to the result of",
    after: ".",
    a: "g(x)"
  },
  {
    type: "fitb",
    before: "The sine function $f(x) = \\sin(x)$ has a maximum value of 1 and a minimum value of",
    after: ".",
    a: "-1"
  },
  {
    type: "fitb",
    before: "The square root of a negative number is not a real number, so the domain of $f(x) = \\sqrt{x}$ is all",
    after: "real numbers (where $x \\geq 0$).",
    a: "non-negative"
  },
  {
    type: "fitb",
    before: "In interval notation, a square bracket [ or ] is used when the set",
    after: "the endpoint (called inclusive).",
    a: "includes"
  },
  {
    type: "fitb",
    before: "The domain of $f(x) = \\sqrt{7 - x}$ requires that $(7 - x) \\geq 0$, so $x$ must be less than or equal to",
    after: ".",
    a: "7"
  },
  {
    type: "fitb",
    before: "The domain $(-\\infty, \\infty)$ means that $x$ can be any",
    after: "number.",
    a: "real"
  },
  {
    type: "fitb",
    before: "An inverse function essentially",
    after: "the effect of another function.",
    a: "reverses"
  },
  {
    type: "fitb",
    before: "The inverse notation $f^{-1}(x)$ should NOT be confused with the multiplicative inverse, which is written as",
    after: ".",
    a: "1/f(x)"
  },
  {
    type: "fitb",
    before: "To find the inverse of a function, Step 2 requires switching",
    after: "to y (swapping the two variables).",
    a: "x"
  },
  {
    type: "fitb",
    before: "The inverse of $f(x) = 2x - 7$ is $f^{-1}(x) = (x + 7)$ divided by",
    after: ".",
    a: "2"
  },
  {
    type: "fitb",
    before: "The graph of the quadratic function $f(x) = x^2$ has the shape of a",
    after: ".",
    a: "parabola"
  },
  {
    type: "fitb",
    before: "The graph of the absolute value function $f(x) = |x|$ has a characteristic",
    after: "-shape.",
    a: "V"
  },
  {
    type: "fitb",
    before: "The cosine graph repeats itself every $2\\pi$. The coefficient of $\\pi$ in its period is",
    after: ".",
    a: "2"
  },
  {
    type: "fitb",
    before: "The sine function has a period of $2\\pi$, while the tangent function's period is",
    after: "as long as sine's period.",
    a: "half"
  },
  {
    type: "fitb",
    before: "When finding a limit from a graph, if the function values from both the left and right approach the same number, that number is the",
    after: ".",
    a: "limit"
  },
  {
    type: "fitb",
    before: "In the concept of limits, the value at the x-point itself is not the primary concern — rather, what the function value",
    after: "at that point is what matters.",
    a: "approaches"
  },
  {
    type: "fitb",
    before: "The right-handed limit notation $x \\to a^+$ denotes that we approach $a$ from the",
    after: ", or from the positive side of the axis.",
    a: "right"
  },
  {
    type: "fitb",
    before: "Given $q(x) = \\begin{cases} x & x \\leq 1 \\\\ x^2 & x > 1 \\end{cases}$, the value of $\\lim_{x \\to 1^+} q(x)$ is",
    after: ".",
    a: "1"
  },
  {
    type: "fitb",
    before: "$\\infty - \\infty$ is an example of an",
    after: "operation involving infinity (it has no defined result).",
    a: "undefined"
  },
  {
    type: "fitb",
    before: "For a rational function where the numerator and denominator have equal degrees, the limit at infinity equals the ratio of the",
    after: ".",
    a: "leading coefficients"
  },
  {
    type: "fitb",
    before: "For a function $f$ to be continuous at $a$, the limit as $x$ approaches $a$ must equal",
    after: ".",
    a: "f(a)"
  },
  {
    type: "fitb",
    before: "A Removable Discontinuity occurs when $f(a)$ and $\\lim_{x \\to a} f(x)$ both exist, but the limit does",
    after: "equal $f(a)$.",
    a: "not"
  },
  {
    type: "fitb",
    before: "A Jump Discontinuity occurs when the one-sided limits from the left and right of point $a$ are not equal, meaning the two-sided limit does",
    after: ".",
    a: "not exist"
  },
  {
    type: "fitb",
    before: "A function $f$ is continuous on an open interval $(a, b)$ if it is continuous at",
    after: "point in the interval.",
    a: "every"
  },
  {
    type: "fitb",
    before: "Rational functions are continuous everywhere except at points $x$ where the denominator causes",
    after: ".",
    a: "division by zero"
  }

];