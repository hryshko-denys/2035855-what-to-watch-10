import { Link } from 'react-router-dom';

import {APIRoute} from '../../services/const';

type MainLogoComponentProps = {
  isLight?: boolean,
}

function MainLogo({ isLight }: MainLogoComponentProps): JSX.Element {
  return (
    <div className="logo">
      <Link to={APIRoute.Index} className={`logo__link  ${isLight && 'logo__link--light'}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default MainLogo;
