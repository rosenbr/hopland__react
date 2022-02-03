import './App.css';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import Body from './components/Body/Body';
// import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';

function App() {
  // IF you want components to share the same data, the parents MUST hold the data

  return (
    <div className="App">
      <Button />
      <Button />
      <Button />
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
