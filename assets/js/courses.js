// Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('hidden');
  });

  // Fade-in on scroll for sections
  document.addEventListener('DOMContentLoaded', function() {
      const sections = document.querySelectorAll('section.fade-in');
      const options = {
          threshold: 0.15
      };
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if(entry.isIntersecting){
                  entry.target.classList.add('fade-in-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, options);
      sections.forEach(section => {
          observer.observe(section);
      });
  });
  // Mobile dropdown functionality
  document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          const content = this.parentElement.querySelector('.mobile-dropdown-content');
          const icon = this.querySelector('i');
          content.classList.toggle('hidden');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
      });
  });
  // Close mobile menu when clicking on links
  document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', function() {
          document.getElementById('mobileMenu').classList.add('hidden');
      });
  });
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              e.preventDefault();
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  // Industrial Technology dropdown toggle function
  function toggleIndustrialTechDropdown() {
      const dropdown = document.getElementById('industrialTechDropdown');
      const chevron = document.getElementById('industrialTechChevron');
      
      if (dropdown.classList.contains('hidden')) {
          dropdown.classList.remove('hidden');
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      } else {
          dropdown.classList.add('hidden');
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      }
  }
  
  // Computer Science dropdown toggle function
  function toggleComputerScienceDropdown() {
      const dropdown = document.getElementById('computerScienceDropdown');
      const chevron = document.getElementById('computerScienceChevron');
      
      if (dropdown.classList.contains('hidden')) {
          dropdown.classList.remove('hidden');
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      } else {
          dropdown.classList.add('hidden');
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      }
  }
  
  // Bachelor of Industrial Technology dropdown toggle function
  function toggleIndustrialTechBachelorDropdown() {
      const dropdown = document.getElementById('industrialTechBachelorDropdown');
      const chevron = document.getElementById('industrialTechBachelorChevron');
      
      if (dropdown.classList.contains('hidden')) {
          dropdown.classList.remove('hidden');
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      } else {
          dropdown.classList.add('hidden');
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      }
  }
  
  // Education dropdown toggle function
  function toggleEducationDropdown() {
      const dropdown = document.getElementById('educationDropdown');
      const chevron = document.getElementById('educationChevron');
      
      if (dropdown.classList.contains('hidden')) {
          dropdown.classList.remove('hidden');
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      } else {
          dropdown.classList.add('hidden');
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      }
  }
  
  // Highlight nav and dropdown based on current page
  (function() {
      const path = window.location.pathname.split('/').pop();
      // Desktop
      document.querySelectorAll('.nav-link').forEach(link => {
          if(link.getAttribute('href') === path) {
              link.classList.add('text-primary', 'font-bold');
          }
      });
      document.querySelectorAll('.dropdown-link').forEach(link => {
          if(link.getAttribute('href') === path) {
              link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
              // Also highlight parent dropdown button
              let parent = link.closest('.group');
              if(parent) {
                  let btn = parent.querySelector('button');
                  btn.classList.add('text-primary', 'font-bold');
              }
          }
      });
      // Mobile
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
          if(link.getAttribute('href') === path) {
              link.classList.add('text-primary', 'font-bold');
          }
      });
      document.querySelectorAll('.mobile-dropdown-link').forEach(link => {
          if(link.getAttribute('href') === path) {
              link.classList.add('text-primary', 'bg-blue-50', 'font-bold');
              // Also highlight parent dropdown button
              let parent = link.closest('.mobile-dropdown');
              if(parent) {
                  let btn = parent.querySelector('button');
                  btn.classList.add('text-primary', 'font-bold');
              }
          }
      });
})();

document.getElementById('copyright-year').textContent = new Date().getFullYear();