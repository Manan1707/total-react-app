import React from 'react';
import Header from "./Header";
import Image from "./Image";


function Signup() {
    return (
        <div>
            <div className="topPane splitScreen left">
                <Header />
            </div>
            <div className="bottomPane splitScreen right">
                <div className="centered">
                    <Image />
                </div>
            </div>
        </div>
    );
}

export default Signup;