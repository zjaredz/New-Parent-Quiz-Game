// config.js - Configuration and Constants for Quiz Game

const CONFIG = {
    // Quiz Settings
    DEFAULT_QUESTION_COUNT: 10,
    MIN_CATEGORIES_REQUIRED: 1,
    MAX_QUESTION_COUNT: 50,
    
    // Scoring System
    SCORING: {
        pointsPerCorrect: 1,
        INCORRECT_PENALTY: 0,  // No penalty for wrong answers
        TIME_BONUS_ENABLED: false,  // Future feature
        DIFFICULTY_MULTIPLIER: {
            easy: 1,
            medium: 1.5,
            hard: 2
        }
    },
    
    // UI Settings
    UI: {
        SHOW_EXPLANATION_DELAY: 500,  // ms before showing explanation
        AUTO_ADVANCE_DELAY: 3000,     // ms before auto-advancing (if enabled)
        ANIMATION_DURATION: 300       // ms for transitions
    },
    
    // Baby/Parenting Categories Configuration - UPDATED to match questions.js
    CATEGORIES: [
        {
            id: 'birth-prep',
            name: 'Birth Preparation',
            icon: '🤱',
            description: 'Third trimester readiness, birth plans, hospital prep',
            color: '#e74c3c'
        },
        {
            id: 'labor-delivery',
            name: 'Labor & Delivery',
            icon: '👶',
            description: 'Birth process, pain management, immediate postpartum',
            color: '#f39c12'
        },
        {
            id: 'postpartum',
            name: 'Postpartum Recovery',
            icon: '💆‍♀️',
            description: 'Mother\'s physical/emotional healing, complications',
            color: '#27ae60'
        },
        {
            id: 'newborn',
            name: 'Newborn Essentials',
            icon: '👶',
            description: 'First days/weeks, basic care, newborn appearance',
            color: '#8e44ad'
        },
        {
            id: 'breastfeeding',
            name: 'Breastfeeding',
            icon: '🤱',
            description: 'Nursing basics, challenges, pumping, milk supply',
            color: '#3498db'
        },
        {
            id: 'bottle-feeding',
            name: 'Bottle Feeding',
            icon: '🍼',
            description: 'Formula preparation, combination feeding, bottle introduction',
            color: '#34495e'
        },
        {
            id: 'solids',
            name: 'Introducing Solids',
            icon: '🥄',
            description: 'Starting foods, allergies, feeding skills, progression',
            color: '#e67e22'
        },
        {
            id: 'sleep',
            name: 'Sleep & Soothing',
            icon: '😴',
            description: 'Sleep patterns, safe sleep, calming techniques',
            color: '#9b59b6'
        },
        {
            id: 'dev-0-6',
            name: 'Growth & Development (0-6 months)',
            icon: '🍼',
            description: 'Milestones, reflexes, early development',
            color: '#1abc9c'
        },
        {
            id: 'dev-6-18',
            name: 'Growth & Development (6-18 months)',
            icon: '🧸',
            description: 'Sitting, crawling, walking, motor skills',
            color: '#f1c40f'
        },
        {
            id: 'toddler',
            name: 'Toddler Development (18+ months)',
            icon: '🚶‍♂️',
            description: 'Independence, tantrums, potty training',
            color: '#2ecc71'
        },
        {
            id: 'health',
            name: 'Health & Medical Care',
            icon: '🏥',
            description: 'Pediatric visits, vaccinations, illness recognition',
            color: '#e74c3c'
        },
        {
            id: 'safety',
            name: 'Safety & Childproofing',
            icon: '🔒',
            description: 'Home safety, car seats, injury prevention',
            color: '#95a5a6'
        },
        {
            id: 'language',
            name: 'Language Development',
            icon: '💬',
            description: 'First sounds, words, communication milestones',
            color: '#3498db'
        },
        {
            id: 'play',
            name: 'Play & Learning',
            icon: '🎯',
            description: 'Age-appropriate toys, developmental play, early learning',
            color: '#f39c12'
        },
        {
            id: 'special',
            name: 'Special Situations',
            icon: '⚠️',
            description: 'Premature babies, multiples, complications',
            color: '#e67e22'
        }
    ],
    
    // Question Difficulty Levels
    DIFFICULTY_LEVELS: {
        EASY: 'easy',
        MEDIUM: 'medium',
        HARD: 'hard'
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
    
    // Local Storage Keys (Note: Not used due to environment constraints)
    STORAGE_KEYS: {
        HIGH_SCORES: 'quiz_high_scores',
        USER_PREFERENCES: 'quiz_user_prefs',
        FLAGGED_QUESTIONS: 'quiz_flagged_questions'
    },
    
    // Feature Flags (for future development)
    FEATURES: {
        TIMER_ENABLED: false,
        HINTS_ENABLED: true,
        MULTIPLAYER_MODE: false,
        SOUND_EFFECTS: false,
        DARK_MODE: false
    }
};

// Validation functions
const VALIDATORS = {
    /**
     * Validate if a category ID exists
     */
    isValidCategory: function(categoryId) {
        return CONFIG.CATEGORIES.some(cat => cat.id === categoryId);
    },
    
    /**
     * Validate question count
     */
    isValidQuestionCount: function(count) {
        return count > 0 && count <= CONFIG.MAX_QUESTION_COUNT;
    },
    
    /**
     * Validate difficulty level
     */
    isValidDifficulty: function(difficulty) {
        return Object.values(CONFIG.DIFFICULTY_LEVELS).includes(difficulty);
    }
};

// Utility functions for configuration
const CONFIG_UTILS = {
    /**
     * Get category by ID
     */
    getCategoryById: function(categoryId) {
        return CONFIG.CATEGORIES.find(cat => cat.id === categoryId);
    },
    
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
    },
    
    /**
     * Get enabled categories (for future filtering)
     */
    getEnabledCategories: function() {
        return CONFIG.CATEGORIES.filter(cat => cat.enabled !== false);
    },
    
    /**
     * Get categories by IDs (useful for multi-select)
     */
    getCategoriesByIds: function(categoryIds) {
        return CONFIG.CATEGORIES.filter(cat => categoryIds.includes(cat.id));
    }
};

// Export as ES6 module with a structure that matches the quiz.js expectations
export const QuizConfig = {
    // Main config object
    ...CONFIG,
    
    // Flattened for easier access (matching expected structure from quiz.js)
    scoring: CONFIG.SCORING,
    categories: CONFIG.CATEGORIES,
    gradeBourdaries: CONFIG.GRADE_BOUNDARIES, // Note: keeping typo for backward compatibility
    gradeBoundaries: CONFIG.GRADE_BOUNDARIES, // Correct spelling also available
    
    // Utility functions
    validators: VALIDATORS,
    utils: CONFIG_UTILS
};