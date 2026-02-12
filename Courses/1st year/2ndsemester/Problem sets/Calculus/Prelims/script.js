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
});

// === NAVIGATION FUNCTIONS ===
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
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
    }
}

// === SIDEBAR FUNCTIONS ===
function initializeSidebar() {
    const moduleHeaders = document.querySelectorAll('.module-header');
    moduleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const moduleNum = this.getAttribute('data-module');
            const lessonList = document.getElementById(`module-${moduleNum}-lessons`);
            
            // Toggle expansion
            this.classList.toggle('expanded');
            lessonList.classList.toggle('active');
        });
    });
    
    // Expand Module 1 by default
    const firstModule = document.querySelector('.module-header[data-module="1"]');
    if (firstModule) {
        firstModule.click();
    }
}

// === MODAL FUNCTIONS ===
function initializeModals() {
    const formulaBtn = document.getElementById('formula-sheet-btn');
    const formulaModal = document.getElementById('formula-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (formulaBtn) {
        formulaBtn.addEventListener('click', function() {
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
    
    // This is a placeholder - actual problems would be loaded from data
    container.innerHTML = '<p class="loading-text">Problems are defined in the separate problems document. Use the filter controls to navigate.</p>';
}

// === FILTER FUNCTIONS ===
function applyFilters() {
    const moduleFilter = document.getElementById('module-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    
    // Filter logic would be implemented here
    console.log('Applying filters:', moduleFilter, difficultyFilter);
}

function clearFilters() {
    document.getElementById('module-filter').value = 'all';
    document.getElementById('difficulty-filter').value = 'all';
    loadProblems();
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
}

function updateModuleProgress(moduleNum, totalProblems) {
    const progressBar = document.getElementById(`module-${moduleNum}-progress`);
    if (!progressBar) return;
    
    // Calculate problems completed for this module
    const moduleCompleted = [...completedProblems].filter(id => 
        id.startsWith(`M${moduleNum}`)
    ).length;
    
    const percentage = Math.round((moduleCompleted / totalProblems) * 100);
    progressBar.style.width = `${percentage}%`;
    
    const percentageText = progressBar.parentElement.nextElementSibling;
    if (percentageText) {
        percentageText.textContent = `${percentage}%`;
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
        masteryContent.innerHTML = '<p>Mastery test questions are defined in the separate mastery test document.</p>';
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

// === UTILITY FUNCTIONS ===
function navigateTo(section, subsection) {
    showSection(section);
    
    if (subsection) {
        setTimeout(() => {
            const element = document.getElementById(subsection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }
}

// === FORMULA SHEET ===
function showFormulaSheet() {
    const modal = document.getElementById('formula-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// === EXPORT FUNCTIONS FOR INLINE USE ===
window.showSection = showSection;
window.navigateTo = navigateTo;
window.toggleSolution = toggleSolution;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.showFormulaSheet = showFormulaSheet;
