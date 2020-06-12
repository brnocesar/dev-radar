import React, { useState, useEffect } from 'react';
import './styles.css';
import NavHeader from '../../components/NavHeader';
import api from '../../services/api';


interface Point {
    id: number;
    name: string;
    city: string;
    uf: string;
    image_url: string;
    items: string;
};

const IndexPoint = () => {

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        api.get('points', {
            params: {
                // city: 'Curitiba',
                // uf: 'PA',
                // items: "7,8,9",
            }
        }).then(response => {
            setPoints(response.data);
        });
    }, []);
    

    return (

        <div id="page-index-point">
            <div className="container">
                <NavHeader />

                <main>
                    <h1>Pontos de coleta</h1>

                    <ul className="points-grid">
                        {points.map(point => (
                            <li 
                                key={point.id}
                                className="point-box"
                            >
                                <img src={point.image_url} alt={point.name} />
                                <h2>{point.name}</h2>
                                <h3>{point.items}</h3>
                                {/* <h3>Item 1, item 2, item 3</h3> */}
                                <span>{point.city}, {point.uf}</span>
                            </li>
                        ))}
                    </ul>

                </main>

            </div>
        </div>
    );
};

export default IndexPoint;