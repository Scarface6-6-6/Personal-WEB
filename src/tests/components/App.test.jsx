import { describe, expect, it, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../App';

vi.mock('../../assets/profile.jpeg', () => ({
  default: 'profile.jpeg'
}));

describe('App', () => {
  const renderAppAt = (path) => {
    window.history.pushState({}, '', path);
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<App />);
    });

    return root;
  };

  it('renders the shell with sidebar and home route', () => {
    renderAppAt('/');

    expect(document.querySelector('.shell')).toBeTruthy();
    expect(document.querySelector('.content')).toBeTruthy();
    expect(document.querySelector('aside')).toBeTruthy();
    expect(document.body.textContent).toContain('Hola, Soy');
  });

  it('renders configured routes', () => {
    const routes = [
      ['/about', 'Sobre'],
      ['/gustos', 'Las cosas que me hacen feliz'],
      ['/galeria', 'Mis Fotos'],
      ['/redes', 'Mis Redes']
    ];

    routes.forEach(([path, text]) => {
      document.body.innerHTML = '';
      renderAppAt(path);

      expect(document.body.textContent).toContain(text);
    });
  });
});
