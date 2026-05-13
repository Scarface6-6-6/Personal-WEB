import { describe, it, expect } from 'vitest';
import { sanitizeHTML, validateScreen } from '../../JavaScript/utils/sanitize.js';

describe('sanitizeHTML', () => {
  it('should escape HTML special characters', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>')).not.toContain('<script>');
    expect(sanitizeHTML('<script>alert("xss")</script>')).toContain('&lt;script&gt;');
  });

  it('should handle normal text', () => {
    expect(sanitizeHTML('Hello World')).toBe('Hello World');
  });

  it('should handle empty string', () => {
    expect(sanitizeHTML('')).toBe('');
  });

  it('should return empty string for non-string input', () => {
    expect(sanitizeHTML(null)).toBe('');
    expect(sanitizeHTML(undefined)).toBe('');
    expect(sanitizeHTML(123)).toBe('');
    expect(sanitizeHTML({})).toBe('');
  });

  it('should escape dangerous attributes', () => {
    const result = sanitizeHTML('<div onclick="alert(1)">Click</div>');
    expect(result).toContain('&lt;');
    expect(result).not.toContain('<div');
  });
});

describe('validateScreen', () => {
  const validScreen = { id: 'home', label: 'Inicio', template: '<div>Home</div>' };

  it('should validate correct screen', () => {
    expect(validateScreen(validScreen)).toBe(true);
  });

  it('should reject invalid screens', () => {
    expect(validateScreen({ label: 'Inicio', template: '<div>Home</div>' })).toBe(false);
    expect(validateScreen({ id: '', label: 'Inicio', template: '<div>Home</div>' })).toBe(false);
    expect(validateScreen({ id: 'home', template: '<div>Home</div>' })).toBe(false);
    expect(validateScreen({ id: 'home', label: 'Inicio' })).toBe(false);
    expect(validateScreen(null)).toBe(false);
    expect(validateScreen(undefined)).toBe(false);
    expect(validateScreen('not an object')).toBe(false);
    expect(validateScreen(123)).toBe(false);
  });
});
