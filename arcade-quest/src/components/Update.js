import React from "react";
import State from "./State";

function Update(props) {
    return (
        <div>
            <form className="newMachine">
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

                {/* <label>State</label>
                <input type="text" id="state"/> */}

                <label>Zip Code</label>
                <input type="text" id="zip"/>

                <br></br>

                <label>Name of Game</label>
                <input type="text" id="game"/>

                <br></br>

                <label>Type of Game</label>
                <select id="gameType">
                    <option></option>
                    <option>Shooting</option>
                    <option>Pinball</option>
                    <option>Fighting</option>
                    <option>Platforming</option>
                    <option>Racing</option>
                    <option>Rhythm</option>
                    <option>Redemption/Ticket</option>
                    <option>Crane Game</option>
                    <option>Other</option>
                </select>
                
                <br></br>

                <input type="submit" id="submit"></input>
            </form>
        </div>
    )
}

export default Update;