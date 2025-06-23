/**
 * UI Module - DOM Manipulation and Screen Management
 * Handles all user interface interactions and screen transitions
 */

import { QuizConfig } from './config.js';
import { QuizUtils } from './utils.js';
import { Quiz } from './quiz.js';
import { CATEGORIES, QUESTIONS } from './questions.js';

// Rich category metadata for UI display
const CATEGORY_UI_DATA = {
    'birth-prep': {
        icon: '🤰',
        name: 'Birth Preparation',
        description: 'Getting ready for labor and delivery',
        color: '#ff6b6b'
    },
    'labor-delivery': {
        icon: '🏥',
        name: 'Labor & Delivery',
        description: 'The birthing process and hospital experience',
        color: '#4ecdc4'
    },
    'postpartum': {
        icon: '🌸',
        name: 'Postpartum Recovery',
        description: 'Healing and adjustment after birth',
        color: '#45b7d1'
    },
    'newborn': {
        icon: '👶',
        name: 'Newborn Essentials',
        description: 'First weeks with your baby',
        color: '#f9ca24'
    },
    'breastfeeding': {
        icon: '🤱',
        name: 'Breastfeeding',
        description: 'Nursing tips and troubleshooting',
        color: '#f0932b'
    },
    'bottle-feeding': {
        icon: '🍼',
        name: 'Bottle Feeding',
        description: 'Formula feeding and bottle basics',
        color: '#eb4d4b'
    },
    'solids': {
        icon: '🥄',
        name: 'Introducing Solids',
        description: 'First foods and feeding milestones',
        color: '#6ab04c'
    },
    'sleep': {
        icon: '😴',
        name: 'Sleep & Soothing',
        description: 'Sleep patterns and calming techniques',
        color: '#7b68ee'
    },
    'dev-0-6': {
        icon: '📏',
        name: 'Development 0-6 months',
        description: 'Early growth milestones',
        color: '#ff9ff3'
    },
    'dev-6-18': {
        icon: '👣',
        name: 'Development 6-18 months',
        description: 'Mobile baby milestones',
        color: '#54a0ff'
    },
    'toddler': {
        icon: '🚼',
        name: 'Toddler Development',
        description: '18+ months developmental stages',
        color: '#5f27cd'
    },
    'health': {
        icon: '🏥',
        name: 'Health & Medical Care',
        description: 'Wellness and when to call doctor',
        color: '#00d2d3'
    },
    'safety': {
        icon: '🔒',
        name: 'Safety & Childproofing',
        description: 'Keeping baby safe at home',
        color: '#ff6348'
    },
    'language': {
        icon: '💬',
        name: 'Language Development',
        description: 'Communication and speech milestones',
        color: '#2ed573'
    },
    'play': {
        icon: '🧸',
        name: 'Play & Learning',
        description: 'Activities and educational development',
        color: '#ffa502'
    },
    'special': {
        icon: '⚠️',
        name: 'Special Situations',
        description: 'Unique circumstances and challenges',
        color: '#ff4757'
    }
};

// State management
const state = {
    currentScreen: 'start',
    selectedCategories: new Set(),
    questionCount: 10,
    explanationMode: false,
    currentQuestionCache: null,
    elements: {}
};

/**
 * Initialize UI module
 */
function init() {
    cacheElements();
    setupEventListeners();
    showScreen('start');
    renderCategoryGrid();
    renderQuestionCountOptions();
}

/**
 * Cache frequently used DOM elements
 */
function cacheElements() {
    // Screens
    state.elements.startScreen = document.getElementById('start-screen');
    state.elements.quizScreen = document.getElementById('quiz-screen');
    state.elements.resultsScreen = document.getElementById('results-screen');

    // Start screen elements
    state.elements.categoryGrid = document.getElementById('category-selection');
    state.elements.questionCountSelect = document.getElementById('question-count-select');
    state.elements.selectedCount = document.getElementById('selected-count');
    state.elements.startButton = document.getElementById('start-quiz');

    // Quiz screen elements
    state.elements.questionNumber = document.getElementById('question-number');
    state.elements.totalQuestions = document.getElementById('total-questions');
    state.elements.progressBar = document.getElementById('progress-bar');
    state.elements.questionText = document.getElementById('question-text');
    state.elements.optionsContainer = document.getElementById('options-container');
    state.elements.flagButton = document.getElementById('flag-question');

    // Results screen elements
    state.elements.finalScore = document.getElementById('final-score');
    state.elements.gradeDisplay = document.getElementById('grade-display');
    state.elements.resultsSummary = document.getElementById('results-summary');
    state.elements.flaggedQuestions = document.getElementById('flagged-questions');
    state.elements.restartButton = document.getElementById('restart-quiz');
    state.elements.reviewButton = document.getElementById('review-flagged');
}

