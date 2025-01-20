document.addEventListener("DOMContentLoaded", () => {
    const routes = {
        home: '<h2>Accueil</h2>',
        about: '<h2>À propos</h2>',
        training: '<h2>Formations</h2>',
        contact: '<h2>Contact</h2>',
    };

    function router() {
        const hash = window.location.hash.substring(1) || 'home';
        const content = document.getElementById('content');
        content.innerHTML = routes[hash] || '<h2>404 - Page non trouvée</h2>';
    }

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
})