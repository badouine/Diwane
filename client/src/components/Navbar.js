import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UidContext} from './AppContext';
import { useSelector } from 'react-redux';
import Logout from './Log/Logout';
const Navbar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    return (
        <nav>
            <div className="nav-container"> 
                <div className="logo">
                    <NavLink exact="true" to="/">
                        <img src="./img/house (1).png" alt="icon"/>
                        <h3>Diwane</h3>
                    </NavLink>
                </div>
                {uid ? (
                <ul>
                    <li></li>
                    <li className="welcome">
                        <NavLink exact="true" to="/profil">
                            <h5>Bienvenue {userData.tel}</h5>
                        </NavLink>
                    </li>
                        <Logout/>
                </ul>
                ) : (
                    <ul>
                        <li></li> 
                        <li>
                            <NavLink exact="true" to="/profil">
                                <img src="./img/icons/login.svg" alt="login"/>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
        
    )
}


export default Navbar;