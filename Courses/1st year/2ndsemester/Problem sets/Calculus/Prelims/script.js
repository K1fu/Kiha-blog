// ============================================
// CALCULUS MASTERY SYSTEM - MAIN JAVASCRIPT
// ============================================

// === GLOBAL STATE ===
let currentSection = 'overview';
let completedProblems = new Set();
let masteryTestStarted = false;

// === PAGE INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSidebar();
    initializeModals();
    loadProgress();
    updateProgressDisplay();
    updateHeaderStats();
    
    // Add event listeners for sidebar lesson links
    const lessonLinks = document.querySelectorAll('.lesson-link');
    lessonLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the hash from href (e.g., #lesson-1-1)
            const href = this.getAttribute('href');
            // Remove the # to get the ID
            const targetId = href.substring(1);
            
            navigateTo('modules', targetId);
        });
    });
});

// === NAVIGATION FUNCTIONS ===
function initializeNavigation() {
    const navSlabs = document.querySelectorAll('.nav-slab');
    navSlabs.forEach(slab => {
        slab.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Update navigation slabs
    document.querySelectorAll('.nav-slab').forEach(slab => {
        slab.classList.remove('active');
        if (slab.getAttribute('data-section') === sectionName) {
            slab.classList.add('active');
        }
    });
    
    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Load section-specific content
        if (sectionName === 'problems') {
            loadProblems();
        }
        
        // Trigger MathJax for all sections
        if (window.MathJax) {
            setTimeout(() => {
                MathJax.typesetPromise([targetSection]);
            }, 100);
        }
    }
}

// === UTILITY FUNCTIONS ===
function navigateTo(section, subsection) {
    showSection(section);
    
    if (subsection) {
        // Wait for the section animation to trigger/DOM to be visible
        setTimeout(() => {
            const element = document.getElementById(subsection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Optional: Flash the element to indicate selection
                element.style.borderColor = 'var(--cyan-accent)';
                setTimeout(() => {
                    element.style.borderColor = ''; // Revert to CSS default
                }, 1500);
            }
        }, 400); // 400ms matches the CSS transition/animation time roughly
    }
}

// === UPDATE HEADER STATS ===
function updateHeaderStats() {
    const totalProblems = 250;
    const completed = completedProblems.size;
    const percentage = Math.round((completed / totalProblems) * 100);
    
    const headerProgress = document.getElementById('header-progress');
    const headerCompleted = document.getElementById('header-completed');
    
    if (headerProgress) {
        headerProgress.textContent = `${percentage}%`;
    }
    
    if (headerCompleted) {
        headerCompleted.textContent = completed;
    }
}

// === SIDEBAR FUNCTIONS ===
function initializeSidebar() {
    const moduleHeaders = document.querySelectorAll('.module-slab'); // Changed from .module-header to .module-slab based on Calc.html class
    moduleHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            const moduleNum = this.getAttribute('data-module');
            const lessonList = document.getElementById(`module-${moduleNum}-lessons`);
            
            if (lessonList) {
                // Toggle this module
                const isExpanded = this.classList.contains('expanded');
                
                // Close all other modules
                document.querySelectorAll('.module-slab').forEach(h => {
                    h.classList.remove('expanded');
                });
                document.querySelectorAll('.lesson-list').forEach(l => {
                    l.classList.remove('active');
                });
                
                // Open this one if it wasn't already open
                if (!isExpanded) {
                    this.classList.add('expanded');
                    lessonList.classList.add('active');
                }
            }
        });
    });
    
    // Expand Module 1 by default
    setTimeout(() => {
        const firstModule = document.querySelector('.module-slab[data-module="1"]');
        if (firstModule) {
            firstModule.click();
        }
    }, 100);
}

// === MODAL FUNCTIONS ===
function initializeModals() {
    const formulaBtn = document.getElementById('formula-sheet-btn');
    const formulaFloat = document.getElementById('formula-float-btn');
    const formulaModal = document.getElementById('formula-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (formulaBtn) {
        formulaBtn.addEventListener('click', function() {
            formulaModal.classList.add('active');
        });
    }
    
    if (formulaFloat) {
        formulaFloat.addEventListener('click', function() {
            formulaModal.classList.add('active');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            formulaModal.classList.remove('active');
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === formulaModal) {
            formulaModal.classList.remove('active');
        }
    });
}

