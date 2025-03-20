import { Header } from "../composant/header.js";

export default class TrainingDetail {
    constructor(data) {
        this.data = data || {}; // Recevoir les données de la formation
        this.saveDataToLocalStorage();
    }

    saveDataToLocalStorage() {
        localStorage.setItem('trainingData', JSON.stringify(this.data));
        console.log("Données sauvegardées dans le localStorage:", this.data);
    }

    getContent(div) {
        const contentDiv = document.getElementById(div);
        contentDiv.innerHTML = ''; // Vider le contenu précédent

        // Vérifier si les données sont déjà dans le localStorage
        const storedData = localStorage.getItem('trainingData');
        if (storedData) {
            this.data = JSON.parse(storedData);
        } else {
            console.error("Aucune donnée trouvée dans le localStorage.");
            return; // Sortir si aucune donnée n'est trouvée
        }

        document.title = `MPFSI - formation - ${this.data.titre}`;

        const header = new Header();
        header.getContent(div, this.data.titre);

        this.detail = document.createElement('details');
        contentDiv.appendChild(this.detail);

        this.sommaire = document.createElement('summary');
        this.sommaire.textContent = 'À quoi consiste cette formation';
        this.detail.appendChild(this.sommaire);

        // Tableau des informations à afficher
        const info = [
            { label: 'Type:', value: this.data.type },
            { label: 'Durée de la formation:', value: this.data.durée },
            { label: 'Nombre de personnes:', value: this.data.nb_personne },
            { label: 'Prérequis pour la formation:', value: this.data.prérequis },
            { label: 'Précisions sur la formation:', value: this.data.présition },
            { label: 'Diplôme(s) associé(s) à la formation:', value: this.data.obtention }
        ];

        // Création des éléments <p> à partir du tableau
        info.forEach(item => {
            this.createParagraph(item.label, item.value);
        });
    }

    // Méthode pour créer un élément <p>
    createParagraph(label, value) {
        const labelElement = document.createElement('p');
        labelElement.textContent = label;
        labelElement.classList.add('labeldetails');
        this.detail.appendChild(labelElement);

        const valueElement = document.createElement('p');
        valueElement.textContent = value;
        valueElement.classList.add('pdetails');
        this.detail.appendChild(valueElement);
    }
}