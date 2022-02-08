import './App.css';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import Body from './components/Body/Body';
// import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';

// NOTES
// IF you want components to share the same data, the parents MUST hold the data
// state = stuff that changes. props = stuff that is static
// Target object w/vineyard data in the state array? i.e. Nelson=array[0], Jaxon=array[1], etc.
// state = [{name: Nelson}, {name: Jaxon}, {etc...}] -^

function App() {

  return (
    <div className="App">
      <div class="hop__button">
        <Button />
        <Button />
      </div>
      <div class="hop__main">
        <Map />
        <Info />
      </div>
      <div class="hop__extra">
        <Body />
      </div>
    </div>
  );
}

export default App;
