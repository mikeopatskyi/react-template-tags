/**
 * Function to concatenate multiple class names into a single string,
 * filtering out any falsy values and removing extra spaces.
 *
 * @param {...(string | undefined | null)} args - Class names to concatenate.
 * @return {string} - Concatenated string of class names.
 */
export const classNames = (...args: (string | undefined | null)[]): string => {
  // Initialize result string
  let result = '';

  // Iterate over class names
  for (const arg of args) {
    // If the current argument is truthy, append it to the result with a leading space
    if (arg) {
      result += (result ? ' ' : '') + arg.trim();
    }
  }

  // Return the final result
  return result;
};

/**
 * Function to remove HTML tags from a given string.
 *
 * @param {string} str - The string from which to remove HTML tags.
 * @return {string} The modified string with HTML tags removed.
 */
export const stripTags = (str: string): string => {
  // Regular expression to match HTML tags
  // The 'gi' flags are used to perform a global search
  // (matching all occurrences) and case-insensitive search.
  const htmlTagsRegex = /<[^>]+>/gi;

  // Use the replace method with the regular expression and an empty string
  // as the replacement to remove the HTML tags from the original string.
  return str.replace(htmlTagsRegex, '');
};

/**
 * Function to check if the current environment is a client-side environment.
 * @returns {boolean} - True if the current environment is a client-side environment, false otherwise.
 */
export const isClient = typeof window !== 'undefined';

/**
 * Checks if a given value is empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
export const isEmpty = (value: any): boolean => {
  // Check if the value is null, undefined, an empty string, an empty array, or an empty object
  return (
    value === null || // Check if the value is null
    value === undefined || // Check if the value is undefined
    (typeof value === 'string' && value.trim() === '') || // Check if the value is an empty string
    (Array.isArray(value) && value.length === 0) || // Check if the value is an empty array
    (typeof value === 'object' && Object.keys(value).length === 0) // Check if the value is an empty object
  );
};

/**
 * Transforms a string from a space-separated format to camel case.
 *
 * @param {string} input - The input string to be transformed.
 * @return {string} The transformed string in camel case.
 */
export const toCamelCase = (input: string): string => {
  // Use a regular expression with a global and case-insensitive flag to
  // match any whitespace followed by any character.
  // The replace method uses a callback function to transform each match.
  // The callback function takes two parameters: the matched substring (_) and
  // the captured character (char). The matched substring is replaced by
  // the captured character, converted to uppercase.
  return input.replace(/\s(.)/g, (_, char) => char.toUpperCase());
};

/**
 * Generates a random integer between a given minimum and maximum value (inclusive).
 *
 * @param {number} [min=1] - The minimum value of the range (default is 1).
 * @param {number} [max=5] - The maximum value of the range (default is 5).
 * @return {number} A random integer between min and max.
 */
export const randomIntFromInterval = (min: number = 1, max: number = 5): number => {
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

/**
 * Generates a unique identifier (UID) of a specified length.
 *
 * @param {number} [length=5] - The length of the UID. Default is 5.
 * @return {string} The generated UID.
 */
export const uid = (length: number = 5): string => {
  // The possible characters that can be used to form the UID.
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';

  // Generate the UID by randomly selecting characters from the possible set.
  for (let i = 0; i < length; i++) {
    // Get a random index within the range of possible characters.
    // Convert it to a character and append it to the text.
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  // Return the generated UID.
  return text;
};
