const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "What are the roots of the quadratic equation $x^2 - 5x + 6 = 0$?",
        o: ["$x = 2, 3$", "$x = -2, -3$", "$x = 1, 6$", "$x = -1, -6$"],
        a: 0
      },
      {
        type: "mc",
        q: "Find the value of $\\sin(\\frac{\\pi}{6})$.",
        o: ["$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "1"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the derivative of $f(x) = e^{2x}$?",
        o: ["$e^{2x}$", "$2e^{2x}$", "$\\frac{1}{2}e^{2x}$", "$x e^{2x}$"],
        a: 1
      },
      {
        type: "mc",
        q: "In a right triangle, if $a=3$ and $b=4$, what is the length of the hypotenuse $c$?",
        o: ["5", "7", "25", "12"],
        a: 0
      },
      {
        type: "mc",
        q: "Evaluate the limit: $\\lim_{x \\to \\infty} \\frac{3x^2 - 5}{x^2 + 2x + 1}$.",
        o: ["0", "$\\infty$", "3", "1"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the slope of a line perpendicular to $y = -\\frac{2}{3}x + 5$?",
        o: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$\\frac{3}{2}$", "$-\\frac{3}{2}$"],
        a: 2
      },
      {
        type: "mc",
        q: "Identify the identity: $\\cos^2(\\theta) + \\sin^2(\\theta) = $",
        o: ["0", "1", "$\\tan^2(\\theta)$", "$\\sec^2(\\theta)$"],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is a prime number?",
        o: ["9", "15", "21", "23"],
        a: 3
      },
      {
        type: "mc",
        q: "Find the determinant of the matrix $\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$.",
        o: ["5", "11", "8", "3"],
        a: 0
      },
      {
        type: "mc",
        q: "What is the sum of the interior angles of a hexagon?",
        o: ["$360^\\circ$", "$540^\\circ$", "$720^\\circ$", "$900^\\circ$"],
        a: 2
      },
      {
        type: "mc",
        q: "If $A$ and $B$ are independent events, $P(A \\cap B) = $",
        o: ["$P(A) + P(B)$", "$P(A) \\times P(B)$", "$P(A) / P(B)$", "$P(A) - P(B)$"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the value of $\\log_{10}(1000)$?",
        o: ["1", "2", "3", "10"],
        a: 2
      },
      {
        type: "mc",
        q: "The integral $\\int \\frac{1}{x} dx$ is equal to:",
        o: ["$x^2$", "$\\ln|x| + C$", "$e^x + C$", "$1$"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the midpoint of the segment with endpoints $(2, 4)$ and $(6, 10)$?",
        o: ["$(4, 7)$", "$(8, 14)$", "$(2, 3)$", "$(4, 3)$"],
        a: 0
      },
      {
        type: "mc",
        q: "Which property is shown: $a(b+c) = ab + ac$?",
        o: ["Associative", "Commutative", "Distributive", "Identity"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the eccentricity of a circle?",
        o: ["0", "1", "$<1$", "$>1$"],
        a: 0
      },
      {
        type: "mc",
        q: "The Taylor series for $e^x$ centered at 0 begins with:",
        o: ["$1 + x + x^2$", "$x - \\frac{x^3}{3!}$", "$1 + x + \\frac{x^2}{2!}$", "$1 - x$"],
        a: 2
      },
      {
        type: "mc",
        q: "Solve for $x$: $3^{x-1} = 27$.",
        o: ["2", "3", "4", "5"],
        a: 2
      },
      {
        type: "mc",
        q: "The area of a triangle with base $b$ and height $h$ is:",
        o: ["$bh$", "$\\frac{1}{2}bh$", "$2bh$", "$\\sqrt{bh}$"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the period of the function $f(x) = \\sin(2x)$?",
        o: ["$\\pi$", "$2\\pi$", "$\\frac{\\pi}{2}$", "$4\\pi$"],
        a: 0
      },
      {
        type: "mc",
        q: "Calculate the mean of the set $\\{2, 4, 6, 8, 10\\}$.",
        o: ["4", "5", "6", "8"],
        a: 2
      },
      {
        type: "mc",
        q: "Which test determines if a series $\\sum a_n$ converges by comparing it to $\\int_1^\\infty f(x) dx$?",
        o: ["Ratio Test", "Root Test", "Integral Test", "Divergence Test"],
        a: 2
      },
      {
        type: "mc",
        q: "The intersection of sets $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$ is:",
        o: ["$\\{1, 4\\}$", "$\\{2, 3\\}$", "$\\{1, 2, 3, 4\\}$", "$\\emptyset$"],
        a: 1
      },
      {
        type: "mc",
        q: "The derivative of $\\tan(x)$ is:",
        o: ["$\\sec(x)$", "$\\sec^2(x)$", "$\\cot(x)$", "$\\sin^2(x)$"],
        a: 1
      },
      {
        type: "mc",
        q: "If a matrix has a determinant of 0, it is said to be:",
        o: ["Identity", "Invertible", "Singular", "Orthogonal"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the volume of a sphere with radius $r$?",
        o: ["$\\pi r^2$", "$2\\pi r$", "$\\frac{4}{3}\\pi r^3$", "$4\\pi r^2$"],
        a: 2
      },
      {
        type: "mc",
        q: "Which value is the mode of $\\{1, 2, 2, 3, 4, 4, 4, 5\\}$?",
        o: ["2", "3", "4", "5"],
        a: 2
      },
      {
        type: "mc",
        q: "The sum of the first $n$ positive integers is given by:",
        o: ["$n^2$", "$\\frac{n(n+1)}{2}$", "$n(n-1)$", "$\\frac{n+1}{2}$"],
        a: 1
      },
      {
        type: "mc",
        q: "What is the limit $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x}$?",
        o: ["0", "1", "$\\infty$", "Does not exist"],
        a: 0
      },
      {
        type: "mc",
        q: "A vector with magnitude 1 is called a:",
        o: ["Zero vector", "Unit vector", "Scalar", "Normal vector"],
        a: 1
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "Solve for $x$: $5x + 7 = 22$. (Answer as integer)",
        a: "3"
      },
      {
        type: "id",
        q: "What is the value of $0!$? (Answer as integer)",
        a: "1"
      },
      {
        type: "id",
        q: "State the derivative of $f(x) = \\ln(x)$. (Answer as expression in x)",
        a: "1/x"
      },
      {
        type: "id",
        q: "What is the slope of the line $2x - y = 4$? (Answer as integer)",
        a: "2"
      },
      {
        type: "id",
        q: "Identify the name of the longest side of a right-angled triangle.",
        a: "hypotenuse"
      },
      {
        type: "id",
        q: "Evaluate: $\\sqrt[3]{64}$. (Answer as integer)",
        a: "4"
      },
      {
        type: "id",
        q: "What is the value of $\\cos(0)$? (Answer as integer)",
        a: "1"
      },
      {
        type: "id",
        q: "The point where the three medians of a triangle intersect is called the what?",
        a: "centroid"
      },
      {
        type: "id",
        q: "Find the value of $i^2$ in complex numbers. (Answer as integer)",
        a: "-1"
      },
      {
        type: "id",
        q: "What is the name for a polygon with eight sides?",
        a: "octagon"
      },
      {
        type: "id",
        q: "Evaluate the integral: $\\int_0^1 2x dx$. (Answer as integer)",
        a: "1"
      },
      {
        type: "id",
        q: "What is the GCD of 12 and 18? (Answer as integer)",
        a: "6"
      },
      {
        type: "id",
        q: "The set of all possible outcomes of an experiment is called the what?",
        a: "sample space"
      },
      {
        type: "id",
        q: "Find the value of $2^5$. (Answer as integer)",
        a: "32"
      },
      {
        type: "id",
        q: "If $f(x) = x^2$, what is $f(-4)$? (Answer as integer)",
        a: "16"
      },
      {
        type: "id",
        q: "What is the term for a number that can be expressed as $a/b$ where $b \\neq 0$?",
        a: "rational number"
      },
      {
        type: "id",
        q: "State the value of $\\pi$ rounded to 2 decimal places.",
        a: "3.14"
      },
      {
        type: "id",
        q: "What is the derivative of a constant $c$?",
        a: "0"
      },
      {
        type: "id",
        q: "Convert $180^\\circ$ to radians. (Answer in terms of $\\pi$)",
        a: "pi"
      },
      {
        type: "id",
        q: "In the equation $(x-h)^2 + (y-k)^2 = r^2$, what represents the radius?",
        a: "r"
      },
      {
        type: "id",
        q: "What is the result of $15 \\times 4$? (Answer as integer)",
        a: "60"
      },
      {
        type: "id",
        q: "Name the property: $a + b = b + a$.",
        a: "commutative property"
      },
      {
        type: "id",
        q: "Find the inverse of the function $f(x) = x + 5$. (Answer as: x - c)",
        a: "x - 5"
      },
      {
        type: "id",
        q: "What is the sum of the first three prime numbers? (Answer as integer)",
        a: "10"
      },
      {
        type: "id",
        q: "The expression $b^2 - 4ac$ is called the what?",
        a: "discriminant"
      },
      {
        type: "id",
        q: "Evaluate $\\log_2(16)$. (Answer as integer)",
        a: "4"
      },
      {
        type: "id",
        q: "What is the degree of the polynomial $P(x) = 4x^3 - 2x + 1$?",
        a: "3"
      },
      {
        type: "id",
        q: "In statistics, what is the square root of the variance?",
        a: "standard deviation"
      },
      {
        type: "id",
        q: "Solve for $x$: $|x| = 7$ where $x < 0$. (Answer as integer)",
        a: "-7"
      },
      {
        type: "id",
        q: "What is the sum of angles in a triangle? (Answer in degrees)",
        a: "180"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "The derivative of $\\cos(x)$ is $\\sin(x)$.",
        a: false
      },
      {
        type: "tf",
        q: "All squares are rectangles.",
        a: true
      },
      {
        type: "tf",
        q: "A function is continuous at a point if the limit exists and equals the function value.",
        a: true
      },
      {
        type: "tf",
        q: "The number 1 is a prime number.",
        a: false
      },
      {
        type: "tf",
        q: "The product of two negative numbers is always positive.",
        a: true
      },
      {
        type: "tf",
        q: "Parallel lines have slopes that are negative reciprocals of each other.",
        a: false
      },
      {
        type: "tf",
        q: "The identity matrix $I$ acts as the multiplicative identity for matrix multiplication.",
        a: true
      },
      {
        type: "tf",
        q: "An equilateral triangle can also be a right triangle.",
        a: false
      },
      {
        type: "tf",
        q: "$|a + b| \\leq |a| + |b|$ is known as the Triangle Inequality.",
        a: true
      },
      {
        type: "tf",
        q: "The range of $f(x) = x^2$ is all real numbers.",
        a: false
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "The Fundamental Theorem of Calculus states that $\\int_a^b f(x) dx =$",
        after: "where $F$ is the antiderivative of $f$.",
        a: "$F(b) - F(a)$"
      },
      {
        type: "fitb",
        before: "The slope-intercept form of a linear equation is",
        after: ".",
        a: "$y = mx + b$"
      },
      {
        type: "fitb",
        before: "According to Euler's formula, $e^{i\\theta} =$",
        after: ".",
        a: "$\\cos(\\theta) + i\\sin(\\theta)$"
      },
      {
        type: "fitb",
        before: "The limit $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} =$",
        after: ".",
        a: "1"
      },
      {
        type: "fitb",
        before: "The Pythagorean theorem is expressed as",
        after: "for a right triangle with legs $a, b$ and hypotenuse $c$.",
        a: "$a^2 + b^2 = c^2$"
      },
      {
        type: "fitb",
        before: "A local maximum or minimum occurs where the first derivative $f'(x)$ is equal to",
        after: "or is undefined.",
        a: "0"
      },
      {
        type: "fitb",
        before: "The area of a circle is given by $A =$",
        after: ".",
        a: "$\\pi r^2$"
      },
      {
        type: "fitb",
        before: "The probability of an event plus the probability of its complement is always",
        after: ".",
        a: "1"
      },
      {
        type: "fitb",
        before: "The power rule for derivatives states that $\\frac{d}{dx}[x^n] =$",
        after: ".",
        a: "$nx^{n-1}$"
      },
      {
        type: "fitb",
        before: "If two events are mutually exclusive, $P(A \\cup B) =$",
        after: ".",
        a: "$P(A) + P(B)$"
      },
      {
        type: "fitb",
        before: "The volume of a cube with side length $s$ is",
        after: ".",
        a: "$s^3$"
      },
      {
        type: "fitb",
        before: "The change of base formula for logarithms is $\\log_a(b) =$",
        after: ".",
        a: "$\\frac{\\log_c(b)}{\\log_c(a)}$"
      },
      {
        type: "fitb",
        before: "A matrix with the same number of rows and columns is called a",
        after: "matrix.",
        a: "square"
      },
      {
        type: "fitb",
        before: "The sequence $2, 4, 8, 16, \\dots$ is an example of a",
        after: "progression.",
        a: "geometric"
      },
      {
        type: "fitb",
        before: "In a normal distribution, approximately",
        after: "% of data falls within one standard deviation of the mean.",
        a: "68"
      },
      {
        type: "fitb",
        before: "The derivative of $\\sec(x)$ is",
        after: ".",
        a: "$\\sec(x)\\tan(x)$"
      },
      {
        type: "fitb",
        before: "The value of $\\ln(e)$ is",
        after: ".",
        a: "1"
      },
      {
        type: "fitb",
        before: "The formula for permutations of $n$ items taken $r$ at a time is $P(n, r) =$",
        after: ".",
        a: "$\\frac{n!}{(n-r)!}$"
      },
      {
        type: "fitb",
        before: "The vertex of the parabola $y = x^2$ is at the point",
        after: ".",
        a: "$(0, 0)$"
      },
      {
        type: "fitb",
        before: "The distance formula between $(x_1, y_1)$ and $(x_2, y_2)$ is $d =$",
        after: ".",
        a: "$\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$"
      }
    ];