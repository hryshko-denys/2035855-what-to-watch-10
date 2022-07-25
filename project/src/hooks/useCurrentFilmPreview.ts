import { useState } from 'react';

type ActiveFilmType = string | null;

export const useCurrentFilmPreview = () => {
  const [activeFilmId, setActiveFilmId] = useState<ActiveFilmType>(null);

  let timeoutId: ReturnType<typeof setTimeout>;

  const setFilmId = (id: string) => {
    timeoutId = setTimeout(() => setActiveFilmId(id), 2000);
  };

  const resetFilmId = () => {
    clearTimeout(timeoutId);
    setActiveFilmId(null);
  };

  return { setFilmId, resetFilmId, activeFilmId };
};
