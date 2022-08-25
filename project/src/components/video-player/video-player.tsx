import { Link } from 'react-router-dom';

type VideoPlayerProps = {
  videoSrc: string;
  posterImage: string;
  id: number;
};

function VideoPlayer({ videoSrc, posterImage, id }: VideoPlayerProps): JSX.Element {
  return (
    <Link to={`/films/${id}`}>
      <video
        className="player__video"
        src={videoSrc}
        muted
        poster={posterImage}
        autoPlay
        playsInline
      />
    </Link>
  );
}

export default VideoPlayer;
