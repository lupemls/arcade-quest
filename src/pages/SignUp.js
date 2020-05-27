import Header from "../components/Header"
import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class SignUp extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        // console.log("nanners");
        let username = e.target.username.value;
        let password = e.target.password.value;
        
        // console.log(e.target.username.value);
        // console.log(e.target.password.value);

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
            <div className="wrapper">
                <Header/>

                <div>
                    <form className="signUpForm" onSubmit={this.handleSubmit.bind(this)}>
                        <label>Username</label>
                        <input type="text" id="username" name="username"/>

                        <br></br>

                        <label>Password</label>
                        <input type="password" id="password" name="password"/>

                        <br></br>

                        <input value="Sign Up" type="submit" id="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);