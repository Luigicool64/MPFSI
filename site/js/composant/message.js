// Define the Message class
export default class Message {
    getContent(div) {
        this.Contentdiv = document.getElementById(div);

        this.div = document.createElement('div');
        this.div.classList.add('message');
        this.Contentdiv.appendChild(this.div);

        this.h1 = document.createElement('h1');
        this.h1.textContent = 'NOUS ENVOYER UN MESSAGE';
        this.div.appendChild(this.h1);

        this.form = document.createElement('div');
        this.form.classList.add('form');
        this.div.appendChild(this.form);

        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.form.appendChild(this.div1);

        this.input1 = document.createElement('input');
        this.input1.type = 'text';
        this.input1.name = 'name-company';
        this.input1.id = 'name-company';
        this.input1.classList.add('high');
        this.input1.required = true;
        this.input1.placeholder = 'Nom de votre société';
        this.div1.appendChild(this.input1);

        this.label = document.createElement('label');
        this.label.textContent = 'Nom de votre société';
        this.div1.appendChild(this.label);

        this.formdiv = document.createElement('div');
        this.formdiv.classList.add('form-info');
        this.form.appendChild(this.formdiv);

        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.formdiv.appendChild(this.div1);

        this.input1 = document.createElement('input');
        this.input1.type = 'email';
        this.input1.name = 'email';
        this.input1.id = 'email';
        this.input1.placeholder = 'Email';
        this.input1.classList.add('little');
        this.input1.required = true;
        this.div1.appendChild(this.input1);

        this.span = document.createElement('label');
        this.span.textContent = 'Email';
        this.div1.appendChild(this.span);
        
        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.formdiv.appendChild(this.div1);

        this.input1 = document.createElement('input');
        this.input1.type = 'text';
        this.input1.name = 'tel';
        this.input1.classList.add('little');
        this.input1.placeholder = 'telephone'
        this.input1.id = 'tel';
        this.input1.required = true;
        this.div1.appendChild(this.input1);

        this.span = document.createElement('label');
        this.span.textContent = 'telephone';
        this.div1.appendChild(this.span);

        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.form.appendChild(this.div1);

        this.input1 = document.createElement('textarea');
        this.input1.name = 'message';
        this.input1.placeholder = 'Ecrire un Message';
        this.input1.id = 'message';
        this.input1.required = true;
        this.div1.appendChild(this.input1);

        this.span = document.createElement('label');
        this.span.textContent = 'Ecrire un Message';
        this.div1.appendChild(this.span);

        this.button = document.createElement('button');
        this.button.classList.add('button-input');
        this.button.textContent = 'Envoyer';
        this.form.appendChild(this.button);
    }
}