import React from 'react';
import './styles.css';
import zapZapIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    
    return (
        <article className="teacher-item">
            <header>
                <img src="https://brnocesar.github.io/image/pixel-profile-picture.jpg" alt="Professor"/>
                <div>
                    <strong>Nome do Professor</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button">
                    <img src={zapZapIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;