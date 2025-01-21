import Home from './page/home.js';

document.addEventListener('DOMContentLoaded', function() {

    const loadHome = () => {
        if (document.getElementById('content').children.length > 0) {
            document.getElementById('content').innerHTML = '';

        }
        const home = new Home();
        home.getContent('content');
    };
    
    const loadAbout = () => {
        contentDiv.innerHTML = `
            <h1>À Propos</h1>
            <p>Voici des informations sur notre entreprise.</p>
        `;
    };
    
    const loadTraining = () => {
        contentDiv.innerHTML = `
            <h1>Nos Formations</h1>
            <p>Découvrez nos programmes de formation.</p>
        `;
    };
    
    const loadContact = () => {
        contentDiv.innerHTML = `
            <h1>Contactez-nous</h1>
            <p>Voici comment nous contacter.</p>
        `;
    };
    
    const loadContent = (section) => {
        switch (section) {
            case 'home':
                loadHome();
                break;
            case 'about':
                loadAbout();
                break;
            case 'training':
                loadTraining();
                break;
            case 'contact':
                loadContact();
                break;
            default:
                contentDiv.innerHTML = `
                    <h1>Page non trouvée</h1>
                    <p>Désolé, la page que vous recherchez n'existe pas.</p>
                `;
        }
    };

    // Écouteurs d'événements pour les liens de navigation
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const section = event.target.getAttribute('href').substring(1); // Récupère la section depuis href
            loadContent(section); // Charge le contenu correspondant
            window.history.pushState({}, '', section); // Met à jour l'URL
        });
    });

    // Gestion de l'historique lors du chargement de la page
    window.addEventListener('popstate', () => {

        loadContent(window.location.hash.substring(1) || 'home'); // Charge le contenu basé sur l'URL
    
    });
    
    
    // Chargement initial du contenu
    loadContent(window.location.hash.substring(1) || 'home'); // Charge le contenu de la page d'accueil par défaut
});