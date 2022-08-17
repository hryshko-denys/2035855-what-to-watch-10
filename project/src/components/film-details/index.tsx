import {useOutletContext} from 'react-router-dom';

import {DetailsBlock} from '../index';

import {useFilmDetails} from './useFilmDetails';

import {ActiveFilmType} from '../../types/FilmsListType';

function FilmDetails(): JSX.Element {
  const { filmInfo }: ActiveFilmType = useOutletContext();
  const { timeAdapted } = useFilmDetails(filmInfo);
  const { director, genre, released, starring } = filmInfo;
  const adaptedReleased = released.toString();

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <DetailsBlock heading={'Director'} content={director} />
        <DetailsBlock heading={'Starring'} content={starring} />
      </div>

      <div className="film-card__text-col">
        <DetailsBlock heading={'Run Time'} content={timeAdapted} />
        <DetailsBlock heading={'Genre'} content={genre} />
        <DetailsBlock heading={'Released'} content={adaptedReleased} />
      </div>
    </div>
  );
}

export default FilmDetails;