/**
 * Setup event listeners for UI interactions
 */
function setupEventListeners() {
    // Question count dropdown
    if (state.elements.questionCountSelect) {
        state.elements.questionCountSelect.addEventListener('change', handleQuestionCountChange);
        state.elements.questionCountSelect.addEventListener('change', updateStartButtonState);
    }

    // Listen for flagged questions updates
    document.addEventListener('flagged:updated', renderQuestionCountOptions);
    document.addEventListener('flagged:updated', updateStartButtonState);

    // Update start button state when categories change
    document.addEventListener('click', (event) => {
        if (event.target.closest('.category-item')) {
            setTimeout(updateStartButtonState, 10);
        }
    });

    // Add mobile optimizations
    addMobileOptimizations();

    // Button event listeners
    setupButtonListeners();

    // Initial state update for start button
    updateStartButtonState();
}

/**
 * Setup button event listeners
 */
function setupButtonListeners() {
    const buttonMappings = [
        { element: state.elements.startButton, handler: handleStartQuiz },
        { element: state.elements.flagButton, handler: handleFlagQuestion },
        { element: state.elements.restartButton, handler: handleRestart },
        { element: state.elements.reviewButton, handler: handleReviewFlagged }
    ];

    buttonMappings.forEach(({ element, handler }) => {
        if (element) {
            element.addEventListener('click', handler);
        }
    });
}

/**
 * Add mobile-specific optimizations
 */
function addMobileOptimizations() {
    // Prevent iOS zoom on input focus
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add touch feedback for interactive elements
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            if (state.currentScreen === 'start') {
                renderCategoryGrid();
            }
        }, 100);
    });

    // Add touch event handling
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
}

/**
 * Handle touch end events for mobile
 */
function handleTouchEnd(e) {
    // Handle category card touches
    if (e.target.closest('.category-item')) {
        e.preventDefault();
        const card = e.target.closest('.category-item');
        const categoryId = card.dataset.category;
        if (categoryId) {
            toggleCategory(categoryId, card);
        }
    }
    
    // Handle option button touches
    if (e.target.classList.contains('option-button')) {
        e.preventDefault();
        const index = parseInt(e.target.dataset.index);
        if (!isNaN(index)) {
            handleOptionSelect(index);
        }
    }
}

/**
 * Show specific screen and hide others
 */
function showScreen(screenName) {
    const screens = ['start', 'quiz', 'results'];
    
    screens.forEach(screen => {
        const element = state.elements[`${screen}Screen`];
        if (element) {
            element.style.display = screen === screenName ? 'block' : 'none';
        }
    });
    
    state.currentScreen = screenName;
    document.body.className = `screen-${screenName}`;
}

/**
 * Render category selection grid
 */
function renderCategoryGrid() {
    if (!state.elements.categoryGrid || !CATEGORIES || !QUESTIONS) {
        console.error('Missing required elements or data for category grid');
        return;
    }

    // Calculate category counts
    const categoryCounts = QuizUtils.calculateCategoryCounts(QUESTIONS, CATEGORIES);
    
    state.elements.categoryGrid.innerHTML = '';

    // Create category cards
    Object.keys(CATEGORIES).forEach(categoryId => {
        const categoryName = CATEGORIES[categoryId];
        const uiData = CATEGORY_UI_DATA[categoryId];
        const questionCount = categoryCounts[categoryId] || 0;
        
        if (!uiData) {
            console.warn(`No UI data found for category: ${categoryId}`);
            return;
        }

        const categoryData = { ...uiData, name: categoryName };
        const categoryCard = createCategoryCard(categoryId, categoryData, questionCount);
        state.elements.categoryGrid.appendChild(categoryCard);
    });

    updateSelectedCount();
}

/**
 * Create category selection card with large icon on left
 */
