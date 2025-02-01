
export class TrainingRecherche {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.formations = []; // Initialiser le tableau des formations
    }

    // Méthode pour créer le contenu de recherche
    getContent(div) {
        this.Contentdiv = document.getElementById(div);

        this.div = document.createElement('div');
        this.div.classList.add('training-recherche');

        this.Contentdiv.appendChild(this.div);

        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.div.appendChild(this.div1);

        this.input1 = document.createElement('input');
        this.input1.type = 'text';
        this.input1.id = 'quary';
        this.input1.classList.add('high');
        this.input1.required = true;
        this.input1.placeholder = 'Rechercher une formation';
        this.div1.appendChild(this.input1);

        this.label = document.createElement('label');
        this.label.textContent = 'Rechercher une formation';
        this.div1.appendChild(this.label);

        this.div1 = document.createElement('div');
        this.div1.classList.add('query-a');
        this.div.appendChild(this.div1);

        // Ajout de liens pour des types de formations spécifiques
        this.createLink('Secourisme');
        this.createLink('Incendie');

        // Événement pour filtrer les résultats
        this.input1.addEventListener('input', () => this.filterResults(this.input1.value));

        // Créer le conteneur pour les résultats et l'ajouter au div principal
        this.resultContainer = document.createElement('div');
        this.resultContainer.id = 'result-container';
        this.Contentdiv.appendChild(this.resultContainer);
    }

    // Méthode pour créer un lien
    createLink(text) {
        const a = document.createElement('a');
        a.textContent = text;
        a.href = '#'; // Ajoutez un lien si nécessaire
        a.addEventListener('click', (e) => {
            e.preventDefault();
            this.input1.value = text; // Mettre le texte du lien dans le champ de recherche
            this.filterResults(text); // Filtrer les résultats
        });
        this.div1.appendChild(a);
    }

    // Méthode pour filtrer les résultats
    filterResults(query) {
        const filtered = this.formations.filter(formation =>
            formation.titre.toLowerCase().includes(query.toLowerCase()) || // Vérifie le titre
            formation.type.toLowerCase().includes(query.toLowerCase())   // Vérifie le type
        );
        this.displayResults(filtered);
    }

    // Méthode pour afficher les résultats
    displayResults(data) {
        this.resultContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter les nouveaux résultats

        if (data.length === 0) {
            this.resultContainer.innerHTML = '<p>Aucune formation trouvée.</p>'; // Message si aucune formation
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            this.resultContainer.appendChild(card); // Correction ici pour ajouter à resultContainer

            const img = document.createElement('img');
            img.src = 'src/image/ex/unnamed.jpg'; // Remplacez par le chemin de votre image
            card.appendChild(img);

            const cardContent = document.createElement('div');
            cardContent.className = 'cardContent';
            card.appendChild(cardContent);

            const h1 = document.createElement('h1');
            h1.textContent = item.titre;
            cardContent.appendChild(h1);

            const p = document.createElement('p');
            p.textContent = item.type;
            cardContent.appendChild(p);
        });
    }

    // Méthode pour charger les données des formations
    async loadFormations() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Erreur : ' + response.statusText);
            }
            this.formations = await response.json();
            this.displayResults(this.formations); // Afficher toutes les formations au départ
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    }
}