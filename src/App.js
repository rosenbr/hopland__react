import './App.css';
import Header from './Header';
import Map from './Map';
import Info from './Info';
import Body from './Body';

function App() {
  return (
    <div className="App">
        <Header />
      <div class="hop__main">
        <Map />
        <Info />
      </div>
        <Body />
    </div>
  );
}

export default App;
