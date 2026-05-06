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
    const copyrightElement = document.getElementById('copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = new Date().getFullYear();
    }
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
        const copyrightElement = document.getElementById('copyright-year');
        if (copyrightElement) {
            copyrightElement.textContent = new Date().getFullYear();
        }
    })
    .catch(fallbackError => {
        console.error('Fallback footer loading failed:', fallbackError);
        document.getElementById('footer').innerHTML = '<div class="bg-red-100 text-red-800 p-4">Footer could not be loaded</div>';
    });
});