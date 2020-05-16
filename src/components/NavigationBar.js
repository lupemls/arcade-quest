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
                    <NavLink className="navbar-brand" exact to="/" >Arcade Quest</NavLink>
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