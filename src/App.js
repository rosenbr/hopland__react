import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import Body from './components/Body/Body';
import Card from './components/Card/Card';

function App() {
  return (
    // IF you want components to share the same data, the parents MUST hold the data
    <div className="App">
        <Header />
      <div class="hop__main">
        <Map />
        <Info />
      </div>
      <div class="hop__extra">
        {/* <Card /> */}
        <Card name="Neslon Family" />
        <Body />
      </div>
    </div>
  );
}

export default App;
