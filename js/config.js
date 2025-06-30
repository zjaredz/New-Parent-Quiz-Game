/**
 * Quiz Configuration and Constants
 */

const CONFIG = {
    // Quiz Settings
    DEFAULT_QUESTION_COUNT: 10,
    MAX_QUESTION_COUNT: 50,
    
    DIFFICULTY_OPTIONS: [
        { value: 'all', text: 'All Levels' },
        { value: 'easy', text: 'Easy' },
        { value: 'easy-medium', text: 'Easy / Medium' },
        { value: 'medium', text: 'Medium' },
        { value: 'medium-hard', text: 'Medium / Hard' },
        { value: 'hard', text: 'Hard' }
    ],

    DEFAULT_DIFFICULTY: 'all',
    DEFAULT_SELECTED_CATEGORIES: ['newborn'],

    // Scoring System
    SCORING: {
        pointsPerCorrect: 1,
        DIFFICULTY_MULTIPLIER: {
            easy: 1,
            medium: 1.5,
            hard: 2
        }
    },
    
    // UI Settings
    UI: {
        SHOW_EXPLANATION_DELAY: 500,
        AUTO_ADVANCE_DELAY: 3000,
        ANIMATION_DURATION: 300
    },
    
    // Grade boundaries for final score
    GRADE_BOUNDARIES: [
        { min: 90, grade: 'A+', message: 'Outstanding! You\'re a parenting expert!' },
        { min: 80, grade: 'A', message: 'Excellent work! You really know your baby care!' },
        { min: 70, grade: 'B', message: 'Good job! You\'re well-prepared for parenthood.' },
        { min: 60, grade: 'C', message: 'Not bad! Keep learning and you\'ll be great.' },
        { min: 50, grade: 'D', message: 'You passed, but consider more parenting resources.' },
        { min: 0, grade: 'F', message: 'Don\'t give up! Every parent is learning!' }
    ],
    
    // Storage Keys
    STORAGE_KEYS: {
        FLAGGED_QUESTIONS: 'quiz_flagged_questions'
    }
};

// Utility functions for configuration
const CONFIG_UTILS = {
    /**
     * Get grade for score percentage
     */
    getGradeForScore: function(percentage) {
        for (let boundary of CONFIG.GRADE_BOUNDARIES) {
            if (percentage >= boundary.min) {
                return boundary;
            }
        }
        return CONFIG.GRADE_BOUNDARIES[CONFIG.GRADE_BOUNDARIES.length - 1];
    }
};

// Export configuration
export const QuizConfig = {
    ...CONFIG,
    utils: CONFIG_UTILS
};
