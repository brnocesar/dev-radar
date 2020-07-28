import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do brnoflix" />
            </a>

            <ButtonLink className="ButtonLink" href="">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;