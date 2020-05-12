import React, { useLayoutEffect, useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

function Map(){
    const [ position, setPosition ] = useState({lat: 47.6101, lng: -122.2015});

    useLayoutEffect(()=>{
        navigator.geolocation.getCurrentPosition((location)=>{
           let {latitude, longitude} = location.coords
           setPosition({lat: latitude, lng: longitude});
        });
    }, []);
    return(
        <GoogleMap  defaultZoom={10} center={position}/>
    )
};

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;