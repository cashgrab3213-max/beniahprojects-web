# 🎉 BENIAH Projects - React + Vite + Tailwind

## 📊 Resumen del Proyecto

Sitio web profesional completamente rediseñado con tecnología moderna:
- **Framework**: Vite + React 18 + React Router v6
- **Estilos**: Tailwind CSS + Custom animations
- **Iconos**: Lucide React
- **Build**: Optimizado para Namecheap

---

## 📁 Estructura Completa

```
beniahprojects-react/
│
├── 📄 Archivos de configuración
│   ├── package.json              (Dependencias y scripts)
│   ├── vite.config.js            (Config de Vite)
│   ├── tailwind.config.js        (Tema y extensiones)
│   ├── postcss.config.js         (PostCSS para Tailwind)
│   ├── .gitignore                (Archivos a ignorar)
│   └── .htaccess                 (Apache rewrite para React Router)
│
├── 📝 Documentación
│   ├── README.md                 (Instalación y uso)
│   └── DEPLOYMENT-NAMECHEAP.md   (Guía de despliegue)
│
├── 🌍 Web Pública
│   └── index.html                (HTML principal)
│
└── 📦 Código Fuente (src/)
    ├── main.jsx                  (Entry point)
    ├── App.jsx                   (Componente raíz + Router)
    ├── index.css                 (Estilos globales)
    │
    ├── 🧩 components/
    │   ├── Navbar.jsx            (Barra de navegación)
    │   ├── Footer.jsx            (Pie de página)
    │   ├── Logo.jsx              (Logo SVG)
    │   └── WhatsAppButton.jsx    (Botón flotante)
    │
    └── 📄 pages/
        ├── Home.jsx              (Página de inicio)
        ├── Servicios.jsx         (Servicios detallados)
        ├── Portafolio.jsx        (Galería de proyectos)
        └── Contacto.jsx          (Formulario de contacto)
```

---

## 🎯 Páginas Incluidas

### 1️⃣ **Home** (`/`)
- **Hero Section**: Título grande con gradient + subtítulo
- **Badges**: Etiqueta "PMO · GERENCIA DE PROYECTOS"
- **CTA Buttons**: Acciones primarias y secundarias
- **Stats Grid**: 150+ Proyectos, 10+ Años, 98% Satisfacción
- **Quiénes Somos**: Sección con descripción
- **Servicios Grid**: 6 cards con iconos y hover effects
- **CTA Final**: Gradiente verde + naranja

### 2️⃣ **Servicios** (`/servicios`)
- **Page Header**: Gradient background
- **6 Servicios Detallados**: Con iconos y listas de features
  - Planificación Estratégica
  - Coordinación y Gestión de Recursos
  - Seguimiento y Control
  - Aseguramiento de Calidad
  - Gestión de Riesgos & EHS
  - Mejora Continua
- **Metodología**: 5 pasos con números y conectores
- **Certificaciones**: PMI, ISO 9001, OHSAS 18001

### 3️⃣ **Portafolio** (`/portafolio`)
- **Filtros**: Todos, Residencial, Comercial, Industrial
- **6 Proyectos**: Con cards animadas
  - Residencial Monterrey ($2.5M)
  - Centro Comercial Sura ($1.8M)
  - Planta de Manufactura ($3.2M)
  - Conjunto Residencial Barrio Antiguo ($950K)
  - Oficinas Corporativas ($4.1M)
  - Torres Residenciales Valle Poniente ($5.8M)
- **Stats**: En cards glass morphism con fondo gradiente
- **CTA**: Enlace a contacto

### 4️⃣ **Contacto** (`/contacto`)
- **Información**: Teléfono, Email, Ubicación, Horario
- **Formulario**: Con validación en tiempo real
  - Nombre, Email, Teléfono, Empresa (obligatorios)
  - Tipo de Proyecto, Presupuesto (select)
  - Mensaje detallado (textarea)
  - Términos y condiciones (checkbox)
- **Integración**: mailto link automático
- **Cards de Beneficios**: 4 razones para contactar
- **CTA WhatsApp**: Verde con link directo

---

## 🎨 Diseño Visual

### Paleta de Colores
```
Verde Corporativo:      #1B5E3F (primary-900)
Naranja Principal:      #D97E3A (accent-orange)
Naranja Oscuro:         #C76B2D (accent-orange-dark)
Oro/Dorado:             #C4A040 (accent-gold)
Fondo Claro:            #F8F6F3 (neutral-light)
Texto Oscuro:           #0F1011 (neutral-dark)
Gradiente Oscuro:       #0F1011 → #0A0A0B (footer)
```

### Tipografía
```
Títulos:      Sora (display)      → Bold, 700, 800
Cuerpo:       Inter (body)        → Regular, 500, 600
```

### Efectos
```
Hover Cards:     Elevación + Sombra + Color border
Transiciones:    0.3s ease-out (smooth)
Animaciones:     Fade-in-up al scroll
Botones:         Gradiente + Shadow-hover
```

---

## 🔧 Componentes Reutilizables

### **Navbar**
```jsx
import Navbar from './components/Navbar'
```
- Logo interactivo
- Menú sticky con blur
- Iconos Facebook + Instagram animados
- Responsive mobile menu
- Active link indicator

### **Footer**
```jsx
import Footer from './components/Footer'
```
- Logo en esquina izquierda
- 4 secciones (Branding, Enlaces, Contacto, Redes)
- Información de contacto con iconos
- Links a todas las páginas
- Copyright dinámico

