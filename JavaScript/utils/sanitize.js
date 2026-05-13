/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} The sanitized string
 */
export function sanitizeHTML(input) {
  if (typeof input !== 'string') {
    return '';
  }

  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/**
 * Validates screen object structure
 * @param {object} screen - The screen object to validate
 * @returns {boolean} Whether the screen is valid
 */
export function validateScreen(screen) {
  if (!screen || typeof screen !== 'object') {
    return false;
  }

  return (
    typeof screen.id === 'string' &&
    screen.id.length > 0 &&
    typeof screen.label === 'string' &&
    screen.label.length > 0 &&
    typeof screen.template === 'string' &&
    screen.template.length > 0
  );
}
