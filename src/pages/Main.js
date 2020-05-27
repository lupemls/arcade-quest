import React, { useEffect, useState } from "react";
import axios from "axios";
import WrappedMap from "../components/Map";
import NavigationBar from "../components/NavigationBar";
import InfoCard from "../components/InfoCard";
import Header from "../components/Header";

function Main() {
  const [position, setPosition] = useState({ lat: 47.6101, lng: -122.2015 });
  const [resOther, setOther] = useState([]);
  const [resArcade, setArcade] = useState([]);
  const [resBar, setBar] = useState([]);
  const [ newRes, setNewRes ] = useState([]);
  const [newSrc, setNewsrc] = useState();

  function handleMarkerClick(mark) {
   console.log(mark);

   axios
      .get(`/api/business/${mark}`)
         .then((response)=>{
            console.log(response)
            axios.get(`/api/businessArcades/${mark}`)
            .then((response1)=>{
               console.log(response1)
            })
         })
   
   // setNewsrc(
   //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${mark}&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`
   // );
   
   
 }
 useEffect(() => {
   
    

   axios
     .get(`/api/allBusinesses`)
     .then((response) => {
       console.log(response.data);
       setNewRes(response.data)
       const others = response.data.filter(business => business.type === 'other');
       const arcade = response.data.filter(business => business.type === 'arcade');
       const bars = response.data.filter(business => business.type === 'bar');
       // const restaurant = response.data.filter(business => business.type === 'res');
       setOther(others)
       setArcade(arcade)
       setBar(bars)
     })
     .catch((err) => {
       console.log(err);
     });

   
   navigator.geolocation.getCurrentPosition((location) => {
     let { latitude, longitude } = location.coords;

     setPosition({ lat: latitude, lng: longitude });
   });
 }, []);
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <div className="wrapper">
          <Header></Header>

          <div className="container-one">
            <div className="map">
              <div style={{ width: "700px", height: "550px" }}>
                <WrappedMap
                  res={newRes}
                  other={resOther}
                  arcades={resArcade}
                  bar={resBar}
                  handleClick={handleMarkerClick}
                  position={position}
                  googleMapURL={
                    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w"
                  }
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                />
              </div>
            </div>
            <InfoCard src={newSrc}> </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
