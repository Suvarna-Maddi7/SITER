function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Toggle the nav menu visibility
    navLinks.classList.toggle('active');

    // Add or remove the "open" class for animation
    hamburger.classList.toggle('open');
  }

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    document.querySelectorAll('.animate-on-scroll').forEach(block => {
      observer.observe(block);
    });