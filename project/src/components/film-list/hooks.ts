import { useState } from 'react';

type ActiveFilmType = string | null;

export const useFilmListHook = () => {
  const [activeFilmId, setActiveFilmId] = useState<ActiveFilmType>(null);

  const setFilmId = async (id: string) => {
    setTimeout(() => setActiveFilmId(id), 1000);
  };

  const resetFilmId = () => {
    setActiveFilmId(null);
  };

  return { setFilmId, resetFilmId, activeFilmId };
};
