import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function LandingPage() {
    
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImage} alt="Pessoas procurando por aulas online" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/professores" className="student">
                        <img src={studyIcon} alt="Estudantes"/>
                        Estudar
                    </Link>
                    <Link to="/cadastrar" className="teacher">
                        <img src={teachIcon} alt="Professores"/>
                        Vender aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de xxx conexões realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default LandingPage;