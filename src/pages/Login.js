import Header from "../components/Header"
import React from "react";

function Login(props) {
    return(
        <div className="wrapper">
            <Header/>

            <div>
                <form className="loginForm">
                    <label>Username</label>
                    <input type="text" id="username"/>

                    <br></br>

                    <label>Password</label>
                    <input type="text" id="password"/>

                    <br></br>

                    <input value="Login" type="submit" id="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Login;