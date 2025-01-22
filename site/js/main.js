import Home from './page/home.js';
import About from './page/about.js';
import Training from './page/training.js';
import Contact from './page/contact.js';
import Shop from './page/shop.js';

document.addEventListener('DOMContentLoaded', function() {
    const name = 'content'; 

    const contentDiv = document.getElementById(name);

    const loadHome = () => {
        if (contentDiv.children.length > 0) {
            contentDiv.innerHTML = '';
        }
        const home = new Home();
        home.getContent(name);
    };
    
    const loadAbout = () => {
        if (contentDiv.children.length > 0) {
            contentDiv.innerHTML = '';
        }
        const about = new About();
        about.getContent(name);
    };
    
    const loadTraining = () => {
        if (contentDiv.children.length > 0) {
            contentDiv.innerHTML = '';
        }
        const training = new Training();
        training.getContent(name);
    };
    
    const loadContact = () => {
        if (contentDiv.children.length > 0) {
            contentDiv.innerHTML = '';
        }
        const contact = new Contact();
        contact.getContent(name);
    };

    const loadShop = () => {
        if (contentDiv.children.length > 0) {
            contentDiv.innerHTML = '';
        }
        const shop = new Shop();
        shop.getContent(name);
    };
    
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
                contentDiv.innerHTML = `
                    <h1>Page non trouvée</h1>
                    <p>Désolé, la page que vous recherchez n'existe pas.</p>
                `;
        }
    };

    // Ajout des gestionnaires d'événements pour les liens
    document.getElementById('homeLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('home');
    });
    document.getElementById('aboutLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about');
    });
    document.getElementById('trainingLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('training');
    });
    document.getElementById('contactLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('contact');
    });
    document.getElementById('shopLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('shop');
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