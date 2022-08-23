
import React from 'react'
import './App.css';
import { useEffect } from 'react'
import Map from './Map';
function App() {
  
  useEffect(() => {
    // Mapquest/API Key
    window.L.mapquest.key = 'SbABP9Vr89Ox8a38s29QPLUQm51xa784';
    // Map Declaration
    let map = window.L.mapquest.map('map', {
      center: [0, 0],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 12
    });
    // Map Navigation Control (zoom in/out)
    map.addControl(window.L.mapquest.geocodingControl({
      position: 'topleft'
    }))
  }, [])
  return (
    <div className="App">
      <h1>Test h1s</h1>
      {/* <Map/> */}
      <div id="map" style={{ width: '100%', height: '530px' }}></div>
    </div>
  );
}
export default App;
