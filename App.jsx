import { Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
// boshqa sahifalar...

function App() {
  return (
    <Routes>
      <Route path="/map" element={<MapPage />} />
      {/* boshqa sahifalar */}
    </Routes>
  );
}
