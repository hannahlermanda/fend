/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        console.log(rect);
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to set active section and link
    function setActiveSectionAndLink() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('your-active-class');
                const sectionName = section.getAttribute('data-nav');
                console.log(`Section ${sectionName} is active.`);
                setActiveLink(sectionName);
            } else {
                section.classList.remove('your-active-class');
                const sectionName = section.getAttribute('data-nav');
                console.log(`Section ${sectionName} is no longer active.`);
            }
        });
    }

    // Function to set active link
    function setActiveLink(activeSectionName) {
        navLinks.forEach((navLink) => {
            const navLinkText = navLink.textContent.toLowerCase().replace(' ', '-');
            console.log(`Nav Link Text: ${navLinkText}`);
        console.log(`Active Section Name: ${activeSectionName.toLowerCase().replace(' ', '-')}`);
            if (navLinkText === activeSectionName.toLowerCase().replace(' ', '-')) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }
    

    // Initial call to set active section and link on page load
    setActiveSectionAndLink();

    // Call setActiveSectionAndLink on scroll
    window.addEventListener('scroll', setActiveSectionAndLink);

    // Build the navigation menu
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const characterName = section.getAttribute('data-nav');
        
        navLink.classList.add('nav-link', characterName.toLowerCase().replace(' ', '-'));
        
        if (characterName === 'Mario') {
            navLink.classList.add('mario-link');
        } else if (characterName === 'Luigi') {
            navLink.classList.add('luigi-link');
        } else if (characterName === 'Princess Peach') {
            navLink.classList.add('peach-link');
        } else if (characterName === 'Bowser') {
            navLink.classList.add('bowser-link');
        }
        
        navLink.textContent = characterName;
        navLink.setAttribute('href', `#${section.id}`);
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    // Add a click event listener to scroll to the section and highlight the link
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


