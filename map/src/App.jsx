import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ReverseGeocode from "./components/ReverseGeocode";

function MapPage() {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Foydalanuvchi joylashuvi:", position.coords);
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Joylashuv aniqlanmadi:", error);
      }
    );
  }, []);

  // TATU binosi manzili
  const ttuBuilding = {
    lat: 39.653930,
    lng: 66.958974,
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bizning manzil - Samarqand</h1>

      <LoadScript googleMapsApiKey="AIzaSyCE0TrRWdr6lTquJ9h9vzAvciEKJCW7fDQ">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px", borderRadius: "10px" }}
          center={ttuBuilding}
          zoom={16}
        >
          {/* TATU marker (yashil) */}
          <Marker
            position={ttuBuilding}
            label="TATU Samarqand"
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }}
          />

          {/* Foydalanuvchi marker (qizil) */}
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
