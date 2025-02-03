import Button from "./button.js";

export class Header {
    getContent(div,name,img) {
        this.div = document.getElementById(div);
        if (!this.div) {
            console.error(`Element with ID ${div} not found.`);
            return;
        }

        // Create a new div element
        this.header = document.createElement('div');
        this.header.classList.add('header');

        // Append the header to the specified div
        this.div.appendChild(this.header);

        this.header_img = document.createElement('div')
        this.header_img.classList.add('header_img');
        this.header.appendChild(this.header_img);

        if(img){
            this.img = document.createElement('img');
            this.img.src = img;
        }else{
            this.img = document.createElement('img')
            this.img.src = 'src/image/ex/unnamed.jpg';
        }
        this.header_img.appendChild(this.img)

        this.header_info = document.createElement('div');
        this.header_info.classList.add('header-info');
        this.header.appendChild(this.header_info);

        if(name){
            this.h1 = document.createElement('h1');
            this.h1.textContent = name
            this.header_info.appendChild(this.h1);
        }

        const bouton = new Button(this.header_info,name);
    }
}