import './App.css';
import Header from './Header';
import Map from './Map';
import Info from './Info';
import Body from './Body';
import Card from './Card';

function App() {
  return (
    <div className="App">
        <Header />
      <div class="hop__main">
        <Map />
        <Info />
      </div>
      <div class="hop__extra">
        <Card />
        <Body />
      </div>
    </div>
  );
}

export default App;
