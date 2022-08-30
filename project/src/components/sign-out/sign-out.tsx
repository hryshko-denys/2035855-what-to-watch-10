import {Link} from 'react-router-dom';

import { useSignOut } from './useSignOut';

import {APIRoute} from '../../services/const';

function SignOut(): JSX.Element {
  const { handleLogout, avatar } = useSignOut();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={APIRoute.MyList} >
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <button onClick={handleLogout} className="btn user-block__link" type='button'>
          Sign out
        </button>
      </li>
    </ul>
  );
}

export default SignOut;
