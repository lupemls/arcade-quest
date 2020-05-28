// import Header from "../components/Header"
import React from "react";
import Logo from '../images/LogoAQ1.svg'
import axios from "axios";
import {withRouter} from "react-router-dom";


class SignUp extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        
        if(!username || !password){
            return;
        }
        this.signUp(username, password);

    }
    
    signUp(username, password){
        console.log("potato")
       
        axios
            .post("/api/signup", {username, password})
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                })
        this.props.history.push("/Main")

    }

    render() {
        return(
            <div class="login-box">
                <img class="avatar" src={Logo} alt="Arcade-quest"></img>
                <h1>Sign Up Here</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Enter Username" id="username"/> 

                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter Password" id="password"/>
                    <input type="submit" value="Sign Up"/>

                    <a href="/Login">Already have an account?</a>

                </form>
            </div>
            
        )

        // return(
        //         <div>
        //             <form className="signUpForm" onSubmit={this.handleSubmit.bind(this)}>
        //                 <label>Username</label>
        //                 <input type="text" id="username" name="username"/>

        //                 <br></br>

        //                 <label>Password</label>
        //                 <input type="password" id="password" name="password"/>

        //                 <br></br>

        //                 <input value="Sign Up" type="submit" id="submit"/>
        //             </form>
        //         </div>
        // )
    }
}

export default withRouter(SignUp);