// === PROBLEM LOADING ===
function loadProblems() {
    const container = document.getElementById('problems-container');
    if (!container) return;
    
    // Only generate if empty (prevents duplicates on multiple clicks)
    if (container.children.length === 0) {
        container.innerHTML = generateAllProblems();
    }
}

function generateAllProblems() {
    let html = '';
    
    // Module 1 Problems
    html += generateModuleProblems(1, 'Functions', [
        {id: 'M1-1-A1', title: 'Determine if Relation is a Function', 
         statement: 'Determine whether the following relation is a function: $$R = \\{(1, 2), (3, 4), (5, 6), (7, 8)\\}$$',
         answer: 'Yes, R is a function.',
         solution: 'Step 1: Check if any x-value is repeated. x-values: 1, 3, 5, 7 (all different)<br><br>Step 2: Apply function definition. Since no x-value appears more than once, each input maps to exactly one output.<br><br>Step 3: R is a function because it satisfies the definition.',
         difficulty: 'Easy', section: 'A', time: '2 min'},
        
        {id: 'M1-1-A2', title: 'Not a Function Example',
         statement: 'Determine whether the following relation is a function: $$S = \\{(2, 5), (2, 7), (3, 9)\\}$$',
         answer: 'No, S is not a function.',
         solution: 'The x-value 2 appears twice: (2, 5) and (2, 7). For x = 2, there are two different y-values. This violates the function definition. S is NOT a function.',
         difficulty: 'Easy', section: 'A', time: '2 min'},
        
        {id: 'M1-1-B1', title: 'Count Functions Between Sets',
         statement: 'Let $$A = \\{1, 2, 3\\}$$ and $$B = \\{4, 5, 6\\}$$. How many different functions can be defined from A to B?',
         answer: '27 functions',
         solution: 'For each element in A, we can choose any of the 3 elements in B.<br>Element 1: 3 choices<br>Element 2: 3 choices<br>Element 3: 3 choices<br>Total: $$3 \\times 3 \\times 3 = 27$$ functions',
         difficulty: 'Medium', section: 'B', time: '4 min'},
        
        {id: 'M1-2-A1', title: 'Function Addition',
         statement: 'Given $$f(x) = 2x + 3$$ and $$g(x) = x - 1$$, find $$(f + g)(x)$$.', 
         answer: '$(f + g)(x) = 3x + 2$',
         solution: '$$(f + g)(x) = f(x) + g(x) = (2x + 3) + (x - 1) = 3x + 2$$',
         difficulty: 'Easy', section: 'A', time: '3 min'},
        
        {id: 'M1-2-B1', title: 'Function Composition',
         statement: 'Let $$f(x) = x^2 - 4$$ and $$g(x) = x + 2$$. Find $$(f \\circ g)(x)$$ and simplify.',
         answer: '$(f \\circ g)(x) = x^2 + 4x$',
         solution: '$$(f \\circ g)(x) = f(g(x)) = f(x+2) = (x+2)^2 - 4 = x^2 + 4x + 4 - 4 = x^2 + 4x$$',
         difficulty: 'Medium', section: 'B', time: '5 min'},
    ]);
    
    // Module 2 Problems - Limits
    html += generateModuleProblems(2, 'Limits', [
        {id: 'M2-1-A1', title: 'Direct Substitution',
         statement: 'Evaluate $$\\lim_{x \\to 2} (3x + 1)$$ by direct substitution.',
         answer: '7',
         solution: 'Since $$f(x) = 3x + 1$$ is a polynomial, it\'s continuous everywhere.<br>$$\\lim_{x \\to 2} (3x + 1) = 3(2) + 1 = 7$$',
         difficulty: 'Easy', section: 'A', time: '3 min'},
        
        {id: 'M2-1-B1', title: 'Factoring to Evaluate Limit',
         statement: 'Evaluate $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$.',
         answer: '6',
         solution: 'Direct substitution gives 0/0 (indeterminate).<br>Factor: $$\\frac{(x-3)(x+3)}{x-3} = x + 3$$ (for $$x \\neq 3$$)<br>$$\\lim_{x \\to 3} (x + 3) = 6$$',
         difficulty: 'Medium', section: 'B', time: '5 min'},
        
        {id: 'M2-1-C1', title: 'Conjugate Method',
         statement: 'Evaluate $$\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}$$.',
         answer: '$\\frac{1}{2}$',
         solution: 'Multiply by conjugate:<br>$$\\frac{\\sqrt{1+x} - 1}{x} \\cdot \\frac{\\sqrt{1+x} + 1}{\\sqrt{1+x} + 1} = \\frac{x}{x(\\sqrt{1+x} + 1)} = \\frac{1}{\\sqrt{1+x} + 1}$$<br>$$\\lim_{x \\to 0} \\frac{1}{\\sqrt{1+x} + 1} = \\frac{1}{2}$$',
         difficulty: 'Hard', section: 'C', time: '8 min'},
        
        {id: 'M2-5-A1', title: 'One-Sided Limit',
         statement: 'For $$f(x) = \\begin{cases} x + 2 & x < 0 \\\\ x^2 & x \\geq 0 \\end{cases}$$, find $$\\lim_{x \\to 0^-} f(x)$$.',
         answer: '2',
         solution: 'Approaching from the left means $$x < 0$$, so use $$f(x) = x + 2$$.<br>$$\\lim_{x \\to 0^-} (x + 2) = 2$$',
         difficulty: 'Easy', section: 'A', time: '3 min'},
        
        {id: 'M2-6-A1', title: 'Infinite Limit',
         statement: 'Evaluate $$\\lim_{x \\to 0^+} \\frac{1}{x}$$.',
         answer: '$+\\infty$',
         solution: 'As $$x \\to 0^+$$, x is small and positive. $$\\frac{1}{x}$$ becomes large and positive. Therefore $$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$',
         difficulty: 'Easy', section: 'A', time: '3 min'},
        
        {id: 'M2-7-A1', title: 'Limit at Infinity',
         statement: 'Evaluate $$\\lim_{x \\to \\infty} \\frac{1}{x}$$.',
         answer: '0',
         solution: 'As $$x \\to \\infty$$, the denominator grows without bound while numerator is constant. Therefore $$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$$',
         difficulty: 'Easy', section: 'A', time: '3 min'},
        
        {id: 'M2-7-B1', title: 'Rational Function Limit',
         statement: 'Evaluate $$\\lim_{x \\to \\infty} \\frac{3x + 2}{2x - 1}$$.',
         answer: '$\\frac{3}{2}$',
         solution: 'Divide by highest power:<br>$$\\frac{3 + \\frac{2}{x}}{2 - \\frac{1}{x}} \\to \\frac{3 + 0}{2 - 0} = \\frac{3}{2}$$<br>Or use degree rule: degrees equal, so limit is ratio of leading coefficients.',
         difficulty: 'Medium', section: 'B', time: '5 min'},
    ]);
    
    // Module 3 Problems - Continuity
    html += generateModuleProblems(3, 'Continuity', [
        {id: 'M3-1-A1', title: 'Test Continuity',
         statement: 'Determine if $$f(x) = x^2 + 2x + 1$$ is continuous at $$x = 2$$.',
         answer: 'Yes, continuous at x = 2',
         solution: '✓ $$f(2) = 9$$ exists<br>✓ $$\\lim_{x \\to 2} f(x) = 9$$ exists<br>✓ $$\\lim_{x \\to 2} f(x) = f(2) = 9$$<br>All three conditions satisfied.',
         difficulty: 'Easy', section: 'A', time: '4 min'},
        
        {id: 'M3-1-B1', title: 'Discontinuous Piecewise',
         statement: 'Is $$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 3 & x = 1 \\\\ 2x & x > 1 \\end{cases}$$ continuous at $$x = 1$$?',
         answer: 'No, not continuous',
         solution: '$$f(1) = 3$$ ✓<br>$$\\lim_{x \\to 1^-} x^2 = 1$$<br>$$\\lim_{x \\to 1^+} 2x = 2$$<br>One-sided limits differ ($$1 \\neq 2$$), so limit doesn\'t exist. Not continuous.',
         difficulty: 'Medium', section: 'B', time: '6 min'},
        
        {id: 'M3-3-A1', title: 'Classify Discontinuity',
         statement: 'Classify the discontinuity of $$f(x) = \\frac{x^2 - 4}{x - 2}$$ at $$x = 2$$.',
         answer: 'Removable discontinuity',
         solution: '$$f(2)$$ is undefined (0/0)<br>But $$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$$ exists.<br>Since limit exists but function undefined, this is <strong>removable discontinuity</strong>.',
         difficulty: 'Easy', section: 'A', time: '5 min'},
    ]);
    
    return html;
}

