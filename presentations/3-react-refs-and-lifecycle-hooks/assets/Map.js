import React, { useRef, useEffect } from "react";
// import Leaflet from "leaflet";

// const link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css";
// document.body.appendChild(link);

function Map() {
  const mapWrapperElement = useRef(null);

  useEffect(() => {
    // const map = Leaflet.map(mapWrapperElement.current).setView(
    //   [51.505, -0.09],
    //   13
    // );
    // Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
  }, []);

  return <div ref={mapWrapperElement} style={{ width: 600, height: 400 }} />;
}

function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
