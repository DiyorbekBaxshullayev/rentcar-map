import { useEffect, useState } from "react";

function MapPage() {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    // Telegram WebApp API-ni ishga tushirish
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }

    // Foydalanuvchi joylashuvini olish
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Foydalanuvchi joylashuvi:", position.coords);
      setUserCoords(position.coords); // Istasangiz foydalanuvchining location’ini saqlang
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bizning manzil</h1>

      <iframe
        src="https://maps.google.com/maps?q=41.311081,69.240562&z=15&output=embed"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        style={{ borderRadius: "10px", border: 0 }}
      ></iframe>

      {userCoords && (
        <p className="mt-4 text-sm text-gray-700">
          Sizning joylashuvingiz: {userCoords.latitude}, {userCoords.longitude}
        </p>
      )}
    </div>
  );
}

export default MapPage;
