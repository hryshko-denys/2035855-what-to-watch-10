import {Link} from 'react-router-dom';

import { useSignOut } from './useSignOut';

function SignOut(): JSX.Element {
  const { logout, avatar } = useSignOut();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to="/mylist" >
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <button onClick={logout} className="btn user-block__link" type='button'>
          Sign out
        </button>
      </li>
    </ul>
  );
}

export default SignOut;
