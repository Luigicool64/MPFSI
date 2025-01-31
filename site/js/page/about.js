import { Header } from "../composant/header.js";
import { module } from "../composant/qui_sommes_nous.js";

export default class About {
    getContent(name) {
        this.title = document.title = 'MPFSI - A propos';   
        const header = new Header();
        header.getContent(name,'A propos');
        const composant = new module(name,'quiSommesNous','QUI SOMMES-NOUS','Le MPFSI (Michael Portesse Formation Secourisme Incendie) est un organisation qui propose des formations intra-entreprise et des évenements sur de secourisme et Securité Incendie');
        const composant2 = new module(name,'objectif','NOTRE OBJECTIF','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas  porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,  purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis,  nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.')
    }
}