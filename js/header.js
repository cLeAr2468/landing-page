// Helper function to get base path
function getBasePath() {
    // Get the current directory path
    const path = window.location.pathname;
    const pathArray = path.split('/');
    pathArray.pop(); // Remove the current file
    return pathArray.join('/') + (pathArray.length > 1 ? '/' : '');
}

// Load header with proper error handling
fetch('Header.html')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
})
.then(data => {
    document.getElementById('header').innerHTML = data;
    initHeaderScripts(); // includes everything
})
.catch(error => {
    console.error('Error loading header:', error);
    // Fallback: try with relative path
    fetch('./Header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
        initHeaderScripts();
    })
    .catch(fallbackError => {
        console.error('Fallback header loading failed:', fallbackError);
        document.getElementById('header').innerHTML = '<div class="bg-red-100 text-red-800 p-4">Header could not be loaded</div>';
    });
});

function initHeaderScripts() {
    // ✅ MOBILE MENU
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ✅ MOBILE DROPDOWN
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

    // ✅ NAV HIGHLIGHT
    const path = window.location.pathname.split('/').pop().replace('.html','') || 'home';

    // Desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === 'index' && href === 'home')) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    document.querySelectorAll('.dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

            let parent = link.closest('.group');
            if (parent) {
                let btn = parent.querySelector('button');
                if (btn) {
                    btn.classList.add('text-primary', 'font-bold');
                }
            }
        }
    });

    // Nested
    document.querySelectorAll('.nested-dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || href.includes(path)) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

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

    // Mobile
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === 'index' && href === 'home')) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    document.querySelectorAll('.mobile-dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || href.includes(path)) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

            let parent = link.closest('.mobile-dropdown');
            if (parent) {
                let btn = parent.querySelector('button');
                if (btn) {
                    btn.classList.add('text-primary', 'font-bold');
                }
            }
        }
    });
}

