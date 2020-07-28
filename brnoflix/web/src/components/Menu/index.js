import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo do brnoflix" />
            </Link>

            <Button as={Link} className="Button" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;