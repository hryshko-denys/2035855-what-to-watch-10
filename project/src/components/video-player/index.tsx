type VideoPlayerProps = {
  videoSrc: string;
  posterImage: string;
};

function VideoPlayer({ videoSrc, posterImage }: VideoPlayerProps): JSX.Element {
  return (
    <video
      className="player__video"
      src={videoSrc}
      muted
      poster={posterImage}
      autoPlay
    />
  );
}

export default VideoPlayer;
