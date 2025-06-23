/**
 * Quiz Module - Main Game Logic and Initialization
 * Coordinates all other modules and manages quiz state
 */

import { QuizConfig } from './config.js';
import { QuizUtils } from './utils.js';
import { CATEGORIES, getQuestionsByCategories, getRandomQuestions, QUESTIONS } from './questions.js';
import { QuizUI } from './ui.js';
//import { showErrorMessage, clearErrorMessage } from './ui.js';

// Game state
let gameState = {
    isActive: false,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    flaggedQuestions: new Set(),
    score: 0,
    startTime: null,
    categoryTags: [],
    questionCount: 10
};

/**
 * Initialize the quiz application
 */
function init() {
    try {
        QuizUI.init();
        setupEventListeners();
        QuizUI.showSuccess('Quiz loaded successfully!');
        console.log('Quiz application initialized successfully');
    } catch (error) {
        console.error('Failed to initialize quiz:', error);
        QuizUI.showError('Failed to load quiz. Please refresh the page.');
    }
}

/**
 * Setup event listeners for quiz events
 */
function setupEventListeners() {
    document.addEventListener('quiz:start', handleQuizStart);
    document.addEventListener('quiz:answerSelected', handleAnswerSelected);
    document.addEventListener('quiz:nextQuestion', handleNextQuestion);
    document.addEventListener('quiz:flagQuestion', handleFlagQuestion);
    document.addEventListener('quiz:restart', handleRestart);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('visibilitychange', handleVisibilityChange);
}

/**
 * Start the quiz with given configuration
 */
function handleQuizStart(event) {
    try {
        QuizUI.showLoading('Preparing your quiz...');
        
        const quizConfig = event.detail;
        
        const validation = QuizUtils.validateQuizConfig(quizConfig);
        if (!validation.isValid) {
            throw new Error(validation.error || 'Invalid quiz configuration');
        }

        initializeGameState(quizConfig);
        
        const questions = generateQuestions(gameState.categoryTags, gameState.questionCount);
        
        if (questions.length === 0) {
            throw new Error('No questions available for selected categories');
        }

        gameState.questions = questions;
        gameState.isActive = true;
        gameState.startTime = Date.now();

        QuizUI.hideLoading();
        QuizUI.showScreen('quiz');
        displayCurrentQuestion();

        console.log(`Quiz started with ${questions.length} questions`);
    } catch (error) {
        QuizUI.hideLoading();
        QuizUI.showError(`Failed to start quiz: ${error.message}`);
        console.error('Quiz start error:', error);
    }
}

/**
 * Validate quiz configuration
 */
/**
 * Enhanced quiz configuration validation with detailed error handling
 * @param {Object} quizConfig - Configuration object to validate
 * @returns {Object} - Validation result with success boolean and error message
 */
/*   MOVED TO utils
function validateQuizConfig(quizConfig) {
    // Basic structure validation
    if (!quizConfig || typeof quizConfig !== 'object') {
        return {
            isValid: false,
            error: 'Invalid quiz configuration'
        };
    }

    // Category validation
    if (!quizConfig.categoryTags || !Array.isArray(quizConfig.categoryTags) || quizConfig.categoryTags.length === 0) {
        return {
            isValid: false,
            error: 'Please select at least one category'
        };
    }

    const count = quizConfig.questionCount;

    // Handle 'flagged' option
    if (count === 'flagged') {
        const flaggedQuestions = QuizUtils.getFlaggedQuestions();
        if (flaggedQuestions.length === 0) {
            return {
                isValid: false,
                error: 'No flagged questions available. Flag some questions during quizzes first.'
            };
        }
        return { isValid: true };
    }

    // Handle 'all' option
    if (count === 'all') {
        const availableQuestions = getQuestionsByCategories(quizConfig.categoryTags);
        if (availableQuestions.length === 0) {
            return {
                isValid: false,
                error: 'No questions available for selected categories'
            };
        }
        return { isValid: true };
    }

    // Numeric validation
    const numCount = parseInt(count);
    if (isNaN(numCount)) {
        return {
            isValid: false,
            error: 'Invalid question count selection'
        };
    }

    if (numCount < 1) {
        return {
            isValid: false,
            error: 'Question count must be at least 1'
        };
    }

    if (numCount > 50) {
        return {
            isValid: false,
            error: 'Question count cannot exceed 50'
        };
    }

    // Check if enough questions exist for the requested count
    const availableQuestions = getQuestionsByCategories(quizConfig.categoryTags);
    if (availableQuestions.length < numCount) {
        return {
            isValid: false,
            error: `Only ${availableQuestions.length} questions available for selected categories. Choose fewer questions or more categories.`
        };
    }

    return { isValid: true };
}
*

/**
 * Initialize game state
 */
