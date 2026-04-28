// Book data based on image filenames with specific roles
const books = [
    {
        image: "./images/Energy and Development.PNG",
        title: "Energy and Development",
        person: "Frauke Urban",
        role: "Author",
        description: "Comprehensive guide to sustainable energy solutions",
        category: "Engineering"
    },
    {
        image: "./images/Essentials of Biotechnology.PNG",
        title: "Essentials of Biotechnology: World Edition",
        person: "3GE-Learning",
        role: "Author",
        description: "Fundamental principles of biotech applications",
        category: "Biology"
    },
    {
        image: "./images/Gender & Society we are all equal.PNG",
        title: "Gender and Society: We Are All Equal",
        person: "Adlene Maghinay Florendo",
        role: "Author",
        description: "Exploring equality in modern society",
        category: "Sociology"
    },
    {
        image: "./images/Modular Approach to Art Appreciation.PNG",
        title: "Modular Approach to Art Appreciation",
        person: "Reynaldo B. Inocian",
        role: "Author",
        description: "Systematic methods for understanding art",
        category: "Arts"
    },
    {
        image: "./images/General Biology 2.PNG",
        title: "General Biology 2",
        person: "3G E-Learning",
        role: "Author",
        description: "Advanced concepts in biological sciences",
        category: "Biology"
    },
    {
        image: "./images/Philippine Electrical Code Part 2.PNG",
        title: "Philippine Electrical Code: Part 2",
        person: "Institute of Integrated Electrical Engineers of the Philippine",
        role: "Author",
        description: "Updated electrical standards and regulations",
        category: "Engineering"
    },
    {
        image: "./images/Safety Management.PNG",
        title: "Safety Management",
        person: "Matt Martin, PhD",
        role: "Author",
        description: "Comprehensive workplace safety protocols",
        category: "Management"
    },
    {
        image: "./images/the infographic guide to grammar.PNG",
        title: "The Infographic Guide to Grammar: A Visual Reference for Everything You Need to Know",
        person: "Jara Kern",
        role: "Author",
        description: "Visual approach to mastering grammar",
        category: "Language"
    },
    {
        image: "./images/The teacher and the school curriculum.PNG",
        title: "The Teacher and the School Curriculum",
        person: "Madeline T. Fernando",
        role: "Author",
        description: "Educational curriculum development strategies",
        category: "Education"
    },
    {
        image: "./images/Thermodynamics.PNG",
        title: "Thermodynamics: Course Notes",
        person: "Engr. Beteliano Villalas & Engr. Merwyn Lael D. Abear",
        role: "Authors",
        description: "Principles of heat and energy transfer",
        category: "Physics"
    }
];

// Color schemes for alert badges
const alertColors = [
    { border: 'border-green-600', text: 'text-green-700' },
    { border: 'border-blue-600', text: 'text-blue-700' },
    { border: 'border-pink-600', text: 'text-pink-700' },
    { border: 'border-green-700', text: 'text-green-800' },
    { border: 'border-red-700', text: 'text-red-700' },
    { border: 'border-indigo-700', text: 'text-indigo-700' },
    { border: 'border-teal-700', text: 'text-teal-700' },
    { border: 'border-yellow-600', text: 'text-yellow-700' },
    { border: 'border-rose-700', text: 'text-rose-700' },
    { border: 'border-purple-700', text: 'text-purple-700' }
];

// Function to generate book card HTML
function generateBookCard(book, index, isMobile = false) {
    const color = alertColors[index % alertColors.length];
    const cardClass = isMobile 
        ? "relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-40 h-60 flex flex-col group cursor-pointer"
        : "relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-48 h-72 flex flex-col group cursor-pointer";
    
    const imageClass = isMobile ? "w-24 h-28" : "w-32 h-40";
    const paddingClass = isMobile ? "pt-3" : "pt-4";
    const contentPadding = isMobile ? "p-2" : "p-3";
    const titleClass = isMobile ? "text-sm font-bold font-serif text-gray-900 mb-1 truncate" : "text-base font-bold font-serif text-gray-900 mb-1 truncate";
    const descriptionClass = isMobile ? "text-xs text-gray-700 mb-2 line-clamp-2" : "text-xs text-gray-700 mb-2 line-clamp-2";
    const personClass = isMobile ? "text-xs text-gray-500 mt-auto" : "text-xs text-gray-500 mt-auto";

    return `
        <a href="courses.html?book=${book.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}" class="${cardClass}">
            <div class="relative flex-shrink-0 flex justify-center items-center ${paddingClass}">
                <img src="${book.image}" alt="${book.title}" class="${imageClass} object-cover rounded-lg border-2 border-gray-100 shadow group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-2 left-2 bg-white border ${color.border} ${color.text} font-bold px-2 py-0.5 rounded-full text-xs shadow-sm flex items-center">
                    <i class="fas fa-bell mr-1"></i>Alert
                </span>
            </div>
            <div class="flex-1 flex flex-col justify-between ${contentPadding}">
                <h3 class="${titleClass}">${book.title}</h3>
                <p class="${descriptionClass}">${book.description}</p>
                <div class="flex items-center ${personClass}">
                    <i class="fas fa-user mr-1"></i>
                    <span class="truncate">${book.person} - ${book.role}</span>
                </div>
            </div>
        </a>
    `;
}

// Function to populate marquee
function populateMarquee() {
    const desktopMarquee = document.getElementById('bookMarqueeDesktop');
    const mobileMarquee = document.getElementById('bookMarqueeMobile');
    
    if (desktopMarquee) {
        desktopMarquee.innerHTML = books.map((book, index) => generateBookCard(book, index, false)).join('');
    }
    
    if (mobileMarquee) {
        mobileMarquee.innerHTML = books.map((book, index) => generateBookCard(book, index, true)).join('');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateMarquee);