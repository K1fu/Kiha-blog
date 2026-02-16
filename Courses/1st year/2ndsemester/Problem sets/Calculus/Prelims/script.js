// ============================================
// TECTONIC LEARNING SYSTEM - MODULAR CORE
// ============================================

// === GLOBAL STATE ===
let currentSection = 'overview';
let completedProblems = new Set();
let masteryTestStarted = false;
let curriculum = null; // Will be loaded from curriculum file

// === PAGE INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    // Wait for curriculum to be defined
    if (typeof CURRICULUM === 'undefined') {
        console.error('No curriculum file loaded! Please include a curriculum-*.js file before script.js');
        document.getElementById('overview-subtitle').textContent = 'Error: No curriculum loaded. Please include a curriculum file.';
        return;
    }
    
    curriculum = CURRICULUM;
    
    // Initialize the application
    initializePage();
    initializeNavigation();
    initializeSidebar();
    initializeModals();
    loadProgress();
    updateProgressDisplay();
    updateHeaderStats();
});

// === INITIALIZE PAGE WITH CURRICULUM ===
function initializePage() {
    // Set page title
    document.title = `${curriculum.name} | Tectonic System`;
    document.getElementById('page-title').textContent = `${curriculum.name} | Tectonic System`;
    
    // Set subject name in header
    document.getElementById('subject-name').textContent = curriculum.name;
    
    // Set overview content
    document.getElementById('overview-title').textContent = `Welcome to ${curriculum.name}`;
    document.getElementById('overview-subtitle').textContent = curriculum.description;
    
    // Generate overview statistics
    generateOverviewContent();
    
    // Generate sidebar modules
    generateSidebarModules();
    
    // Generate module content
    generateModulesContent();
    
    // Populate module filter
    populateModuleFilter();
    
    // Set mastery intro
    const masteryTest = curriculum.masteryTest;
    document.getElementById('mastery-intro').textContent = masteryTest.description;
    
    // Set mastery instructions
    const instructionsHTML = `
        <p style="margin-bottom: 1rem;"><strong>Instructions:</strong> ${masteryTest.instructions}</p>
        <p style="margin-bottom: 1rem;"><strong>Time Limit:</strong> ${masteryTest.timeLimit} minutes recommended</p>
        <p><strong>Passing Score:</strong> ${masteryTest.passingScore}/${masteryTest.totalQuestions} (${Math.round((masteryTest.passingScore/masteryTest.totalQuestions)*100)}%)</p>
    `;
    document.getElementById('mastery-instructions').innerHTML = instructionsHTML;
    
    // Generate formula sheet
    generateFormulaSheet();
    
    // Update total problems count
    const totalProblems = curriculum.modules.reduce((sum, mod) => 
        sum + mod.lessons.reduce((lsum, lesson) => lsum + lesson.problems.length, 0), 0
    );
    document.getElementById('total-problems').textContent = totalProblems;
}

// === GENERATE OVERVIEW CONTENT ===
function generateOverviewContent() {
    const totalModules = curriculum.modules.length;
    const totalLessons = curriculum.modules.reduce((sum, mod) => sum + mod.lessons.length, 0);
    const totalProblems = curriculum.modules.reduce((sum, mod) => 
        sum + mod.lessons.reduce((lsum, lesson) => lsum + lesson.problems.length, 0), 0
    );
    
    const html = `
        <div class="dash-grid">
            <div class="dash-card">
                <h3>Course Structure</h3>
                <p style="margin-bottom: 1rem;">${curriculum.overview || 'Master the fundamentals through structured learning.'}</p>
                <div style="display: grid; gap: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem;">
                    <div>📚 ${totalModules} Modules</div>
                    <div>📖 ${totalLessons} Lessons</div>
                    <div>🎯 ${totalProblems} Practice Problems</div>
                    <div>⚡ ${curriculum.masteryTest.totalQuestions} Mastery Questions</div>
                </div>
            </div>
            
            <div class="dash-card">
                <h3>Getting Started</h3>
                <ol style="line-height: 2; margin-left: 1.5rem;">
                    <li>Navigate through modules sequentially</li>
                    <li>Complete practice problems for each lesson</li>
                    <li>Track your progress in the dashboard</li>
                    <li>Take the mastery test when ready</li>
                </ol>
            </div>
        </div>
        
        <div style="margin-top: 3rem;">
            <h3 style="color: var(--cyan-accent); margin-bottom: 1.5rem;">Module Overview</h3>
            <div class="dash-grid">
                ${curriculum.modules.map((module, idx) => {
                    const lessonCount = module.lessons.length;
                    const problemCount = module.lessons.reduce((sum, lesson) => sum + lesson.problems.length, 0);
                    return `
                        <div class="dash-card">
                            <h4 style="color: var(--cyan-accent); margin-bottom: 1rem;">${module.icon} ${module.name}</h4>
                            <p style="color: var(--text-muted); margin-bottom: 1rem;">${module.description}</p>
                            <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text-muted);">
                                ${lessonCount} Lessons • ${problemCount} Problems
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('overview-content').innerHTML = html;
}

