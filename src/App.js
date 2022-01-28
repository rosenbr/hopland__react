import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import Body from './components/Body/Body';
import Vendor from './components/Vendor/Vendor';

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
        <Vendor />
        <Body />
      </div>
    </div>
  );
}

export default App;
