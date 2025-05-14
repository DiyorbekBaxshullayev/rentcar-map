import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const App = () => {
  const position = [41.2995, 69.2401]; // Tashkent manzili (sizga kerakli manzilni o'zgartiring)
  const zoom = 13;

  return (
    <div className="App">
      <h1>Bizning Manzil</h1>
      <MapContainer center={position} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Bu yerda bizning manzilimiz joylashgan.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
