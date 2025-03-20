import Message from '../composant/message.js'; 
import { Header } from '../composant/header.js';

export default class Contact {
        getContent(div) {
            this.name = 'Contact';
            this.content = document.getElementById(div);
            this.title = document.title = `MPFSI - ${this.name}`;
            if (screen.width <= 1080){
                this.content.style.height = '1000px';
            }
            const header = new Header();
            header.getContent(div,this.name);
            const message = new Message('http://localhost:3000/messages');
            message.getContent(div);
        }
}