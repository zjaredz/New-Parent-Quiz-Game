// utils.js - Utility Functions for Quiz Game (ES6 Modules)

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - New shuffled array (doesn't modify original)
 */
const shuffleArray = (array) => {
    const shuffled = [...array]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Select random items from an array
 * @param {Array} array - Source array
 * @param {number} count - Number of items to select
 * @returns {Array} - Array of randomly selected items
 */
const selectRandomItems = (array, count) => {
    if (count >= array.length) {
        return shuffleArray(array);
    }
    
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
};

/**
 * Get a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer
 */
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Calculate percentage and round to specified decimal places
 * @param {number} part - The part value
 * @param {number} whole - The whole value
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {number} - Percentage
 */
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Calculate the percentage of part relative to whole and round it to the specified number of decimal places.
 * @param {number} part - The part value.
 * @param {number} whole - The whole value.
 * @param {number} [decimals=1] - The number of decimal places to round the result to.
 * @returns {number} - The calculated percentage rounded to the specified decimal places, or 0 if whole is 0.
 */

/*******  bde5ac0a-d937-492d-ad31-9e8b16bc5008  *******/
const calculatePercentage = (part, whole, decimals = 1) => {
    if (whole === 0) return 0;
    return Math.round((part / whole) * 100 * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

/**
 * Format time in seconds to MM:SS format
 * @param {number} seconds - Time in seconds
 * @returns {string} - Formatted time string
 */
const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Deep clone an object (for simple objects without functions)
 * @param {*} obj - Object to clone
 * @returns {*} - Cloned object
 */
const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const cloned = {};
        Object.keys(obj).forEach(key => {
            cloned[key] = deepClone(obj[key]);
        });
        return cloned;
    }
};

/**
 * Check if an element is visible in the viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is visible
 */
const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Smooth scroll to an element
 * @param {HTMLElement} element - Element to scroll to
 * @param {number} offset - Offset from top (default: 0)
 */
const scrollToElement = (element, offset = 0) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

/**
 * Generate a unique ID
 * @param {string} prefix - Optional prefix for the ID
 * @returns {string} - Unique ID
 */
const generateId = (prefix = 'id') => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Sanitize text for HTML display (prevent XSS)
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
const sanitizeText = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const calculateCategoryCounts = (questions, categories) => {
    const counts = {};
    // Initialize all categories to 0
    Object.keys(categories).forEach(categoryId => {
        counts[categoryId] = 0;
    });
    // Count questions for each category
    questions.forEach(question => {
        if (question.tags && Array.isArray(question.tags)) {
            question.tags.forEach(tag => {
                if (counts.hasOwnProperty(tag)) {
                    counts[tag]++;
                }
            });
        }
    });
    return counts;
};

/**
 * Persistent Flagging System
 * Functions for managing flagged questions across sessions
 */
const getFlaggedQuestions = () => {
    const stored = localStorage.getItem('flaggedQuestions');
    return stored ? JSON.parse(stored) : [];
};

const saveFlaggedQuestions = (flaggedIds) => {
    localStorage.setItem('flaggedQuestions', JSON.stringify(flaggedIds));
};

const addFlaggedQuestion = (questionId) => {
    const flagged = getFlaggedQuestions();
    if (!flagged.includes(questionId)) {
        flagged.push(questionId);
        saveFlaggedQuestions(flagged);
    }
};

const removeFlaggedQuestion = (questionId) => {
    const flagged = getFlaggedQuestions();
    const filtered = flagged.filter(id => id !== questionId);
    saveFlaggedQuestions(filtered);
};

/**
 * Local Storage utilities with error handling
 */
const storage = {
    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {*} data - Data to store
     * @returns {boolean} - Success status
     */
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.warn('Failed to save to localStorage:', error);
            return false;
        }
    },

    /**
     * Load data from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if key doesn't exist
     * @returns {*} - Loaded data or default value
     */
    load: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn('Failed to load from localStorage:', error);
            return defaultValue;
        }
    },

    /**
     * Remove data from localStorage
     * @param {string} key - Storage key
     * @returns {boolean} - Success status
     */
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn('Failed to remove from localStorage:', error);
            return false;
        }
    },

    /**
     * Clear all localStorage data
     * @returns {boolean} - Success status
     */
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.warn('Failed to clear localStorage:', error);
            return false;
        }
    }
};

/**
 * Array utilities
 */
