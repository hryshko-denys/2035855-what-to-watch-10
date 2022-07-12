import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h2>404 Error</h2>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFoundPage;
