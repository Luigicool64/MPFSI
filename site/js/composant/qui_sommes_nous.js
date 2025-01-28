export class module {
    constructor(div, classe, titre, paragraphe) {
        console.log(div);
        this.div = document.getElementById(div);

        if (!this.div) {
            console.error(`Element with ID ${div} not found.`);
            return;
        }

        console.log(this.div);

        // Create a new div element
        this.div1 = document.createElement('div');
        this.div1.classList.add(classe); // Use add() to add a class

        // Append the new div to the existing div
        this.div.appendChild(this.div1);

        this.img = document.createElement('img');
        this.img.src = 'src/image/ex/unnamed.jpg';

        this.div1.appendChild(this.img);

        this.div2 = document.createElement('div');
        this.div2.classList.add(classe +'_info');

        this.div1.appendChild(this.div2);

        this.h1 = document.createElement('h1')
        this.h1.textContent = titre;
        this.div2.appendChild(this.h1)

        this.p = document.createElement('p');
        this.p.textContent = paragraphe;
        this.div2.appendChild(this.p)
    }
}