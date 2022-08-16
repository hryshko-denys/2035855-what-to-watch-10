import { Tab } from '../../components';

type TabsComponentProps = {
  filmId: number;
}

function Tabs({ filmId }: TabsComponentProps): JSX.Element {
  const tabs = [ { name: 'Overview', path: ''}, { name: 'Details', path: '/details' }, { name: 'Reviews', path: '/reviews' }];

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabs.map((tab) => <Tab key={tab.name} tab={tab} id={filmId} />)}
      </ul>
    </nav>
  );
}

export default Tabs;
