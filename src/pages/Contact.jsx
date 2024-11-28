import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import '../sass/_contact.scss';

const Contact = () => {
    return (
        <>
        <NavBar/>
        <section className="contact">
            <form className="contact_form">
                <h2>Contactez Moi</h2>
                <div className="input-box">
                    <label htmlFor="">Nom</label>
                    <input type="text" className="field" placeholder="Entrer votre nom" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Email</label>
                    <input type="email" className="field" placeholder="Entrer votre email" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Votre message</label>
                    <textarea name="" id="" className="field mess" placeholder="Entrer votre message" required></textarea>
                </div>
                <button type="submit">Envoyez votre message</button>
            </form>
        </section>
        <Footer/>
        </>
    )
}

export default Contact;