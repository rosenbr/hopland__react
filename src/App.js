import './App.css';

// NOTE ===== | Real Imports | ====
// import Map from './components/Map/Map';
// import Info from './components/Info/Info';
// import ListItems from './components/ListItems/ListItems';
// import Body from './components/Body/Body';
// // import { Component } from 'react';

// NOTE ===== | Test imports | ====
import Body from './testComps/Body/Body';
import Info from './testComps/Info/Info';
import ListItems from './testComps/ListItems/ListItems';


// NOTES
// IF you want components to share the same data, the parents MUST hold the data
// state = stuff that changes. props = stuff that is static
// Target object w/vineyard data in the state array? i.e. Nelson=array[0], Jaxon=array[1], etc.
// state = [{name: Nelson}, {name: Jaxon}, {etc...}] -^

// NOTE ===== | Real App.js | =====
// function App() {
//     return (
//         <div className="App">
//           <div className="hop__main">
//             <Map />
//             <Info />
//           </div>
//           <div className="hop__extra">
//             <ListItems />
//             <Body />
//           </div>
//         </div>
//   );
// }

// NOTE ===== | Test App.js | =====
function App () {
  return(
    <div className="App">
      <div className="hop__main">
        <Info />
      </div>
      <div className="hop__extra">
        <ListItems />
        <Body />
      </div>
    </div>
  )
}

export default App;
