# Shambar Maritza - Web App de Precompra

## 1. Project Overview

**Nombre del Proyecto:** Shambar Maritza - Web de Precompra  
**Tipo:** Single Page Application (Landing + Precompra)  
**Funcionalidad Principal:** Plataforma de precompra de Shambar (plato típico limeño) que conecta al cliente directamente con el vendedor vía WhatsApp para coordinar entrega y horario de reparto.  
**Usuario Objetivo:** Personas que desean ordenar Shambar tradicional en la zona de Lince, San Isidro, Jesús María y Cercado (Lima, Perú).

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Secciones de la página (Scroll Vertical):**

1. **Hero Section** - Impactante con video/animation de fondo representando la esencia del Shambar
2. **Sobre el Shambar** - Historia y tradición del plato
3. **Zona de Reparto** - Mapa visual de las zonas de entrega
4. **Horario de Reparto** - Los 3 rangos disponibles
5. **Precompra** - Formulario para ordenar
6. **Contacto Directo** - Botón flotante de WhatsApp + Footer

**Responsive Breakpoints:**
- Mobile: < 768px (una sola columna)
- Tablet: 768px - 1024px (dos columnas donde aplique)
- Desktop: > 1024px (layout completo)

### 2.2 Visual Design

**Paleta de Colores - Inspirada en la tradición limeña:**

```css
--color-bg-primary: #0D0D0D;          /* Negro profundo - elegancia */
--color-bg-secondary: #1A1512;         /* Marrón oscuro terroso */
--color-accent-gold: #D4A853;          /* Oro andino - tradición */
--color-accent-copper: #B87333;        /* Cobre - artesanos */
--color-accent-terracotta: #C75B39;    /* Terracota - tierra */
--color-text-primary: #F5F0E8;         /* Crema antiguo */
--color-text-secondary: #A89F94;       /* Gris cálido */
--color-success: #4A7C59;              /* Verde Lima */
```

**Tipografía:**

- **Títulos principales:** "Playfair Display" (serif, elegante, tradicional)
- **Subtítulos y texto:** "Source Sans 3" (sans-serif, legible, moderno)
- **Textos decorativos/fechas:** "Cinzel" (ligaduras romanas - herencia)

**Escala de tamaños:**
- Hero Title: 72px (desktop) / 42px (mobile)
- Section Titles: 48px (desktop) / 32px (mobile)
- Subtítulos: 24px
- Body: 16px
- Small: 14px

**Sistema de espaciado:**
- Base: 8px
- Section padding: 80px vertical (desktop) / 48px (mobile)
- Component gaps: 24px / 32px

### 2.3 Animaciones y Effects

**Animaciones de entrada (reveal):**
- Fade-in con translateY positivo (staggered delay de 0.1s por elemento)
- Duración: 0.8s con easing "cubic-bezier(0.22, 1, 0.36, 1)"

**Animaciones específicas:**

1. **Hero:** Video de fondo en loop (silencioso) con overlay de gradiente
2. **Textos flotantes:** Movimiento sutil de elementos decorativos (como vapor de olla)
3. **Icons de horario:** Pulse animation en hover
4. **Mapa de zona:** Highlight animated de las áreas de reparto
5. **Transiciones de sección:** Parallax suave

**Micro-interacciones:**
- Hover en botones: scale(1.05) + shadow expand
- Hover en tarjetas: lift con shadow
- Input focus: border glow gold

**Elementos culturales estáticos:**
- Iconografía de Ollas de barro
- Bordes Inspired en ренес oficios manuales
- Patterns geométricos inspirados en textiles del valle del Rímac

### 2.4 Components

**Navbar (Sticky):**
- Logo "Shambar Maritza" a la izquierda
- Links de navegación (Sobre, Zonas, Horarios, Ordenar)
- Botón de WhatsApp destacado a la derecha

**Hero Section:**
- Video de fondo (placeholder - usuario proveerá)
- Overlay oscuro con gradiente radial
- Título principal + tagline
- CTA button "Ordenar Ahora"

