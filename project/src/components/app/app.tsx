import { Route, Routes } from 'react-router-dom';

import browserHistory from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-route';

import { PrivateRoute } from '../../components';
import { MainPage, SignIn, MyList, MoviePage, AddReview, Player, NotFoundPage } from '../../pages';

import { AuthorizationStatus } from '../const';

function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/mylist' element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.AUTH}
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
    </HistoryRouter>
  );
}

export default App;
