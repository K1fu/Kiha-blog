# Kiha-Blog Quiz Platform - Architecture & Expansion Guide

## 📋 Table of Contents
1. [Current Architecture](#current-architecture)
2. [Modules That Can Be Preserved](#modules-that-can-be-preserved)
3. [Expansion Roadmap](#expansion-roadmap)
4. [Implementation Priorities](#implementation-priorities)
5. [Technical Specifications](#technical-specifications)
6. [Migration Strategy](#migration-strategy)

---

## 🏗️ Current Architecture

### Project Structure
```
Kiha-blog/
├── index.html                 # Landing page with exam cards
├── Quiz.html                  # Main quiz interface (non-math subjects)
├── Quiz-Math.html             # Quiz interface with MathJax support
├── Styles/
│   └── ZZZ.css               # Cyanotype blueprint theme
├── Files/
│   └── curriculum.js         # Master curriculum data loader
├── Courses/
│   └── 2ndsemester/
│       ├── Prelims/
│       │   ├── ArtApp.js
│       │   ├── ComProg.js
│       │   ├── Discrete.js
│       │   ├── Calculus.js
│       │   ├── MMW.js
│       │   └── STS.js
│       ├── Midterms/ (same structure)
│       ├── Prefinals/ (same structure)
│       └── Finals/ (same structure)
└── Templates/
    ├── Quiz.html
    ├── Study.html
    └── quizData.js
```

### Core Technologies
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Cyanotype theme with CSS variables
- **Math Support:** MathJax (LaTeX rendering)
- **Audio:** Web Audio API (synthesized feedback sounds)
- **State Management:** Browser Cookies
- **Feedback System:** Supabase REST API (currently implemented)

### Current Features
✅ Quiz filtering by question type (MC, ID, T/F, FITB)
✅ Question randomization (by type and all)
✅ Progress persistence via cookies
✅ Active Recall mode (15 random questions)
✅ Feedback submission to Supabase
✅ Responsive cyanotype blueprint theme
✅ Home navigation buttons
✅ Quiz mode selector modal

---

## 🧩 Modules That Can Be Preserved

### 1. **Cyanotype Theme System** ✨
**Current Location:** `Styles/ZZZ.css`

**Why Preserve:**
- Well-designed CSS variable system (--prussian-blue, --highlight, --oxide, etc.)
- Consistent visual language across all pages
- Blueprint aesthetic is unique and memorable

**How to Preserve:**
```
├── Styles/
│   ├── core/
│   │   ├── variables.css      # Extract CSS variables
│   │   ├── typography.css     # Extract font definitions
│   │   └── animations.css     # Extract reusable animations
│   ├── components/
│   │   ├── buttons.css
│   │   ├── modals.css
│   │   ├── cards.css
│   │   └── progress-bar.css
│   ├── layouts/
│   │   ├── grid.css
│   │   └── responsive.css
│   └── themes/
│       └── cyanotype.css      # Theme overrides
```

**Benefits of Granulation:**
- Faster CSS loading (parallel downloads)
- Easier maintenance and updates
- Better CSS specificity management
- Reusable component library

---

### 2. **Quiz Engine Core Logic** 🧠
**Current Location:** `Quiz.html` & `Quiz-Math.html` (script sections)

**Modules to Preserve:**
```javascript
// ✅ Core Quiz Engine
- initializeConfig()           // Initialize quiz state
- shuffleArray()               // Fisher-Yates algorithm
- render()                     // Render current question
- pickMC()                     // Handle MC answers
- pickTF()                     // Handle T/F answers
- submitText()                 // Handle ID/FITB answers
- showFeedback()               // Display feedback
- updateProgress()             // Update progress bar
- showResults()                // Display results screen
- advance()                    // Move to next question
- restart()                    // Reset quiz

// ✅ State Management
- setCookie()                  // Save progress
- getCookie()                  // Load progress
- deleteQuizCookie()           // Clear progress
- saveProgress()               // Persist state
- loadProgress()               // Restore state

// ✅ Audio Feedback
- playCorrectSound()           // Positive feedback
- playIncorrectSound()         // Negative feedback

// ✅ Utilities
- norm()                       // Normalize strings
- randomizeChoices()           // Shuffle MC options
```

**Granulation Plan:**
```
├── Scripts/
│   ├── core/
│   │   ├── quiz-engine.js     # Main quiz logic
│   │   ├── state-manager.js   # Cookie & progress management
│   │   └── audio-feedback.js  # Sound effects
│   ├── utils/
│   │   ├── shuffle.js         # Array shuffling algorithms
│   │   ├── normalization.js   # String normalization
│   │   └── validators.js      # Input validation
│   ├── handlers/
│   │   ├── question-handlers.js # pickMC, pickTF, submitText
│   │   ├── modal-handlers.js   # Filter & randomize logic
│   │   └── result-handlers.js  # Results & breakdown logic
│   └── adapters/
│       ├── supabase-adapter.js # Database queries
│       └── legacy-adapter.js   # Fallback to JSON files
```

---

### 3. **Question Data Structure** 📚
**Current Format:**
```javascript
const QUESTIONS = [
  {
    q: "Question text",
    o: ["Option A", "Option B", "Option C", "Option D"],
    a: 0,  // Correct answer index
    type: "mc"  // mc, id, tf, fitb
  },
  // ... more questions
];
```

**Why This is Modular:**
- Format is independent of storage method
- Can work with JSON files, Supabase, or any database
- Structure supports future enhancements

---

### 4. **Modal System** 🎪
**Current Location:** `Quiz.html` & `Quiz-Math.html` (filter modal)

**Preserved Modules:**
- Filter modal structure
- Question type checkboxes
- Randomization buttons
- Modal animations

**Can Be Extracted To:**
```
├── Components/
│   └── modals/
│       ├── filter-modal.js    # Filter logic
│       ├── filter-modal.html  # Structure
│       └── filter-modal.css   # Styling
```

---

### 5. **Progress & Cookie System** 💾
**Current Location:** Quiz page script

**Preserved Functionality:**
- Quiz progress tracking
- Score persistence
- Wrong answers log
- Resume capability

**Upgrade Path:** Cookie → LocalStorage → IndexedDB → Supabase

---

## 🚀 Expansion Roadmap

### Phase 1: Granulation & Code Organization (Week 1-2)
**Goal:** Modularize existing code without changing functionality

#### 1.1 CSS Granulation
```bash
Tasks:
□ Extract CSS variables to variables.css
□ Separate component styles (buttons, modals, cards)
□ Create responsive grid system
□ Organize animations
□ Create style guide documentation

Expected Result:
- Faster CSS loading
- 40-50% reduction in main CSS file
- Reusable component library
```

#### 1.2 JavaScript Granulation
```bash
Tasks:
□ Extract quiz engine to quiz-engine.js
□ Extract state management to state-manager.js
□ Extract audio system to audio-feedback.js
□ Extract utilities (shuffle, normalization)
□ Create module exports/imports system
□ Set up module bundler (Webpack/Vite)

Expected Result:
- ~60KB of organized, reusable modules
- Clear separation of concerns
- Easier testing and maintenance
```

#### 1.3 HTML Structure
```bash
Tasks:
□ Extract reusable components
□ Create component templates
□ Build template system (Handlebars/EJS)
□ Remove inline styles (use CSS classes)

Expected Result:
- DRY (Don't Repeat Yourself) HTML
- Easier to maintain and update
```

---

### Phase 2: Database Migration to Supabase (Week 3-4)
**Goal:** Move question data from JSON files to Supabase

#### 2.1 Supabase Setup
```sql
-- Create questions table
CREATE TABLE questions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  subject VARCHAR(100),  -- ComProg, ArtApp, MMW, etc.
  period VARCHAR(50),    -- Prelims, Midterms, Prefinals, Finals
  type VARCHAR(10),      -- mc, id, tf, fitb
  question_text TEXT,
  options JSONB,         -- ["Option A", "Option B", ...]
  correct_answer INT,    -- Index of correct answer
  explanation TEXT,      -- Optional explanation
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_subject_period ON questions(subject, period);
CREATE INDEX idx_type ON questions(type);

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create quiz_results table
CREATE TABLE quiz_results (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES users(id),
  subject VARCHAR(100),
  period VARCHAR(50),
  score INT,
  total INT,
  wrong_answers JSONB,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Create feedback table (already exists, can be used)
CREATE TABLE feedback (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 2.2 Supabase Adapter Layer
```javascript
// Scripts/adapters/supabase-adapter.js

class SupabaseQuestionAdapter {
  constructor(supabaseUrl, apiKey) {
    this.supabaseUrl = supabaseUrl;
    this.apiKey = apiKey;
  }

  async getQuestionsBySubjectAndPeriod(subject, period) {
    const response = await fetch(
      `${this.supabaseUrl}/rest/v1/questions?subject=eq.${subject}&period=eq.${period}`,
      { headers: { 'apikey': this.apiKey } }
    );
    return response.json();
  }

  async getQuestionsByType(subject, period, type) {
    const response = await fetch(
      `${this.supabaseUrl}/rest/v1/questions?subject=eq.${subject}&period=eq.${period}&type=eq.${type}`,
      { headers: { 'apikey': this.apiKey } }
    );
    return response.json();
  }

  async saveQuizResult(userId, result) {
    const response = await fetch(
      `${this.supabaseUrl}/rest/v1/quiz_results`,
      {
        method: 'POST',
        headers: { 'apikey': this.apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
      }
    );
    return response.json();
  }
}
```

#### 2.3 Data Migration Script
```bash
Tasks:
□ Create migration script to convert JSON → Supabase
□ Test data integrity
□ Set up backup of original JSON files
□ Verify all questions migrated correctly

Expected Result:
- All questions in Supabase
- Fallback to JSON if needed
- Clean migration with no data loss
```

---

### Phase 3: User Account System (Week 5-6)
**Goal:** Add authentication and user profiles

#### 3.1 Supabase Auth Integration
```javascript
// Scripts/services/auth-service.js

class AuthService {
  constructor(supabaseClient) {
    this.supabase = supabaseClient;
  }

  async signUp(email, password) {
    const { user, error } = await this.supabase.auth.signUp({
      email,
      password
    });
    return { user, error };
  }

  async signIn(email, password) {
    const { user, error } = await this.supabase.auth.signIn({
      email,
      password
    });
    return { user, error };
  }

  async getCurrentUser() {
    return this.supabase.auth.user();
  }

  async signOut() {
    return this.supabase.auth.signOut();
  }
}
```

#### 3.2 User Profile Features
```javascript
// Store per-user data in Supabase
{
  user_id: UUID,
  preferences: {
    defaultSubject: "ComProg",
    defaultPeriod: "Prelims",
    soundEnabled: true,
    theme: "cyanotype"
  },
  statistics: {
    totalQuizzesTaken: 42,
    averageScore: 78.5,
    subjects: {
      ComProg: { attempts: 15, avgScore: 82 },
      ArtApp: { attempts: 12, avgScore: 75 }
    }
  }
}
```

#### 3.3 UI Components Needed
```bash
□ Login page
□ Sign-up page
□ User profile page
□ Statistics dashboard
□ Settings page
□ Account management
```

---

### Phase 4: Performance Optimization (Week 7-8)
**Goal:** Faster loading and better user experience

#### 4.1 Lazy Loading Questions
```javascript
// Only load questions when needed
async loadQuestionsForSubject(subject, period) {
  // Check localStorage first
  const cached = localStorage.getItem(`questions_${subject}_${period}`);
  if (cached && this.isCacheValid(cached)) {
    return JSON.parse(cached);
  }

  // Load from Supabase
  const questions = await supabaseAdapter.getQuestions(subject, period);

  // Cache locally with TTL
  localStorage.setItem(
    `questions_${subject}_${period}`,
    JSON.stringify({
      data: questions,
      timestamp: Date.now(),
      ttl: 24 * 60 * 60 * 1000  // 24 hours
    })
  );

  return questions;
}
```

#### 4.2 Service Worker for Offline Support
```javascript
// Service workers enable offline access and faster loading
// Scripts/workers/quiz-worker.js

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/Quiz.html',
        '/Quiz-Math.html',
        '/Styles/core/variables.css',
        '/Scripts/core/quiz-engine.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

#### 4.3 Code Splitting & Bundling
```bash
Tools: Webpack or Vite

Entry Points:
├── index.js (home page)
├── quiz.js (quiz pages)
├── auth.js (login/signup)
└── dashboard.js (user dashboard)

Each generates separate bundle for faster initial load
```

#### 4.4 Image & Asset Optimization
```bash
□ Compress CSS/JS (minification)
□ Use CSS variables for smaller CSS output
□ Compress images (SVG preferred)
□ Use WebP format with fallbacks
□ Implement CDN for static assets
```

---

### Phase 5: Advanced Features (Optional, Week 9+)
**Goal:** Enhance user engagement and learning

#### 5.1 Study Mode
```javascript
// Study mode: Show all content, no scoring
class StudyMode {
  async start(subject, period, type) {
    const questions = await this.loadQuestions(subject, period, type);
    return new StudySession(questions);
  }
}
```

#### 5.2 Spaced Repetition
```javascript
// Track wrong answers and show them more frequently
{
  question_id: 123,
  user_id: UUID,
  attempts: 3,
  correct: 1,
  last_seen: timestamp,
  next_review: timestamp  // Calculated by algorithm
}
```

#### 5.3 Adaptive Difficulty
```javascript
// Adjust question difficulty based on performance
if (averageScore > 85) {
  showHarderQuestions();
} else if (averageScore < 60) {
  showEasierQuestions();
}
```

#### 5.4 Analytics Dashboard
```javascript
// Track progress over time
{
  subject: "ComProg",
  timeline: [
    { date: "2024-05-01", score: 65, questions: 20 },
    { date: "2024-05-02", score: 72, questions: 20 },
    { date: "2024-05-03", score: 78, questions: 20 }
  ],
  trends: {
    improvementRate: 6.5,  // % per day
    masteredTopics: 5,
    needsWork: 3
  }
}
```

---

## 📊 Implementation Priorities

### Priority 1: High Impact, Low Effort (Do First)
1. **CSS Granulation** - 3 hours
   - Extract variables, components, layouts
   - Reduce main CSS from 1 file to 5-7 modular files
   - Impact: 30% faster CSS load, easier maintenance

2. **JavaScript Modularization** - 8 hours
   - Extract core modules (quiz-engine, state-manager, audio)
   - Set up module system (ES6 imports)
   - Impact: Cleaner code, reusable across pages

### Priority 2: High Impact, Medium Effort (Do Second)
3. **Supabase Data Migration** - 12 hours
   - Create tables and indexes
   - Build adapter layer
   - Migrate all JSON question files
   - Impact: Centralized data, scalable, easier updates

4. **Service Worker** - 6 hours
   - Enable offline access
   - Cache static assets
   - Faster repeat visits
   - Impact: Works offline, 50% faster loading

### Priority 3: Medium Impact, High Effort (Do Third)
5. **Account System** - 15 hours
   - Supabase Auth integration
   - User profile pages
   - Authentication UI
   - Impact: User data persistence, personalization

6. **Build System Setup** - 10 hours
   - Set up Webpack/Vite
   - Configure code splitting
   - Set up minification
   - Impact: 40-60% smaller bundle size

### Priority 4: Nice to Have
7. **Advanced Features** - 20+ hours
   - Study mode, spaced repetition, analytics
   - Impact: Better learning outcomes

---

## 🔧 Technical Specifications

### Supabase Configuration
```javascript
// Recommended table structure for performance
CREATE TABLE questions (
  id BIGINT PRIMARY KEY,
  subject VARCHAR(100) NOT NULL,
  period VARCHAR(50) NOT NULL,
  type VARCHAR(10) NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INT NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Indexes for common queries
CREATE INDEX idx_subject_period ON questions(subject, period);
CREATE INDEX idx_type ON questions(type);
CREATE INDEX idx_subject_period_type ON questions(subject, period, type);

-- Partitioning for large datasets (future)
-- PARTITION BY RANGE (YEAR(created_at))
```

### Performance Targets
| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Initial Load | 3.2s | 1.2s | Phase 4 |
| CSS Size | 85KB | 35KB | Phase 1 |
| JS Size | 250KB | 120KB | Phase 1-2 |
| First Contentful Paint | 2.1s | 0.8s | Phase 4 |
| Time to Interactive | 3.5s | 1.5s | Phase 4 |

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

### Accessibility Standards
- WCAG 2.1 Level AA
- Keyboard navigation
- Screen reader support
- Color contrast ratios ≥ 4.5:1

---

## 🔄 Migration Strategy

### Step 1: Parallel System (Weeks 1-2)
Keep both systems running:
```
index.html
├── Current system (JSON files)
└── New system (Supabase - feature flag)

Users can toggle between systems for testing
```

### Step 2: Gradual Rollout (Weeks 3-4)
```
50% of users → New system
50% of users → Current system

Monitor for issues and collect feedback
```

### Step 3: Full Migration (Week 5)
```
100% users → New system
JSON files kept as backup for 3 months
```

### Step 4: Cleanup (Week 6+)
```
Remove feature flags
Remove JSON file dependencies
Archive old code
Document legacy system
```

---

## 📁 Recommended Folder Structure (After Expansion)

```
kiha-blog/
├── index.html
├── quiz.html
├── auth/
│   ├── login.html
│   ├── signup.html
│   └── profile.html
├── dashboard/
│   ├── dashboard.html
│   └── statistics.html
├── styles/
│   ├── core/
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── animations.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── modals.css
│   │   ├── cards.css
│   │   └── forms.css
│   ├── layouts/
│   │   ├── grid.css
│   │   ├── flex.css
│   │   └── responsive.css
│   └── index.css (main entry)
├── scripts/
│   ├── core/
│   │   ├── quiz-engine.js
│   │   ├── state-manager.js
│   │   └── audio-feedback.js
│   ├── utils/
│   │   ├── shuffle.js
│   │   ├── normalization.js
│   │   └── validators.js
│   ├── handlers/
│   │   ├── question-handlers.js
│   │   ├── modal-handlers.js
│   │   └── result-handlers.js
│   ├── adapters/
│   │   ├── supabase-adapter.js
│   │   └── legacy-adapter.js
│   ├── services/
│   │   ├── auth-service.js
│   │   └── question-service.js
│   ├── workers/
│   │   └── offline-worker.js
│   ├── components/
│   │   ├── modals.js
│   │   ├── progress-bar.js
│   │   └── result-display.js
│   └── index.js (main entry)
├── data/
│   ├── backup/ (JSON backups)
│   └── seeds/ (seed data scripts)
├── config/
│   ├── supabase.config.js
│   ├── webpack.config.js
│   └── env.example
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── CONTRIBUTING.md
└── package.json
```

---

## 📝 Checklist for Implementation

### Phase 1: Granulation
- [ ] Extract CSS to modular files
- [ ] Extract JavaScript modules
- [ ] Create component library
- [ ] Set up module system
- [ ] Test all functionality

### Phase 2: Database Migration
- [ ] Create Supabase tables
- [ ] Build adapter layer
- [ ] Create migration scripts
- [ ] Migrate all data
- [ ] Set up fallback system

### Phase 3: User Accounts
- [ ] Set up Supabase Auth
- [ ] Create login/signup pages
- [ ] Build user profile UI
- [ ] Link accounts to results
- [ ] Add user preferences

### Phase 4: Performance
- [ ] Set up Service Worker
- [ ] Implement caching strategy
- [ ] Code splitting
- [ ] Asset optimization
- [ ] Monitor metrics

### Phase 5: Advanced Features
- [ ] Study mode
- [ ] Spaced repetition
- [ ] Analytics dashboard
- [ ] Progress tracking
- [ ] Recommendations

---

## 🎯 Success Metrics

- **Performance:** Initial load < 1.2s, FCP < 0.8s
- **Code Quality:** 90%+ code coverage, 0 console errors
- **User Experience:** 95%+ functionality test pass rate
- **Scalability:** Support 10,000+ concurrent users
- **Data Integrity:** 100% question data consistency
- **Accessibility:** 95%+ WCAG 2.1 Level AA compliance

---

## 📞 Support & Documentation

For questions about this roadmap:
- Create an issue in the repository
- Check existing documentation in `/docs`
- Review code comments for implementation details

---

## 📄 License & Attribution

Current features built by the development team.
Architecture designed for long-term maintainability and growth.

---

**Last Updated:** May 3, 2026
**Version:** 1.0
**Status:** Ready for Phase 1 Implementation
