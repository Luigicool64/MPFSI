export default class Button {
    constructor(contentDiv, name) {
        this.contentDiv = contentDiv;
        this.name = name;

        // Create a div to hold the buttons
        const div = document.createElement('div');
        div.classList.add('button-div');
        this.contentDiv.appendChild(div); // Append the created div

        // Define button configurations based on the name
        const buttonConfigs = {
            ' ': [
                { href: '#training', text: 'Nos formations' },
                { href: '#about', text: 'Qui sommes-nous' },
                { href: '#contact', text: 'Nous contacter' },
                //{ href: '#shop', text: 'Notre Boutique' }
            ],
            'Formation': [
                { href: '#about', text: 'Qui sommes-nous' },
                { href: '#contact', text: 'Nous contacter' },
                //{ href: '#shop', text: 'Notre Boutique' }
            ],
            'A propos': [
                { href: '#training', text: 'Nos formations' },
                { href: '#contact', text: 'Nous contacter' },
                //{ href: '#shop', text: 'Notre Boutique' }
            ],
            'Contact': [
                { href: '#training', text: 'Nos formations'},
                { href: '#about', text: 'Qui sommes-nous' },
                //{ href: '#shop', text: 'Notre Boutique' }
            ],
            //'Boutique': [
                //{ href: '#training', text: 'Nos formations' },
                //{ href: '#about', text: 'Qui sommes-nous' },
                //{ href: '#contact', text: 'Nous contacter' }
            //],
            '':[
                
            ]
        };

        // Get the button configuration based on the name
        const buttons = buttonConfigs[name] || buttonConfigs[''];

        // Create buttons based on the configuration
        buttons.forEach(config => {
            const a = document.createElement('a');
            a.href = config.href;
            div.appendChild(a);
            
            const button = document.createElement('button');
            button.textContent = config.text;
            button.classList.add('button');
            a.appendChild(button);
        });
    }
}