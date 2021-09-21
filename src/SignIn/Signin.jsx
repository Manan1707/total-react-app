import React, { useState } from 'react';
import SignInFooter from './SignInFooter';
import Form from './Form';

function Signin() {

    

    return (
        <div className="container-fluid">
            <nav className="navbar navber-light">
                <div className="container">
                    <a href="#">
                        <img src="./Image/brandmark.svg" alt="Logo" width="30" height="30" />
                    </a>
                </div>
            </nav>
            <div className="main-body">
                <div className="login-page">
                    <h1>
                        Welcome back to TotalCtrl Restaurant
                    </h1>
                </div><br />
                <div className="login-center">
                    <div className="login-content">
                        <Form />
                    </div>
                </div>
            </div>
            <SignInFooter />
        </div>
    );
}

export default Signin;