function generateModuleProblems(moduleNum, moduleName, problems) {
    let html = `<div class="module-problems" data-module="${moduleNum}">
        <h3>Module ${moduleNum}: ${moduleName} (${problems.length} problems shown)</h3>`;
    
    problems.forEach(problem => {
        html += `
        <div class="problem-card" data-module="${moduleNum}" data-section="${problem.section}" data-difficulty="${problem.difficulty}">
            <div class="problem-header">
                <div>
                    <strong>Problem ${problem.id}:</strong> ${problem.title}
                </div>
                <div class="problem-meta">
                    <span class="badge badge-${problem.difficulty.toLowerCase()}">${problem.section} - ${problem.difficulty}</span>
                    <span class="time-badge" style="background:var(--slate-700); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;">${problem.time}</span>
                </div>
            </div>
            <div class="problem-body">
                <div class="problem-statement">
                    ${problem.statement}
                </div>
                <button class="solution-toggle" id="toggle-${problem.id}" onclick="toggleSolution('${problem.id}')">
                    Show Solution
                </button>
                <div class="solution-content" id="solution-${problem.id}">
                    <div class="answer-box">
                        <strong>Answer:</strong> ${problem.answer}
                    </div>
                    <div class="solution-steps">
                        <strong>Solution:</strong><br>
                        ${problem.solution}
                    </div>
                </div>
            </div>
        </div>`;
    });
    
    html += '</div>';
    return html;
}

