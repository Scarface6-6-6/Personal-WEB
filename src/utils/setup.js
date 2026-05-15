import { afterEach } from 'vitest';

// Limpia el DOM después de cada test
afterEach(() => {
  document.body.innerHTML = '';
});
