import React, { useEffect, useState } from 'react';
import BaseTemplate from '../../components/BaseTemplate';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import backupData from '../../data/backup.json';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        setInitialData(backupData);
      });
  }, []);

  return (
    <BaseTemplate paddingAll={0}>

      {initialData.length === 0 && (
        <div>
          Carregando...
          {/* trocar isso por uma figurinha rodando ou piscando */}
        </div>
      )}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                videoDescription={initialData[0].videos[0].description}
                url={initialData[0].videos[0].url}
              />

              <Carousel
                ignoreFirstVideo
                category={category}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </BaseTemplate>
  );
}

export default Home;
