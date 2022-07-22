import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import filmsMock from './mocks/films';

type FilmDetails = {
  name: string,
  genre: string,
  releaseDate: number
}

const filmDetails: FilmDetails = { name: 'The Grand Budapest Hotel', genre: 'Drama', releaseDate: 2014 };


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmDetails={filmDetails} filmsMock={filmsMock} />
  </React.StrictMode>,
);
