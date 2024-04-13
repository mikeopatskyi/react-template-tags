"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uid = exports.randomIntFromInterval = exports.toCamelCase = exports.isEmpty = exports.isClient = exports.stripTags = exports.classNames = void 0;
/**
 * Function to concatenate multiple class names into a single string,
 * filtering out any falsy values and removing extra spaces.
 *
 * @param {...(string | undefined | null)} args - Class names to concatenate.
 * @return {string} - Concatenated string of class names.
 */
var classNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Initialize result string
    var result = '';
    // Iterate over class names
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        // If the current argument is truthy, append it to the result with a leading space
        if (arg) {
            result += (result ? ' ' : '') + arg.trim();
        }
    }
    // Return the final result
    return result;
};
exports.classNames = classNames;
/**
 * Function to remove HTML tags from a given string.
 *
 * @param {string} str - The string from which to remove HTML tags.
 * @return {string} The modified string with HTML tags removed.
 */
var stripTags = function (str) {
    // Regular expression to match HTML tags
    // The 'gi' flags are used to perform a global search
    // (matching all occurrences) and case-insensitive search.
    var htmlTagsRegex = /<[^>]+>/gi;
    // Use the replace method with the regular expression and an empty string
    // as the replacement to remove the HTML tags from the original string.
    return str.replace(htmlTagsRegex, '');
};
exports.stripTags = stripTags;
/**
 * Function to check if the current environment is a client-side environment.
 * @returns {boolean} - True if the current environment is a client-side environment, false otherwise.
 */
exports.isClient = typeof window !== 'undefined';
/**
 * Checks if a given value is empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
var isEmpty = function (value) {
    // Check if the value is null, undefined, an empty string, an empty array, or an empty object
    return (value === null || // Check if the value is null
        value === undefined || // Check if the value is undefined
        (typeof value === 'string' && value.trim() === '') || // Check if the value is an empty string
        (Array.isArray(value) && value.length === 0) || // Check if the value is an empty array
        (typeof value === 'object' && Object.keys(value).length === 0) // Check if the value is an empty object
    );
};
exports.isEmpty = isEmpty;
/**
 * Transforms a string from a space-separated format to camel case.
 *
 * @param {string} input - The input string to be transformed.
 * @return {string} The transformed string in camel case.
 */
var toCamelCase = function (input) {
    // Use a regular expression with a global and case-insensitive flag to
    // match any whitespace followed by any character.
    // The replace method uses a callback function to transform each match.
    // The callback function takes two parameters: the matched substring (_) and
    // the captured character (char). The matched substring is replaced by
    // the captured character, converted to uppercase.
    return input.replace(/\s(.)/g, function (_, char) { return char.toUpperCase(); });
};
exports.toCamelCase = toCamelCase;
/**
 * Generates a random integer between a given minimum and maximum value (inclusive).
 *
 * @param {number} [min=1] - The minimum value of the range (default is 1).
 * @param {number} [max=5] - The maximum value of the range (default is 5).
 * @return {number} A random integer between min and max.
 */
var randomIntFromInterval = function (min, max) {
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 5; }
    /**
     * The formula used to generate a random integer is:
     * Math.floor(Math.random() * (max - min + 1) + min)
     *
     * Where:
     * Math.random() generates a random decimal between 0 and 1.
     * (max - min + 1) calculates the range of possible values.
     * Math.floor() rounds the result down to the nearest integer.
     * The final step adds the minimum value to the result.
     */
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomIntFromInterval = randomIntFromInterval;
/**
 * Generates a unique identifier (UID) of a specified length.
 *
 * @param {number} [length=5] - The length of the UID. Default is 5.
 * @return {string} The generated UID.
 */
var uid = function (length) {
    if (length === void 0) { length = 5; }
    // The possible characters that can be used to form the UID.
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var text = '';
    // Generate the UID by randomly selecting characters from the possible set.
    for (var i = 0; i < length; i++) {
        // Get a random index within the range of possible characters.
        // Convert it to a character and append it to the text.
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    // Return the generated UID.
    return text;
};
exports.uid = uid;
