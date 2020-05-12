import React from 'react';
import WrappedMap from '../components/Map';


function Main(){
    return(
        <div style={{width: "750px", height: '550px'}}>
            < WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w"} 
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
    )
};

export default Main;