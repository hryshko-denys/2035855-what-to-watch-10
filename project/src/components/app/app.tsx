import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import browserHistory from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-route';

import {FilmOverview, PrivateRoute, FilmDetails, FilmReviews} from '../../components';
import {
  MainPage,
  SignIn,
  MyList,
  MoviePage,
  AddReview,
  Player,
  NotFoundPage,
} from '../../pages';

import { AuthorizationStatus } from '../const';

import { InitialStateType } from '../../types/state';

function App(): JSX.Element {
  const { authorizationStatus } = useAppSelector(
    (state: InitialStateType) => state
  );

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              invalidStatus={AuthorizationStatus.AUTH}
              navigatePath="/"
            >
              <SignIn />
            </PrivateRoute>
          }
        />
        <Route
          path="/mylist"
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              validStatus={AuthorizationStatus.AUTH}
              navigatePath="/login"
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path="/films/:id" element={<MoviePage />}>
          <Route index element={<FilmOverview />} />
          <Route path="details" element={<FilmDetails />} />
          <Route path="reviews" element={<FilmReviews />} />
        </Route>
        <Route
          path="/films/:id/review"
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              validStatus={AuthorizationStatus.AUTH}
              navigatePath="/login"
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
