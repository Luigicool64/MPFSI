import Message from '../composant/message.js'; 
import { Header } from '../composant/header.js';

export default class Contact {
        getContent(div) {
            this.name = 'Contact'
            this.title = document.title = `MPFSI - ${this.name}`;
            const header = new Header();
            header.getContent(div,this.name)
            const message = new Message;
            message.getContent(div);    
        }
}