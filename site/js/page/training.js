import { Header } from "../composant/header.js";
import { TrainingRecherche } from "../composant/training_recherche.js";

export default class Training {
    getContent(div) {
        this.name = 'Formation'
        this.title = document.title = `MPFSI - ${this.name}s`;
        const header = new Header();
        header.getContent(div,'Formation');
        const Training_recherche = new TrainingRecherche('http://localhost:3001/formations');
        Training_recherche.getContent(div);
        Training_recherche.loadFormations();
    }
}