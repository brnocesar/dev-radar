import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, Description } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryName = category.name;
  const categoryColor = category.color;
  const categoryDescription = category.description;
  const { videos } = category;

  return (

    <VideoCardGroupContainer>
      {categoryName && (
        <>
          <Title style={{ backgroundColor: categoryColor || '#9d79ac' }}>
            {categoryName}
          </Title>

          {categoryDescription && (
            <Description>
              {categoryDescription}
            </Description>
          )}
        </>
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                key={video.id}
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>

    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: '',
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.string,
  category: PropTypes.string.isRequired,
};

export default Carousel;
