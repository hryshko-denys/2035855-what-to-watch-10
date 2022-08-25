import { Link } from 'react-router-dom';

import {APIRoute} from '../../services/const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h2>404 Error</h2>
      <Link to={APIRoute.Index}>Go to main page</Link>
    </>
  );
}

export default NotFoundPage;
