import React from 'react';
import Signup from './SignUp/Signup';
import Signin from './SignIn/Signin';
import Inventory from './Inventories/Inventory';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Inventories from './Pages/Inventories';
import ManageUser from './setting-menu-pages/ManageUser';

function App() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <Router>
                        <Inventory />
                        <Switch> 
                            <Route exact path="/inventory" component={Inventories} />
                            <Route path="/manageuser" component={ManageUser} />
                        </Switch>
                    </Router>
                </Switch>
            </Router>
        </div>
    );
}

export default App;