import {Link, useLocation} from 'react-router-dom';

type TabComponentProps = {
  tab: {
    name: string,
    path: string
  };
  id: number,
};

function Tab({ tab, id }: TabComponentProps): JSX.Element {
  const { pathname } = useLocation();
  const path = `/films/${id}${tab.path}`;

  return (
    <li className={`film-nav__item ${pathname === path && 'film-nav__item--active'}`}>
      <Link to={path} className="film-nav__link">
        {tab.name}
      </Link>
    </li>
  );
}

export default Tab;
