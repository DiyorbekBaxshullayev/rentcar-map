import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ReverseGeocode from "./components/ReverseGeocode";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
};

const ttuBuilding = {
  lat: 39.653930,
  lng: 66.958974,
};

const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // <-- API kalitni bu yerga yozing

function MapPage() {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Joylashuv aniqlanmadi:", error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bizning manzil - Samarqand</h1>

      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ttuBuilding}
          zoom={16}
        >
          <Marker
            position={ttuBuilding}
            label="TATU"
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }}
          />

          {userCoords && (
            <Marker
              position={userCoords}
              label="Siz"
              icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
            />
          )}
        </GoogleMap>
      </LoadScript>

      {userCoords && (
        <p className="mt-4 text-sm text-gray-700">
          Sizning manzilingiz:{" "}
          <ReverseGeocode lat={userCoords.lat} lng={userCoords.lng} />
        </p>
      )}
    </div>
  );
}

export default MapPage;
