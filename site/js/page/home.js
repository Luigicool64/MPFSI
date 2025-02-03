import { Header } from '../composant/header.js';


export default class Home {
    getContent(id) {
        this.name = 'Accueil'
        this.title = document.title = `MPFSI - ${this.name}`;
        const header = new Header();
        header.getContent(id,'','src/image/Copie de mpfsi10.png')
        
    }
}