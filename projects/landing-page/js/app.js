document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Navigation Menu
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const characterName = section.getAttribute('data-nav');
        
        navLink.classList.add('nav-link', characterName.toLowerCase().replace(/ /g, '-'));
        navLink.textContent = characterName;
        navLink.setAttribute('href', `#${section.id}`);

  
   const mainHeader = document.getElementById('main_header');

   // Element visibility (h1)
   function handleElementVisibility() {
       const rect = mainHeader.getBoundingClientRect();

       // Check if h1 is fully visible in the viewport
       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
           mainHeader.classList.add('h1_dance'); 
       } else {
           mainHeader.classList.remove('h1_dance'); 
       }
   }

   // Call the handleElementVisibility function on scroll and resize events
   window.addEventListener('scroll', handleElementVisibility);
   window.addEventListener('resize', handleElementVisibility);

   // Call the element's visibility state
   handleElementVisibility();

    // Prevent default link behavior of going to a new page
        navLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            section.scrollIntoView({ behavior: 'smooth' }); 
        });
        
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    const navLinks = document.querySelectorAll('.nav-link');

    // Track active sections and highlight the active navigation link
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'active' class from all menu links
                navLinks.forEach(link => link.classList.remove('active'));

                // Get the ID of the current section
                const currentSectionId = entry.target.getAttribute('id');

                // Add the 'active' class only to the active section
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
        toggleButton.textContent = 'Hide M'; 
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (marioSection.style.display === 'none') {
                marioSection.style.display = 'block';
                toggleButton.textContent = 'Hide M'; 
            } else {
                marioSection.style.display = 'none';
                toggleButton.textContent = 'Show M'; 
            }
        });

        marioSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const luigiSection = document.getElementById('luigi');
    if (luigiSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide L'; 
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (luigiSection.style.display === 'none') {
                luigiSection.style.display = 'block';
                toggleButton.textContent = 'Hide L'; 
            } else {
                luigiSection.style.display = 'none';
                toggleButton.textContent = 'Show L'; 
            }
        });

        luigiSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const peachSection = document.getElementById('peach');
    if (peachSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide P'; 
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (peachSection.style.display === 'none') {
                peachSection.style.display = 'block';
                toggleButton.textContent = 'Hide P'; 
            } else {
                peachSection.style.display = 'none';
                toggleButton.textContent = 'Show P'; 
            }
        });

        peachSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const bowserSection = document.getElementById('bowser');
    if (bowserSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Hide B'; 
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener('click', () => {
            if (bowserSection.style.display === 'none') {
                bowserSection.style.display = 'block';
                toggleButton.textContent = 'Hide B'; 
            } else {
                bowserSection.style.display = 'none';
                toggleButton.textContent = 'Show B'; 
            }
        });

        bowserSection.insertAdjacentElement('beforebegin', toggleButton);
    }

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Scroll to Top 
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event listener for the "Back to Top" btn
    scrollToTopBtn.addEventListener('click', scrollToTop);

    // Show/hide the "Back to Top" button based on scroll position and screen size
    function handleScrollAndSize() {
        if (window.scrollY > 200 && window.innerWidth > 600) { 
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Call handleScrollAndSize
    handleScrollAndSize();

    // Scroll event listener
    window.addEventListener('scroll', handleScrollAndSize);
    // Resize event listener
    window.addEventListener('resize', handleScrollAndSize);

});
