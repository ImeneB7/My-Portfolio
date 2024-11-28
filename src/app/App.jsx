import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from  '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projets" element={<Projects/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/private" element={<Login/>} />
            </Routes>
        </Router>
    )
}

export default App;