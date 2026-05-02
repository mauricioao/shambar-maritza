# 🍲 Shambar Maritza - Web de Precompra

> Plataforma de precompra del tradicional Shambar limeño. Directo a tu puerta.

[![Astro](https://img.shields.io/badge/Astro-FF5F1F?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 🌟 Descripción

**Shambar Maritza** es una aplicación web de precompra para el tradicional Shambar limeño. El sitio conecta a los clientes directamente con la vendedoras a través de WhatsApp para coordinar la entrega y el horario de reparto.

El Shambar es un plato típico de la gastronomía limeña, preparado con granos de maize chancho (maíz pelado), carne de chancho, carne de res, ají amarillo y especias tradicionales. Una delicia que representa la herencia culinaria del Perú.

---

## ✨ Características

- **Hero Animado**: Video de fondo con overlay de gradiente y efecto visual impactante
- **Historia y Tradición**: Sección sobre la historia y elaboración del Shambar
- **Zonas de Reparto**: Mapa visual de las zonas de entrega (Lince, San Isidro, Jesús María, Cercado)
- **Horario de Reparto**: Tres rangos disponibles (12:00-13:00, 13:00-14:00, 14:00-15:00)
- **Formulario de Precompra**: Captura de datos del cliente con validación
- **Integración WhatsApp**: Mensaje pre-formateado listo para enviar
- **Diseño Responsivo**: Funciona perfectamente en móvil, tablet y escritorio
- **Botón Flotante WhatsApp**: Acceso rápido en todo momento

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| **Astro** | Framework estático de alto rendimiento |
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos con variables CSS y animaciones nativas |
| **JavaScript Vanilla** | Interactividad sin dependencias |

### Estructura del Proyecto

```
shambar-maritza/
├── public/                  # Assets estáticos
│   └── assets/              # Imágenes y videos
├── src/
│   ├── components/          # Componentes Astro
│   │   ├── Hero.astro       # Sección hero con video
│   │   ├── AboutCarousel.astro  # Carrusel histórico
│   │   ├── Zonas.astro      # Mapa de zonas
│   │   ├── Horarios.astro   # Cards de horarios
│   │   ├── Ordenar.astro    # Formulario de precompra
│   │   ├── Footer.astro     # Pie de página
│   │   └── Navbar.astro     # Navegación
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base
│   └── pages/
│       └── index.astro      # Página principal
├── css/
│   └── styles.css           # Estilos globales
├── js/
│   └── app.js               # JavaScript principal
├── references/              # Referencias de diseño
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias
├── SPEC.md                  # Especificación del proyecto
└── DESIGN.md                # Documentación de diseño
```

### Sistema de Diseño

**Paleta de Colores - Tradición Limeña:**

```css
--color-bg-primary: #0D0D0D       /* Negro profundo - elegancia */
--color-bg-secondary: #1A1512     /* Marrón oscuro terroso */
--color-accent-gold: #D4A853      /* Oro andino - tradición */
--color-accent-copper: #B87333    /* Cobre - artesanos */
--color-accent-terracotta: #C75B39 /* Terracota - tierra */
--color-text-primary: #F5F0E8    /* Crema antiguo */
--color-text-secondary: #A89F94  /* Gris cálido */
--color-success: #4A7C59          /* Verde Lima */
```

**Tipografía:**

- **Títulos:** Playfair Display (serif, elegante, tradicional)
- **Texto:** Source Sans 3 (sans-serif, legible, moderno)
- **Decorativo:** Cinzel (ligaduras romanas - herencia)

---

## 🚀 Cómo Ejecutar

### Prerrequisitos

- Node.js 18.x o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/shambar-maritza.git
cd shambar-maritza

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:4321
```

### Producción

```bash
# Construir para producción
npm run build

# Los archivos estarán en dist/
```

---

## 📱 Despliegue

El proyecto está optimizado para desplegarse en:

- **Vercel** (recomendado): `npm run build` + arrastrar carpeta `dist/`
- **Netlify**: Conectando el repositorio automáticamente
- **GitHub Pages**: Usando GitHub Actions

### Variables de Entorno

No requiere variables de entorno. El formulario de WhatsApp usa un número hardcodeado que puedes cambiar en el componente `Ordenar.astro`.

---

## 🎨 Personalización

### Cambiar el número de WhatsApp

Editar `src/components/Ordenar.astro` y buscar la línea con el número:

```javascript
const whatsappNumber = "51918380045"; // Cambiar aquí
```

### Agregar más zonas de reparto

Editar `src/components/Zonas.astro` y agregar las nuevas zonas en el array correspondiente.

### Cambiar colores

Todos los colores están definidos en `css/styles.css` como variables CSS. Solo cambia los valores en `:root`.

---

## 📄 Documentación Adicional

- [SPEC.md](./SPEC.md) - Especificación técnica completa
- [DESIGN.md](./DESIGN.md) - Decisiones de diseño y UX

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, por favor abre un issue primero para discutir qué te gustaría cambiar.

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📅 Próximas Funcionalidades

- [ ] Sistema de reservas con calendario
- [ ] Panel de administración para la vendedora
- [ ] Notificaciones por WhatsApp automática
- [ ] Historial de pedidos del cliente

---

## 📱 Contacto

**Shambar Maritza** - Tradición Limeña

WhatsApp: [+51 918 380 045](https://wa.me/51918380045)

---

## 📜 Licencia

Este proyecto es para fines de demostración y portafolio.

---

*Construido con Astro y pasión por la gastronomía peruana 🇵🇪*