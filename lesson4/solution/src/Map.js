import React, { useRef, useEffect } from "react";
import Leaflet from "leaflet";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@latest/dist/leaflet.css";
document.body.appendChild(link);

function Map(props) {
  const mapWrapperElement = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(mapWrapperElement.current).setView(
      [props.lat, props.long],
      13
    );

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, []);

  return <div ref={mapWrapperElement} style={{ width: 600, height: 400 }} />;
}

export default Map;
