import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
// import axios from "axios";
// import Geocode from "react-geocode"

function Map(props) {
  // console.log(props.mark)
  return (
    <GoogleMap defaultZoom={10} center={props.position}>
      <Marker
        title={props.newTitle}
        position={props.mark}
        onClick={() => props.handleClick(props.title)}
       
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
