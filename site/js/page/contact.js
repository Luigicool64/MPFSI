import Message from '../composant/message.js'; 
import { Header } from '../composant/header.js';

export default class Contact {
        getContent(div) {
            this.title = document.title = 'MPFSI - Contact';
            const header = new Header();
            header.getContent(div,'Contact')
            const message = new Message;
            message.getContent(div);    
        }
}