### **WhatsAppButton**
```jsx
import WhatsAppButton from './components/WhatsAppButton'
```
- Botón flotante verde
- Animación bounce infinita
- Enlace con mensaje predefinido
- Posición fixed (esquina inferior derecha)

### **Logo SVG**
```jsx
import Logo from './components/Logo'
```
- Logo personalizado en SVG
- Verde + Naranja + Oro
- Escalable y animado

---

## 📱 Responsividad

```css
/* Breakpoints Tailwind */
sm:  640px    (tablets pequeñas)
md:  768px    (tablets)
lg:  1024px   (desktops)
xl:  1280px   (desktops grandes)
```

### Adaptaciones por tamaño
- **Mobile**: Stack vertical, menú hamburguesa, botones full-width
- **Tablet**: 2 columnas en grillas
- **Desktop**: 3-4 columnas, layouts complejos

---

## 🚀 Características Técnicas

### Vite
- ⚡ HMR (Hot Module Reload)
- 📦 Build ultra rápido
- 🔧 Config mínima
- 🎯 Optimización automática

### React
- ⚛️ Componentes funcionales
- 🪝 Hooks (useState, useEffect)
- 🔄 Re-renders optimizados
- 📦 Código modular

### React Router
- 🛣️ SPA con navegación fluida
- 📄 4 rutas principales
- 🔗 Links sin reload
- 📱 Funciona en móvil

### Tailwind CSS
- 🎨 Utility-first
- 📦 Tree-shaking automático
- ⚡ CSS mínimo
- 🔍 Fácil personalización

---

## 📞 Datos de Contacto Configurados

```jsx
// Teléfono
+52 81 88688391

// Email
contacto@beniahprojects.com

// WhatsApp
https://wa.me/528188688391

// Facebook
https://www.facebook.com/beniahprojects

// Instagram
https://www.instagram.com/beniahprojects
```

---

## 🚀 Instalación y Ejecución

### Instalación Local
```bash
cd beniahprojects-react
npm install
npm run dev
```
Abre http://localhost:5173

### Build para Producción
```bash
npm run build
```
Genera carpeta `dist/` lista para Namecheap

### Vista Previa del Build
```bash
npm run preview
```

---

## 📊 Performance

### Optimizaciones incluidas
- ✅ Minificación de JS/CSS
- ✅ Compresión GZIP (.htaccess)
- ✅ Caché de navegador
- ✅ Code splitting automático
- ✅ Lazy loading de imágenes
- ✅ SEO meta tags

### Tamaño de bundle estimado
```
js:   ~35KB (gzipped)
css:  ~15KB (gzipped)
html: ~3KB
Total: ~53KB (muy ligero)
```

---

## 🔒 Seguridad

### Headers de seguridad (en .htaccess)
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

### Otras medidas
- ✅ HTTPS recomendado
- ✅ SPA protege contra CSRF
- ✅ Email en mailto (no expuesto)
- ✅ Validación en cliente

---

## 📖 Documentación

### Archivos incluidos
1. **README.md** - Guía general
2. **DEPLOYMENT-NAMECHEAP.md** - Paso a paso despliegue
3. **Este archivo** - Resumen técnico

---

## ✨ Características Premium

- ✅ Diseño moderno y corporativo
- ✅ Animaciones suaves
- ✅ Responsive design
- ✅ Formulario funcional
- ✅ WhatsApp integrado
- ✅ Redes sociales
- ✅ SEO ready
- ✅ Fast loading
- ✅ Accesible (a11y)
- ✅ Fácil de personalizar

---

## 🎓 Tecnologías Usadas

```json
{
  "build": "Vite 5.0+",
  "framework": "React 18.2+",
  "routing": "React Router 6.20+",
  "styling": "Tailwind CSS 3.3+",
  "icons": "Lucide React 0.292+",
  "deploy": "Apache + .htaccess"
}
```

---

## 📋 Checklist de Personalización

```
[ ] Verificar datos de contacto
    [ ] Teléfono: +52 81 88688391
    [ ] Email: contacto@beniahprojects.com
    [ ] WhatsApp: 528188688391

[ ] URLs de redes sociales
    [ ] Facebook: https://www.facebook.com/beniahprojects
    [ ] Instagram: https://www.instagram.com/beniahprojects

[ ] Contenido de páginas
    [ ] Home: Títulos y descripciones
    [ ] Servicios: Detalles específicos
    [ ] Portafolio: Proyectos reales
    [ ] Contacto: Información actualizada

[ ] Colores (si deseas cambiar)
    [ ] Verde primario: #1B5E3F
    [ ] Naranja: #D97E3A
    [ ] Oro: #C4A040

[ ] Antes de desplegar
    [ ] npm install ejecutado
    [ ] npm run build sin errores
    [ ] dist/ generada correctamente
    [ ] .htaccess listo
```

---

## 🎉 ¡Listo para Producción!

Tu sitio React está:
- ✅ Completamente funcional
- ✅ Optimizado para performance
- ✅ Responsivo en todos los dispositivos
- ✅ SEO friendly
- ✅ Seguro
- ✅ Fácil de actualizar
- ✅ Listo para Namecheap

**Próximos pasos**:
1. Personalizar colores si es necesario
2. Ejecutar `npm run build`
3. Seguir guía en DEPLOYMENT-NAMECHEAP.md
4. Desplegar en Namecheap

---

**Versión**: 2.0 Corporativa React  
**Fecha**: Junio 2024  
**Status**: ✅ Listo para Producción
