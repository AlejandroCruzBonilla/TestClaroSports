import { FC, useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

export const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    const protocol = window.location.protocol;
    const host = window.location.host;

    const initializePlayer = () => {
      if (window.YT) {
        onYouTubeIframeAPIReady();
      } else {
        const youtubeScript = document.createElement('script');
        youtubeScript.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(youtubeScript);
      }
    };

    const onPlayerReady = () => {
      playerRef.current?.playVideo();
    };

    const onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new YT.Player('youtube-player', {
        height: '390',
        width: '640',
        videoId,
        playerVars: {
          autoplay: 1,
          origin: `${protocol}//${host}`,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    initializePlayer();

    (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  return (
    <div className='video'>
      <div id='youtube-player' className='video__iframe' />
    </div>
  );
};
