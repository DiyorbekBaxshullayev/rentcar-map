import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const RentCarMap = () => {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.error('Joylashuv olinmadi:', err)
    );
  }, []);

  // TATU Samarqand manzili (savdo markazi sifatida)
  const shoppingCenters = [
    {
      name: 'TATU Samarqand - Kompyuter injiniringi fakulteti',
      lat: 39.653930,
      lng: 66.958974,
    },
    // Agar ikkinchi bino ham bo‘lsa, shu yerga qo‘shing
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCE0TrRWdr6lTquJ9h9vzAvciEKJCW7fDQ">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '500px' }}
        center={{ lat: 39.653930, lng: 66.958974 }}
        zoom={16}
      >
        {/* Foydalanuvchi joylashuvi (qizil marker) */}
        {userCoords && (
          <Marker
            position={userCoords}
            label="Siz"
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // HTTPS
            }}
          />
        )}

        {/* TATU – yashil marker */}
        {shoppingCenters.map((center, idx) => (
          <Marker
            key={idx}
            position={{ lat: center.lat, lng: center.lng }}
            label={center.name}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', // HTTPS
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default RentCarMap;
