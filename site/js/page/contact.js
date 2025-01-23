import Message from '../composant/message.js'; 

export default class Contact {
        getContent(div) {
            this.title = document.title = 'MPFSI - Contact';
            const message = new Message;
            message.getContent(div);    
        }
}