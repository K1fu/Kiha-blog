const CURRICULUM = {
    name: "Calculus: Limits and Continuity",
    description: "Master the fundamental concepts of limits and continuity in calculus",
    overview: "This comprehensive course covers the foundational concepts of calculus, including functions review, limits (graphical, numerical, and epsilon-delta proofs), one-sided limits, infinite limits, limits at infinity, and continuity. Students will develop rigorous mathematical reasoning and problem-solving skills essential for advanced calculus.",
    
    modules: [
        {
            name: "Functions and Preliminaries",
            icon: "📚",
            description: "Review essential function concepts including domain, range, composition, and inverse functions",
            lessons: [
                {
                    name: "Functions: Basics and Definitions",
                    tags: ["Functions", "45 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Distinguish between relations and functions</li>
                                <li>Identify independent and dependent variables</li>
                                <li>Evaluate functions at specific values</li>
                                <li>Apply the vertical line test to determine if a relation is a function</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Function Definition</strong>
                            <p>A function from $$A$$ to $$B$$ is a relation where each element $$a \\in A$$ corresponds to exactly one element $$b \\in B$$. In other words, a set of ordered pairs in which no two ordered pairs have the same first component.</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Independent and Dependent Variables</strong>
                            <p><strong>Independent Variable:</strong> The input value (can be any value in the domain)</p>
                            <p><strong>Dependent Variable:</strong> The output value (depends on the input)</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Vertical Line Test</strong>
                            <p>A relation is a function if and only if no vertical line intersects its graph at more than one point.</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Function Identification",
                            statement: "Determine whether the set $$A = \\{(1, 2), (3, 5), (4, 6), (8, 9)\\}$$ is a function.",
                            solution: `Yes, $$A$$ is a function.

**Step 1:** Check if any x-value appears more than once.
The first components are: 1, 3, 4, 8 (all different)

**Step 2:** Since no first component is repeated, each input has exactly one output.

Therefore, $$A$$ is a function.
$$D_A = \\{1, 3, 4, 8\\}$$
$$R_A = \\{2, 5, 6, 9\\}$$`
                        },
                        {
                            difficulty: "A",
                            title: "Evaluating Simple Functions",
                            statement: "Given $$y = 3x - 8$$, find $$y$$ when $$x = 4$$.",
                            solution: `**Step 1:** Substitute $$x = 4$$ into the equation
$$y = 3(4) - 8$$

**Step 2:** Simplify
$$y = 12 - 8$$
$$y = 4$$

Therefore, when $$x = 4$$, $$y = 4$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Function vs Relation",
                            statement: "Is $$B = \\{(1, 0), (2, 0), (1, 5)\\}$$ a function?",
                            solution: `No, $$B$$ is not a function.

**Step 1:** Identify the first components: 1, 2, 1

**Step 2:** Notice that the value 1 appears twice with different outputs:
- $$(1, 0)$$ maps 1 to 0
- $$(1, 5)$$ maps 1 to 5

**Step 3:** Since one input (1) maps to two different outputs (0 and 5), this violates the definition of a function.

Therefore, $$B$$ is a relation but not a function.`
                        },
                        {
                            difficulty: "B",
                            title: "Evaluating Quadratic Functions",
                            statement: "Given $$x = 2a$$, find $$y = x^2 + 2x + 1$$.",
                            solution: `**Step 1:** Substitute $$x = 2a$$
$$y = (2a)^2 + 2(2a) + 1$$

**Step 2:** Expand $$(2a)^2$$
$$y = 4a^2 + 4a + 1$$

**Step 3:** This is already simplified.

Therefore, $$y = 4a^2 + 4a + 1$$.

**Note:** This is actually a perfect square: $$y = (2a + 1)^2$$`
                        },
                        {
                            difficulty: "B",
                            title: "Composed Variable Substitution",
                            statement: "Given $$x = n + 2$$, find $$f(x) = x^2 + 1$$.",
                            solution: `**Step 1:** Substitute $$x = n + 2$$
$$f(n + 2) = (n + 2)^2 + 1$$

**Step 2:** Expand $$(n + 2)^2$$
$$f(n + 2) = n^2 + 4n + 4 + 1$$

**Step 3:** Simplify
$$f(n + 2) = n^2 + 4n + 5$$

Therefore, $$f(n + 2) = n^2 + 4n + 5$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Set-Based Function Definition",
                            statement: "Let $$A = \\{a, b, c\\}$$ and $$B = \\{1, 2\\}$$. Determine if $$f = \\{(a, 1), (b, 1), (c, 2)\\}$$ is a function from $$A$$ to $$B$$.",
                            solution: `**Step 1:** Check the domain of $$f$$
First components: $$a, b, c$$ (all elements of $$A$$ appear exactly once)

**Step 2:** Check if each element maps to exactly one value
- $$a \\rightarrow 1$$ (one output)
- $$b \\rightarrow 1$$ (one output)
- $$c \\rightarrow 2$$ (one output)

**Step 3:** Verify all outputs are in $$B$$
All second components (1, 1, 2) are in $$B = \\{1, 2\\}$$

Therefore, $$f$$ is a function from $$A$$ to $$B$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Set Relations Analysis",
                            statement: "Given $$A = \\{Frieren, Fern\\}$$ and $$B = \\{Himmel, Kraft, Stark\\}$$. Determine if $$g = \\{(Frieren, Himmel), (Fern, Stark)\\}$$ is a function from $$A$$ to $$B$$.",
                            solution: `**Step 1:** Identify the domain
Domain of $$g$$ = $$\\{Frieren, Fern\\}$$ = $$A$$ ✓

**Step 2:** Check for unique outputs
- Frieren maps to Himmel (unique)
- Fern maps to Stark (unique)

**Step 3:** Check if outputs are in $$B$$
Both Himmel and Stark are in $$B$$ ✓

**Step 4:** Verify each input has exactly one output
Each element in $$A$$ appears exactly once ✓

Therefore, $$g$$ is a function from $$A$$ to $$B$$.

**Note:** A function doesn't need to use all elements of $$B$$ (Kraft is not used, but this is acceptable).`
                        },
                        {
                            difficulty: "C",
                            title: "Implicit Function Identification",
                            statement: "Determine if $$C = \\{(x, y) | y = 3x - 8\\}$$ is a function.",
                            solution: `**Step 1:** Understand the set notation
$$C$$ consists of all ordered pairs $$(x, y)$$ satisfying $$y = 3x - 8$$

**Step 2:** Apply the vertical line test conceptually
For any value of $$x$$, there is exactly one value of $$y$$ given by $$y = 3x - 8$$

**Step 3:** Check uniqueness
If we choose any $$x$$, say $$x = 2$$:
$$y = 3(2) - 8 = -2$$
Only one output exists for this input.

This is true for all $$x \\in \\mathbb{R}$$.

**Step 4:** Conclusion
Since each $$x$$ maps to exactly one $$y$$, $$C$$ is a function.

Therefore, $$C$$ is a function with domain $$\\mathbb{R}$$ and range $$\\mathbb{R}$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Non-Function Relation",
                            statement: "Explain why $$D = \\{(x, y) | y > 2x - 1\\}$$ is not a function.",
                            solution: `**Step 1:** Understand the inequality
$$D$$ consists of all pairs $$(x, y)$$ where $$y$$ is strictly greater than $$2x - 1$$

**Step 2:** Test with a specific $$x$$ value
Let $$x = 1$$:
$$y > 2(1) - 1$$
$$y > 1$$

This means $$y$$ can be 2, 3, 4, 5, ... (infinitely many values)

**Step 3:** Identify multiple outputs
For $$x = 1$$:
- $$(1, 2) \\in D$$
- $$(1, 3) \\in D$$
- $$(1, 100) \\in D$$
- etc.

**Step 4:** Apply function definition
Since one input ($$x = 1$$) maps to multiple outputs, this violates the definition of a function.

Therefore, $$D$$ is a relation but NOT a function.

**Common Mistake:** Confusing inequality relations with functions. Inequalities typically create regions, not single-valued mappings.`
                        },
                        {
                            difficulty: "D",
                            title: "Function Existence Proof",
                            statement: "Prove that if $$f = \\{(a, 1), (b, 1), (b, 2), (c, 2)\\}$$, then $$f$$ cannot be a function.",
                            solution: `**Proof:**

**Given:** $$f = \\{(a, 1), (b, 1), (b, 2), (c, 2)\\}$$

**To Prove:** $$f$$ is not a function

**Proof:**
By the definition of a function, each element in the domain must map to exactly one element in the codomain.

Examining the ordered pairs:
- $$(a, 1)$$ maps $$a \\rightarrow 1$$
- $$(b, 1)$$ maps $$b \\rightarrow 1$$
- $$(b, 2)$$ maps $$b \\rightarrow 2$$
- $$(c, 2)$$ maps $$c \\rightarrow 2$$

Notice that the element $$b$$ appears as the first component in two different ordered pairs:
- $$(b, 1)$$ and $$(b, 2)$$

This means $$b$$ maps to both 1 and 2.

Since $$b$$ has two different images (1 and 2), this violates the fundamental property of functions that requires each input to have exactly one output.

Therefore, $$f$$ is not a function. ∎

**Key Point:** A relation is a function if and only if no first component is repeated with different second components.`
                        },
                        {
                            difficulty: "E",
                            title: "Tricky Function Identification",
                            statement: "Consider $$E = \\{(x, y) | y^2 = x\\}$$. Is $$E$$ a function? Explain carefully.",
                            solution: `**Analysis:**

**Step 1:** Rewrite the relation
$$y^2 = x$$ means $$y = \\pm\\sqrt{x}$$ for $$x \\geq 0$$

**Step 2:** Test with a specific value
Let $$x = 4$$:
$$y^2 = 4$$
$$y = 2$$ or $$y = -2$$

This gives us two ordered pairs:
- $$(4, 2) \\in E$$
- $$(4, -2) \\in E$$

**Step 3:** Apply the definition
Since the input $$x = 4$$ corresponds to two different outputs (2 and -2), $$E$$ is NOT a function.

**Conclusion:** $$E$$ is not a function because most $$x$$ values (all positive $$x$$) map to two different $$y$$ values.

**Common Trap:** Students often think this is a function because it's written as an equation. However, the equation $$y^2 = x$$ does not define $$y$$ as a single-valued function of $$x$$.

**Note:** If we restrict to $$y = \\sqrt{x}$$ (only the positive square root), then it would be a function.

**Vertical Line Test:** A vertical line at any $$x > 0$$ would intersect the graph at two points, confirming this is not a function.`
                        }
                    ]
                },
                {
                    name: "Function Operations and Composition",
                    tags: ["Functions", "50 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Perform addition, subtraction, multiplication, and division of functions</li>
                                <li>Compose functions and find their domains</li>
                                <li>Simplify composite functions</li>
                                <li>Understand domain restrictions in function operations</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Function Operations</strong>
                            <p>If $$f$$ and $$g$$ are functions with domains $$\\text{dom}(f)$$ and $$\\text{dom}(g)$$:</p>
                            <p><strong>Addition:</strong> $$(f + g)(x) = f(x) + g(x)$$, $$\\text{dom}(f + g) = \\text{dom}(f) \\cap \\text{dom}(g)$$</p>
                            <p><strong>Subtraction:</strong> $$(f - g)(x) = f(x) - g(x)$$, $$\\text{dom}(f - g) = \\text{dom}(f) \\cap \\text{dom}(g)$$</p>
                            <p><strong>Multiplication:</strong> $$(f \\cdot g)(x) = f(x) \\cdot g(x)$$, $$\\text{dom}(f \\cdot g) = \\text{dom}(f) \\cap \\text{dom}(g)$$</p>
                            <p><strong>Division:</strong> $$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$$, $$\\text{dom}\\left(\\frac{f}{g}\\right) = \\text{dom}(f) \\cap \\{x | g(x) \\neq 0\\}$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Function Composition</strong>
                            <p>$$(f \\circ g)(x) = f(g(x))$$</p>
                            <p>$$\\text{dom}(f \\circ g) = \\text{dom}(g) \\cap \\{x | g(x) \\in \\text{dom}(f)\\}$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Function Addition",
                            statement: "Let $$f(x) = x^2 - 9$$ and $$g(x) = 2x + 6$$. Find $$(f + g)(5)$$.",
                            solution: `**Step 1:** Find $$(f + g)(x)$$
$$(f + g)(x) = f(x) + g(x)$$
$$(f + g)(x) = (x^2 - 9) + (2x + 6)$$
$$(f + g)(x) = x^2 + 2x - 3$$

**Step 2:** Evaluate at $$x = 5$$
$$(f + g)(5) = 5^2 + 2(5) - 3$$
$$(f + g)(5) = 25 + 10 - 3$$
$$(f + g)(5) = 32$$

Therefore, $$(f + g)(5) = 32$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Function Multiplication",
                            statement: "Let $$f(x) = x^2 - 9$$ and $$g(x) = 2x + 6$$. Find $$(f \\cdot g)(-1)$$.",
                            solution: `**Step 1:** Find $$(f \\cdot g)(x)$$
$$(f \\cdot g)(x) = f(x) \\cdot g(x)$$
$$(f \\cdot g)(x) = (x^2 - 9)(2x + 6)$$

**Step 2:** Expand
$$(f \\cdot g)(x) = 2x^3 + 6x^2 - 18x - 54$$

**Step 3:** Evaluate at $$x = -1$$
$$(f \\cdot g)(-1) = 2(-1)^3 + 6(-1)^2 - 18(-1) - 54$$
$$(f \\cdot g)(-1) = -2 + 6 + 18 - 54$$
$$(f \\cdot g)(-1) = -32$$

Therefore, $$(f \\cdot g)(-1) = -32$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Function Division",
                            statement: "Let $$f(x) = x^2 - 9$$ and $$g(x) = 2x + 6$$. Find $$\\left(\\frac{f}{g}\\right)(4)$$.",
                            solution: `**Step 1:** Simplify $$\\frac{f(x)}{g(x)}$$
$$\\frac{f(x)}{g(x)} = \\frac{x^2 - 9}{2x + 6}$$

**Step 2:** Factor numerator and denominator
$$\\frac{f(x)}{g(x)} = \\frac{(x-3)(x+3)}{2(x+3)}$$

**Step 3:** Cancel common factors ($$x \\neq -3$$)
$$\\frac{f(x)}{g(x)} = \\frac{x-3}{2}$$

**Step 4:** Evaluate at $$x = 4$$
$$\\frac{f(4)}{g(4)} = \\frac{4-3}{2} = \\frac{1}{2}$$

Therefore, $$\\left(\\frac{f}{g}\\right)(4) = \\frac{1}{2}$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Function Composition",
                            statement: "Let $$f(x) = x^2 - 9$$ and $$g(x) = 2x + 6$$. Find $$(f \\circ g)(x)$$.",
                            solution: `**Step 1:** Apply the composition definition
$$(f \\circ g)(x) = f(g(x))$$

**Step 2:** Substitute $$g(x) = 2x + 6$$ into $$f$$
$$f(g(x)) = f(2x + 6)$$
$$f(g(x)) = (2x + 6)^2 - 9$$

**Step 3:** Expand $$(2x + 6)^2$$
$$(2x + 6)^2 = 4x^2 + 24x + 36$$

**Step 4:** Complete the calculation
$$f(g(x)) = 4x^2 + 24x + 36 - 9$$
$$f(g(x)) = 4x^2 + 24x + 27$$

Therefore, $$(f \\circ g)(x) = 4x^2 + 24x + 27$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Composition with Trigonometric Functions",
                            statement: "Let $$f(x) = 2x - 3$$ and $$g(x) = \\cos(x)$$. Find $$(f \\circ g)(x)$$ and $$(g \\circ f)(x)$$.",
                            solution: `**Part 1: Find $$(f \\circ g)(x)$$**

**Step 1:** Apply composition
$$(f \\circ g)(x) = f(g(x)) = f(\\cos(x))$$

**Step 2:** Substitute into $$f$$
$$f(\\cos(x)) = 2\\cos(x) - 3$$

Therefore, $$(f \\circ g)(x) = 2\\cos(x) - 3$$.

**Part 2: Find $$(g \\circ f)(x)$$**

**Step 1:** Apply composition
$$(g \\circ f)(x) = g(f(x)) = g(2x - 3)$$

**Step 2:** Substitute into $$g$$
$$g(2x - 3) = \\cos(2x - 3)$$

Therefore, $$(g \\circ f)(x) = \\cos(2x - 3)$$.

**Note:** $$(f \\circ g)(x) \\neq (g \\circ f)(x)$$ in general. Function composition is NOT commutative.`
                        },
                        {
                            difficulty: "B",
                            title: "Function Subtraction",
                            statement: "Let $$h(x) = 3x^2 + 2x - 1$$ and $$k(x) = x^2 - 5x + 3$$. Find $$(h - k)(x)$$ and evaluate at $$x = 2$$.",
                            solution: `**Step 1:** Find $$(h - k)(x)$$
$$(h - k)(x) = h(x) - k(x)$$
$$(h - k)(x) = (3x^2 + 2x - 1) - (x^2 - 5x + 3)$$

**Step 2:** Distribute the negative sign
$$(h - k)(x) = 3x^2 + 2x - 1 - x^2 + 5x - 3$$

**Step 3:** Combine like terms
$$(h - k)(x) = (3x^2 - x^2) + (2x + 5x) + (-1 - 3)$$
$$(h - k)(x) = 2x^2 + 7x - 4$$

**Step 4:** Evaluate at $$x = 2$$
$$(h - k)(2) = 2(2)^2 + 7(2) - 4$$
$$(h - k)(2) = 2(4) + 14 - 4$$
$$(h - k)(2) = 8 + 14 - 4$$
$$(h - k)(2) = 18$$

Therefore, $$(h - k)(x) = 2x^2 + 7x - 4$$ and $$(h - k)(2) = 18$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Domain of Function Division",
                            statement: "Let $$f(x) = x + 4$$ and $$g(x) = x^2 + x - 2$$. Find the domain of $$\\left(\\frac{f}{g}\\right)(x)$$.",
                            solution: `**Step 1:** Write the quotient
$$\\frac{f(x)}{g(x)} = \\frac{x + 4}{x^2 + x - 2}$$

**Step 2:** Find where $$g(x) = 0$$
$$x^2 + x - 2 = 0$$

**Step 3:** Factor
$$(x + 2)(x - 1) = 0$$

**Step 4:** Solve
$$x = -2$$ or $$x = 1$$

**Step 5:** Determine the domain
The domain is all real numbers except where $$g(x) = 0$$:

**Set Builder Notation:** $$\\text{dom}\\left(\\frac{f}{g}\\right) = \\{x \\in \\mathbb{R} | x \\neq -2, x \\neq 1\\}$$

**Interval Notation:** $$\\text{dom}\\left(\\frac{f}{g}\\right) = (-\\infty, -2) \\cup (-2, 1) \\cup (1, \\infty)$$

**Common Mistake:** Forgetting to exclude values where the denominator equals zero, which would make the function undefined.`
                        },
                        {
                            difficulty: "C",
                            title: "Complex Function Composition",
                            statement: "Let $$f(x) = \\sqrt{x - 1}$$ and $$g(x) = x^2 + 3$$. Find $$(f \\circ g)(x)$$ and its domain.",
                            solution: `**Step 1:** Find $$(f \\circ g)(x)$$
$$(f \\circ g)(x) = f(g(x)) = f(x^2 + 3)$$
$$(f \\circ g)(x) = \\sqrt{x^2 + 3 - 1}$$
$$(f \\circ g)(x) = \\sqrt{x^2 + 2}$$

**Step 2:** Find the domain
For $$f(x) = \\sqrt{x - 1}$$, we need $$x - 1 \\geq 0$$, so $$x \\geq 1$$.

For $$(f \\circ g)(x)$$, we need $$g(x) \\geq 1$$:
$$x^2 + 3 \\geq 1$$
$$x^2 \\geq -2$$

**Step 3:** Analyze the inequality
Since $$x^2 \\geq 0$$ for all real $$x$$, and $$0 > -2$$, this inequality is always true.

**Step 4:** State the domain
$$\\text{dom}(f \\circ g) = \\mathbb{R}$$ (all real numbers)

**Alternative:** We can also note that $$x^2 + 2 \\geq 2 > 0$$ for all real $$x$$, so the square root is always defined.

Therefore, $$(f \\circ g)(x) = \\sqrt{x^2 + 2}$$ with domain $$(-\\infty, \\infty)$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Triple Composition",
                            statement: "Let $$f(x) = 2x$$, $$g(x) = x + 1$$, and $$h(x) = x^2$$. Find $$(f \\circ g \\circ h)(x)$$.",
                            solution: `**Step 1:** Understand the notation
$$(f \\circ g \\circ h)(x) = f(g(h(x)))$$

**Step 2:** Start from the inside: find $$h(x)$$
$$h(x) = x^2$$

**Step 3:** Apply $$g$$ to $$h(x)$$
$$g(h(x)) = g(x^2) = x^2 + 1$$

**Step 4:** Apply $$f$$ to $$g(h(x))$$
$$f(g(h(x))) = f(x^2 + 1) = 2(x^2 + 1)$$
$$f(g(h(x))) = 2x^2 + 2$$

Therefore, $$(f \\circ g \\circ h)(x) = 2x^2 + 2$$.

**Verification:** Test with $$x = 1$$:
- $$h(1) = 1^2 = 1$$
- $$g(1) = 1 + 1 = 2$$
- $$f(2) = 2(2) = 4$$
- $$(f \\circ g \\circ h)(1) = 2(1)^2 + 2 = 4$$ ✓`
                        },
                        {
                            difficulty: "C",
                            title: "Function Operations with Domain Restrictions",
                            statement: "Let $$f(x) = \\sqrt{x}$$ and $$g(x) = \\sqrt{4 - x}$$. Find the domain of $$(f \\cdot g)(x)$$.",
                            solution: `**Step 1:** Find $$(f \\cdot g)(x)$$
$$(f \\cdot g)(x) = \\sqrt{x} \\cdot \\sqrt{4 - x}$$
$$(f \\cdot g)(x) = \\sqrt{x(4 - x)}$$

**Step 2:** Find $$\\text{dom}(f)$$
For $$f(x) = \\sqrt{x}$$: $$x \\geq 0$$

**Step 3:** Find $$\\text{dom}(g)$$
For $$g(x) = \\sqrt{4 - x}$$: $$4 - x \\geq 0$$
$$x \\leq 4$$

**Step 4:** Find the intersection
$$\\text{dom}(f \\cdot g) = \\text{dom}(f) \\cap \\text{dom}(g)$$
$$\\text{dom}(f \\cdot g) = [0, \\infty) \\cap (-\\infty, 4]$$
$$\\text{dom}(f \\cdot g) = [0, 4]$$

**Verification:** We can also check directly:
$$x(4 - x) \\geq 0$$

This is satisfied when $$0 \\leq x \\leq 4$$.

Therefore, $$\\text{dom}(f \\cdot g) = [0, 4]$$.`
                        },
                        {
                            difficulty: "D",
                            title: "Proving Function Composition Properties",
                            statement: "Prove that if $$f$$ and $$g$$ are one-to-one functions, then $$(f \\circ g)$$ is also one-to-one.",
                            solution: `**Proof:**

**Given:** $$f$$ and $$g$$ are one-to-one functions.

**To Prove:** $$f \\circ g$$ is one-to-one.

**Proof:**
To show $$f \\circ g$$ is one-to-one, we must prove:
If $$(f \\circ g)(x_1) = (f \\circ g)(x_2)$$, then $$x_1 = x_2$$.

Assume $$(f \\circ g)(x_1) = (f \\circ g)(x_2)$$

By definition of composition:
$$f(g(x_1)) = f(g(x_2))$$

Since $$f$$ is one-to-one, if $$f(a) = f(b)$$, then $$a = b$$.

Applying this property:
$$g(x_1) = g(x_2)$$

Since $$g$$ is one-to-one, if $$g(c) = g(d)$$, then $$c = d$$.

Applying this property:
$$x_1 = x_2$$

Therefore, we have shown that $$(f \\circ g)(x_1) = (f \\circ g)(x_2)$$ implies $$x_1 = x_2$$.

Hence, $$f \\circ g$$ is one-to-one. ∎

**Key Insight:** The composition of one-to-one functions preserves the one-to-one property.`
                        },
                        {
                            difficulty: "E",
                            title: "Composition Domain Trap",
                            statement: "Let $$f(x) = \\sqrt{x}$$ and $$g(x) = x - 5$$. Find the domain of $$(f \\circ g)(x)$$. Many students incorrectly state the domain as $$[0, \\infty)$$. Explain why this is wrong and find the correct domain.",
                            solution: `**Common Error Analysis:**

**Step 1:** Find $$(f \\circ g)(x)$$
$$(f \\circ g)(x) = f(g(x)) = f(x - 5) = \\sqrt{x - 5}$$

**Step 2:** Identify the common mistake
Students see $$\\sqrt{x - 5}$$ and think "square root needs non-negative," so they might say $$x \\geq 0$$.

**This is WRONG!**

**Step 3:** Correct analysis
For $$\\sqrt{x - 5}$$ to be defined, we need:
$$x - 5 \\geq 0$$
$$x \\geq 5$$

**Step 4:** Using the domain formula
$$\\text{dom}(f \\circ g) = \\text{dom}(g) \\cap \\{x | g(x) \\in \\text{dom}(f)\\}$$

$$\\text{dom}(g) = \\mathbb{R}$$ (all real numbers)
$$\\text{dom}(f) = [0, \\infty)$$

For $$g(x) \\in \\text{dom}(f)$$:
$$g(x) \\geq 0$$
$$x - 5 \\geq 0$$
$$x \\geq 5$$

Therefore: $$\\text{dom}(f \\circ g) = \\mathbb{R} \\cap [5, \\infty) = [5, \\infty)$$

**Correct Answer:** $$\\text{dom}(f \\circ g) = [5, \\infty)$$

**Why the trap works:** Students focus on the final form $$\\sqrt{x - 5}$$ without considering that the argument of the square root is $$(x - 5)$$, not just $$x$$.

**Key Lesson:** When finding domains of composed functions, always trace through the composition step-by-step, or use the formal domain formula.`
                        }
                    ]
                },
                {
                    name: "Domain, Range, and Inverse Functions",
                    tags: ["Functions", "55 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Determine the domain and range of various functions</li>
                                <li>Express domains and ranges in interval and set-builder notation</li>
                                <li>Apply the horizontal line test to determine if a function is one-to-one</li>
                                <li>Find inverse functions algebraically</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Domain and Range</strong>
                            <p><strong>Domain ($$D_f$$):</strong> The set of all permissible values of $$x$$ (input values)</p>
                            <p><strong>Range ($$R_f$$):</strong> The set of all corresponding values of $$y$$ (output values)</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Common Domain Restrictions</strong>
                            <p><strong>Square Root:</strong> $$f(x) = \\sqrt{x}$$ requires $$x \\geq 0$$</p>
                            <p><strong>Rational Function:</strong> $$f(x) = \\frac{p(x)}{q(x)}$$ requires $$q(x) \\neq 0$$</p>
                            <p><strong>Logarithm:</strong> $$f(x) = \\log(x)$$ requires $$x > 0$$</p>
                            <p><strong>Polynomial:</strong> $$f(x) = a_nx^n + ... + a_0$$ has domain $$\\mathbb{R}$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Horizontal Line Test</strong>
                            <p>A function is one-to-one if and only if no horizontal line intersects its graph at more than one point.</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Inverse Function</strong>
                            <p>The inverse of a function $$f: A \\rightarrow B$$ is the function $$f^{-1}: \\text{ran}(B) \\rightarrow A$$ such that $$f^{-1}(f(x)) = x$$</p>
                            <p><strong>Steps to Find Inverse:</strong></p>
                            <ol style="margin-left: 1.5rem;">
                                <li>Express $$f(x)$$ as $$y$$</li>
                                <li>Switch $$x$$ with $$y$$</li>
                                <li>Isolate $$y$$</li>
                                <li>Replace $$y$$ with $$f^{-1}(x)$$</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Domain of Linear Function",
                            statement: "Find the domain of $$g(x) = 3x - 8$$ using both set-builder and interval notation.",
                            solution: `**Step 1:** Identify function type
$$g(x) = 3x - 8$$ is a linear function

**Step 2:** Recall domain of linear functions
Linear functions have no restrictions; they are defined for all real numbers.

**Step 3:** Express in set-builder notation
$$D_g = \\{x | x \\in \\mathbb{R}\\}$$

**Step 4:** Express in interval notation
$$D_g = (-\\infty, +\\infty)$$

Therefore:
- **Set-builder:** $$D_g = \\{x | x \\in \\mathbb{R}\\}$$
- **Interval:** $$D_g = (-\\infty, +\\infty)$$`
                        },
                        {
                            difficulty: "A",
                            title: "Domain of Simple Rational Function",
                            statement: "Find the domain of $$h(x) = \\frac{1}{x}$$.",
                            solution: `**Step 1:** Identify restriction
The function $$h(x) = \\frac{1}{x}$$ is undefined when the denominator equals zero.

**Step 2:** Find where denominator is zero
$$x = 0$$

**Step 3:** Exclude this value from domain
The domain is all real numbers except 0.

**Set-builder notation:**
$$D_h = \\{x | x \\neq 0\\}$$ or $$D_h = \\{x \\in \\mathbb{R} | x \\neq 0\\}$$

**Interval notation:**
$$D_h = (-\\infty, 0) \\cup (0, +\\infty)$$

**Note:** The range is also $$R_h = (-\\infty, 0) \\cup (0, +\\infty)$$ since $$\\frac{1}{x}$$ never equals zero.`
                        },
                        {
                            difficulty: "A",
                            title: "Finding Simple Inverse",
                            statement: "Find the inverse of $$f(x) = 2x - 7$$.",
                            solution: `**Step 1:** Write as $$y$$
$$y = 2x - 7$$

**Step 2:** Switch $$x$$ and $$y$$
$$x = 2y - 7$$

**Step 3:** Solve for $$y$$
$$x + 7 = 2y$$
$$y = \\frac{x + 7}{2}$$

**Step 4:** Write as $$f^{-1}(x)$$
$$f^{-1}(x) = \\frac{x + 7}{2}$$

**Verification:** Check that $$f(f^{-1}(x)) = x$$
$$f(f^{-1}(x)) = f\\left(\\frac{x + 7}{2}\\right) = 2\\left(\\frac{x + 7}{2}\\right) - 7 = x + 7 - 7 = x$$ ✓

Therefore, $$f^{-1}(x) = \\frac{x + 7}{2}$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Domain of Rational Function",
                            statement: "Find the domain of $$F(x) = \\frac{x^2 + 1}{x - 3}$$.",
                            solution: `**Step 1:** Identify restrictions
Rational functions are undefined when the denominator equals zero.

**Step 2:** Set denominator equal to zero
$$x - 3 = 0$$
$$x = 3$$

**Step 3:** State the domain
The domain is all real numbers except $$x = 3$$.

**Set-builder notation:**
$$D_F = \\{x \\in \\mathbb{R} | x \\neq 3\\}$$

**Interval notation:**
$$D_F = (-\\infty, 3) \\cup (3, +\\infty)$$

**Note:** The numerator $$x^2 + 1$$ is always positive (never zero), so it doesn't create additional restrictions.`
                        },
                        {
                            difficulty: "B",
                            title: "Domain with Multiple Restrictions",
                            statement: "Find the domain of $$G(x) = \\frac{x + 4}{x^2 + x - 2}$$.",
                            solution: `**Step 1:** Set denominator equal to zero
$$x^2 + x - 2 = 0$$

**Step 2:** Factor
$$(x + 2)(x - 1) = 0$$

**Step 3:** Solve
$$x = -2$$ or $$x = 1$$

**Step 4:** State the domain
Exclude both values from the domain.

**Set-builder notation:**
$$D_G = \\{x \\in \\mathbb{R} | x \\neq -2, x \\neq 1\\}$$

**Interval notation:**
$$D_G = (-\\infty, -2) \\cup (-2, 1) \\cup (1, +\\infty)$$

**Common Mistake:** Forgetting to exclude BOTH values, or writing the union incorrectly.`
                        },
                        {
                            difficulty: "B",
                            title: "Domain of Square Root Function",
                            statement: "Find the domain of $$H(x) = \\sqrt{x - 3}$$.",
                            solution: `**Step 1:** Identify restriction
Square root functions require the radicand to be non-negative.

**Step 2:** Set up inequality
$$x - 3 \\geq 0$$

**Step 3:** Solve
$$x \\geq 3$$

**Step 4:** State the domain
**Set-builder notation:**
$$D_H = \\{x \\in \\mathbb{R} | x \\geq 3\\}$$

**Interval notation:**
$$D_H = [3, +\\infty)$$

**Note:** We use a closed bracket $$[$$ because $$x = 3$$ is included (the inequality is "greater than or equal to").`
                        },
                        {
                            difficulty: "B",
                            title: "Cube Root Inverse",
                            statement: "Find the inverse of $$f(x) = x^3 + 8$$.",
                            solution: `**Step 1:** Write as $$y$$
$$y = x^3 + 8$$

**Step 2:** Switch $$x$$ and $$y$$
$$x = y^3 + 8$$

**Step 3:** Solve for $$y$$
$$x - 8 = y^3$$
$$y = \\sqrt[3]{x - 8}$$

**Step 4:** Write as $$f^{-1}(x)$$
$$f^{-1}(x) = \\sqrt[3]{x - 8}$$

**Verification:** 
$$f(f^{-1}(x)) = f(\\sqrt[3]{x - 8}) = (\\sqrt[3]{x - 8})^3 + 8 = (x - 8) + 8 = x$$ ✓

Therefore, $$f^{-1}(x) = \\sqrt[3]{x - 8}$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Domain of Complex Rational Function",
                            statement: "Find the domain of $$P(x) = \\sqrt{x^2 - x - 2}$$.",
                            solution: `**Step 1:** Set up inequality
For the square root to be defined:
$$x^2 - x - 2 \\geq 0$$

**Step 2:** Factor
$$(x - 2)(x + 1) \\geq 0$$

**Step 3:** Find critical points
Critical points: $$x = -1$$ and $$x = 2$$

**Step 4:** Test intervals
Test $$x = -2$$ (in $$(-\\infty, -1)$$): $$(-2-2)(-2+1) = (-4)(-1) = 4 > 0$$ ✓
Test $$x = 0$$ (in $$(-1, 2)$$): $$(0-2)(0+1) = (-2)(1) = -2 < 0$$ ✗
Test $$x = 3$$ (in $$(2, \\infty)$$): $$(3-2)(3+1) = (1)(4) = 4 > 0$$ ✓

**Step 5:** Include endpoints
At $$x = -1$$: $$(-1-2)(-1+1) = 0$$ ✓
At $$x = 2$$: $$(2-2)(2+1) = 0$$ ✓

**Step 6:** State the domain
**Set-builder notation:**
$$D_P = \\{x \\in \\mathbb{R} | x \\leq -1 \\text{ or } x \\geq 2\\}$$

**Interval notation:**
$$D_P = (-\\infty, -1] \\cup [2, +\\infty)$$

**Key Point:** When dealing with quadratic inequalities under a square root, factor and use sign analysis.`
                        },
                        {
                            difficulty: "C",
                            title: "Interval Notation Practice",
                            statement: "Express the following domains in interval notation:\na) $$-3 < x \\leq 6$$\nb) $$x \\geq -1$$\nc) $$x < 25$$",
                            solution: `**Part a:** $$-3 < x \\leq 6$$

**Analysis:** $$x$$ is strictly greater than -3 (open) and less than or equal to 6 (closed)
**Answer:** $$(-3, 6]$$

**Part b:** $$x \\geq -1$$

**Analysis:** $$x$$ is greater than or equal to -1 (closed) with no upper bound
**Answer:** $$[-1, +\\infty)$$

**Part c:** $$x < 25$$

**Analysis:** $$x$$ is strictly less than 25 (open) with no lower bound
**Answer:** $$(-\\infty, 25)$$

**Key Points:**
- Use $$($$ or $$)$$ for strict inequalities ($$<$$ or $$>$$)
- Use $$[$$ or $$]$$ for inclusive inequalities ($$\\leq$$ or $$\\geq$$)
- Always use $$($$ or $$)$$ with $$\\infty$$ or $$-\\infty$$`
                        },
                        {
                            difficulty: "C",
                            title: "Finding Inverse with Restriction",
                            statement: "Find the inverse of $$f(x) = \\frac{2x + 1}{x - 3}$$, $$x \\neq 3$$.",
                            solution: `**Step 1:** Write as $$y$$
$$y = \\frac{2x + 1}{x - 3}$$

**Step 2:** Switch $$x$$ and $$y$$
$$x = \\frac{2y + 1}{y - 3}$$

**Step 3:** Solve for $$y$$
$$x(y - 3) = 2y + 1$$
$$xy - 3x = 2y + 1$$
$$xy - 2y = 3x + 1$$
$$y(x - 2) = 3x + 1$$
$$y = \\frac{3x + 1}{x - 2}$$

**Step 4:** Write as $$f^{-1}(x)$$
$$f^{-1}(x) = \\frac{3x + 1}{x - 2}$$, $$x \\neq 2$$

**Note:** The restriction $$x \\neq 2$$ in the inverse comes from the denominator of $$f^{-1}(x)$$.

**Verification:**
$$f(f^{-1}(x)) = f\\left(\\frac{3x + 1}{x - 2}\\right) = \\frac{2\\left(\\frac{3x + 1}{x - 2}\\right) + 1}{\\frac{3x + 1}{x - 2} - 3}$$

After simplification (multiply numerator and denominator by $$x - 2$$):
$$= \\frac{2(3x + 1) + (x - 2)}{(3x + 1) - 3(x - 2)} = \\frac{6x + 2 + x - 2}{3x + 1 - 3x + 6} = \\frac{7x}{7} = x$$ ✓

Therefore, $$f^{-1}(x) = \\frac{3x + 1}{x - 2}$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Domain with Square Root in Denominator",
                            statement: "Find the domain of $$Q(x) = \\frac{1}{\\sqrt{x - 4}}$$.",
                            solution: `**Step 1:** Identify restrictions
Two requirements:
1. Square root requires: $$x - 4 \\geq 0$$
2. Denominator cannot be zero: $$\\sqrt{x - 4} \\neq 0$$

**Step 2:** Solve first restriction
$$x - 4 \\geq 0$$
$$x \\geq 4$$

**Step 3:** Solve second restriction
$$\\sqrt{x - 4} \\neq 0$$
$$x - 4 \\neq 0$$
$$x \\neq 4$$

**Step 4:** Combine restrictions
We need $$x \\geq 4$$ AND $$x \\neq 4$$
This gives us $$x > 4$$

**Step 5:** State the domain
**Set-builder notation:**
$$D_Q = \\{x \\in \\mathbb{R} | x > 4\\}$$

**Interval notation:**
$$D_Q = (4, +\\infty)$$

**Key Point:** When a square root appears in the denominator, it must be strictly positive (not just non-negative).`
                        },
                        {
                            difficulty: "D",
                            title: "Proving Inverse Relationship",
                            statement: "Prove that if $$f(x) = \\frac{ax + b}{cx + d}$$ where $$ad - bc \\neq 0$$, then $$f^{-1}(x) = \\frac{dx - b}{-cx + a}$$.",
                            solution: `**Proof:**

**Step 1:** Start with $$y = f(x)$$
$$y = \\frac{ax + b}{cx + d}$$

**Step 2:** Switch $$x$$ and $$y$$
$$x = \\frac{ay + b}{cy + d}$$

**Step 3:** Solve for $$y$$
$$x(cy + d) = ay + b$$
$$cxy + dx = ay + b$$
$$cxy - ay = b - dx$$
$$y(cx - a) = b - dx$$
$$y = \\frac{b - dx}{cx - a}$$

**Step 4:** Factor out $$-1$$ from numerator
$$y = \\frac{-(dx - b)}{cx - a}$$

**Step 5:** Factor out $$-1$$ from denominator
$$y = \\frac{-(dx - b)}{-(a - cx)} = \\frac{dx - b}{-cx + a}$$

Therefore, $$f^{-1}(x) = \\frac{dx - b}{-cx + a}$$. ∎

**Note:** The condition $$ad - bc \\neq 0$$ ensures the function is one-to-one and has an inverse.

**Verification:** We can verify by computing $$f(f^{-1}(x))$$:
$$f(f^{-1}(x)) = f\\left(\\frac{dx - b}{-cx + a}\\right) = \\frac{a\\left(\\frac{dx - b}{-cx + a}\\right) + b}{c\\left(\\frac{dx - b}{-cx + a}\\right) + d}$$

Multiplying numerator and denominator by $$(-cx + a)$$:
$$= \\frac{a(dx - b) + b(-cx + a)}{c(dx - b) + d(-cx + a)} = \\frac{adx - ab - bcx + ab}{cdx - bc - cdx + ad} = \\frac{x(ad - bc)}{ad - bc} = x$$ ✓`
                        },
                        {
                            difficulty: "E",
                            title: "Domain Trap: Composite Restrictions",
                            statement: "Find the domain of $$R(x) = \\sqrt{\\frac{x + 2}{x - 1}}$$. Many students miss a crucial restriction. Explain all domain requirements.",
                            solution: `**Complete Analysis:**

**Step 1:** Identify all restrictions
1. Square root requires non-negative radicand: $$\\frac{x + 2}{x - 1} \\geq 0$$
2. Rational function requires non-zero denominator: $$x - 1 \\neq 0$$

**Step 2:** Solve $$x - 1 \\neq 0$$
$$x \\neq 1$$

**Step 3:** Solve $$\\frac{x + 2}{x - 1} \\geq 0$$
Critical points: $$x = -2$$ (numerator zero) and $$x = 1$$ (denominator zero)

**Step 4:** Sign analysis
Test intervals:

$$x < -2$$: Try $$x = -3$$: $$\\frac{-3 + 2}{-3 - 1} = \\frac{-1}{-4} = \\frac{1}{4} > 0$$ ✓

$$-2 < x < 1$$: Try $$x = 0$$: $$\\frac{0 + 2}{0 - 1} = \\frac{2}{-1} = -2 < 0$$ ✗

$$x > 1$$: Try $$x = 2$$: $$\\frac{2 + 2}{2 - 1} = \\frac{4}{1} = 4 > 0$$ ✓

**Step 5:** Check endpoints
At $$x = -2$$: $$\\frac{-2 + 2}{-2 - 1} = \\frac{0}{-3} = 0$$ ✓ (allowed, equals 0)
At $$x = 1$$: undefined (denominator = 0) ✗

**Step 6:** State the domain
$$D_R = (-\\infty, -2] \\cup (1, +\\infty)$$

**Common Mistakes:**
1. **Missing the sign analysis:** Students might only check $$x \\neq 1$$ and $$x \\geq -2$$, giving $$[-2, 1) \\cup (1, \\infty)$$ which is WRONG.
2. **Forgetting endpoint inclusion:** $$x = -2$$ should be included (closed bracket) because the fraction equals 0.
3. **Not recognizing the interval $$(-2, 1)$$ makes the fraction negative.**

**Key Lesson:** For $$\\frac{f(x)}{g(x)} \\geq 0$$, use sign analysis with critical points from both numerator and denominator.`
                        }
                    ]
                }
            ]
        },
        {
            name: "The Concept of Limits",
            icon: "🎯",
            description: "Understand limits graphically, numerically, and through formal epsilon-delta definitions",
            lessons: [
                {
                    name: "Introduction to Limits: Graphical and Numerical Approaches",
                    tags: ["Limits", "50 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Understand the intuitive notion of a limit</li>
                                <li>Evaluate limits graphically from function graphs</li>
                                <li>Estimate limits numerically using tables of values</li>
                                <li>Recognize when limits exist and when they do not</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Intuitive Definition of a Limit</strong>
                            <p>We say that $$\\lim_{x \\to b} f(x) = L$$ if the values of $$f(x)$$ get closer and closer to $$L$$ as $$x$$ gets closer and closer to $$b$$ (from both sides), regardless of what happens at $$x = b$$.</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Important Notes About Limits</strong>
                            <p>1. The limit of $$f(x)$$ as $$x \\to b$$ does NOT depend on the value of $$f(b)$$</p>
                            <p>2. $$f(b)$$ may not even be defined</p>
                            <p>3. Even if $$f(b)$$ is defined, it may not equal $$\\lim_{x \\to b} f(x)$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Limit from Table",
                            statement: "Given the table of values for $$f(x) = \\frac{x^2 - 9}{x - 3}$$:\n\n$$\\begin{array}{|c|c|}\\hline x & f(x) \\\\\\hline 2.9 & 5.9 \\\\ 2.99 & 5.99 \\\\ 2.999 & 5.999 \\\\ 3.001 & 6.001 \\\\ 3.01 & 6.01 \\\\ 3.1 & 6.1 \\\\\\hline\\end{array}$$\n\nEstimate $$\\lim_{x \\to 3} f(x)$$.",
                            solution: `**Step 1:** Observe values approaching from the left
As $$x$$ approaches 3 from below (2.9, 2.99, 2.999), $$f(x)$$ approaches 6 (5.9, 5.99, 5.999)

**Step 2:** Observe values approaching from the right
As $$x$$ approaches 3 from above (3.001, 3.01, 3.1), $$f(x)$$ approaches 6 (6.001, 6.01, 6.1)

**Step 3:** Both sides approach the same value
From both directions, $$f(x) \\to 6$$

Therefore, $$\\lim_{x \\to 3} f(x) = 6$$.

**Note:** Even though $$f(3)$$ is undefined (division by zero), the limit exists and equals 6.

**Algebraic verification:**
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6$$`
                        },
                        {
                            difficulty: "A",
                            title: "Direct Substitution Limit",
                            statement: "Evaluate $$\\lim_{x \\to 3} (x - 1)^3$$.",
                            solution: `**Step 1:** Check if the function is continuous at $$x = 3$$
$$(x - 1)^3$$ is a polynomial, which is continuous everywhere.

**Step 2:** Use direct substitution
$$\\lim_{x \\to 3} (x - 1)^3 = (3 - 1)^3$$

**Step 3:** Calculate
$$= 2^3 = 8$$

Therefore, $$\\lim_{x \\to 3} (x - 1)^3 = 8$$.

**Key Point:** For polynomial functions, we can evaluate limits by direct substitution.`
                        },
                        {
                            difficulty: "A",
                            title: "Limit with Function Value Different from Limit",
                            statement: "Let $$f(x) = \\begin{cases} 3x - 1 & \\text{if } x \\neq 1 \\\\ 3 & \\text{if } x = 1 \\end{cases}$$\n\nFind $$\\lim_{x \\to 1} f(x)$$ and $$f(1)$$. Are they equal?",
                            solution: `**Step 1:** Find $$\\lim_{x \\to 1} f(x)$$
For $$x \\neq 1$$, $$f(x) = 3x - 1$$

As $$x \\to 1$$:
$$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (3x - 1) = 3(1) - 1 = 2$$

**Step 2:** Find $$f(1)$$
By definition: $$f(1) = 3$$

**Step 3:** Compare
$$\\lim_{x \\to 1} f(x) = 2$$
$$f(1) = 3$$

Therefore, $$\\lim_{x \\to 1} f(x) \\neq f(1)$$.

**Key Insight:** The limit depends on values near $$x = 1$$, not at $$x = 1$$. This illustrates that a function can have a limit at a point even when the function value differs from that limit.`
                        },
                        {
                            difficulty: "B",
                            title: "Graphical Limit Evaluation",
                            statement: "From a graph (described below), estimate the following limits:\n\nSuppose the graph of $$j(x)$$ shows:\n- As $$x \\to 0$$, the curve approaches $$y = 2$$\n- At $$x = 0$$, there's a hole at $$y = 2$$ and a solid point at $$y = 3$$\n- As $$x \\to 1$$, the curve approaches $$y = 4$$\n- As $$x \\to -1$$, the left side approaches $$y = 1$$, the right side approaches $$y = 3$$\n\nEvaluate:\na) $$\\lim_{x \\to 0} j(x)$$\nb) $$\\lim_{x \\to 1} j(x)$$\nc) $$\\lim_{x \\to -1} j(x)$$",
                            solution: `**Part a:** $$\\lim_{x \\to 0} j(x)$$

**Analysis:** The curve approaches $$y = 2$$ from both sides
**Answer:** $$\\lim_{x \\to 0} j(x) = 2$$

**Note:** Even though $$j(0) = 3$$ (the solid point), the limit is 2.

**Part b:** $$\\lim_{x \\to 1} j(x)$$

**Analysis:** The curve approaches $$y = 4$$ from both sides
**Answer:** $$\\lim_{x \\to 1} j(x) = 4$$

**Part c:** $$\\lim_{x \\to -1} j(x)$$

**Analysis:** 
- From the left: approaches $$y = 1$$
- From the right: approaches $$y = 3$$
- Since left ≠ right, the limit does not exist

**Answer:** $$\\lim_{x \\to -1} j(x)$$ does not exist (D.N.E.)

**Key Point:** For a limit to exist, the function must approach the same value from both left and right.`
                        },
                        {
                            difficulty: "B",
                            title: "Numerical Limit with Cancellation",
                            statement: "Create a table to estimate $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$ using values: 1.9, 1.99, 1.999, 2.001, 2.01, 2.1.",
                            solution: `**Step 1:** Calculate function values

$$\\begin{array}{|c|c|}\\hline x & f(x) = \\frac{x^2 - 4}{x - 2} \\\\\\hline 1.9 & \\frac{1.9^2 - 4}{1.9 - 2} = \\frac{-0.39}{-0.1} = 3.9 \\\\ 1.99 & \\frac{1.99^2 - 4}{1.99 - 2} = \\frac{-0.0399}{-0.01} = 3.99 \\\\ 1.999 & \\frac{1.999^2 - 4}{1.999 - 2} \\approx 3.999 \\\\ 2.001 & \\frac{2.001^2 - 4}{2.001 - 2} \\approx 4.001 \\\\ 2.01 & \\frac{2.01^2 - 4}{2.01 - 2} = \\frac{0.0401}{0.01} = 4.01 \\\\ 2.1 & \\frac{2.1^2 - 4}{2.1 - 2} = \\frac{0.41}{0.1} = 4.1 \\\\\\hline\\end{array}$$

**Step 2:** Observe the pattern
From both sides, $$f(x) \\to 4$$

**Step 3:** Estimate the limit
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4$$

**Algebraic verification:**
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$`
                        },
                        {
                            difficulty: "B",
                            title: "Limit of Polynomial",
                            statement: "Evaluate $$\\lim_{x \\to 5} (x^2 - 4x + 3)$$.",
                            solution: `**Step 1:** Recognize polynomial function
Polynomials are continuous everywhere

**Step 2:** Use direct substitution
$$\\lim_{x \\to 5} (x^2 - 4x + 3) = 5^2 - 4(5) + 3$$

**Step 3:** Calculate
$$= 25 - 20 + 3$$
$$= 8$$

Therefore, $$\\lim_{x \\to 5} (x^2 - 4x + 3) = 8$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Limit from Graph with Asymptote",
                            statement: "A graph shows:\n- As $$x \\to 2^-$$ (from left), $$f(x) \\to +\\infty$$\n- As $$x \\to 2^+$$ (from right), $$f(x) \\to +\\infty$$\n- As $$x \\to -\\infty$$, $$f(x) \\to 3$$\n- As $$x \\to +\\infty$$, $$f(x) \\to 3$$\n\nEvaluate:\na) $$\\lim_{x \\to 2} f(x)$$\nb) $$\\lim_{x \\to -\\infty} f(x)$$\nc) $$\\lim_{x \\to +\\infty} f(x)$$",
                            solution: `**Part a:** $$\\lim_{x \\to 2} f(x)$$

**Analysis:** From both sides, $$f(x) \\to +\\infty$$

**Answer:** $$\\lim_{x \\to 2} f(x) = +\\infty$$

**Note:** Some texts say the limit "does not exist" when it's infinite. However, we can be more specific and say it equals $$+\\infty$$.

**Part b:** $$\\lim_{x \\to -\\infty} f(x)$$

**Analysis:** As $$x$$ goes to $$-\\infty$$, $$f(x) \\to 3$$

**Answer:** $$\\lim_{x \\to -\\infty} f(x) = 3$$

**Part c:** $$\\lim_{x \\to +\\infty} f(x)$$

**Analysis:** As $$x$$ goes to $$+\\infty$$, $$f(x) \\to 3$$

**Answer:** $$\\lim_{x \\to +\\infty} f(x) = 3$$

**Interpretation:** The line $$y = 3$$ is a horizontal asymptote, and $$x = 2$$ is a vertical asymptote.`
                        },
                        {
                            difficulty: "C",
                            title: "Piecewise Function Limit",
                            statement: "Let $$g(x) = \\begin{cases} x^2 - 7 & \\text{if } x < 3 \\\\ x + 1 & \\text{if } 3 < x < 4 \\\\ 2x & \\text{if } x \\geq 4 \\end{cases}$$\n\nFind $$\\lim_{x \\to 3} g(x)$$ and $$\\lim_{x \\to 4} g(x)$$.",
                            solution: `**Part 1:** Find $$\\lim_{x \\to 3} g(x)$$

**Step 1:** Find left-hand limit ($$x \\to 3^-$$)
For $$x < 3$$: $$g(x) = x^2 - 7$$
$$\\lim_{x \\to 3^-} g(x) = 3^2 - 7 = 9 - 7 = 2$$

**Step 2:** Find right-hand limit ($$x \\to 3^+$$)
For $$x > 3$$: $$g(x) = x + 1$$
$$\\lim_{x \\to 3^+} g(x) = 3 + 1 = 4$$

**Step 3:** Compare
$$\\lim_{x \\to 3^-} g(x) = 2 \\neq 4 = \\lim_{x \\to 3^+} g(x)$$

**Answer:** $$\\lim_{x \\to 3} g(x)$$ does not exist (D.N.E.)

**Part 2:** Find $$\\lim_{x \\to 4} g(x)$$

**Step 1:** Find left-hand limit ($$x \\to 4^-$$)
For $$3 < x < 4$$: $$g(x) = x + 1$$
$$\\lim_{x \\to 4^-} g(x) = 4 + 1 = 5$$

**Step 2:** Find right-hand limit ($$x \\to 4^+$$)
For $$x \\geq 4$$: $$g(x) = 2x$$
$$\\lim_{x \\to 4^+} g(x) = 2(4) = 8$$

**Step 3:** Compare
$$\\lim_{x \\to 4^-} g(x) = 5 \\neq 8 = \\lim_{x \\to 4^+} g(x)$$

**Answer:** $$\\lim_{x \\to 4} g(x)$$ does not exist (D.N.E.)`
                        },
                        {
                            difficulty: "C",
                            title: "Numerical Estimation with Rational Function",
                            statement: "Estimate $$\\lim_{h \\to 0} \\frac{\\sqrt{4 + h} - 2}{h}$$ by creating a table with $$h = \\pm 0.1, \\pm 0.01, \\pm 0.001$$.",
                            solution: `**Step 1:** Calculate function values

$$\\begin{array}{|c|c|}\\hline h & f(h) = \\frac{\\sqrt{4 + h} - 2}{h} \\\\\\hline -0.1 & \\frac{\\sqrt{3.9} - 2}{-0.1} \\approx \\frac{1.9748 - 2}{-0.1} \\approx 0.2532 \\\\ -0.01 & \\frac{\\sqrt{3.99} - 2}{-0.01} \\approx \\frac{1.9975 - 2}{-0.01} \\approx 0.2503 \\\\ -0.001 & \\frac{\\sqrt{3.999} - 2}{-0.001} \\approx 0.2500 \\\\ 0.001 & \\frac{\\sqrt{4.001} - 2}{0.001} \\approx 0.2500 \\\\ 0.01 & \\frac{\\sqrt{4.01} - 2}{0.01} \\approx \\frac{2.0025 - 2}{0.01} \\approx 0.2497 \\\\ 0.1 & \\frac{\\sqrt{4.1} - 2}{0.1} \\approx \\frac{2.0248 - 2}{0.1} \\approx 0.2469 \\\\\\hline\\end{array}$$

**Step 2:** Observe convergence
As $$h \\to 0$$ from both sides, $$f(h) \\to 0.25 = \\frac{1}{4}$$

**Step 3:** Estimate
$$\\lim_{h \\to 0} \\frac{\\sqrt{4 + h} - 2}{h} = \\frac{1}{4}$$

**Algebraic verification (using conjugate):**
$$\\lim_{h \\to 0} \\frac{\\sqrt{4 + h} - 2}{h} \\cdot \\frac{\\sqrt{4 + h} + 2}{\\sqrt{4 + h} + 2}$$
$$= \\lim_{h \\to 0} \\frac{(4 + h) - 4}{h(\\sqrt{4 + h} + 2)}$$
$$= \\lim_{h \\to 0} \\frac{h}{h(\\sqrt{4 + h} + 2)}$$
$$= \\lim_{h \\to 0} \\frac{1}{\\sqrt{4 + h} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$ ✓`
                        },
                        {
                            difficulty: "D",
                            title: "Limit Behavior Analysis",
                            statement: "Consider $$f(x) = \\frac{\\sin(x)}{x}$$ near $$x = 0$$.\n\na) Create a numerical table to estimate $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$.\nb) Why can't we use direct substitution?",
                            solution: `**Part a:** Numerical estimation

**Step 1:** Calculate values (use radians)

$$\\begin{array}{|c|c|}\\hline x & f(x) = \\frac{\\sin(x)}{x} \\\\\\hline -0.1 & \\frac{\\sin(-0.1)}{-0.1} \\approx \\frac{-0.0998}{-0.1} \\approx 0.9983 \\\\ -0.01 & \\frac{\\sin(-0.01)}{-0.01} \\approx 0.99998 \\\\ -0.001 & \\frac{\\sin(-0.001)}{-0.001} \\approx 1.0000 \\\\ 0.001 & \\frac{\\sin(0.001)}{0.001} \\approx 1.0000 \\\\ 0.01 & \\frac{\\sin(0.01)}{0.01} \\approx 0.99998 \\\\ 0.1 & \\frac{\\sin(0.1)}{0.1} \\approx \\frac{0.0998}{0.1} \\approx 0.9983 \\\\\\hline\\end{array}$$

**Step 2:** Observe pattern
As $$x \\to 0$$ from both sides, $$\\frac{\\sin(x)}{x} \\to 1$$

**Answer:** $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$

**Part b:** Why not direct substitution?

**Analysis:**
Direct substitution gives: $$\\frac{\\sin(0)}{0} = \\frac{0}{0}$$ (indeterminate form)

This is why we cannot simply substitute $$x = 0$$. However, through careful analysis (L'Hôpital's rule or geometric arguments), we can show the limit equals 1.

**Note:** This is a famous limit used extensively in calculus, especially for derivatives of trigonometric functions.`
                        },
                        {
                            difficulty: "E",
                            title: "Oscillating Limit Trap",
                            statement: "Consider $$g(x) = \\sin\\left(\\frac{1}{x}\\right)$$ as $$x \\to 0$$.\n\na) Explain why creating a numerical table might be misleading.\nb) Does $$\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$$ exist?",
                            solution: `**Part a:** Why numerical tables can mislead

**Analysis:**
Let's try some values:

$$\\begin{array}{|c|c|}\\hline x & g(x) = \\sin\\left(\\frac{1}{x}\\right) \\\\\\hline 0.1 & \\sin(10) \\approx -0.544 \\\\ 0.01 & \\sin(100) \\approx -0.506 \\\\ 0.001 & \\sin(1000) \\approx 0.827 \\\\\\hline\\end{array}$$

The values appear random! This is because:
- As $$x \\to 0$$, $$\\frac{1}{x} \\to \\infty$$
- $$\\sin\\left(\\frac{1}{x}\\right)$$ oscillates infinitely many times between -1 and 1

**The trap:** Depending on which $$x$$ values you choose, you might get different apparent "limits".

**Part b:** Does the limit exist?

**Answer:** NO, $$\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$$ does NOT exist.

**Proof:**
For any $$\\delta > 0$$, we can find $$x_1, x_2$$ with $$0 < |x_1|, |x_2| < \\delta$$ such that:

Choose $$x_1 = \\frac{1}{\\pi/2}$$ and $$x_2 = \\frac{1}{3\\pi/2}$$ (both can be made arbitrarily small)

Then:
- $$g(x_1) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$$
- $$g(x_2) = \\sin\\left(\\frac{3\\pi}{2}\\right) = -1$$

Since the function values don't approach a single number, the limit doesn't exist.

**Key Lesson:** 
1. Numerical tables are useful for estimation but not proof
2. Oscillating functions near a point may not have limits
3. Always verify numerical findings with rigorous analysis

**Note:** However, $$\\lim_{x \\to 0} x \\sin\\left(\\frac{1}{x}\\right) = 0$$ does exist! (The $$x$$ factor "dampens" the oscillation.)`
                        }
                    ]
                },
                {
                    name: "Epsilon-Delta Definition of Limits",
                    tags: ["Limits", "60 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Understand the formal ($$\\epsilon$$-$$\\delta$$) definition of a limit</li>
                                <li>Construct epsilon-delta proofs for simple limits</li>
                                <li>Find appropriate $$\\delta$$ values for given $$\\epsilon$$</li>
                                <li>Verify limit statements using the formal definition</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Formal Definition of a Limit</strong>
                            <p>Let $$f$$ be a function defined on an open interval containing $$b$$, except possibly at $$b$$ itself. We say:</p>
                            <p>$$\\lim_{x \\to b} f(x) = L$$</p>
                            <p>if for every $$\\epsilon > 0$$, there exists a $$\\delta > 0$$ such that:</p>
                            <p>$$0 < |x - b| < \\delta \\Rightarrow |f(x) - L| < \\epsilon$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Interval Interpretation</strong>
                            <p>For any $$\\epsilon > 0$$, there exists $$\\delta > 0$$ such that:</p>
                            <p>$$x \\in (b - \\delta, b + \\delta) \\Rightarrow f(x) \\in (L - \\epsilon, L + \\epsilon)$$</p>
                            <p>(excluding $$x = b$$)</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Steps in Proving a Limit</strong>
                            <p><strong>Part I: Find $$\\delta$$</strong></p>
                            <ol style="margin-left: 1.5rem;">
                                <li>Assume $$\\epsilon > 0$$ and $$|f(x) - L| < \\epsilon$$</li>
                                <li>Manipulate to get $$|x - b| < $$ (some expression in $$\\epsilon$$)</li>
                                <li>This expression is your $$\\delta$$</li>
                            </ol>
                            <p><strong>Part II: Construct the formal proof</strong></p>
                            <ol style="margin-left: 1.5rem;">
                                <li>State: "Given $$\\epsilon > 0$$, let $$\\delta = $$ (expression found above)"</li>
                                <li>Show $$\\delta > 0$$</li>
                                <li>Assume $$0 < |x - b| < \\delta$$</li>
                                <li>Work through inequalities to reach $$|f(x) - L| < \\epsilon$$</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Understanding Epsilon-Delta",
                            statement: "In the limit $$\\lim_{x \\to 3} f(x) = 7$$, if $$\\epsilon = 0.1$$, explain what this means in terms of the function values.",
                            solution: `**Understanding the question:**

We want $$|f(x) - 7| < 0.1$$

**Step 1:** Interpret the inequality
$$|f(x) - 7| < 0.1$$ means:
$$-0.1 < f(x) - 7 < 0.1$$
$$6.9 < f(x) < 7.1$$

**Step 2:** State the meaning
For $$\\epsilon = 0.1$$, we need to find $$\\delta > 0$$ such that whenever $$x$$ is within $$\\delta$$ of 3 (but not equal to 3), $$f(x)$$ is within 0.1 of 7.

**In other words:**
If $$0 < |x - 3| < \\delta$$, then $$f(x) \\in (6.9, 7.1)$$.

**Geometric interpretation:**
- The horizontal band between $$y = 6.9$$ and $$y = 7.1$$
- Must be reached by the function for all $$x$$ in some interval around 3

**Key point:** The smaller the $$\\epsilon$$, the tighter the band around $$L = 7$$, requiring a potentially smaller $$\\delta$$ interval around $$x = 3$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Finding Delta for Linear Function",
                            statement: "For $$\\lim_{x \\to 4} (5x - 7) = 13$$, find $$\\delta$$ in terms of $$\\epsilon$$.\n\n(This is the scratch work step, not the formal proof.)",
                            solution: `**Step 1:** Start with $$|f(x) - L| < \\epsilon$$
$$|(5x - 7) - 13| < \\epsilon$$

**Step 2:** Simplify inside absolute value
$$|5x - 20| < \\epsilon$$

**Step 3:** Factor
$$|5(x - 4)| < \\epsilon$$

**Step 4:** Use absolute value property
$$5|x - 4| < \\epsilon$$

**Step 5:** Solve for $$|x - 4|$$
$$|x - 4| < \\frac{\\epsilon}{5}$$

**Step 6:** Identify $$\\delta$$
$$\\delta = \\frac{\\epsilon}{5}$$

**Conclusion:** For any $$\\epsilon > 0$$, choose $$\\delta = \\frac{\\epsilon}{5}$$. Then whenever $$0 < |x - 4| < \\delta$$, we have $$|f(x) - 13| < \\epsilon$$.

**Note:** This is the scratch work. The formal proof would reverse these steps.`
                        },
                        {
                            difficulty: "B",
                            title: "Simple Epsilon-Delta Proof",
                            statement: "Prove that $$\\lim_{x \\to 4} (5x - 7) = 13$$ using the epsilon-delta definition.",
                            solution: `**Formal Proof:**

**Given:** We want to prove $$\\lim_{x \\to 4} (5x - 7) = 13$$

**Proof:**
Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\frac{\\epsilon}{5}$$.

Since $$\\epsilon > 0$$, we have $$\\delta = \\frac{\\epsilon}{5} > 0$$.

Now suppose $$0 < |x - 4| < \\delta$$.

Then:
$$|x - 4| < \\frac{\\epsilon}{5}$$

Multiply both sides by 5:
$$5|x - 4| < \\epsilon$$

By properties of absolute value:
$$|5(x - 4)| < \\epsilon$$

Simplify:
$$|5x - 20| < \\epsilon$$

Rewrite:
$$|(5x - 7) - 13| < \\epsilon$$

Therefore:
$$|f(x) - 13| < \\epsilon$$

This shows that for any $$\\epsilon > 0$$, there exists $$\\delta = \\frac{\\epsilon}{5} > 0$$ such that $$0 < |x - 4| < \\delta$$ implies $$|f(x) - 13| < \\epsilon$$.

Therefore, $$\\lim_{x \\to 4} (5x - 7) = 13$$. ∎

**Key Steps:**
1. Choose $$\\delta$$ in terms of $$\\epsilon$$
2. Verify $$\\delta > 0$$
3. Assume $$0 < |x - 4| < \\delta$$
4. Work through to show $$|f(x) - L| < \\epsilon$$`
                        },
                        {
                            difficulty: "C",
                            title: "Epsilon-Delta with Factoring",
                            statement: "Prove that $$\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3} = 4$$.",
                            solution: `**Part I: Finding $$\\delta$$** (Scratch work)

$$\\left|\\frac{x^2 - 2x - 3}{x - 3} - 4\\right| < \\epsilon$$

Factor numerator:
$$\\left|\\frac{(x - 3)(x + 1)}{x - 3} - 4\\right| < \\epsilon$$

Since $$x \\neq 3$$, cancel:
$$|x + 1 - 4| < \\epsilon$$
$$|x - 3| < \\epsilon$$

So $$\\delta = \\epsilon$$.

**Part II: Formal Proof**

**Proof:**
Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\epsilon$$.

Since $$\\epsilon > 0$$, clearly $$\\delta > 0$$.

Suppose $$0 < |x - 3| < \\delta$$.

Then $$|x - 3| < \\epsilon$$.

Since $$x \\neq 3$$ (from $$0 < |x - 3|$$), we can write:
$$\\frac{x^2 - 2x - 3}{x - 3} = \\frac{(x - 3)(x + 1)}{x - 3} = x + 1$$

Therefore:
$$\\left|\\frac{x^2 - 2x - 3}{x - 3} - 4\\right| = |x + 1 - 4| = |x - 3| < \\epsilon$$

Thus, for any $$\\epsilon > 0$$, there exists $$\\delta = \\epsilon > 0$$ such that $$0 < |x - 3| < \\delta$$ implies $$|f(x) - 4| < \\epsilon$$.

Therefore, $$\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3} = 4$$. ∎`
                        },
                        {
                            difficulty: "C",
                            title: "Finding Delta for Quadratic",
                            statement: "For $$\\lim_{x \\to 2} x^2 = 4$$, find a suitable $$\\delta$$ in terms of $$\\epsilon$$. (Assume $$x$$ is near 2, say $$|x - 2| < 1$$.)",
                            solution: `**Step 1:** Start with $$|f(x) - L| < \\epsilon$$
$$|x^2 - 4| < \\epsilon$$

**Step 2:** Factor
$$|(x - 2)(x + 2)| < \\epsilon$$
$$|x - 2| \\cdot |x + 2| < \\epsilon$$

**Step 3:** Bound $$|x + 2|$$
If we restrict $$|x - 2| < 1$$, then:
$$-1 < x - 2 < 1$$
$$1 < x < 3$$
$$3 < x + 2 < 5$$

So $$|x + 2| < 5$$ when $$|x - 2| < 1$$.

**Step 4:** Use this bound
$$|x - 2| \\cdot |x + 2| < |x - 2| \\cdot 5 < \\epsilon$$

**Step 5:** Solve for $$|x - 2|$$
$$|x - 2| < \\frac{\\epsilon}{5}$$

**Step 6:** Choose $$\\delta$$
We need both:
- $$|x - 2| < 1$$ (for our bound to work)
- $$|x - 2| < \\frac{\\epsilon}{5}$$ (to get the conclusion)

Therefore: $$\\delta = \\min\\left\\{1, \\frac{\\epsilon}{5}\\right\\}$$

**Conclusion:** Choose $$\\delta = \\min\\left\\{1, \\frac{\\epsilon}{5}\\right\\}$$.

**Note:** This technique (restricting $$x$$ to a small interval first) is common for nonlinear functions.`
                        },
                        {
                            difficulty: "C",
                            title: "Epsilon-Delta for Constant Function",
                            statement: "Prove that $$\\lim_{x \\to 5} 7 = 7$$ using the epsilon-delta definition.",
                            solution: `**Proof:**

Let $$\\epsilon > 0$$ be given. Choose $$\\delta = 1$$ (or any positive number).

Clearly $$\\delta = 1 > 0$$.

Suppose $$0 < |x - 5| < \\delta$$.

Since $$f(x) = 7$$ for all $$x$$:
$$|f(x) - 7| = |7 - 7| = 0 < \\epsilon$$

This holds for any $$x$$, regardless of the value of $$\\delta$$.

Therefore, for any $$\\epsilon > 0$$, there exists $$\\delta = 1 > 0$$ such that $$0 < |x - 5| < \\delta$$ implies $$|f(x) - 7| < \\epsilon$$.

Hence, $$\\lim_{x \\to 5} 7 = 7$$. ∎

**Key Insight:** For constant functions, the value of $$\\delta$$ doesn't matter—we can choose any positive number. The function value never changes, so it's always within $$\\epsilon$$ of itself.`
                        },
                        {
                            difficulty: "D",
                            title: "Epsilon-Delta for Quadratic (Complete Proof)",
                            statement: "Prove that $$\\lim_{x \\to 2} x^2 = 4$$ using the epsilon-delta definition.",
                            solution: `**Proof:**

Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\min\\left\\{1, \\frac{\\epsilon}{5}\\right\\}$$.

Since $$\\epsilon > 0$$, we have $$\\delta > 0$$.

Suppose $$0 < |x - 2| < \\delta$$.

**Case 1:** Since $$\\delta \\leq 1$$, we have $$|x - 2| < 1$$, which gives:
$$-1 < x - 2 < 1$$
$$1 < x < 3$$
$$3 < x + 2 < 5$$

Therefore $$|x + 2| < 5$$.

**Case 2:** Since $$\\delta \\leq \\frac{\\epsilon}{5}$$, we have $$|x - 2| < \\frac{\\epsilon}{5}$$.

**Combining:**
$$|x^2 - 4| = |(x - 2)(x + 2)|$$
$$= |x - 2| \\cdot |x + 2|$$
$$< \\frac{\\epsilon}{5} \\cdot 5$$ (using Case 2 and Case 1)
$$= \\epsilon$$

Therefore $$|f(x) - 4| < \\epsilon$$.

This shows that for any $$\\epsilon > 0$$, there exists $$\\delta = \\min\\left\\{1, \\frac{\\epsilon}{5}\\right\\} > 0$$ such that $$0 < |x - 2| < \\delta$$ implies $$|f(x) - 4| < \\epsilon$$.

Therefore, $$\\lim_{x \\to 2} x^2 = 4$$. ∎

**Note:** The $$\\min$$ function ensures $$\\delta$$ satisfies both necessary conditions.`
                        },
                        {
                            difficulty: "D",
                            title: "Proving a Limit Does Not Exist",
                            statement: "Use the epsilon-delta definition to prove that $$\\lim_{x \\to 0} \\frac{|x|}{x}$$ does not exist.",
                            solution: `**Proof by Contradiction:**

**Step 1:** Understand the function
$$f(x) = \\frac{|x|}{x} = \\begin{cases} 1 & \\text{if } x > 0 \\\\ -1 & \\text{if } x < 0 \\end{cases}$$

**Step 2:** Assume the limit exists
Suppose for contradiction that $$\\lim_{x \\to 0} \\frac{|x|}{x} = L$$ for some $$L \\in \\mathbb{R}$$.

**Step 3:** Choose $$\\epsilon = \\frac{1}{2}$$
By the definition of limit, there exists $$\\delta > 0$$ such that:
$$0 < |x| < \\delta \\Rightarrow \\left|\\frac{|x|}{x} - L\\right| < \\frac{1}{2}$$

**Step 4:** Choose specific points
Let $$x_1 = \\frac{\\delta}{2} > 0$$ and $$x_2 = -\\frac{\\delta}{2} < 0$$.

Both satisfy $$0 < |x_1|, |x_2| < \\delta$$.

**Step 5:** Apply the definition
For $$x_1$$: $$|f(x_1) - L| = |1 - L| < \\frac{1}{2}$$

For $$x_2$$: $$|f(x_2) - L| = |-1 - L| < \\frac{1}{2}$$

**Step 6:** Use triangle inequality
$$2 = |1 - (-1)| = |(1 - L) - (-1 - L)|$$
$$\\leq |1 - L| + |-1 - L|$$
$$< \\frac{1}{2} + \\frac{1}{2} = 1$$

This gives $$2 < 1$$, which is a contradiction!

**Conclusion:** Our assumption must be false. Therefore, $$\\lim_{x \\to 0} \\frac{|x|}{x}$$ does not exist. ∎

**Intuition:** The function jumps from -1 to 1 at $$x = 0$$, so there's no single value it approaches.`
                        },
                        {
                            difficulty: "D",
                            title: "Square Root Epsilon-Delta",
                            statement: "Prove that $$\\lim_{x \\to 4} \\sqrt{x} = 2$$ using the epsilon-delta definition.",
                            solution: `**Part I: Finding $$\\delta$$** (Scratch work)

$$|\\sqrt{x} - 2| < \\epsilon$$

Multiply by conjugate:
$$|\\sqrt{x} - 2| \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} = \\frac{|x - 4|}{\\sqrt{x} + 2}$$

If $$x$$ is near 4, say $$|x - 4| < 4$$, then $$0 < x < 8$$, so $$2 < \\sqrt{x} + 2 < 2\\sqrt{2} + 2 < 5$$.

Thus $$\\frac{1}{\\sqrt{x} + 2} > \\frac{1}{5}$$ (note: inequality flips when we bound denominator from above).

Actually, we want $$\\frac{1}{\\sqrt{x} + 2} < $$ something, so:
Since $$\\sqrt{x} + 2 > 2$$, we have $$\\frac{1}{\\sqrt{x} + 2} < \\frac{1}{2}$$.

Therefore:
$$|\\sqrt{x} - 2| = \\frac{|x - 4|}{\\sqrt{x} + 2} < \\frac{|x - 4|}{2}$$

We want this $$< \\epsilon$$, so:
$$\\frac{|x - 4|}{2} < \\epsilon$$
$$|x - 4| < 2\\epsilon$$

Choose $$\\delta = \\min\\{4, 2\\epsilon\\}$$.

**Part II: Formal Proof**

Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\min\\{4, 2\\epsilon\\}$$.

Since $$\\epsilon > 0$$, clearly $$\\delta > 0$$.

Suppose $$0 < |x - 4| < \\delta$$.

Since $$\\delta \\leq 4$$, we have $$0 < x < 8$$, so $$\\sqrt{x}$$ is defined and $$\\sqrt{x} + 2 > 2$$.

Also, since $$\\delta \\leq 2\\epsilon$$, we have $$|x - 4| < 2\\epsilon$$.

Now:
$$|\\sqrt{x} - 2| = \\left|\\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{\\sqrt{x} + 2}\\right|$$
$$= \\frac{|x - 4|}{\\sqrt{x} + 2}$$
$$< \\frac{|x - 4|}{2}$$ (since $$\\sqrt{x} + 2 > 2$$)
$$< \\frac{2\\epsilon}{2} = \\epsilon$$

Therefore $$|f(x) - 2| < \\epsilon$$.

This proves $$\\lim_{x \\to 4} \\sqrt{x} = 2$$. ∎`
                        },
                        {
                            difficulty: "E",
                            title: "Epsilon-Delta Challenge",
                            statement: "Prove that $$\\lim_{x \\to 1} \\frac{1}{x} = 1$$ using the epsilon-delta definition. This requires bounding $$\\frac{1}{x}$$ carefully.",
                            solution: `**Part I: Finding $$\\delta$$** (Scratch work)

$$\\left|\\frac{1}{x} - 1\\right| < \\epsilon$$
$$\\left|\\frac{1 - x}{x}\\right| < \\epsilon$$
$$\\frac{|x - 1|}{|x|} < \\epsilon$$

We need to bound $$\\frac{1}{|x|}$$. If $$|x - 1| < \\frac{1}{2}$$, then:
$$-\\frac{1}{2} < x - 1 < \\frac{1}{2}$$
$$\\frac{1}{2} < x < \\frac{3}{2}$$

So $$\\frac{1}{|x|} < \\frac{1}{1/2} = 2$$.

Therefore:
$$\\frac{|x - 1|}{|x|} < 2|x - 1|$$

We want $$2|x - 1| < \\epsilon$$, so $$|x - 1| < \\frac{\\epsilon}{2}$$.

Choose $$\\delta = \\min\\left\\{\\frac{1}{2}, \\frac{\\epsilon}{2}\\right\\}$$.

**Part II: Formal Proof**

Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\min\\left\\{\\frac{1}{2}, \\frac{\\epsilon}{2}\\right\\}$$.

Since $$\\epsilon > 0$$, clearly $$\\delta > 0$$.

Suppose $$0 < |x - 1| < \\delta$$.

Since $$\\delta \\leq \\frac{1}{2}$$:
$$-\\frac{1}{2} < x - 1 < \\frac{1}{2}$$
$$\\frac{1}{2} < x < \\frac{3}{2}$$

Therefore $$|x| > \\frac{1}{2}$$, so $$\\frac{1}{|x|} < 2$$.

Also, since $$\\delta \\leq \\frac{\\epsilon}{2}$$, we have $$|x - 1| < \\frac{\\epsilon}{2}$$.

Now:
$$\\left|\\frac{1}{x} - 1\\right| = \\left|\\frac{1 - x}{x}\\right|$$
$$= \\frac{|x - 1|}{|x|}$$
$$< 2|x - 1|$$ (since $$\\frac{1}{|x|} < 2$$)
$$< 2 \\cdot \\frac{\\epsilon}{2} = \\epsilon$$

Therefore $$|f(x) - 1| < \\epsilon$$.

This proves $$\\lim_{x \\to 1} \\frac{1}{x} = 1$$. ∎

**Key Technique:** When dealing with fractions, bound the denominator to get a useful inequality. The preliminary restriction ($$|x - 1| < \\frac{1}{2}$$) is crucial for controlling the behavior of $$\\frac{1}{x}$$.`
                        }
                    ]
                }
            ]
        },
        {
            name: "Limit Theorems and Evaluation Techniques",
            icon: "🧮",
            description: "Apply limit laws and algebraic techniques to evaluate limits efficiently",
            lessons: [
                {
                    name: "Basic Limit Theorems",
                    tags: ["Limits", "45 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Apply basic limit laws to evaluate limits</li>
                                <li>Use the limit of polynomial and rational functions theorems</li>
                                <li>Recognize when direct substitution is applicable</li>
                                <li>Combine multiple limit laws in problem-solving</li>
                            </ul>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Basic Limit Laws</strong>
                            <p>$$\\lim_{x \\to b} c = c$$ (constant)</p>
                            <p>$$\\lim_{x \\to b} x = b$$ (identity)</p>
                            <p>$$\\lim_{x \\to b} [cf(x)] = c \\lim_{x \\to b} f(x)$$ (constant multiple)</p>
                            <p>$$\\lim_{x \\to b} f(x) = f(b)$$ for any polynomial $$f$$</p>
                            <p>$$\\lim_{x \\to b} \\frac{1}{g(x)} = \\frac{1}{M}$$ if $$\\lim_{x \\to b} g(x) = M \\neq 0$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Algebraic Limit Laws</strong>
                            <p>If $$\\lim_{x \\to b} f(x) = L$$ and $$\\lim_{x \\to b} g(x) = M$$, then:</p>
                            <p>$$\\lim_{x \\to b} [f(x) \\pm g(x)] = L \\pm M$$ (sum/difference)</p>
                            <p>$$\\lim_{x \\to b} [f(x) \\cdot g(x)] = L \\cdot M$$ (product)</p>
                            <p>$$\\lim_{x \\to b} \\frac{f(x)}{g(x)} = \\frac{L}{M}$$ if $$M \\neq 0$$ (quotient)</p>
                            <p>$$\\lim_{x \\to b} [f(x)]^n = L^n$$ for $$n \\in \\mathbb{Z}^+$$ (power)</p>
                            <p>$$\\lim_{x \\to b} \\sqrt[n]{f(x)} = \\sqrt[n]{L}$$ (root, with restrictions)</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Constant Limit",
                            statement: "Evaluate $$\\lim_{x \\to 5} 3$$.",
                            solution: `**Step 1:** Apply the constant limit law
$$\\lim_{x \\to b} c = c$$

**Step 2:** Substitute
$$\\lim_{x \\to 5} 3 = 3$$

Therefore, $$\\lim_{x \\to 5} 3 = 3$$.

**Note:** The limit of a constant is always that constant, regardless of what $$x$$ approaches.`
                        },
                        {
                            difficulty: "A",
                            title: "Identity Limit",
                            statement: "Evaluate $$\\lim_{x \\to 0} x$$.",
                            solution: `**Step 1:** Apply the identity limit law
$$\\lim_{x \\to b} x = b$$

**Step 2:** Substitute $$b = 0$$
$$\\lim_{x \\to 0} x = 0$$

Therefore, $$\\lim_{x \\to 0} x = 0$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Linear Function Limit",
                            statement: "Evaluate $$\\lim_{x \\to -2} (5x + 7)$$.",
                            solution: `**Step 1:** Recognize polynomial function
$$f(x) = 5x + 7$$ is a polynomial (degree 1)

**Step 2:** Apply polynomial limit theorem
For polynomials: $$\\lim_{x \\to b} f(x) = f(b)$$

**Step 3:** Evaluate at $$x = -2$$
$$\\lim_{x \\to -2} (5x + 7) = 5(-2) + 7 = -10 + 7 = -3$$

Therefore, $$\\lim_{x \\to -2} (5x + 7) = -3$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Polynomial Limit",
                            statement: "Evaluate $$\\lim_{x \\to 1} (x^7 - 2x^6 + 1)$$.",
                            solution: `**Step 1:** Recognize polynomial
$$f(x) = x^7 - 2x^6 + 1$$ is a polynomial

**Step 2:** Apply direct substitution
$$\\lim_{x \\to 1} (x^7 - 2x^6 + 1) = 1^7 - 2(1)^6 + 1$$

**Step 3:** Calculate
$$= 1 - 2 + 1 = 0$$

Therefore, $$\\lim_{x \\to 1} (x^7 - 2x^6 + 1) = 0$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Constant Multiple Law",
                            statement: "Evaluate $$\\lim_{x \\to \\frac{\\pi}{2}} 3(2x - 3)$$.",
                            solution: `**Step 1:** Apply constant multiple law
$$\\lim_{x \\to b} [cf(x)] = c \\lim_{x \\to b} f(x)$$

$$\\lim_{x \\to \\frac{\\pi}{2}} 3(2x - 3) = 3 \\lim_{x \\to \\frac{\\pi}{2}} (2x - 3)$$

**Step 2:** Evaluate the inner limit (polynomial)
$$\\lim_{x \\to \\frac{\\pi}{2}} (2x - 3) = 2 \\cdot \\frac{\\pi}{2} - 3 = \\pi - 3$$

**Step 3:** Multiply by constant
$$3(\\pi - 3) = 3\\pi - 9$$

Therefore, $$\\lim_{x \\to \\frac{\\pi}{2}} 3(2x - 3) = 3\\pi - 9$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Reciprocal Limit",
                            statement: "Evaluate $$\\lim_{x \\to 7} \\frac{1}{x - 8}$$.",
                            solution: `**Step 1:** Apply reciprocal limit law
$$\\lim_{x \\to b} \\frac{1}{g(x)} = \\frac{1}{M}$$ where $$M = \\lim_{x \\to b} g(x) \\neq 0$$

**Step 2:** Find $$\\lim_{x \\to 7} (x - 8)$$
$$\\lim_{x \\to 7} (x - 8) = 7 - 8 = -1 \\neq 0$$ ✓

**Step 3:** Apply the law
$$\\lim_{x \\to 7} \\frac{1}{x - 8} = \\frac{1}{-1} = -1$$

Therefore, $$\\lim_{x \\to 7} \\frac{1}{x - 8} = -1$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Sum Law Application",
                            statement: "Given $$\\lim_{x \\to 4} (x - 1) = 3$$ and $$\\lim_{x \\to 4} (2x + 1) = 9$$, evaluate $$\\lim_{x \\to 4} [(x - 1) - (2x + 1)]$$.",
                            solution: `**Step 1:** Apply sum/difference law
$$\\lim_{x \\to b} [f(x) \\pm g(x)] = L \\pm M$$

**Step 2:** Substitute given limits
$$\\lim_{x \\to 4} [(x - 1) - (2x + 1)] = \\lim_{x \\to 4} (x - 1) - \\lim_{x \\to 4} (2x + 1)$$

**Step 3:** Use given values
$$= 3 - 9 = -6$$

Therefore, $$\\lim_{x \\to 4} [(x - 1) - (2x + 1)] = -6$$.

**Verification:** Direct calculation:
$$\\lim_{x \\to 4} [(x - 1) - (2x + 1)] = \\lim_{x \\to 4} (x - 1 - 2x - 1) = \\lim_{x \\to 4} (-x - 2) = -4 - 2 = -6$$ ✓`
                        },
                        {
                            difficulty: "B",
                            title: "Product Law",
                            statement: "Given $$\\lim_{x \\to 4} (x - 1) = 3$$ and $$\\lim_{x \\to 4} (2x + 1) = 9$$, evaluate $$\\lim_{x \\to 4} [(x - 1)(2x + 1)]$$.",
                            solution: `**Step 1:** Apply product law
$$\\lim_{x \\to b} [f(x) \\cdot g(x)] = L \\cdot M$$

**Step 2:** Substitute given limits
$$\\lim_{x \\to 4} [(x - 1)(2x + 1)] = \\lim_{x \\to 4} (x - 1) \\cdot \\lim_{x \\to 4} (2x + 1)$$

**Step 3:** Multiply the limits
$$= 3 \\cdot 9 = 27$$

Therefore, $$\\lim_{x \\to 4} [(x - 1)(2x + 1)] = 27$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Power Law",
                            statement: "Given $$\\lim_{x \\to 4} (x - 1) = 3$$, evaluate $$\\lim_{x \\to 4} (x - 1)^5$$.",
                            solution: `**Step 1:** Apply power law
$$\\lim_{x \\to b} [f(x)]^n = L^n$$ for $$n \\in \\mathbb{Z}^+$$

**Step 2:** Substitute
$$\\lim_{x \\to 4} (x - 1)^5 = \\left[\\lim_{x \\to 4} (x - 1)\\right]^5$$

**Step 3:** Use given limit
$$= 3^5 = 243$$

Therefore, $$\\lim_{x \\to 4} (x - 1)^5 = 243$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Quotient Law",
                            statement: "Given $$\\lim_{x \\to 4} (x - 1) = 3$$ and $$\\lim_{x \\to 4} (2x + 1) = 9$$, evaluate $$\\lim_{x \\to 4} \\frac{2x + 1}{x - 1}$$.",
                            solution: `**Step 1:** Check denominator limit
$$\\lim_{x \\to 4} (x - 1) = 3 \\neq 0$$ ✓

**Step 2:** Apply quotient law
$$\\lim_{x \\to b} \\frac{f(x)}{g(x)} = \\frac{L}{M}$$ (if $$M \\neq 0$$)

**Step 3:** Substitute
$$\\lim_{x \\to 4} \\frac{2x + 1}{x - 1} = \\frac{\\lim_{x \\to 4} (2x + 1)}{\\lim_{x \\to 4} (x - 1)}$$

**Step 4:** Use given values
$$= \\frac{9}{3} = 3$$

Therefore, $$\\lim_{x \\to 4} \\frac{2x + 1}{x - 1} = 3$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Root Law",
                            statement: "Evaluate $$\\lim_{x \\to 3} \\sqrt[3]{x^2 - 1}$$.",
                            solution: `**Step 1:** Apply root law
$$\\lim_{x \\to b} \\sqrt[n]{f(x)} = \\sqrt[n]{L}$$

**Step 2:** Find the inner limit
$$\\lim_{x \\to 3} (x^2 - 1) = 3^2 - 1 = 9 - 1 = 8$$

**Step 3:** Apply cube root
$$\\lim_{x \\to 3} \\sqrt[3]{x^2 - 1} = \\sqrt[3]{8} = 2$$

Therefore, $$\\lim_{x \\to 3} \\sqrt[3]{x^2 - 1} = 2$$.

**Note:** For odd roots (like cube root), the radicand can be any real number. For even roots, we need $$L \\geq 0$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Combined Laws",
                            statement: "Evaluate $$\\lim_{h \\to 3} \\frac{4h^2 - 2h - 3}{5h - 6}$$.",
                            solution: `**Step 1:** Check if direct substitution works
Numerator at $$h = 3$$: $$4(3)^2 - 2(3) - 3 = 36 - 6 - 3 = 27$$
Denominator at $$h = 3$$: $$5(3) - 6 = 15 - 6 = 9 \\neq 0$$ ✓

**Step 2:** Apply quotient law
$$\\lim_{h \\to 3} \\frac{4h^2 - 2h - 3}{5h - 6} = \\frac{\\lim_{h \\to 3} (4h^2 - 2h - 3)}{\\lim_{h \\to 3} (5h - 6)}$$

**Step 3:** Evaluate limits (polynomials)
$$= \\frac{27}{9} = 3$$

Therefore, $$\\lim_{h \\to 3} \\frac{4h^2 - 2h - 3}{5h - 6} = 3$$.

**Shortcut:** Since both numerator and denominator are polynomials and the denominator isn't zero at $$h = 3$$, we can use direct substitution:
$$\\lim_{h \\to 3} \\frac{4h^2 - 2h - 3}{5h - 6} = \\frac{4(3)^2 - 2(3) - 3}{5(3) - 6} = \\frac{27}{9} = 3$$`
                        },
                        {
                            difficulty: "D",
                            title: "Proving a Limit Law",
                            statement: "Using the epsilon-delta definition, prove the constant multiple law: If $$\\lim_{x \\to b} f(x) = L$$, then $$\\lim_{x \\to b} [cf(x)] = cL$$ for any constant $$c \\neq 0$$.",
                            solution: `**Proof:**

**Given:** $$\\lim_{x \\to b} f(x) = L$$ and $$c \\neq 0$$

**To Prove:** $$\\lim_{x \\to b} [cf(x)] = cL$$

**Proof:**

Let $$\\epsilon > 0$$ be given.

We need to find $$\\delta > 0$$ such that:
$$0 < |x - b| < \\delta \\Rightarrow |cf(x) - cL| < \\epsilon$$

Since $$\\lim_{x \\to b} f(x) = L$$, for $$\\epsilon' = \\frac{\\epsilon}{|c|} > 0$$, there exists $$\\delta > 0$$ such that:
$$0 < |x - b| < \\delta \\Rightarrow |f(x) - L| < \\frac{\\epsilon}{|c|}$$

Now suppose $$0 < |x - b| < \\delta$$.

Then:
$$|cf(x) - cL| = |c||f(x) - L| < |c| \\cdot \\frac{\\epsilon}{|c|} = \\epsilon$$

Therefore, for any $$\\epsilon > 0$$, there exists $$\\delta > 0$$ such that $$0 < |x - b| < \\delta$$ implies $$|cf(x) - cL| < \\epsilon$$.

Hence, $$\\lim_{x \\to b} [cf(x)] = cL$$. ∎

**Key Idea:** We use the given limit with $$\\epsilon$$ replaced by $$\\frac{\\epsilon}{|c|}$$.`
                        },
                        {
                            difficulty: "E",
                            title: "Limit Law Trap",
                            statement: "Consider $$\\lim_{x \\to 0} \\frac{x}{x}$$. A student argues:\n\n\"By the quotient law, $$\\lim_{x \\to 0} \\frac{x}{x} = \\frac{\\lim_{x \\to 0} x}{\\lim_{x \\to 0} x} = \\frac{0}{0}$$, which is indeterminate, so the limit doesn't exist.\"\n\nExplain what's wrong with this reasoning and find the correct answer.",
                            solution: `**Error Analysis:**

The student's mistake is **applying the quotient law incorrectly**.

**The Quotient Law states:**
$$\\lim_{x \\to b} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to b} f(x)}{\\lim_{x \\to b} g(x)}$$

**ONLY IF** $$\\lim_{x \\to b} g(x) \\neq 0$$

**Step 1:** Check the prerequisite
$$\\lim_{x \\to 0} x = 0$$

Since the denominator limit is 0, **the quotient law does NOT apply**.

**Step 2:** Simplify before taking the limit
$$\\frac{x}{x} = 1$$ for all $$x \\neq 0$$

**Step 3:** Evaluate the limit
$$\\lim_{x \\to 0} \\frac{x}{x} = \\lim_{x \\to 0} 1 = 1$$

**Correct Answer:** $$\\lim_{x \\to 0} \\frac{x}{x} = 1$$

**Key Lessons:**
1. **Always check conditions before applying limit laws**
2. Simplify expressions BEFORE taking limits when possible
3. The form $$\\frac{0}{0}$$ is indeterminate—it doesn't mean the limit doesn't exist; it means we need a different technique

**Common Trap:** Students see $$\\frac{0}{0}$$ and either conclude:
- The limit doesn't exist (WRONG)
- The limit equals 0 (WRONG)
- The limit equals 1 (might be right, but need to justify!)

The form $$\\frac{0}{0}$$ requires algebraic manipulation, L'Hôpital's rule, or other techniques—it tells us NOTHING about whether the limit exists or what its value is.`
                        }
                    ]
                },
                {
                    name: "Algebraic Limit Evaluation Techniques",
                    tags: ["Limits", "55 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Resolve indeterminate forms using algebraic techniques</li>
                                <li>Factor expressions to simplify limits</li>
                                <li>Rationalize numerators and denominators</li>
                                <li>Use conjugate multiplication for radical expressions</li>
                            </ul>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Common Indeterminate Forms</strong>
                            <p>Forms that require further analysis:</p>
                            <p>$$\\frac{0}{0}$$, $$\\frac{\\infty}{\\infty}$$, $$0 \\cdot \\infty$$, $$\\infty - \\infty$$, $$0^0$$, $$1^\\infty$$, $$\\infty^0$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Techniques for $$\\frac{0}{0}$$ Forms</strong>
                            <p><strong>1. Factoring:</strong> Factor and cancel common terms</p>
                            <p><strong>2. Rationalization:</strong> Multiply by conjugate for radicals</p>
                            <p><strong>3. Algebraic manipulation:</strong> Combine fractions, expand, simplify</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Factoring",
                            statement: "Evaluate $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$.",
                            solution: `**Step 1:** Check for direct substitution
$$\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Factor numerator
$$x^2 - 9 = (x - 3)(x + 3)$$

**Step 3:** Simplify
$$\\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3$$ (for $$x \\neq 3$$)

**Step 4:** Evaluate limit
$$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$

Therefore, $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = 6$$.

**Note:** After cancellation, direct substitution works.`
                        },
                        {
                            difficulty: "A",
                            title: "Square Root Direct Evaluation",
                            statement: "Evaluate $$\\lim_{x \\to 3} \\sqrt{x}$$.",
                            solution: `**Step 1:** Check continuity
$$\\sqrt{x}$$ is continuous for $$x > 0$$

**Step 2:** Apply direct substitution
$$\\lim_{x \\to 3} \\sqrt{x} = \\sqrt{3}$$

Therefore, $$\\lim_{x \\to 3} \\sqrt{x} = \\sqrt{3}$$.

**Note:** For continuous functions, direct substitution works.`
                        },
                        {
                            difficulty: "B",
                            title: "Difference of Squares Factoring",
                            statement: "Evaluate $$\\lim_{t \\to 2} \\frac{t^2 - t - 2}{t^2 - 4}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{2^2 - 2 - 2}{2^2 - 4} = \\frac{4 - 2 - 2}{4 - 4} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Factor numerator
$$t^2 - t - 2 = (t - 2)(t + 1)$$

**Step 3:** Factor denominator
$$t^2 - 4 = (t - 2)(t + 2)$$

**Step 4:** Simplify
$$\\frac{(t - 2)(t + 1)}{(t - 2)(t + 2)} = \\frac{t + 1}{t + 2}$$ (for $$t \\neq 2$$)

**Step 5:** Evaluate limit
$$\\lim_{t \\to 2} \\frac{t + 1}{t + 2} = \\frac{2 + 1}{2 + 2} = \\frac{3}{4}$$

Therefore, $$\\lim_{t \\to 2} \\frac{t^2 - t - 2}{t^2 - 4} = \\frac{3}{4}$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Rational Function Limit",
                            statement: "Evaluate $$\\lim_{y \\to \\frac{1}{4}} \\frac{8y - 1}{1 - 4y}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{8(\\frac{1}{4}) - 1}{1 - 4(\\frac{1}{4})} = \\frac{2 - 1}{1 - 1} = \\frac{1}{0}$$

This is NOT indeterminate (it's undefined), suggesting a vertical asymptote.

**Step 2:** Analyze the form
As $$y \\to \\frac{1}{4}$$:
- Numerator $$\\to 1$$ (positive)
- Denominator $$\\to 0$$

**Step 3:** Determine sign of denominator
For $$y$$ slightly less than $$\\frac{1}{4}$$: $$1 - 4y > 0$$
For $$y$$ slightly more than $$\\frac{1}{4}$$: $$1 - 4y < 0$$

Therefore:
$$\\lim_{y \\to \\frac{1}{4}^-} \\frac{8y - 1}{1 - 4y} = +\\infty$$
$$\\lim_{y \\to \\frac{1}{4}^+} \\frac{8y - 1}{1 - 4y} = -\\infty$$

**Answer:** The limit does not exist (two-sided), but we can describe the one-sided limits.

**Alternative answer:** Since the one-sided limits are different, $$\\lim_{y \\to \\frac{1}{4}} \\frac{8y - 1}{1 - 4y}$$ does not exist.`
                        },
                        {
                            difficulty: "B",
                            title: "Complex Rational Expression",
                            statement: "Evaluate $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{1^2 - 1}{1 - 1} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Factor numerator
$$x^2 - 1 = (x - 1)(x + 1)$$

**Step 3:** Cancel common factor
$$\\frac{(x - 1)(x + 1)}{x - 1} = x + 1$$ (for $$x \\neq 1$$)

**Step 4:** Evaluate limit
$$\\lim_{x \\to 1} (x + 1) = 1 + 1 = 2$$

Therefore, $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Conjugate Multiplication",
                            statement: "Evaluate $$\\lim_{h \\to 0} \\frac{\\sqrt{x + h} - \\sqrt{x}}{h}$$ (where $$x > 0$$ is constant).",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{\\sqrt{x + 0} - \\sqrt{x}}{0} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Multiply by conjugate
$$\\frac{\\sqrt{x + h} - \\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x + h} + \\sqrt{x}}{\\sqrt{x + h} + \\sqrt{x}}$$

**Step 3:** Expand numerator
$$= \\frac{(\\sqrt{x + h})^2 - (\\sqrt{x})^2}{h(\\sqrt{x + h} + \\sqrt{x})}$$

$$= \\frac{(x + h) - x}{h(\\sqrt{x + h} + \\sqrt{x})}$$

$$= \\frac{h}{h(\\sqrt{x + h} + \\sqrt{x})}$$

**Step 4:** Cancel $$h$$
$$= \\frac{1}{\\sqrt{x + h} + \\sqrt{x}}$$ (for $$h \\neq 0$$)

**Step 5:** Evaluate limit
$$\\lim_{h \\to 0} \\frac{1}{\\sqrt{x + h} + \\sqrt{x}} = \\frac{1}{\\sqrt{x} + \\sqrt{x}} = \\frac{1}{2\\sqrt{x}}$$

Therefore, $$\\lim_{h \\to 0} \\frac{\\sqrt{x + h} - \\sqrt{x}}{h} = \\frac{1}{2\\sqrt{x}}$$.

**Note:** This is actually the derivative of $$\\sqrt{x}$$ by the definition!`
                        },
                        {
                            difficulty: "C",
                            title: "Cubic Factoring",
                            statement: "Evaluate $$\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{2^3 - 8}{2 - 2} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Factor numerator using difference of cubes
$$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$

**Step 3:** Simplify
$$\\frac{x^3 - 8}{x - 2} = \\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$$ (for $$x \\neq 2$$)

**Step 4:** Evaluate limit
$$\\lim_{x \\to 2} (x^2 + 2x + 4) = 2^2 + 2(2) + 4 = 4 + 4 + 4 = 12$$

Therefore, $$\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2} = 12$$.

**Recall:** $$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`
                        },
                        {
                            difficulty: "C",
                            title: "Complex Conjugate",
                            statement: "Evaluate $$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{\\sqrt{4} - 2}{4 - 4} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Multiply by conjugate of numerator
$$\\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$$

**Step 3:** Expand numerator
$$= \\frac{(\\sqrt{x})^2 - 2^2}{(x - 4)(\\sqrt{x} + 2)}$$

$$= \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)}$$

