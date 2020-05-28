//Used to update arcade machines for a location

import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { useRouteMatch } from "react-router-dom";
import Axios from "axios";

function Update(props) {
  const [data, setData] = useState({});
  let match = useRouteMatch("/Update/:id");

  let business = match.params.id
  function handleChange(e) {
    // console.log(e.target.value)
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data.game);
    Axios.post("/api/updateArcade", { data }).then((response) => {
      console.log(response);
      const arcade = response.data[0].id
        Axios.post("/api/through", {arcade, business}).then(window.location.reload())
      
    });
  }

  // console.log(match.params.id)

  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="wrapper">
        <Header></Header>

        <div className="form">
          <form onSubmit={handleSubmit} className="newMachine">
            <label>Name of Game</label>
            <input onChange={handleChange} type="text" id="game" />

            <br></br>

            <label>Type of Game</label>
            <select onChange={handleChange} id="type">
              <option></option>
              <option>Arcade</option>
              <option>Pinball</option>
            </select>

            <br></br>

            <input onChange={handleChange} type="submit" id="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
