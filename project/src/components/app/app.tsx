import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../../components';
import { MainPage, SignIn, MyList, MoviePage, AddReview, Player, NotFoundPage } from '../../pages';

import { FilmsMock } from '../../mocks/types';

import { AuthorizationStatus } from '../const';

type FilmDetails = {
  name: string,
  genre: string,
  releaseDate: number
}

type MainComponentProps = {
  filmDetails: FilmDetails;
  filmsMock: FilmsMock[];
}

function App({ filmDetails, filmsMock }: MainComponentProps): JSX.Element {
  const usersList = filmsMock.filter((film) => film.isInUsersList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage filmDetails={filmDetails} filmsMock={filmsMock} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/mylist' element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.AUTH}
          >
            <MyList usersList={usersList} />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<MoviePage filmsMock={filmsMock} />} />
        <Route path='/films/:id/review' element={<AddReview filmsMock={filmsMock} />} />
        <Route path='/player/:id' element={<Player filmsMock={filmsMock} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
