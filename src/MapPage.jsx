import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Marker uchun default ikonka to'g'rilash
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function MapPage() {
  const position = [41.311081, 69.240562]; // Toshkent markazi

  useEffect(() => {
    document.title = "Bizning manzil";
  }, []);

  return (
    <div className="w-screen h-screen">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full z-10">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Bizning ofis shu yerda 📍<br /> Amir Temur ko‘chasi, Toshkent
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPage;
