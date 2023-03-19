import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F1dGFtamFpbiIsImEiOiJjbGZkdjlqMjcxMWdhM3Jtdm1kZDJlaHd4In0.Sp34ZhsaKMqc3xJ3BAexfg"; // replace with your Mapbox access token

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // initialize map
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [26.928861, 75.7972808],
      zoom: 12,
    });

    // get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
        newMap.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 12,
        });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );

    setMap(newMap);
  }, []);

  useEffect(() => {
    if (userLocation && destination) {
      // get directions

      console.log("userloaction :" + userLocation);
      console.log("destination :" + destination);
      // const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${userLocation};${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/19.0760,72.877;${destination}?geometries=geojson&access_token=pk.eyJ1IjoiZ2F1dGFtamFpbiIsImEiOiJjbGZkdjlqMjcxMWdhM3Jtdm1kZDJlaHd4In0.Sp34ZhsaKMqc3xJ3BAexfg`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("hello gautam here ");
          console.log(data);
          const route = data.routes[0].geometry;
          // add route to map
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                geometry: route,
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#888",
              "line-width": 8,
            },
          });
          // fit map to route
          const bounds = route.coordinates.reduce(
            (bounds, coord) => bounds.extend(coord),
            new mapboxgl.LngLatBounds(
              route.coordinates[0],
              route.coordinates[0]
            )
          );
          map.fitBounds(bounds, { padding: 40 });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userLocation, destination]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div>
      <div id="map" style={{ width: "50%", height: "500px" }}></div>
      <div>
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          name="destination"
          onChange={handleDestinationChange}
        >
          <option value="">--Choose a destination--</option>
          <option value="28.7041,77.1025">City Park</option>
          <option value="24.9345886,75.5883278">Empire State Building</option>
          <option value="24.9345886,75.5883278">Times Square</option>
        </select>
      </div>
    </div>
  );
};

export default Map;
