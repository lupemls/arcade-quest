import React from 'react';
import WrappedMap from '../components/Map';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';

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

function Card(){
    return(
          <div class=“d-flex justify-content-center”>
          <div id=“card-one” style=“width: 0 0rem;“>
                <div class=“card” style=“width: 21rem;“>
                      <img src=“./image/arcade1.jpg” class=“card-img-top” alt=“...“/>
                      <div class=“card-body”>
                        <h2 class=“card-title”>Card Title</h2>
                        <p class=“card-text”>Lorem ipsum dolor sit amet consectetur. </p>
                      </div>
                      <ul class=“list-group list-group-flush”>
                        <li class=“list-group-item”>Donkey Kong.</li>
                        <li class=“list-group-item”>Christal Castle.</li>
                        <li class=“list-group-item”>Galaga.</li>
                        <li class=“list-group-item”>Donkey Kong.</li>
                      </ul>
                <div class=“card-body”>
                        <a href=“#” class=“card-link”></a>
                        <a href=“#” class=“card-link”></a>
                        <a href=“#” class=“card-link”></a>
                      </div>
                 </div>
          </div>
    </div>
    );
}


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





class NavigationBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <div>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/" >Atari Quest</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" >Index</NavLink>
                      </li>
                    </ul>


                    
                  </div><input type="text" className="input" placeholder="Search..." />
                  
                  
                  <form inline>
            <form type="text" placeholder="Search" className="mr-sm-2" />
      <button variant="outline-success">Search</button>
</form>

                </div>

                
            
              </nav>

    


              <div className="content">
              <Switch>
                <Route path="/" component={Home} exact />  

              </Switch>
            </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default NavigationBar;




export default WrappedMap;

export default Card

export default Main;