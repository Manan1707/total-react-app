import React, { useState } from 'react';
import Footer from './Footer';

function Main() {
    const [pwd, setPwd] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState("false");

    return(
        <div className="signUp-section">
            <h1 className="main-heading">Sign Up to TotalCtrl Restaurant</h1>
            <div className="div-center">
                <div className="content">
                    <form>
                        <div className="form-group signup-group">
                            <label htmlFor="Email">E-MAIL</label>
                            <input type="text" className="form-control eMail" placeholder="example@example.com" />
                        </div><br />
                        <div className="form-group signup-group">
                            <label htmlFor="Password">PASSWORD</label>
                            <input
                                name="pwd"
                                type={isPasswordShown ? "password" : "text"} 
                                value={pwd}
                                onChange={pass => setPwd(pass.target.value)}
                                className="form-control eMail" 
                                placeholder="8 Characters"
                            />
                            <i 
                                class={isPasswordShown ? "far fa-eye" : "far fa-eye-slash"} 
                                onClick={() => setIsPasswordShown(prevState => !prevState)} 
                            />
                        </div>
                        <div className="button signup-button">
                            <button type="button" className="btn btn-success">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="paragraphContent">
                <p className="para">By signing up, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
            </div>
            <Footer />
        </div>
    );
}

export default Main;