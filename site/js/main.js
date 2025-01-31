import Home from './page/home.js';
import About from './page/about.js';
import Training from './page/training.js';
import Contact from './page/contact.js';
import Shop from './page/shop.js';

document.addEventListener('DOMContentLoaded', function () {
    const name = 'content';
    const contentDiv = document.getElementById(name);
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.style.display = "none"; // Masquer le bouton de fermeture au départ

    openBtn.onclick = function() {
        sidenav.style.height = "180px"; // Ouvrir le sidenav
        contentDiv.style.marginTop = "180px"; // Ajuster le contenu
        openBtn.style.display = "none"; // Masquer le bouton d'ouverture
        closeBtn.style.display = ""; // Afficher le bouton de fermeture
    }

    closeBtn.onclick = function() {
        sidenav.style.height = "0"; // Fermer le sidenav
        contentDiv.style.marginTop = ""; // Réinitialiser le contenu
        openBtn.style.display = ""; // Afficher le bouton d'ouverture
        closeBtn.style.display = "none"; // Masquer le bouton de fermeture
    }

    const loadHome = () => {
        contentDiv.innerHTML = '';
        const home = new Home();
        home.getContent(name);
    };

    const loadAbout = () => {
        contentDiv.innerHTML = '';
        const about = new About();
        about.getContent(name);
    };

    const loadTraining = () => {
        contentDiv.innerHTML = '';
        const training = new Training();
        training.getContent(name);
    };

    const loadContact = () => {
        contentDiv.innerHTML = '';
        const contact = new Contact();
        contact.getContent(name);
    };

    const loadShop = () => {
        contentDiv.innerHTML = '';
        const shop = new Shop();
        shop.getContent(name);
    };

    const loadNoFind = () =>{
        contentDiv.innerHTML = `
            <h1>Page non trouvée</h1>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
        `;
    }

    const loadContent = (section) => {
        switch (section) {
            case 'home':
                loadHome();
                history.pushState({ section: 'home' }, '', '#home');
                break;
            case 'about':
                loadAbout();
                history.pushState({ section: 'about' }, '', '#about');
                break;
            case 'training':
                loadTraining();
                history.pushState({ section: 'training' }, '', '#training');
                break;
            case 'contact':
                loadContact();
                history.pushState({ section: 'contact' }, '', '#contact');
                break;
            case 'shop':
                loadShop();
                history.pushState({ section: 'shop' }, '', '#shop');
                break;
            default:
                loadNoFind();
                
        }
    };

    // Ajout des gestionnaires d'événements pour les liens de la navbar et du sidenav
    const navLinks = document.querySelectorAll('.nav a, .sidenav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('href').replace('#', '');
            loadContent(section);
            sidenav.style.height = "0"; // Fermer le sidenav après le clic
            contentDiv.style.marginTop = ""; // Réinitialiser le contenu
            openBtn.style.display = ""; // Afficher le bouton d'ouverture
            closeBtn.style.display = "none"; // Masquer le bouton de fermeture
        });
    });

    // Gérer le chargement de la page en fonction de l'URL
    const initialSection = window.location.hash.replace('#', '') || 'home';
    loadContent(initialSection);

    // Gérer le retour en arrière et l'avance dans l'historique
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            loadContent(event.state.section);
        }
    });
});