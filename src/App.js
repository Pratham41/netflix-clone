import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetFlixOriginals}
        isLargeRow={true}
      />

      <Row title='Treding Now' fetchUrl={requests.fetchTreding} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanticMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorroMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
