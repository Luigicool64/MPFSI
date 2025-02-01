const API_URL = 'http://localhost:3001/formations'; // Assurez-vous que cette constante est définie

export function apiFormation(titre, type, durée, nb_personne, prérequis, précision, obtention) {
    console.log('Formation');

    // Encode les paramètres pour l'URL
    const queryParams = new URLSearchParams({
        titre: titre,
        type: type,
        durée: durée,
        nb_personne: nb_personne,
        prérequis: prérequis,
        précision: précision,
        obtention: obtention
    }).toString();

    // Construire l'URL complète avec les paramètres de requête
    const urlWithParams = `${API_URL}?${queryParams}`;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        // Pas de corps pour une requête GET
    };

    return new Promise((resolve, reject) => {
        fetch(urlWithParams, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur : ' + response.statusText);
                }
                return response.json();
            })
            .then(data => resolve(data)) // Résoudre avec la réponse complète des données
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
                reject(error);
            });
    });
}