import MainPage from '../../pages/main-page/MainPage';
type FilmDetails = {
  name: string,
  genre: string,
  releaseDate: number
}

type MainComponentProps = {
  filmDetails: FilmDetails;
}

function App({ filmDetails }: MainComponentProps): JSX.Element {
  return <MainPage filmDetails={filmDetails} />;
}

export default App;