**Card de Horario:**
- Icono de reloj
- Rango horario (12:00 - 13:00, 13:00 - 14:00, 14:00 - 15:00)
- Estado (disponible)
- Hover: lift effect

**Mapa de Zonas:**
- Illustration/canvas de Lince con vecindarios cercanos
- Areas resaltadas con colores (Lince, San Isidro, Jesús María, Cercado)
- Tooltip con información

**Formulario de Precompra:**
- Campo: Nombre completo
- Campo: Teléfono (pre-filled con código Perú)
- Campo: Dirección (con validación de zona)
- Campo: Cantidad de porciones
- Selector: Horario de preferencia
- Campo: Notas adicionales
- Botón: "Enviar pedido por WhatsApp"

**Botón Flotante WhatsApp:**
- Fixed position bottom-right
- Icono de WhatsApp animate pulse
- Link directo a: https://wa.me/51918380045

**Footer:**
- Copyright
- "Shambar Maritza - Tradición Limeña"
- Links a redes (opcional)

---

## 3. Functionality Specification

### 3.1 Core Features

**1. Visual Showcase**
- Gallery de imágenes/video del Shambar (placeholder blocks para contenido del usuario)
- Animaciones culturales en background

**2. Información de Reparto**
- Visualización clara de zonas de reparto
- Verificación de zona antes de ordenar (alerta si fuera de zona)

**3. Sistema de Horarios**
- 3 rangos fijos: 12:00-13:00, 13:00-14:00, 14:00-15:00
- Disponibilidad visual
- Selección en formulario

**4. Precompra via WhatsApp**
- Formulario captura datos del cliente
- Al submit, genera mensaje de WhatsApp pre-formateado:
  ```
  Hola Maritza! 📲
  Mi nombre es: [NOMBRE]
  Teléfono: [TELÉFONO]
  Dirección: [DIRECCIÓN]
  Cantidad: [CANTIDAD] porción(es)
  Horario preferido: [HORARIO]
  Notas: [NOTAS]
  ```
- Redirección a WhatsApp Web/App con mensaje listo

### 3.2 User Flow

1. Usuario llega a la página
2. Ve el Hero con video/imagen del Shambar
3. Scroll往下了解更多 (historia, zonas, horarios)
4. Llega a la sección de precompra
5. Completa el formulario
6. Click en "Enviar pedido"
7. Se abre WhatsApp con mensaje pre-formateado
8. Usuario envía y esperar confirmación de Maritza

### 3.3 Edge Cases

- **Fuera de zona:** Mostrar mensaje amigable indicando que no llegamos a esa zona
- **Campos vacíos:** Validación inline antes de permitir submit
- **WhatsApp no disponible:** Opción fallback de copiar mensaje al portapapeles

---

## 4. Technical Implementation

**Stack:**
- HTML5 Semántico
- CSS3 con Variables CSS y animaciones CSS nativas
- JavaScript Vanilla (sin frameworks para velocidad)
- Google Fonts CDN

**Estructura de archivos:**
```
/index.html
/css/styles.css
/js/app.js
/assets/ (placeholder para imágenes/videos del usuario)
```

**Recursos externos:**
- Google Fonts: Playfair Display, Source Sans 3, Cinzel
- Font Awesome (iconos)

---

## 5. Assets Requeridos del Usuario

El usuario proveerá:
1. Video de fondo para Hero (mp4, 1920x1080, silent)
2. Foto principal del Shambar (alta resolución)
3. Foto de Ingredients del Shambar (opcional)
4. Foto de Ollas/tradición (opcional)
5. Fotos de zona (si desea替换 el illustration)

*Mientras tanto, usar placeholders animados de alta calidad*

---

## 6. Acceptance Criteria

- [ ] Página carga sin errores
- [ ] Animaciones son fluidas (60fps)
- [ ] Formulario valida campos requeridos
- [ ] WhatsApp link genera mensaje correcto con datos del formulario
- [ ] Diseño es responsive (mobile, tablet, desktop)
- [ ] Los colores y tipografía coinciden con la especificación
- [ ] Botón flotante de WhatsApp siempre visible
- [ ] Animaciones culturales representan herencia peruana
- [ ] Lighthouse performance score > 90