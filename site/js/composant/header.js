export class Header {
    constructor(contentDiv, titre, description, nbbutton, buttons) {
        this.contentDiv = document.getElementById(contentDiv);
        
        console.log(this.contentDiv)

        if (this.contentDiv instanceof HTMLElement) {
            console.log('La div existe');
        } else {
            console.log('La div n\'existe pas');
        }

        this.div1 = document.createElement('div');
        this.div1.classList.add('header-image');
        this.contentDiv.appendChild(this.div1);

        this.img = document.createElement('img');
        this.img.src = 'src/image/ex/unnamed.jpg';
        this.div1.appendChild(this.img);

        this.div2 = document.createElement('div');
        this.div2.classList.add('header-info');
        this.contentDiv.appendChild(this.div2);
        
        if(titre){
            this.titre = document.createElement('h1');
            this.titre.textContent = titre;
            this.div2.appendChild(this.titre);
        }
        
        if(description){
            this.description = document.createElement('p');
            this.description.textContent = description;
            this.div2.appendChild(this.description);
        }

        this.div3 = document.createElement('div');
        this.div3.classList.add('header-buttons');            
        this.div2.appendChild(this.div3);
        
        if(nbbutton){    
            for (let i = 0; i < nbbutton; i++) {
                const button = new Button('header-buttons', i, buttons);
            }
        }

    }   
}