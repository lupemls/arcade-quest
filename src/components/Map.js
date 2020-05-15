import React, {  useEffect, useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import axios from 'axios'
// import Geocode from "react-geocode";

function Map(){
    const [ position, setPosition ] = useState({lat: 47.6101, lng: -122.2015});
    const [ mark, setMark ] = useState({})

    useEffect(()=>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=916+S+3rd+St,+Renton,+Wa&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`)
        .then(response =>{
            console.log(response.data.results[0].geometry.location)
            let {lat, lng} = response.data.results[0].geometry.location
            setMark({lat: lat, lng: lng});
        })
        .catch(err =>{
            console.log('this yo' + err)
        })
        navigator.geolocation.getCurrentPosition((location)=>{
           let {latitude, longitude} = location.coords
           setPosition({lat: latitude, lng: longitude});
        //    console.log( location.coords)
        });
    }, []);
    return(
        <GoogleMap  defaultZoom={10} center={position}>
            <Marker key={8} position={mark} />
        </GoogleMap>    
    )
};

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;