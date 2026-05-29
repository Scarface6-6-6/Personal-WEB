import { describe, it, expect } from 'vitest';
import { MENU_ITEMS, SOCIAL_ITEMS } from '../../utils/constants';

describe('Constants', () => {
  describe('MENU_ITEMS', () => {
    it('should be an array', () => {
      expect(Array.isArray(MENU_ITEMS)).toBe(true);
    });

    it('should have required menu items', () => {
      expect(MENU_ITEMS.length).toBeGreaterThan(0);
    });

    it('should have all menu items with label and path', () => {
      MENU_ITEMS.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('path');
        expect(typeof item.label).toBe('string');
        expect(typeof item.path).toBe('string');
        expect(item.label.length).toBeGreaterThan(0);
        expect(item.path.length).toBeGreaterThan(0);
      });
    });

    it('should have specific menu items', () => {
      const labels = MENU_ITEMS.map((item) => item.label);
      expect(labels).toContain('About Me');
      expect(labels).toContain('Gustos');
      expect(labels).toContain('Galeria');
      expect(labels).toContain('Ahora');
      expect(labels).toContain('Links');
    });

    it('should have valid paths', () => {
      MENU_ITEMS.forEach((item) => {
        expect(item.path.startsWith('/')).toBe(true);
      });
    });
  });

  describe('SOCIAL_ITEMS', () => {
    it('should be an array', () => {
      expect(Array.isArray(SOCIAL_ITEMS)).toBe(true);
    });

    it('should have required social items', () => {
      expect(SOCIAL_ITEMS.length).toBeGreaterThan(0);
    });

    it('should have all social items with label, url, and icono', () => {
      SOCIAL_ITEMS.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('url');
        expect(item).toHaveProperty('icono');
        expect(typeof item.label).toBe('string');
        expect(typeof item.url).toBe('string');
        expect(item.label.length).toBeGreaterThan(0);
        expect(item.url.length).toBeGreaterThan(0);
      });
    });

    it('should have valid URLs', () => {
      SOCIAL_ITEMS.forEach((item) => {
        expect(item.url).toMatch(/^https?:\/\//);
      });
    });

    it('should have specific social platforms', () => {
      const labels = SOCIAL_ITEMS.map((item) => item.label);
      expect(labels).toContain('GitHub');
      expect(labels).toContain('Instagram');
      expect(labels).toContain('Twitch');
      expect(labels).toContain('Steam');
      expect(labels).toContain('Discord');
      expect(labels).toContain('PlayStation');
    });

    it('should have icons for each social item', () => {
      SOCIAL_ITEMS.forEach((item) => {
        expect(item.icono).toBeTruthy();
      });
    });
  });
});
