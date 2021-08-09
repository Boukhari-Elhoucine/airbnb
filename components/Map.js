import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";
function Map({ result }) {
  const coordinates = result.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const center = getCenter(coordinates);
  const [selected, setSelected] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/elhoucine/cks4k8nce0eto17n3lmp98eoc"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {result.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              onClick={() => setSelected(item)}
              className="h-5 text-red-400 cursor-pointer animate-bounce"
            />
          </Marker>
          {selected?.long === item.long ? (
            <Popup
              latitude={selected.lat}
              longitude={selected.long}
              closeOnClick={true}
              onClose={() => setSelected({})}
            >
              {item.title}
            </Popup>
          ) : (
            <h1></h1>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