function initializeGameState(quizConfig) {
    gameState = {
        isActive: false,
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        flaggedQuestions: new Set(),
        score: 0,
        startTime: null,
        categoryTags: [...quizConfig.categoryTags],
        questionCount: quizConfig.questionCount
    };
}

/**
 * Generate questions from selected category tags
 */
function generateQuestions(categoryTags, requestedCount) {
    if (!categoryTags || categoryTags.length === 0) {
        return [];
    }

    if (requestedCount === 'flagged') {
        return getFlaggedQuestions();
    }

    const allAvailableQuestions = getQuestionsByCategories(categoryTags);
    
    if (allAvailableQuestions.length === 0) {
        return [];
    }

    if (requestedCount === 'all') {
        return QuizUtils.shuffleArray([...allAvailableQuestions]);
    }

    // Numeric count - use existing logic
    return getRandomQuestions(categoryTags, parseInt(requestedCount));
}

/**
 * Get flagged questions
 */
function getFlaggedQuestions() {
    const flaggedIds = QuizUtils.getFlaggedQuestions();
    return QUESTIONS.filter(q => flaggedIds.includes(q.id));
}

/**
 * Get display name for a question based on its tags
 */
function getCategoryNameFromTags(questionTags) {
    const matchingTag = questionTags.find(tag => gameState.categoryTags.includes(tag));
    return matchingTag && CATEGORIES[matchingTag] ? CATEGORIES[matchingTag] : 'General';
}

/**
 * Display current question
 */
function displayCurrentQuestion() {
    if (!gameState.isActive || gameState.currentQuestionIndex >= gameState.questions.length) {
        return;
    }

    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const questionNumber = gameState.currentQuestionIndex + 1;
    const totalQuestions = gameState.questions.length;

    // Check if question is flagged using persistent storage
    const flaggedIds = QuizUtils.getFlaggedQuestions();
    const isFlagged = flaggedIds.includes(currentQuestion.id);

    const questionData = {
        ...currentQuestion,
        flagged: isFlagged,
        categoryName: getCategoryNameFromTags(currentQuestion.tags)
    };

    QuizUI.displayQuestion(questionData, questionNumber, totalQuestions);
}

/**
 * Handle answer selection
 */
function handleAnswerSelected(event) {
    if (!gameState.isActive) {
        return;
    }

    const { selectedIndex } = event.detail;
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    
    if (!currentQuestion) {
        console.error('No current question available');
        return;
    }

    const answerRecord = {
        questionIndex: gameState.currentQuestionIndex,
        selectedIndex: selectedIndex,
        correctIndex: currentQuestion.correct,
        isCorrect: selectedIndex === currentQuestion.correct,
        timeSpent: Date.now() - gameState.startTime,
        question: currentQuestion.question,
        selectedAnswer: currentQuestion.options[selectedIndex],
        correctAnswer: currentQuestion.options[currentQuestion.correct]
    };

    gameState.answers.push(answerRecord);

    if (answerRecord.isCorrect) {
        gameState.score++;
    }

    QuizUI.showAnswerFeedback(
        answerRecord.isCorrect,
        currentQuestion.correct,
        currentQuestion.explanation || 'No explanation available.'
    );
}

/**
 * Handle next question
 */
function handleNextQuestion() {
    if (!gameState.isActive) {
        return;
    }

    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        finishQuiz();
    } else {
        displayCurrentQuestion();
    }
}

/**
 * Handle flag question
 */
