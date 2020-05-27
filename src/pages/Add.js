//Used to add a new location

import React, {useState} from "react";
import State from "./State";
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import Axios from "axios";
import { useHistory } from "react-router-dom";





function Add(props) {
    const [data, setData] = useState({});
    let history = useHistory()

    function handleChange(e){
        console.log(e.target.value)
        setData({...data, [e.target.id]: e.target.value});
    };

    function handleSubmit(e){

        e.preventDefault()
        console.log(data)
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.address},+${data.city}&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w`)
        .then((response)=>{
            Axios.post("/api/addBusiness",{data,location: response.data.results[0].geometry.location})
            history.push("/Main")
        })
    }

    
    return (

      <div>
        <NavigationBar></NavigationBar>
        
      <div className="wrapper">
        <Header></Header>

            <form onSubmit={handleSubmit} className="newLocation">
                <label>Name of Business</label>
                <input onChange={handleChange} type="text" id="business"/>
            
                
                <br></br>

                <label>Type of Business</label>
                <select onChange={handleChange} id="businessType">
                    <option></option>
                    <option>restaurant</option>
                    <option>bar</option>
                    <option>arcade</option>
                    <option>pizzeria    </option>
                    <option>other</option>
                </select>

                <br></br>

                <label>Address</label>
                <input onChange={handleChange} type="text" id="address"/>

                <br></br>

                <label>City</label>
                <input onChange={handleChange} type="text" id="city"/>

                <State></State>

                <label>Zip Code</label>
                <input onChange={handleChange} type="text" id="zip"/>

                <br></br>

                <label>Payment Method</label>
                <select onChange={handleChange} id="payment">
                    <option></option>
                    <option>Quarters</option>
                    <option>Tokens</option>
                    <option>Card</option>
                </select>

                <input onChange={handleChange} type="submit" id="submit"></input>
            </form>
         </div>
    </div>

    )
}

export default Add;