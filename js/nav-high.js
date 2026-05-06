// Highlight nav and dropdown based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the header to load
    setTimeout(function() {
        const path = window.location.pathname.split('/').pop().replace('.html', '');
        const currentPage = path || 'home'; // Default to 'home' if no path

        // Desktop navigation highlighting
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === 'index' && href === 'home')) {
                link.classList.add('text-primary', 'font-bold');
            }
        });

        // Desktop dropdown links
        document.querySelectorAll('.dropdown-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                // Highlight parent dropdown button
                let parent = link.closest('.group');
                if (parent) {
                    let btn = parent.querySelector('button');
                    if (btn) {
                        btn.classList.add('text-primary', 'font-bold');
                    }
                }
            }
        });

        // Desktop - Nested dropdown links
        document.querySelectorAll('.nested-dropdown-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || href.includes(currentPage)) {
                link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                // Highlight parent About button
                let nestedParent = link.closest('.nested-dropdown');
                if (nestedParent) {
                    let dropdownParent = nestedParent.closest('.group');
                    if (dropdownParent) {
                        let btn = dropdownParent.querySelector('button');
                        if (btn) {
                            btn.classList.add('text-primary', 'font-bold');
                        }
                    }
                }
            }
        });

        // Mobile navigation highlighting
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === 'index' && href === 'home')) {
                link.classList.add('text-primary', 'font-bold');
            }
        });

        // Mobile dropdown links
        document.querySelectorAll('.mobile-dropdown-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || href.includes(currentPage)) {
                link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                // Highlight parent dropdown button
                let parent = link.closest('.mobile-dropdown');
                if (parent) {
                    let btn = parent.querySelector('button');
                    if (btn) {
                        btn.classList.add('text-primary', 'font-bold');
                    }
                }
            }
        });
    }, 100); // Small delay to ensure header is loaded
});