import { Header } from "../composant/header.js";
import { module } from "../composant/qui_sommes_nous.js";

export default class About {
    getContent(name) {
        this.name = 'A propos';
        this.content = document.getElementById(name);
        this.title = document.title = `MPFSI - ${this.name}`;
        if (screen.width <= 1080){
            this.content.style.height = '2200px';
        }
        const header = new Header();
        header.getContent(name, this.name);
        const composant = new module(name,'quiSommesNous','QUI SOMMES-NOUS',`Le MPFSI (Michael Portesse Formation Secourisme Incendie) est une organisation spécialisée dans la formation en secourisme et sécurité incendie. Elle propose des formations intra-entreprise adaptées aux besoins des organisations, couvrant des thèmes tels que l'utilisation des extincteurs, l'évacuation des lieux et les premiers secours. Par ailleurs, le MPFSI organise des événements de sensibilisation destinés aux particuliers, visant à promouvoir la culture de la sécurité. Engagée à fournir des formations de qualité, l'organisation contribue à la protection des employés et des biens.`);
        const composant2 = new module(name,'objectif','NOTRE OBJECTIF',`Notre objectif est de sensibiliser les individus aux dangers liés aux incendies en leur fournissant des connaissances sur les causes et les conséquences des incendies. Nous les formons à l'utilisation des extincteurs, à l'évacuation des lieux de manière ordonnée et à l'administration des premiers secours en cas de besoin. Nous élaborons également des procédures spécifiques, telles que l'organisation des évacuations et la gestion des alarmes. Cela contribue à instaurer une culture de la prévention et de la sécurité au sein de l'entreprise. Nous visons à garantir une réponse rapide et efficace en cas d'incident, afin de minimiser les conséquences physiques et matérielles, tout en respectant les obligations légales en matière de sécurité au travail, assurant ainsi la protection de tous les employés.`)
    }
}