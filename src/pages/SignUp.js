import Header from "../components/Header"
import React from "react";

function SignUp() {

    return(
        <div className="wrapper">
            <Header/>

            <div>
                <form className="signUpForm">
                    <label>Username</label>
                    <input type="text" id="username" name="username"/>

                    <br></br>

                    <label>Password</label>
                    <input type="text" id="password" name="password"/>

                    <br></br>

                    <input value="Sign Up" type="submit" id="submit"/>
                </form>
            </div>
        </div>
    )
}

export default SignUp;