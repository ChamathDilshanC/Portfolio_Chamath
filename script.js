document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Theme toggle
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                smoothScroll(document.documentElement, targetPosition, 1000);
            }

            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Add scroll-based animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load

    // Scroll to top functionality
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        smoothScroll(document.documentElement, 0, 500);
    });

    // Services section population
    const serviceContainer = document.getElementById('serviceContainer');
    if (serviceContainer) {
        const services = [
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
                title: 'Web Development',
                description: 'Creating responsive and scalable web applications using cutting-edge technologies and frameworks.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
                title: 'Mobile App Development',
                description: 'Developing high-performance, cross-platform mobile applications for iOS and Android.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
                title: 'Cybersecurity',
                description: 'Implementing advanced security measures to protect digital assets and ensure data integrity.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
                title: 'AI & Machine Learning',
                description: 'Leveraging artificial intelligence and machine learning algorithms to solve complex business problems.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
                title: 'Cloud Computing',
                description: 'Designing and implementing scalable cloud solutions for improved performance and cost-efficiency.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
                title: 'DevOps',
                description: 'Streamlining development and operations processes for faster deployment and improved collaboration.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
                title: 'Data Analytics',
                description: 'Extracting valuable insights from large datasets to drive informed business decisions.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>',
                title: 'IoT Solutions',
                description: 'Developing interconnected systems and devices for smart, data-driven environments.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16"></path><path d="M4 15h16"></path><rect width="20" height="12" x="2" y="6" rx="2"></rect><path d="M6 12v3"></path><path d="M10 12v3"></path><path d="M14 12v3"></path><path d="M18 12v3"></path><path d="M8 12v3"></path><path d="M12 12v3"></path><path d="M16 12v3"></path><path d="M2 16h20"></path></svg>',
                title: 'POS Development',
                description: 'Developing advanced Point of Sale solutions for streamlined transactions and efficient business operations.'
            }
        ];

        services.forEach((service, index) => {
            const card = document.createElement('div');
            card.classList.add('service-card');
            card.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            `;
            serviceContainer.appendChild(card);
        });
    }

    // Typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = [
            "Building digital products, brands, and experiences.",
            "Crafting innovative solutions for the modern web.",
            "Transforming ideas into powerful applications."
        ];
        typeText(typingElement, texts);
    }
});

function typeText(element, texts) {
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentText = texts[index];
        element.textContent = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            typingDelay = Math.random() * 50 + 100; // Typing speed
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at end of text
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            typingDelay = 50; // Deletion speed
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            typingDelay = 500; // Pause before next text
        }

        setTimeout(type, typingDelay);
    }

    type();
}

function smoothScroll(element, targetPosition, duration) {
    const startPosition = element.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        element.scrollTop = ease(timeElapsed, startPosition, distance, duration);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.gallery .item');
    let currentIndex = 0;
    let interval;

    function activateItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        activateItem(currentIndex);
    }

    function startAutoHover() {
        clearInterval(interval);
        interval = setInterval(nextItem, 3000);
    }

    // Activate the first item immediately
    activateItem(0);

    // Start the auto-hover animation after a delay
    setTimeout(startAutoHover, 3000);

    // Allow manual interaction to override the auto-hover
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            clearInterval(interval);
            currentIndex = index;
            activateItem(index);
        });

        item.addEventListener('mouseleave', startAutoHover);
    });

    // Add touch support for mobile devices
    items.forEach((item, index) => {
        item.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            clearInterval(interval);
            currentIndex = index;
            activateItem(index);
        });
    });

    // Restart auto-hover when touch ends
    document.addEventListener('touchend', startAutoHover);
});