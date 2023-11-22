import { FC } from 'react';
import Image from 'next/image';

interface Props {
  videos: Video[];
  selectedVideoId: string;
  onSelect: (id: string) => void;
}

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export const VideoSelector: FC<Props> = ({
  selectedVideoId,
  videos,
  onSelect,
}) => {
  return (
    <div className='video-selector'>
      <h1 className='video-selector__title'> CLARO SPORTS EN SOCHI 2014</h1>
      <div className='video-selector__wrapper'>
        {videos.map(({ id, title, description, thumbnail }) => (
          <div
            key={id}
            className={`video__element ${selectedVideoId === id ? 'video__element--active' : ''}`}
            onClick={() => onSelect(id)}
          >
            <div className='video__element__thumbnail'>
              <Image src={thumbnail} alt={title} width={300} height={300} />
            </div>
            <div className='video__element__description'>
              <p>{description}</p>
            </div>
            <h3 className='video__element__title'>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
