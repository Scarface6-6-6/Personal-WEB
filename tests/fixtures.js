/**
 * Common test fixtures and utilities
 */

export const mockScreens = [
  { id: 'home', label: 'Inicio', template: '<p class="eyebrow">README</p><h2>Home</h2>' },
  { id: 'about', label: 'Acerca de', template: '<p class="eyebrow">About</p><h2>About</h2>' },
  { id: 'links', label: 'Links', template: '<p class="eyebrow">Links</p><h2>Links</h2>' }
];

export const invalidScreens = [
  { id: 'home', label: 'Inicio', template: '<p>Home</p>' },
  { id: '', label: 'Invalid', template: '<p></p>' },
  { id: 'about', label: 'About', template: '<p>About</p>' }
];

export const maliciousScreens = [
  { id: 'onclick="alert(1)"', label: 'Malicious', template: '<p>Content</p>' }
];

export function createMockElement() {
  return document.createElement('div');
}