const array = {
    /**
     * Remove duplicates from array
     * @param {Array} array - Array with potential duplicates
     * @returns {Array} - Array without duplicates
     */
    removeDuplicates: (array) => [...new Set(array)],

    /**
     * Group array items by a property
     * @param {Array} array - Array to group
     * @param {string} property - Property to group by
     * @returns {Object} - Grouped object
     */
    groupBy: (array, property) => {
        return array.reduce((groups, item) => {
            const value = item[property];
            if (!groups[value]) {
                groups[value] = [];
            }
            groups[value].push(item);
            return groups;
        }, {});
    },

    /**
     * Check if two arrays are equal (shallow comparison)
     * @param {Array} arr1 - First array
     * @param {Array} arr2 - Second array
     * @returns {boolean} - True if arrays are equal
     */
    areEqual: (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((item, index) => item === arr2[index]);
    }
};

/**
 * DOM utilities
 */
const dom = {
    /**
     * Add event listener with automatic cleanup
     * @param {HTMLElement} element - Element to attach listener to
     * @param {string} event - Event type
     * @param {Function} handler - Event handler
     * @returns {Function} - Cleanup function
     */
    addEventListener: (element, event, handler) => {
        element.addEventListener(event, handler);
        return () => element.removeEventListener(event, handler);
    },

    /**
     * Create element with attributes and children
     * @param {string} tag - HTML tag name
     * @param {Object} attributes - Element attributes
     * @param {Array} children - Child elements or text
     * @returns {HTMLElement} - Created element
     */
    createElement: (tag, attributes = {}, children = []) => {
        const element = document.createElement(tag);
        
        // Set attributes
        Object.keys(attributes).forEach(key => {
            if (key === 'className') {
                element.className = attributes[key];
            } else {
                element.setAttribute(key, attributes[key]);
            }
        });
        
        // Add children
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        
        return element;
    }
};

// Export as ES6 module with a structure that matches the other modules
export const QuizUtils = {
    shuffleArray,
    selectRandomItems,
    randomInt,
    calculatePercentage,
    formatTime,
    debounce,
    deepClone,
    isElementVisible,
    scrollToElement,
    generateId,
    sanitizeText,
    calculateCategoryCounts,
    calculateGrade: (percentage) => {
        // Add this function if it's missing but used in quiz.js
        if (percentage >= 90) return 'A+';
        if (percentage >= 80) return 'A';
        if (percentage >= 70) return 'B';
        if (percentage >= 60) return 'C';
        if (percentage >= 50) return 'D';
        return 'F';
    },
    
    // Persistent Flagging Functions - defined as methods
    getFlaggedQuestions() {
        const stored = localStorage.getItem('flaggedQuestions');
        return stored ? JSON.parse(stored) : [];
    },

    saveFlaggedQuestions(flaggedIds) {
        localStorage.setItem('flaggedQuestions', JSON.stringify(flaggedIds));
    },

    addFlaggedQuestion(questionId) {
        const flagged = this.getFlaggedQuestions();
        if (!flagged.includes(questionId)) {
            flagged.push(questionId);
            this.saveFlaggedQuestions(flagged);
        }
    },

    removeFlaggedQuestion(questionId) {
        const flagged = this.getFlaggedQuestions();
        const filtered = flagged.filter(id => id !== questionId);
        this.saveFlaggedQuestions(filtered);
    },

    validateQuizConfig(quizConfig) {
        if (!quizConfig?.categoryTags || !Array.isArray(quizConfig.categoryTags)) {
            return {
                isValid: false,
                error: "Please select at least one category."
            };
        }

        if (quizConfig.categoryTags.length === 0) {
            return {
                isValid: false,
                error: "Please select at least one category."
            };
        }

        const count = quizConfig.questionCount;
        
        // Handle special cases
        if (count === 'flagged') {
            const flaggedCount = this.getFlaggedQuestions().length;
            if (flaggedCount === 0) {
                return {
                    isValid: false,
                    error: "No flagged questions available. Flag some questions first!"
                };
            }
            return { isValid: true };
        }
        
        if (count === 'all') {
            // For 'all', we need to check if selected categories have questions
            // This would require access to questions data, so we'll trust it's valid if categories are selected
            return { isValid: true };
        }
        
        // Numeric validation
        const numCount = parseInt(count);
        if (isNaN(numCount) || numCount < 1 || numCount > 50) {
            return {
                isValid: false,
                error: "Please select a valid number of questions."
            };
        }

        return { isValid: true };
    },
    
    storage,
    array,
    dom
};