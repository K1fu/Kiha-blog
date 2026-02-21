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
        },
        {
            name: "Introduction to Differentiation",
            icon: "🔬",
            description: "Build the conceptual foundation of the derivative using limits, rates of change, and the formal limit definition.",
            lessons: [

                // ── LESSON 1.1 ──────────────────────────────────────
                {
                    name: "Average vs. Instantaneous Rate of Change",
                    tags: ["Conceptual", "40 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Distinguish average rate of change from instantaneous rate of change.</li>
                                <li>Compute the average rate of change of a function over an interval.</li>
                                <li>Interpret rate of change in physical and geometric contexts.</li>
                                <li>Recognize the limiting process that connects average to instantaneous rate.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Average Rate of Change</strong>
                            <p>The <em>average rate of change</em> of a function $$f$$ over the interval $$[a, b]$$ is the slope of the secant line through $$(a, f(a))$$ and $$(b, f(b))$$:</p>
                            <p>$$\\text{AROC} = \\frac{f(b) - f(a)}{b - a} = \\frac{\\Delta y}{\\Delta x}$$</p>
                            <p>Equivalently, using $$h = b - a$$: &nbsp; $$\\text{AROC} = \\frac{f(a+h) - f(a)}{h}$$</p>
                        </div>

                        <div class="definition-box">
                            <strong>Instantaneous Rate of Change</strong>
                            <p>The <em>instantaneous rate of change</em> of $$f$$ at $$x = a$$ is the limit of the average rate of change as $$h \\to 0$$:</p>
                            <p>$$\\text{IROC} = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$</p>
                            <p>This limit, when it exists, equals the derivative $$f'(a)$$.</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Physical Interpretation</strong>
                            <p>If $$s(t)$$ is the position of an object at time $$t$$, then:</p>
                            <ul style="margin-left:1.5rem;">
                                <li>$$\\dfrac{s(b)-s(a)}{b-a}$$ = average velocity on $$[a,b]$$</li>
                                <li>$$\\lim_{h\\to 0}\\dfrac{s(t+h)-s(t)}{h} = s'(t)$$ = instantaneous velocity at time $$t$$</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Confusing $$\\frac{f(b)-f(a)}{b-a}$$ with $$f'(a)$$ — they are equal only in the limit.</li>
                                <li>Forgetting that AROC depends on the <em>interval</em>, while IROC depends on a <em>single point</em>.</li>
                                <li>Using $$h = 0$$ directly instead of taking the limit.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        // ── SECTION A (Easy) ─────────────────────────
                        {
                            difficulty: "A",
                            title: "AROC of a Linear Function",
                            statement: "Let $$f(x) = 3x + 2$$. Find the average rate of change of $$f$$ on $$[1, 4]$$.",
                            solution: "$$\\text{AROC} = \\frac{f(4)-f(1)}{4-1} = \\frac{(12+2)-(3+2)}{3} = \\frac{14-5}{3} = \\frac{9}{3} = 3$$. Note: for any linear function $$f(x) = mx+b$$, the AROC always equals the slope $$m = 3$$ regardless of the interval."
                        },
                        {
                            difficulty: "A",
                            title: "AROC of a Quadratic",
                            statement: "Let $$f(x) = x^2$$. Compute the average rate of change on $$[2, 5]$$.",
                            solution: "$$\\text{AROC} = \\frac{f(5)-f(2)}{5-2} = \\frac{25-4}{3} = \\frac{21}{3} = 7$$."
                        },
                        {
                            difficulty: "A",
                            title: "AROC of a Quadratic (Symmetric Interval)",
                            statement: "Let $$f(x) = x^2 + 1$$. Find the AROC on $$[-2, 2]$$.",
                            solution: "$$\\text{AROC} = \\frac{f(2)-f(-2)}{2-(-2)} = \\frac{(4+1)-(4+1)}{4} = \\frac{0}{4} = 0$$. The function is symmetric about $$x=0$$, so the secant from $$x=-2$$ to $$x=2$$ is horizontal."
                        },
                        {
                            difficulty: "A",
                            title: "AROC of a Cube Function",
                            statement: "Let $$g(x) = x^3$$. Find the average rate of change on $$[1, 3]$$.",
                            solution: "$$\\text{AROC} = \\frac{g(3)-g(1)}{3-1} = \\frac{27-1}{2} = \\frac{26}{2} = 13$$."
                        },
                        {
                            difficulty: "A",
                            title: "AROC Using h-Notation",
                            statement: "Let $$f(x) = 2x + 5$$. Compute $$\\dfrac{f(a+h)-f(a)}{h}$$ and simplify.",
                            solution: "$$f(a+h) = 2(a+h)+5 = 2a+2h+5$$. So $$\\frac{f(a+h)-f(a)}{h} = \\frac{(2a+2h+5)-(2a+5)}{h} = \\frac{2h}{h} = 2$$. The result is constant (= slope), independent of $$a$$ and $$h$$."
                        },
                        {
                            difficulty: "A",
                            title: "Average Velocity",
                            statement: "A car's position is $$s(t) = 4t^2$$ metres at time $$t$$ seconds. Find the average velocity from $$t = 1$$ to $$t = 3$$.",
                            solution: "$$\\bar{v} = \\frac{s(3)-s(1)}{3-1} = \\frac{36-4}{2} = \\frac{32}{2} = 16 \\text{ m/s}$$."
                        },
                        {
                            difficulty: "A",
                            title: "AROC of a Rational Function",
                            statement: "Let $$f(x) = \\dfrac{1}{x}$$. Find the AROC on $$[1, 2]$$.",
                            solution: "$$\\text{AROC} = \\frac{f(2)-f(1)}{2-1} = \\frac{\\frac{1}{2}-1}{1} = -\\frac{1}{2}$$."
                        },
                        {
                            difficulty: "A",
                            title: "AROC of a Square Root",
                            statement: "Let $$f(x) = \\sqrt{x}$$. Find the AROC on $$[4, 9]$$.",
                            solution: "$$\\text{AROC} = \\frac{\\sqrt{9}-\\sqrt{4}}{9-4} = \\frac{3-2}{5} = \\frac{1}{5}$$."
                        },
                        // ── SECTION B (Intermediate) ──────────────────
                        {
                            difficulty: "B",
                            title: "Difference Quotient for Quadratic",
                            statement: "For $$f(x) = x^2 - 3x$$, compute and simplify the difference quotient $$\\dfrac{f(x+h)-f(x)}{h}$$.",
                            solution: "$$f(x+h) = (x+h)^2 - 3(x+h) = x^2+2xh+h^2-3x-3h$$. $$\\frac{f(x+h)-f(x)}{h} = \\frac{x^2+2xh+h^2-3x-3h - (x^2-3x)}{h} = \\frac{2xh+h^2-3h}{h} = \\frac{h(2x+h-3)}{h} = 2x+h-3$$. As $$h\\to 0$$: result approaches $$2x-3 = f'(x)$$."
                        },
                        {
                            difficulty: "B",
                            title: "Difference Quotient for Cubic",
                            statement: "For $$f(x) = x^3$$, compute and simplify $$\\dfrac{f(x+h)-f(x)}{h}$$.",
                            solution: "$$f(x+h) = (x+h)^3 = x^3+3x^2h+3xh^2+h^3$$. $$\\frac{f(x+h)-f(x)}{h} = \\frac{3x^2h+3xh^2+h^3}{h} = 3x^2+3xh+h^2$$. As $$h\\to 0$$, this approaches $$3x^2$$."
                        },
                        {
                            difficulty: "B",
                            title: "Comparing AROC to IROC",
                            statement: "For $$f(x) = x^2$$, compute the AROC on $$[3, 3+h]$$ for $$h = 1, 0.1, 0.01$$. What value does it approach?",
                            solution: "$$\\text{AROC} = \\frac{(3+h)^2-9}{h} = \\frac{9+6h+h^2-9}{h} = 6+h$$. For $$h=1$$: $$7$$. For $$h=0.1$$: $$6.1$$. For $$h=0.01$$: $$6.01$$. As $$h\\to 0$$, approaches $$6 = f'(3)$$."
                        },
                        {
                            difficulty: "B",
                            title: "AROC vs IROC — Conceptual",
                            statement: "Explain why the average rate of change on $$[a, a+h]$$ approximates the instantaneous rate of change at $$x=a$$ better as $$h$$ gets smaller.",
                            solution: "The AROC is the slope of the secant line through $$(a, f(a))$$ and $$(a+h, f(a+h))$$. As $$h\\to 0$$, the second point approaches $$(a, f(a))$$, so the secant line rotates to become the tangent line at $$x=a$$. The slope of the tangent line is the instantaneous rate of change. The limit $$\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}$$ formalizes this process."
                        },
                        {
                            difficulty: "B",
                            title: "Difference Quotient for Rational Function",
                            statement: "For $$f(x) = \\dfrac{1}{x}$$, compute $$\\dfrac{f(x+h)-f(x)}{h}$$ and simplify.",
                            solution: "$$f(x+h) = \\frac{1}{x+h}$$. $$\\frac{f(x+h)-f(x)}{h} = \\frac{\\frac{1}{x+h}-\\frac{1}{x}}{h} = \\frac{\\frac{x-(x+h)}{x(x+h)}}{h} = \\frac{-h}{hx(x+h)} = \\frac{-1}{x(x+h)}$$. As $$h\\to 0$$: approaches $$-\\frac{1}{x^2}$$."
                        },
                        // ── SECTION C (Advanced) ──────────────────────
                        {
                            difficulty: "C",
                            title: "Difference Quotient for Square Root",
                            statement: "For $$f(x) = \\sqrt{x}$$, compute $$\\dfrac{f(x+h)-f(x)}{h}$$ and simplify by rationalizing.",
                            solution: "$$\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}$$. Multiply numerator and denominator by the conjugate $$\\sqrt{x+h}+\\sqrt{x}$$: $$= \\frac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt{x})} = \\frac{h}{h(\\sqrt{x+h}+\\sqrt{x})} = \\frac{1}{\\sqrt{x+h}+\\sqrt{x}}$$. As $$h\\to 0$$: approaches $$\\frac{1}{2\\sqrt{x}}$$."
                        },
                        {
                            difficulty: "C",
                            title: "AROC Estimation from Table",
                            statement: "Given that $$f(2) = 5,\\; f(2.5) = 6.3,\\; f(3) = 8$$, estimate the instantaneous rate of change at $$x = 2.5$$ using a central difference.",
                            solution: "The central difference approximation uses the symmetric interval around $$x=2.5$$: $$f'(2.5) \\approx \\frac{f(3)-f(2)}{3-2} = \\frac{8-5}{1} = 3$$. This symmetric formula gives a better approximation than one-sided AROC because errors in opposite directions cancel to leading order."
                        },
                        // ── SECTION D (Proof-Level) ───────────────────
                        {
                            difficulty: "D",
                            title: "Prove AROC is Constant for Linear Functions",
                            statement: "Prove that if $$f(x) = mx + b$$ is linear, then the average rate of change on any interval $$[a, c]$$ equals $$m$$.",
                            solution: "$$\\text{AROC} = \\frac{f(c)-f(a)}{c-a} = \\frac{(mc+b)-(ma+b)}{c-a} = \\frac{m(c-a)}{c-a} = m$$, for all $$c \\neq a$$. Since this holds for arbitrary $$[a,c]$$, the AROC is always $$m$$. $$\\blacksquare$$"
                        },
                        // ── SECTION E (Traps) ─────────────────────────
                        {
                            difficulty: "E",
                            title: "Error Analysis — Wrong Interval Endpoint",
                            statement: "A student writes: 'The AROC of $$f(x)=x^2$$ on $$[1,3]$$ is $$f'(2) = 4$$.' Identify and correct the error.",
                            solution: "The student confused AROC with the instantaneous rate of change. The AROC on $$[1,3]$$ is $$\\frac{9-1}{3-1} = 4$$, which happens to equal $$f'(2) = 4$$ (by the Mean Value Theorem, some $$c \\in (1,3)$$ satisfies $$f'(c) = \\text{AROC}$$). However, the student's reasoning is flawed: AROC ≠ $$f'$$ at an endpoint; we cannot assert IROC = AROC without the limit. The correct statement: AROC on $$[1,3] = 4$$, and separately, $$f'(2) = 4$$."
                        }
                    ]
                },

                // ── LESSON 1.2 ──────────────────────────────────────
                {
                    name: "The Limit Definition of the Derivative",
                    tags: ["Conceptual", "Computational", "55 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State the formal limit definition of the derivative.</li>
                                <li>Use the limit definition to compute derivatives of polynomial, rational, and radical functions.</li>
                                <li>Identify when a derivative fails to exist.</li>
                                <li>Connect the limit definition to the difference quotient.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Definition of the Derivative</strong>
                            <p>The <em>derivative</em> of $$f$$ at $$x = a$$, denoted $$f'(a)$$, is:</p>
                            <p>$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$</p>
                            <p>The <em>derivative function</em> $$f'(x)$$ is:</p>
                            <p>$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$</p>
                            <p>provided this limit exists. Alternative notation: $$\\frac{dy}{dx},\\; \\frac{df}{dx},\\; Df(x),\\; \\dot{f}$$.</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Differentiability Implies Continuity</strong>
                            <p>If $$f$$ is differentiable at $$x = a$$, then $$f$$ is continuous at $$x = a$$. The converse is false.</p>
                        </div>

                        <div class="definition-box">
                            <strong>When Derivatives Fail to Exist</strong>
                            <p>The derivative does not exist at $$x = a$$ when:</p>
                            <ul style="margin-left:1.5rem;">
                                <li><strong>Corner/Cusp:</strong> Left and right derivatives differ (e.g., $$|x|$$ at $$x=0$$).</li>
                                <li><strong>Vertical tangent:</strong> $$|f'(a)| \\to \\infty$$.</li>
                                <li><strong>Discontinuity:</strong> Function is not continuous at $$a$$.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Derivative of Constant via Limit",
                            statement: "Use the limit definition to find $$f'(x)$$ where $$f(x) = 7$$.",
                            solution: "$$f'(x) = \\lim_{h\\to 0}\\frac{7-7}{h} = \\lim_{h\\to 0}\\frac{0}{h} = \\lim_{h\\to 0} 0 = 0$$. The derivative of any constant is zero."
                        },
                        {
                            difficulty: "A",
                            title: "Derivative of $$f(x) = x$$",
                            statement: "Use the limit definition to find $$f'(x)$$ where $$f(x) = x$$.",
                            solution: "$$f'(x) = \\lim_{h\\to 0}\\frac{(x+h)-x}{h} = \\lim_{h\\to 0}\\frac{h}{h} = \\lim_{h\\to 0} 1 = 1$$."
                        },
                        {
                            difficulty: "A",
                            title: "Derivative of $$f(x) = 5x$$",
                            statement: "Use the limit definition to find $$f'(x)$$ where $$f(x) = 5x$$.",
                            solution: "$$f'(x) = \\lim_{h\\to 0}\\frac{5(x+h)-5x}{h} = \\lim_{h\\to 0}\\frac{5h}{h} = 5$$."
                        },
                        {
                            difficulty: "A",
                            title: "Derivative at a Point — Quadratic",
                            statement: "Use the limit definition to find $$f'(2)$$ where $$f(x) = x^2$$.",
                            solution: "$$f'(2) = \\lim_{h\\to 0}\\frac{(2+h)^2-4}{h} = \\lim_{h\\to 0}\\frac{4+4h+h^2-4}{h} = \\lim_{h\\to 0}\\frac{4h+h^2}{h} = \\lim_{h\\to 0}(4+h) = 4$$."
                        },
                        {
                            difficulty: "A",
                            title: "Derivative of $$f(x) = x^2 + 3$$",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = x^2 + 3$$.",
                            solution: "$$f'(x) = \\lim_{h\\to 0}\\frac{(x+h)^2+3-(x^2+3)}{h} = \\lim_{h\\to 0}\\frac{2xh+h^2}{h} = \\lim_{h\\to 0}(2x+h) = 2x$$."
                        },
                        {
                            difficulty: "A",
                            title: "Derivative of Linear Function",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = 4x - 7$$.",
                            solution: "$$f'(x) = \\lim_{h\\to 0}\\frac{[4(x+h)-7]-(4x-7)}{h} = \\lim_{h\\to 0}\\frac{4h}{h} = 4$$."
                        },
                        {
                            difficulty: "B",
                            title: "Limit Definition — Full Quadratic",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = 3x^2 - 2x + 1$$.",
                            solution: "$$f(x+h) = 3(x+h)^2-2(x+h)+1 = 3x^2+6xh+3h^2-2x-2h+1$$. $$f(x+h)-f(x) = 6xh+3h^2-2h$$. $$\\frac{f(x+h)-f(x)}{h} = 6x+3h-2$$. As $$h\\to 0$$: $$f'(x) = 6x-2$$."
                        },
                        {
                            difficulty: "B",
                            title: "Limit Definition — Cubic",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = x^3 - x$$.",
                            solution: "$$f(x+h) = (x+h)^3-(x+h) = x^3+3x^2h+3xh^2+h^3-x-h$$. $$f(x+h)-f(x) = 3x^2h+3xh^2+h^3-h$$. $$\\frac{f(x+h)-f(x)}{h} = 3x^2+3xh+h^2-1$$. As $$h\\to 0$$: $$f'(x) = 3x^2-1$$."
                        },
                        {
                            difficulty: "B",
                            title: "Limit Definition — Reciprocal",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = \\dfrac{1}{x+1}$$.",
                            solution: "$$\\frac{f(x+h)-f(x)}{h} = \\frac{1}{h}\\left(\\frac{1}{x+h+1}-\\frac{1}{x+1}\\right) = \\frac{1}{h}\\cdot\\frac{(x+1)-(x+h+1)}{(x+h+1)(x+1)} = \\frac{-h}{h(x+h+1)(x+1)} = \\frac{-1}{(x+h+1)(x+1)}$$. As $$h\\to 0$$: $$f'(x) = \\frac{-1}{(x+1)^2}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Derivative of $$f(x) = \\sqrt{x+2}$$",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = \\sqrt{x+2}$$.",
                            solution: "$$\\frac{\\sqrt{x+h+2}-\\sqrt{x+2}}{h}$$. Multiply by conjugate: $$= \\frac{(x+h+2)-(x+2)}{h(\\sqrt{x+h+2}+\\sqrt{x+2})} = \\frac{1}{\\sqrt{x+h+2}+\\sqrt{x+2}}$$. As $$h\\to 0$$: $$f'(x) = \\frac{1}{2\\sqrt{x+2}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Existence at a Corner",
                            statement: "Show that $$f(x) = |x|$$ is not differentiable at $$x = 0$$.",
                            solution: "Left derivative: $$\\lim_{h\\to 0^-}\\frac{|h|-0}{h} = \\lim_{h\\to 0^-}\\frac{-h}{h} = -1$$. Right derivative: $$\\lim_{h\\to 0^+}\\frac{|h|}{h} = \\lim_{h\\to 0^+}\\frac{h}{h} = 1$$. Since $$-1 \\neq 1$$, the two one-sided limits are unequal, so $$\\lim_{h\\to 0}\\frac{|h|}{h}$$ does not exist and $$f'(0)$$ is undefined."
                        },
                        {
                            difficulty: "C",
                            title: "Limit Definition — General Power",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = x^4$$.",
                            solution: "Expand $$(x+h)^4 = x^4+4x^3h+6x^2h^2+4xh^3+h^4$$. $$\\frac{f(x+h)-f(x)}{h} = \\frac{4x^3h+6x^2h^2+4xh^3+h^4}{h} = 4x^3+6x^2h+4xh^2+h^3$$. As $$h\\to 0$$: $$f'(x) = 4x^3$$."
                        },
                        {
                            difficulty: "C",
                            title: "Derivative of $$f(x) = \\frac{1}{x^2}$$",
                            statement: "Use the limit definition to find $$f'(x)$$ for $$f(x) = \\dfrac{1}{x^2}$$.",
                            solution: "$$\\frac{f(x+h)-f(x)}{h} = \\frac{1}{h}\\left(\\frac{1}{(x+h)^2}-\\frac{1}{x^2}\\right) = \\frac{x^2-(x+h)^2}{hx^2(x+h)^2} = \\frac{-2xh-h^2}{hx^2(x+h)^2} = \\frac{-2x-h}{x^2(x+h)^2}$$. As $$h\\to 0$$: $$f'(x) = \\frac{-2x}{x^4} = \\frac{-2}{x^3}$$."
                        },
                        {
                            difficulty: "C",
                            title: "When Limit Fails — Cusp",
                            statement: "Show that $$f(x) = x^{2/3}$$ is not differentiable at $$x = 0$$.",
                            solution: "$$f'(0) = \\lim_{h\\to 0}\\frac{h^{2/3}-0}{h} = \\lim_{h\\to 0} h^{-1/3}$$. As $$h\\to 0^+$$: $$h^{-1/3}\\to +\\infty$$. As $$h\\to 0^-$$: $$h^{-1/3}\\to -\\infty$$. The limit does not exist (it is infinite), so $$f'(0)$$ is undefined. The graph has a cusp at the origin."
                        },
                        {
                            difficulty: "D",
                            title: "Proof — Derivative of $$x^n$$ via Binomial Theorem",
                            statement: "Use the binomial theorem and the limit definition to prove that $$\\dfrac{d}{dx}[x^n] = nx^{n-1}$$ for any positive integer $$n$$.",
                            solution: "By the binomial theorem: $$(x+h)^n = \\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}h^k = x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots + h^n$$. Thus $$(x+h)^n - x^n = nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots + h^n$$. Dividing by $$h$$: $$\\frac{(x+h)^n-x^n}{h} = nx^{n-1} + \\binom{n}{2}x^{n-2}h + \\cdots + h^{n-1}$$. Every remaining term has a factor of $$h$$, so as $$h\\to 0$$, all those terms vanish: $$\\lim_{h\\to 0}\\frac{(x+h)^n - x^n}{h} = nx^{n-1}$$. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "D",
                            title: "Continuity from Differentiability",
                            statement: "Prove that if $$f'(a)$$ exists, then $$\\lim_{x\\to a} f(x) = f(a)$$.",
                            solution: "We write $$f(x)-f(a) = \\frac{f(x)-f(a)}{x-a}\\cdot(x-a)$$. Taking the limit as $$x\\to a$$: $$\\lim_{x\\to a}[f(x)-f(a)] = \\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}\\cdot\\lim_{x\\to a}(x-a) = f'(a)\\cdot 0 = 0$$. Therefore $$\\lim_{x\\to a}f(x) = f(a)$$, i.e., $$f$$ is continuous at $$a$$. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Wrong Limit Form",
                            statement: "A student computes: $$f'(x) = \\lim_{h\\to 0}\\frac{f(x+h)+f(x)}{h}$$. What is wrong?",
                            solution: "The student wrote a sum instead of a difference in the numerator. The correct definition is $$f'(x) = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$$. Using a sum gives $$\\frac{2f(x)}{0}$$, which is undefined. The minus sign is essential — it captures the change in function value."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Differentiable but Looks Like Corner",
                            statement: "Let $$f(x) = x^2\\sin(1/x)$$ for $$x\\neq 0$$ and $$f(0)=0$$. Is $$f$$ differentiable at $$x=0$$?",
                            solution: "$$f'(0) = \\lim_{h\\to 0}\\frac{h^2\\sin(1/h)}{h} = \\lim_{h\\to 0} h\\sin(1/h)$$. Since $$|\\sin(1/h)| \\leq 1$$, we have $$|h\\sin(1/h)| \\leq |h|\\to 0$$. By the Squeeze Theorem: $$f'(0) = 0$$. Despite oscillating wildly near 0, $$f$$ IS differentiable there. This is a common trap."
                        }
                    ]
                },

                // ── LESSON 1.3 ──────────────────────────────────────
                {
                    name: "Differentiability and Notation",
                    tags: ["Conceptual", "35 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Use multiple notations for derivatives fluently.</li>
                                <li>Distinguish between differentiability and continuity.</li>
                                <li>Identify points of non-differentiability from graphs.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Derivative Notation</strong>
                            <p>All of the following denote the derivative of $$y = f(x)$$:</p>
                            <p>$$f'(x) = y' = \\frac{dy}{dx} = \\frac{df}{dx} = \\frac{d}{dx}[f(x)] = Df(x)$$</p>
                            <p>The value at $$x = a$$: $$f'(a) = \\left.\\frac{dy}{dx}\\right|_{x=a}$$</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Relationship: Differentiability ↔ Continuity</strong>
                            <p>$$\\text{Differentiable at } a \\implies \\text{Continuous at } a$$</p>
                            <p>$$\\text{Continuous at } a \\;\\not\\!\\!\\implies \\text{Differentiable at } a$$</p>
                            <p>Example: $$f(x)=|x|$$ is continuous at 0 but not differentiable there.</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Notation Identification",
                            statement: "Let $$y = f(x) = x^3$$. Write the derivative using four different notations.",
                            solution: "$$f'(x) = 3x^2$$, &nbsp; $$y' = 3x^2$$, &nbsp; $$\\frac{dy}{dx} = 3x^2$$, &nbsp; $$\\frac{d}{dx}[x^3] = 3x^2$$."
                        },
                        {
                            difficulty: "A",
                            title: "Evaluate Derivative at a Point — Notation",
                            statement: "If $$f'(x) = 2x - 1$$, find $$\\left.\\dfrac{df}{dx}\\right|_{x=3}$$.",
                            solution: "$$\\left.\\frac{df}{dx}\\right|_{x=3} = f'(3) = 2(3)-1 = 5$$."
                        },
                        {
                            difficulty: "B",
                            title: "Differentiability from Graph",
                            statement: "A function has a sharp corner at $$x = 2$$, a vertical tangent at $$x = 5$$, and a jump discontinuity at $$x = 8$$. At which points is $$f$$ not differentiable and why?",
                            solution: "Not differentiable at $$x=2$$ (corner: left and right derivatives differ), at $$x=5$$ (vertical tangent: slope is $$\\pm\\infty$$, limit doesn't exist finitely), and at $$x=8$$ (discontinuity: differentiability requires continuity, which fails at a jump)."
                        },
                        {
                            difficulty: "C",
                            title: "Piecewise Differentiability",
                            statement: "Let $$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x-1 & x \\geq 1 \\end{cases}$$. Is $$f$$ differentiable at $$x=1$$?",
                            solution: "First check continuity: $$\\lim_{x\\to 1^-}x^2 = 1$$, $$\\lim_{x\\to 1^+}(2x-1) = 1 = f(1)$$. Continuous. Left derivative: $$\\lim_{h\\to 0^-}\\frac{(1+h)^2-1}{h} = \\lim_{h\\to 0^-}(2+h) = 2$$. Right derivative: $$\\lim_{h\\to 0^+}\\frac{(2(1+h)-1)-1}{h} = \\lim_{h\\to 0^+}\\frac{2h}{h} = 2$$. Both equal 2, so $$f'(1) = 2$$. Yes, $$f$$ is differentiable at $$x=1$$."
                        },
                        {
                            difficulty: "D",
                            title: "Construct a Non-Differentiable Continuous Function",
                            statement: "Construct a function $$f$$ that is continuous everywhere on $$\\mathbb{R}$$ but not differentiable at $$x = 0$$ and $$x = 3$$.",
                            solution: "Let $$f(x) = |x| + |x-3|$$. This is a sum of absolute value functions. Each absolute value is continuous everywhere, so $$f$$ is continuous everywhere. At $$x=0$$: left derivative of $$|x|$$ is $$-1$$, right derivative is $$+1$$, so $$f'(0)$$ does not exist (the term $$|x-3|$$ is smooth near 0, contributing $$-1$$ to both sides and not affecting the corner). At $$x=3$$: $$|x|$$ is smooth near 3 (contributing $$+1$$ both sides); $$|x-3|$$ has a corner there. So $$f$$ is not differentiable at $$x=0$$ and $$x=3$$. $$\\blacksquare$$"
                        }
                    ]
                }
            ]
        },
        {
            name: "The Tangent Line",
            icon: "📈",
            description: "Develop the geometric interpretation of the derivative as slope of the tangent line and apply this to find tangent and normal line equations.",
            lessons: [

                // ── LESSON 2.1 ──────────────────────────────────────
                {
                    name: "Slope of the Tangent Line",
                    tags: ["Geometric", "Conceptual", "40 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Define the tangent line as the limit of secant lines.</li>
                                <li>Compute the slope of the tangent line using the derivative.</li>
                                <li>Interpret the sign and magnitude of the slope geometrically.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Tangent Line Slope</strong>
                            <p>The slope of the tangent line to $$y = f(x)$$ at the point $$(a, f(a))$$ is:</p>
                            <p>$$m_{\\text{tan}} = f'(a) = \\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h}$$</p>
                        </div>

                        <div class="definition-box">
                            <strong>Geometric Interpretation</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>$$f'(a) > 0$$: curve rising at $$x = a$$</li>
                                <li>$$f'(a) < 0$$: curve falling at $$x = a$$</li>
                                <li>$$f'(a) = 0$$: horizontal tangent at $$x = a$$</li>
                                <li>$$|f'(a)|$$ large: steep tangent</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Slope of Tangent — Quadratic",
                            statement: "Find the slope of the tangent line to $$f(x) = x^2$$ at $$x = 3$$.",
                            solution: "$$f'(x) = 2x$$ (from limit definition or power rule). $$m = f'(3) = 2(3) = 6$$."
                        },
                        {
                            difficulty: "A",
                            title: "Slope of Tangent — Cubic",
                            statement: "Find the slope of the tangent line to $$f(x) = x^3 - 2x$$ at $$x = 1$$.",
                            solution: "$$f'(x) = 3x^2-2$$. $$m = f'(1) = 3-2 = 1$$."
                        },
                        {
                            difficulty: "A",
                            title: "Horizontal Tangent",
                            statement: "At what point does $$f(x) = x^2 - 4x + 1$$ have a horizontal tangent?",
                            solution: "$$f'(x) = 2x-4 = 0 \\implies x = 2$$. The point is $$(2, f(2)) = (2, 4-8+1) = (2, -3)$$."
                        },
                        {
                            difficulty: "A",
                            title: "Slope from Limit Definition",
                            statement: "Use the limit definition to find the slope of the tangent to $$f(x) = x^2 + x$$ at $$x = 1$$.",
                            solution: "$$\\lim_{h\\to 0}\\frac{(1+h)^2+(1+h)-(1^2+1)}{h} = \\lim_{h\\to 0}\\frac{1+2h+h^2+1+h-2}{h} = \\lim_{h\\to 0}\\frac{3h+h^2}{h} = \\lim_{h\\to 0}(3+h) = 3$$."
                        },
                        {
                            difficulty: "B",
                            title: "Slope of Tangent — Rational",
                            statement: "Find the slope of the tangent to $$f(x) = \\dfrac{2}{x}$$ at $$x = 4$$.",
                            solution: "$$f'(x) = -\\frac{2}{x^2}$$. $$m = f'(4) = -\\frac{2}{16} = -\\frac{1}{8}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Slope of Tangent — Square Root",
                            statement: "Find the slope of the tangent to $$f(x) = \\sqrt{x}$$ at $$x = 9$$.",
                            solution: "$$f'(x) = \\frac{1}{2\\sqrt{x}}$$. $$m = f'(9) = \\frac{1}{2\\cdot 3} = \\frac{1}{6}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Find All Points with Given Slope",
                            statement: "Find all points on $$f(x) = x^3$$ where the tangent line has slope 27.",
                            solution: "$$f'(x) = 3x^2 = 27 \\implies x^2 = 9 \\implies x = \\pm 3$$. Points: $$(3, 27)$$ and $$(-3, -27)$$."
                        },
                        {
                            difficulty: "C",
                            title: "Tangent Slope from Graph Data",
                            statement: "A function satisfies $$f(2) = 5$$ and $$f'(2) = -3$$. Interpret the slope geometrically and predict $$f(2.1)$$ using linear approximation.",
                            solution: "Geometric: at $$x=2$$, the curve is decreasing with steepness 3. Linear approximation: $$f(2.1) \\approx f(2) + f'(2)\\cdot(0.1) = 5 + (-3)(0.1) = 5 - 0.3 = 4.7$$."
                        },
                        {
                            difficulty: "D",
                            title: "Prove Tangent is Best Linear Approximation",
                            statement: "Explain why the tangent line $$L(x) = f(a) + f'(a)(x-a)$$ is the unique linear function satisfying both $$L(a) = f(a)$$ and $$L'(a) = f'(a)$$.",
                            solution: "A general linear function is $$L(x) = c_0 + c_1(x-a)$$. Condition $$L(a) = f(a)$$ gives $$c_0 = f(a)$$. Condition $$L'(a) = f'(a)$$ gives $$c_1 = f'(a)$$ (since $$L'(x) = c_1$$). Substituting: $$L(x) = f(a) + f'(a)(x-a)$$, which is uniquely determined. $$\\blacksquare$$"
                        }
                    ]
                },

                // ── LESSON 2.2 ──────────────────────────────────────
                {
                    name: "Equation of the Tangent Line",
                    tags: ["Computational", "Applied", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Write the equation of the tangent line to a curve at a given point.</li>
                                <li>Find the equation of the normal line (perpendicular to tangent).</li>
                                <li>Solve problems where the tangent line passes through an external point.</li>
                                <li>Apply the tangent line as a linear approximation.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Tangent Line Equation</strong>
                            <p>The tangent line to $$y = f(x)$$ at the point $$(a, f(a))$$ is:</p>
                            <p>$$y - f(a) = f'(a)(x - a)$$</p>
                            <p>or equivalently: $$y = f(a) + f'(a)(x-a)$$</p>
                        </div>

                        <div class="definition-box">
                            <strong>Normal Line</strong>
                            <p>The <em>normal line</em> to $$y=f(x)$$ at $$(a, f(a))$$ is perpendicular to the tangent line, so its slope is:</p>
                            <p>$$m_{\\text{normal}} = -\\frac{1}{f'(a)}$$ &nbsp; (provided $$f'(a) \\neq 0$$)</p>
                            <p>Equation: $$y - f(a) = -\\dfrac{1}{f'(a)}(x-a)$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Tangent to Parabola",
                            statement: "Find the equation of the tangent line to $$f(x) = x^2$$ at $$x = 2$$.",
                            solution: "$$f(2) = 4$$, $$f'(x) = 2x$$, $$f'(2) = 4$$. Tangent: $$y - 4 = 4(x-2) \\implies y = 4x - 4$$."
                        },
                        {
                            difficulty: "A",
                            title: "Tangent to Cubic",
                            statement: "Find the equation of the tangent line to $$f(x) = x^3$$ at $$x = 1$$.",
                            solution: "$$f(1) = 1$$, $$f'(x) = 3x^2$$, $$f'(1) = 3$$. Tangent: $$y-1 = 3(x-1) \\implies y = 3x - 2$$."
                        },
                        {
                            difficulty: "A",
                            title: "Tangent at Origin",
                            statement: "Find the equation of the tangent line to $$f(x) = x^2 - 3x$$ at $$(0, 0)$$.",
                            solution: "$$f'(x) = 2x-3$$, $$f'(0) = -3$$. Tangent: $$y - 0 = -3(x-0) \\implies y = -3x$$."
                        },
                        {
                            difficulty: "A",
                            title: "Tangent to Linear Function",
                            statement: "Find the tangent line to $$f(x) = 5x - 2$$ at $$x = 3$$.",
                            solution: "$$f'(x) = 5$$. $$f(3) = 13$$. Tangent: $$y - 13 = 5(x-3) \\implies y = 5x - 2$$. The tangent to a line is itself."
                        },
                        {
                            difficulty: "B",
                            title: "Normal Line to Parabola",
                            statement: "Find the equation of the normal line to $$f(x) = x^2 + 1$$ at $$x = 1$$.",
                            solution: "$$f(1) = 2$$, $$f'(x) = 2x$$, $$f'(1) = 2$$. Normal slope: $$-\\frac{1}{2}$$. Normal: $$y-2 = -\\frac{1}{2}(x-1) \\implies y = -\\frac{1}{2}x + \\frac{5}{2}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Tangent to Rational Function",
                            statement: "Find the tangent line to $$f(x) = \\dfrac{1}{x}$$ at $$x = 2$$.",
                            solution: "$$f(2) = \\frac{1}{2}$$, $$f'(x) = -\\frac{1}{x^2}$$, $$f'(2) = -\\frac{1}{4}$$. Tangent: $$y-\\frac{1}{2} = -\\frac{1}{4}(x-2) \\implies y = -\\frac{1}{4}x + 1$$."
                        },
                        {
                            difficulty: "B",
                            title: "Tangent to Square Root",
                            statement: "Find the tangent line to $$f(x) = \\sqrt{x}$$ at $$x = 4$$.",
                            solution: "$$f(4) = 2$$, $$f'(x) = \\frac{1}{2\\sqrt{x}}$$, $$f'(4) = \\frac{1}{4}$$. Tangent: $$y-2 = \\frac{1}{4}(x-4) \\implies y = \\frac{1}{4}x + 1$$."
                        },
                        {
                            difficulty: "B",
                            title: "Linear Approximation",
                            statement: "Use the tangent line at $$x=4$$ to $$f(x)=\\sqrt{x}$$ to estimate $$\\sqrt{4.1}$$.",
                            solution: "From the previous problem, tangent: $$y = \\frac{1}{4}x + 1$$. $$\\sqrt{4.1} \\approx \\frac{1}{4}(4.1)+1 = 1.025+1 = 2.025$$. (Actual: $$2.02485...$$)"
                        },
                        {
                            difficulty: "C",
                            title: "Tangent Line Through External Point",
                            statement: "Find the equation of the tangent line(s) to $$f(x) = x^2$$ that pass through the point $$(1, -3)$$.",
                            solution: "The tangent at $$(a, a^2)$$ has slope $$2a$$: $$y - a^2 = 2a(x-a)$$. For this to pass through $$(1,-3)$$: $$-3 - a^2 = 2a(1-a) = 2a - 2a^2$$. $$-3-a^2 = 2a-2a^2 \\implies a^2-2a-3=0 \\implies (a-3)(a+1)=0$$. So $$a=3$$ or $$a=-1$$. Tangent at $$a=3$$: $$y = 6x-9$$. Tangent at $$a=-1$$: $$y = -2x-1$$."
                        },
                        {
                            difficulty: "C",
                            title: "Parallel Tangent Lines",
                            statement: "Find all points on $$f(x) = x^3 - 6x$$ where the tangent is parallel to $$y = 3$$.",
                            solution: "A horizontal line has slope 0. $$f'(x) = 3x^2-6 = 0 \\implies x^2 = 2 \\implies x = \\pm\\sqrt{2}$$. Points: $$(\\sqrt{2}, f(\\sqrt{2})) = (\\sqrt{2}, 2\\sqrt{2}-6\\sqrt{2}) = (\\sqrt{2}, -4\\sqrt{2})$$ and $$(-\\sqrt{2}, 4\\sqrt{2})$$."
                        },
                        {
                            difficulty: "D",
                            title: "Tangent Line Uniqueness at Inflection",
                            statement: "Show that the tangent line to $$f(x) = x^3$$ at the origin crosses the curve (i.e., is not merely touching it).",
                            solution: "The tangent at $$(0,0)$$: slope $$= f'(0) = 0$$, so $$y = 0$$ (the $$x$$-axis). Intersection with $$f(x) = x^3$$: $$x^3 = 0 \\implies x = 0$$ (triple root). Near $$x=0$$: for $$x > 0$$, $$x^3 > 0$$ (curve above tangent); for $$x < 0$$, $$x^3 < 0$$ (curve below tangent). The curve crosses from one side of the tangent to the other — it crosses the tangent at the point of inflection."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Wrong Point",
                            statement: "A student finds the tangent to $$f(x)=x^2-4$$ at $$x=3$$ and writes: 'Slope $$= f'(3) = 6$$; line: $$y = 6x + b$$, substitute $$x=3, y=3$$: $$3=18+b$$, $$b=-15$$, so $$y=6x-15$$.' Find the error.",
                            solution: "The student substituted $$y=3$$ instead of $$y = f(3) = 9-4 = 5$$. The correct point is $$(3, 5)$$. Using point-slope: $$y-5 = 6(x-3) \\implies y = 6x - 13$$."
                        }
                    ]
                }
            ]
        },
        {
            name: "Properties and Basic Differentiation Rules",
            icon: "⚡",
            description: "Master the algebraic rules of differentiation: linearity, power rule, constant rule, and interpretation of derivative as rate of change.",
            lessons: [

                // ── LESSON 3.1 ──────────────────────────────────────
                {
                    name: "Constant Rule, Power Rule, and Linearity",
                    tags: ["Computational", "50 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Apply the constant rule, power rule, and linearity of differentiation.</li>
                                <li>Differentiate polynomials efficiently.</li>
                                <li>Prove linearity from the limit definition.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Constant Rule</strong>
                            <p>$$\\frac{d}{dx}[c] = 0 \\quad \\text{for any constant } c$$</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Power Rule</strong>
                            <p>$$\\frac{d}{dx}[x^n] = nx^{n-1} \\quad \\text{for any real number } n$$</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Linearity of Differentiation</strong>
                            <p>$$\\frac{d}{dx}[cf(x)] = cf'(x)$$ &nbsp; (Constant Multiple Rule)</p>
                            <p>$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$ &nbsp; (Sum/Difference Rule)</p>
                        </div>

                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Writing $$\\frac{d}{dx}[5x^3] = 5x^3$$ — forgot to differentiate.</li>
                                <li>Power rule on constants: $$\\frac{d}{dx}[5] = 0$$, NOT $$1\\cdot 5^0 = 1$$.</li>
                                <li>$$\\frac{d}{dx}[x^{-1}] = -1\\cdot x^{-2} = -\\frac{1}{x^2}$$, not $$+\\frac{1}{x^2}$$.</li>
                                <li>Forgetting to convert radicals: $$\\sqrt{x} = x^{1/2}$$ before differentiating.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = x^5$$",
                            statement: "Differentiate $$f(x) = x^5$$.",
                            solution: "$$f'(x) = 5x^{5-1} = 5x^4$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = 3x^4$$",
                            statement: "Find $$\\dfrac{d}{dx}[3x^4]$$.",
                            solution: "$$\\frac{d}{dx}[3x^4] = 3\\cdot 4x^3 = 12x^3$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate a Polynomial",
                            statement: "Find $$f'(x)$$ for $$f(x) = 4x^3 - 2x^2 + 7x - 1$$.",
                            solution: "$$f'(x) = 12x^2 - 4x + 7$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = x$$",
                            statement: "Find $$\\dfrac{d}{dx}[x]$$.",
                            solution: "$$\\frac{d}{dx}[x] = \\frac{d}{dx}[x^1] = 1\\cdot x^0 = 1$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate a Constant",
                            statement: "Find $$\\dfrac{d}{dx}[\\pi^2]$$.",
                            solution: "$$\\pi^2$$ is a constant. $$\\frac{d}{dx}[\\pi^2] = 0$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = -x^6 + 2$$",
                            statement: "Differentiate $$f(x) = -x^6 + 2$$.",
                            solution: "$$f'(x) = -6x^5 + 0 = -6x^5$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = \\frac{1}{2}x^2 + x$$",
                            statement: "Differentiate $$f(x) = \\dfrac{1}{2}x^2 + x$$.",
                            solution: "$$f'(x) = \\frac{1}{2}\\cdot 2x + 1 = x + 1$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate Negative Power",
                            statement: "Differentiate $$f(x) = x^{-3}$$.",
                            solution: "$$f'(x) = -3x^{-4} = -\\frac{3}{x^4}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Power Rule — Fractional Exponent",
                            statement: "Differentiate $$f(x) = x^{1/2}$$.",
                            solution: "$$f'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Differentiate $$f(x) = x^{3/4}$$",
                            statement: "Find $$f'(x)$$ for $$f(x) = x^{3/4}$$.",
                            solution: "$$f'(x) = \\frac{3}{4}x^{-1/4} = \\frac{3}{4x^{1/4}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Rewrite Then Differentiate — Radical",
                            statement: "Differentiate $$f(x) = \\sqrt[3]{x^2}$$.",
                            solution: "$$f(x) = x^{2/3}$$. $$f'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3x^{1/3}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Rewrite Then Differentiate — Fraction",
                            statement: "Differentiate $$f(x) = \\dfrac{4}{x^2}$$.",
                            solution: "$$f(x) = 4x^{-2}$$. $$f'(x) = 4(-2)x^{-3} = -\\frac{8}{x^3}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Differentiate Mixed",
                            statement: "Differentiate $$f(x) = 3\\sqrt{x} - \\dfrac{5}{x} + 2$$.",
                            solution: "$$f(x) = 3x^{1/2} - 5x^{-1} + 2$$. $$f'(x) = 3\\cdot\\frac{1}{2}x^{-1/2} - 5(-1)x^{-2} + 0 = \\frac{3}{2\\sqrt{x}} + \\frac{5}{x^2}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Evaluate Derivative at a Point",
                            statement: "Let $$f(x) = 2x^3 - x^2 + 4$$. Find $$f'(-1)$$.",
                            solution: "$$f'(x) = 6x^2 - 2x$$. $$f'(-1) = 6(1) - 2(-1) = 6+2 = 8$$."
                        },
                        {
                            difficulty: "B",
                            title: "Polynomial — Degree 5",
                            statement: "Differentiate $$p(x) = 2x^5 - 3x^4 + x^3 - 7x + 9$$.",
                            solution: "$$p'(x) = 10x^4 - 12x^3 + 3x^2 - 7$$."
                        },
                        {
                            difficulty: "C",
                            title: "Differentiate Product by Expanding",
                            statement: "Differentiate $$f(x) = (x^2 + 1)(x^3 - x)$$ by expanding first.",
                            solution: "$$f(x) = x^5 - x^3 + x^3 - x = x^5 - x$$. $$f'(x) = 5x^4 - 1$$."
                        },
                        {
                            difficulty: "C",
                            title: "Simplify Then Differentiate",
                            statement: "Differentiate $$f(x) = \\dfrac{x^3 - 2x}{x}$$ (for $$x \\neq 0$$).",
                            solution: "$$f(x) = x^2 - 2$$. $$f'(x) = 2x$$."
                        },
                        {
                            difficulty: "C",
                            title: "Find Where f' Has Given Value",
                            statement: "Find all $$x$$ where $$f'(x) = 0$$ for $$f(x) = x^4 - 8x^2 + 3$$.",
                            solution: "$$f'(x) = 4x^3-16x = 4x(x^2-4) = 4x(x-2)(x+2) = 0$$. So $$x = 0, 2, -2$$."
                        },
                        {
                            difficulty: "D",
                            title: "Prove Linearity from Limit Definition",
                            statement: "Prove that $$\\dfrac{d}{dx}[f(x)+g(x)] = f'(x) + g'(x)$$ using the limit definition.",
                            solution: "Let $$h(x) = f(x)+g(x)$$. $$h'(x) = \\lim_{h\\to 0}\\frac{h(x+h)-h(x)}{h} = \\lim_{h\\to 0}\\frac{[f(x+h)+g(x+h)]-[f(x)+g(x)]}{h}$$. $$= \\lim_{h\\to 0}\\left[\\frac{f(x+h)-f(x)}{h} + \\frac{g(x+h)-g(x)}{h}\\right] = f'(x)+g'(x)$$, where we used the limit of a sum equals the sum of limits (valid since both limits exist). $$\\blacksquare$$"
                        },
                        {
                            difficulty: "D",
                            title: "Prove Constant Multiple Rule",
                            statement: "Prove $$\\dfrac{d}{dx}[cf(x)] = cf'(x)$$ using the limit definition.",
                            solution: "$$\\frac{d}{dx}[cf(x)] = \\lim_{h\\to 0}\\frac{cf(x+h)-cf(x)}{h} = \\lim_{h\\to 0}c\\cdot\\frac{f(x+h)-f(x)}{h} = c\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h} = cf'(x)$$. We used the constant multiple rule for limits. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Differentiating Constant as Power",
                            statement: "A student writes: $$\\dfrac{d}{dx}[3^5] = 5\\cdot 3^4 = 405$$. Identify the error.",
                            solution: "$$3^5 = 243$$ is a constant, not $$x^5$$. The power rule applies to $$x^n$$, not to $$c^n$$ where $$c$$ is a fixed number. $$\\frac{d}{dx}[3^5] = \\frac{d}{dx}[243] = 0$$."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Power Rule on Product",
                            statement: "A student writes: $$\\dfrac{d}{dx}[x^2 \\cdot x^3] = 2x \\cdot 3x^2 = 6x^3$$. Find the error and correct it.",
                            solution: "Error: the student tried to differentiate each factor separately without using the product rule. Correct approach: $$x^2\\cdot x^3 = x^5$$, so $$\\frac{d}{dx}[x^5] = 5x^4$$. (Alternatively, the product rule gives $$2x\\cdot x^3 + x^2\\cdot 3x^2 = 2x^4+3x^4 = 5x^4$$.) The student's $$6x^3$$ is wrong."
                        }
                    ]
                },

                // ── LESSON 3.2 ──────────────────────────────────────
                {
                    name: "Derivative as Rate of Change",
                    tags: ["Applied", "Conceptual", "40 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Interpret $$f'(x)$$ as an instantaneous rate of change in context.</li>
                                <li>Solve problems involving velocity, acceleration, and growth rates.</li>
                                <li>Distinguish between the value of $$f$$ and its rate of change.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Rate of Change Interpretation</strong>
                            <p>If $$Q = f(t)$$ describes any quantity over time, then:</p>
                            <ul style="margin-left:1.5rem;">
                                <li>$$f'(t)$$: instantaneous rate of change of $$Q$$ with respect to $$t$$</li>
                                <li>Units of $$f'$$: (units of $$f$$) per (unit of $$t$$)</li>
                                <li>$$f'(t) > 0$$: $$Q$$ is increasing</li>
                                <li>$$f'(t) < 0$$: $$Q$$ is decreasing</li>
                                <li>$$f'(t) = 0$$: $$Q$$ is momentarily stationary</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Velocity from Position",
                            statement: "A particle's position is $$s(t) = t^3 - 6t^2 + 9t$$ metres ($$t$$ in seconds). Find the velocity at $$t = 2$$.",
                            solution: "$$v(t) = s'(t) = 3t^2 - 12t + 9$$. $$v(2) = 12 - 24 + 9 = -3 \\text{ m/s}$$. The negative sign means the particle is moving in the negative direction."
                        },
                        {
                            difficulty: "A",
                            title: "When is Particle Stationary?",
                            statement: "For $$s(t) = t^3 - 6t^2 + 9t$$, find when the particle is at rest.",
                            solution: "$$v(t) = 3t^2-12t+9 = 3(t^2-4t+3) = 3(t-1)(t-3) = 0$$. At rest at $$t=1$$ and $$t=3$$."
                        },
                        {
                            difficulty: "B",
                            title: "Revenue Marginal Rate",
                            statement: "A company's revenue is $$R(x) = 50x - 0.01x^2$$ dollars when $$x$$ units are sold. Find the marginal revenue at $$x = 100$$.",
                            solution: "$$R'(x) = 50 - 0.02x$$. $$R'(100) = 50 - 2 = 48$$. The 101st unit generates approximately $48 in additional revenue."
                        },
                        {
                            difficulty: "B",
                            title: "Rate of Temperature Change",
                            statement: "A cup of coffee cools according to $$T(t) = 70 + 30e^{-0.1t}$$ °C (treat as given). At what rate is it cooling at $$t = 0$$?",
                            solution: "$$T'(t) = 30\\cdot(-0.1)e^{-0.1t} = -3e^{-0.1t}$$. At $$t=0$$: $$T'(0) = -3$$ °C per minute. The negative value confirms cooling."
                        },
                        {
                            difficulty: "C",
                            title: "Sign Analysis of Velocity",
                            statement: "For $$s(t) = t^4 - 4t^3$$, find intervals where the particle moves in the positive direction.",
                            solution: "$$v(t) = s'(t) = 4t^3 - 12t^2 = 4t^2(t-3)$$. Sign: $$v > 0$$ when $$t^2 > 0$$ AND $$t-3 > 0$$, i.e., $$t > 3$$ (and $$t\\neq 0$$). For $$t < 0$$: $$v = 4t^2(t-3) = (+)(-)< 0$$ (moving negatively). For $$0 < t < 3$$: $$4t^2(t-3) = (+)(-) < 0$$. For $$t > 3$$: $$4t^2(t-3) = (+)(+) > 0$$. Positive motion: $$t > 3$$."
                        },
                        {
                            difficulty: "D",
                            title: "Physical Interpretation of Zero Derivative",
                            statement: "Explain why a particle with $$s'(t_0) = 0$$ is not necessarily changing direction at $$t_0$$. Provide an example.",
                            solution: "$$s'(t_0) = 0$$ means instantaneous velocity is zero, but the particle may continue in the same direction if $$v$$ does not change sign. Example: $$s(t) = t^3$$. Then $$v(t) = 3t^2 \\geq 0$$ for all $$t$$. At $$t=0$$, $$v=0$$, but the particle was moving forward before and after $$t=0$$. (It briefly pauses but doesn't reverse.)"
                        }
                    ]
                }
            ]
        },
        {
            name: "Differentiation Techniques",
            icon: "🧮",
            description: "Master the product rule, quotient rule, and chain rule for differentiating composite, product, and quotient functions.",
            lessons: [

                // ── LESSON 4.1 ──────────────────────────────────────
                {
                    name: "The Product Rule",
                    tags: ["Computational", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State and apply the product rule.</li>
                                <li>Prove the product rule from the limit definition.</li>
                                <li>Differentiate products of polynomials, roots, and other functions.</li>
                                <li>Recognize when expansion is simpler than the product rule.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Product Rule</strong>
                            <p>If $$f$$ and $$g$$ are differentiable, then:</p>
                            <p>$$\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$</p>
                            <p>Mnemonic: <em>"derivative of first times second, plus first times derivative of second"</em></p>
                        </div>

                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Writing $$(fg)' = f'g'$$ — this is WRONG.</li>
                                <li>Forgetting the second term entirely.</li>
                                <li>Not recognizing when to use product rule vs. expanding first.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Product Rule — Basic",
                            statement: "Differentiate $$h(x) = (x^2)(x^3)$$ using the product rule.",
                            solution: "$$f = x^2, f' = 2x; \\quad g = x^3, g' = 3x^2$$. $$h'(x) = 2x\\cdot x^3 + x^2\\cdot 3x^2 = 2x^4+3x^4 = 5x^4$$. (Check: $$x^5 \\Rightarrow 5x^4$$. ✓)"
                        },
                        {
                            difficulty: "A",
                            title: "Product Rule — Linear × Quadratic",
                            statement: "Differentiate $$h(x) = (x+1)(x^2-1)$$ using the product rule.",
                            solution: "$$f=x+1, f'=1; \\quad g=x^2-1, g'=2x$$. $$h'(x) = 1\\cdot(x^2-1)+(x+1)\\cdot 2x = x^2-1+2x^2+2x = 3x^2+2x-1$$. (Check: expand $$h(x) = x^3+x^2-x-1$$, $$h'=3x^2+2x-1$$. ✓)"
                        },
                        {
                            difficulty: "A",
                            title: "Product Rule — Polynomial × Radical",
                            statement: "Differentiate $$h(x) = x^2\\sqrt{x}$$.",
                            solution: "$$f=x^2, f'=2x; \\quad g=x^{1/2}, g'=\\frac{1}{2}x^{-1/2}$$. $$h'(x) = 2x\\cdot x^{1/2}+x^2\\cdot\\frac{1}{2}x^{-1/2} = 2x^{3/2}+\\frac{1}{2}x^{3/2} = \\frac{5}{2}x^{3/2}$$. (Alternative: $$h=x^{5/2}$$, $$h'=\\frac{5}{2}x^{3/2}$$. ✓)"
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule — Two Quadratics",
                            statement: "Differentiate $$h(x) = (x^2+1)(x^2-3x)$$.",
                            solution: "$$h'(x) = 2x(x^2-3x) + (x^2+1)(2x-3) = 2x^3-6x^2+2x^3-3x^2+2x-3 = 4x^3-9x^2+2x-3$$."
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule — Three Factors",
                            statement: "Differentiate $$h(x) = x(x-1)(x+2)$$. Use the product rule twice.",
                            solution: "First, let $$u = x(x-1) = x^2-x$$, $$v = x+2$$. $$u' = 2x-1$$, $$v'=1$$. $$h' = (2x-1)(x+2)+x(x-1)\\cdot 1$$. Wait — we need the three-factor rule: treat $$h = [x(x-1)]\\cdot(x+2)$$. $$h' = (2x-1)(x+2)+(x^2-x)(1) = 2x^2+4x-x-2+x^2-x = 3x^2+2x-2$$. (Check: $$h = x(x^2+x-2) = x^3+x^2-2x$$, $$h'=3x^2+2x-2$$. ✓)"
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule — Evaluate at Point",
                            statement: "Let $$h(x) = (3x-1)(x^2+2)$$. Find $$h'(0)$$.",
                            solution: "$$h'(x) = 3(x^2+2)+(3x-1)(2x) = 3x^2+6+6x^2-2x = 9x^2-2x+6$$. $$h'(0) = 6$$."
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule — Fraction Times Poly",
                            statement: "Differentiate $$h(x) = \\sqrt{x}(x^2-1)$$.",
                            solution: "$$f=x^{1/2}, f'=\\frac{1}{2}x^{-1/2}; \\quad g=x^2-1, g'=2x$$. $$h'(x) = \\frac{1}{2}x^{-1/2}(x^2-1)+x^{1/2}\\cdot 2x = \\frac{x^2-1}{2\\sqrt{x}}+2x^{3/2} = \\frac{x^2-1+4x^2}{2\\sqrt{x}} = \\frac{5x^2-1}{2\\sqrt{x}}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Product Rule — Find Tangent to Product",
                            statement: "Find the equation of the tangent to $$h(x) = (x^2+x)(x-2)$$ at $$x = 1$$.",
                            solution: "$$h(1) = (1+1)(1-2) = 2(-1) = -2$$. $$h'(x) = (2x+1)(x-2)+(x^2+x)(1) = 2x^2-4x+x-2+x^2+x = 3x^2-2x-2$$. $$h'(1) = 3-2-2=-1$$. Tangent: $$y+2 = -1(x-1) \\implies y = -x-1$$."
                        },
                        {
                            difficulty: "D",
                            title: "Prove the Product Rule",
                            statement: "Prove the product rule $$\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x)+f(x)g'(x)$$ using the limit definition.",
                            solution: "Let $$h = fg$$. $$h'(x) = \\lim_{\\Delta x\\to 0}\\frac{f(x+\\Delta x)g(x+\\Delta x)-f(x)g(x)}{\\Delta x}$$. Add and subtract $$f(x+\\Delta x)g(x)$$ in the numerator: $$= \\lim_{\\Delta x\\to 0}\\frac{f(x+\\Delta x)g(x+\\Delta x)-f(x+\\Delta x)g(x)+f(x+\\Delta x)g(x)-f(x)g(x)}{\\Delta x}$$. $$= \\lim_{\\Delta x\\to 0}\\left[f(x+\\Delta x)\\cdot\\frac{g(x+\\Delta x)-g(x)}{\\Delta x} + g(x)\\cdot\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}\\right]$$. As $$\\Delta x\\to 0$$: $$f(x+\\Delta x)\\to f(x)$$ (by continuity, since differentiability implies continuity). So $$h'(x) = f(x)g'(x)+g(x)f'(x)$$. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Product of Derivatives",
                            statement: "A student claims $$(fg)' = f'g'$$. Disprove with a counterexample.",
                            solution: "Let $$f(x) = x^2$$ and $$g(x) = x^3$$. Product rule: $$(fg)' = (x^5)' = 5x^4$$. Student formula: $$f'g' = 2x\\cdot 3x^2 = 6x^3 \\neq 5x^4$$. The two expressions are unequal for generic $$x$$, so the student's formula is incorrect."
                        }
                    ]
                },

                // ── LESSON 4.2 ──────────────────────────────────────
                {
                    name: "The Quotient Rule",
                    tags: ["Computational", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State and apply the quotient rule correctly.</li>
                                <li>Recognize when to use quotient rule vs. simplification.</li>
                                <li>Handle denominators that become zero.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Quotient Rule</strong>
                            <p>If $$g(x) \\neq 0$$, then:</p>
                            <p>$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$</p>
                            <p>Mnemonic: <em>"lo-d-hi minus hi-d-lo, over lo-squared"</em></p>
                        </div>

                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Reversing the subtraction order (sign error): must be $$f'g - fg'$$, NOT $$fg' - f'g$$.</li>
                                <li>Squaring the full fraction instead of just the denominator.</li>
                                <li>Forgetting to differentiate the denominator.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Quotient Rule — Basic",
                            statement: "Differentiate $$h(x) = \\dfrac{x^2}{x+1}$$.",
                            solution: "$$f=x^2, f'=2x; \\quad g=x+1, g'=1$$. $$h'(x) = \\frac{2x(x+1)-x^2(1)}{(x+1)^2} = \\frac{2x^2+2x-x^2}{(x+1)^2} = \\frac{x^2+2x}{(x+1)^2} = \\frac{x(x+2)}{(x+1)^2}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Quotient Rule — Constant Numerator",
                            statement: "Differentiate $$h(x) = \\dfrac{3}{x^2}$$ using the quotient rule.",
                            solution: "$$f=3, f'=0; \\quad g=x^2, g'=2x$$. $$h'(x) = \\frac{0\\cdot x^2 - 3\\cdot 2x}{x^4} = \\frac{-6x}{x^4} = \\frac{-6}{x^3}$$. (Confirm using power rule: $$3x^{-2}\\Rightarrow -6x^{-3}$$. ✓)"
                        },
                        {
                            difficulty: "A",
                            title: "Quotient Rule — Polynomial over Polynomial",
                            statement: "Differentiate $$h(x) = \\dfrac{x^2-1}{x^2+1}$$.",
                            solution: "$$h'(x) = \\frac{2x(x^2+1)-(x^2-1)\\cdot 2x}{(x^2+1)^2} = \\frac{2x[(x^2+1)-(x^2-1)]}{(x^2+1)^2} = \\frac{2x\\cdot 2}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Quotient Rule — Evaluate at a Point",
                            statement: "Let $$h(x) = \\dfrac{x}{x^2+4}$$. Find $$h'(2)$$.",
                            solution: "$$h'(x) = \\frac{1\\cdot(x^2+4)-x\\cdot 2x}{(x^2+4)^2} = \\frac{4-x^2}{(x^2+4)^2}$$. $$h'(2) = \\frac{4-4}{(4+4)^2} = 0$$."
                        },
                        {
                            difficulty: "B",
                            title: "Quotient Rule — Cubic over Linear",
                            statement: "Differentiate $$h(x) = \\dfrac{x^3+2}{x-1}$$.",
                            solution: "$$h'(x) = \\frac{3x^2(x-1)-(x^3+2)(1)}{(x-1)^2} = \\frac{3x^3-3x^2-x^3-2}{(x-1)^2} = \\frac{2x^3-3x^2-2}{(x-1)^2}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Quotient Rule — Radical Numerator",
                            statement: "Differentiate $$h(x) = \\dfrac{\\sqrt{x}}{x+1}$$.",
                            solution: "$$f=x^{1/2}, f'=\\frac{1}{2}x^{-1/2}; \\quad g=x+1, g'=1$$. $$h'(x) = \\frac{\\frac{1}{2\\sqrt{x}}(x+1)-\\sqrt{x}}{(x+1)^2} = \\frac{\\frac{x+1-2x}{2\\sqrt{x}}}{(x+1)^2} = \\frac{1-x}{2\\sqrt{x}(x+1)^2}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Tangent to Rational Curve",
                            statement: "Find the tangent line to $$f(x) = \\dfrac{x^2}{x+2}$$ at $$x = 2$$.",
                            solution: "$$f(2) = \\frac{4}{4} = 1$$. $$f'(x) = \\frac{2x(x+2)-x^2}{(x+2)^2} = \\frac{x^2+4x}{(x+2)^2}$$. $$f'(2) = \\frac{4+8}{16} = \\frac{12}{16} = \\frac{3}{4}$$. Tangent: $$y-1 = \\frac{3}{4}(x-2) \\implies y = \\frac{3}{4}x - \\frac{1}{2}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Quotient Rule — Nested Radical",
                            statement: "Differentiate $$h(x) = \\dfrac{\\sqrt{x}-1}{\\sqrt{x}+1}$$.",
                            solution: "$$f=x^{1/2}-1, f'=\\frac{1}{2}x^{-1/2}; \\quad g=x^{1/2}+1, g'=\\frac{1}{2}x^{-1/2}$$. $$h'(x) = \\frac{\\frac{1}{2\\sqrt{x}}(\\sqrt{x}+1)-(\\sqrt{x}-1)\\frac{1}{2\\sqrt{x}}}{(\\sqrt{x}+1)^2} = \\frac{\\frac{1}{2\\sqrt{x}}[(\\sqrt{x}+1)-(\\sqrt{x}-1)]}{(\\sqrt{x}+1)^2} = \\frac{\\frac{1}{2\\sqrt{x}}\\cdot 2}{(\\sqrt{x}+1)^2} = \\frac{1}{\\sqrt{x}(\\sqrt{x}+1)^2}$$."
                        },
                        {
                            difficulty: "D",
                            title: "Derive Derivative of $$x^{-n}$$ via Quotient Rule",
                            statement: "Use the quotient rule to prove $$\\dfrac{d}{dx}[x^{-n}] = -nx^{-n-1}$$ for positive integer $$n$$.",
                            solution: "Write $$x^{-n} = \\frac{1}{x^n}$$. Quotient rule with $$f=1, g=x^n$$: $$\\frac{d}{dx}\\left[\\frac{1}{x^n}\\right] = \\frac{0\\cdot x^n - 1\\cdot nx^{n-1}}{(x^n)^2} = \\frac{-nx^{n-1}}{x^{2n}} = -nx^{n-1-2n} = -nx^{-n-1}$$. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Sign Error in Quotient Rule",
                            statement: "A student writes: $$\\left(\\dfrac{x}{x+1}\\right)' = \\dfrac{1\\cdot(x+1)+x\\cdot 1}{(x+1)^2} = \\dfrac{2x+1}{(x+1)^2}$$. Find the error.",
                            solution: "The student used a PLUS sign instead of MINUS in the numerator. The quotient rule is $$\\frac{f'g - fg'}{g^2}$$. Correct: $$\\frac{1(x+1)-x(1)}{(x+1)^2} = \\frac{x+1-x}{(x+1)^2} = \\frac{1}{(x+1)^2}$$."
                        }
                    ]
                },

                // ── LESSON 4.3 ──────────────────────────────────────
                {
                    name: "The Chain Rule",
                    tags: ["Computational", "Conceptual", "55 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State and apply the chain rule for composite functions.</li>
                                <li>Identify the inner and outer functions in a composition.</li>
                                <li>Apply the chain rule repeatedly for nested compositions.</li>
                                <li>Combine the chain rule with product and quotient rules.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Chain Rule</strong>
                            <p>If $$y = f(g(x))$$, then:</p>
                            <p>$$\\frac{dy}{dx} = f'(g(x))\\cdot g'(x)$$</p>
                            <p>In Leibniz notation, if $$y = f(u)$$ and $$u = g(x)$$:</p>
                            <p>$$\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$$</p>
                        </div>

                        <div class="definition-box">
                            <strong>Identifying Inner/Outer Functions</strong>
                            <p>For $$h(x) = (3x^2+1)^5$$: outer $$= u^5$$, inner $$= 3x^2+1$$.</p>
                            <p>For $$h(x) = \\sqrt{x^3-x}$$: outer $$= \\sqrt{u}$$, inner $$= x^3-x$$.</p>
                        </div>

                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Forgetting to multiply by the inner derivative.</li>
                                <li>Differentiating the inner function but not substituting back.</li>
                                <li>Confusing order: must evaluate $$f'$$ at $$g(x)$$, not at $$x$$.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Chain Rule — Power of Linear",
                            statement: "Differentiate $$h(x) = (2x+3)^4$$.",
                            solution: "Outer: $$u^4$$, inner: $$u = 2x+3$$. $$h'(x) = 4(2x+3)^3\\cdot 2 = 8(2x+3)^3$$."
                        },
                        {
                            difficulty: "A",
                            title: "Chain Rule — Power of Quadratic",
                            statement: "Differentiate $$h(x) = (x^2+1)^3$$.",
                            solution: "$$h'(x) = 3(x^2+1)^2\\cdot 2x = 6x(x^2+1)^2$$."
                        },
                        {
                            difficulty: "A",
                            title: "Chain Rule — Radical of Linear",
                            statement: "Differentiate $$h(x) = \\sqrt{5x-2}$$.",
                            solution: "$$h(x) = (5x-2)^{1/2}$$. $$h'(x) = \\frac{1}{2}(5x-2)^{-1/2}\\cdot 5 = \\frac{5}{2\\sqrt{5x-2}}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Chain Rule — Reciprocal of Linear",
                            statement: "Differentiate $$h(x) = \\dfrac{1}{(3x+1)^2}$$.",
                            solution: "$$h(x) = (3x+1)^{-2}$$. $$h'(x) = -2(3x+1)^{-3}\\cdot 3 = \\frac{-6}{(3x+1)^3}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Chain Rule — Leibniz Notation",
                            statement: "Let $$y = u^3$$ and $$u = x^2-1$$. Find $$\\dfrac{dy}{dx}$$.",
                            solution: "$$\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 3u^2\\cdot 2x = 3(x^2-1)^2\\cdot 2x = 6x(x^2-1)^2$$."
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule — Radical of Cubic",
                            statement: "Differentiate $$h(x) = \\sqrt{x^3 - 3x}$$.",
                            solution: "$$h'(x) = \\frac{1}{2}(x^3-3x)^{-1/2}\\cdot(3x^2-3) = \\frac{3x^2-3}{2\\sqrt{x^3-3x}} = \\frac{3(x^2-1)}{2\\sqrt{x^3-3x}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule — Power 5 of Quadratic",
                            statement: "Differentiate $$h(x) = (x^2-4x+1)^5$$.",
                            solution: "$$h'(x) = 5(x^2-4x+1)^4\\cdot(2x-4) = 10(x-2)(x^2-4x+1)^4$$."
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule — Nested",
                            statement: "Differentiate $$h(x) = \\left(\\sqrt{x}+1\\right)^3$$.",
                            solution: "Outer: $$u^3$$, inner: $$u = x^{1/2}+1$$, inner': $$\\frac{1}{2}x^{-1/2}$$. $$h'(x) = 3(\\sqrt{x}+1)^2\\cdot\\frac{1}{2\\sqrt{x}} = \\frac{3(\\sqrt{x}+1)^2}{2\\sqrt{x}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule Combined with Product",
                            statement: "Differentiate $$h(x) = x^2(x^2+1)^3$$.",
                            solution: "Product rule with $$f=x^2, g=(x^2+1)^3$$. $$f'=2x, g'=3(x^2+1)^2\\cdot 2x = 6x(x^2+1)^2$$. $$h'(x) = 2x(x^2+1)^3 + x^2\\cdot 6x(x^2+1)^2 = 2x(x^2+1)^2[(x^2+1)+3x^2] = 2x(4x^2+1)(x^2+1)^2$$."
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule Combined with Quotient",
                            statement: "Differentiate $$h(x) = \\dfrac{(x+1)^3}{x^2}$$.",
                            solution: "Quotient rule: $$f=(x+1)^3, f'=3(x+1)^2; \\quad g=x^2, g'=2x$$. $$h'(x) = \\frac{3(x+1)^2\\cdot x^2-(x+1)^3\\cdot 2x}{x^4} = \\frac{x(x+1)^2[3x-2(x+1)]}{x^4} = \\frac{(x+1)^2(x-2)}{x^3}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Triple Chain Rule",
                            statement: "Differentiate $$h(x) = \\sqrt{(x^2+1)^3}$$.",
                            solution: "$$h(x) = ((x^2+1)^3)^{1/2} = (x^2+1)^{3/2}$$. $$h'(x) = \\frac{3}{2}(x^2+1)^{1/2}\\cdot 2x = 3x\\sqrt{x^2+1}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Chain Rule — Cube Root",
                            statement: "Differentiate $$h(x) = \\sqrt[3]{x^2+x+1}$$.",
                            solution: "$$h = (x^2+x+1)^{1/3}$$. $$h'(x) = \\frac{1}{3}(x^2+x+1)^{-2/3}\\cdot(2x+1) = \\frac{2x+1}{3(x^2+x+1)^{2/3}}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Chain Rule — Evaluate at Point",
                            statement: "Let $$h(x) = \\dfrac{1}{\\sqrt{x^2+9}}$$. Find $$h'(4)$$.",
                            solution: "$$h(x) = (x^2+9)^{-1/2}$$. $$h'(x) = -\\frac{1}{2}(x^2+9)^{-3/2}\\cdot 2x = \\frac{-x}{(x^2+9)^{3/2}}$$. $$h'(4) = \\frac{-4}{(16+9)^{3/2}} = \\frac{-4}{25^{3/2}} = \\frac{-4}{125}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Chain Rule — Tangent Line",
                            statement: "Find the tangent line to $$h(x) = (x^2-1)^4$$ at $$x = -1$$.",
                            solution: "$$h(-1) = 0$$. $$h'(x) = 4(x^2-1)^3\\cdot 2x = 8x(x^2-1)^3$$. $$h'(-1) = 8(-1)(1-1)^3 = 0$$. Tangent: $$y - 0 = 0(x+1) \\implies y = 0$$ (the $$x$$-axis)."
                        },
                        {
                            difficulty: "D",
                            title: "Prove Chain Rule (Informal)",
                            statement: "Explain the chain rule by deriving it informally using the definition of derivative.",
                            solution: "Write $$\\frac{h(x+\\Delta x)-h(x)}{\\Delta x}$$ where $$h = f\\circ g$$. Introduce $$\\Delta u = g(x+\\Delta x)-g(x)$$. Rewrite: $$= \\frac{f(g(x+\\Delta x))-f(g(x))}{\\Delta x} = \\frac{f(u+\\Delta u)-f(u)}{\\Delta u}\\cdot\\frac{\\Delta u}{\\Delta x}$$, valid when $$\\Delta u \\neq 0$$. As $$\\Delta x\\to 0$$: $$\\Delta u\\to 0$$ (since $$g$$ is continuous), first factor $$\\to f'(u) = f'(g(x))$$, second factor $$\\to g'(x)$$. Hence $$h'(x) = f'(g(x))g'(x)$$."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Forgetting Inner Derivative",
                            statement: "A student differentiates $$(x^3+2)^5$$ and writes $$5(x^3+2)^4$$. What is the complete correct answer?",
                            solution: "The student forgot to multiply by the derivative of the inner function $$g(x) = x^3+2$$, i.e., $$g'(x) = 3x^2$$. Correct: $$5(x^3+2)^4\\cdot 3x^2 = 15x^2(x^3+2)^4$$."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Evaluating Outer Derivative at x, not g(x)",
                            statement: "Differentiate $$h(x) = (x^2+1)^3$$. A student writes $$h'(x) = 3x^2(x^2+1)^2$$. Find the error.",
                            solution: "The student evaluated the outer derivative at $$x$$ (writing $$3x^2$$) rather than at $$u = x^2+1$$ (which gives $$3u^2 = 3(x^2+1)^2$$), then multiplied by the inner derivative $$2x$$ — but in the wrong order. Correct: outer' = $$3(x^2+1)^2$$; inner' = $$2x$$. Product: $$h'(x) = 3(x^2+1)^2\\cdot 2x = 6x(x^2+1)^2$$."
                        }
                    ]
                },

                // ── LESSON 4.4 ──────────────────────────────────────
                {
                    name: "Mixed Rule Problems",
                    tags: ["Computational", "Advanced", "55 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Determine which differentiation rule(s) to apply in complex situations.</li>
                                <li>Apply multiple rules in sequence on a single function.</li>
                                <li>Simplify results algebraically after differentiating.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Strategy for Complex Derivatives</strong>
                            <ol style="margin-left:1.5rem;">
                                <li>Identify the outermost operation (product, quotient, or composition).</li>
                                <li>Apply the corresponding rule.</li>
                                <li>Apply inner rules recursively as needed.</li>
                                <li>Simplify by factoring common terms.</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "B",
                            title: "Product of Chain Rules",
                            statement: "Differentiate $$h(x) = \\sqrt{x+1}\\cdot\\sqrt{x-1}$$.",
                            solution: "$$f=(x+1)^{1/2}, f'=\\frac{1}{2}(x+1)^{-1/2}; \\quad g=(x-1)^{1/2}, g'=\\frac{1}{2}(x-1)^{-1/2}$$. $$h'=\\frac{(x-1)^{1/2}}{2(x+1)^{1/2}}+\\frac{(x+1)^{1/2}}{2(x-1)^{1/2}} = \\frac{(x-1)+( x+1)}{2\\sqrt{(x+1)(x-1)}} = \\frac{2x}{2\\sqrt{x^2-1}} = \\frac{x}{\\sqrt{x^2-1}}$$. (Faster: $$h = \\sqrt{x^2-1}$$, $$h' = \\frac{x}{\\sqrt{x^2-1}}$$. ✓)"
                        },
                        {
                            difficulty: "B",
                            title: "Quotient with Chain Rule Numerator",
                            statement: "Differentiate $$h(x) = \\dfrac{(2x+1)^3}{x}$$.",
                            solution: "$$f=(2x+1)^3, f'=6(2x+1)^2; \\quad g=x, g'=1$$. $$h'(x) = \\frac{6(2x+1)^2\\cdot x-(2x+1)^3}{x^2} = \\frac{(2x+1)^2[6x-(2x+1)]}{x^2} = \\frac{(2x+1)^2(4x-1)}{x^2}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Product with Two Chain Rules",
                            statement: "Differentiate $$h(x) = (x^2+1)^2(x^3-1)^3$$.",
                            solution: "$$f=(x^2+1)^2, f'=4x(x^2+1); \\quad g=(x^3-1)^3, g'=9x^2(x^3-1)^2$$. $$h'(x) = 4x(x^2+1)(x^3-1)^3 + (x^2+1)^2\\cdot 9x^2(x^3-1)^2 = x(x^2+1)(x^3-1)^2[4(x^3-1)+9x(x^2+1)] = x(x^2+1)(x^3-1)^2(4x^3-4+9x^3+9x) = x(x^2+1)(x^3-1)^2(13x^3+9x-4)$$."
                        },
                        {
                            difficulty: "C",
                            title: "Chain Rule Inside Quotient",
                            statement: "Differentiate $$h(x) = \\dfrac{x}{(x^2+4)^{3/2}}$$.",
                            solution: "$$f=x, f'=1; \\quad g=(x^2+4)^{3/2}, g'=\\frac{3}{2}(x^2+4)^{1/2}\\cdot 2x = 3x\\sqrt{x^2+4}$$. $$h'(x) = \\frac{(x^2+4)^{3/2}-x\\cdot 3x\\sqrt{x^2+4}}{(x^2+4)^3} = \\frac{\\sqrt{x^2+4}[(x^2+4)-3x^2]}{(x^2+4)^3} = \\frac{4-2x^2}{(x^2+4)^{5/2}}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Three-Layer Composition",
                            statement: "Differentiate $$h(x) = \\sqrt{(x^2+1)^3+1}$$.",
                            solution: "Let $$u = (x^2+1)^3+1$$, $$v = x^2+1$$. $$h = u^{1/2}$$. $$\\frac{dh}{dx} = \\frac{1}{2}u^{-1/2}\\cdot\\frac{du}{dx}$$. $$\\frac{du}{dx} = 3(x^2+1)^2\\cdot 2x = 6x(x^2+1)^2$$. $$h'(x) = \\frac{6x(x^2+1)^2}{2\\sqrt{(x^2+1)^3+1}} = \\frac{3x(x^2+1)^2}{\\sqrt{(x^2+1)^3+1}}$$."
                        },
                        {
                            difficulty: "D",
                            title: "Implicit-Like Differentiation Setup",
                            statement: "Differentiate both sides of $$[f(x)]^n = g(x)$$ with respect to $$x$$ using the chain rule on the left.",
                            solution: "$$\\frac{d}{dx}[f(x)]^n = n[f(x)]^{n-1}\\cdot f'(x)$$ (chain rule: outer $$u^n$$, inner $$f(x)$$). Right side: $$g'(x)$$. So: $$n[f(x)]^{n-1}f'(x) = g'(x)$$, giving $$f'(x) = \\frac{g'(x)}{n[f(x)]^{n-1}}$$. This pattern underlies implicit differentiation and the general power rule for non-integer exponents."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Wrong Rule Priority",
                            statement: "A student differentiates $$h(x) = \\left(\\dfrac{x}{x+1}\\right)^2$$ as follows: first quotient rule to get $$\\frac{1}{(x+1)^2}$$, then squaring to get $$\\frac{1}{(x+1)^4}$$. Find the error.",
                            solution: "The student differentiated the inner function first and then tried to 'square' the result — this is not how differentiation works. The correct method: let $$u = \\frac{x}{x+1}$$. $$h = u^2$$. Chain rule: $$h' = 2u\\cdot u'$$. Now $$u' = \\frac{1\\cdot(x+1)-x\\cdot 1}{(x+1)^2} = \\frac{1}{(x+1)^2}$$. Therefore $$h' = 2\\cdot\\frac{x}{x+1}\\cdot\\frac{1}{(x+1)^2} = \\frac{2x}{(x+1)^3}$$."
                        }
                    ]
                }
            ]
        },
        {
            name: "Higher-Order Derivatives",
            icon: "🚀",
            description: "Extend differentiation to second and higher-order derivatives, connecting to acceleration, concavity, and proof-style reasoning.",
            lessons: [

                // ── LESSON 5.1 ──────────────────────────────────────
                {
                    name: "Second and Higher-Order Derivatives",
                    tags: ["Conceptual", "Computational", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Compute $$f''(x)$$, $$f'''(x)$$, and $$f^{(n)}(x)$$.</li>
                                <li>Interpret $$f''$$ as acceleration and concavity indicator.</li>
                                <li>Find the nth derivative of power and polynomial functions.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Higher-Order Derivative Notation</strong>
                            <p>$$f''(x) = \\frac{d^2f}{dx^2} = \\frac{d}{dx}[f'(x)]$$ &nbsp;&nbsp; (second derivative)</p>
                            <p>$$f^{(n)}(x) = \\frac{d^n f}{dx^n}$$ &nbsp;&nbsp; (nth derivative)</p>
                        </div>

                        <div class="theorem-box">
                            <strong>Physical Interpretation</strong>
                            <p>If $$s(t)$$ = position, then:</p>
                            <ul style="margin-left:1.5rem;">
                                <li>$$s'(t) = v(t)$$ = velocity</li>
                                <li>$$s''(t) = a(t)$$ = acceleration</li>
                            </ul>
                            <p>If $$f''(x) > 0$$: concave up (parabola-like opening upward)</p>
                            <p>If $$f''(x) < 0$$: concave down</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Second Derivative — Quadratic",
                            statement: "Find $$f''(x)$$ for $$f(x) = 3x^2 - 5x + 1$$.",
                            solution: "$$f'(x) = 6x - 5$$. $$f''(x) = 6$$."
                        },
                        {
                            difficulty: "A",
                            title: "Second Derivative — Cubic",
                            statement: "Find $$f''(x)$$ for $$f(x) = x^4 - 2x^3 + x$$.",
                            solution: "$$f'(x) = 4x^3 - 6x^2 + 1$$. $$f''(x) = 12x^2 - 12x = 12x(x-1)$$."
                        },
                        {
                            difficulty: "A",
                            title: "Third Derivative — Polynomial",
                            statement: "Find $$f'''(x)$$ for $$f(x) = 5x^4 - 3x^3 + x^2$$.",
                            solution: "$$f'(x) = 20x^3-9x^2+2x$$. $$f''(x) = 60x^2-18x+2$$. $$f'''(x) = 120x-18$$."
                        },
                        {
                            difficulty: "A",
                            title: "Acceleration from Position",
                            statement: "A particle has position $$s(t) = t^3 - 3t^2 + 2t$$. Find its acceleration at $$t = 2$$.",
                            solution: "$$v(t) = 3t^2-6t+2$$. $$a(t) = 6t-6$$. $$a(2) = 12-6 = 6 \\text{ m/s}^2$$."
                        },
                        {
                            difficulty: "B",
                            title: "Second Derivative — Power Rule",
                            statement: "Find $$\\dfrac{d^2}{dx^2}[x^{1/2}]$$.",
                            solution: "$$\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2}$$. $$\\frac{d^2}{dx^2}[x^{1/2}] = \\frac{1}{2}\\cdot(-\\frac{1}{2})x^{-3/2} = -\\frac{1}{4x^{3/2}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Second Derivative of Product",
                            statement: "Find $$f''(x)$$ for $$f(x) = x\\sqrt{x}$$.",
                            solution: "$$f(x) = x^{3/2}$$. $$f'(x) = \\frac{3}{2}x^{1/2}$$. $$f''(x) = \\frac{3}{2}\\cdot\\frac{1}{2}x^{-1/2} = \\frac{3}{4\\sqrt{x}}$$."
                        },
                        {
                            difficulty: "B",
                            title: "Evaluate Second Derivative",
                            statement: "Let $$f(x) = x^5 - 10x^3$$. Find $$f''(2)$$.",
                            solution: "$$f'(x) = 5x^4-30x^2$$. $$f''(x) = 20x^3-60x$$. $$f''(2) = 20(8)-60(2) = 160-120 = 40$$."
                        },
                        {
                            difficulty: "C",
                            title: "nth Derivative — Power Function",
                            statement: "Find a formula for $$f^{(n)}(x)$$ where $$f(x) = x^4$$, for $$n = 1, 2, 3, 4, 5$$.",
                            solution: "$$f'=4x^3, f''=12x^2, f'''=24x, f^{(4)}=24, f^{(5)}=0$$. Pattern: $$f^{(n)}(x) = \\frac{4!}{(4-n)!}x^{4-n}$$ for $$n \\leq 4$$, and $$0$$ for $$n > 4$$."
                        },
                        {
                            difficulty: "C",
                            title: "Second Derivative of Rational",
                            statement: "Find $$f''(x)$$ for $$f(x) = \\dfrac{1}{x}$$.",
                            solution: "$$f'(x) = -x^{-2}$$. $$f''(x) = 2x^{-3} = \\frac{2}{x^3}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Concavity Analysis",
                            statement: "For $$f(x) = x^3 - 6x^2 + 9x$$, find where $$f'' > 0$$ and $$f'' < 0$$.",
                            solution: "$$f'(x) = 3x^2-12x+9$$. $$f''(x) = 6x-12 = 6(x-2)$$. $$f'' > 0$$ when $$x > 2$$ (concave up). $$f'' < 0$$ when $$x < 2$$ (concave down). Inflection at $$x = 2$$."
                        },
                        {
                            difficulty: "D",
                            title: "General nth Derivative — Power Rule",
                            statement: "Prove that $$\\dfrac{d^n}{dx^n}[x^n] = n!$$ and $$\\dfrac{d^k}{dx^k}[x^n] = 0$$ for $$k > n$$.",
                            solution: "Apply power rule repeatedly: $$\\frac{d}{dx}[x^n] = nx^{n-1}$$. $$\\frac{d^2}{dx^2}[x^n] = n(n-1)x^{n-2}$$. By induction: $$\\frac{d^k}{dx^k}[x^n] = n(n-1)\\cdots(n-k+1)x^{n-k} = \\frac{n!}{(n-k)!}x^{n-k}$$ for $$k\\leq n$$. At $$k=n$$: $$\\frac{n!}{0!}x^0 = n!$$. At $$k=n+1$$: differentiate the constant $$n!$$ to get $$0$$. For all $$k > n$$: repeatedly differentiating $$0$$ yields $$0$$. $$\\blacksquare$$"
                        },
                        {
                            difficulty: "D",
                            title: "Second Derivative of Composition",
                            statement: "Find $$\\dfrac{d^2}{dx^2}[(x^2+1)^3]$$.",
                            solution: "$$f' = 3(x^2+1)^2\\cdot 2x = 6x(x^2+1)^2$$. For $$f''$$, use product rule: $$\\frac{d}{dx}[6x]\\cdot(x^2+1)^2 + 6x\\cdot\\frac{d}{dx}[(x^2+1)^2] = 6(x^2+1)^2 + 6x\\cdot 2(x^2+1)\\cdot 2x = 6(x^2+1)^2 + 24x^2(x^2+1) = 6(x^2+1)[(x^2+1)+4x^2] = 6(x^2+1)(5x^2+1)$$."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — f'' Is Not (f')²",
                            statement: "A student claims that for $$f(x) = x^3$$, $$f''(x) = [f'(x)]^2 = (3x^2)^2 = 9x^4$$. Correct the error.",
                            solution: "$$f'' = \\frac{d}{dx}[f'] = \\frac{d}{dx}[3x^2] = 6x$$, NOT $$(f')^2$$. The second derivative means differentiating $$f'$$ once more, not squaring it. $$f''(x) = 6x$$."
                        }
                    ]
                }
            ]
        },
        {
            name: "Optimization",
            icon: "🎯",
            description: "Apply derivatives to find absolute and relative extrema, solve applied optimization problems, and use the first and second derivative tests.",
            lessons: [

                // ── LESSON 6.1 ──────────────────────────────────────
                {
                    name: "Critical Points and the First Derivative Test",
                    tags: ["Applied", "Computational", "50 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Define critical points and find them.</li>
                                <li>Apply the first derivative test to classify extrema.</li>
                                <li>Distinguish local and global extrema.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Critical Points</strong>
                            <p>$$x = c$$ is a <em>critical point</em> of $$f$$ if $$f'(c) = 0$$ or $$f'(c)$$ does not exist.</p>
                        </div>

                        <div class="theorem-box">
                            <strong>First Derivative Test</strong>
                            <p>At a critical point $$x = c$$:</p>
                            <ul style="margin-left:1.5rem;">
                                <li>If $$f'$$ changes from $$+$$ to $$-$$: <strong>local maximum</strong> at $$c$$.</li>
                                <li>If $$f'$$ changes from $$-$$ to $$+$$: <strong>local minimum</strong> at $$c$$.</li>
                                <li>If $$f'$$ does not change sign: <strong>neither</strong> (saddle point).</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Closed Interval Method (Extreme Value Theorem)</strong>
                            <p>On $$[a,b]$$, the absolute extrema of a continuous $$f$$ occur at:</p>
                            <ol style="margin-left:1.5rem;">
                                <li>Critical points in $$(a,b)$$</li>
                                <li>Endpoints $$x=a$$ and $$x=b$$</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Find Critical Points",
                            statement: "Find all critical points of $$f(x) = x^3 - 3x^2 - 9x + 1$$.",
                            solution: "$$f'(x) = 3x^2-6x-9 = 3(x^2-2x-3) = 3(x-3)(x+1) = 0$$. Critical points: $$x = 3$$ and $$x = -1$$."
                        },
                        {
                            difficulty: "A",
                            title: "Classify Critical Points — First Derivative Test",
                            statement: "For $$f(x) = x^3 - 3x^2 - 9x + 1$$, classify the critical points $$x=-1$$ and $$x=3$$.",
                            solution: "Sign chart of $$f'(x) = 3(x-3)(x+1)$$: for $$x < -1$$: $$(-)(-) > 0$$; for $$-1 < x < 3$$: $$(-)( +) < 0$$; for $$x > 3$$: $$(+)(+) > 0$$. At $$x=-1$$: $$f'$$ changes $$+ \\to -$$: <strong>local max</strong>. $$f(-1) = -1-3+9+1 = 6$$. At $$x=3$$: $$f'$$ changes $$- \\to +$$: <strong>local min</strong>. $$f(3) = 27-27-27+1 = -26$$."
                        },
                        {
                            difficulty: "A",
                            title: "Absolute Extrema on Closed Interval",
                            statement: "Find the absolute maximum and minimum of $$f(x) = 2x^3 - 3x^2$$ on $$[-1, 2]$$.",
                            solution: "$$f'(x) = 6x^2-6x = 6x(x-1) = 0$$. Critical points in $$(-1,2)$$: $$x=0, x=1$$. Evaluate: $$f(-1) = -2-3 = -5$$, $$f(0) = 0$$, $$f(1) = 2-3 = -1$$, $$f(2) = 16-12 = 4$$. Absolute max: $$4$$ at $$x=2$$. Absolute min: $$-5$$ at $$x=-1$$."
                        },
                        {
                            difficulty: "B",
                            title: "Critical Points of Rational Function",
                            statement: "Find the critical points of $$f(x) = \\dfrac{x^2}{x^2+1}$$.",
                            solution: "$$f'(x) = \\frac{2x(x^2+1)-x^2\\cdot 2x}{(x^2+1)^2} = \\frac{2x}{(x^2+1)^2}$$. $$f'(x) = 0 \\implies x = 0$$. $$f'$$ is defined everywhere. Only critical point: $$x=0$$. Sign: $$f' < 0$$ for $$x < 0$$, $$f' > 0$$ for $$x > 0$$. Local (and global) min at $$x=0$$, $$f(0) = 0$$."
                        },
                        {
                            difficulty: "B",
                            title: "Critical Points Involving Radicals",
                            statement: "Find the critical points of $$f(x) = x^{2/3}(x-1)$$.",
                            solution: "Use product rule: $$f'(x) = \\frac{2}{3}x^{-1/3}(x-1)+x^{2/3}(1) = \\frac{2(x-1)}{3x^{1/3}}+x^{2/3}$$. Common denominator $$3x^{1/3}$$: $$= \\frac{2(x-1)+3x}{3x^{1/3}} = \\frac{5x-2}{3x^{1/3}}$$. $$f'=0 \\implies x=\\frac{2}{5}$$. $$f'$$ undefined at $$x=0$$. Critical points: $$x=0$$ and $$x=\\frac{2}{5}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Absolute Extrema on Non-Symmetric Interval",
                            statement: "Find the absolute extrema of $$g(x) = x^4 - 4x^3$$ on $$[-1, 4]$$.",
                            solution: "$$g'(x) = 4x^3-12x^2 = 4x^2(x-3)$$. Critical points in $$(-1,4)$$: $$x=0$$ and $$x=3$$. Values: $$g(-1) = 1+4 = 5$$. $$g(0) = 0$$. $$g(3) = 81-108 = -27$$. $$g(4) = 256-256 = 0$$. Absolute max: $$5$$ at $$x=-1$$. Absolute min: $$-27$$ at $$x=3$$."
                        },
                        {
                            difficulty: "D",
                            title: "Prove No Global Maximum",
                            statement: "Show that $$f(x) = x^3$$ has no local or global extrema on $$\\mathbb{R}$$.",
                            solution: "$$f'(x) = 3x^2 \\geq 0$$ for all $$x$$, and $$f'(x) = 0$$ only at $$x=0$$. The first derivative test: for $$x < 0$$, $$f' > 0$$; for $$x > 0$$, $$f' > 0$$. The sign of $$f'$$ does not change at $$x=0$$, so there is no local extremum. Since $$\\lim_{x\\to\\infty}f(x) = +\\infty$$ and $$\\lim_{x\\to -\\infty}f(x) = -\\infty$$, there is no global max or min. $$\\blacksquare$$"
                        }
                    ]
                },

                // ── LESSON 6.2 ──────────────────────────────────────
                {
                    name: "Second Derivative Test",
                    tags: ["Computational", "Conceptual", "40 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Apply the second derivative test to classify local extrema.</li>
                                <li>Identify when the second derivative test is inconclusive.</li>
                            </ul>
                        </div>

                        <div class="theorem-box">
                            <strong>Second Derivative Test</strong>
                            <p>Suppose $$f'(c) = 0$$:</p>
                            <ul style="margin-left:1.5rem;">
                                <li>If $$f''(c) > 0$$: <strong>local minimum</strong> at $$c$$.</li>
                                <li>If $$f''(c) < 0$$: <strong>local maximum</strong> at $$c$$.</li>
                                <li>If $$f''(c) = 0$$: <strong>inconclusive</strong> — use first derivative test.</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Second Derivative Test — Basic",
                            statement: "Classify the critical points of $$f(x) = x^3 - 12x$$ using the second derivative test.",
                            solution: "$$f'(x) = 3x^2-12 = 3(x-2)(x+2) = 0 \\implies x = \\pm 2$$. $$f''(x) = 6x$$. At $$x=2$$: $$f''(2) = 12 > 0$$ → local min. $$f(2) = 8-24 = -16$$. At $$x=-2$$: $$f''(-2) = -12 < 0$$ → local max. $$f(-2) = -8+24 = 16$$."
                        },
                        {
                            difficulty: "B",
                            title: "Second Derivative Test — Quartic",
                            statement: "Find and classify all local extrema of $$g(x) = x^4 - 2x^2$$.",
                            solution: "$$g'(x) = 4x^3-4x = 4x(x^2-1) = 4x(x-1)(x+1) = 0 \\implies x=0, \\pm 1$$. $$g''(x) = 12x^2-4$$. $$g''(0) = -4 < 0$$ → local max at $$(0, 0)$$. $$g''(1) = 8 > 0$$ → local min at $$(1,-1)$$. $$g''(-1) = 8 > 0$$ → local min at $$(-1,-1)$$."
                        },
                        {
                            difficulty: "C",
                            title: "Inconclusive Second Derivative Test",
                            statement: "Let $$f(x) = x^4$$. Apply the second derivative test at $$x=0$$ and explain why the first derivative test is needed.",
                            solution: "$$f'(x) = 4x^3 = 0 \\implies x=0$$. $$f''(x) = 12x^2$$. $$f''(0) = 0$$ → inconclusive. First derivative test: $$f'(x) = 4x^3 < 0$$ for $$x < 0$$ and $$> 0$$ for $$x > 0$$. Sign changes $$- \\to +$$: local min at $$x=0$$. $$f(0) = 0$$."
                        },
                        {
                            difficulty: "D",
                            title: "Function with Both Second Derivative Test Cases",
                            statement: "Find all local extrema of $$h(x) = 3x^5 - 5x^3$$ using both tests.",
                            solution: "$$h'(x) = 15x^4-15x^2 = 15x^2(x^2-1) = 15x^2(x-1)(x+1)$$. Critical points: $$x = 0, \\pm 1$$. $$h''(x) = 60x^3-30x$$. At $$x=1$$: $$h''(1) = 30 > 0$$ → local min, $$h(1) = 3-5 = -2$$. At $$x=-1$$: $$h''(-1) = -30 < 0$$ → local max, $$h(-1) = -3+5 = 2$$. At $$x=0$$: $$h''(0) = 0$$ → inconclusive. First derivative test at $$x=0$$: for $$-1 < x < 0$$: $$15x^2 > 0$$, $$(x^2-1) < 0$$ → $$h' < 0$$. For $$0 < x < 1$$: $$h' < 0$$. No sign change → neither max nor min."
                        }
                    ]
                },

                // ── LESSON 6.3 ──────────────────────────────────────
                {
                    name: "Applied Optimization Problems",
                    tags: ["Applied", "Word Problems", "60 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Translate real-world problems into mathematical optimization models.</li>
                                <li>Set up the objective function and constraints.</li>
                                <li>Use calculus to find the optimal solution.</li>
                                <li>Verify the answer makes physical sense.</li>
                            </ul>
                        </div>

                        <div class="definition-box">
                            <strong>Optimization Problem-Solving Framework</strong>
                            <ol style="margin-left:1.5rem;">
                                <li><strong>Identify</strong> what to maximize or minimize (objective function).</li>
                                <li><strong>Draw</strong> a diagram and label variables.</li>
                                <li><strong>Write</strong> the objective function in terms of one variable using constraints.</li>
                                <li><strong>Differentiate</strong> and set equal to zero.</li>
                                <li><strong>Verify</strong> using second derivative test or closed interval method.</li>
                                <li><strong>Answer</strong> the question in context with units.</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Maximum Product",
                            statement: "Two positive numbers sum to 20. Find the pair with the maximum product.",
                            solution: "Let the numbers be $$x$$ and $$20-x$$, $$x > 0$$. Product: $$P(x) = x(20-x) = 20x-x^2$$. $$P'(x) = 20-2x = 0 \\implies x = 10$$. $$P''(x) = -2 < 0$$ → maximum. The numbers are $$10$$ and $$10$$, product $$= 100$$."
                        },
                        {
                            difficulty: "A",
                            title: "Minimum Sum of Squares",
                            statement: "The product of two positive numbers is 25. Minimize their sum.",
                            solution: "Let numbers be $$x$$ and $$25/x$$. Sum: $$S(x) = x + \\frac{25}{x}$$, $$x > 0$$. $$S'(x) = 1 - \\frac{25}{x^2} = 0 \\implies x^2 = 25 \\implies x = 5$$. $$S''(x) = \\frac{50}{x^3}$$; $$S''(5) = \\frac{50}{125} > 0$$ → minimum. Numbers are $$5$$ and $$5$$, sum $$= 10$$."
                        },
                        {
                            difficulty: "B",
                            title: "Fencing Problem",
                            statement: "A farmer has 200 m of fence to enclose a rectangular field against a straight barn wall (one side needs no fence). Find the dimensions that maximize area.",
                            solution: "Let width perpendicular to barn $$= x$$ m, length parallel to barn $$= L$$ m. Constraint: $$2x + L = 200 \\implies L = 200-2x$$. Area: $$A(x) = xL = x(200-2x) = 200x-2x^2$$, $$0 < x < 100$$. $$A'(x) = 200-4x = 0 \\implies x = 50$$. $$A''(x) = -4 < 0$$ → max. Dimensions: $$x=50$$ m (width), $$L=100$$ m (length). Area $$= 5000$$ m²."
                        },
                        {
                            difficulty: "B",
                            title: "Profit Maximization",
                            statement: "A company's profit is $$P(x) = -2x^2 + 120x - 1000$$ dollars ($$x$$ = units produced). Find the production level maximizing profit.",
                            solution: "$$P'(x) = -4x+120 = 0 \\implies x = 30$$. $$P''(x) = -4 < 0$$ → maximum. Max profit at $$x = 30$$ units: $$P(30) = -1800+3600-1000 = 800$$ dollars."
                        },
                        {
                            difficulty: "B",
                            title: "Cylinder Volume — Fixed Surface Area",
                            statement: "A closed cylindrical can has surface area $$300\\pi$$ cm². Find the dimensions (radius and height) that maximize volume.",
                            solution: "Surface: $$2\\pi r^2+2\\pi rh = 300\\pi \\implies h = \\frac{150-r^2}{r}$$. Volume: $$V = \\pi r^2 h = \\pi r^2\\cdot\\frac{150-r^2}{r} = \\pi r(150-r^2) = \\pi(150r-r^3)$$. $$V'(r) = \\pi(150-3r^2) = 0 \\implies r^2 = 50 \\implies r = 5\\sqrt{2}$$. $$h = \\frac{150-50}{5\\sqrt{2}} = \\frac{100}{5\\sqrt{2}} = 10\\sqrt{2}$$. Note $$h = 2r$$: the optimal height equals the diameter."
                        },
                        {
                            difficulty: "C",
                            title: "Box Without a Lid",
                            statement: "A box with a square base and no top is to be made from 108 cm² of cardboard. Find the dimensions that maximize volume.",
                            solution: "Let base side $$= x$$, height $$= h$$. Surface area: $$x^2 + 4xh = 108 \\implies h = \\frac{108-x^2}{4x}$$. Volume: $$V = x^2h = x^2\\cdot\\frac{108-x^2}{4x} = \\frac{x(108-x^2)}{4} = \\frac{108x-x^3}{4}$$. $$V'(x) = \\frac{108-3x^2}{4} = 0 \\implies x^2 = 36 \\implies x = 6$$ cm. $$h = \\frac{108-36}{24} = 3$$ cm. $$V = 36\\cdot 3 = 108$$ cm³."
                        },
                        {
                            difficulty: "C",
                            title: "Shortest Distance",
                            statement: "Find the point on the parabola $$y = x^2$$ closest to the point $$(3, 0)$$.",
                            solution: "Distance squared from $$(x, x^2)$$ to $$(3,0)$$: $$D^2 = (x-3)^2 + x^4$$. Minimize $$f(x) = (x-3)^2+x^4$$. $$f'(x) = 2(x-3)+4x^3 = 4x^3+2x-6$$. Testing $$x=1$$: $$4+2-6=0$$. So $$x=1$$ is a critical point. $$f''(x) = 12x^2+2 > 0$$ → minimum. Point: $$(1, 1)$$. Distance $$= \\sqrt{(1-3)^2+1} = \\sqrt{5}$$."
                        },
                        {
                            difficulty: "C",
                            title: "Revenue Optimization",
                            statement: "A theater sells 500 tickets at \\$10 each. For every \\$1 increase in price, 20 fewer tickets are sold. Find the ticket price that maximizes revenue.",
                            solution: "Let $$x$$ = number of \\$1 increases. Price: $$10+x$$. Tickets sold: $$500-20x$$. Revenue: $$R(x) = (10+x)(500-20x) = 5000-200x+500x-20x^2 = 5000+300x-20x^2$$. $$R'(x) = 300-40x = 0 \\implies x = 7.5$$. Price: $$\\$17.50$$. Tickets: $$500-150 = 350$$. Revenue $$= 17.50\\times 350 = \\$6125$$."
                        },
                        {
                            difficulty: "D",
                            title: "Minimize Travel Time",
                            statement: "A point A is 6 km from a straight shore and a point B is 10 km along the shore. A swimmer can swim at 2 km/h and walk at 5 km/h. Where should she land to minimize total travel time?",
                            solution: "Let $$x$$ = distance along shore from the nearest point to A. Swimming distance: $$\\sqrt{36+x^2}$$. Walking distance: $$10-x$$. Time: $$T(x) = \\frac{\\sqrt{36+x^2}}{2}+\\frac{10-x}{5}$$, $$0 \\leq x \\leq 10$$. $$T'(x) = \\frac{x}{2\\sqrt{36+x^2}}-\\frac{1}{5} = 0$$. $$\\frac{x}{2\\sqrt{36+x^2}} = \\frac{1}{5} \\implies 5x = 2\\sqrt{36+x^2} \\implies 25x^2 = 4(36+x^2) \\implies 21x^2 = 144 \\implies x = \\frac{12}{\\sqrt{21}} = \\frac{12\\sqrt{21}}{21} \\approx 2.62$$ km. She should land $$\\approx 2.62$$ km from the nearest point."
                        },
                        {
                            difficulty: "E",
                            title: "Trap — Critical Point Not in Domain",
                            statement: "Minimize $$f(x) = x^2 - 4x + 5$$ on $$[3, 6]$$. A student finds $$f'(x) = 0$$ at $$x=2$$ and says the minimum is $$f(2)=1$$. What is wrong?",
                            solution: "The critical point $$x=2$$ is NOT in the interval $$[3,6]$$. On a closed interval, the extremes occur only at critical points inside the interval and at the endpoints. Since $$x=2$$ is excluded, check endpoints: $$f(3) = 9-12+5 = 2$$ and $$f(6) = 36-24+5 = 17$$. The minimum on $$[3,6]$$ is $$f(3) = 2$$ at $$x=3$$."
                        }
                    ]
                }
            ]
        },
        {
            name: "Exponential & Logarithmic Derivatives",
            icon: "📈",
            description: "Master differentiation of natural exponential, general exponential, natural logarithm, and general logarithmic functions using chain rule extensions.",
            lessons: [

                {
                    name: "The Natural Exponential Function and General Exponentials",
                    tags: ["Computational", "Foundational", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State and apply the rule $$\\frac{d}{dx}e^x = e^x$$</li>
                                <li>Differentiate composite exponential expressions using the chain rule</li>
                                <li>Differentiate general exponential functions $$a^x$$ and $$a^{g(x)}$$</li>
                                <li>Combine exponential rules with product, quotient, and chain rules</li>
                            </ul>
                        </div>
                        <div class="definition-box">
                            <strong>The Natural Exponential Function</strong>
                            <p>The natural exponential function $$f(x)=e^x$$ is uniquely defined by the property that it is its own derivative:</p>
                            <p>$$\\frac{d}{dx}\\left[e^x\\right] = e^x$$</p>
                            <p>This remarkable self-referential property makes $$e^x$$ the cornerstone of calculus involving growth and decay.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Chain Rule Extension for Natural Exponentials</strong>
                            <p>If $$u = g(x)$$ is differentiable, then:</p>
                            <p>$$\\frac{d}{dx}\\left[e^{g(x)}\\right] = e^{g(x)} \\cdot g'(x)$$</p>
                            <p><em>Procedure:</em> Differentiate the exponent, then multiply by the original exponential.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>General Exponential Functions</strong>
                            <p>For a constant base $$a > 0,\\ a \\neq 1$$:</p>
                            <p>$$\\frac{d}{dx}\\left[a^x\\right] = a^x \\ln a$$</p>
                            <p>With chain rule: $$\\frac{d}{dx}\\left[a^{g(x)}\\right] = a^{g(x)} \\cdot \\ln a \\cdot g'(x)$$</p>
                            <p><em>Derivation:</em> Write $$a^x = e^{x\\ln a}$$, then apply the natural exponential chain rule.</p>
                        </div>
                        <div class="definition-box">
                            <strong>Common Mistakes to Avoid</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Confusing $$\\frac{d}{dx}[x^n]=nx^{n-1}$$ (power rule) with $$\\frac{d}{dx}[a^x]=a^x\\ln a$$ — the base and exponent roles are swapped</li>
                                <li>Forgetting to multiply by $$g'(x)$$ when applying the chain rule</li>
                                <li>Omitting $$\\ln a$$ when differentiating $$a^x$$ for $$a\\neq e$$</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Natural Exponential",
                            statement: "Find $$\\frac{dy}{dx}$$ if $$y = e^{3x}$$.",
                            solution: "Apply the chain rule with $$g(x)=3x$$, so $$g'(x)=3$$.\n$$\\frac{dy}{dx} = e^{3x} \\cdot 3 = 3e^{3x}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Exponential with Quadratic Exponent",
                            statement: "Differentiate $$f(x) = e^{x^2}$$.",
                            solution: "Let $$g(x)=x^2$$, so $$g'(x)=2x$$.\n$$f'(x) = e^{x^2} \\cdot 2x = 2xe^{x^2}$$"
                        },
                        {
                            difficulty: "A",
                            title: "General Exponential — Base 2",
                            statement: "Find $$\\frac{d}{dx}\\left[2^x\\right]$$.",
                            solution: "Using the general exponential rule with $$a=2$$:\n$$\\frac{d}{dx}[2^x] = 2^x \\ln 2$$"
                        },
                        {
                            difficulty: "A",
                            title: "Constant Multiple",
                            statement: "Differentiate $$y = 5e^{-x}$$.",
                            solution: "$$\\frac{dy}{dx} = 5 \\cdot e^{-x} \\cdot (-1) = -5e^{-x}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Exponential with Linear Exponent",
                            statement: "Find $$\\frac{d}{dx}\\left[e^{4x-7}\\right]$$.",
                            solution: "$$g(x)=4x-7,\\quad g'(x)=4$$\n$$\\frac{d}{dx}[e^{4x-7}] = 4e^{4x-7}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Base 10 Exponential",
                            statement: "Differentiate $$f(x)=10^x$$.",
                            solution: "$$f'(x)=10^x\\ln 10$$"
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule with Exponential",
                            statement: "Differentiate $$y = x^2 e^{3x}$$.",
                            solution: "Apply the product rule: $$\\frac{d}{dx}[uv]=u'v+uv'$$ where $$u=x^2,\\ v=e^{3x}$$.\n$$u'=2x,\\quad v'=3e^{3x}$$\n$$\\frac{dy}{dx} = 2x\\cdot e^{3x} + x^2\\cdot 3e^{3x} = e^{3x}(2x+3x^2) = xe^{3x}(2+3x)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Quotient Rule with Exponential",
                            statement: "Find $$\\frac{d}{dx}\\left[\\frac{e^x}{x^2+1}\\right]$$.",
                            solution: "$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right]=\\frac{u'v-uv'}{v^2}$$, where $$u=e^x,\\ v=x^2+1$$.\n$$u'=e^x,\\quad v'=2x$$\n$$= \\frac{e^x(x^2+1)-e^x(2x)}{(x^2+1)^2} = \\frac{e^x(x^2-2x+1)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule — Composite Exponential",
                            statement: "Find $$\\frac{d}{dx}\\left[e^{\\sin x}\\right]$$.",
                            solution: "$$g(x)=\\sin x,\\quad g'(x)=\\cos x$$\n$$\\frac{d}{dx}[e^{\\sin x}] = e^{\\sin x}\\cos x$$"
                        },
                        {
                            difficulty: "B",
                            title: "General Exponential with Chain Rule",
                            statement: "Differentiate $$y=3^{x^2+1}$$.",
                            solution: "$$g(x)=x^2+1,\\quad g'(x)=2x,\\quad a=3$$\n$$y'=3^{x^2+1}\\cdot\\ln 3\\cdot 2x = 2x\\ln 3\\cdot 3^{x^2+1}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Nested Exponential",
                            statement: "Differentiate $$f(x) = e^{e^x}$$.",
                            solution: "Let $$u=e^x$$, so $$\\frac{du}{dx}=e^x$$.\n$$f'(x) = e^{e^x}\\cdot e^x = e^x\\cdot e^{e^x}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Exponential with Square Root",
                            statement: "Find $$\\frac{d}{dx}\\left[e^{\\sqrt{x}}\\right]$$.",
                            solution: "$$g(x)=x^{1/2},\\quad g'(x)=\\frac{1}{2}x^{-1/2}=\\frac{1}{2\\sqrt{x}}$$\n$$\\frac{d}{dx}[e^{\\sqrt{x}}] = e^{\\sqrt{x}}\\cdot\\frac{1}{2\\sqrt{x}} = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Triple Product",
                            statement: "Differentiate $$y = x e^{2x}\\sin x$$.",
                            solution: "Apply product rule to three factors: $$\\frac{d}{dx}[uvw]=u'vw+uv'w+uvw'$$\n$$u=x,\\ v=e^{2x},\\ w=\\sin x$$\n$$u'=1,\\ v'=2e^{2x},\\ w'=\\cos x$$\n$$y' = e^{2x}\\sin x + x(2e^{2x})\\sin x + xe^{2x}\\cos x$$\n$$= e^{2x}[\\sin x + 2x\\sin x + x\\cos x]$$\n$$= e^{2x}[(1+2x)\\sin x + x\\cos x]$$"
                        },
                        {
                            difficulty: "C",
                            title: "Exponential to a Power",
                            statement: "Find $$\\frac{d}{dx}\\left[(e^x+1)^4\\right]$$.",
                            solution: "Let $$u=e^x+1$$, so $$\\frac{du}{dx}=e^x$$.\nBy chain rule: $$\\frac{d}{dx}[u^4]=4u^3\\cdot\\frac{du}{dx}$$\n$$= 4(e^x+1)^3\\cdot e^x = 4e^x(e^x+1)^3$$"
                        },
                        {
                            difficulty: "C",
                            title: "Higher-Order Derivative of Exponential",
                            statement: "Find $$\\frac{d^3}{dx^3}\\left[e^{2x}\\right]$$.",
                            solution: "$$\\frac{d}{dx}[e^{2x}]=2e^{2x}$$\n$$\\frac{d^2}{dx^2}[e^{2x}]=4e^{2x}$$\n$$\\frac{d^3}{dx^3}[e^{2x}]=8e^{2x}$$\n<em>Pattern:</em> $$\\frac{d^n}{dx^n}[e^{ax}]=a^n e^{ax}$$"
                        },
                        {
                            difficulty: "D",
                            title: "General Formula — nth Derivative",
                            statement: "Prove that $$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$ for any positive integer $$n$$.",
                            solution: "<strong>Proof by Mathematical Induction:</strong>\n<em>Base case</em> $$n=1$$: $$\\frac{d}{dx}[e^{ax}]=ae^{ax}=a^1e^{ax}$$. ✓\n<em>Inductive step</em>: Assume $$\\frac{d^k}{dx^k}[e^{ax}]=a^ke^{ax}$$.\nThen $$\\frac{d^{k+1}}{dx^{k+1}}[e^{ax}]=\\frac{d}{dx}[a^ke^{ax}]=a^k\\cdot ae^{ax}=a^{k+1}e^{ax}$$. ✓\nBy induction, the formula holds for all $$n\\in\\mathbb{Z}^+$$. ∎"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Power Rule vs. Exponential Rule",
                            statement: "A student writes $$\\frac{d}{dx}[e^x] = xe^{x-1}$$. Identify the error and give the correct derivative.",
                            solution: "<strong>Error:</strong> The student incorrectly applied the power rule $$\\frac{d}{dx}[x^n]=nx^{n-1}$$. The power rule requires the base to be the variable and the exponent to be a constant. Here the BASE is the constant $$e$$ and the EXPONENT is the variable $$x$$.\n<strong>Correct:</strong> $$\\frac{d}{dx}[e^x] = e^x$$"
                        }
                    ]
                },

                {
                    name: "Derivatives of Logarithmic Functions & Logarithmic Differentiation",
                    tags: ["Computational", "Technique", "50 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Compute derivatives of $$\\ln x$$ and $$\\log_a x$$</li>
                                <li>Apply chain rule extensions to logarithmic compositions</li>
                                <li>Use logarithmic differentiation to handle variable-exponent and complicated product/quotient expressions</li>
                                <li>Differentiate expressions of the form $$[f(x)]^{g(x)}$$</li>
                            </ul>
                        </div>
                        <div class="theorem-box">
                            <strong>Natural Logarithm Derivative</strong>
                            <p>$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}, \\quad x>0$$</p>
                            <p>With chain rule: $$\\frac{d}{dx}[\\ln g(x)] = \\frac{g'(x)}{g(x)}$$</p>
                            <p><em>Note for absolute value extension:</em> $$\\frac{d}{dx}[\\ln|x|]=\\frac{1}{x}$$ for $$x\\neq 0$$.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>General Logarithm</strong>
                            <p>$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x\\ln a}$$</p>
                            <p>Derived via change of base: $$\\log_a x = \\frac{\\ln x}{\\ln a}$$, then differentiate.</p>
                        </div>
                        <div class="definition-box">
                            <strong>Logarithmic Differentiation — Strategy</strong>
                            <p>Use when the function is a complicated product/quotient or has variable exponents.</p>
                            <ol style="margin-left:1.5rem;">
                                <li>Take $$\\ln$$ of both sides: $$\\ln y = \\ln[f(x)]$$</li>
                                <li>Simplify using log laws</li>
                                <li>Differentiate both sides with respect to $$x$$: $$\\frac{y'}{y} = \\left(\\text{simplified expression}\\right)'$$</li>
                                <li>Solve for $$y'$$: $$y' = y \\cdot \\left(\\text{expression}\\right)$$</li>
                                <li>Substitute back for $$y$$</li>
                            </ol>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Natural Log",
                            statement: "Differentiate $$f(x)=\\ln(5x)$$.",
                            solution: "$$f'(x)=\\frac{5}{5x}=\\frac{1}{x}$$\n<em>Alternatively</em>: $$\\ln(5x)=\\ln 5+\\ln x$$, so $$f'(x)=\\frac{1}{x}$$."
                        },
                        {
                            difficulty: "A",
                            title: "Ln of a Polynomial",
                            statement: "Find $$\\frac{d}{dx}[\\ln(x^2+1)]$$.",
                            solution: "$$g(x)=x^2+1,\\quad g'(x)=2x$$\n$$\\frac{d}{dx}[\\ln(x^2+1)]=\\frac{2x}{x^2+1}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Log Base 10",
                            statement: "Find $$\\frac{d}{dx}[\\log_{10}(x)]$$.",
                            solution: "$$\\frac{d}{dx}[\\log_{10}x]=\\frac{1}{x\\ln 10}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Ln with Power",
                            statement: "Differentiate $$y=\\ln(x^3)$$.",
                            solution: "Method 1 (chain rule): $$y'=\\frac{3x^2}{x^3}=\\frac{3}{x}$$\nMethod 2 (log law first): $$y=3\\ln x$$, so $$y'=\\frac{3}{x}$$ ✓"
                        },
                        {
                            difficulty: "A",
                            title: "Ln of Square Root",
                            statement: "Differentiate $$y=\\ln\\sqrt{x}$$.",
                            solution: "$$y=\\ln x^{1/2}=\\frac{1}{2}\\ln x$$\n$$y'=\\frac{1}{2}\\cdot\\frac{1}{x}=\\frac{1}{2x}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule with Ln",
                            statement: "Differentiate $$y=x^2\\ln x$$.",
                            solution: "Product rule: $$u=x^2,\\ v=\\ln x$$\n$$u'=2x,\\ v'=\\frac{1}{x}$$\n$$y'=2x\\ln x+x^2\\cdot\\frac{1}{x}=2x\\ln x+x$$"
                        },
                        {
                            difficulty: "B",
                            title: "Chain Rule Ln",
                            statement: "Differentiate $$f(x)=\\ln(\\sin x)$$.",
                            solution: "$$f'(x)=\\frac{\\cos x}{\\sin x}=\\cot x$$"
                        },
                        {
                            difficulty: "B",
                            title: "Ln of a Quotient",
                            statement: "Differentiate $$y=\\ln\\left(\\frac{x^2}{x+1}\\right)$$.",
                            solution: "Expand: $$y=2\\ln x - \\ln(x+1)$$\n$$y'=\\frac{2}{x}-\\frac{1}{x+1}=\\frac{2(x+1)-x}{x(x+1)}=\\frac{x+2}{x(x+1)}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Composed Ln with Exponential",
                            statement: "Find $$\\frac{d}{dx}[\\ln(e^x+e^{-x})]$$.",
                            solution: "$$g(x)=e^x+e^{-x},\\quad g'(x)=e^x-e^{-x}$$\n$$\\frac{d}{dx}[\\ln(e^x+e^{-x})]=\\frac{e^x-e^{-x}}{e^x+e^{-x}}=\\tanh x$$"
                        },
                        {
                            difficulty: "B",
                            title: "Log Base a with Chain Rule",
                            statement: "Find $$\\frac{d}{dx}[\\log_3(x^2+x)]$$.",
                            solution: "$$\\frac{d}{dx}[\\log_3(x^2+x)]=\\frac{2x+1}{(x^2+x)\\ln 3}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Logarithmic Differentiation — Variable Exponent",
                            statement: "Find $$y'$$ if $$y=x^x$$.",
                            solution: "Take $$\\ln$$ both sides: $$\\ln y=x\\ln x$$\nDifferentiate: $$\\frac{y'}{y}=\\ln x+x\\cdot\\frac{1}{x}=\\ln x+1$$\nSolve: $$y'=y(\\ln x+1)=x^x(\\ln x+1)$$"
                        },
                        {
                            difficulty: "C",
                            title: "Log Differentiation — Complex Product",
                            statement: "Differentiate $$y=\\frac{x^3(x+1)^2}{(x^2+2)^4}$$ using logarithmic differentiation.",
                            solution: "$$\\ln y=3\\ln x+2\\ln(x+1)-4\\ln(x^2+2)$$\n$$\\frac{y'}{y}=\\frac{3}{x}+\\frac{2}{x+1}-\\frac{8x}{x^2+2}$$\n$$y'=\\frac{x^3(x+1)^2}{(x^2+2)^4}\\left[\\frac{3}{x}+\\frac{2}{x+1}-\\frac{8x}{x^2+2}\\right]$$"
                        },
                        {
                            difficulty: "C",
                            title: "Form $$f(x)^{g(x)}$$",
                            statement: "Find the derivative of $$y=(\\sin x)^x$$.",
                            solution: "$$\\ln y=x\\ln(\\sin x)$$\n$$\\frac{y'}{y}=\\ln(\\sin x)+x\\cdot\\frac{\\cos x}{\\sin x}=\\ln(\\sin x)+x\\cot x$$\n$$y'=(\\sin x)^x[\\ln(\\sin x)+x\\cot x]$$"
                        },
                        {
                            difficulty: "D",
                            title: "Prove the Derivative of $$\\log_a x$$",
                            statement: "Starting from the definition $$\\log_a x = \\frac{\\ln x}{\\ln a}$$, derive $$\\frac{d}{dx}[\\log_a x]$$.",
                            solution: "By change of base: $$\\log_a x = \\frac{\\ln x}{\\ln a}$$\nSince $$\\ln a$$ is a constant ($$a$$ is fixed):\n$$\\frac{d}{dx}[\\log_a x]=\\frac{1}{\\ln a}\\cdot\\frac{d}{dx}[\\ln x]=\\frac{1}{\\ln a}\\cdot\\frac{1}{x}=\\frac{1}{x\\ln a}$$ ∎"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Ln of a Sum",
                            statement: "A student writes $$\\frac{d}{dx}[\\ln(x+1)]=\\frac{1}{x}+\\frac{1}{1}$$. Identify the error and give the correct answer.",
                            solution: "<strong>Error:</strong> The student incorrectly treated $$\\ln(x+1)$$ as if there were a log-of-sum rule. No such rule exists. $$\\ln(x+1)\\neq\\ln x+\\ln 1$$.\n<strong>Correct:</strong> Use chain rule with $$g(x)=x+1,\\ g'(x)=1$$:\n$$\\frac{d}{dx}[\\ln(x+1)]=\\frac{1}{x+1}$$"
                        }
                    ]
                }
            ]
        },
        {
            name: "Trigonometric & Inverse Trigonometric Derivatives",
            icon: "🌊",
            description: "Compute derivatives of all six trigonometric functions and their inverses, applying chain rule compositions and understanding domain restrictions.",
            lessons: [

                {
                    name: "Derivatives of the Six Trigonometric Functions",
                    tags: ["Computational", "Memorization", "40 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State derivatives of $$\\sin x$$, $$\\cos x$$, $$\\tan x$$, $$\\cot x$$, $$\\sec x$$, $$\\csc x$$</li>
                                <li>Apply chain rule to trigonometric compositions</li>
                                <li>Combine trigonometric derivatives with product and quotient rules</li>
                                <li>Recognize and apply double-angle and Pythagorean simplifications</li>
                            </ul>
                        </div>
                        <div class="theorem-box">
                            <strong>The Six Trigonometric Derivatives</strong>
                            <p>$$\\frac{d}{dx}[\\sin x]=\\cos x \\qquad \\frac{d}{dx}[\\cos x]=-\\sin x$$</p>
                            <p>$$\\frac{d}{dx}[\\tan x]=\\sec^2 x \\qquad \\frac{d}{dx}[\\cot x]=-\\csc^2 x$$</p>
                            <p>$$\\frac{d}{dx}[\\sec x]=\\sec x\\tan x \\qquad \\frac{d}{dx}[\\csc x]=-\\csc x\\cot x$$</p>
                            <p><em>Memory aid:</em> The derivatives of co-functions (cos, cot, csc) all carry a negative sign.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Chain Rule Extensions</strong>
                            <p>$$\\frac{d}{dx}[\\sin(g(x))]=\\cos(g(x))\\cdot g'(x)$$</p>
                            <p>$$\\frac{d}{dx}[\\tan(g(x))]=\\sec^2(g(x))\\cdot g'(x)$$</p>
                            <p>And analogously for all other trig functions.</p>
                        </div>
                        <div class="definition-box">
                            <strong>Common Mistakes</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Forgetting the negative sign in $$\\frac{d}{dx}[\\cos x]=-\\sin x$$</li>
                                <li>Writing $$\\frac{d}{dx}[\\tan x]=\\sec x\\tan x$$ (that is $$\\sec x$$'s derivative)</li>
                                <li>Not applying chain rule — writing $$\\frac{d}{dx}[\\sin(3x)]=\\cos(3x)$$ instead of $$3\\cos(3x)$$</li>
                            </ul>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Sine",
                            statement: "Differentiate $$f(x)=\\sin(2x)$$.",
                            solution: "$$f'(x)=\\cos(2x)\\cdot 2=2\\cos(2x)$$"
                        },
                        {
                            difficulty: "A",
                            title: "Basic Cosine",
                            statement: "Find $$\\frac{d}{dx}[\\cos(5x)]$$.",
                            solution: "$$-\\sin(5x)\\cdot 5=-5\\sin(5x)$$"
                        },
                        {
                            difficulty: "A",
                            title: "Tangent",
                            statement: "Differentiate $$y=\\tan(x^2)$$.",
                            solution: "$$y'=\\sec^2(x^2)\\cdot 2x=2x\\sec^2(x^2)$$"
                        },
                        {
                            difficulty: "A",
                            title: "Secant",
                            statement: "Find $$\\frac{d}{dx}[\\sec(3x)]$$.",
                            solution: "$$\\frac{d}{dx}[\\sec(3x)]=\\sec(3x)\\tan(3x)\\cdot 3=3\\sec(3x)\\tan(3x)$$"
                        },
                        {
                            difficulty: "A",
                            title: "Cotangent",
                            statement: "Differentiate $$f(x)=\\cot(4x)$$.",
                            solution: "$$f'(x)=-\\csc^2(4x)\\cdot 4=-4\\csc^2(4x)$$"
                        },
                        {
                            difficulty: "A",
                            title: "Cosecant",
                            statement: "Find $$\\frac{d}{dx}[\\csc(x+\\pi)]$$.",
                            solution: "$$\\frac{d}{dx}[\\csc(x+\\pi)]=-\\csc(x+\\pi)\\cot(x+\\pi)\\cdot 1=-\\csc(x+\\pi)\\cot(x+\\pi)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Product: $$x\\sin x$$",
                            statement: "Differentiate $$y=x\\sin x$$.",
                            solution: "Product rule: $$u=x,\\ v=\\sin x$$\n$$y'=\\sin x+x\\cos x$$"
                        },
                        {
                            difficulty: "B",
                            title: "Quotient: Trig over Polynomial",
                            statement: "Differentiate $$y=\\frac{\\sin x}{x}$$.",
                            solution: "$$y'=\\frac{x\\cos x-\\sin x}{x^2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Sin Squared",
                            statement: "Find $$\\frac{d}{dx}[\\sin^2 x]$$.",
                            solution: "Let $$u=\\sin x$$; $$\\frac{d}{dx}[u^2]=2u\\cdot u'=2\\sin x\\cos x=\\sin(2x)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Chain of Cosine",
                            statement: "Differentiate $$y=\\cos^3(2x)$$.",
                            solution: "Let $$u=\\cos(2x)$$.\n$$\\frac{d}{dx}[u^3]=3u^2\\cdot u'=3\\cos^2(2x)\\cdot(-\\sin(2x))\\cdot 2=-6\\cos^2(2x)\\sin(2x)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Trig with Exponential",
                            statement: "Differentiate $$y=e^x\\cos x$$.",
                            solution: "Product rule:\n$$y'=e^x\\cos x+e^x(-\\sin x)=e^x(\\cos x-\\sin x)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Double Angle via Derivative",
                            statement: "By differentiating, confirm that $$\\frac{d}{dx}[\\sin^2 x - \\cos^2 x] = 2\\sin(2x)$$.",
                            solution: "$$\\frac{d}{dx}[\\sin^2 x-\\cos^2 x]=2\\sin x\\cos x-2\\cos x(-\\sin x)=2\\sin x\\cos x+2\\sin x\\cos x=4\\sin x\\cos x=2\\sin(2x)$$ ✓"
                        },
                        {
                            difficulty: "C",
                            title: "Nested Trig",
                            statement: "Find $$\\frac{d}{dx}[\\tan(\\sin x)]$$.",
                            solution: "$$=\\sec^2(\\sin x)\\cdot\\cos x$$"
                        },
                        {
                            difficulty: "C",
                            title: "Second Derivative of Sine",
                            statement: "Find $$\\frac{d^2}{dx^2}[\\sin(3x)]$$.",
                            solution: "$$\\frac{d}{dx}[\\sin(3x)]=3\\cos(3x)$$\n$$\\frac{d^2}{dx^2}[\\sin(3x)]=3\\cdot(-\\sin(3x))\\cdot 3=-9\\sin(3x)$$"
                        },
                        {
                            difficulty: "C",
                            title: "Trig-Exponential Product",
                            statement: "Differentiate $$f(x)=e^{2x}\\sin(3x)$$.",
                            solution: "Product rule:\n$$f'(x)=2e^{2x}\\sin(3x)+e^{2x}\\cdot 3\\cos(3x)=e^{2x}[2\\sin(3x)+3\\cos(3x)]$$"
                        },
                        {
                            difficulty: "D",
                            title: "Prove $$\\frac{d}{dx}[\\tan x]=\\sec^2 x$$",
                            statement: "Starting from $$\\tan x=\\frac{\\sin x}{\\cos x}$$, prove that $$\\frac{d}{dx}[\\tan x]=\\sec^2 x$$.",
                            solution: "$$\\frac{d}{dx}[\\tan x]=\\frac{d}{dx}\\left[\\frac{\\sin x}{\\cos x}\\right]$$\nQuotient rule: $$=\\frac{\\cos x\\cdot\\cos x-\\sin x\\cdot(-\\sin x)}{\\cos^2 x}=\\frac{\\cos^2 x+\\sin^2 x}{\\cos^2 x}=\\frac{1}{\\cos^2 x}=\\sec^2 x$$ ∎"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: $$\\sin^2$$ vs $$\\sin(2x)$$",
                            statement: "A student writes $$\\frac{d}{dx}[\\sin^2 x]=2\\sin x$$. Find the correct answer and explain the mistake.",
                            solution: "<strong>Error:</strong> The student forgot to apply the chain rule — they differentiated the outer power but not the inner $$\\sin x$$.\n<strong>Correct:</strong> $$\\frac{d}{dx}[\\sin^2 x]=2\\sin x\\cdot\\cos x=\\sin(2x)$$"
                        }
                    ]
                },

                {
                    name: "Derivatives of Inverse Trigonometric Functions",
                    tags: ["Computational", "Conceptual", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State and apply derivatives of $$\\arcsin$$, $$\\arccos$$, $$\\arctan$$, $$\\text{arcsec}$$, $$\\text{arccsc}$$, $$\\text{arccot}$$</li>
                                <li>Understand domain restrictions that produce the principal branch</li>
                                <li>Apply chain rule to inverse trig compositions</li>
                                <li>Integrate knowledge with product/quotient rules</li>
                            </ul>
                        </div>
                        <div class="theorem-box">
                            <strong>Inverse Trigonometric Derivatives</strong>
                            <p>$$\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}}, \\quad |x|<1$$</p>
                            <p>$$\\frac{d}{dx}[\\arccos x]=-\\frac{1}{\\sqrt{1-x^2}}, \\quad |x|<1$$</p>
                            <p>$$\\frac{d}{dx}[\\arctan x]=\\frac{1}{1+x^2}$$</p>
                            <p>$$\\frac{d}{dx}[\\text{arccot}\\, x]=-\\frac{1}{1+x^2}$$</p>
                            <p>$$\\frac{d}{dx}[\\text{arcsec}\\, x]=\\frac{1}{|x|\\sqrt{x^2-1}}, \\quad |x|>1$$</p>
                            <p>$$\\frac{d}{dx}[\\text{arccsc}\\, x]=-\\frac{1}{|x|\\sqrt{x^2-1}}, \\quad |x|>1$$</p>
                        </div>
                        <div class="definition-box">
                            <strong>Derivation Strategy (arctan example)</strong>
                            <p>Let $$y=\\arctan x$$, so $$\\tan y=x$$. Differentiate both sides with respect to $$x$$:</p>
                            <p>$$\\sec^2 y\\cdot\\frac{dy}{dx}=1 \\implies \\frac{dy}{dx}=\\frac{1}{\\sec^2 y}=\\frac{1}{1+\\tan^2 y}=\\frac{1}{1+x^2}$$</p>
                        </div>
                        <div class="definition-box">
                            <strong>Note on $$\\arcsin$$ vs $$\\arccos$$</strong>
                            <p>$$\\arcsin x + \\arccos x = \\frac{\\pi}{2}$$ (constant), so their derivatives are negatives of each other. Similarly, $$\\arctan x + \\text{arccot}\\ x = \\frac{\\pi}{2}$$.</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic Arctan",
                            statement: "Differentiate $$f(x)=\\arctan(x)$$.",
                            solution: "$$f'(x)=\\frac{1}{1+x^2}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Basic Arcsin",
                            statement: "Find $$\\frac{d}{dx}[\\arcsin(x)]$$.",
                            solution: "$$\\frac{1}{\\sqrt{1-x^2}}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Arctan with Chain Rule",
                            statement: "Differentiate $$y=\\arctan(3x)$$.",
                            solution: "$$g(x)=3x,\\ g'(x)=3$$\n$$y'=\\frac{3}{1+(3x)^2}=\\frac{3}{1+9x^2}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Arcsin with Chain Rule",
                            statement: "Find $$\\frac{d}{dx}[\\arcsin(2x)]$$.",
                            solution: "$$\\frac{2}{\\sqrt{1-4x^2}}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Arccos",
                            statement: "Differentiate $$y=\\arccos(x^2)$$.",
                            solution: "$$g(x)=x^2,\\ g'(x)=2x$$\n$$y'=-\\frac{2x}{\\sqrt{1-x^4}}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Product Rule with Arctan",
                            statement: "Differentiate $$y=x\\arctan x$$.",
                            solution: "Product rule:\n$$y'=\\arctan x+x\\cdot\\frac{1}{1+x^2}=\\arctan x+\\frac{x}{1+x^2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Arcsin with Square Root",
                            statement: "Find $$\\frac{d}{dx}[\\arcsin(\\sqrt{x})]$$.",
                            solution: "$$g(x)=x^{1/2},\\ g'(x)=\\frac{1}{2\\sqrt{x}}$$\n$$=\\frac{1/2\\sqrt{x}}{\\sqrt{1-x}}=\\frac{1}{2\\sqrt{x(1-x)}}=\\frac{1}{2\\sqrt{x-x^2}}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Arctan Squared",
                            statement: "Differentiate $$f(x)=\\arctan^2(x)$$.",
                            solution: "Let $$u=\\arctan x$$:\n$$f'(x)=2\\arctan x\\cdot\\frac{1}{1+x^2}=\\frac{2\\arctan x}{1+x^2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Arcsec",
                            statement: "Find $$\\frac{d}{dx}[\\text{arcsec}(2x)]$$.",
                            solution: "$$\\frac{2}{|2x|\\sqrt{(2x)^2-1}}=\\frac{2}{2|x|\\sqrt{4x^2-1}}=\\frac{1}{|x|\\sqrt{4x^2-1}}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Arctan of Exponential",
                            statement: "Differentiate $$y=\\arctan(e^x)$$.",
                            solution: "$$g(x)=e^x,\\ g'(x)=e^x$$\n$$y'=\\frac{e^x}{1+e^{2x}}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Quotient with Arcsin",
                            statement: "Differentiate $$y=\\frac{\\arcsin x}{\\sqrt{1-x^2}}$$.",
                            solution: "Quotient rule: $$u=\\arcsin x,\\ v=(1-x^2)^{1/2}$$\n$$u'=\\frac{1}{\\sqrt{1-x^2}},\\quad v'=\\frac{-2x}{2\\sqrt{1-x^2}}=\\frac{-x}{\\sqrt{1-x^2}}$$\n$$y'=\\frac{\\frac{1}{\\sqrt{1-x^2}}\\cdot\\sqrt{1-x^2}-\\arcsin x\\cdot\\frac{-x}{\\sqrt{1-x^2}}}{1-x^2}$$\n$$=\\frac{1+\\frac{x\\arcsin x}{\\sqrt{1-x^2}}}{1-x^2}=\\frac{\\sqrt{1-x^2}+x\\arcsin x}{(1-x^2)^{3/2}}$$"
                        },
                        {
                            difficulty: "D",
                            title: "Derive $$\\frac{d}{dx}[\\arcsin x]$$",
                            statement: "Prove that $$\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}}$$.",
                            solution: "Let $$y=\\arcsin x$$, so $$\\sin y=x$$ with $$y\\in[-\\pi/2,\\pi/2]$$.\nDifferentiate both sides with respect to $$x$$:\n$$\\cos y\\cdot\\frac{dy}{dx}=1$$\n$$\\frac{dy}{dx}=\\frac{1}{\\cos y}$$\nSince $$y\\in[-\\pi/2,\\pi/2]$$, $$\\cos y\\geq 0$$, so $$\\cos y=\\sqrt{1-\\sin^2 y}=\\sqrt{1-x^2}$$.\n$$\\frac{dy}{dx}=\\frac{1}{\\sqrt{1-x^2}}$$ ∎"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Domain Neglect",
                            statement: "Write the derivative of $$\\arcsin x$$ and state when it is undefined.",
                            solution: "$$\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}}$$\nThis is undefined when $$1-x^2\\leq 0$$, i.e., $$|x|\\geq 1$$. At the endpoints $$x=\\pm 1$$ the derivative is $$+\\infty$$ (vertical tangent). The domain of $$\\arcsin$$ is $$[-1,1]$$, but differentiability only holds on the open interval $$(-1,1)$$."
                        }
                    ]
                }
            ]
        },
        {
            name: "Implicit Differentiation & Related Rates",
            icon: "🔗",
            description: "Differentiate implicitly defined curves and equations, compute higher-order implicit derivatives, and solve related rates problems using the chain rule.",
            lessons: [

                {
                    name: "Implicit Differentiation",
                    tags: ["Conceptual", "Computational", "50 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Differentiate equations not solved for $$y$$ with respect to $$x$$, treating $$y$$ as a function of $$x$$</li>
                                <li>Apply chain rule when differentiating terms involving $$y$$</li>
                                <li>Solve for $$\\frac{dy}{dx}$$ in terms of $$x$$ and $$y$$</li>
                                <li>Compute second-order implicit derivatives</li>
                                <li>Find equations of tangent lines to implicitly defined curves</li>
                            </ul>
                        </div>
                        <div class="definition-box">
                            <strong>Implicit vs. Explicit Functions</strong>
                            <p>An <em>explicit</em> function has the form $$y=f(x)$$. An <em>implicit</em> equation like $$x^2+y^2=25$$ defines $$y$$ implicitly as a function of $$x$$.</p>
                            <p>We assume $$y=y(x)$$ is differentiable and differentiate every term with respect to $$x$$, using the chain rule wherever $$y$$ appears.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Implicit Differentiation Strategy</strong>
                            <ol style="margin-left:1.5rem;">
                                <li>Differentiate both sides of the equation with respect to $$x$$</li>
                                <li>Apply chain rule to all $$y$$ terms: $$\\frac{d}{dx}[y^n]=ny^{n-1}\\frac{dy}{dx}$$</li>
                                <li>Apply product/quotient rules to mixed $$xy$$ terms</li>
                                <li>Collect all $$\\frac{dy}{dx}$$ terms on one side</li>
                                <li>Factor out $$\\frac{dy}{dx}$$ and solve</li>
                            </ol>
                        </div>
                        <div class="theorem-box">
                            <strong>Second-Order Implicit Derivatives</strong>
                            <p>To find $$\\frac{d^2y}{dx^2}$$, differentiate $$\\frac{dy}{dx}$$ with respect to $$x$$, substituting the expression for $$\\frac{dy}{dx}$$ where needed.</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Circle",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$x^2+y^2=25$$.",
                            solution: "Differentiate both sides:\n$$2x+2y\\frac{dy}{dx}=0$$\n$$\\frac{dy}{dx}=-\\frac{2x}{2y}=-\\frac{x}{y}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Simple Implicit",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$x^3+y^3=8$$.",
                            solution: "$$3x^2+3y^2\\frac{dy}{dx}=0$$\n$$\\frac{dy}{dx}=-\\frac{x^2}{y^2}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Linear in y",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$xy=5$$.",
                            solution: "Product rule on left: $$y+x\\frac{dy}{dx}=0$$\n$$\\frac{dy}{dx}=-\\frac{y}{x}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Ellipse",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$4x^2+9y^2=36$$ and find the slope at $$(3,0)$$.",
                            solution: "$$8x+18y\\frac{dy}{dx}=0$$\n$$\\frac{dy}{dx}=-\\frac{8x}{18y}=-\\frac{4x}{9y}$$\nAt $$(3,0)$$: denominator $$=0$$, so the tangent is vertical."
                        },
                        {
                            difficulty: "B",
                            title: "Mixed Term",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$x^2y+xy^2=6$$.",
                            solution: "Differentiate:\n$$(2xy+x^2\\frac{dy}{dx})+(y^2+2xy\\frac{dy}{dx})=0$$\n$$x^2\\frac{dy}{dx}+2xy\\frac{dy}{dx}=-2xy-y^2$$\n$$\\frac{dy}{dx}(x^2+2xy)=-(2xy+y^2)$$\n$$\\frac{dy}{dx}=-\\frac{2xy+y^2}{x^2+2xy}=-\\frac{y(2x+y)}{x(x+2y)}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Trigonometric Implicit",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$\\sin(xy)=x$$.",
                            solution: "$$\\cos(xy)\\cdot(y+x\\frac{dy}{dx})=1$$\n$$y\\cos(xy)+x\\cos(xy)\\frac{dy}{dx}=1$$\n$$\\frac{dy}{dx}=\\frac{1-y\\cos(xy)}{x\\cos(xy)}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Exponential Implicit",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$e^y=x+y$$.",
                            solution: "$$e^y\\frac{dy}{dx}=1+\\frac{dy}{dx}$$\n$$(e^y-1)\\frac{dy}{dx}=1$$\n$$\\frac{dy}{dx}=\\frac{1}{e^y-1}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Log Implicit",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$\\ln(x+y)=x^2$$.",
                            solution: "$$\\frac{1+\\frac{dy}{dx}}{x+y}=2x$$\n$$1+\\frac{dy}{dx}=2x(x+y)$$\n$$\\frac{dy}{dx}=2x(x+y)-1$$"
                        },
                        {
                            difficulty: "C",
                            title: "Tangent Line via Implicit Differentiation",
                            statement: "Find the equation of the tangent line to $$x^2+y^2-3xy=3$$ at $$(1,-1)$$.",
                            solution: "Implicit differentiation:\n$$2x+2y\\frac{dy}{dx}-3(y+x\\frac{dy}{dx})=0$$\n$$(2y-3x)\\frac{dy}{dx}=3y-2x$$\n$$\\frac{dy}{dx}=\\frac{3y-2x}{2y-3x}$$\nAt $$(1,-1)$$: $$\\frac{3(-1)-2(1)}{2(-1)-3(1)}=\\frac{-5}{-5}=1$$\nTangent line: $$y-(-1)=1(x-1)\\implies y=x-2$$"
                        },
                        {
                            difficulty: "C",
                            title: "Second-Order Implicit",
                            statement: "For $$x^2+y^2=r^2$$, find $$\\frac{d^2y}{dx^2}$$ in terms of $$x,y,r$$.",
                            solution: "First derivative: $$\\frac{dy}{dx}=-\\frac{x}{y}$$\nDifferentiate again:\n$$\\frac{d^2y}{dx^2}=-\\frac{y\\cdot 1-x\\cdot\\frac{dy}{dx}}{y^2}=-\\frac{y-x(-x/y)}{y^2}=-\\frac{y+x^2/y}{y^2}=-\\frac{y^2+x^2}{y^3}=-\\frac{r^2}{y^3}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Folium of Descartes",
                            statement: "Find $$\\frac{dy}{dx}$$ for the folium of Descartes $$x^3+y^3=6xy$$.",
                            solution: "$$3x^2+3y^2\\frac{dy}{dx}=6(y+x\\frac{dy}{dx})$$\n$$3y^2\\frac{dy}{dx}-6x\\frac{dy}{dx}=6y-3x^2$$\n$$\\frac{dy}{dx}=\\frac{6y-3x^2}{3y^2-6x}=\\frac{2y-x^2}{y^2-2x}$$"
                        },
                        {
                            difficulty: "D",
                            title: "Implicit with Two Exponentials",
                            statement: "Find $$\\frac{dy}{dx}$$ for $$e^{xy}=e^x+e^y$$.",
                            solution: "Differentiate both sides:\n$$e^{xy}(y+x\\frac{dy}{dx})=e^x+e^y\\frac{dy}{dx}$$\n$$ye^{xy}+xe^{xy}\\frac{dy}{dx}=e^x+e^y\\frac{dy}{dx}$$\n$$(xe^{xy}-e^y)\\frac{dy}{dx}=e^x-ye^{xy}$$\n$$\\frac{dy}{dx}=\\frac{e^x-ye^{xy}}{xe^{xy}-e^y}$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Forgetting Chain Rule on y Terms",
                            statement: "A student differentiates $$y^3=x$$ and writes $$3y^2=1$$. Is this correct? What does $$\\frac{dy}{dx}$$ equal?",
                            solution: "<strong>Error:</strong> The student forgot the chain rule: $$\\frac{d}{dx}[y^3]=3y^2\\cdot\\frac{dy}{dx}$$, not simply $$3y^2$$.\n<strong>Correct:</strong> $$3y^2\\frac{dy}{dx}=1\\implies\\frac{dy}{dx}=\\frac{1}{3y^2}$$\n<em>Check:</em> Since $$y=x^{1/3}$$, explicit differentiation gives $$\\frac{dy}{dx}=\\frac{1}{3}x^{-2/3}=\\frac{1}{3y^2}$$ ✓"
                        }
                    ]
                },

                {
                    name: "Related Rates",
                    tags: ["Applied", "Word Problems", "55 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Identify related quantities and set up equations relating them</li>
                                <li>Differentiate equations with respect to time $$t$$</li>
                                <li>Solve for the unknown rate given other rates</li>
                                <li>Interpret solutions in context</li>
                            </ul>
                        </div>
                        <div class="definition-box">
                            <strong>Related Rates Problem Framework</strong>
                            <ol style="margin-left:1.5rem;">
                                <li><strong>Read</strong> carefully; identify all varying quantities and given rates</li>
                                <li><strong>Draw</strong> a diagram (if geometric)</li>
                                <li><strong>Label</strong> all variables with appropriate units</li>
                                <li><strong>Write</strong> an equation relating the variables (geometric formula, Pythagorean theorem, similar triangles, etc.)</li>
                                <li><strong>Differentiate</strong> both sides with respect to $$t$$</li>
                                <li><strong>Substitute</strong> known values and rates at the specific instant</li>
                                <li><strong>Solve</strong> for the unknown rate</li>
                                <li><strong>Interpret</strong> — state units and sign</li>
                            </ol>
                        </div>
                        <div class="theorem-box">
                            <strong>Common Geometric Formulas Used in Related Rates</strong>
                            <p>Circle: $$A=\\pi r^2,\\ C=2\\pi r$$</p>
                            <p>Sphere: $$V=\\frac{4}{3}\\pi r^3,\\ S=4\\pi r^2$$</p>
                            <p>Cylinder: $$V=\\pi r^2 h$$</p>
                            <p>Cone: $$V=\\frac{1}{3}\\pi r^2 h$$</p>
                            <p>Pythagorean theorem: $$x^2+y^2=z^2$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Expanding Circle",
                            statement: "The radius of a circle is increasing at $$3$$ cm/s. How fast is the area increasing when the radius is $$5$$ cm?",
                            solution: "$$A=\\pi r^2$$\n$$\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}$$\nGiven $$\\frac{dr}{dt}=3,\\ r=5$$:\n$$\\frac{dA}{dt}=2\\pi(5)(3)=30\\pi\\approx 94.25\\text{ cm}^2/\\text{s}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Inflating Sphere",
                            statement: "Air is pumped into a spherical balloon at $$100$$ cm³/s. How fast is the radius increasing when the radius is $$5$$ cm?",
                            solution: "$$V=\\frac{4}{3}\\pi r^3$$\n$$\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}$$\nGiven $$\\frac{dV}{dt}=100,\\ r=5$$:\n$$100=4\\pi(25)\\frac{dr}{dt}$$\n$$\\frac{dr}{dt}=\\frac{100}{100\\pi}=\\frac{1}{\\pi}\\approx 0.318\\text{ cm/s}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Sliding Ladder",
                            statement: "A 10 m ladder leans against a vertical wall. The bottom slides away from the wall at $$2$$ m/s. How fast is the top sliding down when the bottom is $$6$$ m from the wall?",
                            solution: "$$x^2+y^2=100$$\n$$2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0$$\nWhen $$x=6$$: $$y=\\sqrt{100-36}=8$$\n$$2(6)(2)+2(8)\\frac{dy}{dt}=0$$\n$$24+16\\frac{dy}{dt}=0$$\n$$\\frac{dy}{dt}=-\\frac{3}{2}=-1.5\\text{ m/s}$$\nThe top slides down at 1.5 m/s."
                        },
                        {
                            difficulty: "B",
                            title: "Draining Cone",
                            statement: "Water drains from a conical tank (vertex down) with height 12 m and radius 4 m at $$2$$ m³/min. How fast does the water level drop when depth is $$6$$ m?",
                            solution: "By similar triangles, $$\\frac{r}{h}=\\frac{4}{12}=\\frac{1}{3}$$, so $$r=h/3$$.\n$$V=\\frac{1}{3}\\pi r^2 h=\\frac{1}{3}\\pi\\left(\\frac{h}{3}\\right)^2 h=\\frac{\\pi h^3}{27}$$\n$$\\frac{dV}{dt}=\\frac{\\pi h^2}{9}\\frac{dh}{dt}$$\nGiven $$\\frac{dV}{dt}=-2,\\ h=6$$:\n$$-2=\\frac{\\pi(36)}{9}\\frac{dh}{dt}=4\\pi\\frac{dh}{dt}$$\n$$\\frac{dh}{dt}=-\\frac{1}{2\\pi}\\approx -0.159\\text{ m/min}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Shadow Length",
                            statement: "A street light is 9 m tall. A person 1.8 m tall walks away from the light at 2 m/s. How fast is the shadow growing when the person is 12 m from the light?",
                            solution: "Let $$x$$ = distance from light to person, $$s$$ = length of shadow.\nSimilar triangles: $$\\frac{9}{x+s}=\\frac{1.8}{s}$$\n$$9s=1.8(x+s)$$\n$$9s-1.8s=1.8x$$\n$$7.2s=1.8x\\implies s=\\frac{x}{4}$$\n$$\\frac{ds}{dt}=\\frac{1}{4}\\frac{dx}{dt}=\\frac{1}{4}(2)=0.5\\text{ m/s}$$\n(Constant — independent of position!)"
                        },
                        {
                            difficulty: "C",
                            title: "Angle of Elevation",
                            statement: "A rocket ascends vertically from a tracking station 5 km away. At the moment the rocket is 12 km high, its speed is 300 km/min. How fast is the angle of elevation $$\\theta$$ changing?",
                            solution: "$$\\tan\\theta=\\frac{h}{5}$$\n$$\\sec^2\\theta\\cdot\\frac{d\\theta}{dt}=\\frac{1}{5}\\frac{dh}{dt}$$\nWhen $$h=12$$: distance $$=\\sqrt{25+144}=13$$, so $$\\sec\\theta=\\frac{13}{5}$$, $$\\sec^2\\theta=\\frac{169}{25}$$.\n$$\\frac{169}{25}\\frac{d\\theta}{dt}=\\frac{300}{5}=60$$\n$$\\frac{d\\theta}{dt}=\\frac{60\\cdot 25}{169}=\\frac{1500}{169}\\approx 8.876\\text{ rad/min}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Boat Approaching Dock",
                            statement: "A boat moves toward a dock at 4 m/s. A rope runs from the boat's bow to a pulley 3 m above the dock, then down to a winch. How fast is the rope being pulled in when the boat is 4 m from the dock?",
                            solution: "Let $$x$$ = horizontal distance from boat to dock, $$L$$ = rope length from bow to pulley.\n$$L^2=x^2+9$$\n$$2L\\frac{dL}{dt}=2x\\frac{dx}{dt}$$\n$$\\frac{dL}{dt}=\\frac{x}{L}\\frac{dx}{dt}$$\nWhen $$x=4$$: $$L=\\sqrt{16+9}=5$$\n$$\\frac{dL}{dt}=\\frac{4}{5}(-4)=-\\frac{16}{5}=-3.2\\text{ m/s}$$\nRope is pulled in at 3.2 m/s."
                        },
                        {
                            difficulty: "D",
                            title: "Two-Rate Problem",
                            statement: "Two ships leave a port simultaneously. Ship A goes north at 20 km/h, Ship B goes east at 15 km/h. How fast is the distance between them increasing after 2 hours?",
                            solution: "After time $$t$$: Ship A is $$20t$$ km north, Ship B is $$15t$$ km east.\n$$D^2=(20t)^2+(15t)^2=400t^2+225t^2=625t^2$$\n$$D=25t$$\n$$\\frac{dD}{dt}=25\\text{ km/h}$$\n<em>Note:</em> Because both paths are straight lines from origin, the rate is constant = 25 km/h."
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Substituting Before Differentiating",
                            statement: "A student solving the expanding circle problem ($$r$$ increasing at 3 cm/s, find $$dA/dt$$ when $$r=5$$) first substitutes $$r=5$$ into $$A=\\pi r^2$$ getting $$A=25\\pi$$, then differentiates to get $$dA/dt=0$$. Identify the error.",
                            solution: "<strong>Error:</strong> Once a constant value is substituted (e.g. $$r=5$$), the result is a number ($$25\\pi$$) — not a function of $$t$$. Differentiating a constant gives zero.\n<strong>Rule:</strong> Always differentiate the general equation with respect to $$t$$ FIRST, then substitute the given values at the specific instant.\n<strong>Correct:</strong> $$\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}$$, then substitute to get $$2\\pi(5)(3)=30\\pi$$ cm²/s."
                        }
                    ]
                }
            ]
        },
        {
            name: "L'Hôpital's Rule",
            icon: "⚡",
            description: "Evaluate limits involving indeterminate forms by systematically applying L'Hôpital's Rule, including repeated application and non-obvious algebraic transformations.",
            lessons: [

                {
                    name: "L'Hôpital's Rule — Indeterminate Forms 0/0 and ∞/∞",
                    tags: ["Limit Theory", "Conceptual", "45 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>State L'Hôpital's Rule precisely and identify its conditions</li>
                                <li>Evaluate $$0/0$$ and $$\\infty/\\infty$$ limits</li>
                                <li>Apply L'Hôpital's Rule repeatedly when necessary</li>
                                <li>Recognize when NOT to apply L'Hôpital's Rule</li>
                            </ul>
                        </div>
                        <div class="theorem-box">
                            <strong>L'Hôpital's Rule</strong>
                            <p>Suppose $$f$$ and $$g$$ are differentiable near $$a$$ (except possibly at $$a$$), $$g'(x)\\neq 0$$ near $$a$$, and the limit $$\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{g(x)}$$ is of the indeterminate form $$\\frac{0}{0}$$ or $$\\frac{\\pm\\infty}{\\pm\\infty}$$.</p>
                            <p>Then: $$\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$, provided the latter limit exists (or equals $$\\pm\\infty$$).</p>
                            <p>The rule also applies for one-sided limits and as $$x\\to\\pm\\infty$$.</p>
                        </div>
                        <div class="definition-box">
                            <strong>Verification Checklist Before Applying L'Hôpital</strong>
                            <ol style="margin-left:1.5rem;">
                                <li>Confirm the form is $$0/0$$ or $$\\infty/\\infty$$ (not something else!)</li>
                                <li>Differentiate numerator and denominator separately (NOT quotient rule)</li>
                                <li>Re-check the form of the new limit</li>
                                <li>Repeat if still indeterminate</li>
                                <li>Stop when the limit is determinate</li>
                            </ol>
                        </div>
                        <div class="definition-box">
                            <strong>Other Indeterminate Forms — Transformation to $$0/0$$ or $$\\infty/\\infty$$</strong>
                            <p>$$0\\cdot\\infty$$: Write as $$\\frac{0}{1/\\infty}=\\frac{0}{0}$$ or $$\\frac{\\infty}{1/0}=\\frac{\\infty}{\\infty}$$</p>
                            <p>$$\\infty-\\infty$$: Combine fractions or factor to get $$0/0$$</p>
                            <p>$$1^\\infty,\\ 0^0,\\ \\infty^0$$: Take logarithm to convert to $$0\\cdot\\infty$$ then to $$0/0$$</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Basic 0/0 Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}$$.",
                            solution: "Form: $$0/0$$. Apply L'Hôpital:\n$$\\lim_{x\\to 0}\\frac{\\cos x}{1}=\\cos 0=1$$"
                        },
                        {
                            difficulty: "A",
                            title: "Polynomial 0/0",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 2}\\frac{x^2-4}{x-2}$$.",
                            solution: "Form: $$0/0$$. (Could factor, but using L'Hôpital:)\n$$\\lim_{x\\to 2}\\frac{2x}{1}=4$$\n<em>Note:</em> Factoring gives $$\\lim_{x\\to 2}(x+2)=4$$ ✓"
                        },
                        {
                            difficulty: "A",
                            title: "Infinity over Infinity",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2+1}{5x^2-2}$$.",
                            solution: "Form: $$\\infty/\\infty$$. Apply L'Hôpital:\n$$\\lim_{x\\to\\infty}\\frac{6x}{10x}=\\frac{6}{10}=\\frac{3}{5}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Exponential vs Polynomial",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{e^x}{x^2}$$.",
                            solution: "Form: $$\\infty/\\infty$$.\n1st application: $$\\lim_{x\\to\\infty}\\frac{e^x}{2x}$$ — still $$\\infty/\\infty$$.\n2nd application: $$\\lim_{x\\to\\infty}\\frac{e^x}{2}=+\\infty$$"
                        },
                        {
                            difficulty: "B",
                            title: "Trig Limit",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$$.",
                            solution: "Form: $$0/0$$.\n1st application: $$\\lim_{x\\to 0}\\frac{\\sin x}{2x}$$ — still $$0/0$$.\n2nd application: $$\\lim_{x\\to 0}\\frac{\\cos x}{2}=\\frac{1}{2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "ln vs Polynomial",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{x}$$.",
                            solution: "Form: $$\\infty/\\infty$$.\n$$\\lim_{x\\to\\infty}\\frac{1/x}{1}=\\lim_{x\\to\\infty}\\frac{1}{x}=0$$"
                        },
                        {
                            difficulty: "B",
                            title: "0·∞ Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0^+} x\\ln x$$.",
                            solution: "Form: $$0\\cdot(-\\infty)$$. Rewrite as:\n$$\\lim_{x\\to 0^+}\\frac{\\ln x}{1/x}\\quad(\\text{form }\\frac{-\\infty}{+\\infty})$$\nL'Hôpital: $$\\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2}=\\lim_{x\\to 0^+}(-x)=0$$"
                        },
                        {
                            difficulty: "B",
                            title: "Polynomial Exponential",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{x^3}{e^x}$$.",
                            solution: "Apply L'Hôpital three times (all $$\\infty/\\infty$$):\n$$\\frac{x^3}{e^x}\\to\\frac{3x^2}{e^x}\\to\\frac{6x}{e^x}\\to\\frac{6}{e^x}\\to 0$$"
                        },
                        {
                            difficulty: "C",
                            title: "$$1^\\infty$$ Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0}(1+x)^{1/x}$$.",
                            solution: "Form $$1^\\infty$$. Let $$L=\\lim(1+x)^{1/x}$$, so $$\\ln L=\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}$$.\nForm $$0/0$$: $$\\lim_{x\\to 0}\\frac{1/(1+x)}{1}=1$$\nSo $$\\ln L=1\\implies L=e$$"
                        },
                        {
                            difficulty: "C",
                            title: "$$0^0$$ Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0^+} x^x$$.",
                            solution: "Form $$0^0$$. Let $$L=\\lim x^x$$, so $$\\ln L=\\lim_{x\\to 0^+} x\\ln x=0$$ (from previous problem).\nSo $$L=e^0=1$$"
                        },
                        {
                            difficulty: "C",
                            title: "$$\\infty-\\infty$$ Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to 0}\\left(\\frac{1}{\\sin x}-\\frac{1}{x}\\right)$$.",
                            solution: "Form $$\\infty-\\infty$$. Combine:\n$$\\lim_{x\\to 0}\\frac{x-\\sin x}{x\\sin x}\\quad(\\text{form }0/0)$$\nL'Hôpital: $$\\lim_{x\\to 0}\\frac{1-\\cos x}{\\sin x+x\\cos x}\\quad(\\text{still }0/0)$$\nL'Hôpital again: $$\\lim_{x\\to 0}\\frac{\\sin x}{\\cos x+\\cos x-x\\sin x}=\\frac{0}{2}=0$$"
                        },
                        {
                            difficulty: "C",
                            title: "$$\\infty^0$$ Form",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty} x^{1/x}$$.",
                            solution: "Form $$\\infty^0$$. Let $$L=\\lim x^{1/x}$$, so $$\\ln L=\\lim_{x\\to\\infty}\\frac{\\ln x}{x}=0$$ (from earlier).\nSo $$L=e^0=1$$"
                        },
                        {
                            difficulty: "D",
                            title: "Cyclical L'Hôpital",
                            statement: "Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{e^x-e^{-x}}{e^x+e^{-x}}$$ without L'Hôpital and confirm the result with L'Hôpital.",
                            solution: "<strong>Without L'Hôpital:</strong> Divide numerator and denominator by $$e^x$$:\n$$\\frac{1-e^{-2x}}{1+e^{-2x}}\\to\\frac{1-0}{1+0}=1$$\n<strong>With L'Hôpital</strong> (form $$\\infty/\\infty$$):\n$$\\lim\\frac{e^x+e^{-x}}{e^x-e^{-x}}$$ — another $$\\infty/\\infty$$ form. Applying again returns to the original form, cycling indefinitely.\n<strong>Lesson:</strong> L'Hôpital can cycle; when it does, try an algebraic approach instead."
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Applying L'Hôpital to Non-Indeterminate Form",
                            statement: "A student evaluates $$\\lim_{x\\to 1}\\frac{x^2+3}{x+1}$$ using L'Hôpital and gets $$\\lim_{x\\to 1}\\frac{2x}{1}=2$$. Is this correct?",
                            solution: "<strong>Error:</strong> The original limit at $$x=1$$ is $$\\frac{1+3}{1+1}=\\frac{4}{2}=2$$. Coincidentally the student got the right answer, but the method is WRONG.\nL'Hôpital only applies when the limit is of indeterminate form ($$0/0$$ or $$\\infty/\\infty$$). This limit is $$4/2$$ — perfectly determinate by direct substitution. Applying L'Hôpital here is invalid and will generally give wrong answers."
                        }
                    ]
                }
            ]
        },
        {
            name: "Partial Differentiation",
            icon: "🔬",
            description: "Extend differentiation to functions of multiple variables, compute first and higher-order partial derivatives, verify Clairaut's theorem on mixed partials, and apply to optimization.",
            lessons: [

                {
                    name: "First-Order Partial Derivatives",
                    tags: ["Multivariable", "Computational", "50 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Define partial derivatives geometrically and computationally</li>
                                <li>Compute $$\\partial f/\\partial x$$ and $$\\partial f/\\partial y$$ for polynomials, exponentials, logarithms, and trig functions</li>
                                <li>Use alternative notation: $$f_x,\\ f_y,\\ D_x f$$</li>
                                <li>Interpret partial derivatives as slopes of cross-sections</li>
                            </ul>
                        </div>
                        <div class="definition-box">
                            <strong>Definition of Partial Derivative</strong>
                            <p>For $$z=f(x,y)$$:</p>
                            <p>$$\\frac{\\partial f}{\\partial x} = f_x = \\lim_{h\\to 0}\\frac{f(x+h,y)-f(x,y)}{h}$$</p>
                            <p>$$\\frac{\\partial f}{\\partial y} = f_y = \\lim_{h\\to 0}\\frac{f(x,y+h)-f(x,y)}{h}$$</p>
                            <p><em>In practice:</em> To find $$f_x$$, differentiate with respect to $$x$$ treating $$y$$ as a constant. To find $$f_y$$, treat $$x$$ as a constant.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Geometric Interpretation</strong>
                            <p>$$f_x(a,b)$$ is the slope of the tangent line to the curve of intersection of the surface $$z=f(x,y)$$ with the plane $$y=b$$, at the point $$(a,b,f(a,b))$$.</p>
                        </div>
                        <div class="definition-box">
                            <strong>All Standard Differentiation Rules Apply</strong>
                            <p>Product rule, quotient rule, and chain rule all apply when computing partial derivatives — the only difference is that the other variable is treated as a constant parameter.</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "Polynomial $$f_x$$",
                            statement: "Find $$f_x$$ and $$f_y$$ for $$f(x,y)=3x^2+2xy+y^3$$.",
                            solution: "$$f_x=6x+2y$$ (treat $$y$$ as constant)\n$$f_y=2x+3y^2$$ (treat $$x$$ as constant)"
                        },
                        {
                            difficulty: "A",
                            title: "Product of Variables",
                            statement: "Find $$\\frac{\\partial}{{\\partial x}}[x^2 y^3]$$.",
                            solution: "Treat $$y^3$$ as constant:\n$$\\frac{\\partial}{{\\partial x}}[x^2 y^3]=2xy^3$$"
                        },
                        {
                            difficulty: "A",
                            title: "Constant in Partial",
                            statement: "Find $$f_y$$ for $$f(x,y)=x^4-6x^2y^2+y^4$$.",
                            solution: "$$f_y=-12x^2y+4y^3$$"
                        },
                        {
                            difficulty: "A",
                            title: "Exponential Partial",
                            statement: "Find $$\\frac{\\partial}{\\partial x}[e^{xy}]$$.",
                            solution: "Treat $$y$$ as constant; chain rule with $$g=xy,\\ \\partial g/\\partial x=y$$:\n$$\\frac{\\partial}{{\\partial x}}[e^{xy}]=ye^{xy}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Ln Partial",
                            statement: "Find $$f_x$$ and $$f_y$$ for $$f(x,y)=\\ln(x^2+y^2)$$.",
                            solution: "$$f_x=\\frac{2x}{x^2+y^2},\\quad f_y=\\frac{2y}{x^2+y^2}$$"
                        },
                        {
                            difficulty: "A",
                            title: "Trig Partial",
                            statement: "Find $$\\frac{\\partial}{\\partial y}[\\sin(x^2 y)]$$.",
                            solution: "$$=\\cos(x^2 y)\\cdot x^2=x^2\\cos(x^2 y)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Quotient Partial",
                            statement: "Find $$f_x$$ for $$f(x,y)=\\frac{x}{x^2+y^2}$$.",
                            solution: "Quotient rule ($$y$$ constant):\n$$f_x=\\frac{(x^2+y^2)-x(2x)}{(x^2+y^2)^2}=\\frac{y^2-x^2}{(x^2+y^2)^2}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Three-Variable Function",
                            statement: "Find $$f_x,\\ f_y,\\ f_z$$ for $$f(x,y,z)=x^2yz^3+2y^2z$$.",
                            solution: "$$f_x=2xyz^3$$\n$$f_y=x^2z^3+4yz$$\n$$f_z=3x^2yz^2+2y^2$$"
                        },
                        {
                            difficulty: "B",
                            title: "Partial at a Point",
                            statement: "Find $$f_x(1,2)$$ and $$f_y(1,2)$$ for $$f(x,y)=x^2e^y$$.",
                            solution: "$$f_x=2xe^y\\implies f_x(1,2)=2(1)e^2=2e^2$$\n$$f_y=x^2e^y\\implies f_y(1,2)=(1)^2e^2=e^2$$"
                        },
                        {
                            difficulty: "B",
                            title: "Mixed Exponential-Trig",
                            statement: "Find $$f_x$$ and $$f_y$$ for $$f(x,y)=e^x\\sin(xy)$$.",
                            solution: "$$f_x=e^x\\sin(xy)+e^x\\cos(xy)\\cdot y=e^x[\\sin(xy)+y\\cos(xy)]$$\n$$f_y=e^x\\cos(xy)\\cdot x=xe^x\\cos(xy)$$"
                        },
                        {
                            difficulty: "C",
                            title: "Implicit Partial",
                            statement: "If $$x^2+y^2+z^2=1$$ defines $$z=z(x,y)$$, find $$\\frac{\\partial z}{\\partial x}$$.",
                            solution: "Differentiate implicitly with respect to $$x$$ (treating $$y$$ as constant):\n$$2x+0+2z\\frac{\\partial z}{\\partial x}=0$$\n$$\\frac{\\partial z}{\\partial x}=-\\frac{x}{z}$$"
                        },
                        {
                            difficulty: "C",
                            title: "Partial Differential Equation Check",
                            statement: "Show that $$f(x,y)=e^x\\cos y$$ satisfies Laplace's equation $$f_{xx}+f_{yy}=0$$.",
                            solution: "$$f_x=e^x\\cos y,\\quad f_{xx}=e^x\\cos y$$\n$$f_y=-e^x\\sin y,\\quad f_{yy}=-e^x\\cos y$$\n$$f_{xx}+f_{yy}=e^x\\cos y-e^x\\cos y=0$$ ✓"
                        },
                        {
                            difficulty: "D",
                            title: "Partial Derivative from Definition",
                            statement: "Using the limit definition, compute $$f_x$$ for $$f(x,y)=xy^2$$.",
                            solution: "$$f_x=\\lim_{h\\to 0}\\frac{f(x+h,y)-f(x,y)}{h}=\\lim_{h\\to 0}\\frac{(x+h)y^2-xy^2}{h}$$\n$$=\\lim_{h\\to 0}\\frac{hy^2}{h}=\\lim_{h\\to 0}y^2=y^2$$"
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Partial of a Constant-Looking Term",
                            statement: "Find $$\\frac{\\partial}{\\partial x}[y^3]$$. A student writes $$3y^2$$. Is this correct?",
                            solution: "<strong>Error:</strong> When differentiating with respect to $$x$$, $$y$$ is treated as a constant. The derivative of any constant with respect to $$x$$ is zero.\n<strong>Correct:</strong> $$\\frac{\\partial}{\\partial x}[y^3]=0$$"
                        }
                    ]
                },

                {
                    name: "Higher-Order and Mixed Partial Derivatives",
                    tags: ["Advanced", "Proof", "55 Minutes"],
                    content: `
                        <div class="learning-objectives">
                            <strong>Learning Objectives</strong>
                            <ul style="margin-left:1.5rem;">
                                <li>Compute second-order partial derivatives $$f_{xx},\\ f_{yy},\\ f_{xy},\\ f_{yx}$$</li>
                                <li>State and apply Clairaut's Theorem on equality of mixed partials</li>
                                <li>Compute third-order and higher partial derivatives</li>
                                <li>Verify functions satisfy common partial differential equations</li>
                                <li>Apply the second partial derivative test for optimization</li>
                            </ul>
                        </div>
                        <div class="theorem-box">
                            <strong>Second-Order Partial Derivatives — Notation</strong>
                            <p>$$f_{xx}=\\frac{\\partial^2 f}{\\partial x^2}=\\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial x}\\right)$$</p>
                            <p>$$f_{xy}=\\frac{\\partial^2 f}{\\partial y\\,\\partial x}=\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right)$$</p>
                            <p>$$f_{yx}=\\frac{\\partial^2 f}{\\partial x\\,\\partial y}=\\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial y}\\right)$$</p>
                            <p><em>Warning on notation:</em> $$f_{xy}$$ means differentiate first with respect to $$x$$, then $$y$$. In Leibniz notation, the ORDER is read right-to-left.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Clairaut's Theorem (Symmetry of Mixed Partials)</strong>
                            <p>If $$f_{xy}$$ and $$f_{yx}$$ are both continuous on a disk containing $$(a,b)$$, then:</p>
                            <p>$$f_{xy}(a,b)=f_{yx}(a,b)$$</p>
                            <p>This holds for almost all functions encountered in standard calculus.</p>
                        </div>
                        <div class="theorem-box">
                            <strong>Second Partial Derivative Test for Local Extrema</strong>
                            <p>Let $$(a,b)$$ be a critical point (where $$f_x=f_y=0$$). Define the discriminant:</p>
                            <p>$$D=f_{xx}(a,b)f_{yy}(a,b)-[f_{xy}(a,b)]^2$$</p>
                            <p>- If $$D>0$$ and $$f_{xx}(a,b)>0$$: local minimum</p>
                            <p>- If $$D>0$$ and $$f_{xx}(a,b)<0$$: local maximum</p>
                            <p>- If $$D<0$$: saddle point</p>
                            <p>- If $$D=0$$: test inconclusive</p>
                        </div>
                    `,
                    problems: [
                        {
                            difficulty: "A",
                            title: "All Four Second-Order Partials",
                            statement: "Find $$f_{xx},\\ f_{yy},\\ f_{xy},\\ f_{yx}$$ for $$f(x,y)=x^3y^2$$.",
                            solution: "$$f_x=3x^2y^2,\\quad f_y=2x^3y$$\n$$f_{xx}=6xy^2$$\n$$f_{yy}=2x^3$$\n$$f_{xy}=\\frac{\\partial}{\\partial y}[3x^2y^2]=6x^2y$$\n$$f_{yx}=\\frac{\\partial}{\\partial x}[2x^3y]=6x^2y$$\n<em>Note:</em> $$f_{xy}=f_{yx}$$ ✓ (Clairaut's Theorem)"
                        },
                        {
                            difficulty: "A",
                            title: "Second Partials of Polynomial",
                            statement: "Find all second-order partial derivatives of $$f(x,y)=x^2+3xy+y^2$$.",
                            solution: "$$f_x=2x+3y,\\quad f_y=3x+2y$$\n$$f_{xx}=2,\\quad f_{yy}=2,\\quad f_{xy}=3,\\quad f_{yx}=3$$"
                        },
                        {
                            difficulty: "B",
                            title: "Second Partials of Exponential",
                            statement: "Find $$f_{xx}$$ and $$f_{xy}$$ for $$f(x,y)=e^{2x+3y}$$.",
                            solution: "$$f_x=2e^{2x+3y}$$\n$$f_{xx}=4e^{2x+3y}$$\n$$f_{xy}=\\frac{\\partial}{\\partial y}[2e^{2x+3y}]=6e^{2x+3y}$$"
                        },
                        {
                            difficulty: "B",
                            title: "Second Partials of $$\\ln$$",
                            statement: "Find all second-order partials of $$f(x,y)=\\ln(xy)$$.",
                            solution: "$$f=\\ln x+\\ln y$$\n$$f_x=\\frac{1}{x},\\quad f_y=\\frac{1}{y}$$\n$$f_{xx}=-\\frac{1}{x^2},\\quad f_{yy}=-\\frac{1}{y^2},\\quad f_{xy}=0,\\quad f_{yx}=0$$"
                        },
                        {
                            difficulty: "B",
                            title: "Mixed Partial of Sin",
                            statement: "Find $$f_{xy}$$ for $$f(x,y)=\\sin(x^2y)$$.",
                            solution: "$$f_x=2xy\\cos(x^2y)$$\n$$f_{xy}=\\frac{\\partial}{\\partial y}[2xy\\cos(x^2y)]=2x\\cos(x^2y)+2xy(-\\sin(x^2y))\\cdot x^2$$\n$$=2x\\cos(x^2y)-2x^3y\\sin(x^2y)$$"
                        },
                        {
                            difficulty: "B",
                            title: "Verify Clairaut's Theorem",
                            statement: "For $$f(x,y)=x^2y^3+\\sin(xy)$$, verify $$f_{xy}=f_{yx}$$.",
                            solution: "$$f_x=2xy^3+y\\cos(xy)$$\n$$f_{xy}=6xy^2+\\cos(xy)-xy\\sin(xy)$$\n\n$$f_y=3x^2y^2+x\\cos(xy)$$\n$$f_{yx}=6xy^2+\\cos(xy)-xy\\sin(xy)$$\n\n$$f_{xy}=f_{yx}$$ ✓"
                        },
                        {
                            difficulty: "C",
                            title: "Third-Order Partial",
                            statement: "Find $$f_{xxy}$$ for $$f(x,y)=x^4y^2+3x^2y$$.",
                            solution: "$$f_x=4x^3y^2+6xy$$\n$$f_{xx}=12x^2y^2+6y$$\n$$f_{xxy}=\\frac{\\partial}{\\partial y}[12x^2y^2+6y]=24x^2y+6$$"
                        },
                        {
                            difficulty: "C",
                            title: "Second Partial Test — Find Extrema",
                            statement: "Find and classify all critical points of $$f(x,y)=x^3-3x+y^2-4y$$.",
                            solution: "$$f_x=3x^2-3=0\\implies x=\\pm 1$$\n$$f_y=2y-4=0\\implies y=2$$\nCritical points: $$(1,2)$$ and $$(-1,2)$$.\n\n$$f_{xx}=6x,\\quad f_{yy}=2,\\quad f_{xy}=0,\\quad D=f_{xx}f_{yy}-f_{xy}^2=12x$$\n\nAt $$(1,2)$$: $$D=12>0,\\ f_{xx}=6>0$$ → <strong>Local minimum</strong>, $$f(1,2)=-1-3+4-8=-8$$.\nAt $$(-1,2)$$: $$D=-12<0$$ → <strong>Saddle point</strong>."
                        },
                        {
                            difficulty: "C",
                            title: "Heat Equation",
                            statement: "Show that $$u(x,t)=e^{-kt}\\sin(x)$$ satisfies the heat equation $$u_t=ku_{xx}$$.",
                            solution: "$$u_t=-ke^{-kt}\\sin x$$\n$$u_x=e^{-kt}\\cos x$$\n$$u_{xx}=-e^{-kt}\\sin x$$\n$$ku_{xx}=-ke^{-kt}\\sin x=u_t$$ ✓"
                        },
                        {
                            difficulty: "C",
                            title: "Wave Equation",
                            statement: "Verify $$u(x,t)=\\sin(x-ct)$$ satisfies the wave equation $$u_{tt}=c^2 u_{xx}$$.",
                            solution: "$$u_t=-c\\cos(x-ct),\\quad u_{tt}=-c^2\\sin(x-ct)$$\n$$u_x=\\cos(x-ct),\\quad u_{xx}=-\\sin(x-ct)$$\n$$c^2 u_{xx}=-c^2\\sin(x-ct)=u_{tt}$$ ✓"
                        },
                        {
                            difficulty: "D",
                            title: "Prove Clairaut's Theorem (Sketch)",
                            statement: "State the conditions required for Clairaut's Theorem and explain (conceptually) why continuity of $$f_{xy}$$ is needed.",
                            solution: "Clairaut's Theorem states that if $$f_{xy}$$ and $$f_{yx}$$ are both <em>continuous</em> on an open disk containing $$(a,b)$$, then $$f_{xy}(a,b)=f_{yx}(a,b)$$.\n\n<strong>Why continuity is needed:</strong> The theorem is proved using the Mean Value Theorem applied twice. Without continuity of the mixed partials, the limit argument used to equate them breaks down. A counterexample is:\n$$f(x,y)=\\begin{cases}\\frac{xy(x^2-y^2)}{x^2+y^2}&(x,y)\\neq(0,0)\\\\0&(x,y)=(0,0)\\end{cases}$$\nFor this function, $$f_{xy}(0,0)=1\\neq -1=f_{yx}(0,0)$$, because the mixed partials are not continuous at the origin."
                        },
                        {
                            difficulty: "D",
                            title: "Optimization Application",
                            statement: "A manufacturer produces two products. Revenue is $$R(x,y)=-x^2-2y^2+2xy+4x+6y$$. Find the production levels $$x,y$$ that maximize revenue.",
                            solution: "$$R_x=-2x+2y+4=0\\implies -x+y+2=0 \\quad(1)$$\n$$R_y=-4y+2x+6=0\\implies 2x-4y+6=0\\implies x-2y+3=0 \\quad(2)$$\nFrom (1): $$y=x-2$$. Substitute into (2): $$x-2(x-2)+3=0\\implies -x+7=0\\implies x=7$$, $$y=5$$.\n\n$$R_{xx}=-2,\\quad R_{yy}=-4,\\quad R_{xy}=2$$\n$$D=(-2)(-4)-4=8-4=4>0,\\quad R_{xx}<0\\implies$$ <strong>Local (global) maximum</strong>.\nMax revenue at $$x=7,\\ y=5$$: $$R(7,5)=-49-50+70+28+30=29$$."
                        },
                        {
                            difficulty: "E",
                            title: "Trap: Order of Differentiation in Leibniz Notation",
                            statement: "A student computes $$\\frac{\\partial^2 f}{\\partial y\\,\\partial x}$$ by first differentiating with respect to $$y$$, then $$x$$. Is this consistent with the subscript notation $$f_{xy}$$?",
                            solution: "<strong>This is a notation trap:</strong>\n- In <em>subscript notation</em>: $$f_{xy}$$ means differentiate first w.r.t. $$x$$, then w.r.t. $$y$$ (read left-to-right).\n- In <em>Leibniz notation</em>: $$\\frac{\\partial^2 f}{\\partial y\\,\\partial x}$$ means differentiate first w.r.t. $$x$$, then w.r.t. $$y$$ (read right-to-left, like function composition).\nSo $$f_{xy}=\\frac{\\partial^2 f}{\\partial y\\,\\partial x}$$ — they ARE consistent, but the reading direction differs between the two notations. Many students confuse this."        
                        }
                    ]
                }
            ]
        },
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
            },
            {
                points: 3,
                question: "<p><strong>Q1.</strong> Use the limit definition to find $$f'(x)$$ for $$f(x) = 2x^2 - x$$.</p>",
                answer: "$$f'(x) = \\lim_{h\\to 0}\\frac{2(x+h)^2-(x+h)-(2x^2-x)}{h} = \\lim_{h\\to 0}\\frac{4xh+2h^2-h}{h} = \\lim_{h\\to 0}(4x+2h-1) = 4x-1$$."
            },
            {
                points: 3,
                question: "<p><strong>Q2.</strong> Compute the average rate of change of $$g(x) = x^3 + 2$$ on $$[1, 3]$$ and the instantaneous rate at $$x = 2$$.</p>",
                answer: "AROC $$= \\frac{(27+2)-(1+2)}{2} = \\frac{26}{2} = 13$$. IROC: $$g'(x) = 3x^2$$, $$g'(2) = 12$$."
            },
            {
                points: 4,
                question: "<p><strong>Q3.</strong> Find the equation of the tangent line to $$f(x) = \\sqrt{x+5}$$ at $$x = 4$$.</p>",
                answer: "$$f(4) = 3$$. $$f'(x) = \\frac{1}{2\\sqrt{x+5}}$$, $$f'(4) = \\frac{1}{6}$$. Tangent: $$y-3 = \\frac{1}{6}(x-4) \\implies y = \\frac{1}{6}x+\\frac{7}{3}$$."
            },
            {
                points: 4,
                question: "<p><strong>Q4.</strong> Find all tangent lines to $$y = x^2$$ that pass through $$(0, -4)$$.</p>",
                answer: "Tangent at $$(a, a^2)$$: $$y = 2ax-a^2$$. Through $$(0,-4)$$: $$-4 = -a^2 \\implies a = \\pm 2$$. Lines: $$y = 4x-4$$ and $$y = -4x-4$$."
            },
            {
                points: 3,
                question: "<p><strong>Q5.</strong> Differentiate $$f(x) = 5x^4 - \\dfrac{3}{x^2} + 7\\sqrt{x} - 9$$.</p>",
                answer: "$$f(x) = 5x^4-3x^{-2}+7x^{1/2}-9$$. $$f'(x) = 20x^3+6x^{-3}+\\frac{7}{2}x^{-1/2} = 20x^3+\\frac{6}{x^3}+\\frac{7}{2\\sqrt{x}}$$."
            },
            {
                points: 4,
                question: "<p><strong>Q6.</strong> Use the product rule to differentiate $$h(x) = (3x^2+1)(x^3-2x)$$ and evaluate $$h'(1)$$.</p>",
                answer: "$$h'(x) = 6x(x^3-2x)+(3x^2+1)(3x^2-2) = 6x^4-12x^2+9x^4-6x^2+3x^2-2 = 15x^4-15x^2-2$$. $$h'(1) = 15-15-2 = -2$$."
            },
            {
                points: 4,
                question: "<p><strong>Q7.</strong> Differentiate $$g(x) = \\dfrac{x^3+1}{x^2-1}$$ using the quotient rule.</p>",
                answer: "$$g'(x) = \\frac{3x^2(x^2-1)-(x^3+1)(2x)}{(x^2-1)^2} = \\frac{3x^4-3x^2-2x^4-2x}{(x^2-1)^2} = \\frac{x^4-3x^2-2x}{(x^2-1)^2} = \\frac{x(x^3-3x-2)}{(x^2-1)^2}$$."
            },
            {
                points: 4,
                question: "<p><strong>Q8.</strong> Differentiate $$h(x) = (3x^2-x+2)^6$$.</p>",
                answer: "$$h'(x) = 6(3x^2-x+2)^5\\cdot(6x-1) = 6(6x-1)(3x^2-x+2)^5$$."
            },
            {
                points: 4,
                question: "<p><strong>Q9.</strong> Differentiate $$h(x) = \\sqrt{\\dfrac{x+1}{x-1}}$$ using a combination of the chain and quotient rules.</p>",
                answer: "$$h = \\left(\\frac{x+1}{x-1}\\right)^{1/2}$$. $$h' = \\frac{1}{2}\\left(\\frac{x+1}{x-1}\\right)^{-1/2}\\cdot\\frac{(x-1)-(x+1)}{(x-1)^2} = \\frac{1}{2}\\sqrt{\\frac{x-1}{x+1}}\\cdot\\frac{-2}{(x-1)^2} = \\frac{-1}{(x-1)^{3/2}\\sqrt{x+1}}$$."
            },
            {
                points: 4,
                question: "<p><strong>Q10.</strong> Differentiate $$h(x) = x^2(x^2+1)^3(x-1)$$ (use product rule twice or generalized rule).</p>",
                answer: "Group as $$[x^2(x^2+1)^3]\\cdot(x-1)$$. Let $$u = x^2(x^2+1)^3$$: $$u' = 2x(x^2+1)^3+x^2\\cdot 6x(x^2+1)^2 = 2x(x^2+1)^2(x^2+1+3x^2) = 2x(4x^2+1)(x^2+1)^2$$. $$h' = u'(x-1)+u(1) = 2x(4x^2+1)(x^2+1)^2(x-1)+x^2(x^2+1)^3$$. Factor: $$= x(x^2+1)^2[2(4x^2+1)(x-1)+x(x^2+1)]$$."
            },
            {
                points: 3,
                question: "<p><strong>Q11.</strong> Find $$f''(x)$$ for $$f(x) = x^5 - 3x^3 + 2x$$.</p>",
                answer: "$$f'(x) = 5x^4-9x^2+2$$. $$f''(x) = 20x^3-18x = 2x(10x^2-9)$$."
            },
            {
                points: 3,
                question: "<p><strong>Q12.</strong> For $$s(t) = \\frac{1}{3}t^3-2t^2+4t$$, find when the particle is momentarily at rest, and determine its acceleration at those times.</p>",
                answer: "$$v(t) = t^2-4t+4 = (t-2)^2 = 0 \\implies t = 2$$. $$a(t) = 2t-4$$. $$a(2) = 0$$."
            },
            {
                points: 4,
                question: "<p><strong>Q13.</strong> Prove using the limit definition that $$\\dfrac{d}{dx}[f(x)-g(x)] = f'(x)-g'(x)$$.</p>",
                answer: "$$\\lim_{h\\to 0}\\frac{[f(x+h)-g(x+h)]-[f(x)-g(x)]}{h} = \\lim_{h\\to 0}\\left[\\frac{f(x+h)-f(x)}{h}-\\frac{g(x+h)-g(x)}{h}\\right] = f'(x)-g'(x)$$, by the difference rule for limits. $$\\blacksquare$$"
            },
            {
                points: 4,
                question: "<p><strong>Q14.</strong> A piecewise function is defined as $$f(x)=\\begin{cases}x^2+ax & x\\leq 1\\\\ bx+2 & x>1\\end{cases}$$. Find values of $$a$$ and $$b$$ making $$f$$ differentiable at $$x=1$$.</p>",
                answer: "Continuity at 1: $$1+a = b+2 \\implies b = a-1$$. Left derivative: $$\\lim_{h\\to 0^-}\\frac{(1+h)^2+a(1+h)-(1+a)}{h} = 2+a$$. Right derivative: $$b$$. Differentiability: $$2+a = b = a-1$$. Contradiction: $$2+a = a-1 \\implies 2 = -1$$. No such $$a,b$$ exist for this form. (Corrected version: right derivative equals $$b$$, set $$2+a=b=a-1$$ gives no solution. Correct setup: $$2+a = b$$ and continuity $$1+a=b+2$$ gives $$b=2+a$$ and $$b=a-1$$, so $$2+a = a-1$$, impossible. Indicating the functions cannot be made differentiable at $$x=1$$ for any $$a,b$$.)"
            },
            {
                points: 4,
                question: "<p><strong>Q15.</strong> Find all critical points of $$f(x) = 2x^3 - 9x^2 + 12x - 4$$ and classify them.</p>",
                answer: "$$f'(x) = 6x^2-18x+12 = 6(x^2-3x+2) = 6(x-1)(x-2) = 0$$. Critical points: $$x=1, x=2$$. $$f''(x) = 12x-18$$. $$f''(1) = -6 < 0$$ → local max at $$(1, f(1)) = (1, 2-9+12-4) = (1,1)$$. $$f''(2) = 6 > 0$$ → local min at $$(2, f(2)) = (2, 16-36+24-4) = (2, 0)$$."
            },
            {
                points: 4,
                question: "<p><strong>Q16.</strong> Find the absolute maximum and minimum of $$f(x) = x^3-6x^2+9x+1$$ on $$[0,5]$$.</p>",
                answer: "$$f'(x) = 3x^2-12x+9 = 3(x-1)(x-3)$$. Critical points in $$(0,5)$$: $$x=1, 3$$. Values: $$f(0)=1$$, $$f(1)=1-6+9+1=5$$, $$f(3)=27-54+27+1=1$$, $$f(5)=125-150+45+1=21$$. Absolute max: $$21$$ at $$x=5$$. Absolute min: $$1$$ at $$x=0$$ and $$x=3$$."
            },
            {
                points: 4,
                question: "<p><strong>Q17.</strong> A farmer has 300 m of fencing to make a rectangular pen divided into two equal halves by an interior fence parallel to one side. Maximize the total enclosed area.</p>",
                answer: "Let length $$= L$$, width $$= w$$. Interior fence is parallel to width. Total fencing: $$2L+3w = 300 \\implies L = \\frac{300-3w}{2}$$. Area: $$A = Lw = \\frac{w(300-3w)}{2} = 150w-\\frac{3}{2}w^2$$. $$A'(w) = 150-3w = 0 \\implies w = 50$$. $$L = \\frac{300-150}{2} = 75$$. Max area $$= 75\\times 50 = 3750$$ m². $$A'' = -3 < 0$$ confirms max."
            },
            {
                points: 5,
                question: "<p><strong>Q18.</strong> Find the dimensions of the rectangle of largest area that can be inscribed in a semicircle of radius $$r$$.</p>",
                answer: "Place semicircle with diameter on $$x$$-axis, center at origin. Rectangle vertices at $$(x, 0)$$ and $$(x, y)$$ with $$x^2+y^2 = r^2$$, $$y \\geq 0$$. Area: $$A = 2xy = 2x\\sqrt{r^2-x^2}$$, $$0 < x < r$$. $$A^2 = 4x^2(r^2-x^2)$$. Maximize $$A^2$$: $$\\frac{d}{dx}[4x^2(r^2-x^2)] = 4(2x(r^2-x^2)+x^2(-2x)) = 8x(r^2-2x^2) = 0 \\implies x = \\frac{r}{\\sqrt{2}}$$. $$y = \\sqrt{r^2-r^2/2} = \\frac{r}{\\sqrt{2}}$$. Dimensions: width $$= 2x = r\\sqrt{2}$$, height $$= \\frac{r}{\\sqrt{2}} = \\frac{r\\sqrt{2}}{2}$$."
            },
            {
                points: 5,
                question: "<p><strong>Q19.</strong> Differentiate $$h(x) = \\left(\\dfrac{x^2-1}{x^2+1}\\right)^3$$ completely and simplify.</p>",
                answer: "Let $$u = \\frac{x^2-1}{x^2+1}$$. $$h = u^3$$. $$u' = \\frac{2x(x^2+1)-(x^2-1)\\cdot 2x}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$$. $$h' = 3u^2\\cdot u' = 3\\left(\\frac{x^2-1}{x^2+1}\\right)^2\\cdot\\frac{4x}{(x^2+1)^2} = \\frac{12x(x^2-1)^2}{(x^2+1)^4}$$."
            },
            {
                points: 3,
                question: "<p><strong>Q20.</strong> Find $$f^{(4)}(x)$$ for $$f(x) = x^5 - 2x^4 + x$$.</p>",
                answer: "$$f' = 5x^4-8x^3+1$$. $$f''=20x^3-24x^2$$. $$f'''=60x^2-48x$$. $$f^{(4)}=120x-48$$."
            },
            {
                points: 3,
                question: "<p><strong>Q21.</strong> Show that $$f(x) = x|x|$$ is differentiable at $$x=0$$ using the limit definition.</p>",
                answer: "$$f(x) = \\begin{cases}x^2 & x \\geq 0 \\\\ -x^2 & x < 0\\end{cases}$$. $$f'(0) = \\lim_{h\\to 0}\\frac{|h|\\cdot h}{h} = \\lim_{h\\to 0}|h| = 0$$. The limit is 0, so $$f'(0) = 0$$. $$f$$ is differentiable at 0."
            },
            {
                points: 4,
                question: "<p><strong>Q22.</strong> A manufacturer can produce $$x$$ items daily at total cost $$C(x) = 0.1x^2 + 50x + 1000$$ dollars. Each item sells for $$\\$120$$. Find the production level that maximizes daily profit and the maximum profit.</p>",
                answer: "Revenue: $$R(x) = 120x$$. Profit: $$P(x) = 120x-0.1x^2-50x-1000 = 70x-0.1x^2-1000$$. $$P'(x) = 70-0.2x = 0 \\implies x = 350$$. $$P''(x) = -0.2 < 0$$ → max. $$P(350) = 24500-12250-1000 = \\$11250$$."
            },
            {
                points: 4,
                question: "<p><strong>Q23.</strong> Differentiate $$f(x) = \\dfrac{(x^2+1)^{3/2}}{\\sqrt{x^3-1}}$$ and simplify.</p>",
                answer: "$$f = \\frac{(x^2+1)^{3/2}}{(x^3-1)^{1/2}}$$. Quotient rule: $$f' = \\frac{\\frac{3}{2}(x^2+1)^{1/2}\\cdot 2x\\cdot(x^3-1)^{1/2}-(x^2+1)^{3/2}\\cdot\\frac{1}{2}(x^3-1)^{-1/2}\\cdot 3x^2}{x^3-1}$$. Multiply numerator and denominator by $$(x^3-1)^{1/2}$$: numerator becomes $$3x(x^2+1)^{1/2}(x^3-1) - \\frac{3x^2}{2}(x^2+1)^{3/2}$$. Factor $$\\frac{3x}{2}(x^2+1)^{1/2}$$: $$= \\frac{3x(x^2+1)^{1/2}[2(x^3-1)-x(x^2+1)]}{2(x^3-1)^{3/2}} = \\frac{3x(x^2+1)^{1/2}(x^3-x-2)}{2(x^3-1)^{3/2}}$$."
            },
            {
                points: 4,
                question: "<p><strong>Q24.</strong> Prove the quotient rule from the product rule: if $$h = f/g$$, differentiate $$h\\cdot g = f$$.</p>",
                answer: "Start with $$h(x)g(x) = f(x)$$. Differentiate both sides: $$h'(x)g(x)+h(x)g'(x) = f'(x)$$ (product rule). Solve for $$h'(x)$$: $$h'(x)g(x) = f'(x)-h(x)g'(x) = f'(x)-\\frac{f(x)}{g(x)}g'(x)$$. $$h'(x) = \\frac{f'(x)}{g(x)}-\\frac{f(x)g'(x)}{[g(x)]^2} = \\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$$. $$\\blacksquare$$"
            },
            {
                points: 5,
                question: "<p><strong>Q25.</strong> A cylindrical pipe (open at both ends, no top or bottom) must have a volume of $$128\\pi$$ cm³. Find the radius and height that minimize the lateral surface area.</p>",
                answer: "Volume: $$\\pi r^2 h = 128\\pi \\implies h = \\frac{128}{r^2}$$. Lateral surface area: $$S = 2\\pi r h = 2\\pi r\\cdot\\frac{128}{r^2} = \\frac{256\\pi}{r}$$. $$S'(r) = -\\frac{256\\pi}{r^2}$$. Since $$S' < 0$$ for all $$r > 0$$, $$S$$ is strictly decreasing and has no minimum on $$(0,\\infty)$$. Physical constraint needed: e.g., if we include a material cost or radius bound. Otherwise the minimum lateral area is achieved as $$r \\to \\infty, h \\to 0$$. Note: if the problem instead means TOTAL surface area including the two circular ends $$= 2\\pi r^2+2\\pi rh$$: $$S = 2\\pi r^2+\\frac{256\\pi}{r}$$. $$S'=4\\pi r-\\frac{256\\pi}{r^2}=0 \\implies r^3=64 \\implies r=4$$ cm. $$h=8$$ cm. $$S''=4\\pi+\\frac{512\\pi}{r^3}>0$$ → min."
            },
            {
                points: 3,
                question: "<p><strong>Q1.</strong> Differentiate $$f(x)=e^{x^2-3x}$$.</p>",
                answer: "$$g(x)=x^2-3x,\\ g'(x)=2x-3$$\n$$f'(x)=(2x-3)e^{x^2-3x}$$"
            },
            {
                points: 3,
                question: "<p><strong>Q2.</strong> Find $$\\frac{d}{dx}\\left[3^{\\sin x}\\right]$$.</p>",
                answer: "$$\\frac{d}{dx}[3^{\\sin x}]=3^{\\sin x}\\cdot\\ln 3\\cdot\\cos x$$"
            },
            {
                points: 4,
                question: "<p><strong>Q3.</strong> Use logarithmic differentiation to find $$y'$$ if $$y=x^{\\cos x}$$.</p>",
                answer: "$$\\ln y=\\cos x\\cdot\\ln x$$\n$$\\frac{y'}{y}=-\\sin x\\ln x+\\frac{\\cos x}{x}$$\n$$y'=x^{\\cos x}\\left[\\frac{\\cos x}{x}-\\sin x\\ln x\\right]$$"
            },
            {
                points: 3,
                question: "<p><strong>Q4.</strong> Differentiate $$y=\\ln\\sqrt{\\frac{x^2+1}{x^2-1}}$$.</p>",
                answer: "$$y=\\frac{1}{2}[\\ln(x^2+1)-\\ln(x^2-1)]$$\n$$y'=\\frac{1}{2}\\left[\\frac{2x}{x^2+1}-\\frac{2x}{x^2-1}\\right]=x\\left[\\frac{1}{x^2+1}-\\frac{1}{x^2-1}\\right]=\\frac{-2x}{x^4-1}$$"
            },
            {
                points: 3,
                question: "<p><strong>Q5.</strong> Find $$\\frac{d}{dx}[\\sec^2(3x)+\\tan^2(3x)]$$ without expanding.</p>",
                answer: "Note: $$\\sec^2\\theta-\\tan^2\\theta=1$$, so $$\\sec^2\\theta+\\tan^2\\theta=2\\sec^2\\theta-1$$.\nAlternatively, differentiate term by term:\n$$2\\sec(3x)\\cdot\\sec(3x)\\tan(3x)\\cdot 3+2\\tan(3x)\\cdot\\sec^2(3x)\\cdot 3$$\n$$=6\\sec^2(3x)\\tan(3x)+6\\tan(3x)\\sec^2(3x)=12\\sec^2(3x)\\tan(3x)$$"
            },
            {
                points: 4,
                question: "<p><strong>Q6.</strong> Find $$\\frac{dy}{dx}$$ for $$\\arctan(y)=x^2+y$$.</p>",
                answer: "Differentiate:\n$$\\frac{1}{1+y^2}\\cdot\\frac{dy}{dx}=2x+\\frac{dy}{dx}$$\n$$\\frac{dy}{dx}\\left(\\frac{1}{1+y^2}-1\\right)=2x$$\n$$\\frac{dy}{dx}\\cdot\\frac{1-(1+y^2)}{1+y^2}=2x$$\n$$\\frac{dy}{dx}\\cdot\\frac{-y^2}{1+y^2}=2x$$\n$$\\frac{dy}{dx}=-\\frac{2x(1+y^2)}{y^2}$$"
            },
            {
                points: 4,
                question: "<p><strong>Q7.</strong> Find $$\\frac{d^2y}{dx^2}$$ for $$xy=4$$.</p>",
                answer: "$$y+x\\frac{dy}{dx}=0\\implies\\frac{dy}{dx}=-\\frac{y}{x}$$\n$$\\frac{d^2y}{dx^2}=-\\frac{\\frac{dy}{dx}\\cdot x - y\\cdot 1}{x^2}=-\\frac{(-y/x)x-y}{x^2}=-\\frac{-y-y}{x^2}=\\frac{2y}{x^2}$$\nSince $$y=4/x$$: $$\\frac{d^2y}{dx^2}=\\frac{8/x}{x^2}=\\frac{8}{x^3}$$."
            },
            {
                points: 5,
                question: "<p><strong>Q8.</strong> A 13 m ladder leans against a wall. The foot slides out at $$1.5$$ m/s. Find the rate at which the angle the ladder makes with the floor is decreasing when the foot is $$5$$ m from the wall.</p>",
                answer: "Let $$\\theta$$ = angle with floor, $$x$$ = distance from wall to foot.\n$$\\cos\\theta=\\frac{x}{13}$$\n$$-\\sin\\theta\\frac{d\\theta}{dt}=\\frac{1}{13}\\frac{dx}{dt}$$\nWhen $$x=5$$: $$\\sin\\theta=\\frac{12}{13}$$.\n$$-\\frac{12}{13}\\frac{d\\theta}{dt}=\\frac{1.5}{13}$$\n$$\\frac{d\\theta}{dt}=-\\frac{1.5}{12}=-\\frac{1}{8}=-0.125\\text{ rad/s}$$\nThe angle decreases at $$0.125$$ rad/s."
            },
            {
                points: 3,
                question: "<p><strong>Q9.</strong> Evaluate $$\\displaystyle\\lim_{x\\to 0}\\frac{\\tan x - x}{x^3}$$.</p>",
                answer: "Form $$0/0$$.\n1st: $$\\lim\\frac{\\sec^2 x-1}{3x^2}=\\lim\\frac{\\tan^2 x}{3x^2}$$, still $$0/0$$.\nActually, continue:\n$$\\frac{\\sec^2x-1}{3x^2}=\\frac{\\tan^2x}{3x^2}$$\nAt $$x=0$$: still $$0/0$$. L'Hôpital:\n$$\\lim_{x\\to 0}\\frac{2\\sec^2x\\tan x}{6x}$$, still $$0/0$$.\n$$\\lim_{x\\to 0}\\frac{2\\sec^2x(\\sec^2x+2\\sec^2x\\tan^2x)}{6}=\\frac{2(1)(1)}{6}=\\frac{1}{3}$$"
            },
            {
                points: 3,
                question: "<p><strong>Q10.</strong> Evaluate $$\\displaystyle\\lim_{x\\to 0^+}(\\tan x)^x$$.</p>",
                answer: "Form $$0^0$$. Let $$L=\\lim(\\tan x)^x$$.\n$$\\ln L=\\lim_{x\\to 0^+}x\\ln(\\tan x)=\\lim\\frac{\\ln(\\tan x)}{1/x}$$, form $$-\\infty/+\\infty$$.\nL'Hôpital: $$\\lim\\frac{\\sec^2x/\\tan x}{-1/x^2}=\\lim\\frac{-x^2\\sec^2x}{\\tan x}=\\lim\\frac{-x^2}{\\sin x\\cos x}=\\lim\\frac{-2x}{\\cos(2x)}=0$$.\nSo $$\\ln L=0\\implies L=1$$."
            },
            {
                points: 4,
                question: "<p><strong>Q11.</strong> Find $$\\frac{d}{dx}[\\arcsin(x^2)]$$ and state the domain of validity.</p>",
                answer: "$$\\frac{d}{dx}[\\arcsin(x^2)]=\\frac{2x}{\\sqrt{1-x^4}}$$\nDomain: $$|x^2|<1\\implies -1<x<1$$ (excluding $$x=\\pm 1$$ where derivative is undefined)."
            },
            {
                points: 4,
                question: "<p><strong>Q12.</strong> Differentiate $$f(x)=x\\arctan(x)-\\frac{1}{2}\\ln(1+x^2)$$.</p>",
                answer: "$$f'(x)=\\arctan x+\\frac{x}{1+x^2}-\\frac{1}{2}\\cdot\\frac{2x}{1+x^2}$$\n$$=\\arctan x+\\frac{x}{1+x^2}-\\frac{x}{1+x^2}=\\arctan x$$\n<em>Useful identity:</em> This shows the antiderivative of $$\\arctan x$$ is $$x\\arctan x-\\frac{1}{2}\\ln(1+x^2)+C$$."
            },
            {
                points: 4,
                question: "<p><strong>Q13.</strong> Find all partial derivatives $$f_x,\\ f_y,\\ f_{xx},\\ f_{yy},\\ f_{xy}$$ for $$f(x,y)=x^2\\sin y + ye^x$$.</p>",
                answer: "$$f_x=2x\\sin y+ye^x$$\n$$f_y=x^2\\cos y+e^x$$\n$$f_{xx}=2\\sin y+ye^x$$\n$$f_{yy}=-x^2\\sin y$$\n$$f_{xy}=\\frac{\\partial}{\\partial y}[2x\\sin y+ye^x]=2x\\cos y+e^x$$"
            },
            {
                points: 4,
                question: "<p><strong>Q14.</strong> Show that $$f(x,y)=\\frac{1}{\\sqrt{x^2+y^2}}$$ satisfies Laplace's equation $$f_{xx}+f_{yy}=0$$ for $$(x,y)\\neq(0,0)$$.</p>",
                answer: "Let $$r^2=x^2+y^2$$, so $$f=(x^2+y^2)^{-1/2}$$.\n$$f_x=-\\frac{x}{(x^2+y^2)^{3/2}}$$\n$$f_{xx}=-\\frac{(x^2+y^2)^{3/2}-x\\cdot\\frac{3}{2}(x^2+y^2)^{1/2}\\cdot 2x}{(x^2+y^2)^3}=\\frac{-1}{(x^2+y^2)^{3/2}}+\\frac{3x^2}{(x^2+y^2)^{5/2}}=\\frac{2x^2-y^2}{(x^2+y^2)^{5/2}}$$\nBy symmetry: $$f_{yy}=\\frac{2y^2-x^2}{(x^2+y^2)^{5/2}}$$\n$$f_{xx}+f_{yy}=\\frac{2x^2-y^2+2y^2-x^2}{(x^2+y^2)^{5/2}}=\\frac{x^2+y^2}{(x^2+y^2)^{5/2}}=\\frac{1}{(x^2+y^2)^{3/2}}$$\n<em>Correction:</em> Actually $$f_{xx}=\\frac{2x^2-y^2}{r^5}$$ and $$f_{yy}=\\frac{2y^2-x^2}{r^5}$$, so $$f_{xx}+f_{yy}=\\frac{x^2+y^2}{r^5}=\\frac{r^2}{r^5}=\\frac{1}{r^3}\\neq 0$$. Note: $$\\frac{1}{r}$$ satisfies Laplace's eq only in 3D ($$\\frac{1}{\\sqrt{x^2+y^2+z^2}}$$); $$\\ln r$$ satisfies it in 2D."
            },
            {
                points: 5,
                question: "<p><strong>Q15.</strong> Find and classify all critical points of $$f(x,y)=x^3+y^3-3xy$$.</p>",
                answer: "$$f_x=3x^2-3y=0\\implies y=x^2 \\quad(1)$$\n$$f_y=3y^2-3x=0\\implies x=y^2 \\quad(2)$$\nSubstitute (1) into (2): $$x=(x^2)^2=x^4\\implies x^4-x=0\\implies x(x^3-1)=0\\implies x=0$$ or $$x=1$$.\nCritical points: $$(0,0)$$ and $$(1,1)$$.\n\n$$f_{xx}=6x,\\ f_{yy}=6y,\\ f_{xy}=-3$$\n$$D=36xy-9$$\n\nAt $$(0,0)$$: $$D=-9<0$$ → <strong>Saddle point</strong>.\nAt $$(1,1)$$: $$D=36-9=27>0,\\ f_{xx}=6>0$$ → <strong>Local minimum</strong>, $$f(1,1)=-1$$."
            },
            {
                points: 3,
                question: "<p><strong>Q16.</strong> Evaluate $$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{\\sqrt{x}}$$.</p>",
                answer: "Form $$\\infty/\\infty$$. L'Hôpital:\n$$\\lim_{x\\to\\infty}\\frac{1/x}{1/(2\\sqrt{x})}=\\lim_{x\\to\\infty}\\frac{2\\sqrt{x}}{x}=\\lim_{x\\to\\infty}\\frac{2}{\\sqrt{x}}=0$$"
            },
            {
                points: 4,
                question: "<p><strong>Q17.</strong> Find the equation of the tangent line to the curve $$\\sin(xy)+\\cos(xy)=1$$ at the point $$(\\pi/2,1)$$.</p>",
                answer: "Differentiate implicitly:\n$$\\cos(xy)(y+x y')+ (-\\sin(xy))(y+xy')=0$$\nWait, more carefully:\n$$\\frac{d}{dx}[\\sin(xy)]=\\cos(xy)(y+xy')$$\n$$\\frac{d}{dx}[\\cos(xy)]=-\\sin(xy)(y+xy')$$\nSo: $$(y+xy')[\\cos(xy)-\\sin(xy)]=0$$\nEither $$y+xy'=0$$ or $$\\cos(xy)=\\sin(xy)$$.\nAt $$(\\pi/2,1)$$: $$xy=\\pi/2$$, so $$\\cos(\\pi/2)=0,\\ \\sin(\\pi/2)=1$$. Check: $$0+1=1$$✓.\nThus $$\\cos(xy)\\neq\\sin(xy)$$ at this point, so $$y+xy'=0\\implies y'=-\\frac{y}{x}=-\\frac{1}{\\pi/2}=-\\frac{2}{\\pi}$$.\nTangent: $$y-1=-\\frac{2}{\\pi}(x-\\frac{\\pi}{2})\\implies y=-\\frac{2}{\\pi}x+2$$."
            },
            {
                points: 4,
                question: "<p><strong>Q18.</strong> Water fills a conical cup (vertex down) at $$5$$ cm³/s. The cup is 20 cm tall and 10 cm in diameter at the top. Find the rate of rise of the water level when $$h=8$$ cm.</p>",
                answer: "$$r/h = 5/20 = 1/4$$, so $$r=h/4$$.\n$$V=\\frac{1}{3}\\pi r^2 h=\\frac{1}{3}\\pi\\frac{h^2}{16}h=\\frac{\\pi h^3}{48}$$\n$$\\frac{dV}{dt}=\\frac{\\pi h^2}{16}\\frac{dh}{dt}$$\nAt $$h=8$$, $$\\frac{dV}{dt}=5$$:\n$$5=\\frac{64\\pi}{16}\\frac{dh}{dt}=4\\pi\\frac{dh}{dt}$$\n$$\\frac{dh}{dt}=\\frac{5}{4\\pi}\\approx 0.398\\text{ cm/s}$$"
            },
            {
                points: 3,
                question: "<p><strong>Q19.</strong> Differentiate $$y=\\arctan\\left(\\frac{x}{a}\\right)$$ where $$a$$ is a nonzero constant.</p>",
                answer: "$$y'=\\frac{1}{1+(x/a)^2}\\cdot\\frac{1}{a}=\\frac{1}{1+x^2/a^2}\\cdot\\frac{1}{a}=\\frac{a^2}{a^2+x^2}\\cdot\\frac{1}{a}=\\frac{a}{a^2+x^2}$$"
            },
            {
                points: 4,
                question: "<p><strong>Q20.</strong> Evaluate $$\\displaystyle\\lim_{x\\to 0}\\left(\\frac{1}{x^2}-\\cot^2 x\\right)$$.</p>",
                answer: "Rewrite: $$\\frac{1}{x^2}-\\frac{\\cos^2x}{\\sin^2x}=\\frac{\\sin^2x-x^2\\cos^2x}{x^2\\sin^2x}$$\nAs $$x\\to 0$$, $$\\sin x\\approx x$$, so denominator $$\\approx x^4$$.\nNumerator $$=\\sin^2x-x^2\\cos^2x$$.\nApply L'Hôpital (form $$0/0$$) repeatedly or use Taylor expansion:\n$$\\sin x\\approx x-\\frac{x^3}{6},\\ \\cos x\\approx 1-\\frac{x^2}{2}$$\n$$\\sin^2x\\approx x^2-\\frac{x^4}{3},\\quad x^2\\cos^2x\\approx x^2-x^4$$\nNumerator $$\\approx x^2-\\frac{x^4}{3}-(x^2-x^4)=\\frac{2x^4}{3}$$\nDenominator $$\\approx x^2\\cdot x^2=x^4$$\nLimit $$=\\frac{2}{3}$$"
            },
            {
                points: 4,
                question: "<p><strong>Q21.</strong> Find the third-order mixed partial $$f_{xxy}$$ for $$f(x,y)=e^{x^2y}$$.</p>",
                answer: "$$f_x=2xye^{x^2y}$$\n$$f_{xx}=(2y)e^{x^2y}+(2xy)\\cdot 2xye^{x^2y}=2ye^{x^2y}(1+2x^2y)$$\n$$f_{xxy}=\\frac{\\partial}{\\partial y}[2ye^{x^2y}(1+2x^2y)]$$\nLet $$u=2ye^{x^2y}$$ and $$v=(1+2x^2y)$$:\n$$\\frac{\\partial u}{\\partial y}=2e^{x^2y}+2yx^2e^{x^2y}=2e^{x^2y}(1+x^2y)$$\n$$\\frac{\\partial v}{\\partial y}=2x^2$$\n$$f_{xxy}=2e^{x^2y}(1+x^2y)(1+2x^2y)+2ye^{x^2y}\\cdot 2x^2$$\n$$=2e^{x^2y}[(1+x^2y)(1+2x^2y)+2x^2y]$$\n$$=2e^{x^2y}[1+3x^2y+2x^4y^2+2x^2y]$$\n$$=2e^{x^2y}[1+5x^2y+2x^4y^2]$$"
            },
            {
                points: 4,
                question: "<p><strong>Q22.</strong> A kite is flying at height 100 m. The kite moves horizontally at 4 m/s away from the kite-flier. How fast is the string being let out when 125 m of string has been released?</p>",
                answer: "Let $$h=100$$ m (constant), $$x$$ = horizontal distance, $$L$$ = string length.\n$$L^2=x^2+h^2=x^2+10000$$\nWhen $$L=125$$: $$x=\\sqrt{15625-10000}=\\sqrt{5625}=75$$ m.\n$$2L\\frac{dL}{dt}=2x\\frac{dx}{dt}$$\n$$\\frac{dL}{dt}=\\frac{x}{L}\\cdot 4=\\frac{75}{125}\\cdot 4=\\frac{3}{5}\\cdot 4=2.4\\text{ m/s}$$"
            },
            {
                points: 3,
                question: "<p><strong>Q23.</strong> Use implicit differentiation to find $$\\frac{\\partial z}{\\partial x}$$ and $$\\frac{\\partial z}{\\partial y}$$ if $$xyz+z^3=2$$.</p>",
                answer: "$$\\frac{\\partial}{\\partial x}$$: $$yz+xy\\frac{\\partial z}{\\partial x}+3z^2\\frac{\\partial z}{\\partial x}=0\\implies\\frac{\\partial z}{\\partial x}=\\frac{-yz}{xy+3z^2}$$\n$$\\frac{\\partial}{\\partial y}$$: $$xz+xy\\frac{\\partial z}{\\partial y}+3z^2\\frac{\\partial z}{\\partial y}=0\\implies\\frac{\\partial z}{\\partial y}=\\frac{-xz}{xy+3z^2}$$"
            },
            {
                points: 4,
                question: "<p><strong>Q24.</strong> Evaluate $$\\displaystyle\\lim_{x\\to 0}\\frac{e^x-e^{-x}-2\\sin x}{x^3}$$.</p>",
                answer: "Form $$0/0$$.\nL'Hôpital 1: $$\\lim\\frac{e^x+e^{-x}-2\\cos x}{3x^2}$$ (still $$0/0$$)\nL'Hôpital 2: $$\\lim\\frac{e^x-e^{-x}+2\\sin x}{6x}$$ (still $$0/0$$)\nL'Hôpital 3: $$\\lim\\frac{e^x+e^{-x}+2\\cos x}{6}=\\frac{1+1+2}{6}=\\frac{4}{6}=\\frac{2}{3}$$"
            },
            {
                points: 4,
                question: "<p><strong>Q25.</strong> Differentiate $$y = \\frac{(x^2+1)^3 \\sqrt{\\sin x}}{e^{2x}(x+1)^4}$$ using logarithmic differentiation.</p>",
                answer: "$$\\ln y=3\\ln(x^2+1)+\\frac{1}{2}\\ln(\\sin x)-2x-4\\ln(x+1)$$\n$$\\frac{y'}{y}=\\frac{6x}{x^2+1}+\\frac{\\cos x}{2\\sin x}-2-\\frac{4}{x+1}$$\n$$=\\frac{6x}{x^2+1}+\\frac{\\cot x}{2}-2-\\frac{4}{x+1}$$\n$$y'=\\frac{(x^2+1)^3\\sqrt{\\sin x}}{e^{2x}(x+1)^4}\\left[\\frac{6x}{x^2+1}+\\frac{\\cot x}{2}-2-\\frac{4}{x+1}\\right]$$"
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
        },
        {
            title: "Limit Definition of the Derivative",
            formulas: [
                "$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$$",
                "$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$$",
                "$$\\text{AROC on }[a,b] = \\frac{f(b)-f(a)}{b-a}$$",
                "$$\\text{IROC at } x=a = \\lim_{b \\to a}\\frac{f(b)-f(a)}{b-a} = f'(a)$$",
                "$$\\text{Differentiability} \\implies \\text{Continuity (not conversely)}$$"
            ]
        },
        {
            title: "Basic Differentiation Rules",
            formulas: [
                "$$\\frac{d}{dx}[c] = 0$$",
                "$$\\frac{d}{dx}[x^n] = nx^{n-1} \\quad (\\text{Power Rule, any real } n)$$",
                "$$\\frac{d}{dx}[cf(x)] = cf'(x) \\quad (\\text{Constant Multiple Rule})$$",
                "$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x) \\quad (\\text{Sum/Difference Rule})$$",
                "$$\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2\\sqrt{x}}, \\quad \\frac{d}{dx}\\left[\\frac{1}{x}\\right] = -\\frac{1}{x^2}$$"
            ]
        },
        {
            title: "Product, Quotient, and Chain Rules",
            formulas: [
                "$$\\textbf{Product Rule:} \\quad \\frac{d}{dx}[f\\cdot g] = f'g + fg'$$",
                "$$\\textbf{Quotient Rule:} \\quad \\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{f'g - fg'}{g^2}$$",
                "$$\\textbf{Chain Rule:} \\quad \\frac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$$",
                "$$\\textbf{Chain (Leibniz):} \\quad \\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$$",
                "$$\\frac{d}{dx}[(g(x))^n] = n(g(x))^{n-1}\\cdot g'(x) \\quad (\\text{Generalized Power Rule})$$"
            ]
        },
        {
            title: "Higher-Order Derivatives",
            formulas: [
                "$$f''(x) = \\frac{d^2y}{dx^2} = \\frac{d}{dx}[f'(x)]$$",
                "$$f^{(n)}(x) = \\frac{d^n y}{dx^n}$$",
                "$$\\frac{d^n}{dx^n}[x^m] = \\frac{m!}{(m-n)!}x^{m-n} \\text{ for } n \\leq m;\\quad 0 \\text{ for } n > m$$",
                "$$s(t) \\xrightarrow{\\frac{d}{dt}} v(t) = s'(t) \\xrightarrow{\\frac{d}{dt}} a(t) = s''(t)$$",
                "$$f''(x) > 0: \\text{ concave up}; \\quad f''(x) < 0: \\text{ concave down}$$"
            ]
        },
        {
            title: "Tangent and Normal Lines",
            formulas: [
                "$$\\text{Tangent at }(a,f(a)): \\quad y - f(a) = f'(a)(x-a)$$",
                "$$\\text{Normal at }(a,f(a)): \\quad y - f(a) = -\\frac{1}{f'(a)}(x-a)$$",
                "$$\\text{Linear Approximation: } f(x) \\approx f(a)+f'(a)(x-a) \\text{ near } x = a$$",
                "$$m_{\\text{tan}} = f'(a); \\quad m_{\\text{normal}} = -\\frac{1}{f'(a)}$$"
            ]
        },
        {
            title: "Optimization Toolkit",
            formulas: [
                "$$\\text{Critical points: } f'(c) = 0 \\text{ or } f'(c) \\text{ DNE}$$",
                "$$\\textbf{First Derivative Test:}$$",
                "$$f' : + \\to - \\text{ at } c \\implies \\text{local max}$$",
                "$$f' : - \\to + \\text{ at } c \\implies \\text{local min}$$",
                "$$\\textbf{Second Derivative Test:}$$",
                "$$f'(c)=0,\\; f''(c)>0 \\implies \\text{local min}$$",
                "$$f'(c)=0,\\; f''(c)<0 \\implies \\text{local max}$$",
                "$$f'(c)=0,\\; f''(c)=0 \\implies \\text{inconclusive}$$",
                "$$\\textbf{Closed Interval Method:} \\text{ compare } f \\text{ at all critical pts and endpoints of } [a,b]$$"
            ]
        },
        {
            title: "Exponential & Logarithmic Derivatives",
            formulas: [
                "$$\\frac{d}{dx}[e^x] = e^x$$",
                "$$\\frac{d}{dx}[e^{g(x)}] = e^{g(x)} g'(x)$$",
                "$$\\frac{d}{dx}[a^x] = a^x \\ln a$$",
                "$$\\frac{d}{dx}[a^{g(x)}] = a^{g(x)} \\ln a \\cdot g'(x)$$",
                "$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$",
                "$$\\frac{d}{dx}[\\ln g(x)] = \\frac{g'(x)}{g(x)}$$",
                "$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$",
                "$$\\frac{d}{dx}[\\log_a g(x)] = \\frac{g'(x)}{g(x) \\ln a}$$",
                "$$\\text{Logarithmic Differentiation: take } \\ln \\text{ of both sides, then differentiate implicitly}$$"
            ]
        },
        {
            title: "Trigonometric & Inverse Trigonometric Derivatives",
            formulas: [
                "$$\\frac{d}{dx}[\\sin x] = \\cos x$$",
                "$$\\frac{d}{dx}[\\cos x] = -\\sin x$$",
                "$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$",
                "$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$",
                "$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$",
                "$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$",
                "$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}},\\; |x|<1$$",
                "$$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}},\\; |x|<1$$",
                "$$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$$",
                "$$\\frac{d}{dx}[\\text{arccot}\\, x] = -\\frac{1}{1+x^2}$$",
                "$$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2-1}},\\; |x|>1$$",
                "$$\\frac{d}{dx}[\\text{arccsc}\\, x] = -\\frac{1}{|x|\\sqrt{x^2-1}},\\; |x|>1$$"
            ]
        },
        {
            title: "Implicit Differentiation & Related Rates",
            formulas: [
                "$$\\text{Chain rule on } y: \\frac{d}{dx}[y^n] = ny^{n-1}\\frac{dy}{dx}$$",
                "$$\\text{Product with } y: \\frac{d}{dx}[xy] = y + x\\frac{dy}{dx}$$",
                "$$\\text{Solve for } \\frac{dy}{dx} \\text{ after collecting terms}$$",
                "$$\\text{Second order: differentiate } \\frac{dy}{dx} \\text{ again, substituting } \\frac{dy}{dx} \\text{ expression}$$",
                "$$\\text{Related rates: identify relation } F(x,y,\\ldots)=0, \\text{ then } \\frac{dF}{dt}=0$$",
                "$$A_{\\text{circle}}=\\pi r^2,\\; V_{\\text{sphere}}=\\frac{4}{3}\\pi r^3,\\; V_{\\text{cone}}=\\frac{1}{3}\\pi r^2 h$$",
                "$$\\text{Substitute numerical values AFTER differentiating with respect to } t$$"
            ]
        },
        {
            title: "L'Hôpital's Rule",
            formulas: [
                "$$\\text{If } \\lim_{x\\to a}\\frac{f(x)}{g(x)} \\text{ is } \\frac{0}{0} \\text{ or } \\frac{\\pm\\infty}{\\pm\\infty}, \\text{ then } \\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$",
                "$$0\\cdot\\infty \\Rightarrow \\frac{f}{1/g}=\\frac{0}{0} \\text{ or } \\frac{g}{1/f}=\\frac{\\infty}{\\infty}$$",
                "$$\\infty-\\infty \\Rightarrow \\text{combine fractions to get } 0/0$$",
                "$$1^\\infty,\\; 0^0,\\; \\infty^0 \\Rightarrow \\text{let } y=f(x)^{g(x)}, \\text{ take } \\ln y, \\text{ apply L'H to } \\ln y$$",
                "$$\\text{Do NOT apply L'Hôpital unless the form is actually indeterminate}$$",
                "$$\\text{Repeat application if limit remains indeterminate}$$"
            ]
        },
        {
            title: "Partial Derivatives",
            formulas: [
                "$$f_x = \\frac{\\partial f}{\\partial x} = \\lim_{h\\to 0}\\frac{f(x+h,y)-f(x,y)}{h}$$",
                "$$f_y = \\frac{\\partial f}{\\partial y} = \\lim_{h\\to 0}\\frac{f(x,y+h)-f(x,y)}{h}$$",
                "$$f_{xx}=\\frac{\\partial^2 f}{\\partial x^2},\\; f_{yy}=\\frac{\\partial^2 f}{\\partial y^2},\\; f_{xy}=\\frac{\\partial^2 f}{\\partial y\\,\\partial x}$$",
                "$$\\text{Clairaut's Theorem: if } f_{xy},\\, f_{yx} \\text{ continuous, then } f_{xy}=f_{yx}$$",
                "$$\\text{To find } f_x\\text{: treat all variables except }x\\text{ as constants}$$",
                "$$\\text{Laplace's equation: } f_{xx}+f_{yy}=0$$",
                "$$\\text{Heat equation: } u_t = k\\, u_{xx}$$",
                "$$\\text{Wave equation: } u_{tt} = c^2 u_{xx}$$"
            ]
        },
        {
            title: "Second Partial Derivative Test for Optimization",
            formulas: [
                "$$\\text{Find critical points where } f_x=0 \\text{ and } f_y=0$$",
                "$$D(a,b)=f_{xx}(a,b)f_{yy}(a,b)-[f_{xy}(a,b)]^2$$",
                "$$D>0 \\text{ and } f_{xx}>0 \\Rightarrow \\text{Local minimum}$$",
                "$$D>0 \\text{ and } f_{xx}<0 \\Rightarrow \\text{Local maximum}$$",
                "$$D<0 \\Rightarrow \\text{Saddle point}$$",
                "$$D=0 \\Rightarrow \\text{Test inconclusive — further analysis needed}$$"
            ]
        }
    ]
};