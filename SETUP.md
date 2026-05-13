# Setup y Pruebas - Personal Web

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

## Pruebas

Ejecutar todas las pruebas:
```bash
npm test
```

Ver cobertura:
```bash
npm run test:coverage
```

Ver interfaz de pruebas:
```bash
npm run test:ui
```

## Build

```bash
npm run build
```

## Requisitos de Calidad (SonarQube)

✅ **Cobertura de Código**: 80%+
- Archivos con pruebas:
  - `JavaScript/utils/sanitize.test.js`
  - `JavaScript/components/menu.test.js`
  - `JavaScript/components/screens.test.js`
  - `JavaScript/script.test.js`

✅ **Seguridad**: Rating A
- Sanitización de inputs con `sanitizeHTML()`
- Validación de estructura con `validateScreen()`
- XSS Prevention implementado

## Estructura del Proyecto

```
tests/                    # Todos los archivos de prueba
├── utils/
│   └── sanitize.test.js
├── components/
│   ├── menu.test.js
│   └── screens.test.js
└── script.test.js

JavaScript/
├── script.js              # Lógica principal
├── components/
│   ├── menu.js           # Renderiza menú
│   └── screens.js        # Renderiza pantallas
├── data/
│   └── screens.js        # Datos de pantallas
└── utils/
    └── sanitize.js       # Funciones de seguridad

Styles/
└── styles.css            # Estilos

vite.config.js            # Config de Vite
vitest.config.js          # Config de Vitest (busca en tests/)
package.json              # Dependencias
sonar-project.properties  # Config de SonarQube
```

## Próximos Pasos: Migración a React

Cuando estés listo para React:

1. **Mantén la estructura de carpetas**: Funciona igual con componentes React
2. **Los datos en `screens.js`**: Úsalos como contexto o estado
3. **Reemplaza renderizaciones**: Las funciones de render → Componentes React
4. **Las pruebas**: Vitest sigue funcionando con React Testing Library

Ejemplo (futuro):
```jsx
// Componentes React reutilizarán la lógica
import { screens } from './data/screens';

export function Menu({ onSelect, activeId }) {
  return (
    <nav>
      {screens.map(screen => (
        <button 
          key={screen.id}
          onClick={() => onSelect(screen.id)}
          className={activeId === screen.id ? 'active' : ''}
        >
          {screen.label}
        </button>
      ))}
    </nav>
  );
}
```
