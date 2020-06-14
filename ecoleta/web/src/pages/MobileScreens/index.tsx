import React from 'react';
import './styles.css';
import NavHeader from '../../components/NavHeader';

import screean1 from '../../assets/mobile-screens/1-home.png';
import screean2 from '../../assets/mobile-screens/2-point-search.png';
import screean3 from '../../assets/mobile-screens/3-point-search.png';
import screean4 from '../../assets/mobile-screens/4-point-search.png';
import screean5 from '../../assets/mobile-screens/5-point-detail.png';


const MobileScreens = () => {

    return (

        <div id="page-mobile-screens">
            <div className="container">
                <NavHeader />

                <main>
                    <h1>Versão mobile</h1>

                    <span>Abaixo são apresentadas as telas da versão mobile da aplicação, onde é possível encontrar Pontos de coleta próximos a sua posição geográfica.</span>

                    <ul className="screens-grid">
                        <li className="point-box" >
                            <img src={screean1} alt="" />
                        </li>
                        <li className="point-box" >
                            <img src={screean2} alt="" />
                        </li>
                        <li className="point-box" >
                            <img src={screean3} alt="" />
                        </li>
                        <li className="point-box" >
                            <img src={screean4} alt="" />
                        </li>
                        <li className="point-box" >
                            <img src={screean5} alt="" />
                        </li>
                    </ul>

                </main>

            </div>
        </div>
    );
};

export default MobileScreens;