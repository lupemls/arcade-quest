import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
// import axios from 'axios'
// import Geocode from "react-geocode";
function Map(props) {
  
  return (
    <GoogleMap defaultZoom={10} center={props.position}>
      
      {props.res.map((place) => (
        <Marker
          key={place.id}
          title={place.photoRef}
          position={{
            lat: place.lat,
            lng: place.long,
          }}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => props.handleClick(place.id)}
        />
      ))}
      {props.bar.map((place) => (
        <Marker
          key={place.id}
          title={place.photoRef}
          position={{
            lat: place.lat,
            lng: place.long,
          }}
          icon={"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}
          onClick={() => props.handleClick(place.id)}
        />
      ))}
      {props.other.map((place) => (
        <Marker
          key={place.id}
          title={place.photoRef}
          position={{
            lat: place.lat,
            lng: place.long,
          }}
          icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          onClick={() => props.handleClick(place.id)}
        />
      ))}
      {props.arcades.map((place) => (
        <Marker
          key={place.id}
          title={place.photoRef}
          position={{
            lat: place.lat,
            lng: place.long,
          }}
          icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          onClick={() => props.handleClick(place.id)}
        />
      ))}

      <div id="wrapper">
        
        <div class="legend">
        {/* <button onClick={props.showNew()} className='button'>Show New Marker</button> */}
          <h3 class="maptitle">legend</h3>
          <div class="square1"></div>&nbsp; arcade &nbsp;&nbsp;&nbsp;
          <div class="square2"></div> &nbsp; bar&nbsp;&nbsp;&nbsp;
          <div class="square3"></div>&nbsp; restaurant &nbsp;&nbsp;&nbsp;
          <div class="square4"></div>&nbsp; other
        </div>
      </div>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
