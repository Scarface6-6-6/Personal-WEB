import { describe, it, expect, beforeEach } from 'vitest';
import { renderMenu } from '../../JavaScript/components/menu.js';
import { mockScreens, invalidScreens, maliciousScreens } from '../fixtures.js';

describe('renderMenu', () => {
  let menuElement;

  beforeEach(() => {
    menuElement = document.createElement('div');
  });

  it('should render menu items', () => {
    renderMenu(menuElement, mockScreens, 'home');
    expect(menuElement.innerHTML).toContain('menu-item');
    expect(menuElement.innerHTML).toContain('Inicio');
    expect(menuElement.innerHTML).toContain('Acerca de');
    expect(menuElement.innerHTML).toContain('Links');
  });

  it('should set active class on current screen', () => {
    renderMenu(menuElement, mockScreens, 'home');
    expect(menuElement.innerHTML).toContain('menu-item active');
    expect(menuElement.innerHTML).toContain('data-screen="home"');
  });

  it('should render correct number of buttons', () => {
    renderMenu(menuElement, mockScreens, 'home');
    expect(menuElement.querySelectorAll('button').length).toBe(3);
  });

  it('should handle empty screens array', () => {
    renderMenu(menuElement, [], 'home');
    expect(menuElement.innerHTML).toBe('');
  });

  it('should sanitize screen labels', () => {
    renderMenu(menuElement, maliciousScreens, 'home');
    expect(menuElement.innerHTML).not.toContain('<script>');
  });

  it('should filter invalid screens', () => {
    renderMenu(menuElement, invalidScreens, 'home');
    expect(menuElement.querySelectorAll('button').length).toBe(2);
  });

  it('should use type="button" for all buttons', () => {
    renderMenu(menuElement, mockScreens, 'home');
    expect(menuElement.querySelectorAll('button[type="button"]').length).toBe(3);
  });
});
