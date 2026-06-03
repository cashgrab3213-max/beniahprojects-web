# 🚀 Guía de Despliegue en Namecheap

## Opción 1: Despliegue Estático (Recomendado para comenzar)

### Paso 1: Build Local
```bash
npm install
npm run build
```

Esto genera la carpeta `dist/` con todos los archivos listos para producción.

### Paso 2: Subir a Namecheap

1. **Acceder a cPanel**
   - URL: https://beniahprojects.com:2083
   - Usuario: Tu email de Namecheap
   - Contraseña: Tu contraseña cPanel

2. **File Manager → public_html**
   - Abre File Manager
   - Navega a: `public_html/`
   - **IMPORTANTE**: Elimina TODOS los archivos antiguos

3. **Subir archivos del build**
   - Sube TODO el contenido de la carpeta `dist/`
   - Incluye carpetas y archivos ocultos
   - Asegúrate de que `index.html` esté en la raíz de `public_html/`

4. **Subir .htaccess**
   - Sube el archivo `.htaccess` incluido en la raíz de `public_html/`
   - Este es CRÍTICO para que React Router funcione correctamente

### Paso 3: Verificar

1. Abre https://beniahprojects.com
2. Recarga con Ctrl+Shift+R (limpiar caché)
3. Navega a todas las páginas:
   - `/` (Home)
   - `/servicios` (Servicios)
   - `/portafolio` (Portafolio)
   - `/contacto` (Contacto)

**Todas las rutas deben funcionar sin error 404.**

---

## Opción 2: Despliegue con Node.js (Avanzado)

### Requisitos
- Node.js 16+ instalado en Namecheap
- Acceso a terminal/SSH

### Paso 1: Preparar el servidor

```bash
# Conectar vía SSH
ssh usuario@beniahprojects.com

# Ir a public_html
cd public_html

# Eliminar archivos antiguos
rm -rf *
```

### Paso 2: Subir proyecto

```bash
# Sube el proyecto completo (no solo dist/)
# Usa SFTP o scp
```

### Paso 3: Instalar y ejecutar

```bash
npm install
npm run build

# Opción A: Con PM2 (recomendado)
npm install -g pm2
pm2 start "npm run preview" --name beniah
pm2 startup
pm2 save

# Opción B: Con npm
npm run preview &
```

---

## 🐛 Solución de Problemas

### Error: "404 Not Found" en rutas internas

**Problema**: Las páginas `/servicios`, `/portafolio`, `/contacto` muestran 404

**Solución**:
1. Verifica que `.htaccess` esté en `public_html/`
2. Asegúrate de que mod_rewrite está habilitado en Apache
3. Contacta a Namecheap si mod_rewrite no está disponible

**En cPanel**:
```
Home > Software > MultiPHP INI Editor
```
Verifica que `mod_rewrite` esté en "Enabled"

### CSS/JS no carga

**Problema**: Los estilos o scripts no aplican

**Solución**:
1. Limpia caché del navegador: Ctrl+Shift+Supr
2. Recarga fuerza: Ctrl+Shift+R
3. Verifica que los archivos `.js` y `.css` estén en `public_html/`

### Formulario no envía email

**Problema**: El formulario no abre el cliente de email

**Solución**:
1. Verifica que configuraste tu email en `src/pages/Contacto.jsx`
2. El email debe ser válido: `contacto@beniahprojects.com`
3. Asegúrate de tener un cliente de email instalado en tu máquina

---

## 📊 Estructura de archivos en Namecheap

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-xxxxx.js
│   └── index-xxxxx.css
└── (otros archivos generados por Vite)
```

**IMPORTANTE**: 
- `index.html` en raíz
- `.htaccess` en raíz
- Carpeta `assets/` con bundles minificados

---

## 🔒 Seguridad

### Headers de seguridad (incluidos en .htaccess)

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

### Deshabilitar listado de directorios

En `.htaccess`:
```apache
Options -Indexes
```

---

## ⚡ Optimización

### Compresión GZIP
Ya incluida en `.htaccess` - reduce tamaño 70%

### Caché de navegador
Ya configurada en `.htaccess`:
- CSS/JS: 30 días
- Imágenes: 1 año
- HTML: 1 hora (sin caché, para actualizaciones)

### Minificación
Vite genera automáticamente bundles minificados en `npm run build`

---

## 📈 Monitoreo

### Verificar que está online

```bash
curl -I https://beniahprojects.com
```

Debe retornar:
```
HTTP/1.1 200 OK
Content-Type: text/html
```

### Logs en Namecheap

```
cPanel → Logs → Error log
```

Revisa aquí si hay problemas.

---

## 🔄 Actualización de contenido

### Para actualizar el sitio:

1. **Editar código localmente**
   ```bash
   # Editar archivos en src/
   npm run dev  # Probar localmente
   npm run build  # Compilar
   ```

2. **Subir cambios**
   - Elimina contenido de `public_html/`
   - Sube nuevo contenido de `dist/`
   - Recarga el navegador

---

## 📞 Soporte

### Problemas comunes con Namecheap

1. **mod_rewrite no funciona**
   - Contacta a soporte: support.namecheap.com
   - Pide que habiliten mod_rewrite

2. **SSL/HTTPS no funciona**
   - Namecheap proporciona SSL gratis
   - Debe estar activado automáticamente
   - Si no: cPanel → SSL/TLS Status

3. **Base de datos no conecta**
   - Este proyecto NO requiere base de datos
   - El formulario envía por mailto

---

## ✅ Checklist Final

```
ANTES DE DESPLEGAR
  [ ] npm run build ejecutado sin errores
  [ ] dist/ contiene index.html y assets/
  [ ] .htaccess está listo
  [ ] Email contacto actualizado en Contacto.jsx
  [ ] Teléfono WhatsApp actualizado

DURANTE DESPLIEGUE
  [ ] public_html/ limpiado
  [ ] index.html en raíz de public_html/
  [ ] .htaccess en raíz de public_html/
  [ ] Carpeta assets/ presente
  [ ] Todos los archivos subidos correctamente

DESPUÉS DE DESPLIEGUE
  [ ] https://beniahprojects.com abre sin errores
  [ ] Home page carga correctamente
  [ ] Navegación funciona (/servicios, /portafolio, etc)
  [ ] CSS y colores están presentes
  [ ] Formulario funciona
  [ ] WhatsApp button funciona
  [ ] Redes sociales enlazan correctamente
  [ ] Responsive en móvil
  [ ] Recarga limpia: Ctrl+Shift+R
```

---

## 🎉 ¡Listo!

Tu sitio React está desplegado en Namecheap con todas las características modernas y seguridad incluida.

**Próximos pasos opcionales**:
1. Registrar en Google Search Console
2. Registrar en Google Analytics
3. Crear XML Sitemap
4. Configurar CDN (si es necesario)

---

**Última actualización**: Junio 2024
