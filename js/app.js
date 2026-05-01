/**
 * ═══════════════════════════════════════════════════════════════════
 * SHAMBAR MARITZA - App.js
 * ═══════════════════════════════════════════════════════════════════
 * Funcionalidad: Animaciones, navegación, formulario de precompra
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // 1. Constantes & Configuración
  // ═══════════════════════════════════════════════════════════════
  
  const PHONE_NUMBER = '51918380045'; // Número de WhatsApp (sin +)
  
  // Zonas válidas para entrega
  const ZONAS_VALIDAS = [
    'lince', 'san isidro', 'jesús maría', 'jesus maria', 
    'cercado', 'cercado de lima', 'centro de lima'
  ];

  // ═══════════════════════════════════════════════════════════════
  // 2. Elementos del DOM
  // ═══════════════════════════════════════════════════════════════
  
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const scrollTop = document.getElementById('scrollTop');
  const orderForm = document.getElementById('orderForm');
  const revealElements = document.querySelectorAll('.reveal-item, .reveal-up, .reveal-left, .reveal-right');

  // ═══════════════════════════════════════════════════════════════
  // 3. Navigation - Scroll Effect
  // ═══════════════════════════════════════════════════════════════
  
  function handleNavbarScroll() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function handleScrollTopVisibility() {
    if (window.scrollY > 500) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 4. Mobile Navigation Toggle
  // ═══════════════════════════════════════════════════════════════
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger
      const spans = navToggle.querySelectorAll('span');
      navToggle.classList.toggle('active');
    });
  }

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 5. Scroll Top Functionality
  // ═══════════════════════════════════════════════════════════════
  
  if (scrollTop) {
    scrollTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 6. Reveal on Scroll - Intersection Observer
  // ═══════════════════════════════════════════════════════════════
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ═══════════════════════════════════════════════════════════════
  // 7. Smooth Scroll for Anchor Links
  // ═══════════════════════════════════════════════════════════════
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 8. Form Handling - WhatsApp Integration
  // ═══════════════════════════════════════════════════════════════
  
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const cantidad = document.getElementById('cantidad').value;
      const horario = document.getElementById('horario').value;
      const notas = document.getElementById('notas').value.trim();
      
      // Validate that address is in valid zone
      const direccionLower = direccion.toLowerCase();
      const zonaValida = ZONAS_VALIDAS.some(zona => direccionLower.includes(zona));
      
      if (!zonaValida) {
        alert('⚠️ Lo sentimos, actualmente solo deliveramos en:\n• Lince\n• San Isidro\n• Jesús María\n• Cercado (zona norte)\n\nSi estás en otra zona, contáctanos directamente al 918 380 045');
        return;
      }
      
      // Format WhatsApp message
      let mensaje = `🍲 *NUEVO PEDIDO - SHAMBAR MARITZA* 🍲\n\n`;
      mensaje += `👤 *Nombre:* ${nombre}\n`;
      mensaje += `📱 *Teléfono:* +51 ${telefono}\n`;
      mensaje += `📍 *Dirección:* ${direccion}\n`;
      mensaje += `🍴 *Cantidad:* ${cantidad} porción(es)\n`;
      mensaje += `🕐 *Horario:* ${horario}\n`;
      
      if (notas) {
        mensaje += `📝 *Notas:* ${notas}\n`;
      }
      
      mensaje += `\n──────────────────────\n`;
      mensaje += `¡Gracias por tu pedido! 🙏`;
      
      // Encode message for WhatsApp
      const mensajeEncoded = encodeURIComponent(mensaje);
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${mensajeEncoded}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 9. Navbar Active State on Scroll
  // ═══════════════════════════════════════════════════════════════
  
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 10. Parallax Effect for Hero
  // ═══════════════════════════════════════════════════════════════
  
  const heroDecorations = document.querySelector('.hero-decorations');
  
  if (heroDecorations) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      
      if (scrollY < heroHeight) {
        const yPos = scrollY * 0.3;
        heroDecorations.style.transform = `translateY(${yPos}px)`;
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 11. Input Validation Feedback
  // ═══════════════════════════════════════════════════════════════
  
  const formInputs = document.querySelectorAll('.order-form input, .order-form select, .order-form textarea');
  
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.checkValidity()) {
        this.style.borderColor = 'var(--color-success)';
      } else {
        this.style.borderColor = 'var(--color-accent-terracotta)';
      }
    });
    
    input.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 12. Initialize on DOM Ready
  // ═══════════════════════════════════════════════════════════════
  
  document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class for initial animations
    document.body.classList.add('loaded');
    
    // Initial reveal check
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 13. Global Scroll Handler (throttled)
  // ═══════════════════════════════════════════════════════════════
  
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleNavbarScroll();
        handleScrollTopVisibility();
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ═══════════════════════════════════════════════════════════════
  // 14. Console Welcome Message
  // ═══════════════════════════════════════════════════════════════
  
  console.log(`
  ╔═══════════════════════════════════════════════════╗
  ║   🍲 Shambar Maritza - Web App                    ║
  ║   Tradición limeña en cada porción                ║
  ╚═══════════════════════════════════════════════════╝
  
  📱 ¿Tienes fotos o videos del Shambar?
     Colócalos en la carpeta /assets y actualiza el HTML
  
  🎨 ¿Necesitas modificaciones?
     El código está listo para personalizar
  
  ¡Buena suerte con las ventas! 🍴
  `);

})();

// ═══════════════════════════════════════════════════════════════════
// END OF APP.JS
// ═══════════════════════════════════════════════════════════════════