import { afterEach } from 'vitest';
import "../i18n";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

afterEach(() => {
  document.body.innerHTML = '';
  globalThis.localStorage.setItem("language", "es");
});
