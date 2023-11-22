import { Layout } from '@/Layout/Layout';
import { Counter } from '@/components/Counter/Counter';
import { YouTubePlayer } from '@/components/YouTubePlayer/YouTubePlayer';
import { VideoSelector } from '@/components/VideoSelector/VideoSelector';
import { useState } from 'react';

const videos = [
  {
    id: 'ke0iusvydl8?si=2erriyIYkY0v2I_5',
    title: 'Team Latam',
    description:
      'Los deportistas latinoamericanos que participan en Sochi 2014',
    thumbnail: '/team-latam.png',
  },
  {
    id: 'ikg5HEDg0zc?si=suXNlt8Q0VOw1AT8',
    title: 'Travel Meets Fashion',
    description:
      'Los deportistas latinoamericanos que participan en Sochi 2014',
    thumbnail: '/travel-meets-fashion.png',
  },
  {
    id: 'v5OJ5xjIWJw?si=uzXCBaPNIBOKg-yK',
    title: 'Velocidad y Riesgo',
    description:
      'Los deportistas latinoamericanos que participan en Sochi 2014',
    thumbnail: '/velocidad-riesgo.png',
  },
  {
    id: 'rFIN17gw3c8?si=OQn8MZt6oOq8F7hZ',
    title: 'Experiencia Multimedia',
    description:
      'Los deportistas latinoamericanos que participan en Sochi 2014',
    thumbnail: '/experiencia.png',
  },
];

export default function Home() {
  const [{ id: defaultVideo }] = videos;
  const [selectedVideo, setSelectedVideo] = useState<string>(defaultVideo);

  const handleSelectVideo = (id: string) => {
    setSelectedVideo(id);
  };

  return (
    <Layout
      seo={{
        title: 'SOCHI 2014',
        description: 'Juegos de invierno SOCHI 2014',
      }}
    >
      <div className='multimedia'>
        <div className='multimedia__wrapper'>
          <Counter />
          <YouTubePlayer videoId={selectedVideo} />
        </div>
      </div>

      <VideoSelector
        selectedVideoId={selectedVideo}
        onSelect={handleSelectVideo}
        videos={videos}
      />
    </Layout>
  );
}
