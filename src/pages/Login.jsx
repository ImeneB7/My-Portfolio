import React, {useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import '../sass/_login.scss';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <NavBar></NavBar>
        <div className="login">
            <h2 className="login_title">Connexion</h2>
            <form className="login_form" onSubmit={handleLogin}>
                <input className="input-box"
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange= {(e) => setUsername(e.target.value)} 
                />
                <input className="input-box"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
                 <button type="submit" >Se connecter</button>
            </form>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Login;