function createCategoryCard(categoryId, categoryData, questionCount) {
    const card = document.createElement('div');
    card.className = 'category-item';
    card.dataset.category = categoryId;

    card.innerHTML = `
        <div class="category-icon">${categoryData.icon}</div>
        <div class="category-content">
            <h3 class="category-name">${categoryData.name}</h3>
            <p class="category-description">${categoryData.description}</p>
            <div class="category-stats">${questionCount} questions</div>
        </div>
    `;

    card.style.setProperty('--category-color', categoryData.color);
    
    card.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCategory(categoryId, card);
    });
    
    return card;
}

/**
 * Toggle category selection
 */
function toggleCategory(categoryId, cardElement) {
    if (state.selectedCategories.has(categoryId)) {
        state.selectedCategories.delete(categoryId);
        cardElement.classList.remove('selected');
    } else {
        state.selectedCategories.add(categoryId);
        cardElement.classList.add('selected');
    }
    
    updateSelectedCount();
    updateStartButtonState();
}

/**
 * Update selected categories count display
 */
function updateSelectedCount() {
    if (state.elements.selectedCount) {
        state.elements.selectedCount.textContent = state.selectedCategories.size;
    }
}

// Function to select all categories
function selectAllCategories() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        if (!item.classList.contains('selected')) {
            item.classList.add('selected');
        }
    });
    updateSelectedCategoriesDisplay();
    updateStartButtonState();
}

// Function to deselect all categories
function selectNoneCategories() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.classList.remove('selected');
    });
    updateSelectedCategoriesDisplay();
    updateStartButtonState();
}

// Function to update the selected categories count display
function updateSelectedCategoriesDisplay() {
    const selectedCategories = document.querySelectorAll('.category-item.selected');
    const selectedCount = document.getElementById('selected-count');
    selectedCount.textContent = selectedCategories.length;
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select All button
    const selectAllBtn = document.getElementById('select-all');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', selectAllCategories);
    }
    
    // Select None button
    const selectNoneBtn = document.getElementById('select-none');
    if (selectNoneBtn) {
        selectNoneBtn.addEventListener('click', selectNoneCategories);
    }
});




/**
 * Render question count options with dynamic flagged count
 */
function renderQuestionCountOptions() {
    if (!state.elements.questionCountSelect) return;
    
    const flaggedCount = QuizUtils.getFlaggedQuestions().length;
    const options = [
        { value: 5, text: '5 Questions' },
        { value: 10, text: '10 Questions' },
        { value: 20, text: '20 Questions' },
        { value: 'all', text: 'All Questions' },
        { value: 'flagged', text: `Flagged Questions (${flaggedCount})`, disabled: flaggedCount === 0 }
    ];
    
    state.elements.questionCountSelect.innerHTML = options.map(opt => 
        `<option value="${opt.value}" ${opt.disabled ? 'disabled' : ''}>${opt.text}</option>`
    ).join('');
}

/**
 * Handle question count dropdown change
 */
function handleQuestionCountChange(event) {
    state.questionCount = event.target.value;
}

/**
 * Handle start quiz button click
 */
function handleStartQuiz() {
    try {
        const selectedCategoryElements = document.querySelectorAll('.category-item.selected');
        const selectedCategoryTags = Array.from(selectedCategoryElements)
            .map(element => element.dataset.category)
            .filter(category => category);
        
        const questionCountValue = state.elements.questionCountSelect?.value || '10';

        const quizConfig = {
            categoryTags: selectedCategoryTags,
            questionCount: questionCountValue
        };

        const validation = QuizUtils.validateQuizConfig(quizConfig);
        
        if (!validation.isValid) {
            showError(validation.error);
            return;
        }

        document.dispatchEvent(new CustomEvent('quiz:start', {
            detail: quizConfig
        }));

    } catch (error) {
        console.error('Error in handleStartQuiz:', error);
        showError('Failed to start quiz. Please try again.');
    }
}

/**
 * Update start button state based on selections
 */
function updateStartButtonState() {
    if (!state.elements.startButton) return;
    
    const selectedCategoryElements = document.querySelectorAll('.category-item.selected');
    const selectedCategoryTags = Array.from(selectedCategoryElements)
        .map(element => element.dataset.category)
        .filter(category => category);
    
    const questionCountValue = state.elements.questionCountSelect?.value || '10';
    
    const quizConfig = {
        categoryTags: selectedCategoryTags,
        questionCount: questionCountValue
    };
    
    const validation = QuizUtils.validateQuizConfig(quizConfig);
    
    state.elements.startButton.disabled = !validation.isValid;
    state.elements.startButton.title = validation.isValid ? '' : validation.error;
}

