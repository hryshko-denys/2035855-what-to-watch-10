import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

import {FilmOverview, FilmDetails, FilmReviews, PrivateRoute} from '../../components';

import {
  MainPage,
  SignIn,
  MyList,
  MoviePage,
  AddReview,
  Player,
  NotFoundPage,
} from '../../pages';

import {AuthorizationStatus} from '../const';
import {APIRoute} from '../../services/const';

import {getAuthorizationStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={APIRoute.Index} element={<MainPage />} />
        <Route
          path={APIRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              invalidStatus={AuthorizationStatus.AUTH}
              navigatePath={APIRoute.Index}
            >
              <SignIn />
            </PrivateRoute>
          }
        />
        <Route
          path={APIRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              validStatus={AuthorizationStatus.AUTH}
              navigatePath={APIRoute.Login}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={APIRoute.Film} element={<MoviePage />}>
          <Route index element={<FilmOverview />} />
          <Route path={APIRoute.Details} element={<FilmDetails />} />
          <Route path={APIRoute.Reviews} element={<FilmReviews />} />
        </Route>
        <Route
          path={APIRoute.FullReviews}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              validStatus={AuthorizationStatus.AUTH}
              navigatePath={APIRoute.Login}
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={APIRoute.Player} element={<Player />} />
        <Route path={APIRoute.NotFoundPage} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
