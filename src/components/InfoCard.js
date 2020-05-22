import React from 'react'

function InfoCard(props){
    return(
          <div className="d-flex justify-content-center">
          <div id="card-one">
                <div className="card">
                      <img src={props.src} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur. </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Donkey Kong.</li>
                        <li className="list-group-item">Christal Castle.</li>
                        <li className="list-group-item">Galaga.</li>
                        <li className="list-group-item">Donkey Kong.</li>
                      </ul>
                <div className="card-body">
                        {/* <a href="#" class="card-link"></a>
                        <a href="#" class="card-link"></a>
                        <a href="#" class="card-link"></a> */}
                      </div>
                 </div>
          </div>
    </div>
    );
}

export default InfoCard