/**
 * Display current question
 */
function displayQuestion(questionData, currentIndex, totalCount) {
    if (!questionData) {
        console.error('No question data provided to displayQuestion');
        return;
    }

    // Cache current question data
    state.currentQuestionCache = questionData;
    state.explanationMode = false;

    // Update UI
    updateProgress(currentIndex, totalCount);
    updateQuestionText(questionData.question);
    renderOptions(questionData.options);
    resetQuestionButtons();
    
    // Update flag button state
    const flaggedIds = QuizUtils.getFlaggedQuestions();
    const isFlagged = flaggedIds.includes(questionData.id);
    updateFlagButton(isFlagged);
}

/**
 * Update progress indicators
 */
function updateProgress(current, total) {
    if (state.elements.questionNumber) {
        state.elements.questionNumber.textContent = current;
    }
    if (state.elements.totalQuestions) {
        state.elements.totalQuestions.textContent = total;
    }
    if (state.elements.progressBar) {
        const percentage = (current / total) * 100;
        state.elements.progressBar.style.width = `${percentage}%`;
    }
}

/**
 * Update question text
 */
function updateQuestionText(questionText) {
    if (state.elements.questionText) {
        state.elements.questionText.textContent = questionText;
    }
}

/**
 * Render answer options
 */
function renderOptions(options) {
    if (!state.elements.optionsContainer) {
        console.error('Options container not found');
        return;
    }

    state.elements.optionsContainer.innerHTML = '';
    
    options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-button';
        optionButton.textContent = option;
        optionButton.dataset.index = index;
        
        optionButton.addEventListener('click', (e) => {
            e.preventDefault();
            handleOptionSelect(index);
        });
        
        state.elements.optionsContainer.appendChild(optionButton);
    });
}

/**
 * Handle option selection
 */
function handleOptionSelect(selectedIndex) {
    const optionButtons = state.elements.optionsContainer.querySelectorAll('.option-button');
    
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Disable all buttons and mark selected
    optionButtons.forEach(button => button.disabled = true);
    optionButtons[selectedIndex].classList.add('selected');
    
    // Emit event for quiz logic
    document.dispatchEvent(new CustomEvent('quiz:answerSelected', {
        detail: { selectedIndex }
    }));
}

/**
 * Show answer feedback with action buttons
 */
function showAnswerFeedback(isCorrect, correctIndex, explanation) {
    const optionButtons = state.elements.optionsContainer.querySelectorAll('.option-button');
    
    // Mark correct answer
    if (optionButtons[correctIndex]) {
        optionButtons[correctIndex].classList.add('correct');
    }
    
    // Mark incorrect answer if wrong
    if (!isCorrect) {
        const selectedButton = state.elements.optionsContainer.querySelector('.option-button.selected');
        if (selectedButton && !selectedButton.classList.contains('correct')) {
            selectedButton.classList.add('incorrect');
        }
    }
    
    createAnswerButtons(explanation);
}

/**
 * Create Next Question and Explanation buttons
 */
function createAnswerButtons(explanation) {
    removeElement('answer-buttons-container');

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'answer-buttons-container';
    buttonContainer.style.cssText = `
        display: flex;
        gap: 10px;
        margin-top: 20px;
        justify-content: center;
        flex-wrap: wrap;
    `;

    // Create buttons
    const explanationButton = createButton('explanation-btn', 'Explanation', 'button secondary-button', () => {
        showExplanationView(explanation);
    });

    const nextButton = createButton('next-question-btn', 'Next', 'button primary-button', handleNextQuestion);

    buttonContainer.appendChild(explanationButton);
    buttonContainer.appendChild(nextButton);

    // Insert after options container
    insertAfterElement(state.elements.optionsContainer, buttonContainer);

    // Focus on next button for accessibility
    setTimeout(() => nextButton.focus(), 100);
}

/**
 * Show explanation view
 */
function showExplanationView(explanationText) {
    state.explanationMode = true;

    // Hide current UI elements
    hideElement(state.elements.optionsContainer);
    hideElement(document.getElementById('answer-buttons-container'));

    // Get correct answer
    const currentQuestion = state.currentQuestionCache;
    const correctAnswer = currentQuestion ? currentQuestion.options[currentQuestion.correct] : 'N/A';

    createExplanationView(correctAnswer, explanationText);
}

