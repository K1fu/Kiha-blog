const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [

  // ===== Multiple Choice (30) =====

  {
    type: "mc",
    q: "What is differentiation?",
    o: [
      "A branch of calculus that involves finding the area under a curve",
      "A branch of calculus that involves finding the rate of change of one variable with respect to another variable",
      "A method of solving algebraic equations",
      "A technique for integrating composite functions"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which of the following was NOT one of the four key mathematical challenges that led to the emergence of calculus in the seventeenth century?",
    o: [
      "The tangent line problem",
      "The velocity and acceleration problem",
      "The matrix transformation problem",
      "The area problem"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "In a circle, what is the relationship between the tangent line at a point P and the radius at that point?",
    o: [
      "The tangent line is parallel to the radius",
      "The tangent line is perpendicular to the radius",
      "The tangent line bisects the radius",
      "The tangent line passes through the center"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given a secant line with points $(c, f(c))$ and $(c + \\Delta x, f(c + \\Delta x))$, which formula correctly represents the slope $m$?",
    o: [
      "$m = \\frac{f(c) - f(c + \\Delta x)}{\\Delta x}$",
      "$m = \\frac{f(c + \\Delta x) + f(c)}{\\Delta x}$",
      "$m = \\frac{f(c + \\Delta x) - f(c)}{\\Delta x}$",
      "$m = \\frac{\\Delta x}{f(c + \\Delta x) - f(c)}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "According to the formal definition of the tangent line, the slope $m(x_1)$ is given by:",
    o: [
      "$m(x_1) = \\lim_{\\Delta x \\to \\infty} \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$",
      "$m(x_1) = \\lim_{\\Delta x \\to 0} \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$",
      "$m(x_1) = \\lim_{\\Delta x \\to 0} \\frac{f(x_1) - f(x_1 + \\Delta x)}{\\Delta x}$",
      "$m(x_1) = \\lim_{\\Delta x \\to 1} \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Which notation is Leibniz's notation for the derivative of $y = f(x)$?",
    o: [
      "$f'(x)$",
      "$Df$",
      "$\\frac{dy}{dx}$",
      "$y'$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Which notation is Euler's notation for the derivative?",
    o: [
      "$f'(x)$",
      "$Df$",
      "$\\frac{dy}{dx}$",
      "$y'$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "According to the properties of a derivative, if $f(x)$ is differentiable at $x = a$, then:",
    o: [
      "$f(x)$ is discontinuous at $x = a$",
      "$f(x)$ is continuous at $x = a$",
      "$f(x)$ has a maximum at $x = a$",
      "$f(x)$ equals zero at $x = a$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the Constant Times a Function rule? If $(cf(x))' = ?$",
    o: [
      "$c + f'(x)$",
      "$c \\cdot f(x)$",
      "$cf'(x)$",
      "$\\frac{f'(x)}{c}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the Sum/Difference rule for derivatives? $(f(x) \\pm g(x))' = ?$",
    o: [
      "$f(x) \\pm g(x)$",
      "$f'(x) \\cdot g'(x)$",
      "$f'(x) \\pm g'(x)$",
      "$f(x) \\cdot g'(x) \\pm g(x) \\cdot f'(x)$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the Chain Rule formula?",
    o: [
      "$\\frac{dy}{dx} = \\frac{dy}{du} + \\frac{du}{dx}$",
      "$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$",
      "$\\frac{dy}{dx} = \\frac{du}{dy} \\cdot \\frac{dx}{du}$",
      "$\\frac{dy}{dx} = \\frac{dy}{du} - \\frac{du}{dx}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the Inverse Functions rule for derivatives?",
    o: [
      "$\\frac{dx}{dy} = \\frac{dy}{dx}$",
      "$\\frac{dx}{dy} = -\\frac{dy}{dx}$",
      "$\\frac{dx}{dy} = \\frac{1}{dy/dx}$",
      "$\\frac{dx}{dy} = \\left(\\frac{dy}{dx}\\right)^2$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If $f(x) = c$ where $c$ is a constant, what is $\\frac{d(f(x))}{dx}$?",
    o: [
      "$c$",
      "$1$",
      "$cx$",
      "$0$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "If $f(x) = x^n$ and $n$ is any number, what is $\\frac{d(f(x))}{dx}$?",
    o: [
      "$x^{n+1}$",
      "$nx^{(n-1)}$",
      "$nx^n$",
      "$\\frac{x^n}{n}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "If $f(x) = c^x$ where $c$ is a constant, what is $\\frac{d(f(x))}{dx}$?",
    o: [
      "$c^x$",
      "$x \\cdot c^{x-1}$",
      "$\\ln(c) \\cdot c^x$",
      "$\\frac{c^x}{\\ln(c)}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If $f(x) = nx$ where $n$ is any number, what is $\\frac{d(f(x))}{dx}$?",
    o: [
      "$nx$",
      "$n^2$",
      "$0$",
      "$n$"
    ],
    a: 3
  },
  {
    type: "mc",
    q: "If $f(x) = \\sqrt[n]{x}$ (i.e., $x^{1/n}$), what is $\\frac{d(f(x))}{dx}$?",
    o: [
      "$\\frac{1}{n} x^{(\\frac{1}{n}+1)}$",
      "$\\frac{1}{n} x^{(\\frac{1}{n}-1)}$",
      "$n \\cdot x^{(n-1)}$",
      "$\\frac{n}{x}$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given $f(x) = 3x^2 - 2x + 5$, what is $f'(x)$?",
    o: [
      "$6x - 2$",
      "$3x - 2$",
      "$6x^2 - 2$",
      "$6x + 5$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Using the Product Rule, if $f(x) = u(x) \\cdot v(x)$, then $f'(x) = ?$",
    o: [
      "$u'(x) \\cdot v'(x)$",
      "$u(x) \\cdot v'(x) - v(x) \\cdot u'(x)$",
      "$u(x) \\cdot v'(x) + v(x) \\cdot u'(x)$",
      "$\\frac{u'(x)}{v'(x)}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Using the Quotient Rule, if $f(x) = \\frac{u(x)}{v(x)}$, then $f'(x) = ?$",
    o: [
      "$\\frac{v \\cdot du + u \\cdot dv}{v^2}$",
      "$\\frac{u \\cdot dv - v \\cdot du}{v^2}$",
      "$\\frac{v \\cdot du - u \\cdot dv}{v^2}$",
      "$\\frac{du}{dv}$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "What is the derivative of $f(x) = (x+1)(x^2+1)$ using the Product Rule?",
    o: [
      "$2x^2 + 2x + 1$",
      "$3x^2 + 2x + 1$",
      "$3x^2 + x + 1$",
      "$2x^2 + x + 2$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Using the Quotient Rule, what is $f'(x)$ for $f(x) = \\frac{x+1}{x^2+1}$?",
    o: [
      "$\\frac{-x^2 - 2x + 1}{(x^2+1)^2}$",
      "$\\frac{x^2 + 2x - 1}{(x^2+1)^2}$",
      "$\\frac{x^2 - 2x - 1}{(x^2+1)^2}$",
      "$\\frac{-x^2 + 2x + 1}{(x^2+1)^2}$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Given $y = (2x-3)^4$, what is $\\frac{dy}{dx}$ using the Chain Rule? (Express in terms of $u$ where $u = 2x-3$)",
    o: [
      "$4u^3$",
      "$2u^3$",
      "$8u^3$",
      "$4u^4$"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "If $f(x)$ is the position function, what does the first derivative $f'(x)$ represent?",
    o: [
      "The acceleration function",
      "The velocity function",
      "The position at time $x$",
      "The jerk function"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "What is the second derivative $f''(x)$ physically interpreted as?",
    o: [
      "Position",
      "Velocity",
      "Acceleration",
      "Displacement"
    ],
    a: 2
  },
  {
    type: "mc",
    q: "Given $f(x) = 3x^7 - 6x^4 + 8x^3 - 12x + 18$, what is $f'(x)$?",
    o: [
      "$21x^6 - 24x^3 + 24x^2 - 12$",
      "$21x^7 - 24x^4 + 24x^3 - 12$",
      "$21x^6 - 24x^4 + 24x^2 - 12$",
      "$21x^6 - 24x^3 + 8x^2 - 12$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "Optimization in differential calculus involves:",
    o: [
      "Finding the integral of a function",
      "Identifying the maximum or minimum values of a function within a given scenario",
      "Determining the tangent line slope only",
      "Solving systems of linear equations"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "In the linearity property of derivatives, $\\{a[f(x)] \\pm b[g(x)]\\}' = ?$",
    o: [
      "$a[f'(x)] \\cdot b[g'(x)]$",
      "$a[f'(x)] \\pm b[g'(x)]$",
      "$a[f(x)] \\pm b[g(x)]$",
      "$ab[f'(x)] \\pm ab[g'(x)]$"
    ],
    a: 1
  },
  {
    type: "mc",
    q: "Given $y = \\frac{1}{2}x^5 + 3x^3 - 5xz$, what is $y'$ (treating $z$ as a constant)?",
    o: [
      "$\\frac{5}{2}x^4 + 9x^2 - 5z$",
      "$\\frac{5}{2}x^4 + 3x^2 - 5z$",
      "$\\frac{5}{2}x^4 + 9x^3 - 5z$",
      "$\\frac{1}{2}x^4 + 9x^2 - 5$"
    ],
    a: 0
  },
  {
    type: "mc",
    q: "In analytical optimization, to find the point on $y = x^2 - 4$ closest to $A(4,0)$, which formula is initially used?",
    o: [
      "The slope formula",
      "The distance formula $d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$",
      "The product rule",
      "The chain rule"
    ],
    a: 1
  },

  // ===== Identification (30) =====

  {
    type: "id",
    q: "What is the name of the point $P(x_1, f(x_1))$ where the tangent line touches the graph? (Answer: two words)",
    a: "point of tangency"
  },
  {
    type: "id",
    q: "What line is used to approximate the slope of a tangent line by passing through the point of tangency? (Answer: two words)",
    a: "secant line"
  },
  {
    type: "id",
    q: "What operation do you perform on a function in order to find its derivative? (Answer: one word)",
    a: "differentiate"
  },
  {
    type: "id",
    q: "Using Lagrange's notation, write the derivative of $f(x)$ (Answer in the form: f'(x) or y')",
    a: "f'(x)"
  },
  {
    type: "id",
    q: "Find the derivative of $f(x) = x^3 + 2x$ using the limit process. (Answer format: ax^2 + b)",
    a: "3x^2 + 2"
  },
  {
    type: "id",
    q: "If $f(x) = c$ where $c$ is a constant, what is $f'(x)$? (Answer as integer)",
    a: "0"
  },
  {
    type: "id",
    q: "If $f(x) = x^5$, what is $f'(x)$? (Answer format: ax^n)",
    a: "5x^4"
  },
  {
    type: "id",
    q: "If $f(x) = 7x$, what is $f'(x)$? (Answer as integer)",
    a: "7"
  },
  {
    type: "id",
    q: "If $f(x) = 2^x$, what is $f'(x)$? (Answer format: ln(c)*c^x)",
    a: "ln(2)*2^x"
  },
  {
    type: "id",
    q: "Given $f(x) = 3x^2 - 2x + 5$, find $f'(x)$. (Answer format: ax + b)",
    a: "6x - 2"
  },
  {
    type: "id",
    q: "Given $y = 3x + 1$, find $\\frac{dy}{dx}$. (Answer as integer)",
    a: "3"
  },
  {
    type: "id",
    q: "Using the Product Rule for $f(x) = u(x) \\cdot v(x)$, write the formula for $f'(x)$ in shorthand notation. (Answer format: uv' + vu')",
    a: "uv' + vu'"
  },
  {
    type: "id",
    q: "Using the Quotient Rule for $f(x) = \\frac{u(x)}{v(x)}$, write the formula for $f'(x)$ in shorthand notation. (Answer format: (vdu - udv)/v^2)",
    a: "(vdu - udv)/v^2"
  },
  {
    type: "id",
    q: "Find $f'(x)$ for $f(x) = (x+1)(x^2+1)$ using the Product Rule. (Answer format: ax^2 + bx + c)",
    a: "3x^2 + 2x + 1"
  },
  {
    type: "id",
    q: "Given $h(x) = \\frac{1+x}{x}$, find $h'(x)$ using the Product Rule. (Answer format: -1/x^2)",
    a: "-1/x^2"
  },
  {
    type: "id",
    q: "What is the name of the differentiation rule used to differentiate composite functions? (Answer: two words)",
    a: "Chain Rule"
  },
  {
    type: "id",
    q: "Given $y = (2x-3)^4$, letting $u = 2x-3$, what is $\\frac{du}{dx}$? (Answer as integer)",
    a: "2"
  },
  {
    type: "id",
    q: "Given $g(x) = x^3 - x^2 + x - 1$, find $g''(x)$. (Answer format: ax + b)",
    a: "6x - 2"
  },
  {
    type: "id",
    q: "Given $g(x) = x^3 - x^2 + x - 1$, find $g'''(x)$. (Answer as integer)",
    a: "6"
  },
  {
    type: "id",
    q: "Given $f(x) = 3x^7 - 6x^4 + 8x^3 - 12x + 18$, find $f''(x)$. (Answer format: ax^5 + bx^2 + cx)",
    a: "126x^5 - 72x^2 + 48x"
  },
  {
    type: "id",
    q: "In optimization, to find the maximum or minimum, we set the first derivative equal to what value? (Answer as integer)",
    a: "0"
  },
  {
    type: "id",
    q: "In the box optimization problem, if volume $V = x^2 h = 5000$ and $x = 17.1$ cm, what is the height $h$ (in cm, rounded to 1 decimal)? (Answer as decimal)",
    a: "17.1"
  },
  {
    type: "id",
    q: "In the fencing problem with 100 meters of fencing against a barn wall (perimeter $F = 2x + y = 100$), what is the value of $x$ that maximizes area? (Answer as integer)",
    a: "25"
  },
  {
    type: "id",
    q: "In the fencing problem with 100 meters of fencing against a barn wall where $x = 25$, what is the maximum area $A = x \\cdot y$? (Answer as integer in sq meters)",
    a: "1250"
  },
  {
    type: "id",
    q: "In the profit maximization problem where $P'(n) = 1800 - 0.04n$, at what quantity $n$ is profit maximized? (Answer as integer)",
    a: "45000"
  },
  {
    type: "id",
    q: "What type of optimization problem uses the distance formula to find the closest point on a curve to a given point? (Answer: one word)",
    a: "Analytical"
  },
  {
    type: "id",
    q: "What type of optimization problem involves finding dimensions of a container that minimize surface area or maximize volume? (Answer format: Geometric/Cost)",
    a: "Geometric/Cost"
  },
  {
    type: "id",
    q: "Find $f'(x)$ for $f(x) = \\frac{x+1}{x^2+1}$ using the Quotient Rule. (Answer format: (-x^2 - 2x + 1)/(x^2+1)^2)",
    a: "(-x^2 - 2x + 1)/(x^2+1)^2"
  },
  {
    type: "id",
    q: "Using the derivative of a root rule, if $f(x) = \\sqrt{x} = x^{1/2}$, what is $f'(x)$? (Answer format: (1/2)x^(-1/2))",
    a: "(1/2)x^(-1/2)"
  },
  {
    type: "id",
    q: "What is the term for the derivative of the first derivative of a function? (Answer: two words, use hyphens if needed)",
    a: "second derivative"
  },

  // ===== True or False (10) =====

  {
    type: "tf",
    q: "Differentiation is a branch of calculus that involves finding the rate of change of one variable with respect to another variable.",
    a: true
  },
  {
    type: "tf",
    q: "$\\frac{dy}{dx}$ is a fraction wherein terms can be cancelled between the numerator and denominator.",
    a: false
  },
  {
    type: "tf",
    q: "If $f(x)$ is differentiable at $x = a$, then $f(x)$ is continuous at $x = a$.",
    a: true
  },
  {
    type: "tf",
    q: "The tangent line to the graph of $f$ at point $P(x_1, f(x_1))$ always has a finite slope.",
    a: false
  },
  {
    type: "tf",
    q: "According to the basic differentiation rules, if $f(x) = c^x$ where $c$ is a constant, then $\\frac{d(f(x))}{dx} = \\ln(c) \\cdot c^x$.",
    a: true
  },
  {
    type: "tf",
    q: "The Product Rule states that $\\{[f(x)][g(x)]\\}' = f(x)[g(x)]' + g(x)[f(x)]'$.",
    a: true
  },
  {
    type: "tf",
    q: "The Chain Rule states that $\\frac{dy}{dx} = \\frac{dy}{du} + \\frac{du}{dx}$.",
    a: false
  },
  {
    type: "tf",
    q: "If $f(x)$ is the position function, then the second derivative $f''(x)$ represents the acceleration function.",
    a: true
  },
  {
    type: "tf",
    q: "In optimization, to find maximum or minimum values, we set the second derivative equal to zero.",
    a: false
  },
  {
    type: "tf",
    q: "The derivative of a constant function $f(x) = c$ is always $0$.",
    a: true
  },

  // ===== Fill in the Blank (20) =====

  {
    type: "fitb",
    before: "Differentiation is a branch of calculus that involves finding the",
    after: "of one variable with respect to another variable.",
    a: "rate of change"
  },
  {
    type: "fitb",
    before: "To approximate the slope of the tangent line, we can use a",
    after: "passing through the point of tangency.",
    a: "secant line"
  },
  {
    type: "fitb",
    before: "The slope $m$ of the secant line is: $m = \\frac{f(c + \\Delta x) - f(c)}{(c + \\Delta x) - c} =$",
    after: "",
    a: "$\\frac{f(c + \\Delta x) - f(c)}{\\Delta x}$"
  },
  {
    type: "fitb",
    before: "The formal definition of slope of the tangent line (and derivative) is: $m(x_1) = f' = \\lim_{\\Delta x \\to 0}$",
    after: "",
    a: "$\\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$"
  },
  {
    type: "fitb",
    before: "Lagrange's notation for the derivative of $y = f(x)$ is",
    after: "or $y'$.",
    a: "$f'(x)$"
  },
  {
    type: "fitb",
    before: "The derivative of $f(x) = x^n$ is",
    after: "",
    a: "$nx^{(n-1)}$"
  },
  {
    type: "fitb",
    before: "The derivative of $f(x) = c$ where $c$ is a constant is",
    after: "",
    a: "$0$"
  },
  {
    type: "fitb",
    before: "The derivative of $f(x) = c^x$ where $c$ is a constant is",
    after: "",
    a: "$\\ln(c) \\cdot c^x$"
  },
  {
    type: "fitb",
    before: "The Constant Times a Function rule states: $(cf(x))' =$",
    after: "",
    a: "$cf'(x)$"
  },
  {
    type: "fitb",
    before: "The Product Rule states: $\\{[f(x)][g(x)]\\}' = f(x)[g(x)]' +$",
    after: "",
    a: "$g(x)[f(x)]'$"
  },
  {
    type: "fitb",
    before: "The Quotient Rule states: $f'(x) =$",
    after: "where $f(x) = \\frac{u(x)}{v(x)}$.",
    a: "$\\frac{v \\cdot du - u \\cdot dv}{v^2}$"
  },
  {
    type: "fitb",
    before: "The Chain Rule formula is: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot$",
    after: "",
    a: "$\\frac{du}{dx}$"
  },
  {
    type: "fitb",
    before: "The Inverse Functions derivative rule is: $\\frac{dx}{dy} =$",
    after: "",
    a: "$\\frac{1}{dy/dx}$"
  },
  {
    type: "fitb",
    before: "For $f(x) = 3x^2 - 2x + 5$, the derivative $f'(x) =$",
    after: "",
    a: "$6x - 2$"
  },
  {
    type: "fitb",
    before: "For $y = 3x + 1$, the derivative $\\frac{dy}{dx} =$",
    after: "",
    a: "$3$"
  },
  {
    type: "fitb",
    before: "If $f(x)$ is the position function, the first derivative $f'(x)$ is the",
    after: "function.",
    a: "velocity"
  },
  {
    type: "fitb",
    before: "Optimization involves identifying the",
    after: "values of a function within a given scenario.",
    a: "maximum or minimum"
  },
  {
    type: "fitb",
    before: "In the box optimization problem, if $V = x^2 h$ and surface area $A = 2x^2 + 4xh$, then substituting $h = \\frac{5000}{x^2}$ gives $A =$",
    after: "",
    a: "$2x^2 + \\frac{20000}{x}$"
  },
  {
    type: "fitb",
    before: "For $g(x) = x^3 - x^2 + x - 1$, the first derivative $g'(x) =$",
    after: "",
    a: "$3x^2 - 2x + 1$"
  },
  {
    type: "fitb",
    before: "The Linearity property of derivatives states: $\\{a[f(x)] \\pm b[g(x)]\\}' =$",
    after: "",
    a: "$a[f'(x)] \\pm b[g'(x)]$"
  }

];