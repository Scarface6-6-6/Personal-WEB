# Personal Web - Portfolio

Un portafolio personal moderno construido con **React**, **Vite** y **React Router**.

## 🚀 Características

- ⚡ **Vite**: Build tool rápido y moderno
- ⚛️ **React 18**: Última versión de React
- 🔀 **React Router v7**: Navegación SPA
- 🎨 **Diseño moderno**: Interfaz limpia y responsiva
- 📱 **Mobile-first**: Completamente responsive
- ✅ **Vitest**: Testing framework incluido

## 📁 Estructura del Proyecto

```
Personal-WEB/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   └── Navbar.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Gustos.jsx
│   │   ├── Galeria.jsx
│   │   └── redes.jsx
│   ├── data/            # Datos estáticos
│   │   └── gustos.js
│   ├── Styles/          # Estilos CSS
│   │   ├── styles.css
│   │   ├── navbar.css
│   │   └── pages.css
│   ├── tests/           # Tests
│   │   └── setup.js
│   ├── Images/          # Imágenes
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Entry point
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
├── vitest.config.js     # Configuración de tests
└── package.json
```

## 🛠️ Instalación

### Requisitos previos
- Node.js 16+ instalado

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd Personal-WEB
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación se abrirá automáticamente en `http://localhost:3000`

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la versión optimizada para producción
- `npm run preview` - Previsualiza la versión compilada
- `npm run test` - Ejecuta los tests
- `npm run test:ui` - Ejecuta tests con interfaz gráfica
- `npm run test:coverage` - Genera reporte de cobertura

## 🎨 Tecnologías

- **React** - Librería UI
- **React Router DOM** - Navegación
- **Vite** - Build tool
- **Vitest** - Testing framework
- **CSS3** - Estilos con variables CSS personalizadas

## 📱 Páginas incluidas

- **Home** - Página de inicio con presentación
- **About** - Información personal
- **Gustos** - Música y comida favorita
- **Galería** - Galería de imágenes
- **Redes** - Enlaces a redes sociales

## 🎨 Personalización

### Variables CSS
En `src/Styles/pages.css` puedes personalizar los colores:

```css
:root {
  --primary-color: #00d4ff;      /* Color principal */
  --secondary-color: #1a1a2e;   /* Color secundario */
  --text-color: #e0e0e0;         /* Color del texto */
  --bg-color: #0f0f1e;           /* Color de fondo */
  --border-color: #2a2a3e;       /* Color de bordes */
}
```

## 🚀 Despliegue

### GitHub Pages

El sitio se publica automáticamente con GitHub Actions. Configura tu dominio personalizado en los ajustes del repositorio.

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👨‍💻 Autor

Scarface_666 - Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.
- `SONAR_HOST_URL`: variable opcional. Si no existe, usa `https://sonarcloud.io`.

Si el analisis falla con `Organization key does not exist`, revisa la organization key en la URL de SonarCloud. En una URL como `https://sonarcloud.io/project/overview?id=...&organization=...`, el valor despues de `organization=` es el que debe ir en `SONAR_ORGANIZATION`.