/**
 * Create explanation view with answer and explanation
 */
function createExplanationView(correctAnswer, explanationText) {
    removeElement('explanation-view');

    const explanationView = document.createElement('div');
    explanationView.id = 'explanation-view';
    explanationView.style.cssText = 'margin-top: 20px; padding: 0 10px;';

    // Create content sections
    const answerSection = createAnswerSection(correctAnswer);
    const explanationBox = createExplanationBox(explanationText);
    const navButtons = createExplanationNavigation();

    explanationView.appendChild(answerSection);
    explanationView.appendChild(explanationBox);
    explanationView.appendChild(navButtons);

    // Insert after question text
    insertAfterElement(state.elements.questionText, explanationView);
}

/**
 * Create answer section for explanation view
 */
function createAnswerSection(correctAnswer) {
    const answerSection = document.createElement('div');
    answerSection.style.cssText = `
        margin-bottom: 15px;
        padding: 15px;
        background-color: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #28a745;
    `;
    answerSection.innerHTML = `<strong>Correct Answer:</strong> ${correctAnswer}`;
    return answerSection;
}

/**
 * Create explanation text box
 */
function createExplanationBox(explanationText) {
    const explanationBox = document.createElement('div');
    explanationBox.style.cssText = `
        background-color: #e3f2fd;
        color: #1565c0;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        line-height: 1.6;
        font-size: 16px;
    `;
    explanationBox.textContent = explanationText;
    return explanationBox;
}

/**
 * Create navigation buttons for explanation view
 */
function createExplanationNavigation() {
    const navButtons = document.createElement('div');
    navButtons.style.cssText = `
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    `;

    const backButton = createButton('', 'Back to Question', 'button secondary-button', showQuestionView);
    const nextButton = createButton('', 'Next Question', 'button primary-button', handleNextQuestion);

    navButtons.appendChild(backButton);
    navButtons.appendChild(nextButton);

    // Focus on next button
    setTimeout(() => nextButton.focus(), 100);

    return navButtons;
}

/**
 * Show question view (return from explanation)
 */
function showQuestionView() {
    state.explanationMode = false;

    showElement(state.elements.optionsContainer);
    showElement(document.getElementById('answer-buttons-container'));
    removeElement('explanation-view');
}

/**
 * Reset question buttons to initial state
 */
function resetQuestionButtons() {
    removeElement('answer-buttons-container');
    removeElement('explanation-view');

    // Reset option button states
    const optionButtons = state.elements.optionsContainer?.querySelectorAll('.option-button') || [];
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('selected', 'correct', 'incorrect');
    });

    state.explanationMode = false;
    showElement(state.elements.optionsContainer);
}

/**
 * Handle next question button click
 */
function handleNextQuestion() {
    document.dispatchEvent(new CustomEvent('quiz:nextQuestion'));
}

/**
 * Handle flag question button click
 */
function handleFlagQuestion() {
    document.dispatchEvent(new CustomEvent('quiz:flagQuestion'));
}

/**
 * Update flag button appearance
 */
function updateFlagButton(isFlagged) {
    if (state.elements.flagButton) {
        state.elements.flagButton.classList.toggle('flagged', isFlagged);
        state.elements.flagButton.textContent = isFlagged ? '🚩 Flagged' : '🏴 Flag';
    }
}

/**
 * Display quiz results
 */
function displayResults(results) {
    if (!results) {
        console.error('No results data provided');
        return;
    }

    updateResultsDisplay(results);
    displayFlaggedQuestions(results.flaggedQuestions || []);
    showScreen('results');
}

/**
 * Update results display elements
 */
function updateResultsDisplay(results) {
    // Update score
    if (state.elements.finalScore) {
        state.elements.finalScore.textContent = `${results.score}/${results.total}`;
    }

    // Update grade
    if (state.elements.gradeDisplay && QuizUtils.calculateGrade) {
        const grade = QuizUtils.calculateGrade(results.percentage);
        state.elements.gradeDisplay.textContent = grade;
        state.elements.gradeDisplay.className = `grade-display grade-${grade.replace('+', 'plus').toLowerCase()}`;
    }

    // Update summary
    if (state.elements.resultsSummary) {
        state.elements.resultsSummary.innerHTML = `
            <div class="result-stat">
                <span class="stat-label">Accuracy:</span>
                <span class="stat-value">${results.percentage.toFixed(1)}%</span>
            </div>
            <div class="result-stat">
                <span class="stat-label">Correct Answers:</span>
                <span class="stat-value">${results.correctAnswers}</span>
            </div>
            <div class="result-stat">
                <span class="stat-label">Questions Flagged:</span>
                <span class="stat-value">${results.flaggedQuestions ? results.flaggedQuestions.length : 0}</span>
            </div>
        `;
    }
}

