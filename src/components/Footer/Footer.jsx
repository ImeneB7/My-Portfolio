import React from 'react';
import './_footer.scss';
import Github from '../../assets/img/github.png';
import Linkdin from '../../assets/img/linkdin.png';
import Twitter from '../../assets/img/twitter.png';

function Footer() {
    return(
        <footer>
            <p>Copyright © 2024 Belaifa Imene</p>
            <div className='social-links'>
                <a href="https://github.com/ImeneB7">
                <img src={Github} alt="" />
                </a>
                <a href="https://github.com/ImeneB7">
                <img src={Linkdin} alt="" />
                </a>
                <a href="https://github.com/ImeneB7">
                <img src={Twitter} alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;