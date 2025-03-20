import { Header } from '../composant/header.js';


export default class Home {
    getContent(id) {
        this.name = 'Accueil';
        this.content = document.getElementById(id);
        this.title = document.title = `MPFSI - ${this.name}`;
        if (screen.width <= 1080){
            this.content.style.height = '900px';
        }
        const header = new Header();
        header.getContent(id,' ','src/image/Copie de mpfsi10.png')
        
    }
}