// === GENERATE SIDEBAR MODULES ===
function generateSidebarModules() {
    const html = curriculum.modules.map((module, moduleIdx) => {
        const moduleNum = moduleIdx + 1;
        const problemCount = module.lessons.reduce((sum, lesson) => sum + lesson.problems.length, 0);
        
        const lessonsHTML = module.lessons.map((lesson, lessonIdx) => {
            const lessonNum = lessonIdx + 1;
            const lessonId = `lesson-${moduleNum}-${lessonNum}`;
            return `<a href="#${lessonId}" class="lesson-link">${lesson.name}</a>`;
        }).join('');
        
        return `
            <div class="module-slab" data-module="${moduleNum}">
                <h4>${module.icon} Module ${moduleNum}</h4>
                <div class="module-meta">${module.lessons.length} Lessons • ${problemCount} Problems</div>
                <div class="mini-progress-bar">
                    <div class="mini-progress" id="mod${moduleNum}-mini" style="width: 0%;"></div>
                </div>
            </div>
            <div class="lesson-list" id="module-${moduleNum}-lessons">
                ${lessonsHTML}
            </div>
        `;
    }).join('');
    
    document.getElementById('sidebar-modules').innerHTML += html;
    
    // Add event listeners for lesson links
    const lessonLinks = document.querySelectorAll('.lesson-link');
    lessonLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            navigateTo('modules', targetId);
        });
    });
}

// === GENERATE MODULES CONTENT ===
function generateModulesContent() {
    const html = curriculum.modules.map((module, moduleIdx) => {
        const moduleNum = moduleIdx + 1;
        const problemCount = module.lessons.reduce((sum, lesson) => sum + lesson.problems.length, 0);
        
        const lessonsHTML = module.lessons.map((lesson, lessonIdx) => {
            const lessonNum = lessonIdx + 1;
            const lessonId = `lesson-${moduleNum}-${lessonNum}`;
            
            return `
                <div class="lesson-slab" id="${lessonId}">
                    <span class="lesson-tag">${lesson.tags.join(' • ')}</span>
                    <h3>${moduleNum}.${lessonNum} ${lesson.name}</h3>
                    ${lesson.content}
                    <button class="btn-tectonic" onclick="navigateTo('problems')">
                        Practice Problems (${lesson.problems.length})
                    </button>
                </div>
            `;
        }).join('');
        
        return `
            <div class="module-title-bar" style="${moduleIdx > 0 ? 'margin-top: 4rem;' : ''}">
                <h3>${module.icon} Module ${moduleNum}: ${module.name}</h3>
                <span class="module-stats">${module.lessons.length} Lessons • ${problemCount} Problems</span>
            </div>
            <div class="lesson-grid">
                ${lessonsHTML}
            </div>
        `;
    }).join('');
    
    document.getElementById('modules-content').innerHTML = html;
}

// === POPULATE MODULE FILTER ===
function populateModuleFilter() {
    const select = document.getElementById('module-filter');
    const options = curriculum.modules.map((module, idx) => 
        `<option value="${idx + 1}">Module ${idx + 1}: ${module.name}</option>`
    ).join('');
    select.innerHTML = '<option value="all">All Modules</option>' + options;
}

