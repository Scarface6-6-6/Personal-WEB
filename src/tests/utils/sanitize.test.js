import { describe, it, expect, beforeEach } from 'vitest';
import { sanitizeHTML, validateScreen } from '../../utils/sanitize';

describe('sanitizeHTML', () => {
  it('should sanitize HTML tags from input', () => {
    const input = '<script>alert("XSS")</script>Hello';
    const result = sanitizeHTML(input);
    expect(result).not.toContain('<script>');
    expect(result).toContain('Hello');
  });

  it('should return empty string for non-string input', () => {
    expect(sanitizeHTML(null)).toBe('');
    expect(sanitizeHTML(undefined)).toBe('');
    expect(sanitizeHTML(123)).toBe('');
    expect(sanitizeHTML({})).toBe('');
    expect(sanitizeHTML([])).toBe('');
  });

  it('should properly escape HTML entities', () => {
    const input = '<div>Test & Content</div>';
    const result = sanitizeHTML(input);
    expect(result).toContain('Test');
    expect(result).toContain('Content');
  });

  it('should handle empty strings', () => {
    expect(sanitizeHTML('')).toBe('');
  });

  it('should preserve plain text', () => {
    const input = 'Plain text without HTML';
    const result = sanitizeHTML(input);
    expect(result).toBe('Plain text without HTML');
  });
});

describe('validateScreen', () => {
  it('should validate a correct screen object', () => {
    const validScreen = {
      id: 'home',
      label: 'Home',
      template: '<div>Home</div>'
    };
    expect(validateScreen(validScreen)).toBe(true);
  });

  it('should reject null or undefined', () => {
    expect(validateScreen(null)).toBe(false);
    expect(validateScreen(undefined)).toBe(false);
  });

  it('should reject non-object values', () => {
    expect(validateScreen('string')).toBe(false);
    expect(validateScreen(123)).toBe(false);
    expect(validateScreen([])).toBe(false);
  });

  it('should reject objects with missing required fields', () => {
    expect(validateScreen({ id: 'home' })).toBe(false);
    expect(validateScreen({ label: 'Home' })).toBe(false);
    expect(validateScreen({ template: '<div>' })).toBe(false);
  });

  it('should reject objects with empty string values', () => {
    expect(validateScreen({ id: '', label: 'Home', template: '<div>' })).toBe(false);
    expect(validateScreen({ id: 'home', label: '', template: '<div>' })).toBe(false);
    expect(validateScreen({ id: 'home', label: 'Home', template: '' })).toBe(false);
  });

  it('should reject objects with non-string field values', () => {
    expect(validateScreen({ id: 123, label: 'Home', template: '<div>' })).toBe(false);
    expect(validateScreen({ id: 'home', label: null, template: '<div>' })).toBe(false);
    expect(validateScreen({ id: 'home', label: 'Home', template: [] })).toBe(false);
  });

  it('should accept objects with extra properties', () => {
    const screen = {
      id: 'home',
      label: 'Home',
      template: '<div>Home</div>',
      extra: 'property'
    };
    expect(validateScreen(screen)).toBe(true);
  });
});
