import React from "react";
import {ReactComponent as Reactlogo} from "../images/LogoAQ1.svg";

function Header(){
      return(
            <div className="header">
                    <div id="logo">
                          
                          <Reactlogo />
                          
                    </div>
           </div>
      )
}

export default Header;