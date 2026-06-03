# BENIAH Projects - Vite + React + Tailwind

Sitio web profesional para BENIAH Projects (PMO de construcción) construido con Vite, React 18, React Router y Tailwind CSS.

## 🎯 Características

- ✅ **Vite + React 18** - Build rápido y desarrollo ágil
- ✅ **React Router v6** - Navegación SPA moderna
- ✅ **Tailwind CSS** - Estilos utility-first
- ✅ **Lucide React** - Iconos profesionales
- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Transiciones CSS personalizadas
- ✅ **Contacto Integrado** - Formulario con validación
- ✅ **WhatsApp Flotante** - Botón de contacto directo
- ✅ **SEO Friendly** - Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
beniahprojects-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   ├── Footer.jsx          # Pie de página
│   │   ├── WhatsAppButton.jsx  # Botón flotante WhatsApp
│   │   └── Logo.jsx            # Logo SVG
│   ├── pages/
│   │   ├── Home.jsx            # Página de inicio
│   │   ├── Servicios.jsx       # Servicios detallados
│   │   ├── Portafolio.jsx      # Galería de proyectos
│   │   └── Contacto.jsx        # Formulario de contacto
│   ├── App.jsx                 # Componente principal con rutas
│   ├── index.css               # Estilos globales
│   └── main.jsx                # Entry point
├── index.html                   # HTML principal
├── vite.config.js              # Config de Vite
├── tailwind.config.js          # Config de Tailwind
├── postcss.config.js           # Config de PostCSS
├── package.json                # Dependencias
└── .gitignore                  # Archivos a ignorar
```

## 🚀 Instalación

### Requisitos previos
- Node.js 16+ o superior
- npm o yarn

### Pasos

1. **Clonar o descargar el repositorio**
```bash
cd beniahprojects-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio se abrirá en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` lista para desplegar.

### Verificar el build localmente
```bash
npm run preview
```

## 📝 Configuración de Datos

### Actualizar Información de Contacto

Editar en `src/components/Footer.jsx`:
```jsx
const contactPhone = '528188688391'
const contactEmail = 'contacto@beniahprojects.com'
```

### Actualizar URLs de Redes Sociales

En `src/components/Navbar.jsx` y `src/components/Footer.jsx`:
```jsx
// Facebook
https://www.facebook.com/beniahprojects

// Instagram
https://www.instagram.com/beniahprojects
```

## 🎨 Personalización de Colores

En `tailwind.config.js`:
```js
colors: {
  primary: {
    900: '#1B5E3F',    // Verde
  },
  accent: {
    orange: '#D97E3A', // Naranja
    gold: '#C4A040',   // Oro
  }
}
```

## 📱 Páginas Incluidas

### Home (`/`)
- Hero section con gradient
- Estadísticas
- Sección "Quiénes Somos"
- Grid de servicios
- CTA principal

### Servicios (`/servicios`)
- 6 servicios detallados con iconos
- Metodología de 5 pasos
- Certificaciones y estándares

### Portafolio (`/portafolio`)
- Galería de 6 proyectos
- Filtros por categoría (Residencial, Comercial, Industrial)
- Estadísticas de la empresa

### Contacto (`/contacto`)
- Información de contacto (teléfono, email, ubicación, horario)
- Formulario de contacto con validación
- Integración con mailto
- CTA de WhatsApp

## 🔧 Componentes Reutilizables

### Navbar
```jsx
import Navbar from './components/Navbar'
```
- Logo clickeable
- Menú sticky con blur
- Iconos de redes sociales
- Responsive con menú móvil

### Footer
```jsx
import Footer from './components/Footer'
```
- Logo en esquina
- Enlaces a todas las páginas
- Información de contacto
- Redes sociales

### WhatsApp Button
```jsx
import WhatsAppButton from './components/WhatsAppButton'
```
- Botón flotante animado
- Enlace directo a WhatsApp
- Mensaje predefinido

## 🎯 Variables de Tailwind Personalizadas

### Colores
- `primary-900`: Verde corporativo
- `accent-orange`: Naranja principal
- `accent-gold`: Oro/dorado
- `neutral-light`: Fondo claro
- `neutral-dark`: Texto oscuro

### Sombras Personalizadas
```css
shadow-sm   /* Sombra suave */
shadow-md   /* Sombra media */
shadow-lg   /* Sombra grande */
shadow-hover /* Sombra especial para hover */
```

### Fuentes
- Display: Sora (títulos)
- Body: Inter (texto)

## 📦 Dependencias

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "lucide-react": "^0.292.0"
}
```

## 🚢 Deploy a Namecheap

### Opción 1: Build Estático

1. Ejecutar `npm run build`
2. Subir contenido de `dist/` a `public_html/` en cPanel
3. Configurar rewrite en `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Opción 2: Con Node.js (Recomendado)

1. Instalar Node.js en Namecheap
2. Subir proyecto completo
3. Ejecutar en el servidor:
```bash
npm install
npm run build
npm run preview
```

## 📚 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Previsualiza el build
```

## 🎓 Recursos

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Contacto

- **Email**: contacto@beniahprojects.com
- **Teléfono**: +52 81 88688391
- **WhatsApp**: https://wa.me/528188688391

## 📄 Licencia

BENIAH Projects 2024 © Todos los derechos reservados.

---

**Última actualización**: Junio 2024  
**Versión**: 2.0 Corporativa
