import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider//Slider';
import '../sass/_home.scss';
import HTML from "../assets/img/html.webp";
import CSS from "../assets/img/css.webp";
import Javascript from "../assets/img/javascript.webp";

const Home = () => {
    return (
        <>
        <Header/>
                <Slider/>
                <div className='home-container'>
                    <div className='home-content'>
                        <p>Hello moi c'est Imene ! <br />j'ai entrepris une reconversion professionnelle en suivant une formation de développeur-intégrateur web chez OpenClassrooms. Depuis plusieurs mois, j'explore avec passion l'univers du développement web, et chaque jour est une nouvelle occasion d'apprendre et de progresser.</p>
                        <p>
                            <a href="/about#about-me">En savoir plus à propos de moi...</a>
                        </p>
                    </div>
                </div>
                <div className='home-container'>
                    <div className='home-content'>
                        <div className='logo'>
                            <img src={HTML} alt="" />
                            <img src={CSS} alt="" />
                            <img src={Javascript} alt="" />
                            </div>
                            <p>
                                <a href="/about#about-skills">En savoir plus sur mes compétences...</a>
                            </p>
                        
                    </div>

                </div>
        <Footer/>
        </>
    )
}

export default Home;