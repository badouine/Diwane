import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UidContext} from './AppContext';

const Navbar = () => {
    const uid = useContext(UidContext);
    return (
        <nav>
            <div className="nav-container"> 
                <div className="logo">
                    <NavLink exact to="/">
                        <img src="./img/house (1).png" alt="icon"/>
                        <h3>Diwane</h3>
                    </NavLink>
                </div>
                {uid ? (
                <ul>
                    <li></li>
                    <li className="welcome">
                        <NavLink exact to="/profil">
                            <h5>Bienvenue 'Valeur dynamique'</h5>
                        </NavLink>
                    </li>
                    logo logout 
                </ul>
                ) : (
                    <ul>
                        <li></li> 
                        <li>
                            <NavLink exact to="/profil">
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