function handleFlagQuestion() {
    if (!gameState.isActive) return;
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const questionId = currentQuestion.id;
    
    const flaggedIds = QuizUtils.getFlaggedQuestions();
    const isFlagged = flaggedIds.includes(questionId);
    
    if (isFlagged) {
        QuizUtils.removeFlaggedQuestion(questionId);
        gameState.flaggedQuestions.delete(gameState.currentQuestionIndex);
    } else {
        QuizUtils.addFlaggedQuestion(questionId);
        gameState.flaggedQuestions.add(gameState.currentQuestionIndex);
    }
    
    QuizUI.updateFlagButton(!isFlagged);
    
    // Update dropdown options to reflect new flagged count
    document.dispatchEvent(new CustomEvent('flagged:updated'));
}

/**
 * Finish quiz and show results
 */
function finishQuiz() {
    gameState.isActive = false;
    
    const endTime = Date.now();
    const totalTime = endTime - gameState.startTime;
    const results = calculateResults(totalTime);
    
    console.log('Quiz completed. Results:', results);
    QuizUI.displayResults(results);
}

/**
 * Calculate quiz results
 */
function calculateResults(totalTime) {
    const total = gameState.questions.length;
    const correctAnswers = gameState.score;
    const percentage = total > 0 ? (correctAnswers / total) * 100 : 0;
    
    const flaggedQuestions = Array.from(gameState.flaggedQuestions).map(index => {
        const question = gameState.questions[index];
        return {
            ...question,
            questionIndex: index,
            userAnswer: gameState.answers[index]?.selectedAnswer || 'Not answered',
            wasCorrect: gameState.answers[index]?.isCorrect || false
        };
    });

    const averageTimePerQuestion = total > 0 ? totalTime / total / 1000 : 0;
    const categoryBreakdown = calculateCategoryBreakdown();

    return {
        score: correctAnswers,
        total: total,
        correctAnswers: correctAnswers,
        incorrectAnswers: total - correctAnswers,
        percentage: percentage,
        totalTime: totalTime,
        averageTimePerQuestion: averageTimePerQuestion,
        flaggedQuestions: flaggedQuestions,
        categoryBreakdown: categoryBreakdown,
        answers: gameState.answers
    };
}

/**
 * Calculate performance breakdown by category
 */
function calculateCategoryBreakdown() {
    const breakdown = {};
    
    gameState.answers.forEach((answer, index) => {
        const question = gameState.questions[index];
        
        // Process each tag that matches our selected categories
        question.tags.forEach(tag => {
            if (gameState.categoryTags.includes(tag)) {
                if (!breakdown[tag]) {
                    breakdown[tag] = {
                        name: CATEGORIES[tag] || tag,
                        total: 0,
                        correct: 0,
                        percentage: 0
                    };
                }
                
                breakdown[tag].total++;
                if (answer.isCorrect) {
                    breakdown[tag].correct++;
                }
            }
        });
    });
    
    // Calculate percentages
    Object.keys(breakdown).forEach(categoryTag => {
        const category = breakdown[categoryTag];
        category.percentage = category.total > 0 ? (category.correct / category.total) * 100 : 0;
    });
    
    return breakdown;
}

/**
 * Handle quiz restart
 */
function handleRestart() {
    gameState = {
        isActive: false,
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        flaggedQuestions: new Set(),
        score: 0,
        startTime: null,
        categoryTags: [],
        questionCount: 10
    };
    
    console.log('Quiz restarted');
}

/**
 * Handle browser beforeunload event
 */
function handleBeforeUnload(event) {
    if (gameState.isActive) {
        event.preventDefault();
        event.returnValue = 'You have a quiz in progress. Are you sure you want to leave?';
        return event.returnValue;
    }
}

/**
 * Handle visibility change (tab switching, mobile app switching)
 */
function handleVisibilityChange() {
    if (gameState.isActive) {
        if (document.hidden) {
            console.log('Quiz paused due to visibility change');
        } else {
            console.log('Quiz resumed');
        }
    }
}

/**
 * Get current game state (for debugging)
 */
function getGameState() {
    return { ...gameState };
}

/**
 * Force finish quiz (for testing)
 */
function forceFinish() {
    if (gameState.isActive) {
        finishQuiz();
    }
}

// Export quiz module functions
export const Quiz = {
    init,
    getGameState,
    forceFinish
};

// Initialize when module is loaded
document.addEventListener('DOMContentLoaded', init);