// === FILTER FUNCTIONS ===
function applyFilters() {
    const moduleFilter = document.getElementById('module-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    
    const allProblems = document.querySelectorAll('.problem-card');
    
    allProblems.forEach(card => {
        const problemModule = card.getAttribute('data-module');
        const problemDifficulty = card.getAttribute('data-difficulty');
        const problemSection = card.getAttribute('data-section');
        
        let showCard = true;
        
        // Filter by module
        if (moduleFilter !== 'all' && problemModule !== moduleFilter) {
            showCard = false;
        }
        
        // Filter by difficulty
        if (difficultyFilter !== 'all') {
            if (difficultyFilter === 'A' && problemSection !== 'A') showCard = false;
            if (difficultyFilter === 'B' && problemSection !== 'B') showCard = false;
            if (difficultyFilter === 'C' && problemSection !== 'C') showCard = false;
            if (difficultyFilter === 'D' && problemSection !== 'D') showCard = false;
            if (difficultyFilter === 'E' && problemSection !== 'E') showCard = false;
        }
        
        // Show or hide card
        if (showCard) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function clearFilters() {
    document.getElementById('module-filter').value = 'all';
    document.getElementById('difficulty-filter').value = 'all';
    
    // Show all problems
    const allProblems = document.querySelectorAll('.problem-card');
    allProblems.forEach(card => {
        card.style.display = 'block';
    });
}

// === SOLUTION TOGGLE ===
function toggleSolution(problemId) {
    const solutionContent = document.getElementById(`solution-${problemId}`);
    const toggleBtn = document.getElementById(`toggle-${problemId}`);
    
    if (solutionContent && toggleBtn) {
        solutionContent.classList.toggle('visible');
        
        if (solutionContent.classList.contains('visible')) {
            toggleBtn.textContent = 'Hide Solution';
            markProblemComplete(problemId);
        } else {
            toggleBtn.textContent = 'Show Solution';
        }
    }
}

// === PROGRESS TRACKING ===
function markProblemComplete(problemId) {
    completedProblems.add(problemId);
    saveProgress();
    updateProgressDisplay();
}

function saveProgress() {
    localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
}

function loadProgress() {
    const saved = localStorage.getItem('completedProblems');
    if (saved) {
        completedProblems = new Set(JSON.parse(saved));
    }
}

function updateProgressDisplay() {
    const totalProblems = 250;
    const completed = completedProblems.size;
    const percentage = Math.round((completed / totalProblems) * 100);
    
    // Update overall progress
    const progressBar = document.getElementById('overall-progress');
    const completedCount = document.getElementById('completed-count');
    
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }
    
    if (completedCount) {
        completedCount.textContent = completed;
    }
    
    // Update module progress (simplified)
    updateModuleProgress(1, 50);  // Module 1: 50 problems
    updateModuleProgress(2, 135); // Module 2: 135 problems
    updateModuleProgress(3, 65);  // Module 3: 65 problems
    
    // Update header stats
    updateHeaderStats();
}

function updateModuleProgress(moduleNum, totalProblems) {
    // There are now multiple progress bars (header mini bars and progress dashboard bars)
    // We update the one in the sidebar and the dashboard
    
    const sidebarMini = document.getElementById(`mod${moduleNum}-mini`);
    const dashboardBar = document.getElementById(`module-${moduleNum}-progress`);
    
    // Calculate problems completed for this module
    const moduleCompleted = [...completedProblems].filter(id => 
        id.startsWith(`M${moduleNum}`)
    ).length;
    
    const percentage = Math.round((moduleCompleted / totalProblems) * 100);
    
    // Update sidebar mini progress bar
    if (sidebarMini) {
        sidebarMini.style.width = `${percentage}%`;
    }
    
    // Update dashboard progress bar
    if (dashboardBar) {
        dashboardBar.style.width = `${percentage}%`;
        const percentageText = dashboardBar.parentElement.nextElementSibling;
        if (percentageText) {
            percentageText.textContent = `${percentage}%`;
        }
    }
}

// === MASTERY TEST ===
document.addEventListener('DOMContentLoaded', function() {
    const startMasteryBtn = document.getElementById('start-mastery-btn');
    if (startMasteryBtn) {
        startMasteryBtn.addEventListener('click', startMasteryTest);
    }
});

function startMasteryTest() {
    if (completedProblems.size < 200) {
        alert('We recommend completing at least 200 practice problems before attempting the mastery test.');
        return;
    }
    
    const confirmed = confirm('This will start the 25-question mastery examination. Are you ready?');
    if (confirmed) {
        masteryTestStarted = true;
        loadMasteryTest();
    }
}

function loadMasteryTest() {
    const masteryContent = document.getElementById('mastery-test-content');
    if (masteryContent) {
        masteryContent.classList.remove('hidden');
        masteryContent.innerHTML = `
            <div class="mastery-test-container">
                <h3>Mastery Examination - 25 Questions</h3>
                <p><strong>Instructions:</strong> Answer all questions. Show your work. Time limit: 90 minutes.</p>
                
                <div class="test-question">
                    <h4>Question 1 [4 points]</h4>
                    <p>Given $$f(x) = 2x - 3$$ and $$g(x) = x^2 + 1$$, find:</p>
                    <p>a) $$(f \\circ g)(2)$$</p>
                    <p>b) $$(g \\circ f)(x)$$ in simplified form</p>
                    <p>c) The domain of $$\\frac{f}{g}(x)$$</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 2 [4 points]</h4>
                    <p>Determine whether each relation is a function:</p>
                    <p>a) $$\\{(1,2), (3,4), (1,5)\\}$$</p>
                    <p>b) $$y = \\sqrt{x - 4}$$</p>
                    <p>c) $$x^2 + y^2 = 16$$</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 3 [3 points]</h4>
                    <p>Find the inverse of $$f(x) = \\frac{2x + 1}{x - 3}$$ and verify your answer.</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 4 [4 points]</h4>
                    <p>Find the domain of:</p>
                    <p>a) $$f(x) = \\frac{x + 2}{x^2 - 5x + 6}$$</p>
                    <p>b) $$g(x) = \\sqrt{9 - x^2}$$</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 5 [3 points]</h4>
                    <p>Find k such that $$h(x) = \\begin{cases} x^2 - 1 & x \\leq 1 \\\\ 2x + k & x > 1 \\end{cases}$$ is continuous at $$x = 1$$.</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 6 [3 points]</h4>
                    <p>Evaluate:</p>
                    <p>a) $$\\lim_{x \\to 4} (3x^2 - 2x + 1)$$</p>
                    <p>b) $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 7 [5 points]</h4>
                    <p>Use the epsilon-delta definition to prove that $$\\lim_{x \\to 1} (3x + 2) = 5$$.</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 8 [4 points]</h4>
                    <p>Evaluate:</p>
                    <p>a) $$\\lim_{x \\to 3^+} \\frac{2x - 1}{x - 3}$$</p>
                    <p>b) $$\\lim_{x \\to 3^-} \\frac{2x - 1}{x - 3}$$</p>
                    <p>c) Does $$\\lim_{x \\to 3} \\frac{2x - 1}{x - 3}$$ exist?</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 9 [4 points]</h4>
                    <p>Evaluate $$\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$$.</p>
                </div>
                
                <div class="test-question">
                    <h4>Question 10 [4 points]</h4>
                    <p>Evaluate:</p>
                    <p>a) $$\\lim_{x \\to \\infty} \\frac{2x^2 + 3x - 1}{5x^2 - 7}$$</p>
                    <p>b) $$\\lim_{x \\to \\infty} \\frac{3x + 5}{x^2 - 1}$$</p>
                </div>
                
                <div style="margin-top: 2rem; padding: 1rem; background: #e8f4f8; border-radius: 6px;">
                    <p><strong>Note:</strong> This is a sample of 10 questions. The complete 25-question test with full solutions is available in the MASTERY_TEST.md document.</p>
                    <p>Questions 11-25 cover: limits at infinity, vertical asymptotes, continuity testing, discontinuity classification, and epsilon-delta proofs.</p>
                </div>
                
                <div style="margin-top: 2rem;">
                    <h4>Answer Key (First 10 Questions)</h4>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px;">
                        <p><strong>Q1:</strong> a) 7, b) 4x² - 12x + 10, c) All real numbers</p>
                        <p><strong>Q2:</strong> a) Not a function, b) Is a function, c) Not a function</p>
                        <p><strong>Q3:</strong> f⁻¹(x) = (3x + 1)/(x - 2)</p>
                        <p><strong>Q4:</strong> a) (-∞,2)∪(2,3)∪(3,∞), b) [-3,3]</p>
                        <p><strong>Q5:</strong> k = -2</p>
                        <p><strong>Q6:</strong> a) 41, b) 4</p>
                        <p><strong>Q7:</strong> Choose δ = ε/3 (see full proof in document)</p>
                        <p><strong>Q8:</strong> a) +∞, b) -∞, c) No</p>
                        <p><strong>Q9:</strong> 6</p>
                        <p><strong>Q10:</strong> a) 2/5, b) 0</p>
                    </div>
                </div>
            </div>
        `;
        
        // Trigger MathJax rendering
        if (window.MathJax) {
            MathJax.typesetPromise([masteryContent]);
        }
    }
}

// === RESET PROGRESS ===
document.addEventListener('DOMContentLoaded', function() {
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            const confirmed = confirm('Are you sure you want to reset all progress? This cannot be undone.');
            if (confirmed) {
                completedProblems.clear();
                saveProgress();
                updateProgressDisplay();
                alert('Progress has been reset.');
            }
        });
    }
});

// === EXPORT FUNCTIONS FOR INLINE USE ===
window.showSection = showSection;
window.navigateTo = navigateTo;
window.toggleSolution = toggleSolution;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.showFormulaSheet = showFormulaSheet;