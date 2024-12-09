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

  // Skills Section Animations

  // Timeline Section Animations (Education & 

  // Services Section Animation

  // Portfolio Section Animation

  // Contact Section Animation
  
});
