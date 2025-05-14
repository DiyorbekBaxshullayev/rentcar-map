import { useEffect, useState } from "react";
import ReverseGeocode from "./components/ReverseGeocode"; // To‘g‘ri path bo‘lishi kerak

function MapPage() {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Foydalanuvchi joylashuvi:", position.coords);
        setUserCoords(position.coords);
      },
      (error) => {
        console.error("Joylashuv aniqlanmadi:", error);
      }
    );
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bizning manzil - Samarqand</h1>

      {/* Xarita: Samarqand markazi */}
      <iframe
        src="https://maps.google.com/maps?q=39.6542,66.9597&z=14&output=embed"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        style={{ borderRadius: "10px", border: 0 }}
        title="Samarqand RentCar joylashuvi"
      ></iframe>

      {/* Foydalanuvchining joylashuvi matnda chiqariladi */}
      {userCoords && (
        <p className="mt-4 text-sm text-gray-700">
          Sizning manzilingiz:{" "}
          <ReverseGeocode lat={userCoords.latitude} lng={userCoords.longitude} />
        </p>
      )}
    </div>
  );
}

export default MapPage;
