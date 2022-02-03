import './App.css';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import Body from './components/Body/Body';
import Popup from './components/Popup/Popup'
import { useState } from 'react';

function App() {
  // IF you want components to share the same data, the parents MUST hold the data
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div className="App">
      <div className="hop__popup">
        <button onClick={() => setButtonPopup(true)}>Test button 1</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
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
