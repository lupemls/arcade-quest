import Header from "../components/Header"
import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        if(!username || !password){
            return;
        }

        this.login(username, password);
    }
    
    login(username, password) {
        axios
            .post("/api/login", {
                username, password
            })
            this.props.history.push("/Main")
            
    }

    render() {
        return(
            <div className="wrapper">
                <Header/>

                <div>
                    <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                        <label>Username</label>
                        <input type="text" id="username"/>

                        <br></br>

                        <label>Password</label>
                        <input type="password" id="password"/>

                        <br></br>

                        <input value="Login" type="submit" id="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);