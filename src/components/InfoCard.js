import React from "react";
import { Link } from 'react-router-dom'

function InfoCard(props) {
  return (
    <div class="d-flex float-right">
      <div id="main-card">
        <div class="card">
          <img src={props.src} class="card-img-top" alt="..." />
          <div class="card-body">
            <a href={props.title.url}>
              <h2 class="card-title">{props.title.name}</h2>
            </a>
            <Link to={{pathname: "/Update", idProps: {
              name: "this is working"
            }}}>Update Games!</Link>
          </div>
         
            <ul class="list-group list-group-flush">
              {props.game.map((game)=>(
                <li className="list-group-item">{game.game}</li>
              ))}
              {/* <li class="list-group-item">Donkey Kong.</li>
              <li class="list-group-item">Christal Castle.</li>
              <li class="list-group-item">Galaga.</li>
              <li class="list-group-item">Donkey Kong.</li> */}
            </ul>
         
          <div class="card-body">
            {/* <a href="#" class="card-link"></a>
                        <a href="#" class="card-link"></a>
                        <a href="#" class="card-link"></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
