// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile dropdown functionality
    document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.parentElement.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('i');

            if (content && icon) {
                content.classList.toggle('hidden');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});