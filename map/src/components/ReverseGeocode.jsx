// src/components/ReverseGeocode.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const ReverseGeocode = ({ lat, lng }) => {
  const [address, setAddress] = useState("Manzil aniqlanmoqda...");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
          params: {
            lat,
            lon: lng,
            format: "json",
          },
          headers: {
            "Accept-Language": "uz",
            "User-Agent": "RentCarMiniApp/1.0",
          },
        });
        setAddress(response.data.display_name);
      } catch (error) {
        console.error("Manzilni olishda xatolik:", error);
        setAddress("Manzilni olishda xatolik yuz berdi.");
      }
    };

    fetchAddress();
  }, [lat, lng]);

  return <span>{address}</span>;
};

export default ReverseGeocode;
