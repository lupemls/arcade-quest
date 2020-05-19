import React from 'react'
import { NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
      return (
        <div>
            <div>
              <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/" ><img height="150" alt="Arcade Quest" src="https://66.media.tumblr.com/fa8f8bbba41ee8c8e2d329605e691587/5bd8bb3199332553-26/s500x750/9576e48fc8247402a8682352f32b6c34087d6b6b.png"></img></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="nav navbar-nav">
                        <li className="nav-item">
                          <NavLink className="nav-link" exact to="/" >Index</NavLink>
                        </li>

                        
  </ul>


  
  
                      
                    </div>
                    
                    
</div>

<input type="text" class="form-control" name="x" placeholder="Search term..."></input>

<div class="input-group">
                    <div class="input-group-btn search-panel">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    	<span id="search_concept">Filter by</span> <span class="caret"></span>
                    </button>

                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#contains">Certerter</a></li>
                      <li><a href="#its_equal">Ierterter</a></li>
                      <li><a href="#greather_than">Gryrtytrytr</a></li>
                      <li><a href="#less_than">Ldfhdfhfdhdfhdf</a></li>
                      <li class="divider"></li>
                      <li><a href="#all">Anything</a></li>
                    </ul>

                </div>
                
  
                  </div>
  
                  
              
                </nav>
  
      
  
  
                <div className="content">
                {/* <Switch>
                  <Route path="/" component={Home} exact />  
  
                </Switch> */}
              </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default NavigationBar;