// === GENERATE FORMULA SHEET ===
function generateFormulaSheet() {
    if (!curriculum.formulaSheet || curriculum.formulaSheet.length === 0) {
        document.getElementById('formula-content').innerHTML = '<p>No formula sheet available for this curriculum.</p>';
        return;
    }
    
    const html = curriculum.formulaSheet.map(section => `
        <div class="formula-section">
            <h3>${section.title}</h3>
            <div class="math-block">
                ${section.formulas.join('<br><br>')}
            </div>
        </div>
    `).join('');
    
    document.getElementById('formula-content').innerHTML = html;
}

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
        
        // Trigger MathJax
        if (window.MathJax) {
            setTimeout(() => {
                MathJax.typesetPromise([targetSection]);
            }, 100);
        }
    }
}

function navigateTo(section, subsection) {
    showSection(section);
    
    if (subsection) {
        setTimeout(() => {
            const element = document.getElementById(subsection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                element.style.borderColor = 'var(--cyan-accent)';
                setTimeout(() => {
                    element.style.borderColor = '';
                }, 1500);
            }
        }, 400);
    }
}

// === UPDATE HEADER STATS ===
function updateHeaderStats() {
    const totalProblems = curriculum.modules.reduce((sum, mod) => 
        sum + mod.lessons.reduce((lsum, lesson) => lsum + lesson.problems.length, 0), 0
    );
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
    const moduleHeaders = document.querySelectorAll('.module-slab');
    moduleHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            const moduleNum = this.getAttribute('data-module');
            const lessonList = document.getElementById(`module-${moduleNum}-lessons`);
            
            if (lessonList) {
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
    const formulaFloat = document.getElementById('formula-float-btn');
    const formulaModal = document.getElementById('formula-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (formulaFloat) {
        formulaFloat.addEventListener('click', function() {
            formulaModal.classList.add('active');
            // Trigger MathJax rendering for formulas
            if (window.MathJax) {
                setTimeout(() => {
                    MathJax.typesetPromise([formulaModal]);
                }, 100);
            }
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
    
    if (container.children.length === 0) {
        container.innerHTML = generateAllProblems();
        
        // Trigger MathJax
        if (window.MathJax) {
            setTimeout(() => {
                MathJax.typesetPromise([container]);
            }, 100);
        }
    }
}

function generateAllProblems() {
    let html = '';
    
    curriculum.modules.forEach((module, moduleIdx) => {
        const moduleNum = moduleIdx + 1;
        
        module.lessons.forEach((lesson, lessonIdx) => {
            lesson.problems.forEach((problem, problemIdx) => {
                const problemId = `M${moduleNum}-${lessonIdx + 1}-${problem.difficulty}${problemIdx + 1}`;
                const isCompleted = completedProblems.has(problemId);
                
                html += `
                    <div class="problem-card" data-module="${moduleNum}" data-difficulty="${problem.difficulty}">
                        <div class="problem-header">
                            <span class="problem-id">${problemId}</span>
                            <span class="problem-difficulty difficulty-${problem.difficulty}">Level ${problem.difficulty}</span>
                        </div>
                        <h3>${problem.title}</h3>
                        <div class="problem-statement">${problem.statement}</div>
                        <button class="btn-tectonic" onclick="toggleSolution('${problemId}')">
                            ${isCompleted ? '✓ View Solution' : 'Show Solution'}
                        </button>
                        <div id="solution-${problemId}" class="solution-container hidden">
                            <strong>Solution:</strong>
                            <div style="margin-top: 1rem;">${problem.solution}</div>
                        </div>
                    </div>
                `;
            });
        });
    });
    
    return html;
}

function toggleSolution(problemId) {
    const solutionDiv = document.getElementById(`solution-${problemId}`);
    const button = event.target;
    
    if (solutionDiv.classList.contains('hidden')) {
        solutionDiv.classList.remove('hidden');
        button.textContent = '✓ Hide Solution';
        
        // Mark as completed
        if (!completedProblems.has(problemId)) {
            completedProblems.add(problemId);
            saveProgress();
            updateProgressDisplay();
            updateHeaderStats();
        }
        
        // Trigger MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([solutionDiv]);
        }
    } else {
        solutionDiv.classList.add('hidden');
        button.textContent = '✓ View Solution';
    }
}

// === FILTERING ===
function applyFilters() {
    const moduleFilter = document.getElementById('module-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    
    const problems = document.querySelectorAll('.problem-card');
    
    problems.forEach(problem => {
        const problemModule = problem.getAttribute('data-module');
        const problemDifficulty = problem.getAttribute('data-difficulty');
        
        let show = true;
        
        if (moduleFilter !== 'all' && problemModule !== moduleFilter) {
            show = false;
        }
        
        if (difficultyFilter !== 'all' && problemDifficulty !== difficultyFilter) {
            show = false;
        }
        
        problem.style.display = show ? 'block' : 'none';
    });
}

function clearFilters() {
    document.getElementById('module-filter').value = 'all';
    document.getElementById('difficulty-filter').value = 'all';
    applyFilters();
}

// === PROGRESS TRACKING ===
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
    const totalProblems = curriculum.modules.reduce((sum, mod) => 
        sum + mod.lessons.reduce((lsum, lesson) => lsum + lesson.problems.length, 0), 0
    );
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
    
    // Update module progress
    updateModuleProgressDisplay();
    
    // Update header stats
    updateHeaderStats();
}

function updateModuleProgressDisplay() {
    const breakdownHTML = curriculum.modules.map((module, moduleIdx) => {
        const moduleNum = moduleIdx + 1;
        const totalProblems = module.lessons.reduce((sum, lesson) => sum + lesson.problems.length, 0);
        const moduleCompleted = [...completedProblems].filter(id => 
            id.startsWith(`M${moduleNum}-`)
        ).length;
        const percentage = Math.round((moduleCompleted / totalProblems) * 100);
        
        // Update sidebar mini progress
        const sidebarMini = document.getElementById(`mod${moduleNum}-mini`);
        if (sidebarMini) {
            sidebarMini.style.width = `${percentage}%`;
        }
        
        return `
            <div class="module-prog-item">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.85rem;">Module ${moduleNum}: ${module.name}</span>
                <div class="mini-progress-bar">
                    <div class="mini-progress" style="width: ${percentage}%;"></div>
                </div>
                <span class="prog-percentage">${percentage}%</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('module-progress-breakdown').innerHTML = breakdownHTML;
}

// === MASTERY TEST ===
document.addEventListener('DOMContentLoaded', function() {
    const startMasteryBtn = document.getElementById('start-mastery-btn');
    if (startMasteryBtn) {
        startMasteryBtn.addEventListener('click', startMasteryTest);
    }
});

function startMasteryTest() {
    const totalProblems = curriculum.modules.reduce((sum, mod) => 
        sum + mod.lessons.reduce((lsum, lesson) => lsum + lesson.problems.length, 0), 0
    );
    const recommendedCompletion = Math.floor(totalProblems * 0.8);
    
    if (completedProblems.size < recommendedCompletion) {
        alert(`We recommend completing at least ${recommendedCompletion} practice problems before attempting the mastery test.`);
        return;
    }
    
    const confirmed = confirm(`This will start the ${curriculum.masteryTest.totalQuestions}-question mastery examination. Are you ready?`);
    if (confirmed) {
        masteryTestStarted = true;
        loadMasteryTest();
    }
}

function loadMasteryTest() {
    const masteryContent = document.getElementById('mastery-test-content');
    if (masteryContent) {
        masteryContent.classList.remove('hidden');
        
        const questionsHTML = curriculum.masteryTest.questions.map((q, idx) => `
            <div class="test-question">
                <h4>Question ${idx + 1} [${q.points} points]</h4>
                ${q.question}
            </div>
        `).join('');
        
        const answersHTML = curriculum.masteryTest.questions.map((q, idx) => 
            `<p><strong>Q${idx + 1}:</strong> ${q.answer}</p>`
        ).join('');
        
        masteryContent.innerHTML = `
            <div class="mastery-test-container">
                <h3>Mastery Examination - ${curriculum.masteryTest.totalQuestions} Questions</h3>
                <p><strong>Instructions:</strong> ${curriculum.masteryTest.instructions}</p>
                
                ${questionsHTML}
                
                <div style="margin-top: 2rem;">
                    <h4>Answer Key</h4>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px;">
                        ${answersHTML}
                    </div>
                </div>
            </div>
        `;
        
        // Trigger MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([masteryContent]);
        }
    }
}

// === EXPORT FUNCTIONS FOR INLINE USE ===
window.showSection = showSection;
window.navigateTo = navigateTo;
window.toggleSolution = toggleSolution;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;