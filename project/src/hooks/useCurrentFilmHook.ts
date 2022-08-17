import {useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks';

import { loadFilmData } from '../store/api-actions';

import {calculateLeftTime} from '../services/calculateLeftTime';

export const useCurrentFilmHook = () => {
  const { activeFilm, authorizationStatus } = useAppSelector((state) => state);

  const [isFilmLoading, setIsFilmLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [timeToEnd, setTimeToEnd] = useState('');

  const videoRef = useRef<HTMLVideoElement>(null);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    !activeFilm && dispatch(loadFilmData({ id }));

    setIsFilmLoading(false);
  }, [activeFilm]);

  useEffect(() => {
    const updateVideoProgress = setInterval(() => {
      if (videoRef.current) {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;

        if (isNaN(duration)) {
          return;
        }

        setCurrentProgress((currentTime / duration) * 100);

        const timeToShow = calculateLeftTime(duration, currentTime);
        setTimeToEnd(timeToShow);
      }
    }, 100);

    return () => clearInterval(updateVideoProgress);
  }, []);

  const togglePlayVideo = async () => {
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

  return { activeFilm, isFilmLoading, authorizationStatus, togglePlayVideo, videoRef, toggleFullScreen, currentProgress, timeToEnd, isVideoPlaying };
};
