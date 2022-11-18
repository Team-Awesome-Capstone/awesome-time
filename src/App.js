import Navbar from './components/navBar';
import './App.css';
import React, {useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function App() {

   

 const { isLoaded } = useLoadScript({
   googleMapsApiKey: 'AIzaSyBkdHcWFWGDabP2RdWZFeBaeJssamRfM9s',
 });

 if (!isLoaded) return <div>Loading...</div>;
  



  return (
    <div className='App'>
      <Navbar />
      <Map />
    </div>
  );
}
function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  );
}
export default App;
