import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form() {

    const [pwd, setPwd] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState("false");

    const history = useHistory();
    const handleClick = () => history.push("/");

    const history1 = useHistory();
    const signInClick = () => history1.push("/inventory");

    return (
        <div>
            <form>
                <div className="form-group login-group">
                    <label htmlFor="Email">E-MAIL</label>
                    <input type="email" className="form-control password" placeholder="Email" />
                </div>
                <div className="form-group login-group signin-password-div">
                    <label htmlFor="Password">PASSWORD</label>
                    <input 
                        type={isPasswordShown ? "password" : "text"} 
                        name="pwd"
                        value={pwd}
                        onChange={pass => setPwd(pass.target.value)}
                        className="form-control password"
                        placeholder="Password"
                    />
                    <i
                        className={isPasswordShown ? "far fa-eye-slash" : "far fa-eye"}
                        onClick={() => setIsPasswordShown(preState => !preState)}
                    />
                </div>
                <a href="#" class="forgotPassword">Forgotten Password?</a><br></br>
                <button type="button" class="btn btn-success sign-in" onClick={signInClick}>Sign In</button>
                <button type="button" class="btn btn-outline-light sign-up" onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    );
}

export default Form;