import React, { useEffect, useState } from "react";
import axios from "axios";
import WrappedMap from "../components/Map";
import NavigationBar from "../components/NavigationBar";
import InfoCard from "../components/InfoCard";
import Header from "../components/Header";
import Logo from "../images/LogoAQ1.svg";


const defaultTitle = 
  {
    name: 'Arcade Quest',
    url: '*'

  }

const defaultGames = [
  {
    game: 'Donkey Kong.',
    type: 'arcade'
  },
  {
    game: 'Crystal Castle.',
    type: 'arcade'
  },
 {
  game: 'Galaga.',
  type: 'arcade'
},
{
  game: 'Gaulent.',
  type: 'arcade'
},
 
]

function Main() {
  const [position, setPosition] = useState({ lat: 47.6101, lng: -122.2015 });
  const [resOther, setOther] = useState([]);
  const [resArcade, setArcade] = useState([]);
  const [resBar, setBar] = useState([]);
  const [newRes, setNewRes] = useState([]);
  const [newSrc, setNewsrc] = useState(Logo);
  const [newTitle, setTitle] = useState(defaultTitle);
  const [newGame, setGame] = useState(defaultGames)

  



  function handleMarkerClick(mark) {
    // console.log(mark);

    axios.get(`/api/businessArcades/${mark}`).then((response) => {
      // console.log(response.data.photoRef);
      setNewsrc(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${response.data.photoRef}&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`
      );
      console.log(response.data.Arcades)
      setTitle(response.data)
      setGame(response.data.Arcades)
    });
  }
  useEffect(() => {
    axios
      .get(`/api/allBusinesses`)
      .then((response) => {
        console.log(response.data);

        const others = response.data.filter(
          (business) => business.type === "other"
        );
        const arcade = response.data.filter(
          (business) => business.type === "arcade"
        );
        const bars = response.data.filter(
          (business) => business.type === "bar"
        );

        const restaurant = response.data.filter(
          (business) => business.type === "restaurant"
        );
        setOther(others);
        setArcade(arcade);
        setBar(bars);
        setNewRes(restaurant);
        console.log(response.data);
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
            <InfoCard src={newSrc}
            title={newTitle}
            game={newGame}
            > </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
