import {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import { useAppSelector, useAppDispatch } from './index';

import { loadFilmData } from '../store/api-actions';

import {calculateLeftTime} from '../services/calculateLeftTime';

import {getAuthorizationStatus} from '../store/user-process/selectors';
import {getActiveFilm} from '../store/film-process/selectors';

import {INTERVAL_TIME, LOADED_STATUS_NUMBER, PERCENTAGE_NUMBER} from './const';

export const useCurrentFilmHook = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const activeFilm = useAppSelector(getActiveFilm);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isFilmLoading, setIsFilmLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [timeToEnd, setTimeToEnd] = useState('');
  const [isVideoReadyToPlay, setIsVideoReadyToPlay] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    !activeFilm && dispatch(loadFilmData({ id }));

    setIsFilmLoading(false);
  }, [activeFilm, dispatch, id]);

  useEffect(() => {
    const updateVideoProgress = setInterval(() => {
      if (videoRef.current) {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;

        if (isNaN(duration)) {
          return;
        }

        setCurrentProgress((currentTime / duration) * PERCENTAGE_NUMBER);

        const timeToShow = calculateLeftTime(duration, currentTime);
        setTimeToEnd(timeToShow);
      }
    }, INTERVAL_TIME);

    return () => clearInterval(updateVideoProgress);
  }, []);

  const handlePlayVideo = async () => {
    if (!videoRef.current) {
      return;
    }

    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      await videoRef.current.play();
    }

    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleFullScreen = async () => {
    if (videoRef.current) {
      await videoRef.current.requestFullscreen();
    }
  };

  const handleLoading = () => {
    if (videoRef.current) {
      setIsVideoReadyToPlay(videoRef.current.readyState === LOADED_STATUS_NUMBER);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return { activeFilm, isFilmLoading, authorizationStatus, handlePlayVideo, videoRef, toggleFullScreen, currentProgress, isVideoReadyToPlay, timeToEnd, isVideoPlaying, handleLoading, handleGoBack };
};
