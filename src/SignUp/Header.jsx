import React from 'react';
import Main from './Main';

import {
    Link
} from "react-router-dom"

function Header() {
    return (
        <div className="container-fluid">
            <div className="main-section">
                <img src="./Image/brandmark.svg" alt="" width="30" height="30" />
                <Link to="/signin">Sign In</Link>
            </div>
            <div>
                <Main />
            </div>
        </div>
    );
}

export default Header;