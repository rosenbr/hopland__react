import './App.css';
import Header from './Header';
import Map from './Map';
import Info from './Info';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <div class="hop__body">
        <Header />
        <Map />
        <Info />
        <Body />
      </div>
    </div>
  );
}

export default App;
