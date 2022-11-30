import Navbar from './components/navBar';
import './App.css';
import React, {useMemo, useState, useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

  
const libraries = ['places'];
const mapContainerStyle = {
  height: '100vh',
  width: '100vw',
};
const options = {
  
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};
  
function App() {

const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: 'AIzaSyBkdHcWFWGDabP2RdWZFeBaeJssamRfM9s',
  libraries,
});
const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) => {
  mapRef.current = map;
}, []);

const panTo = React.useCallback(({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(14);
}, []);

if (loadError) return 'Error';
if (!isLoaded) return 'Loading...';


  



  return (
    <div className='App'>
      <Navbar />
      <div className='bod'>
      {/* <Locate panTo={panTo} />
      <Search panTo={panTo} /> */}
      </div>
     <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
        mapContainerClassName='map-container'
        onLoad={onMapLoad}
      >
        <Marker position={center} />
      </GoogleMap> 
      
      
    </div>
  );
}

export default App;
