import React from 'react';
import WrappedMap from '../components/Map';
import NavigationBar from '../components/NavigationBar'
import InfoCard from '../components/InfoCard'

function Main(){
    return(
      <div>
        <NavigationBar></NavigationBar>
        <div>
        
        <div style={{width: "750px", height: '550px'}}>
            < WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w"} 
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
        <InfoCard></InfoCard>  
        </div>
      </div>  
    )
};





export default Main;








