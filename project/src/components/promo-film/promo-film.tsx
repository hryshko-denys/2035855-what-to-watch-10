import React from 'react';
import { Link } from 'react-router-dom';

import {MainLogo, MyListBtn, SignIn, SignOut} from '../../components';

import { FilmsListType } from '../../types/FilmsListType';

import { AuthorizationStatus } from '../const';

import { usePromoFilmHook } from './usePromoFilmHook';

type PromoFilmComponentProps = {
  promoFilm: FilmsListType;
};

function PromoFilm({ promoFilm }: PromoFilmComponentProps): JSX.Element {
  const { authorizationStatus } = usePromoFilmHook();

  const { genre, name, released, backgroundImage, posterImage, id } = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <MainLogo />

        {authorizationStatus !== AuthorizationStatus.AUTH ? (
          <SignIn />
        ) : (
          <SignOut />
        )}
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <Link
                to={`/player/${id}`}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              {authorizationStatus === AuthorizationStatus.AUTH && (
                <MyListBtn id={id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(PromoFilm);
