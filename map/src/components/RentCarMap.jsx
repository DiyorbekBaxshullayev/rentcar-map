import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Samarqanddagi RentCar manzillari (kenglik va uzunliklar)
const rentCarLocations = [
  { name: 'RentCar Dinamo Stadion', lat: 39.656, lng: 66.961 },
  { name: 'RentCar Vokzal', lat: 39.652, lng: 66.970 },
  { name: 'RentCar Aeroport', lat: 39.667, lng: 66.977 },
];

const RentCarMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCE0TrRWdr6lTquJ9h9vzAvciEKJCW7fDQ">
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '500px',
        }}
        center={{ lat: 39.653, lng: 66.959 }} // Samarqand markazi
        zoom={13}
      >
        {rentCarLocations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.name} // Manzil nomini ko'rsatish
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default RentCarMap;
