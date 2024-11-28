import React from "react";
import '../sass/_about.scss';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CSS from "../assets/img/css.webp";
import Javascript from "../assets/img/javascript.webp";
import ReactImg from "../assets/img/react.webp";
import HTML from "../assets/img/html.webp";
import Sass from "../assets/img/sass.webp";
import Trello from "../assets/img/trello.webp";
import CV from '../assets/doc/CV-Belaifa-Imene-.pdf';
import Github from '../assets/img/github.png'

const About = () => {
    return (
        <>
        <NavBar/>
        <main>
            <div className="about-container">
                <h2 className="about_title">À propos de moi</h2>
                <div className="about-me">
                <p>Hello moi c'est Imene ! <br />j'ai entrepris une reconversion professionnelle en suivant une formation de développeur-intégrateur web chez OpenClassrooms. Depuis plusieurs mois, j'explore avec passion l'univers du développement web, et chaque jour est une nouvelle occasion d'apprendre et de progresser.
                <br></br>
                Je prends un immense plaisir à découvrir et à maîtriser de nouveaux langages de programmation, puis à les intégrer dans des projets concrets. Motivée et engagée dans ce que j'entreprends, je suis toujours curieuse de découvrir davantage pour perfectionner mes compétences et offrir des solutions efficaces et élégantes.
                <br></br>
                Si vous recherchez un profil dynamique, passionné, et prêt à relever des défis en équipe, n'hésitez pas à me contacter. Je serai ravie de contribuer à vos projets et de mettre mon savoir-faire au service de vos besoins.</p>
                </div>
            </div>
            <div className="about-container">
                <h2 className="about_title">Mes compétences</h2>
                <div className="about_skills" id="about-skills">
                    <div>
                        <img src={HTML} alt="logo HTML" />
                        <div className="tooltip">HTML est un langage de balisage structurant le contenu des pages web</div>
                    </div>
                    <div>
                        <img src={CSS} alt="logo CSS" />
                        <div className="tooltip">CSS est un langage de style qui met en forme et embellit les éléments HTML</div>
                    </div>
                    <div>
                        <img src={Javascript} alt="logo Javascript" />
                        <div className="tooltip">Javascript est un langage de programmation qui rends les pages web dynamiques en manipulant le DOM</div>
                    </div>
                    <div>
                        <img src={ReactImg} alt="logo React" />
                        <div className="tooltip">React est une bibliothéque Javascript qui permets de créer des interfaces utilisateur intéractives et dynamiques</div>
                    </div>
                    <div>
                        <img src={Sass} alt="logo Sass" />
                        <div className="tooltip">Sass est un préprocesseur CSS qui ajoute des fonctionnalités avancées comme les variables et les mixins</div>
                    </div>
                    <div>
                        <img src={Trello} alt="logo Trello" />
                        <div className="tooltip">Trello est un outil de gestion de projet visuel basé sur des tableaux et des cartes pour organiser et suivre des tâches</div>
                    </div>     
                </div>
            </div>
            <div className="about-container">
                <h2 className="about_title">CV et Réseaux</h2>
                <div className="about-links">
                    <p>Vous pouvez télécharger mon cv en PDF en cliquant sur le lien :</p>
                    <a href={CV} download="CV-Belaifa-Imene.pdf" className="download">Télécharger mon CV</a>
                    <p>Mon Github :</p>
                    <a href="https://github.com/ImeneB7" className="github"><img src={Github} alt="" />
                    </a>
                </div>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
}

export default About;