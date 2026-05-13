import { describe, it, expect, beforeEach } from 'vitest';
import { sanitizeHTML, validateScreen } from '../utils/sanitize.js';

describe('sanitizeHTML', () => {
  it('should escape HTML special characters', () => {
    const input = '<script>alert("xss")</script>';
    const result = sanitizeHTML(input);
    expect(result).not.toContain('<script>');
    expect(result).toContain('&lt;script&gt;');
  });

  it('should handle normal text', () => {
    const input = 'Hello World';
    const result = sanitizeHTML(input);
    expect(result).toBe('Hello World');
  });

  it('should handle empty string', () => {
    const result = sanitizeHTML('');
    expect(result).toBe('');
  });

  it('should return empty string for non-string input', () => {
    expect(sanitizeHTML(null)).toBe('');
    expect(sanitizeHTML(undefined)).toBe('');
    expect(sanitizeHTML(123)).toBe('');
    expect(sanitizeHTML({})).toBe('');
  });

  it('should escape dangerous attributes', () => {
    const input = '<div onclick="alert(1)">Click</div>';
    const result = sanitizeHTML(input);
    expect(result).toContain('&lt;');
    expect(result).not.toContain('onclick=');
  });
});

describe('validateScreen', () => {
  it('should validate a correct screen object', () => {
    const screen = {
      id: 'home',
      label: 'Inicio',
      template: '<div>Home</div>'
    };
    expect(validateScreen(screen)).toBe(true);
  });

  it('should reject screen with missing id', () => {
    const screen = {
      label: 'Inicio',
      template: '<div>Home</div>'
    };
    expect(validateScreen(screen)).toBe(false);
  });

  it('should reject screen with empty id', () => {
    const screen = {
      id: '',
      label: 'Inicio',
      template: '<div>Home</div>'
    };
    expect(validateScreen(screen)).toBe(false);
  });

  it('should reject screen with missing label', () => {
    const screen = {
      id: 'home',
      template: '<div>Home</div>'
    };
    expect(validateScreen(screen)).toBe(false);
  });

  it('should reject screen with missing template', () => {
    const screen = {
      id: 'home',
      label: 'Inicio'
    };
    expect(validateScreen(screen)).toBe(false);
  });

  it('should reject null or undefined', () => {
    expect(validateScreen(null)).toBe(false);
    expect(validateScreen(undefined)).toBe(false);
  });

  it('should reject non-object types', () => {
    expect(validateScreen('not an object')).toBe(false);
    expect(validateScreen(123)).toBe(false);
    expect(validateScreen([])).toBe(false);
  });
});
