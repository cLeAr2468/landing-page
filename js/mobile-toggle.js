        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        });

        // Mobile dropdown functionality
        document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const content = this.parentElement.querySelector('.mobile-dropdown-content');
                const icon = this.querySelector('i');

                content.classList.toggle('hidden');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', function () {
                document.getElementById('mobileMenu').classList.add('hidden');
            });
        });