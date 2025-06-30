/**
 * Quiz Module - Main Game Logic and Initialization
 */

import { QuizConfig } from './config.js';
import { QuizUtils } from './utils.js';
import { CATEGORIES, getQuestionsByCategories, QUESTIONS } from './questions.js';
import { QuizUI } from './ui.js';

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
    questionCount: QuizConfig.DEFAULT_QUESTION_COUNT,
    selectedDifficulty: 'all'
};

/**
 * Initialize the quiz application
 */
function init() {
    try {
        QuizUI.init();
        setupEventListeners();
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
    } catch (error) {
        QuizUI.hideLoading();
        QuizUI.showError(`Failed to start quiz: ${error.message}`);
    }
}

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
        questionCount: quizConfig.questionCount,
        difficulty: quizConfig.difficulty || 'all',
        selectedCategories: new Set(QuizConfig.DEFAULT_SELECTED_CATEGORIES)
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
    const filteredQuestions = filterQuestionsByDifficulty(allAvailableQuestions, gameState.difficulty);

    if (filteredQuestions.length === 0) {
        return [];
    }

    if (requestedCount === 'all') {
        return QuizUtils.shuffleArray([...filteredQuestions]);
    }

    const count = parseInt(requestedCount);
    return QuizUtils.shuffleArray([...filteredQuestions]).slice(0, count);
}

/**
 * Filter questions by difficulty level
 */
function filterQuestionsByDifficulty(questions, difficultyFilter) {
    if (difficultyFilter === 'all') {
        return questions;
    }
    
    const difficultyMap = {
        'easy': ['easy'],
        'easy-medium': ['easy', 'medium'], 
        'medium': ['medium'],
        'medium-hard': ['medium', 'hard'],
        'hard': ['hard']
    };
    
    const allowedDifficulties = difficultyMap[difficultyFilter] || ['easy', 'medium', 'hard'];
    return questions.filter(question => allowedDifficulties.includes(question.difficulty));
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
    if (!gameState.isActive) return;

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
    if (!gameState.isActive) return;

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

// Export quiz module functions
export const Quiz = {
    init,
    getGameState: () => ({ ...gameState })
};

// Initialize when module is loaded
document.addEventListener('DOMContentLoaded', init);
