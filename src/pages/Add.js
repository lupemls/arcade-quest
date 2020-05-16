//Used to add a new location

import React from "react";
import State from "./State";

function Add(props) {
    return (
        <div>
            <form className="newLocation">
                <label>Name of Business</label>
                <input type="text" id="business"/>
                
                <br></br>

                <label>Type of Business</label>
                <select id="businessType">
                    <option></option>
                    <option>Restaurant</option>
                    <option>Bar</option>
                    <option>Arcade</option>
                    <option>Pizzeria    </option>
                    <option>Other</option>
                </select>

                <br></br>

                <label>Address</label>
                <input type="text" id="address"/>

                <br></br>

                <label>City</label>
                <input type="text" id="city"/>

                <State></State>

                <label>Zip Code</label>
                <input type="text" id="zip"/>

                <br></br>

                <label>Payment Method</label>
                <select id="payment">
                    <option></option>
                    <option>Quarters</option>
                    <option>Tokens</option>
                    <option>Card</option>
                </select>

                <input type="submit" id="submit"></input>
            </form>
        </div>
    )
}

export default Add;