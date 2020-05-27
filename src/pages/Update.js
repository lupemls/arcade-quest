//Used to update arcade machines for a location

import React from "react";
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header';


function Update(props) {
    return (
     
        <div>
        <NavigationBar></NavigationBar>
        
      <div className="wrapper">
        <Header></Header>
    
        <div className="form"> 
            <form className="newMachine">

                <label>Name of Game</label>
                <input type="text" id="game"/>

                <br></br>

                <label>Type of Game</label>
                <select id="gameType">
                    <option></option>
                    <option>Arcade</option>
                    <option>Pinball</option>                    
                </select>
                
                <br></br>

                <input type="submit" id="submit"></input>
            </form>
        </div>
  </div>
</div>
    )
}

export default Update;