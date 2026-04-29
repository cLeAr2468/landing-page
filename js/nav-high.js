// Highlight nav and dropdown based on current page
        (function () {
            const path = window.location.pathname.split('/').pop();

            // Desktop
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('text-primary', 'font-bold');
                }
            });

            document.querySelectorAll('.dropdown-link').forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                    // Highlight parent dropdown button
                    let parent = link.closest('.group');
                    if (parent) {
                        let btn = parent.querySelector('button');
                        btn.classList.add('text-primary', 'font-bold');
                    }
                }
            });

            // Desktop - Nested dropdown links
            document.querySelectorAll('.nested-dropdown-link').forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                    // Highlight parent About button
                    let nestedParent = link.closest('.nested-dropdown');
                    if (nestedParent) {
                        let dropdownParent = nestedParent.closest('.group');
                        if (dropdownParent) {
                            let btn = dropdownParent.querySelector('button');
                            btn.classList.add('text-primary', 'font-bold');
                        }
                    }
                }
            });

            // Mobile
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('text-primary', 'font-bold');
                }
            });

            document.querySelectorAll('.mobile-dropdown-link').forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
                    // Highlight parent dropdown button
                    let parent = link.closest('.mobile-dropdown');
                    if (parent) {
                        let btn = parent.querySelector('button');
                        btn.classList.add('text-primary', 'font-bold');
                    }
                }
            });
        })();