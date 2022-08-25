import { Tab } from '../../components';

const TABS_DATA = [ { name: 'Overview', path: ''}, { name: 'Details', path: '/details' }, { name: 'Reviews', path: '/reviews' }];

type TabsComponentProps = {
  filmId: number;
}

function Tabs({ filmId }: TabsComponentProps): JSX.Element {

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {TABS_DATA.map((tab) => <Tab key={tab.name} tab={tab} id={filmId} />)}
      </ul>
    </nav>
  );
}

export default Tabs;
