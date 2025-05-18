    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.mid ul li a');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        }
        
        // Set active state for clicked item
        navItems.forEach(navItem => navItem.parentElement.classList.remove('active'));
        item.parentElement.classList.add('active');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Set active nav item based on scroll position
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItems.forEach(item => {
            item.parentElement.classList.remove('active');
            if (item.getAttribute('href') === `#${sectionId}`) {
              item.parentElement.classList.add('active');
            }
          });
        }
      });
    });

    // Create additional floating cyber elements
    document.addEventListener('DOMContentLoaded', () => {
      const colors = ['#00ffff', '#00ff88', '#0088ff', '#ff00ff'];
      const types = ['circle', 'square', 'triangle'];
      
      for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = `floating-cyber ${types[Math.floor(Math.random() * types.length)]}`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.opacity = `${Math.random() * 0.1 + 0.05}`;
        element.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        if (element.className.includes('circle') || element.className.includes('square')) {
          element.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
        } else if (element.className.includes('triangle')) {
          element.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
        document.body.appendChild(element);
      }
    });

    function showlogin(){
      window.location.href = "login_page.html";
    }

    function showregister(){
      window.location.href = "register_page.html";
    }