import Home from './page/home.js';
import About from './page/about.js';
import Training from './page/training.js';
import Contact from './page/contact.js';
import Shop from './page/shop.js';
import TrainingDetail from './page/training-detail.js';

document.addEventListener('DOMContentLoaded', function () {
    const name = 'content';
    const contentDiv = document.getElementById(name);
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.style.display = "none"; // Hide close button initially

    const toggleSidenav = (isOpen) => {
        sidenav.style.height = isOpen ? "180px" : "0";
        contentDiv.style.marginTop = isOpen ? "180px" : "";
        openBtn.style.display = isOpen ? "none" : "";
        closeBtn.style.display = isOpen ? "" : "none";
    };

    openBtn.onclick = () => toggleSidenav(true);
    closeBtn.onclick = () => toggleSidenav(false);

    const loadContent = (section, data = null) => {
        const sections = {
            home: Home,
            about: About,
            training: Training,
            contact: Contact,
            //shop: Shop,
            trainingDetail: TrainingDetail // Ajout de la page de détails
        };
    
        const SectionClass = sections[section] || null;
    
        if (SectionClass) {
            contentDiv.innerHTML = '';
            const sectionInstance = new SectionClass(data); // Passer les données si disponibles
            sectionInstance.getContent(name);
            history.pushState({ section, data }, '', `#${section}`);
        } else {
            loadNoFind();
        };
    };

    const loadNoFind = () => {
        contentDiv.innerHTML = `
            <h1>Page non trouvée</h1>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
        `;
    };

    // Event delegation for navigation links
    document.addEventListener('click', (event) => {
        const link = event.target.closest('.nav a, .sidenav a, .button-div a');
        if (link) {
            event.preventDefault();
            const section = link.getAttribute('href').replace('#', '');
            loadContent(section);
            toggleSidenav(false); // Close sidenav after click
        }
    });

    // Load initial content based on URL
    const initialSection = window.location.hash.replace('#', '') || 'home';
    loadContent(initialSection);

    // Handle back and forward navigation
    window.addEventListener('popstate', (event) => {
    if (event.state) {
        loadContent(event.state.section, event.state.data); // Passer les données si disponibles
    }
});
});