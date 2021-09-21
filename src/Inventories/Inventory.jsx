import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import Orders from '../Pages/Orders';
import Analytics from '../Pages/Analytics';
import Reports from '../Pages/Reports';
import SettingPopup from './SettingPopup';

function Inventory() {

    const [hidden, setHidden] = useState(false);

    return (
        <>
            <div className="main-inventory">
                <div className="sub-inventory">
                    <div className="navbar inventory-bar">
                        <img src="./Image/Main-Logo.svg" alt="Logo" width="110" height="40" className="logo" />
                    </div>
                    <nav className="nav-menu">
                        <div className="sidebar-item">
                            <ul className="nav-menu-items">
                                <li className="nav-text">
                                    <NavLink to="/inventory" activeClassName="active" className="nav-list-link">
                                        <FiIcons.FiBox size={20} />
                                        <span>Inventories</span>
                                    </NavLink>
                                </li>
                                <li className="nav-text">
                                    <NavLink to="/orders" activeClassName="active" className="nav-list-link">
                                        <FiIcons.FiTruck size={20} />
                                        <span>Orders</span>
                                    </NavLink>
                                </li>
                                <li className="nav-text">
                                    <NavLink to="/analytics" activeClassName="active" className="nav-list-link">
                                        <BiIcons.BiBarChartAlt2 size={20} />
                                        <span>Analytics</span>
                                    </NavLink>
                                </li>
                                <li className="nav-text">
                                    <NavLink to="/reports" activeClassName="active" className="nav-list-link">
                                        <FiIcons.FiInbox size={20} />
                                        <span>Reports</span>
                                        <img src="./Image/image-6.png" alt="Green Label" style={{paddingLeft: "10px", color: "black"}} />
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <div style={{ borderBottom: "1px solid #E6E6ED", paddingTop: "19px" }} className="line-image"></div> */}
                            <img src="./Image/Line.png" alt="Line" className="line-image" />
                            <img src="./Image/Line.png" alt="Line" className="line-image1" />
                            <ul className="nav-menu-items setting-menu" >
                                <li className="nav-text">
                                    <OutsideClickHandler 
                                        onOutsideClick={() => {
                                            setHidden(false);
                                            // history.push("/inventory");
                                        }}
                                    >
                                        <NavLink 
                                            to="/setting" 
                                            activeClassName="active" 
                                            className="nav-list-link" 
                                            onClick={() => setHidden(true)}
                                        >
                                            <FiIcons.FiSettings size={20} />
                                            <span>Settings</span>
                                        </NavLink>
                                        {hidden && (
                                            <SettingPopup />
                                        )}
                                    </OutsideClickHandler>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/analytics" component={Analytics} />
                <Route path="/reports" component={Reports} />
                <Route path="/setting" component={SettingPopup}  />
            </Switch>
        </>
    );
}

export default Inventory;