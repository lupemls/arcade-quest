import React from 'react'
import { NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
      return (
        <div className="nav-one">
            <div>
              <div>
                <nav className="navbar navbar-expand-md bg-black navbar-dark">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/" >Arcade Quest</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="nav navbar-nav">
                        
                          <NavLink className="nav-link" exact to="/" >Index</NavLink>
                          <NavLink className="nav-link" exact to="/" >Add</NavLink>
                          <NavLink className="nav-link" exact to="/" >Update</NavLink>

                        
                      </ul>
                      <NavLink className="nav-link4" exact to="/" >Sign Up / Log In </NavLink>
  
                      
                    </div>
                    
                    
                    
                    <input type="text" className="input" placeholder="Search..." />    

                    <form inline>
              <form type="text" placeholder="Search" className="mr-sm-2" />
        <button class="buttons" variant="outline-light" type="submit"> SEARCH </button>
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