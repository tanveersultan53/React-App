import React from "react";
import {Component} from "react"
class Header extends Component{
    render(){
        
        return (
            <div>
                {/* <!-- Navigation--> */}
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#!">Start React Js</a>
                <a class="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 class="mb-5">Generate more leads with a professional landing page!</h1>
                            {/* <!-- Signup form--> */}
                            <form>
                                <div class="input-group input-group-lg">
                                    <input class="form-control" type="text" placeholder="Enter your email..." aria-label="Enter your email..." aria-describedby="button-submit" />
                                    <button class="btn btn-primary" id="button-submit" type="button">Sign up!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            </div>
        )
    }
}

export default Header;