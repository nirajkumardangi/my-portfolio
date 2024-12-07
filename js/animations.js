// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Aside Section Animation
  gsap.from('.aside .logo a', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out',
  });

  gsap.from('.aside .nav-toggler', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out',
  });

  gsap.from('.aside .nav li', {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.4,
  });


  // Home Section Animations
  gsap.from('.home-info .hello', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.home',
      start: 'top 75%', // Start when .home is 75% in the viewport
    },
  });

  gsap.from('.home-info .my-profession', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.home',
      start: 'top 75%',
    },
  });

  gsap.from('.home-info p', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.home',
      start: 'top 75%',
    },
  });

  gsap.from('.home .home-img img', {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: '.home',
      start: 'top 75%',
    },
  });

  // About Section Animations
  gsap.from('.about .about-content .about-text h3', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
    },
  });

  gsap.from('.about .about-content .about-text p', {
    duration: 1.2,
    x: -50,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
    },
  });

  gsap.from('.about .about-content .personal-info .info-item', {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2, // Animates one after the other
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
    },
  });

  // Skills Section Animations
  gsap.from('.about .about-content .skills .skill-item', {
    duration: 1,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about .about-content .skills',
      start: 'top 80%',
    },
  });

  // Timeline Section Animations (Education & Experience)
  gsap.from('.about .about-content .timeline .timeline-item', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about .about-content .timeline',
      start: 'top 85%',
    },
  });

  // Services Section Animation
  gsap.from('.service .service-item', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.service .row',
      start: 'top 85%',
    },
  });

  // Portfolio Section Animation
  gsap.from('.portfolio .portfolio-item', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.portfolio .row',
      start: 'top 80%',
    },
  });

  // Contact Section Animation
  gsap.from('.contact .contact-info-item', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact .row',
      start: 'top 85%',
    },
  });

  gsap.from('.contact .contact-form .form-item', {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact .contact-form',
      start: 'top 85%',
    },
  });

  // Button Hover Effects (Optional Enhancement)
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power1.out' });
    });
  });
});
