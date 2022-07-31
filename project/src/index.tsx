import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { store } from './store';
import { fetchFilmsListAction, fetchPromoFilmAction } from './store/api-actions';

import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsListAction());
store.dispatch(fetchPromoFilmAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
