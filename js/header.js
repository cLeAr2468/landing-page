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
    const path = window.location.pathname.split('/').pop().replace('.html','') || 'home';
    const currentPage = path === 'index' ? 'home' : path;

    // Desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === 'home' && linkHref === 'home')) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    document.querySelectorAll('.dropdown-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
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
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
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
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === 'home' && linkHref === 'home')) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    document.querySelectorAll('.mobile-dropdown-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('text-primary', 'bg-blue-50', 'font-bold');

            let parent = link.closest('.mobile-dropdown');
            if (parent) {
                let btn = parent.querySelector('button');
                btn.classList.add('text-primary', 'font-bold');
            }
        }
    });
}

fetch('footer.html')
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
});