/**
 * Display flagged questions for review
 */
function displayFlaggedQuestions(flaggedQuestions) {
    if (!state.elements.flaggedQuestions) return;

    if (!flaggedQuestions || flaggedQuestions.length === 0) {
        state.elements.flaggedQuestions.innerHTML = '<p class="no-flagged">No questions flagged for review.</p>';
        hideElement(state.elements.reviewButton);
        return;
    }

    const flaggedList = document.createElement('div');
    flaggedList.className = 'flagged-list';

    flaggedQuestions.forEach((question, index) => {
        const flaggedItem = createFlaggedQuestionItem(question, index);
        flaggedList.appendChild(flaggedItem);
    });

    state.elements.flaggedQuestions.innerHTML = '';
    state.elements.flaggedQuestions.appendChild(flaggedList);
    showElement(state.elements.reviewButton);
}

/**
 * Create flagged question item
 */
function createFlaggedQuestionItem(question, index) {
    const flaggedItem = document.createElement('div');
    flaggedItem.className = 'flagged-item';
    
    flaggedItem.innerHTML = `
        <div class="flagged-question">
            <strong>Q${index + 1}:</strong> ${question.question}
        </div>
        <div class="flagged-answer">
            <strong>Correct Answer:</strong> ${question.options[question.correct]}
        </div>
        <div class="flagged-explanation">
            ${question.explanation}
        </div>
    `;
    
    return flaggedItem;
}

/**
 * Handle restart button click
 */
function handleRestart() {
    // Reset state
    state.selectedCategories.clear();
    state.questionCount = 10;
    
    // Re-render UI
    renderQuestionCountOptions();
    if (state.elements.questionCountSelect) {
        state.elements.questionCountSelect.value = state.questionCount;
    }
    
    renderCategoryGrid();
    showScreen('start');
    
    // Emit restart event
    document.dispatchEvent(new CustomEvent('quiz:restart'));
}

/**
 * Handle review flagged questions
 */
function handleReviewFlagged() {
    const flaggedSection = state.elements.flaggedQuestions;
    if (flaggedSection) {
        flaggedSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Show loading state
 */
function showLoading(message = 'Loading...') {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(loadingOverlay);
}

/**
 * Hide loading state
 */
function hideLoading() {
    removeElement('loading-overlay');
}

/**
 * Show toast message
 */
function showToast(message, type = 'error', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `${type}-toast`;
    toast.textContent = message;
    
    // Position for mobile screens
    if (window.innerWidth <= 768) {
        toast.style.cssText = 'bottom: 20px; left: 20px; right: 20px; top: auto;';
    }
    
    document.body.appendChild(toast);
    
    // Animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto-remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * Show error message
 */
function showError(message, duration = 5000) {
    showToast(message, 'error', duration);
}

/**
 * Show success message
 */
function showSuccess(message, duration = 3000) {
    showToast(message, 'success', duration);
}

// Utility functions
function createButton(id, text, className, clickHandler) {
    const button = document.createElement('button');
    if (id) button.id = id;
    button.textContent = text;
    button.className = className;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        clickHandler();
    });
    return button;
}

function removeElement(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
}

function hideElement(element) {
    if (element) element.style.display = 'none';
}

function showElement(element) {
    if (element) element.style.display = 'block';
}

function insertAfterElement(referenceElement, newElement) {
    if (referenceElement && referenceElement.parentNode) {
        referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
    }
}

/**
 * Get current UI state
 */
function getState() {
    return {
        currentScreen: state.currentScreen,
        selectedCategories: Array.from(state.selectedCategories),
        questionCount: state.questionCount,
        explanationMode: state.explanationMode
    };
}

// Export UI module functions
export const QuizUI = {
    init,
    showScreen,
    displayQuestion,
    showAnswerFeedback,
    displayResults,
    showLoading,
    hideLoading,
    showError,
    showSuccess,
    getState,
    updateFlagButton,
    updateStartButtonState 
};