
        // Toggle Menu Mobile
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animação ao Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .sobre-content, .contact-card').forEach(el => {
            observer.observe(el);
        });

        // Formulário de Contato
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                assunto: document.getElementById('assunto').value,
                mensagem: document.getElementById('mensagem').value
            };

            console.log('Dados do formulário:', formData);
            
            // Mostrar mensagem de sucesso
            document.getElementById('successMessage').style.display = 'block';
            this.reset();

            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        });

        // Fechar menu ao redimensionar
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                document.getElementById('navLinks').classList.remove('active');
            }
        })
         const slides = document.querySelectorAll(".slide");
  let index = 0;

  document.querySelector(".next").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  };

  document.querySelector(".prev").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  };
