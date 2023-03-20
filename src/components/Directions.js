import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../Styles/directions.css";
import Navbarhome from "./Navbar";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F1dGFtamFpbiIsImEiOiJjbGZkdjlqMjcxMWdhM3Jtdm1kZDJlaHd4In0.Sp34ZhsaKMqc3xJ3BAexfg"; // replace with your Mapbox access token

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // initialize map
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [26.928861, 75.7972808],
      zoom: 12,
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
        newMap.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 13,
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
      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/75.85009,26.822399;${destination}?geometries=geojson&access_token=pk.eyJ1IjoiZ2F1dGFtamFpbiIsImEiOiJjbGZkdjlqMjcxMWdhM3Jtdm1kZDJlaHd4In0.Sp34ZhsaKMqc3xJ3BAexfg`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("hello gautam here ");
          console.log(data);
          const route = data.routes[0].geometry;

          // remove the "route" layer and source if they already exist
          if (map.getLayer("route")) {
            map.removeLayer("route");
          }
          if (map.getSource("route")) {
            map.removeSource("route");
          }

          //const a = new mapboxgl.LngLat(userLocation);
          //const b = new mapboxgl.LngLat(destination);
          // console.log(userLocation.distanceTo(destination));
          console.log("dsfsdfsd" + destination);
          const a = new mapboxgl.LngLat(75.85009, 26.822399);
          //const a = destination;
          const b = new mapboxgl.LngLat(75.77481, 26.960785);

          setDistance(a.distanceTo(b) / 1000);

          const marker = new mapboxgl.Marker({
            color: "chocolate",
          })
            .setLngLat([75.85009, 26.822399])

            .setPopup(
              new mapboxgl.Popup().setHTML(`<p>Your Location<br/>
              
              total distance : ${distance.toPrecision(4)} Km
              
            
            </p > `)
            )
            .addTo(map);

          marker.togglePopup();

          //const maker = new mapboxgl.Marker().setLngLat(destination).addTo(map);
          //add route to map
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
              "line-color": "chocolate",
              "line-width": 5,
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
  }, [userLocation, destination, map, distance]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <>
    <Navbarhome/>
    <div id="gautam">
      <div className="jain">
        <label>Foodbanks Locater</label>
        <select
          id="destination"
          name="destination"
          onChange={handleDestinationChange}
        >
          <option value="">--Nearby Foodbanks--</option>
          <option value="75.82477,26.915512">Jagatpura</option>
          <option value="75.816486,26.90042">Malviya Nagar</option>
          <option value="75.77481,26.960785">VidhyaDhar Nagar</option>
          <option value="75.816298,26.88631">Mansarover</option>
          <option value="75.845437,26.830064">Sanganer</option>
        </select>
      </div>
      <div id="map"></div>
    </div>
    </>
  );
};

export default Map;
