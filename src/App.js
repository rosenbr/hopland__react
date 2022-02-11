import './App.css';
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import ListItems from './components/ListItems/ListItems';
import Body from './components/Body/Body';
// import { Component } from 'react';
// import MyContext from './components/MyContext/MyContext';
// import VendorProvider from './components/VendorProvider/VendorProvider';
// import Vendor from './components/Vendor/Vendor';
// import VendorProvider from './components/VendorProvider/VendorProvider'
// import Button from './components/Button/Button';

// NOTES
// IF you want components to share the same data, the parents MUST hold the data
// state = stuff that changes. props = stuff that is static
// Target object w/vineyard data in the state array? i.e. Nelson=array[0], Jaxon=array[1], etc.
// state = [{name: Nelson}, {name: Jaxon}, {etc...}] -^

function App() {
  // render(){
    return (
      // <VendorProvider>
        <div className="App">
          <div className="hop__main">
            <Map />
            <Info />
          </div>
          <div className="hop__extra">
            {/* <VendorProvider> */}
            <ListItems />
            {/* <Button /> */}
            {/* </VendorProvider> */}
            <Body />
          </div>
        </div>
      // </VendorProvider>
  );
// }
}

export default App;
