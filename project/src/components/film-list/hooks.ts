import { useState } from 'react';

type ActiveFilmType = string | null;

export const useFilmListHook = () => {
  const [activeFilmId, setActiveFilmId] = useState<ActiveFilmType>(null);

  const setFilmId = (id: string) => {
    setActiveFilmId(id);
  };

  const resetFilmId = () => {
    setActiveFilmId(null);
  };

  return { setFilmId, resetFilmId, activeFilmId };
};
