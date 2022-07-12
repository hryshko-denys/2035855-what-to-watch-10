import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import SignIn from '../../pages/sign-in';
import Mylist from '../../pages/my-list';
import MoviePage from '../../pages/movie-page';
import AddReview from '../../pages/add-review';
import Player from '../../pages/player';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';

import { AuthorizationStatus } from '../const';


type FilmDetails = {
  name: string,
  genre: string,
  releaseDate: number
}

type MainComponentProps = {
  filmDetails: FilmDetails;
}

function App({ filmDetails }: MainComponentProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage filmDetails={filmDetails} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/mylist' element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Mylist />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<MoviePage />} />
        <Route path='/films/:id/review' element={<AddReview />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
