import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import NavHeader from '../../components/NavHeader';

const IndexPoint = () => {

    return (

        <div id="page-index-point">

            <NavHeader />

            <main>
                <h1>Pontos de coleta</h1>

                <ul className="points-grid">
                    <li className="point-box">
                        <img src="http://192.168.0.2:3333/uploads/points/2c780db0302b-mercado.jpg" alt=""/>
                        <h2> Ponto de coleta</h2>
                        <h3>Item 1, item 2, item 3</h3>
                        <span>Endereço</span>
                    </li>
                </ul>

            </main>

        </div>
    );
};

export default IndexPoint;