**Step 4:** Cancel common factor
$$= \\frac{1}{\\sqrt{x} + 2}$$ (for $$x \\neq 4$$)

**Step 5:** Evaluate limit
$$\\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$

Therefore, $$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} = \\frac{1}{4}$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Combining Fractions",
                            statement: "Evaluate $$\\lim_{h \\to 0} \\frac{\\frac{1}{x + h} - \\frac{1}{x}}{h}$$ (where $$x \\neq 0$$ is constant).",
                            solution: `**Step 1:** Combine fractions in numerator
$$\\frac{1}{x + h} - \\frac{1}{x} = \\frac{x - (x + h)}{x(x + h)} = \\frac{-h}{x(x + h)}$$

**Step 2:** Substitute back
$$\\frac{\\frac{-h}{x(x + h)}}{h} = \\frac{-h}{x(x + h)} \\cdot \\frac{1}{h}$$

**Step 3:** Simplify
$$= \\frac{-h}{h \\cdot x(x + h)} = \\frac{-1}{x(x + h)}$$ (for $$h \\neq 0$$)

**Step 4:** Evaluate limit
$$\\lim_{h \\to 0} \\frac{-1}{x(x + h)} = \\frac{-1}{x(x + 0)} = \\frac{-1}{x^2}$$

Therefore, $$\\lim_{h \\to 0} \\frac{\\frac{1}{x + h} - \\frac{1}{x}}{h} = -\\frac{1}{x^2}$$.

**Note:** This is the derivative of $$\\frac{1}{x}$$ by definition!`
                        },
                        {
                            difficulty: "C",
                            title: "Nested Radicals",
                            statement: "Evaluate $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - 1}{x}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{\\sqrt{1 + 0} - 1}{0} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Multiply by conjugate
$$\\frac{\\sqrt{1 + x} - 1}{x} \\cdot \\frac{\\sqrt{1 + x} + 1}{\\sqrt{1 + x} + 1}$$

**Step 3:** Expand numerator
$$= \\frac{(1 + x) - 1}{x(\\sqrt{1 + x} + 1)}$$

$$= \\frac{x}{x(\\sqrt{1 + x} + 1)}$$

**Step 4:** Cancel $$x$$
$$= \\frac{1}{\\sqrt{1 + x} + 1}$$ (for $$x \\neq 0$$)

**Step 5:** Evaluate limit
$$\\lim_{x \\to 0} \\frac{1}{\\sqrt{1 + x} + 1} = \\frac{1}{\\sqrt{1} + 1} = \\frac{1}{2}$$

Therefore, $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - 1}{x} = \\frac{1}{2}$$`
                        },
                        {
                            difficulty: "D",
                            title: "Double Conjugate",
                            statement: "Evaluate $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{\\sqrt{1} - \\sqrt{1}}{0} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Multiply by conjugate
$$\\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x} \\cdot \\frac{\\sqrt{1 + x} + \\sqrt{1 - x}}{\\sqrt{1 + x} + \\sqrt{1 - x}}$$

**Step 3:** Expand numerator
$$= \\frac{(1 + x) - (1 - x)}{x(\\sqrt{1 + x} + \\sqrt{1 - x})}$$

$$= \\frac{2x}{x(\\sqrt{1 + x} + \\sqrt{1 - x})}$$

**Step 4:** Cancel $$x$$
$$= \\frac{2}{\\sqrt{1 + x} + \\sqrt{1 - x}}$$ (for $$x \\neq 0$$)

**Step 5:** Evaluate limit
$$\\lim_{x \\to 0} \\frac{2}{\\sqrt{1 + x} + \\sqrt{1 - x}} = \\frac{2}{\\sqrt{1} + \\sqrt{1}} = \\frac{2}{2} = 1$$

Therefore, $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x} = 1$$.`
                        },
                        {
                            difficulty: "E",
                            title: "Challenging Factorization",
                            statement: "Evaluate $$\\lim_{x \\to 1} \\frac{x^4 - 1}{x^3 - 1}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{1^4 - 1}{1^3 - 1} = \\frac{0}{0}$$ (indeterminate)

**Step 2:** Factor numerator
$$x^4 - 1 = (x^2)^2 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$$

**Step 3:** Factor denominator
$$x^3 - 1 = (x - 1)(x^2 + x + 1)$$

**Step 4:** Simplify
$$\\frac{(x - 1)(x + 1)(x^2 + 1)}{(x - 1)(x^2 + x + 1)} = \\frac{(x + 1)(x^2 + 1)}{x^2 + x + 1}$$ (for $$x \\neq 1$$)

**Step 5:** Evaluate limit
$$\\lim_{x \\to 1} \\frac{(x + 1)(x^2 + 1)}{x^2 + x + 1} = \\frac{(1 + 1)(1^2 + 1)}{1^2 + 1 + 1}$$

$$= \\frac{(2)(2)}{3} = \\frac{4}{3}$$

Therefore, $$\\lim_{x \\to 1} \\frac{x^4 - 1}{x^3 - 1} = \\frac{4}{3}$$.

**Key Factorizations Used:**
- $$x^4 - 1 = (x^2 - 1)(x^2 + 1)$$
- $$x^2 - 1 = (x - 1)(x + 1)$$
- $$x^3 - 1 = (x - 1)(x^2 + x + 1)$$`
                        }
                    ]
                }
            ]
        },
        {
            name: "One-Sided Limits and Infinite Limits",
            icon: "⚡",
            description: "Explore one-sided limits, infinite limits, and vertical asymptotes",
            lessons: [
                {
                    name: "One-Sided Limits",
                    tags: ["Limits", "45 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Evaluate right-hand and left-hand limits</li>
                                <li>Determine when two-sided limits exist using one-sided limits</li>
                                <li>Analyze piecewise functions at boundary points</li>
                                <li>Apply one-sided limit notation correctly</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Right-Hand Limit</strong>
                            <p>$$\\lim_{x \\to b^+} f(x) = L$$ means the function approaches $$L$$ as $$x$$ approaches $$b$$ from the right ($$x > b$$)</p>
                            <p>Formally: For any $$\\epsilon > 0$$, there exists $$\\delta > 0$$ such that if $$0 < x - b < \\delta$$, then $$|f(x) - L| < \\epsilon$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Left-Hand Limit</strong>
                            <p>$$\\lim_{x \\to b^-} f(x) = L$$ means the function approaches $$L$$ as $$x$$ approaches $$b$$ from the left ($$x < b$$)</p>
                            <p>Formally: For any $$\\epsilon > 0$$, there exists $$\\delta > 0$$ such that if $$0 < b - x < \\delta$$, then $$|f(x) - L| < \\epsilon$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>One-Sided Limit Theorem</strong>
                            <p>$$\\lim_{x \\to b} f(x) = L$$ if and only if both:</p>
                            <p>$$\\lim_{x \\to b^+} f(x) = L$$ AND $$\\lim_{x \\to b^-} f(x) = L$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Simple Piecewise Function",
                            statement: "Find $$\\lim_{x \\to 0^+} p(x)$$ and $$\\lim_{x \\to 0^-} p(x)$$ where:\n\n$$p(x) = \\begin{cases} x - 1 & x \\leq 0 \\\\ 3x & x > 0 \\end{cases}$$",
                            solution: `**Part 1:** Find $$\\lim_{x \\to 0^+} p(x)$$

**Step 1:** Identify the relevant piece
For $$x \\to 0^+$$, we have $$x > 0$$, so use $$p(x) = 3x$$

**Step 2:** Evaluate
$$\\lim_{x \\to 0^+} 3x = 3(0) = 0$$

**Part 2:** Find $$\\lim_{x \\to 0^-} p(x)$$

**Step 1:** Identify the relevant piece
For $$x \\to 0^-$$, we have $$x < 0$$ (or $$x \\leq 0$$), so use $$p(x) = x - 1$$

**Step 2:** Evaluate
$$\\lim_{x \\to 0^-} (x - 1) = 0 - 1 = -1$$

**Summary:**
- $$\\lim_{x \\to 0^+} p(x) = 0$$
- $$\\lim_{x \\to 0^-} p(x) = -1$$

**Part 3:** Does $$\\lim_{x \\to 0} p(x)$$ exist?

Since $$\\lim_{x \\to 0^+} p(x) \\neq \\lim_{x \\to 0^-} p(x)$$, the two-sided limit **does not exist**.`
                        },
                        {
                            difficulty: "A",
                            title: "Continuous Piecewise Function",
                            statement: "Find $$\\lim_{x \\to 1^+} q(x)$$, $$\\lim_{x \\to 1^-} q(x)$$, and $$\\lim_{x \\to 1} q(x)$$ where:\n\n$$q(x) = \\begin{cases} x & x \\leq 1 \\\\ x^2 & x > 1 \\end{cases}$$",
                            solution: `**Step 1:** Find right-hand limit
For $$x \\to 1^+$$: $$q(x) = x^2$$
$$\\lim_{x \\to 1^+} q(x) = \\lim_{x \\to 1^+} x^2 = 1^2 = 1$$

**Step 2:** Find left-hand limit
For $$x \\to 1^-$$: $$q(x) = x$$
$$\\lim_{x \\to 1^-} q(x) = \\lim_{x \\to 1^-} x = 1$$

**Step 3:** Compare one-sided limits
$$\\lim_{x \\to 1^+} q(x) = 1 = \\lim_{x \\to 1^-} q(x)$$

**Step 4:** Conclude
Since both one-sided limits exist and are equal:
$$\\lim_{x \\to 1} q(x) = 1$$

**Note:** Even though the function formula changes at $$x = 1$$, the limit exists because both pieces approach the same value.`
                        },
                        {
                            difficulty: "B",
                            title: "Absolute Value Function",
                            statement: "Evaluate $$\\lim_{x \\to 0^+} \\frac{|x|}{x}$$ and $$\\lim_{x \\to 0^-} \\frac{|x|}{x}$$.",
                            solution: `**Recall:** $$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$$

**Part 1:** $$\\lim_{x \\to 0^+} \\frac{|x|}{x}$$

For $$x > 0$$: $$|x| = x$$

$$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\lim_{x \\to 0^+} \\frac{x}{x} = \\lim_{x \\to 0^+} 1 = 1$$

**Part 2:** $$\\lim_{x \\to 0^-} \\frac{|x|}{x}$$

For $$x < 0$$: $$|x| = -x$$

$$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\lim_{x \\to 0^-} \\frac{-x}{x} = \\lim_{x \\to 0^-} (-1) = -1$$

**Conclusion:**
- $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = 1$$
- $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = -1$$
- $$\\lim_{x \\to 0} \\frac{|x|}{x}$$ does not exist (one-sided limits differ)`
                        },
                        {
                            difficulty: "B",
                            title: "Three-Piece Function",
                            statement: "Let $$g(x) = \\begin{cases} x^2 - 7 & x < 3 \\\\ x + 1 & 3 < x < 4 \\\\ 2x & x \\geq 4 \\end{cases}$$\n\nFind $$\\lim_{x \\to 3} g(x)$$ and $$\\lim_{x \\to 4} g(x)$$.",
                            solution: `**Part 1:** Find $$\\lim_{x \\to 3} g(x)$$

**Left-hand limit:**
For $$x \\to 3^-$$ ($$x < 3$$): $$g(x) = x^2 - 7$$
$$\\lim_{x \\to 3^-} g(x) = 3^2 - 7 = 9 - 7 = 2$$

**Right-hand limit:**
For $$x \\to 3^+$$ ($$3 < x < 4$$): $$g(x) = x + 1$$
$$\\lim_{x \\to 3^+} g(x) = 3 + 1 = 4$$

**Comparison:**
$$\\lim_{x \\to 3^-} g(x) = 2 \\neq 4 = \\lim_{x \\to 3^+} g(x)$$

Therefore, $$\\lim_{x \\to 3} g(x)$$ **does not exist**.

**Part 2:** Find $$\\lim_{x \\to 4} g(x)$$

**Left-hand limit:**
For $$x \\to 4^-$$ ($$3 < x < 4$$): $$g(x) = x + 1$$
$$\\lim_{x \\to 4^-} g(x) = 4 + 1 = 5$$

**Right-hand limit:**
For $$x \\to 4^+$$ ($$x \\geq 4$$): $$g(x) = 2x$$
$$\\lim_{x \\to 4^+} g(x) = 2(4) = 8$$

**Comparison:**
$$\\lim_{x \\to 4^-} g(x) = 5 \\neq 8 = \\lim_{x \\to 4^+} g(x)$$

Therefore, $$\\lim_{x \\to 4} g(x)$$ **does not exist**.`
                        },
                        {
                            difficulty: "C",
                            title: "Rational Function One-Sided Limits",
                            statement: "Evaluate $$\\lim_{x \\to 2^+} \\frac{3x - 1}{x - 2}$$ and $$\\lim_{x \\to 2^-} \\frac{3x - 1}{x - 2}$$.",
                            solution: `**Part 1:** $$\\lim_{x \\to 2^+} \\frac{3x - 1}{x - 2}$$

**Step 1:** Evaluate numerator at $$x = 2$$
$$3(2) - 1 = 5$$ (positive)

**Step 2:** Analyze denominator as $$x \\to 2^+$$
For $$x$$ slightly greater than 2: $$x - 2 > 0$$ (positive, approaching 0)

**Step 3:** Determine sign
$$\\frac{\\text{positive}}{\\text{positive small}} = \\text{large positive}$$

Therefore, $$\\lim_{x \\to 2^+} \\frac{3x - 1}{x - 2} = +\\infty$$

**Part 2:** $$\\lim_{x \\to 2^-} \\frac{3x - 1}{x - 2}$$

**Step 1:** Numerator remains positive ($$\\approx 5$$)

**Step 2:** Analyze denominator as $$x \\to 2^-$$
For $$x$$ slightly less than 2: $$x - 2 < 0$$ (negative, approaching 0)

**Step 3:** Determine sign
$$\\frac{\\text{positive}}{\\text{negative small}} = \\text{large negative}$$

Therefore, $$\\lim_{x \\to 2^-} \\frac{3x - 1}{x - 2} = -\\infty$$

**Conclusion:** The two-sided limit does not exist, but we can describe the behavior:
- From the right: $$+\\infty$$
- From the left: $$-\\infty$$
- $$x = 2$$ is a vertical asymptote`
                        },
                        {
                            difficulty: "C",
                            title: "Square Root One-Sided Limit",
                            statement: "Evaluate $$\\lim_{x \\to 4^+} \\sqrt{x - 4}$$ and $$\\lim_{x \\to 4^-} \\sqrt{x - 4}$$.",
                            solution: `**Part 1:** $$\\lim_{x \\to 4^+} \\sqrt{x - 4}$$

**Step 1:** Check domain
$$\\sqrt{x - 4}$$ requires $$x - 4 \\geq 0$$, so $$x \\geq 4$$

For $$x \\to 4^+$$: $$x > 4$$, so the function is defined ✓

**Step 2:** Evaluate limit
$$\\lim_{x \\to 4^+} \\sqrt{x - 4} = \\sqrt{4 - 4} = \\sqrt{0} = 0$$

**Part 2:** $$\\lim_{x \\to 4^-} \\sqrt{x - 4}$$

**Step 1:** Check domain
For $$x \\to 4^-$$: $$x < 4$$, so $$x - 4 < 0$$

The square root of a negative number is not defined (in real numbers).

**Step 2:** Conclusion
$$\\lim_{x \\to 4^-} \\sqrt{x - 4}$$ **does not exist** (function undefined for $$x < 4$$)

**Summary:**
- $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$
- $$\\lim_{x \\to 4^-} \\sqrt{x - 4}$$ does not exist
- $$\\lim_{x \\to 4} \\sqrt{x - 4}$$ does not exist (left-hand limit doesn't exist)`
                        },
                        {
                            difficulty: "C",
                            title: "Jump Discontinuity with Value at Point",
                            statement: "Let $$f(x) = \\begin{cases} 3x - 1 & x \\neq 1 \\\\ 3 & x = 1 \\end{cases}$$\n\nFind $$\\lim_{x \\to 1^+} f(x)$$, $$\\lim_{x \\to 1^-} f(x)$$, $$\\lim_{x \\to 1} f(x)$$, and $$f(1)$$.",
                            solution: `**Step 1:** Find $$\\lim_{x \\to 1^+} f(x)$$
For $$x \\to 1^+$$ ($$x \\neq 1$$): $$f(x) = 3x - 1$$
$$\\lim_{x \\to 1^+} f(x) = 3(1) - 1 = 2$$

**Step 2:** Find $$\\lim_{x \\to 1^-} f(x)$$
For $$x \\to 1^-$$ ($$x \\neq 1$$): $$f(x) = 3x - 1$$
$$\\lim_{x \\to 1^-} f(x) = 3(1) - 1 = 2$$

**Step 3:** Find $$\\lim_{x \\to 1} f(x)$$
Since both one-sided limits exist and equal 2:
$$\\lim_{x \\to 1} f(x) = 2$$

**Step 4:** Find $$f(1)$$
By definition: $$f(1) = 3$$

**Summary:**
- $$\\lim_{x \\to 1^+} f(x) = 2$$
- $$\\lim_{x \\to 1^-} f(x) = 2$$
- $$\\lim_{x \\to 1} f(x) = 2$$
- $$f(1) = 3$$

**Key observation:** The limit exists and equals 2, but $$f(1) = 3 \\neq 2$$. This is a **removable discontinuity**.`
                        },
                        {
                            difficulty: "D",
                            title: "Greatest Integer Function",
                            statement: "The greatest integer function is $$f(x) = \\lfloor x \\rfloor$$, which gives the greatest integer less than or equal to $$x$$.\n\nFind $$\\lim_{x \\to 2^+} \\lfloor x \\rfloor$$ and $$\\lim_{x \\to 2^-} \\lfloor x \\rfloor$$.",
                            solution: `**Understanding $$\\lfloor x \\rfloor$$:**
- $$\\lfloor 1.9 \\rfloor = 1$$
- $$\\lfloor 2 \\rfloor = 2$$
- $$\\lfloor 2.1 \\rfloor = 2$$

**Part 1:** $$\\lim_{x \\to 2^+} \\lfloor x \\rfloor$$

For $$x$$ slightly greater than 2 (e.g., 2.001, 2.01):
$$\\lfloor x \\rfloor = 2$$

Therefore, $$\\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$

**Part 2:** $$\\lim_{x \\to 2^-} \\lfloor x \\rfloor$$

For $$x$$ slightly less than 2 (e.g., 1.999, 1.99):
$$\\lfloor x \\rfloor = 1$$

Therefore, $$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1$$

**Conclusion:**
- $$\\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$
- $$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1$$
- $$\\lim_{x \\to 2} \\lfloor x \\rfloor$$ does not exist

**General pattern:** At any integer $$n$$:
- $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$
- $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

The greatest integer function has **jump discontinuities** at every integer.`
                        },
                        {
                            difficulty: "D",
                            title: "Parametric Piecewise Continuity",
                            statement: "For what value of $$a$$ will $$\\lim_{x \\to 2} f(x)$$ exist where:\n\n$$f(x) = \\begin{cases} ax + 3 & x < 2 \\\\ x^2 - 1 & x \\geq 2 \\end{cases}$$",
                            solution: `**Step 1:** Find $$\\lim_{x \\to 2^-} f(x)$$
For $$x \\to 2^-$$: $$f(x) = ax + 3$$
$$\\lim_{x \\to 2^-} f(x) = a(2) + 3 = 2a + 3$$

**Step 2:** Find $$\\lim_{x \\to 2^+} f(x)$$
For $$x \\to 2^+$$: $$f(x) = x^2 - 1$$
$$\\lim_{x \\to 2^+} f(x) = 2^2 - 1 = 3$$

**Step 3:** For the limit to exist
We need: $$\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)$$

$$2a + 3 = 3$$

**Step 4:** Solve for $$a$$
$$2a = 0$$
$$a = 0$$

**Verification:**
With $$a = 0$$:
- $$\\lim_{x \\to 2^-} f(x) = 2(0) + 3 = 3$$
- $$\\lim_{x \\to 2^+} f(x) = 3$$
- Both limits equal 3 ✓

Therefore, $$a = 0$$.`
                        },
                        {
                            difficulty: "E",
                            title: "Combining One-Sided Limits with Algebra",
                            statement: "Evaluate $$\\lim_{x \\to 1^+} \\frac{x^2 - 1}{x - 1}$$ and $$\\lim_{x \\to 1^-} \\frac{x^2 - 1}{x - 1}$$.\n\nMany students think these should be different. Explain why they're actually the same.",
                            solution: `**Common Misconception:**
Students might think the limit depends on which side we approach from.

**The Truth:**
$$\\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x - 1} = x + 1$$ for ALL $$x \\neq 1$$

**Part 1:** $$\\lim_{x \\to 1^+} \\frac{x^2 - 1}{x - 1}$$

For $$x > 1$$ (but $$x \\neq 1$$):
$$\\frac{x^2 - 1}{x - 1} = x + 1$$

$$\\lim_{x \\to 1^+} (x + 1) = 1 + 1 = 2$$

**Part 2:** $$\\lim_{x \\to 1^-} \\frac{x^2 - 1}{x - 1}$$

For $$x < 1$$ (so $$x \\neq 1$$):
$$\\frac{x^2 - 1}{x - 1} = x + 1$$

$$\\lim_{x \\to 1^-} (x + 1) = 1 + 1 = 2$$

**Conclusion:**
- $$\\lim_{x \\to 1^+} \\frac{x^2 - 1}{x - 1} = 2$$
- $$\\lim_{x \\to 1^-} \\frac{x^2 - 1}{x - 1} = 2$$
- $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2$$

**Why This Matters:**
The simplified form $$x + 1$$ is valid on BOTH sides of $$x = 1$$. The cancellation works regardless of approach direction. One-sided limits differ only when:
1. The function has different formulas on each side (piecewise)
2. The function behaves fundamentally differently (like $$\\frac{1}{x - 1}$$ approaching $$\\pm\\infty$$)
3. Domain restrictions prevent approach from one side

**Key Lesson:** Algebraic simplification applies everywhere except the problematic point itself. Don't assume one-sided limits must differ just because we're evaluating them separately!`
                        }
                    ]
                },
                {
                    name: "Infinite Limits and Vertical Asymptotes",
                    tags: ["Limits", "50 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Evaluate infinite limits</li>
                                <li>Determine vertical asymptotes of functions</li>
                                <li>Apply theorems for limits involving infinity</li>
                                <li>Understand indeterminate forms vs infinite limits</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Infinite Limit</strong>
                            <p>$$\\lim_{x \\to a} f(x) = +\\infty$$ means $$f(x)$$ increases without bound as $$x \\to a$$</p>
                            <p>$$\\lim_{x \\to a} f(x) = -\\infty$$ means $$f(x)$$ decreases without bound as $$x \\to a$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Basic Infinite Limit Theorems</strong>
                            <p>For $$r \\in \\mathbb{Z}^+$$:</p>
                            <p>$$\\lim_{x \\to 0^+} \\frac{1}{x^r} = +\\infty$$</p>
                            <p>$$\\lim_{x \\to 0^-} \\frac{1}{x^r} = \\begin{cases} -\\infty & \\text{if } r \\text{ is odd} \\\\ +\\infty & \\text{if } r \\text{ is even} \\end{cases}$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Properties of Infinity</strong>
                            <p>$$\\infty + \\infty = \\infty$$</p>
                            <p>$$c + \\infty = \\infty$$ (for any constant $$c$$)</p>
                            <p>$$c \\times \\infty = \\begin{cases} +\\infty & c > 0 \\\\ -\\infty & c < 0 \\end{cases}$$</p>
                            <p><strong>Indeterminate Forms:</strong> $$\\frac{\\infty}{\\infty}$$, $$\\infty - \\infty$$, $$0 \\cdot \\infty$$, $$\\frac{0}{0}$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Vertical Asymptote</strong>
                            <p>The line $$x = a$$ is a vertical asymptote of $$f$$ if at least one of these holds:</p>
                            <p>$$\\lim_{x \\to a^+} f(x) = \\pm\\infty$$ or $$\\lim_{x \\to a^-} f(x) = \\pm\\infty$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Positive Power",
                            statement: "Evaluate $$\\lim_{x \\to 0^+} \\frac{1}{x^9}$$.",
                            solution: `**Step 1:** Apply infinite limit theorem
For $$r \\in \\mathbb{Z}^+$$: $$\\lim_{x \\to 0^+} \\frac{1}{x^r} = +\\infty$$

**Step 2:** Here $$r = 9$$ (odd, but doesn't matter from the right)
$$\\lim_{x \\to 0^+} \\frac{1}{x^9} = +\\infty$$

**Reasoning:** As $$x \\to 0^+$$, $$x^9$$ approaches 0 from the positive side, so $$\\frac{1}{x^9}$$ grows without bound.`
                        },
                        {
                            difficulty: "A",
                            title: "Basic Negative Power with Odd Exponent",
                            statement: "Evaluate $$\\lim_{x \\to 0^-} \\frac{1}{x^{11}}$$.",
                            solution: `**Step 1:** Apply infinite limit theorem
For odd $$r$$: $$\\lim_{x \\to 0^-} \\frac{1}{x^r} = -\\infty$$

**Step 2:** Here $$r = 11$$ (odd)
$$\\lim_{x \\to 0^-} \\frac{1}{x^{11}} = -\\infty$$

**Reasoning:** 
- As $$x \\to 0^-$$, $$x$$ is negative and small
- $$x^{11}$$ is negative (odd power preserves sign)
- $$\\frac{1}{x^{11}}$$ is negative and large in magnitude
- Therefore the limit is $$-\\infty$$`
                        },
                        {
                            difficulty: "A",
                            title: "Basic Negative Power with Even Exponent",
                            statement: "Evaluate $$\\lim_{x \\to 0^-} \\frac{1}{x^4}$$.",
                            solution: `**Step 1:** Apply infinite limit theorem
For even $$r$$: $$\\lim_{x \\to 0^-} \\frac{1}{x^r} = +\\infty$$

**Step 2:** Here $$r = 4$$ (even)
$$\\lim_{x \\to 0^-} \\frac{1}{x^4} = +\\infty$$

**Reasoning:**
- As $$x \\to 0^-$$, $$x$$ is negative and small
- $$x^4$$ is positive (even power makes positive)
- $$\\frac{1}{x^4}$$ is positive and large
- Therefore the limit is $$+\\infty$$`
                        },
                        {
                            difficulty: "B",
                            title: "Infinite Limit with Polynomial in Numerator",
                            statement: "Evaluate $$\\lim_{x \\to 0^+} \\left(2 + 3x + \\frac{1}{x}\\right)$$.",
                            solution: `**Step 1:** Analyze each term
- $$\\lim_{x \\to 0^+} 2 = 2$$
- $$\\lim_{x \\to 0^+} 3x = 0$$
- $$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$

**Step 2:** Apply sum property
$$2 + 0 + (+\\infty) = +\\infty$$

Therefore, $$\\lim_{x \\to 0^+} 

(2 + 3x + \\frac{1}{x})$$ = $$+\\infty$$.

**Note:** When a finite value is added to infinity, the result is still infinity.`
                        },
                        {
                            difficulty: "B",
                            title: "Rational Function Vertical Asymptote",
                            statement: "Find all vertical asymptotes of $$f(x) = \\frac{x + 2}{x^2 - 4}$$.",
                            solution: `**Step 1:** Find where denominator equals zero
$$x^2 - 4 = 0$$
$$(x - 2)(x + 2) = 0$$
$$x = 2$$ or $$x = -2$$

**Step 2:** Check $$x = 2$$
Numerator at $$x = 2$$: $$2 + 2 = 4 \\neq 0$$

Since numerator is non-zero, we have:
$$\\lim_{x \\to 2} \\frac{x + 2}{x^2 - 4}$$ is infinite

Therefore, $$x = 2$$ is a vertical asymptote.

**Step 3:** Check $$x = -2$$
$$f(x) = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}$$ for $$x \\neq -2$$

The factor $$(x + 2)$$ cancels, so there's a hole at $$x = -2$$, not an asymptote.

**Answer:** The only vertical asymptote is $$x = 2$$.

**Common Mistake:** Assuming every zero of the denominator gives a vertical asymptote. Must check if the factor cancels!`
                        },
                        {
                            difficulty: "B",
                            title: "Sign Analysis for Infinite Limits",
                            statement: "Evaluate $$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3}$$ and $$\\lim_{x \\to 3^-} \\frac{x + 1}{x - 3}$$.",
                            solution: `**Part 1:** $$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3}$$

**Step 1:** Evaluate numerator at $$x = 3$$
$$x + 1 = 3 + 1 = 4 > 0$$

**Step 2:** Analyze denominator as $$x \\to 3^+$$
For $$x$$ slightly greater than 3: $$x - 3 > 0$$ (small positive)

**Step 3:** Determine behavior
$$\\frac{\\text{positive}}{\\text{small positive}} = \\text{large positive}$$

Therefore, $$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3} = +\\infty$$

**Part 2:** $$\\lim_{x \\to 3^-} \\frac{x + 1}{x - 3}$$

**Step 1:** Numerator still positive ($$\\approx 4$$)

**Step 2:** Analyze denominator as $$x \\to 3^-$$
For $$x$$ slightly less than 3: $$x - 3 < 0$$ (small negative)

**Step 3:** Determine behavior
$$\\frac{\\text{positive}}{\\text{small negative}} = \\text{large negative}$$

Therefore, $$\\lim_{x \\to 3^-} \\frac{x + 1}{x - 3} = -\\infty$$

**Conclusion:** $$x = 3$$ is a vertical asymptote.`
                        },
                        {
                            difficulty: "C",
                            title: "Complex Infinite Limit",
                            statement: "Evaluate $$\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4}$$.",
                            solution: `**Step 1:** Check direct substitution
$$\\frac{2^2 - 5(2) + 6}{2^2 - 4} = \\frac{4 - 10 + 6}{4 - 4} = \\frac{0}{0}$$

This is indeterminate, NOT infinite!

**Step 2:** Factor numerator
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Step 3:** Factor denominator
$$x^2 - 4 = (x - 2)(x + 2)$$

**Step 4:** Simplify
$$\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$$ for $$x \\neq 2$$

**Step 5:** Evaluate limit
$$\\lim_{x \\to 2} \\frac{x - 3}{x + 2} = \\frac{2 - 3}{2 + 2} = \\frac{-1}{4}$$

**Answer:** $$\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4} = -\\frac{1}{4}$$

**Key Point:** This is a removable discontinuity, not a vertical asymptote. The $$\\frac{0}{0}$$ form required algebraic simplification.`
                        },
                        {
                            difficulty: "C",
                            title: "Multiple Vertical Asymptotes",
                            statement: "Find all vertical asymptotes of $$g(x) = \\frac{2x}{x^2 + x - 6}$$.",
                            solution: `**Step 1:** Factor denominator
$$x^2 + x - 6 = (x + 3)(x - 2)$$

**Step 2:** Find zeros of denominator
$$x = -3$$ or $$x = 2$$

**Step 3:** Check $$x = -3$$
Numerator at $$x = -3$$: $$2(-3) = -6 \\neq 0$$ ✓

$$x = -3$$ is a vertical asymptote.

**Step 4:** Check $$x = 2$$
Numerator at $$x = 2$$: $$2(2) = 4 \\neq 0$$ ✓

$$x = 2$$ is a vertical asymptote.

**Step 5:** Verify by analyzing limits
At $$x = -3$$:
- $$\\lim_{x \\to -3^+} \\frac{2x}{(x+3)(x-2)}$$: numerator $$\\approx -6$$, denominator $$\\approx (0^+)(-5) < 0$$ → $$+\\infty$$
- $$\\lim_{x \\to -3^-} \\frac{2x}{(x+3)(x-2)}$$: numerator $$\\approx -6$$, denominator $$\\approx (0^-)(-5) > 0$$ → $$-\\infty$$

At $$x = 2$$:
- $$\\lim_{x \\to 2^+} \\frac{2x}{(x+3)(x-2)}$$: numerator $$\\approx 4$$, denominator $$\\approx (5)(0^+) > 0$$ → $$+\\infty$$
- $$\\lim_{x \\to 2^-} \\frac{2x}{(x+3)(x-2)}$$: numerator $$\\approx 4$$, denominator $$\\approx (5)(0^-) < 0$$ → $$-\\infty$$

**Answer:** Vertical asymptotes at $$x = -3$$ and $$x = 2$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Infinite Limit with Constants",
                            statement: "Evaluate $$\\lim_{x \\to 1^-} \\left(5 - \\frac{2}{x - 1}\\right)$$.",
                            solution: `**Step 1:** Analyze each term separately
- $$\\lim_{x \\to 1^-} 5 = 5$$
- For $$\\lim_{x \\to 1^-} \\frac{2}{x - 1}$$: denominator $$\\to 0^-$$ (negative)

**Step 2:** Evaluate $$\\lim_{x \\to 1^-} \\frac{2}{x - 1}$$
$$\\frac{2}{\\text{small negative}} = \\text{large negative}$$

So $$\\lim_{x \\to 1^-} \\frac{2}{x - 1} = -\\infty$$

**Step 3:** Combine
$$\\lim_{x \\to 1^-} \\left(5 - \\frac{2}{x - 1}\\right) = 5 - (-\\infty)$$

**Step 4:** Interpret
$$5 - (-\\infty) = 5 + \\infty = +\\infty$$

Therefore, $$\\lim_{x \\to 1^-} \\left(5 - \\frac{2}{x - 1}\\right) = +\\infty$$.`
                        },
                        {
                            difficulty: "D",
                            title: "Infinite Limit Product",
                            statement: "Evaluate $$\\lim_{x \\to 0^+} x^2 \\cdot \\frac{1}{x^3}$$. Does this contradict the indeterminate form $$0 \\cdot \\infty$$?",
                            solution: `**Step 1:** Simplify before taking limit
$$x^2 \\cdot \\frac{1}{x^3} = \\frac{x^2}{x^3} = \\frac{1}{x}$$ for $$x \\neq 0$$

**Step 2:** Evaluate limit
$$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$

**Addressing the question:**

The form $$0 \\cdot \\infty$$ is indeterminate, meaning we cannot determine the limit without further analysis.

**Key distinction:**
- $$\\lim_{x \\to 0^+} x^2 = 0$$
- $$\\lim_{x \\to 0^+} \\frac{1}{x^3} = +\\infty$$

So it APPEARS to be $$0 \\cdot \\infty$$, but we must simplify algebraically first!

**After simplification:** $$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$ (not indeterminate)

**Lesson:** "$$0 \\cdot \\infty$$" means the limit could be anything—we must simplify to find the actual answer. In this case, the answer is $$+\\infty$$.

**Other examples of $$0 \\cdot \\infty$$:**
- $$\\lim_{x \\to 0^+} x \\cdot \\frac{1}{x} = 1$$ (finite)
- $$\\lim_{x \\to 0^+} x^2 \\cdot \\frac{1}{x} = 0$$ (zero)
- Our example gave $$+\\infty$$

This shows why it's "indeterminate"—different approaches yield different results!`
                        },
                        {
                            difficulty: "D",
                            title: "Analyzing Vertical Asymptote Behavior",
                            statement: "For $$f(x) = \\frac{x^2 + 1}{x^2 - 1}$$, find all vertical asymptotes and determine the behavior on each side.",
                            solution: `**Step 1:** Factor denominator
$$x^2 - 1 = (x - 1)(x + 1)$$

**Step 2:** Identify potential asymptotes
Denominator zeros: $$x = 1$$ and $$x = -1$$

**Step 3:** Check if numerator is non-zero
At $$x = 1$$: numerator = $$1 + 1 = 2 \\neq 0$$ ✓
At $$x = -1$$: numerator = $$1 + 1 = 2 \\neq 0$$ ✓

**Step 4:** Analyze $$x = 1$$

$$f(x) = \\frac{x^2 + 1}{(x - 1)(x + 1)}$$

As $$x \\to 1^+$$:
- Numerator $$\\to 2$$ (positive)
- $$(x - 1) \\to 0^+$$ (positive)
- $$(x + 1) \\to 2$$ (positive)
- Denominator $$\\to 0^+$$

$$\\lim_{x \\to 1^+} f(x) = +\\infty$$

As $$x \\to 1^-$$:
- Numerator $$\\to 2$$ (positive)
- $$(x - 1) \\to 0^-$$ (negative)
- $$(x + 1) \\to 2$$ (positive)
- Denominator $$\\to 0^-$$

$$\\lim_{x \\to 1^-} f(x) = -\\infty$$

**Step 5:** Analyze $$x = -1$$

As $$x \\to -1^+$$:
- Numerator $$\\to 2$$ (positive)
- $$(x - 1) \\to -2$$ (negative)
- $$(x + 1) \\to 0^+$$ (positive)
- Denominator $$\\to 0^-$$

$$\\lim_{x \\to -1^+} f(x) = -\\infty$$

As $$x \\to -1^-$$:
- Numerator $$\\to 2$$ (positive)
- $$(x - 1) \\to -2$$ (negative)
- $$(x + 1) \\to 0^-$$ (negative)
- Denominator $$\\to 0^+$$

$$\\lim_{x \\to -1^-} f(x) = +\\infty$$

**Summary:**
- **Vertical asymptote at $$x = 1$$:**
  - From right: $$+\\infty$$
  - From left: $$-\\infty$$
  
- **Vertical asymptote at $$x = -1$$:**
  - From right: $$-\\infty$$
  - From left: $$+\\infty$$`
                        },
                        {
                            difficulty: "E",
                            title: "Tricky Vertical Asymptote Question",
                            statement: "Consider $$h(x) = \\frac{x^2 - 4}{x^2 - 3x + 2}$$.\n\na) A student claims there are vertical asymptotes at $$x = 1$$ and $$x = 2$$. Is this correct?\nb) Analyze the behavior near each critical point.",
                            solution: `**Step 1:** Factor numerator and denominator
Numerator: $$x^2 - 4 = (x - 2)(x + 2)$$
Denominator: $$x^2 - 3x + 2 = (x - 1)(x - 2)$$

**Step 2:** Simplify
$$h(x) = \\frac{(x - 2)(x + 2)}{(x - 1)(x - 2)} = \\frac{x + 2}{x - 1}$$ for $$x \\neq 2$$

**Part a)** Is the student correct?

**At $$x = 2$$:**
The factor $$(x - 2)$$ cancels! This creates a **hole**, not a vertical asymptote.

$$\\lim_{x \\to 2} h(x) = \\lim_{x \\to 2} \\frac{x + 2}{x - 1} = \\frac{2 + 2}{2 - 1} = \\frac{4}{1} = 4$$

The limit exists and is finite.

**At $$x = 1$$:**
After cancellation: $$h(x) = \\frac{x + 2}{x - 1}$$

Numerator at $$x = 1$$: $$1 + 2 = 3 \\neq 0$$ ✓

This IS a vertical asymptote.

**Answer to part a):** The student is **partially correct**. There is a vertical asymptote at $$x = 1$$, but NOT at $$x = 2$$ (there's a hole there instead).

**Part b)** Behavior analysis

**At $$x = 1$$ (vertical asymptote):**

$$h(x) = \\frac{x + 2}{x - 1}$$

As $$x \\to 1^+$$:
- Numerator $$\\to 3$$ (positive)
- Denominator $$\\to 0^+$$

$$\\lim_{x \\to 1^+} h(x) = +\\infty$$

As $$x \\to 1^-$$:
- Numerator $$\\to 3$$ (positive)
- Denominator $$\\to 0^-$$

$$\\lim_{x \\to 1^-} h(x) = -\\infty$$

**At $$x = 2$$ (removable discontinuity/hole):**

$$\\lim_{x \\to 2} h(x) = 4$$ (finite)

But $$h(2)$$ is undefined (division by zero in original form).

**Summary:**
- **$$x = 1$$:** Vertical asymptote ($$-\\infty$$ from left, $$+\\infty$$ from right)
- **$$x = 2$$:** Hole at $$(2, 4)$$

**Critical Lesson:** Always factor and simplify BEFORE identifying vertical asymptotes. Common factors indicate holes, not asymptotes!`
                        }
                    ]
                },
                {
                    name: "Limits at Infinity and Horizontal Asymptotes",
                    tags: ["Limits", "50 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Evaluate limits as $$x \\to \\infty$$ or $$x \\to -\\infty$$</li>
                                <li>Identify horizontal asymptotes</li>
                                <li>Apply techniques for rational functions at infinity</li>
                                <li>Understand end behavior of functions</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Limit at Infinity</strong>
                            <p>$$\\lim_{x \\to \\infty} f(x) = L$$ means $$f(x)$$ approaches $$L$$ as $$x$$ increases without bound</p>
                            <p>$$\\lim_{x \\to -\\infty} f(x) = L$$ means $$f(x)$$ approaches $$L$$ as $$x$$ decreases without bound</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Basic Limits at Infinity</strong>
                            <p>For $$r > 0$$:</p>
                            <p>$$\\lim_{x \\to \\infty} \\frac{1}{x^r} = 0$$</p>
                            <p>$$\\lim_{x \\to -\\infty} \\frac{1}{x^r} = 0$$</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Horizontal Asymptote</strong>
                            <p>The line $$y = L$$ is a horizontal asymptote if:</p>
                            <p>$$\\lim_{x \\to \\infty} f(x) = L$$ or $$\\lim_{x \\to -\\infty} f(x) = L$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Limits of Rational Functions at Infinity</strong>
                            <p>For $$f(x) = \\frac{a_nx^n + ... + a_0}{b_mx^m + ... + b_0}$$:</p>
                            <p>$$\\lim_{x \\to \\pm\\infty} f(x) = \\begin{cases} 0 & \\text{if } n < m \\\\ \\frac{a_n}{b_m} & \\text{if } n = m \\\\ \\pm\\infty & \\text{if } n > m \\end{cases}$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Limit at Infinity",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{1}{x^3}$$.",
                            solution: `**Step 1:** Apply basic limit at infinity theorem
For $$r > 0$$: $$\\lim_{x \\to \\infty} \\frac{1}{x^r} = 0$$

**Step 2:** Here $$r = 3$$
$$\\lim_{x \\to \\infty} \\frac{1}{x^3} = 0$$

**Intuition:** As $$x$$ gets very large, $$x^3$$ gets even larger, so $$\\frac{1}{x^3}$$ gets closer to zero.`
                        },
                        {
                            difficulty: "A",
                            title: "Constant at Infinity",
                            statement: "Evaluate $$\\lim_{x \\to -\\infty} 7$$.",
                            solution: `**Step 1:** Recognize constant function
$$f(x) = 7$$ for all $$x$$

**Step 2:** Apply constant limit
$$\\lim_{x \\to -\\infty} 7 = 7$$

**Note:** Constants remain constant regardless of $$x$$ value.`
                        },
                        {
                            difficulty: "A",
                            title: "Simple Rational Function",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{5}{x}$$.",
                            solution: `**Step 1:** Rewrite
$$\\frac{5}{x} = 5 \\cdot \\frac{1}{x}$$

**Step 2:** Apply limit laws
$$\\lim_{x \\to \\infty} \\frac{5}{x} = 5 \\cdot \\lim_{x \\to \\infty} \\frac{1}{x} = 5 \\cdot 0 = 0$$

Therefore, $$\\lim_{x \\to \\infty} \\frac{5}{x} = 0$$.`
                        },
                        {
                            difficulty: "B",
                            title: "Equal Degree Rational Function",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{3x^2 + 2x - 1}{5x^2 - 7x + 3}$$.",
                            solution: `**Method 1: Divide by highest power**

**Step 1:** Divide numerator and denominator by $$x^2$$
$$\\frac{3x^2 + 2x - 1}{5x^2 - 7x + 3} = \\frac{\\frac{3x^2}{x^2} + \\frac{2x}{x^2} - \\frac{1}{x^2}}{\\frac{5x^2}{x^2} - \\frac{7x}{x^2} + \\frac{3}{x^2}}$$

$$= \\frac{3 + \\frac{2}{x} - \\frac{1}{x^2}}{5 - \\frac{7}{x} + \\frac{3}{x^2}}$$

**Step 2:** Take limit as $$x \\to \\infty$$
$$\\lim_{x \\to \\infty} \\frac{3 + \\frac{2}{x} - \\frac{1}{x^2}}{5 - \\frac{7}{x} + \\frac{3}{x^2}} = \\frac{3 + 0 - 0}{5 - 0 + 0} = \\frac{3}{5}$$

**Method 2: Leading coefficients**
Degrees are equal (both 2), so limit = $$\\frac{\\text{leading coefficient of numerator}}{\\text{leading coefficient of denominator}} = \\frac{3}{5}$$

Therefore, $$\\lim_{x \\to \\infty} \\frac{3x^2 + 2x - 1}{5x^2 - 7x + 3} = \\frac{3}{5}$$.

**Horizontal asymptote:** $$y = \\frac{3}{5}$$`
                        },
                        {
                            difficulty: "B",
                            title: "Numerator Higher Degree",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{4x^3 - 2x + 1}{2x^2 + 5}$$.",
                            solution: `**Step 1:** Identify degrees
Numerator: degree 3
Denominator: degree 2

**Step 2:** Apply theorem
Since numerator degree > denominator degree, the limit is $$\\pm\\infty$$

**Step 3:** Determine sign
Divide numerator and denominator by $$x^2$$:
$$\\frac{4x^3 - 2x + 1}{2x^2 + 5} = \\frac{x(4x^2 - 2 + \\frac{1}{x})}{2x^2 + 5} = \\frac{4x - \\frac{2}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x^2}}$$

As $$x \\to \\infty$$:
- Numerator $$\\to \\infty$$ (dominated by $$4x$$)
- Denominator $$\\to 2$$ (positive)

Therefore, $$\\lim_{x \\to \\infty} \\frac{4x^3 - 2x + 1}{2x^2 + 5} = +\\infty$$.

**Note:** No horizontal asymptote exists (function grows without bound).`
                        },
                        {
                            difficulty: "B",
                            title: "Denominator Higher Degree",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{7x + 3}{x^3 - 2x + 1}$$.",
                            solution: `**Step 1:** Identify degrees
Numerator: degree 1
Denominator: degree 3

**Step 2:** Apply theorem
Since numerator degree < denominator degree, the limit is 0

**Step 3:** Verify by dividing by $$x^3$$
$$\\frac{7x + 3}{x^3 - 2x + 1} = \\frac{\\frac{7}{x^2} + \\frac{3}{x^3}}{1 - \\frac{2}{x^2} + \\frac{1}{x^3}}$$

As $$x \\to \\infty$$:
$$\\frac{0 + 0}{1 - 0 + 0} = \\frac{0}{1} = 0$$

Therefore, $$\\lim_{x \\to \\infty} \\frac{7x + 3}{x^3 - 2x + 1} = 0$$.

**Horizontal asymptote:** $$y = 0$$ (the x-axis)`
                        },
                        {
                            difficulty: "C",
                            title: "Different Limits at $$\\pm\\infty$$",
                            statement: "For $$f(x) = \\frac{2x}{\\sqrt{x^2 + 1}}$$, evaluate $$\\lim_{x \\to \\infty} f(x)$$ and $$\\lim_{x \\to -\\infty} f(x)$$.",
                            solution: `**Part 1:** $$\\lim_{x \\to \\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$$

**Step 1:** Divide by $$x$$ (highest power under square root)

For $$x > 0$$: $$\\sqrt{x^2} = x$$

$$\\frac{2x}{\\sqrt{x^2 + 1}} = \\frac{2x}{\\sqrt{x^2(1 + \\frac{1}{x^2})}} = \\frac{2x}{x\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{2}{\\sqrt{1 + \\frac{1}{x^2}}}$$

**Step 2:** Take limit
$$\\lim_{x \\to \\infty} \\frac{2}{\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{2}{\\sqrt{1 + 0}} = \\frac{2}{1} = 2$$

**Part 2:** $$\\lim_{x \\to -\\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$$

**Step 1:** Divide by $$|x| = -x$$ (since $$x < 0$$)

For $$x < 0$$: $$\\sqrt{x^2} = |x| = -x$$

$$\\frac{2x}{\\sqrt{x^2 + 1}} = \\frac{2x}{-x\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{-2}{\\sqrt{1 + \\frac{1}{x^2}}}$$

**Step 2:** Take limit
$$\\lim_{x \\to -\\infty} \\frac{-2}{\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{-2}{\\sqrt{1 + 0}} = -2$$

**Summary:**
- $$\\lim_{x \\to \\infty} f(x) = 2$$
- $$\\lim_{x \\to -\\infty} f(x) = -2$$

**Horizontal asymptotes:** $$y = 2$$ (as $$x \\to \\infty$$) and $$y = -2$$ (as $$x \\to -\\infty$$)`
                        },
                        {
                            difficulty: "C",
                            title: "Limit with Square Roots",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} (\\sqrt{x^2 + 4x} - x)$$.",
                            solution: `**Step 1:** This appears to be $$\\infty - \\infty$$ (indeterminate)

**Step 2:** Rationalize by multiplying by conjugate
$$\\sqrt{x^2 + 4x} - x = (\\sqrt{x^2 + 4x} - x) \\cdot \\frac{\\sqrt{x^2 + 4x} + x}{\\sqrt{x^2 + 4x} + x}$$

$$= \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x}$$

$$= \\frac{4x}{\\sqrt{x^2 + 4x} + x}$$

**Step 3:** Divide numerator and denominator by $$x$$

For $$x > 0$$:
$$= \\frac{4}{\\frac{\\sqrt{x^2 + 4x}}{x} + 1} = \\frac{4}{\\sqrt{\\frac{x^2 + 4x}{x^2}} + 1} = \\frac{4}{\\sqrt{1 + \\frac{4}{x}} + 1}$$

**Step 4:** Take limit
$$\\lim_{x \\to \\infty} \\frac{4}{\\sqrt{1 + \\frac{4}{x}} + 1} = \\frac{4}{\\sqrt{1 + 0} + 1} = \\frac{4}{2} = 2$$

Therefore, $$\\lim_{x \\to \\infty} (\\sqrt{x^2 + 4x} - x) = 2$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Exponential-Like Behavior",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{2^x}{x^{100}}$$.",
                            solution: `**Intuition:** Exponential functions grow faster than any polynomial.

**Formal approach:** For large $$x$$, $$2^x$$ grows much faster than $$x^{100}$$

**Analysis:**
As $$x$$ increases:
- $$x^{100}$$ grows as a power function
- $$2^x$$ grows exponentially (much faster)

**Demonstration with values:**
- $$x = 10$$: $$\\frac{2^{10}}{10^{100}} \\approx \\frac{1024}{10^{100}}$$ (very small)

Wait, let me recalculate...

For $$x = 10$$: $$2^{10} = 1024$$, $$10^{100}$$ is huge

For $$x = 200$$: $$2^{200}$$ vs $$200^{100}$$

Actually, $$2^{200} = (2^2)^{100} = 4^{100}$$ vs $$200^{100}$$

Since $$4 < 200$$, we have $$4^{100} < 200^{100}$$ initially.

But exponentials eventually dominate. Let's use a different approach.

**Correct Analysis:**
The ratio $$\\frac{2^x}{x^{100}}$$ can be rewritten as:
$$\\frac{2^x}{x^{100}} = \\left(\\frac{2^{x/100}}{x}\\right)^{100}$$

For $$x$$ large enough, $$2^{x/100}$$ grows much faster than $$x$$.

Therefore, $$\\lim_{x \\to \\infty} \\frac{2^x}{x^{100}} = +\\infty$$.

**Key Principle:** Exponential functions grow faster than polynomial functions of any degree.`
                        },
                        {
                            difficulty: "C",
                            title: "Finding Horizontal Asymptotes",
                            statement: "Find all horizontal asymptotes of $$g(x) = \\frac{3x^2 - 5x + 1}{x^2 + 2}$$.",
                            solution: `**Step 1:** Evaluate $$\\lim_{x \\to \\infty} g(x)$$

Degrees are equal (both 2):
$$\\lim_{x \\to \\infty} \\frac{3x^2 - 5x + 1}{x^2 + 2} = \\frac{3}{1} = 3$$

**Step 2:** Evaluate $$\\lim_{x \\to -\\infty} g(x)$$

Same degrees, same leading coefficients:
$$\\lim_{x \\to -\\infty} \\frac{3x^2 - 5x + 1}{x^2 + 2} = \\frac{3}{1} = 3$$

**Conclusion:** There is one horizontal asymptote: $$y = 3$$

**Note:** For rational functions with equal degrees, there's typically one horizontal asymptote (same for both directions), given by the ratio of leading coefficients.`
                        },
                        {
                            difficulty: "D",
                            title: "Limit Involving Absolute Value at Infinity",
                            statement: "Evaluate $$\\lim_{x \\to -\\infty} \\frac{|3x - 5|}{2x + 1}$$.",
                            solution: `**Step 1:** Analyze $$|3x - 5|$$ as $$x \\to -\\infty$$

For $$x \\to -\\infty$$: $$3x - 5 < 0$$ (negative)

So $$|3x - 5| = -(3x - 5) = -3x + 5$$

**Step 2:** Substitute
$$\\lim_{x \\to -\\infty} \\frac{-3x + 5}{2x + 1}$$

**Step 3:** Divide by $$x$$
$$= \\lim_{x \\to -\\infty} \\frac{-3 + \\frac{5}{x}}{2 + \\frac{1}{x}}$$

**Step 4:** Evaluate limit
$$= \\frac{-3 + 0}{2 + 0} = \\frac{-3}{2}$$

Therefore, $$\\lim_{x \\to -\\infty} \\frac{|3x - 5|}{2x + 1} = -\\frac{3}{2}$$.

**Key Point:** When evaluating limits at $$\\pm\\infty$$ with absolute values, determine the sign of the expression inside to simplify the absolute value correctly.`
                        },
                        {
                            difficulty: "D",
                            title: "Comparing Growth Rates",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{\\ln(x)}{x}$$ (assume knowledge that $$\\ln(x)$$ grows slower than any positive power of $$x$$).",
                            solution: `**Given fact:** $$\\ln(x)$$ grows slower than $$x^a$$ for any $$a > 0$$

**Step 1:** Apply the growth rate comparison
Since $$\\ln(x)$$ grows slower than $$x^1 = x$$:

$$\\frac{\\ln(x)}{x} \\to 0$$ as $$x \\to \\infty$$

**Step 2:** Formal statement
$$\\lim_{x \\to \\infty} \\frac{\\ln(x)}{x} = 0$$

**Intuition:** While both $$\\ln(x)$$ and $$x$$ grow without bound, $$x$$ grows much faster, making the ratio approach zero.

**Example values:**
- $$x = 10$$: $$\\frac{\\ln(10)}{10} \\approx \\frac{2.3}{10} \\approx 0.23$$
- $$x = 100$$: $$\\frac{\\ln(100)}{100} \\approx \\frac{4.6}{100} \\approx 0.046$$
- $$x = 1000$$: $$\\frac{\\ln(1000)}{1000} \\approx \\frac{6.9}{1000} \\approx 0.0069$$

The ratio decreases toward zero.

**Note:** This can be proven rigorously using L'Hôpital's rule (covered in later calculus).`
                        },
                        {
                            difficulty: "E",
                            title: "Challenging Infinite Limit",
                            statement: "Evaluate $$\\lim_{x \\to \\infty} \\frac{\\sqrt{x^4 + 3x^2} - x^2}{x}$$.",
                            solution: `**Step 1:** Factor $$x^4$$ from under the square root

For $$x > 0$$:
$$\\sqrt{x^4 + 3x^2} = \\sqrt{x^4(1 + \\frac{3}{x^2})} = x^2\\sqrt{1 + \\frac{3}{x^2}}$$

**Step 2:** Substitute
$$\\frac{x^2\\sqrt{1 + \\frac{3}{x^2}} - x^2}{x} = \\frac{x^2(\\sqrt{1 + \\frac{3}{x^2}} - 1)}{x}$$

$$= x(\\sqrt{1 + \\frac{3}{x^2}} - 1)$$

**Step 3:** This appears to be $$\\infty \\cdot 0$$ form; rationalize

Multiply by conjugate:
$$x(\\sqrt{1 + \\frac{3}{x^2}} - 1) \\cdot \\frac{\\sqrt{1 + \\frac{3}{x^2}} + 1}{\\sqrt{1 + \\frac{3}{x^2}} + 1}$$

$$= x \\cdot \\frac{(1 + \\frac{3}{x^2}) - 1}{\\sqrt{1 + \\frac{3}{x^2}} + 1}$$

$$= x \\cdot \\frac{\\frac{3}{x^2}}{\\sqrt{1 + \\frac{3}{x^2}} + 1}$$

$$= \\frac{3}{x(\\sqrt{1 + \\frac{3}{x^2}} + 1)}$$

$$= \\frac{3}{x\\sqrt{1 + \\frac{3}{x^2}} + x}$$

**Step 4:** Divide by $$x$$
$$= \\frac{\\frac{3}{x}}{\\sqrt{1 + \\frac{3}{x^2}} + 1}$$

**Step 5:** Take limit
$$\\lim_{x \\to \\infty} \\frac{\\frac{3}{x}}{\\sqrt{1 + \\frac{3}{x^2}} + 1} = \\frac{0}{\\sqrt{1 + 0} + 1} = \\frac{0}{2} = 0$$

Therefore, $$\\lim_{x \\to \\infty} \\frac{\\sqrt{x^4 + 3x^2} - x^2}{x} = 0$$.`
                        }
                    ]
                }
            ]
        },
        {
            name: "Continuity",
            icon: "🌟",
            description: "Master the concept of continuity, types of discontinuities, and the Intermediate Value Theorem",
            lessons: [
                {
                    name: "Definition and Types of Continuity",
                    tags: ["Continuity", "50 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>Apply the formal definition of continuity at a point</li>
                                <li>Identify removable, jump, and infinite discontinuities</li>
                                <li>Determine where functions are continuous</li>
                                <li>Understand continuity on intervals</li>
                            </ul>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Continuity at a Point</strong>
                            <p>A function $$f$$ is continuous at $$x = a$$ if:</p>
                            <ol style="margin-left: 1.5rem;">
                                <li>$$f(a)$$ is defined</li>
                                <li>$$\\lim_{x \\to a} f(x)$$ exists</li>
                                <li>$$\\lim_{x \\to a} f(x) = f(a)$$</li>
                            </ol>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Types of Discontinuities</strong>
                            <p><strong>Removable:</strong> $$\\lim_{x \\to a} f(x)$$ exists but $$f(a)$$ is undefined or $$f(a) \\neq \\lim_{x \\to a} f(x)$$</p>
                            <p><strong>Jump:</strong> $$\\lim_{x \\to a^+} f(x) \\neq \\lim_{x \\to a^-} f(x)$$</p>
                            <p><strong>Infinite:</strong> At least one one-sided limit is $$\\pm\\infty$$</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Continuous Functions</strong>
                            <p>The following are continuous on their domains:</p>
                            <p>• Polynomials (continuous everywhere)</p>
                            <p>• Rational functions (continuous except where denominator = 0)</p>
                            <p>• Root functions (continuous on their domains)</p>
                            <p>• Trigonometric functions (continuous on their domains)</p>
                            <p>• Exponential and logarithmic functions (continuous on their domains)</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Testing Continuity at a Point",
                            statement: "Is $$f(x) = \\frac{x^2 - 4}{x - 2}$$ continuous at $$x = 2$$?",
                            solution: `**Step 1:** Check if $$f(2)$$ is defined
$$f(2) = \\frac{2^2 - 4}{2 - 2} = \\frac{0}{0}$$ (undefined)

**Conclusion:** Since $$f(2)$$ is not defined, $$f$$ is NOT continuous at $$x = 2$$.

**Step 2:** Determine type of discontinuity
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$

The limit exists, so this is a **removable discontinuity**.

**To make continuous:** Define $$f(2) = 4$$.`
                        },
                        {
                            difficulty: "A",
                            title: "Polynomial Continuity",
                            statement: "Is $$g(x) = 3x^2 - 5x + 2$$ continuous at $$x = 1$$?",
                            solution: `**Step 1:** Check if $$g(1)$$ is defined
$$g(1) = 3(1)^2 - 5(1) + 2 = 3 - 5 + 2 = 0$$ ✓

**Step 2:** Check if $$\\lim_{x \\to 1} g(x)$$ exists
Polynomials are continuous everywhere, so:
$$\\lim_{x \\to 1} g(x) = g(1) = 0$$ ✓

**Step 3:** Verify $$\\lim_{x \\to 1} g(x) = g(1)$$
$$0 = 0$$ ✓

**Conclusion:** Yes, $$g$$ is continuous at $$x = 1$$.

In fact, $$g$$ is continuous at every real number (all polynomials are).`
                        },
                        {
                            difficulty: "A",
                            title: "Removable Discontinuity",
                            statement: "Let $$h(x) = \\begin{cases} x + 1 & x \\neq 2 \\\\ 5 & x = 2 \\end{cases}$$\n\nIs $$h$$ continuous at $$x = 2$$?",
                            solution: `**Step 1:** Check if $$h(2)$$ is defined
$$h(2) = 5$$ ✓

**Step 2:** Find $$\\lim_{x \\to 2} h(x)$$
For $$x \\neq 2$$: $$h(x) = x + 1$$
$$\\lim_{x \\to 2} h(x) = \\lim_{x \\to 2} (x + 1) = 3$$

**Step 3:** Compare
$$\\lim_{x \\to 2} h(x) = 3 \\neq 5 = h(2)$$

**Conclusion:** No, $$h$$ is NOT continuous at $$x = 2$$.

This is a **removable discontinuity** because the limit exists but doesn't equal the function value.`
                        },
                        {
                            difficulty: "B",
                            title: "Piecewise Function Continuity",
                            statement: "Let $$f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x & x > 1 \\end{cases}$$\n\nIs $$f$$ continuous at $$x = 1$$?",
                            solution: `**Step 1:** Check if $$f(1)$$ is defined
Since $$1 \\leq 1$$: $$f(1) = 1^2 = 1$$ ✓

**Step 2:** Find $$\\lim_{x \\to 1^-} f(x)$$
For $$x < 1$$: $$f(x) = x^2$$
$$\\lim_{x \\to 1^-} f(x) = 1^2 = 1$$

**Step 3:** Find $$\\lim_{x \\to 1^+} f(x)$$
For $$x > 1$$: $$f(x) = 2x$$
$$\\lim_{x \\to 1^+} f(x) = 2(1) = 2$$

**Step 4:** Compare one-sided limits
$$\\lim_{x \\to 1^-} f(x) = 1 \\neq 2 = \\lim_{x \\to 1^+} f(x)$$

**Conclusion:** Since the one-sided limits differ, $$\\lim_{x \\to 1} f(x)$$ does not exist.

Therefore, $$f$$ is NOT continuous at $$x = 1$$.

This is a **jump discontinuity**.`
                        },
                        {
                            difficulty: "B",
                            title: "Rational Function Continuity",
                            statement: "For what values of $$x$$ is $$g(x) = \\frac{x + 3}{x^2 - 5x + 6}$$ discontinuous?",
                            solution: `**Step 1:** Find where denominator equals zero
$$x^2 - 5x + 6 = 0$$
$$(x - 2)(x - 3) = 0$$
$$x = 2$$ or $$x = 3$$

**Step 2:** Check $$x = 2$$
Numerator at $$x = 2$$: $$2 + 3 = 5 \\neq 0$$

Cannot simplify, so $$x = 2$$ is an **infinite discontinuity**.

**Step 3:** Check $$x = 3$$
Numerator at $$x = 3$$: $$3 + 3 = 6 \\neq 0$$

Cannot simplify, so $$x = 3$$ is an **infinite discontinuity**.

**Answer:** $$g$$ is discontinuous at $$x = 2$$ and $$x = 3$$.

**Continuous on:** $$(-\\infty, 2) \\cup (2, 3) \\cup (3, \\infty)$$`
                        },
                        {
                            difficulty: "B",
                            title: "Making a Function Continuous",
                            statement: "For what value of $$k$$ is $$f(x) = \\begin{cases} \\frac{x^2 - 9}{x - 3} & x \\neq 3 \\\\ k & x = 3 \\end{cases}$$ continuous at $$x = 3$$?",
                            solution: `**Step 1:** Find $$\\lim_{x \\to 3} f(x)$$
For $$x \\neq 3$$:
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6$$

**Step 2:** For continuity at $$x = 3$$
We need: $$\\lim_{x \\to 3} f(x) = f(3)$$

$$6 = k$$

**Answer:** $$k = 6$$

**Verification:**
With $$k = 6$$:
- $$f(3) = 6$$ ✓
- $$\\lim_{x \\to 3} f(x) = 6$$ ✓
- $$\\lim_{x \\to 3} f(x) = f(3)$$ ✓

The function is continuous at $$x = 3$$ when $$k = 6$$.`
                        },
                        {
                            difficulty: "C",
                            title: "Multiple Discontinuity Types",
                            statement: "Identify all discontinuities and their types for:\n\n$$h(x) = \\begin{cases} \\frac{x^2 - 1}{x - 1} & x < 1 \\\\ 3 & x = 1 \\\\ \\frac{1}{x - 2} & 1 < x < 2 \\\\ 2 & x \\geq 2 \\end{cases}$$",
                            solution: `**Check $$x = 1$$:**

**Left limit:**
$$\\lim_{x \\to 1^-} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1^-} \\frac{(x-1)(x+1)}{x - 1} = \\lim_{x \\to 1^-} (x + 1) = 2$$

**Right limit:**
$$\\lim_{x \\to 1^+} \\frac{1}{x - 2} = \\frac{1}{1 - 2} = \\frac{1}{-1} = -1$$

**Function value:** $$h(1) = 3$$

**Analysis:**
- Left limit = 2
- Right limit = -1
- Function value = 3
- Left ≠ Right, so two-sided limit doesn't exist

**Type:** **Jump discontinuity** at $$x = 1$$

**Check $$x = 2$$:**

**Left limit:**
$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = \\frac{1}{0^-} = -\\infty$$

**Right limit:**
$$\\lim_{x \\to 2^+} 2 = 2$$

**Function value:** $$h(2) = 2$$

**Analysis:**
- Left limit = $$-\\infty$$
- Right limit = 2
- One-sided limit is infinite

**Type:** **Infinite discontinuity** at $$x = 2$$

**Summary:**
- **Jump discontinuity at $$x = 1$$**
- **Infinite discontinuity at $$x = 2$$**`
                        },
                        {
                            difficulty: "C",
                            title: "Continuity on an Interval",
                            statement: "On what interval(s) is $$f(x) = \\sqrt{4 - x^2}$$ continuous?",
                            solution: `**Step 1:** Find domain
$$\\sqrt{4 - x^2}$$ requires $$4 - x^2 \\geq 0$$

$$x^2 \\leq 4$$
$$-2 \\leq x \\leq 2$$

**Domain:** $$[-2, 2]$$

**Step 2:** Check continuity on domain
Square root functions are continuous on their domains.

$$f$$ is continuous for all $$x$$ where $$4 - x^2 \\geq 0$$

**Step 3:** Check endpoints
At $$x = -2$$: $$f(-2) = \\sqrt{4 - 4} = 0$$ (defined)
At $$x = 2$$: $$f(2) = \\sqrt{4 - 4} = 0$$ (defined)

**Answer:** $$f$$ is continuous on $$[-2, 2]$$.

**Note:** Outside this interval, $$f$$ is undefined, not merely discontinuous.`
                        },
                        {
                            difficulty: "C",
                            title: "Greatest Integer Function",
                            statement: "At what integer values is $$f(x) = \\lfloor x \\rfloor$$ (greatest integer function) discontinuous? What type of discontinuity?",
                            solution: `**Recall:** $$\\lfloor x \\rfloor$$ gives the greatest integer $$\\leq x$$

**General analysis at integer $$n$$:**

**Right limit:**
For $$x$$ slightly greater than $$n$$: $$\\lfloor x \\rfloor = n$$
$$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

**Left limit:**
For $$x$$ slightly less than $$n$$: $$\\lfloor x \\rfloor = n - 1$$
$$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

**Function value:**
$$\\lfloor n \\rfloor = n$$

**Analysis:**
- $$\\lim_{x \\to n^+} f(x) = n$$
- $$\\lim_{x \\to n^-} f(x) = n - 1$$
- $$f(n) = n$$
- Since $$n \\neq n - 1$$, the two-sided limit doesn't exist

**Answer:**
- **Discontinuous at every integer**
- **Type: Jump discontinuity**
- The "jump" is always of size 1

**Continuous:** On every interval $$(n, n+1)$$ where $$n \\in \\mathbb{Z}$$`
                        },
                        {
                            difficulty: "D",
                            title: "Parametric Continuity Problem",
                            statement: "Find values of $$a$$ and $$b$$ that make $$f$$ continuous everywhere:\n\n$$f(x) = \\begin{cases} ax + 3 & x < 1 \\\\ bx^2 + a & 1 \\leq x < 2 \\\\ 5x - b & x \\geq 2 \\end{cases}$$",
                            solution: `**Continuity at $$x = 1$$:**

**Left limit:**
$$\\lim_{x \\to 1^-} (ax + 3) = a(1) + 3 = a + 3$$

**Right limit (and function value):**
$$\\lim_{x \\to 1^+} (bx^2 + a) = b(1)^2 + a = b + a$$
$$f(1) = b + a$$

**Condition:** $$a + 3 = b + a$$
$$3 = b$$
$$b = 3$$ ... (Equation 1)

**Continuity at $$x = 2$$:**

**Left limit:**
$$\\lim_{x \\to 2^-} (bx^2 + a) = b(2)^2 + a = 4b + a$$

**Right limit (and function value):**
$$\\lim_{x \\to 2^+} (5x - b) = 5(2) - b = 10 - b$$
$$f(2) = 10 - b$$

**Condition:** $$4b + a = 10 - b$$
$$5b + a = 10$$ ... (Equation 2)

**Step 3:** Solve system
From Equation 1: $$b = 3$$
Substitute into Equation 2:
$$5(3) + a = 10$$
$$15 + a = 10$$
$$a = -5$$

**Answer:** $$a = -5$$ and $$b = 3$$

**Verification:**
At $$x = 1$$:
- Left: $$-5(1) + 3 = -2$$
- Right: $$3(1)^2 + (-5) = -2$$ ✓

At $$x = 2$$:
- Left: $$3(2)^2 + (-5) = 7$$
- Right: $$5(2) - 3 = 7$$ ✓`
                        },
                        {
                            difficulty: "D",
                            title: "Composition Continuity",
                            statement: "If $$f$$ is continuous at $$x = a$$ and $$g$$ is continuous at $$f(a)$$, prove that $$g \\circ f$$ is continuous at $$x = a$$.",
                            solution: `**Proof:**

**Given:**
- $$f$$ is continuous at $$x = a$$
- $$g$$ is continuous at $$f(a)$$

**To Prove:** $$g \\circ f$$ is continuous at $$x = a$$

**Proof:**

**Step 1:** Since $$f$$ is continuous at $$a$$:
$$\\lim_{x \\to a} f(x) = f(a)$$

**Step 2:** Since $$g$$ is continuous at $$f(a)$$:
$$\\lim_{y \\to f(a)} g(y) = g(f(a))$$

**Step 3:** Apply composition
Let $$y = f(x)$$. As $$x \\to a$$, we have $$y \\to f(a)$$ (by Step 1).

Therefore:
$$\\lim_{x \\to a} g(f(x)) = \\lim_{y \\to f(a)} g(y) = g(f(a))$$

**Step 4:** By definition
$$(g \\circ f)(x) = g(f(x))$$
$$(g \\circ f)(a) = g(f(a))$$

**Step 5:** Conclusion
$$\\lim_{x \\to a} (g \\circ f)(x) = (g \\circ f)(a)$$

Therefore, $$g \\circ f$$ is continuous at $$x = a$$. ∎

**Key Insight:** The composition of continuous functions is continuous.`
                        },
                        {
                            difficulty: "E",
                            title: "Continuity Trap",
                            statement: "Consider $$f(x) = \\begin{cases} \\sin\\left(\\frac{1}{x}\\right) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$$\n\nA student claims: \"Since $$\\sin(u)$$ is continuous and $$\\frac{1}{x}$$ approaches $$\\infty$$ as $$x \\to 0$$, the function oscillates but might still be continuous.\"\n\nIs the student correct? Analyze carefully.",
                            solution: `**Analysis:**

**Step 1:** Check continuity requirements at $$x = 0$$

**Requirement 1:** $$f(0)$$ defined?
$$f(0) = 0$$ ✓

**Requirement 2:** $$\\lim_{x \\to 0} f(x)$$ exists?

For $$x \\neq 0$$: $$f(x) = \\sin\\left(\\frac{1}{x}\\right)$$

As $$x \\to 0$$, $$\\frac{1}{x} \\to \\pm\\infty$$

**Step 2:** Analyze $$\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$$

Consider sequences approaching 0:

For $$x_n = \\frac{1}{2\\pi n}$$ (as $$n \\to \\infty$$):
$$f(x_n) = \\sin(2\\pi n) = 0$$

For $$x_n = \\frac{2}{\\pi + 4\\pi n}$$ (as $$n \\to \\infty$$):
$$f(x_n) = \\sin\\left(\\frac{\\pi + 4\\pi n}{2}\\right) = \\sin\\left(\\frac{\\pi}{2} + 2\\pi n\\right) = 1$$

**Step 3:** Conclusion from sequences
Different sequences give different limits (0 vs 1).

Therefore, $$\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$$ **does not exist**.

**Answer:** The student is **INCORRECT**.

**Why the student's reasoning fails:**
- Yes, $$\\sin(u)$$ is continuous
- Yes, $$\\frac{1}{x} \\to \\infty$$ as $$x \\to 0$$
- BUT: $$\\sin(u)$$ oscillates between -1 and 1 for all $$u$$
- As $$\\frac{1}{x}$$ goes through all values infinitely often near 0, $$\\sin\\left(\\frac{1}{x}\\right)$$ oscillates infinitely fast
- This rapid oscillation prevents a limit from existing

**Key Lesson:**
- Continuity of outer function ($$\\sin$$) doesn't guarantee continuity of composition
- Limits don't exist when function oscillates without settling down
- $$f$$ has an **oscillating discontinuity** at $$x = 0$$

**Contrast:** $$g(x) = x\\sin\\left(\\frac{1}{x}\\right)$$ with $$g(0) = 0$$ IS continuous at 0 because the $$x$$ factor "dampens" the oscillation!`
                        }
                    ]
                },
                {
                    name: "Intermediate Value Theorem and Applications",
                    tags: ["Continuity", "45 minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left: 1.5rem;">
                                <li>State and apply the Intermediate Value Theorem</li>
                                <li>Use IVT to prove existence of roots</li>
                                <li>Understand why continuity is essential for IVT</li>
                                <li>Apply IVT to real-world problems</li>
                            </ul>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>Intermediate Value Theorem (IVT)</strong>
                            <p>If $$f$$ is continuous on $$[a, b]$$ and $$N$$ is any number between $$f(a)$$ and $$f(b)$$, then there exists at least one number $$c$$ in $$(a, b)$$ such that $$f(c) = N$$.</p>
                        </div>
                        
                        <div class="theorem-box">
                            <strong>IVT for Zeros (Special Case)</strong>
                            <p>If $$f$$ is continuous on $$[a, b]$$ and $$f(a)$$ and $$f(b)$$ have opposite signs, then there exists at least one $$c \\in (a, b)$$ such that $$f(c) = 0$$.</p>
                        </div>
                        
                        <div class="definition-box">
                            <strong>Key Requirements for IVT</strong>
                            <ol style="margin-left: 1.5rem;">
                                <li>$$f$$ must be continuous on the closed interval $$[a, b]$$</li>
                                <li>$$N$$ must be between $$f(a)$$ and $$f(b)$$</li>
                            </ol>
                            <p><strong>IVT guarantees existence but not uniqueness.</strong></p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic IVT Application",
                            statement: "Show that $$f(x) = x^3 - 2x - 5$$ has a root in the interval $$(2, 3)$$.",
                            solution: `**Step 1:** Verify continuity
$$f(x) = x^3 - 2x - 5$$ is a polynomial, so it's continuous everywhere, including on $$[2, 3]$$. ✓

**Step 2:** Evaluate at endpoints
$$f(2) = 2^3 - 2(2) - 5 = 8 - 4 - 5 = -1 < 0$$
$$f(3) = 3^3 - 2(3) - 5 = 27 - 6 - 5 = 16 > 0$$

**Step 3:** Apply IVT
Since:
- $$f$$ is continuous on $$[2, 3]$$
- $$f(2) < 0 < f(3)$$ (signs differ)

By IVT, there exists $$c \\in (2, 3)$$ such that $$f(c) = 0$$.

Therefore, $$f$$ has at least one root in $$(2, 3)$$. ∎`
                        },
                        {
                            difficulty: "A",
                            title: "IVT for General Value",
                            statement: "Show that $$g(x) = x^2 + 3x$$ takes on the value 10 for some $$x$$ in $$[1, 3]$$.",
                            solution: `**Step 1:** Verify continuity
$$g(x) = x^2 + 3x$$ is a polynomial → continuous on $$[1, 3]$$ ✓

**Step 2:** Evaluate at endpoints
$$g(1) = 1^2 + 3(1) = 1 + 3 = 4$$
$$g(3) = 3^2 + 3(3) = 9 + 9 = 18$$

**Step 3:** Check if 10 is between these values
$$4 < 10 < 18$$ ✓

**Step 4:** Apply IVT
Since:
- $$g$$ is continuous on $$[1, 3]$$
- $$10$$ is between $$g(1) = 4$$ and $$g(3) = 18$$

By IVT, there exists $$c \\in (1, 3)$$ such that $$g(c) = 10$$.

**Verification (optional):**
Solve $$x^2 + 3x = 10$$:
$$x^2 + 3x - 10 = 0$$
$$(x + 5)(x - 2) = 0$$
$$x = 2$$ or $$x = -5$$

Indeed, $$x = 2 \\in (1, 3)$$ and $$g(2) = 4 + 6 = 10$$ ✓`
                        },
                        {
                            difficulty: "B",
                            title: "IVT Doesn't Apply",
                            statement: "Can we use IVT to conclude that $$h(x) = \\frac{1}{x}$$ takes on the value 0 in the interval $$[-1, 1]$$? Explain.",
                            solution: `**Step 1:** Evaluate at endpoints
$$h(-1) = \\frac{1}{-1} = -1$$
$$h(1) = \\frac{1}{1} = 1$$

**Step 2:** Check if 0 is between values
$$-1 < 0 < 1$$ ✓

**Step 3:** Check continuity
$$h(x) = \\frac{1}{x}$$ is NOT continuous on $$[-1, 1]$$ because it's undefined at $$x = 0$$.

**Conclusion:** **NO**, we cannot use IVT.

**Explanation:**
- IVT requires the function to be continuous on the ENTIRE interval $$[a, b]$$
- $$h$$ has a discontinuity at $$x = 0 \\in [-1, 1]$$
- Even though 0 is between $$h(-1)$$ and $$h(1)$$, the function never equals 0

**Reality check:** $$\\frac{1}{x} = 0$$ has no solution, confirming IVT doesn't apply.

**Key Lesson:** Continuity is essential for IVT!`
                        },
                        {
                            difficulty: "B",
                            title: "Multiple Roots",
                            statement: "Show that $$f(x) = x^4 - 4x^2 + 1$$ has at least two roots in $$[-2, 2]$$.",
                            solution: `**Strategy:** Find sign changes

**Step 1:** Verify continuity
Polynomial → continuous everywhere ✓

**Step 2:** Evaluate at several points
$$f(-2) = (-2)^4 - 4(-2)^2 + 1 = 16 - 16 + 1 = 1 > 0$$
$$f(-1) = (-1)^4 - 4(-1)^2 + 1 = 1 - 4 + 1 = -2 < 0$$
$$f(0) = 0 - 0 + 1 = 1 > 0$$
$$f(1) = 1 - 4 + 1 = -2 < 0$$
$$f(2) = 16 - 16 + 1 = 1 > 0$$

**Step 3:** Apply IVT

**Root 1:** On $$[-2, -1]$$
- $$f(-2) = 1 > 0$$
- $$f(-1) = -2 < 0$$
- Signs differ → there exists $$c_1 \\in (-2, -1)$$ with $$f(c_1) = 0$$

**Root 2:** On $$[-1, 0]$$
- $$f(-1) = -2 < 0$$
- $$f(0) = 1 > 0$$
- Signs differ → there exists $$c_2 \\in (-1, 0)$$ with $$f(c_2) = 0$$

(Could also show roots in $$(0, 1)$$ and $$(1, 2)$$ - there are actually 4 roots!)

**Conclusion:** $$f$$ has at least two roots in $$[-2, 2]$$. ∎`
                        },
                        {
                            difficulty: "B",
                            title: "IVT with Trigonometric Functions",
                            statement: "Prove that $$\\cos(x) = x$$ has at least one solution.",
                            solution: `**Step 1:** Rewrite as a root-finding problem
$$\\cos(x) = x$$
$$\\cos(x) - x = 0$$

Let $$f(x) = \\cos(x) - x$$

**Step 2:** Verify continuity
Both $$\\cos(x)$$ and $$x$$ are continuous everywhere, so $$f(x)$$ is continuous. ✓

**Step 3:** Find an interval with sign change

Try $$x = 0$$: $$f(0) = \\cos(0) - 0 = 1 - 0 = 1 > 0$$

Try $$x = \\frac{\\pi}{2}$$: $$f\\left(\\frac{\\pi}{2}\\right) = \\cos\\left(\\frac{\\pi}{2}\\right) - \\frac{\\pi}{2} = 0 - \\frac{\\pi}{2} \\approx -1.57 < 0$$

**Step 4:** Apply IVT
Since:
- $$f$$ is continuous on $$\\left[0, \\frac{\\pi}{2}\\right]$$
- $$f(0) > 0$$ and $$f\\left(\\frac{\\pi}{2}\\right) < 0$$

By IVT, there exists $$c \\in \\left(0, \\frac{\\pi}{2}\\right)$$ such that $$f(c) = 0$$.

Therefore, $$\\cos(c) = c$$, proving a solution exists. ∎

**Note:** The solution is approximately $$c \\approx 0.739$$ (can be found numerically).`
                        },
                        {
                            difficulty: "C",
                            title: "IVT Application: Fixed Point",
                            statement: "Prove that if $$f: [0, 1] \\to [0, 1]$$ is continuous, then $$f$$ has a fixed point (i.e., there exists $$c$$ such that $$f(c) = c$$).",
                            solution: `**Proof:**

**Step 1:** Define auxiliary function
Let $$g(x) = f(x) - x$$

**Step 2:** Verify continuity
Since $$f$$ is continuous on $$[0, 1]$$ and $$x$$ is continuous, $$g(x)$$ is continuous on $$[0, 1]$$. ✓

**Step 3:** Evaluate at endpoints
$$g(0) = f(0) - 0 = f(0)$$

Since $$f: [0, 1] \\to [0, 1]$$, we have $$f(0) \\in [0, 1]$$, so $$f(0) \\geq 0$$.

Therefore, $$g(0) = f(0) \\geq 0$$.

$$g(1) = f(1) - 1$$

Since $$f(1) \\in [0, 1]$$, we have $$f(1) \\leq 1$$.

Therefore, $$g(1) = f(1) - 1 \\leq 0$$.

**Step 4:** Apply IVT

**Case 1:** If $$g(0) = 0$$, then $$f(0) = 0$$, so $$c = 0$$ is a fixed point.

**Case 2:** If $$g(1) = 0$$, then $$f(1) = 1$$, so $$c = 1$$ is a fixed point.

**Case 3:** If $$g(0) > 0$$ and $$g(1) < 0$$, then by IVT, there exists $$c \\in (0, 1)$$ such that $$g(c) = 0$$.

This means $$f(c) - c = 0$$, so $$f(c) = c$$.

**Conclusion:** In all cases, there exists $$c \\in [0, 1]$$ such that $$f(c) = c$$. ∎

**Geometric interpretation:** Any continuous function from $$[0, 1]$$ to itself must cross the line $$y = x$$ at some point.`
                        },
                        {
                            difficulty: "C",
                            title: "Temperature Application",
                            statement: "At 6 AM, the temperature was $$10°C$$. At 2 PM, it was $$22°C$$. Assuming temperature varies continuously, prove that at some time between 6 AM and 2 PM, the temperature was exactly $$15°C$$.",
                            solution: `**Step 1:** Set up the problem
Let $$T(t)$$ = temperature at time $$t$$ (hours after midnight)

- At $$t = 6$$ (6 AM): $$T(6) = 10$$
- At $$t = 14$$ (2 PM): $$T(14) = 22$$

**Step 2:** State assumptions
Temperature varies continuously (reasonable physical assumption)

Therefore, $$T(t)$$ is continuous on $$[6, 14]$$.

**Step 3:** Check if target value is in range
We want $$T(t) = 15$$

Is $$15$$ between $$T(6)$$ and $$T(14)$$?
$$10 < 15 < 22$$ ✓

**Step 4:** Apply IVT
Since:
- $$T$$ is continuous on $$[6, 14]$$
- $$15$$ is between $$T(6) = 10$$ and $$T(14) = 22$$

By IVT, there exists $$c \\in (6, 14)$$ such that $$T(c) = 15$$.

**Conclusion:** At some time between 6 AM and 2 PM, the temperature was exactly $$15°C$$. ∎

**Note:** IVT doesn't tell us WHEN this occurred, only that it DID occur.`
                        },
                        {
                            difficulty: "C",
                            title: "IVT Counterexample Attempt",
                            statement: "Consider $$f(x) = \\begin{cases} -1 & -1 \\leq x < 0 \\\\ 1 & 0 \\leq x \\leq 1 \\end{cases}$$\n\nExplain why IVT doesn't guarantee that $$f(x) = 0$$ has a solution in $$[-1, 1]$$, even though $$f(-1) < 0 < f(1)$$.",
                            solution: `**Step 1:** Check continuity
$$f$$ has a jump discontinuity at $$x = 0$$:
- $$\\lim_{x \\to 0^-} f(x) = -1$$
- $$\\lim_{x \\to 0^+} f(x) = 1$$
- $$\\lim_{x \\to 0} f(x)$$ does not exist

Therefore, $$f$$ is NOT continuous on $$[-1, 1]$$.

**Step 2:** Verify IVT doesn't apply
$$f(-1) = -1 < 0$$
$$f(1) = 1 > 0$$

Even though 0 is between $$f(-1)$$ and $$f(1)$$, IVT does NOT apply because $$f$$ is not continuous on the entire interval.

**Step 3:** Verify no solution exists
For $$-1 \\leq x < 0$$: $$f(x) = -1 \\neq 0$$
For $$0 \\leq x \\leq 1$$: $$f(x) = 1 \\neq 0$$

Therefore, $$f(x) = 0$$ has NO solution in $$[-1, 1]$$.

**Key Lesson:**
- IVT requires continuity on the ENTIRE interval
- Without continuity, the conclusion may fail
- The function "jumps over" 0 without ever equaling it

**Geometric interpretation:** The graph has a vertical gap at $$x = 0$$, jumping from $$y = -1$$ to $$y = 1$$ without passing through $$y = 0$$.`
                        },
                        {
                            difficulty: "D",
                            title: "IVT and Uniqueness",
                            statement: "Given $$f(x) = x^3 + 2x + 1$$:\n\na) Show that $$f(x) = 0$$ has exactly one real root.\nb) Locate the root between two consecutive integers.",
                            solution: `**Part a)** Prove exactly one root exists

**Existence:**

**Step 1:** Check continuity
Polynomial → continuous everywhere ✓

**Step 2:** Find sign change
$$f(-1) = (-1)^3 + 2(-1) + 1 = -1 - 2 + 1 = -2 < 0$$
$$f(0) = 0 + 0 + 1 = 1 > 0$$

**Step 3:** Apply IVT
By IVT, there exists at least one $$c \\in (-1, 0)$$ with $$f(c) = 0$$.

**Uniqueness:**

**Step 4:** Show $$f$$ is strictly increasing
$$f'(x) = 3x^2 + 2$$

For all $$x \\in \\mathbb{R}$$: $$f'(x) = 3x^2 + 2 \\geq 2 > 0$$

**Step 5:** Conclude uniqueness
Since $$f'(x) > 0$$ everywhere, $$f$$ is strictly increasing.

A strictly increasing function can cross the x-axis at most once.

Combined with existence, we conclude: **exactly one real root exists**. ∎

**Part b)** The root is in $$(-1, 0)$$ (shown above).

More precisely:
$$f(-0.5) = (-0.5)^3 + 2(-0.5) + 1 = -0.125 - 1 + 1 = -0.125 < 0$$
$$f(0) = 1 > 0$$

So the root is in $$(-0.5, 0)$$.

**Note:** Numerical methods give $$c \\approx -0.4534$$.`
                        },
                        {
                            difficulty: "D",
                            title: "IVT Proof Technique",
                            statement: "Prove: If $$f$$ is continuous on $$[a, b]$$ with $$f(a) \\cdot f(b) < 0$$, then $$f$$ has a zero in $$(a, b)$$.",
                            solution: `**Proof:**

**Given:**
- $$f$$ is continuous on $$[a, b]$$
- $$f(a) \\cdot f(b) < 0$$

**To Prove:** There exists $$c \\in (a, b)$$ such that $$f(c) = 0$$

**Proof:**

**Step 1:** Interpret the condition
$$f(a) \\cdot f(b) < 0$$ means $$f(a)$$ and $$f(b)$$ have opposite signs.

**Case 1:** $$f(a) < 0 < f(b)$$

**Case 2:** $$f(b) < 0 < f(a)$$

In both cases, 0 is between $$f(a)$$ and $$f(b)$$.

**Step 2:** Apply IVT
Since:
- $$f$$ is continuous on $$[a, b]$$
- $$N = 0$$ is between $$f(a)$$ and $$f(b)$$

By the Intermediate Value Theorem, there exists $$c \\in (a, b)$$ such that $$f(c) = 0$$.

Therefore, $$f$$ has a zero in $$(a, b)$$. ∎

**Note:** This is the "zero form" of IVT, often used for root-finding.`
                        },
                        {
                            difficulty: "E",
                            title: "IVT Misapplication",
                            statement: "A student argues: \"$$f(x) = x^2 - 2$$ has $$f(0) = -2$$ and $$f(2) = 2$$. Since $$f$$ is continuous and $$0$$ is between $$-2$$ and $$2$$, by IVT there exists $$c \\in (0, 2)$$ with $$f(c) = 0$$. But wait, $$f(x) = 0$$ gives $$x = \\pm\\sqrt{2}$$, and $$-\\sqrt{2} \\notin (0, 2)$$, so IVT is wrong!\"\n\nExplain the error in the student's reasoning.",
                            solution: `**Analysis of Student's Argument:**

**Step 1:** Verify the setup
- $$f(x) = x^2 - 2$$ is continuous ✓
- $$f(0) = -2$$ ✓
- $$f(2) = 4 - 2 = 2$$ ✓
- $$0$$ is between $$-2$$ and $$2$$ ✓

**Step 2:** Apply IVT correctly
By IVT, there exists $$c \\in (0, 2)$$ such that $$f(c) = 0$$.

**Step 3:** Find the zeros
$$x^2 - 2 = 0$$
$$x^2 = 2$$
$$x = \\pm\\sqrt{2}$$

So $$x = \\sqrt{2} \\approx 1.414$$ or $$x = -\\sqrt{2} \\approx -1.414$$

**Step 4:** Check which zero is in $$(0, 2)$$
$$\\sqrt{2} \\approx 1.414 \\in (0, 2)$$ ✓
$$-\\sqrt{2} \\approx -1.414 \\notin (0, 2)$$ (correct!)

**The Student's Error:**

The student correctly identified that $$-\\sqrt{2} \\notin (0, 2)$$, but FAILED TO NOTICE that $$+\\sqrt{2} \\in (0, 2)$$!

IVT guarantees AT LEAST ONE $$c \\in (0, 2)$$ with $$f(c) = 0$$.

That $$c$$ is $$\\sqrt{2}$$.

**Key Lessons:**
1. IVT guarantees existence, not uniqueness
2. A function may have multiple zeros
3. IVT only guarantees one zero in the specified interval
4. Other zeros may exist outside the interval (like $$-\\sqrt{2}$$)

**Conclusion:** IVT is correct! The student made an arithmetic/logical error by ignoring $$\\sqrt{2}$$.`
                        }
                    ]
                }
            ]
        }
    ],
    
    masteryTest: {
        description: "Comprehensive assessment covering functions, limits, limit theorems, one-sided and infinite limits, limits at infinity, and continuity",
        totalQuestions: 25,
        passingScore: 18,
        timeLimit: 90,
        instructions: "Complete all 25 questions. Show all work for full credit. You may use a calculator for arithmetic but not for symbolic manipulation. Provide exact answers unless otherwise specified.",
        questions: [
            {
                points: 3,
                question: "<p>1. Determine if the relation $$R = \\{(1, 3), (2, 5), (1, 7), (4, 9)\\}$$ is a function. Justify your answer.</p>",
                answer: "No, $$R$$ is not a function. The element 1 in the domain maps to two different values in the range: $$(1, 3)$$ and $$(1, 7)$$. For a relation to be a function, each input must correspond to exactly one output."
            },
            {
                points: 4,
                question: "<p>2. Find the domain of $$f(x) = \\sqrt{\\frac{x + 3}{x - 2}}$$. Express your answer in interval notation and explain all restrictions.</p>",
                answer: "The function requires: (1) $$x - 2 \\neq 0$$ so $$x \\neq 2$$, and (2) $$\\frac{x + 3}{x - 2} \\geq 0$$. Sign analysis: critical points are $$x = -3$$ and $$x = 2$$. Testing intervals: $$x < -3$$: negative/negative = positive ✓; $$-3 < x < 2$$: positive/negative = negative ✗; $$x > 2$$: positive/positive = positive ✓. Including $$x = -3$$ where the fraction equals 0: Domain = $$(-\\infty, -3] \\cup (2, \\infty)$$"
            },
            {
                points: 3,
                question: "<p>3. Let $$f(x) = 2x - 5$$. Find $$f^{-1}(x)$$ and verify that $$f(f^{-1}(x)) = x$$.</p>",
                answer: "Set $$y = 2x - 5$$. Switch: $$x = 2y - 5$$. Solve: $$x + 5 = 2y$$, so $$y = \\frac{x + 5}{2}$$. Thus $$f^{-1}(x) = \\frac{x + 5}{2}$$. Verification: $$f(f^{-1}(x)) = f\\left(\\frac{x + 5}{2}\\right) = 2\\left(\\frac{x + 5}{2}\\right) - 5 = (x + 5) - 5 = x$$ ✓"
            },
            {
                points: 4,
                question: "<p>4. Use a numerical table to estimate $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$, then verify algebraically.</p>",
                answer: "Table: $$x = 1.9 \\to 3.9$$, $$x = 1.99 \\to 3.99$$, $$x = 2.01 \\to 4.01$$, $$x = 2.1 \\to 4.1$$. Estimate: 4. Algebraically: $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$"
            },
            {
                points: 5,
                question: "<p>5. Prove using the epsilon-delta definition that $$\\lim_{x \\to 3} (2x + 1) = 7$$.</p>",
                answer: "Let $$\\epsilon > 0$$ be given. Choose $$\\delta = \\frac{\\epsilon}{2}$$. Then $$\\delta > 0$$. Suppose $$0 < |x - 3| < \\delta$$. Then $$|x - 3| < \\frac{\\epsilon}{2}$$. Now $$|(2x + 1) - 7| = |2x - 6| = 2|x - 3| < 2 \\cdot \\frac{\\epsilon}{2} = \\epsilon$$. Therefore $$\\lim_{x \\to 3} (2x + 1) = 7$$. ∎"
            },
            {
                points: 4,
                question: "<p>6. Evaluate $$\\lim_{x \\to 2} \\frac{3x^2 - 5x + 1}{x^2 + 4}$$ using limit laws.</p>",
                answer: "Both numerator and denominator are polynomials continuous at $$x = 2$$. At $$x = 2$$: denominator = $$4 + 4 = 8 \\neq 0$$. By quotient law: $$\\lim_{x \\to 2} \\frac{3x^2 - 5x + 1}{x^2 + 4} = \\frac{3(4) - 5(2) + 1}{4 + 4} = \\frac{12 - 10 + 1}{8} = \\frac{3}{8}$$"
            },
            {
                points: 4,
                question: "<p>7. Evaluate $$\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$$ by factoring.</p>",
                answer: "Direct substitution gives $$\\frac{0}{0}$$. Factor: $$x^3 - 1 = (x - 1)(x^2 + x + 1)$$. So $$\\frac{x^3 - 1}{x - 1} = \\frac{(x - 1)(x^2 + x + 1)}{x - 1} = x^2 + x + 1$$ for $$x \\neq 1$$. Therefore $$\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1} = 1^2 + 1 + 1 = 3$$"
            },
            {
                points: 5,
                question: "<p>8. Evaluate $$\\lim_{h \\to 0} \\frac{\\sqrt{9 + h} - 3}{h}$$ by rationalizing the numerator.</p>",
                answer: "Multiply by conjugate: $$\\frac{\\sqrt{9 + h} - 3}{h} \\cdot \\frac{\\sqrt{9 + h} + 3}{\\sqrt{9 + h} + 3} = \\frac{(9 + h) - 9}{h(\\sqrt{9 + h} + 3)} = \\frac{h}{h(\\sqrt{9 + h} + 3)} = \\frac{1}{\\sqrt{9 + h} + 3}$$ for $$h \\neq 0$$. As $$h \\to 0$$: $$\\frac{1}{\\sqrt{9} + 3} = \\frac{1}{6}$$"
            },
            {
                points: 4,
                question: "<p>9. For $$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 3x - 1 & x \\geq 1 \\end{cases}$$, find $$\\lim_{x \\to 1^-} f(x)$$, $$\\lim_{x \\to 1^+} f(x)$$, and determine if $$\\lim_{x \\to 1} f(x)$$ exists.</p>",
                answer: "$$\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} x^2 = 1$$. $$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (3x - 1) = 2$$. Since $$1 \\neq 2$$, the one-sided limits differ, so $$\\lim_{x \\to 1} f(x)$$ does not exist."
            },
            {
                points: 4,
                question: "<p>10. Evaluate $$\\lim_{x \\to 0^+} \\frac{1}{x^2}$$ and $$\\lim_{x \\to 0^-} \\frac{1}{x^2}$$.</p>",
                answer: "As $$x \\to 0^+$$: $$x^2 \\to 0^+$$, so $$\\frac{1}{x^2} \\to +\\infty$$. As $$x \\to 0^-$$: $$x^2 \\to 0^+$$ (even power), so $$\\frac{1}{x^2} \\to +\\infty$$. Both one-sided limits are $$+\\infty$$."
            },
            {
                points: 5,
                question: "<p>11. Find all vertical asymptotes of $$g(x) = \\frac{x^2 + 2x - 3}{x^2 - 4}$$ and analyze the behavior near each asymptote.</p>",
                answer: "Denominator zeros: $$x^2 - 4 = (x - 2)(x + 2) = 0$$ gives $$x = 2, -2$$. Factor numerator: $$x^2 + 2x - 3 = (x + 3)(x - 1)$$. No common factors. At $$x = 2$$: numerator = 7 ≠ 0, so vertical asymptote. At $$x = -2$$: numerator = -1 ≠ 0, so vertical asymptote. Vertical asymptotes: $$x = 2$$ and $$x = -2$$"
            },
            {
                points: 4,
                question: "<p>12. Evaluate $$\\lim_{x \\to \\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5x - 7}$$.</p>",
                answer: "Degrees equal (both 2). Limit = ratio of leading coefficients = $$\\frac{4}{2} = 2$$. Or divide by $$x^2$$: $$\\lim_{x \\to \\infty} \\frac{4 - \\frac{3}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x} - \\frac{7}{x^2}} = \\frac{4 - 0 + 0}{2 + 0 - 0} = 2$$"
            },
            {
                points: 4,
                question: "<p>13. Evaluate $$\\lim_{x \\to -\\infty} \\frac{3x^3 - 5x}{x^4 + 2}$$.</p>",
                answer: "Numerator degree (3) < denominator degree (4), so limit = 0. Or divide by $$x^4$$: $$\\lim_{x \\to -\\infty} \\frac{\\frac{3}{x} - \\frac{5}{x^3}}{1 + \\frac{2}{x^4}} = \\frac{0 - 0}{1 + 0} = 0$$"
            },
            {
                points: 5,
                question: "<p>14. Evaluate $$\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 4x} - x\\right)$$.</p>",
                answer: "This is $$\\infty - \\infty$$ form. Rationalize: multiply by $$\\frac{\\sqrt{x^2 + 4x} + x}{\\sqrt{x^2 + 4x} + x} = \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x} = \\frac{4x}{\\sqrt{x^2 + 4x} + x}$$. Divide by $$x$$: $$\\frac{4}{\\sqrt{1 + \\frac{4}{x}} + 1} \\to \\frac{4}{1 + 1} = 2$$"
            },
            {
                points: 4,
                question: "<p>15. Determine if $$f(x) = \\frac{x^2 - 16}{x - 4}$$ is continuous at $$x = 4$$. If not, classify the discontinuity.</p>",
                answer: "$$f(4) = \\frac{0}{0}$$ undefined, so not continuous. $$\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4} = \\lim_{x \\to 4} \\frac{(x - 4)(x + 4)}{x - 4} = \\lim_{x \\to 4} (x + 4) = 8$$. Limit exists, so **removable discontinuity** at $$x = 4$$."
            },
            {
                points: 5,
                question: "<p>16. For what value of $$k$$ is $$g(x) = \\begin{cases} kx + 5 & x \\leq 2 \\\\ x^2 + 1 & x > 2 \\end{cases}$$ continuous at $$x = 2$$?</p>",
                answer: "For continuity: $$\\lim_{x \\to 2^-} g(x) = \\lim_{x \\to 2^+} g(x) = g(2)$$. Left: $$\\lim_{x \\to 2^-} (kx + 5) = 2k + 5$$. Right: $$\\lim_{x \\to 2^+} (x^2 + 1) = 5$$. At $$x = 2$$: $$g(2) = 2k + 5$$. Need $$2k + 5 = 5$$, so $$2k = 0$$, thus $$k = 0$$."
            },
            {
                points: 4,
                question: "<p>17. Identify all discontinuities of $$h(x) = \\frac{1}{x^2 - 1}$$ and classify each.</p>",
                answer: "$$x^2 - 1 = (x - 1)(x + 1) = 0$$ at $$x = \\pm 1$$. Numerator = 1 ≠ 0 at both points, so no cancellation. At $$x = 1$$: $$\\lim_{x \\to 1} h(x) = \\pm\\infty$$ (infinite). At $$x = -1$$: $$\\lim_{x \\to -1} h(x) = \\pm\\infty$$ (infinite). **Infinite discontinuities** at $$x = 1$$ and $$x = -1$$."
            },
            {
                points: 5,
                question: "<p>18. Use the Intermediate Value Theorem to show that $$f(x) = x^3 + x - 5$$ has a root in $$(1, 2)$$.</p>",
                answer: "$$f(x) = x^3 + x - 5$$ is polynomial, continuous everywhere. $$f(1) = 1 + 1 - 5 = -3 < 0$$. $$f(2) = 8 + 2 - 5 = 5 > 0$$. Since $$f(1) < 0 < f(2)$$ and $$f$$ is continuous on $$[1, 2]$$, by IVT there exists $$c \\in (1, 2)$$ such that $$f(c) = 0$$."
            },
            {
                points: 4,
                question: "<p>19. Prove that $$\\cos(x) = x^3$$ has at least one solution.</p>",
                answer: "Let $$f(x) = \\cos(x) - x^3$$. Continuous everywhere. At $$x = 0$$: $$f(0) = 1 - 0 = 1 > 0$$. At $$x = 1$$: $$f(1) = \\cos(1) - 1 \\approx 0.540 - 1 = -0.460 < 0$$. Signs differ on $$[0, 1]$$. By IVT, exists $$c \\in (0, 1)$$ with $$f(c) = 0$$, so $$\\cos(c) = c^3$$."
            },
            {
                points: 5,
                question: "<p>20. Let $$f(x) = x^4 - 5x^2 + 4$$. Show that $$f$$ has at least three zeros in $$[-3, 3]$$.</p>",
                answer: "$$f(-3) = 81 - 45 + 4 = 40 > 0$$. $$f(-2) = 16 - 20 + 4 = 0$$ (exact root!). $$f(0) = 4 > 0$$. $$f(1) = 1 - 5 + 4 = 0$$ (exact root!). $$f(3) = 81 - 45 + 4 = 40 > 0$$. Found two exact zeros: $$x = -2, 1$$. Between $$f(-3) = 40 > 0$$ and $$f(-2) = 0$$, might be another (but endpoint). Check more: $$f(-2.5) = 39.0625 - 31.25 + 4 = 11.8 > 0$$. Factor: $$f(x) = (x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)$$. Four roots: $$\\pm 1, \\pm 2$$, all in $$[-3, 3]$$."
            },
            {
                points: 4,
                question: "<p>21. Evaluate $$\\lim_{x \\to 3} \\frac{|x - 3|}{x - 3}$$.</p>",
                answer: "Right: $$x \\to 3^+$$ means $$x > 3$$, so $$|x - 3| = x - 3$$. Thus $$\\frac{x - 3}{x - 3} = 1$$. Left: $$x \\to 3^-$$ means $$x < 3$$, so $$|x - 3| = -(x - 3)$$. Thus $$\\frac{-(x - 3)}{x - 3} = -1$$. One-sided limits differ (1 vs -1), so limit does not exist."
            },
            {
                points: 5,
                question: "<p>22. Find $$\\lim_{x \\to \\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$$ and $$\\lim_{x \\to -\\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$$.</p>",
                answer: "For $$x \\to \\infty$$ ($$x > 0$$): Divide by $$x = \\sqrt{x^2}$$: $$\\frac{2x}{\\sqrt{x^2 + 1}} = \\frac{2x}{x\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{2}{\\sqrt{1 + \\frac{1}{x^2}}} \\to \\frac{2}{1} = 2$$. For $$x \\to -\\infty$$ ($$x < 0$$): $$\\sqrt{x^2} = |x| = -x$$, so $$\\frac{2x}{-x\\sqrt{1 + \\frac{1}{x^2}}} = \\frac{-2}{\\sqrt{1 + \\frac{1}{x^2}}} \\to -2$$."
            },
            {
                points: 4,
                question: "<p>23. Determine all horizontal asymptotes of $$f(x) = \\frac{5x^2 - 3x + 1}{x^2 + 2}$$.</p>",
                answer: "Degrees equal (both 2). $$\\lim_{x \\to \\pm\\infty} \\frac{5x^2 - 3x + 1}{x^2 + 2} = \\frac{5}{1} = 5$$. One horizontal asymptote: $$y = 5$$ (same for both directions)."
            },
            {
                points: 5,
                question: "<p>24. Evaluate $$\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 - 4}$$.</p>",
                answer: "Direct substitution: $$\\frac{0}{0}$$. Factor numerator: $$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$$. Factor denominator: $$x^2 - 4 = (x - 2)(x + 2)$$. Cancel: $$\\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 2)} = \\frac{x^2 + 2x + 4}{x + 2}$$ for $$x \\neq 2$$. Evaluate: $$\\frac{4 + 4 + 4}{4} = \\frac{12}{4} = 3$$."
            },
            {
                points: 5,
                question: "<p>25. Prove: If $$f: [0, 1] \\to [0, 1]$$ is continuous, then $$f$$ has a fixed point (i.e., there exists $$c \\in [0, 1]$$ with $$f(c) = c$$).</p>",
                answer: "Let $$g(x) = f(x) - x$$. Then $$g$$ is continuous on $$[0, 1]$$. At endpoints: $$g(0) = f(0) - 0 = f(0) \\geq 0$$ (since $$f(0) \\in [0, 1]$$). $$g(1) = f(1) - 1 \\leq 0$$ (since $$f(1) \\in [0, 1]$$). If $$g(0) = 0$$, then $$f(0) = 0$$ (fixed point). If $$g(1) = 0$$, then $$f(1) = 1$$ (fixed point). If $$g(0) > 0$$ and $$g(1) < 0$$, by IVT exists $$c \\in (0, 1)$$ with $$g(c) = 0$$, so $$f(c) = c$$. ∎"
            }
        ]
    },
    
    formulaSheet: [
        {
            title: "Function Composition and Inverses",
            formulas: [
                "$$(f \\circ g)(x) = f(g(x))$$",
                "$$(f + g)(x) = f(x) + g(x)$$",
                "$$(f \\cdot g)(x) = f(x) \\cdot g(x)$$",
                "$$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}, \\quad g(x) \\neq 0$$",
                "$$f^{-1}(f(x)) = x \\text{ and } f(f^{-1}(x)) = x$$"
            ]
        },
        {
            title: "Limit Definitions",
            formulas: [
                "$$\\lim_{x \\to b} f(x) = L$$ if $$\\forall \\epsilon > 0, \\exists \\delta > 0: 0 < |x - b| < \\delta \\Rightarrow |f(x) - L| < \\epsilon$$",
                "$$\\lim_{x \\to b^+} f(x) = L$$ (right-hand limit)",
                "$$\\lim_{x \\to b^-} f(x) = L$$ (left-hand limit)",
                "$$\\lim_{x \\to b} f(x) = L \\iff \\lim_{x \\to b^+} f(x) = L = \\lim_{x \\to b^-} f(x)$$"
            ]
        },
        {
            title: "Basic Limit Laws",
            formulas: [
                "$$\\lim_{x \\to b} [f(x) \\pm g(x)] = \\lim_{x \\to b} f(x) \\pm \\lim_{x \\to b} g(x)$$",
                "$$\\lim_{x \\to b} [cf(x)] = c \\cdot \\lim_{x \\to b} f(x)$$",
                "$$\\lim_{x \\to b} [f(x) \\cdot g(x)] = \\lim_{x \\to b} f(x) \\cdot \\lim_{x \\to b} g(x)$$",
                "$$\\lim_{x \\to b} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to b} f(x)}{\\lim_{x \\to b} g(x)}$$ if $$\\lim_{x \\to b} g(x) \\neq 0$$",
                "$$\\lim_{x \\to b} [f(x)]^n = \\left[\\lim_{x \\to b} f(x)\\right]^n$$",
                "$$\\lim_{x \\to b} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to b} f(x)}$$"
            ]
        },
        {
            title: "Special Limits",
            formulas: [
                "$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$",
                "$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$",
                "$$\\lim_{x \\to \\infty} \\frac{1}{x^r} = 0$$ for $$r > 0$$",
                "$$\\lim_{x \\to 0^+} \\frac{1}{x^r} = +\\infty$$ for $$r > 0$$"
            ]
        },
        {
            title: "Limits at Infinity for Rational Functions",
            formulas: [
                "$$\\lim_{x \\to \\pm\\infty} \\frac{a_nx^n + ... + a_0}{b_mx^m + ... + b_0} = \\begin{cases} 0 & n < m \\\\ \\frac{a_n}{b_m} & n = m \\\\ \\pm\\infty & n > m \\end{cases}$$"
            ]
        },
        {
            title: "Continuity",
            formulas: [
                "$$f \\text{ continuous at } x = a \\iff \\lim_{x \\to a} f(x) = f(a)$$",
                "$$f \\text{ continuous on } [a, b] \\iff f \\text{ continuous at every point in } [a, b]$$"
            ]
        },
        {
            title: "Intermediate Value Theorem",
            formulas: [
                "$$\\text{If } f \\text{ continuous on } [a, b] \\text{ and } N \\text{ between } f(a) \\text{ and } f(b),$$",
                "$$\\text{then } \\exists c \\in (a, b): f(c) = N$$"
            ]
        }
    ]
};