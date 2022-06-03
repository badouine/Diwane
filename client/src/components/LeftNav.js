import React from 'react';
import {NavLink} from 'react-router-dom';

const LeftNav = () => {
  return (
    <div ClassName="left-nav-container">
        <div className="icons">
            <div className="icon-bis">
                <NavLink exact="true" to="/" activeClassName="active-left">
                    <img src="./img/icons/home.svg" alt="home"/>
                </NavLink>
                <br />
                <NavLink exact="true" to="/trending" activeClassName="active-left">
                    <img src="./img/icons/rocket.svg" alt="home"/>
                </NavLink>
                <br/>
                <NavLink exact="true" to="/profil" activeClassName="active-left">
                    <img src="./img/icons/user.svg" alt="home"/>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default LeftNav