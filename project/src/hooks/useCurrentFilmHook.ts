import { useAppSelector } from '../hooks';

export const useCurrentFilmHook = () => {
  const { filmsList, activeFilmId } = useAppSelector((state) => state);

  const currentFilm = activeFilmId ? filmsList.find(({ id }) => id === activeFilmId) : null;

  return { currentFilm, id: activeFilmId };
};
