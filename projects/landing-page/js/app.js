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

    // Build the navigation menu
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const characterName = section.getAttribute('data-nav');
        
        navLink.classList.add('nav-link', characterName.toLowerCase().replace(/ /g, '-'));
        navLink.textContent = characterName;
        navLink.setAttribute('href', `#${section.id}`);
        
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    const navLinks = document.querySelectorAll('.nav-link');

    // Create an IntersectionObserver to track active sections and highlight the navigation link
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'active' class from all menu links
                navLinks.forEach(link => link.classList.remove('active'));

                // Get the ID of the currently intersecting section
                const currentSectionId = entry.target.getAttribute('id');

                // Add the 'active' class only to the corresponding menu link
                const correspondingLink = document.querySelector(`[href="#${currentSectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    //Toggle Buttons
    const marioSection = document.getElementById('mario');
    if (marioSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide M'; // Initial text content
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (marioSection.style.display === 'none') {
                marioSection.style.display = 'block';
                toggleButton.textContent = 'Hide M'; // Change text content
            } else {
                marioSection.style.display = 'none';
                toggleButton.textContent = 'Show M'; // Change text content
            }
        });

        marioSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const luigiSection = document.getElementById('luigi');
    if (luigiSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide L'; // Initial text content
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (luigiSection.style.display === 'none') {
                luigiSection.style.display = 'block';
                toggleButton.textContent = 'Hide L'; // Change text content
            } else {
                luigiSection.style.display = 'none';
                toggleButton.textContent = 'Show L'; // Change text content
            }
        });

        luigiSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const peachSection = document.getElementById('peach');
    if (peachSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide P'; // Initial text content
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (peachSection.style.display === 'none') {
                peachSection.style.display = 'block';
                toggleButton.textContent = 'Hide P'; // Change text content
            } else {
                peachSection.style.display = 'none';
                toggleButton.textContent = 'Show P'; // Change text content
            }
        });

        peachSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const bowserSection = document.getElementById('bowser');
    if (bowserSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide B'; // Initial text content
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (bowserSection.style.display === 'none') {
                bowserSection.style.display = 'block';
                toggleButton.textContent = 'Hide B'; // Change text content
            } else {
                bowserSection.style.display = 'none';
                toggleButton.textContent = 'Show B'; // Change text content
            }
        });

        bowserSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Function to handle scrolling to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event listener for the "Scroll Back to Top" button
    scrollToTopBtn.addEventListener('click', scrollToTop);

    // Show/hide the scroll to top button based on scroll position and screen size
    function handleScrollAndSize() {
        if (window.scrollY > 200 && window.innerWidth > 600) { 
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Initial call to handleScrollAndSize to set initial state
    handleScrollAndSize();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAndSize);
    // Add resize event listener
    window.addEventListener('resize', handleScrollAndSize);

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


