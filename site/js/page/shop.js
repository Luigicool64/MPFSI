import { Header } from "../composant/header.js";
export default class shop {
    getContent(div) {
        this.name = 'Boutique'
        this.title = document.title = `MPFSI - ${this.name}`;
        const header = new Header();
        header.getContent(div,this.name);         
    }
}