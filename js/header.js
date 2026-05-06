// Function to get the correct base path
function getBasePath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment !== '');
    
    // If we're in a subdirectory, we need to account for it
    if (segments.length > 1 || (segments.length === 1 && !segments[0].includes('.html') && segments[0] !== '')) {
        return './';
    }
    return './';
}

// Load header with proper error handling
fetch(getBasePath() + 'Header.html')
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
    // Fallback: try without base path
    fetch('Header.html')
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
    document.getElementById('mobileMenuBtn')?.addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
    });

    // ✅ MOBILE DROPDOWN
    document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.parentElement.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('i');

            content.classList.toggle('hidden');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // ✅ NAV HIGHLIGHT (ADD THIS PART)
    const path = window.location.pathname.split('/').pop().replace('.html','');

    // Desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    document.querySelectorAll('.dropdown-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

            let parent = link.closest('.group');
            if (parent) {
                let btn = parent.querySelector('button');
                btn.classList.add('text-primary', 'font-bold');
            }
        }
    });

    // Nested
    document.querySelectorAll('.nested-dropdown-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

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

            let parent = link.closest('.mobile-dropdown');
            if (parent) {
                let btn = parent.querySelector('button');
                btn.classList.add('text-primary', 'font-bold');
            }
        }
    });
}

// Load footer with proper error handling
fetch(getBasePath() + 'footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
})
.then(data => {
    document.getElementById('footer').innerHTML = data;
    // ✅ Run script AFTER footer is loaded
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
})
.catch(error => {
    console.error('Error loading footer:', error);
    // Fallback: try without base path
    fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        document.getElementById('copyright-year').textContent = new Date().getFullYear();
    })
    .catch(fallbackError => {
        console.error('Fallback footer loading failed:', fallbackError);
        document.getElementById('footer').innerHTML = '<div class="bg-red-100 text-red-800 p-4">Footer could not be loaded</div>';
    });
});