import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div style={{ background: "#131a22" }}>
            <Menu />

            <BannerMain 
                videoTitle={"testando 1,2,3..."}
                videoDescription={"lalalala"}
                url={"https://www.youtube.com/watch?v=DQ3A2PTpDBU"}
            />

            {dadosIniciais.categorias.map(categoria => (
                <Carousel 
                    key={categoria.id}    
                    ignoreFirstVideo
                    category={categoria}
                />
            ))}

            <Footer />
        </div>
    );
}

export default Home;
