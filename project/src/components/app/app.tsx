import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../../components';
import { MainPage, SignIn, MyList, MoviePage, AddReview, Player, NotFoundPage } from '../../pages';

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
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          >
            <MyList />
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
