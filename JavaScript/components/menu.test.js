import { describe, it, expect, beforeEach } from 'vitest';
import { renderMenu } from '../components/menu.js';

describe('renderMenu', () => {
  let menuElement;
  const mockScreens = [
    { id: 'home', label: 'Inicio', template: '<div>Home</div>' },
    { id: 'about', label: 'Acerca de', template: '<div>About</div>' },
    { id: 'links', label: 'Links', template: '<div>Links</div>' }
  ];

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
    const buttons = menuElement.querySelectorAll('button');
    expect(buttons.length).toBe(3);
  });

  it('should handle empty screens array', () => {
    renderMenu(menuElement, [], 'home');
    expect(menuElement.innerHTML).toBe('');
  });

  it('should sanitize screen labels', () => {
    const maliciousScreens = [
      { id: 'xss', label: '<script>alert("xss")</script>', template: '<div></div>' }
    ];
    renderMenu(menuElement, maliciousScreens, 'home');
    expect(menuElement.innerHTML).not.toContain('<script>');
  });

  it('should filter invalid screens', () => {
    const mixedScreens = [
      { id: 'home', label: 'Inicio', template: '<div>Home</div>' },
      { id: '', label: 'Invalid', template: '<div></div>' },
      { id: 'about', label: 'About', template: '<div>About</div>' }
    ];
    renderMenu(menuElement, mixedScreens, 'home');
    const buttons = menuElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should use type="button" for all buttons', () => {
    renderMenu(menuElement, mockScreens, 'home');
    const buttons = menuElement.querySelectorAll('button[type="button"]');
    expect(buttons.length).toBe(3);
  });
});
