import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import { Link  } from "react-router-dom";


function SettingPopup() {
    return (
            <div className="setting-dropdown-menu">
                <div className="setting-dropdown-main">
                    <h4>TotalCtrl Restaurant</h4>
                    <p>TotalCtrl Test</p>
                    <img src={process.env.PUBLIC_URL + "/Image/Line.png"} alt="Line" className="setting-dropdown-line-1" />
                    <ul>
                        <li>
                            <Link>
                                <BsIcons.BsPerson size={20} />
                                <span>Personal Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <BsIcons.BsBag size={20} />
                                <span>Organization Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageuser">
                                <FiIcons.FiUsers size={20} />
                                <span>Manange Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <BiIcons.BiCube size={20} />
                                <span>Manage Inventories</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <AiIcons.AiOutlineApple size={20} />
                                <span>Manage Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <HiIcons.HiOutlinePuzzle size={20} />
                                <span>Manage Integrations</span>
                            </Link>
                        </li>
                    </ul>
                    {/* <div style={{ borderBottom: "1px solid #E6E6ED" }} className="line-image"></div> */}
                    <img src={process.env.PUBLIC_URL + "/Image/Line.png"} alt="Line" className="setting-dropdown-line-2" />
                    <ul>
                        <li>
                            <Link>
                                <RiIcons.RiLogoutBoxRLine size={20} />
                                <span>Log out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default SettingPopup;
