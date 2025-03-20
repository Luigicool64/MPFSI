export default class Message {
    constructor(apiUrl) {
        this.apiUrl = apiUrl; // URL de l'API
    }

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

        // Champ pour le nom de la société
        this.createInputGroup('name-company', 'Nom de votre société', 'text', 'high', true);

        // Div pour les informations de contact
        this.formInfoDiv = document.createElement('div');
        this.formInfoDiv.classList.add('form-info');
        this.form.appendChild(this.formInfoDiv);

        // Champ pour l'email
        this.createInputGroup('email', 'Email', 'email', 'little', true, this.formInfoDiv);
        
        // Champ pour le téléphone
        this.createInputGroup('tel', 'Téléphone', 'text', 'little', true, this.formInfoDiv);
        
        // Champ pour le message
        this.div1 = document.createElement('div');
        this.div1.classList.add('input-group');
        this.form.appendChild(this.div1);

        this.inputMessage = document.createElement('textarea');
        this.inputMessage.name = 'message';
        this.inputMessage.placeholder = 'Ecrire un Message';
        this.inputMessage.id = 'message';
        this.inputMessage.required = true;
        this.div1.appendChild(this.inputMessage);

        this.span = document.createElement('label');
        this.span.textContent = 'Ecrire un Message';
        this.div1.appendChild(this.span);

        this.button = document.createElement('button');
        this.button.classList.add('button-input');
        this.button.textContent = 'Envoyer';
        this.button.type = 'button'; // Empêche le formulaire de se soumettre par défaut
        this.button.addEventListener('click', () => this.sendMessage());
        this.form.appendChild(this.button);

        // Élément pour afficher le message de succès
        this.successMessage = document.createElement('div');
        this.successMessage.classList.add('success-message');
        this.successMessage.style.display = 'none'; // Masqué par défaut
        this.Contentdiv.appendChild(this.successMessage);
    }

    createInputGroup(name, labelText, type, className, required, parentDiv = this.form) {
        const div1 = document.createElement('div');
        div1.classList.add('input-group');
        parentDiv.appendChild(div1);

        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.id = name;
        input.placeholder = name;
        input.classList.add(className);
        input.required = required;
        div1.appendChild(input);

        const label = document.createElement('label');
        label.textContent = labelText;
        div1.appendChild(label);
    }

    async sendMessage() {
        const name = document.getElementById('name-company').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;
        const message = document.getElementById('message').value;

        // Validation simple
        if (!name || !email || !tel || !message) {
            this.showSuccessMessage('Veuillez remplir tous les champs.');
            return;
        }

        // Ajout de la date actuelle
        const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

        const data = {
            date: currentDate, // Ajout de la date au payload
            nom_entreprise: name,
            telephone: tel,
            message: message,
            email: email,
        };

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
            }

            const result = await response.json();
            console.log('Message envoyé avec succès:', result);

            // Afficher le message de succès
            this.showSuccessMessage('Votre message a été envoyé avec succès !');

            // Réinitialiser le formulaire
            this.resetForm();

        } catch (error) {
            console.error('Erreur:', error);
            this.showSuccessMessage('Une erreur est survenue lors de l\'envoi du message.'); // Afficher un message d'erreur
        }
    }

    showSuccessMessage(message) {
        this.successMessage.textContent = message;
        this.successMessage.style.display = 'block'; // Afficher le message
    
        // Masquer le message après 3 secondes
        setTimeout(() => {
            this.successMessage.style.display = 'none'; // Masquer le message
            this.successMessage.textContent = ''; // Réinitialiser le contenu
        }, 3000); // 3000 millisecondes = 3 secondes
    }
}