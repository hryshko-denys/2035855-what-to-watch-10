import { Loader } from '../../components';

import { useCurrentFilmHook } from '../../hooks/useCurrentFilmHook';

function Player(): JSX.Element {
  const { activeFilm, isFilmLoading, handlePlayVideo, videoRef, toggleFullScreen, currentProgress, timeToEnd, isVideoPlaying, handleLoading, isVideoReadyToPlay, handleGoBack } = useCurrentFilmHook();

  const video = activeFilm ? activeFilm.filmInfo.videoLink : null;
  const image = activeFilm ? activeFilm.filmInfo.backgroundImage : null;

  const isFilmLoaded = !isFilmLoading && video && image;

  return (
    <div className="player">
      {isFilmLoaded ? (
        <video
          ref={videoRef}
          onClick={handlePlayVideo}
          onLoadedData={handleLoading}
          src={video}
          className="player__video"
          poster={image}
          playsInline
        />
      ) : <Loader />}

      <button onClick={handleGoBack} type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentProgress} max="100" />
            <div className="player__toggler" style={{ left: `${currentProgress}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{timeToEnd}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handlePlayVideo} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isVideoPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>Play</span>
          </button>
          {!isVideoReadyToPlay && <div className="player__name">Loading ...</div>}

          <button onClick={toggleFullScreen} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
