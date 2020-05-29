// import Header from "../components/Header"
import React from "react";
import Logo from '../images/LogoAQ1.svg'
import axios from "axios";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        if(!username || !password){
            alert("Missing Username or Password");
            return;
        }

        this.login(username, password);
    }
    
    login(username, password) {
        axios
            .post("/login", {
                username:username, 
                password:password
            }).then(() => {
                this.props.history.push("/Main")
            }).catch(err => {
                alert("Invalid Username or Password");
                throw err;
            })            
    }

    render() {
        return(
            <div class="login-box">
                <img class="avatar" src={Logo} alt="Arcade-quest"></img>
                <h1>Login Here</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Enter Username" id="username"/> 

                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter Password" id="password"/>
                    <input type="submit" value="Log In"/>

                    <a href="/SignUp">Don't have an account?</a>

                </form>
            </div>
            
        )
    

//             <div className="wrapper">
//                 <Header/>

//                 <div>
//                     <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
//                         <label>Username</label>
//                         <input type="text" id="username"/>

//                         <br></br>

//                         <label>Password</label>
//                         <input type="password" id="password"/>

//                         <br></br>

//                         <input value="Login" type="submit" id="submit"/>
//                     </form>
//                 </div>
//             </div>
//         )
    }
}

export default withRouter(Login);