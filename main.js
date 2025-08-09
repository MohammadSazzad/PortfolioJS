var typed=new Typed(".text",{
    strings:["I am a Full stack developer" , "I love to code" , "I am a problem solver" , "I am a web developer" , "I am a software engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbarIcon a'); // Get all links in navbar
    const sections = document.querySelectorAll('section[id]');
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const menuOverlay = document.getElementById('menu-overlay');
    const modalClose = document.getElementById('modal-close');

    function toggleMobileMenu() {
        navbar.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto'; 
        }
    }

    function closeMobileMenu() {
        navbar.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listeners for menu controls
    menuToggle.addEventListener('click', toggleMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
    modalClose.addEventListener('click', closeMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('http') || this.classList.contains('btn-box-special')) {
                closeMobileMenu();
                return; 
            }
            
            e.preventDefault();
            
            closeMobileMenu();
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight || 70;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    navbar.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            if (!link.getAttribute('href').startsWith('http') && !link.classList.contains('btn-box-special')) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            }
        });
    });
});