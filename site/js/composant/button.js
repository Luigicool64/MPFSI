export default class Button {
    constructor(contentDiv, i,buttons) {
        this.contentDiv = document.getElementById(contentDiv);
        this.a = document.createElement('a');
        
        if(buttons[i]==='Nos formations'){
            this.a.href = '#training';
        } else if(buttons[i]==='Nous contacter'){
            this.a.href = '#about';
        } else if(buttons[i]==='Qui sommes-nous'){
            this.a.href = '#contact';
        }

        this.button = document.createElement('button');
        this.button.classList.add('button');
        this.button.textContent = buttons[i];
        this.contentDiv.appendChild(this.button);
    }
}