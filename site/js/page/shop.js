import { Header } from "../composant/header.js";
export default class shop {
    getContent(div) {
        this.title = document.title = 'MPFSI - Boutique';
        const header = new Header();
        header.getContent(div,'Boutique');         
    }
}