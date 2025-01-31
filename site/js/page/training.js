import { Header } from "../composant/header.js";

export default class Training {
    getContent(div) {
        this.title = document.title = 'MPFSI - Formations';
        const header = new Header();
        header.getContent(div,'Formation');  
    }
}