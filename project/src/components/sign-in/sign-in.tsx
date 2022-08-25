import { Link } from 'react-router-dom';

import {APIRoute} from '../../services/const';

function SignIn(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={APIRoute.Login} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

export default SignIn;
