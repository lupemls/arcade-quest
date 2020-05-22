import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
// import NavigationBar from "../components/NavigationBar";
import WrappedMap from "../components/Map";
import InfoCard from "../components/InfoCard";
import PlaceHolder from "../components/srcassets/bg.jpg";

function Main() {
  const [position, setPosition] = useState({ lat: 47.6101, lng: -122.2015 });
  const [mark, setMark] = useState({});
  // const [selctedMark, setSelectedMark] = useState(null);
  const [newSrc, setNewsrc] = useState(PlaceHolder);
  const [newTitle, setNewTitle] = useState(null);

  // console.log(mark)
  function handleMarkerClick(mark) {
    console.log(mark);
    // console.log(mark.latLng.lat())
    //   setSelectedMark(
    setNewsrc(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${mark}&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`
    );
    // axios.get(
    //   `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAevdYXaOo0OYA9Ulo7bBxnJqutsHkxEAsmpaY9KOMtPx5iO7WNL1S54aUSb1KJlspMD8ZLDfJwp1HH7JnWeeJhKEvqHFng-_2oaP_ZP9mdVNUZHJbLR8-E4-T57Ppo_vlEhDKE-dq-M08LQd4H2QMwtrhGhRejRj9uclqDhylysSKhe7yBjEiXg&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w
    //   `
    // )
    // .then((response)=>{
    //   console.log(selctedMark)
    //   console.log(response)
    // })
    // .catch((err) => {
    //   console.log("this yo" + err);
    // })
  }

  useEffect(() => {
    setNewTitle(
      "CmRaAAAAo9VNMjiPGHAzj6cB_6eND_GMC3VSNm9QubdOATHrTk7DSn_kBBaTLBpuXKB0fN0YfEttbFtl9hihsuIzeW7Cp6M15-kqVV2mpCo16yDx4asYM2lGCmQNzaq2F2MiwT-aEhD6FlARNGB9fMjubEmPTFttGhSjrWOl2musD22MApmOQuxl5Qf4Cw"
    );
    

    axios
      .get(`localhost:8080/api/allBusinesses`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=916 S 3rd St, Renton, WA 98057&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`
      )
      .then((response) => {
        // console.log(response);
        let { lat, lng } = response.data.results[0].geometry.location;
        // response.data.results[0].geometry.location;
        setMark({ lat: lat, lng: lng });
      })
      .catch((err) => {
        console.log("this yo" + err);
      });
    navigator.geolocation.getCurrentPosition((location) => {
      let { latitude, longitude } = location.coords;

      setPosition({ lat: latitude, lng: longitude });
    });
  }, []);
  return (
    <div>
      <Header />
      {/* <NavigationBar></NavigationBar> */}
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="map-div" style={{ width: "750px", height: "500px" }}>
              <WrappedMap
                title={newTitle}
                mark={mark}
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
          <div className="col-4">
            <InfoCard src={newSrc}></InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
