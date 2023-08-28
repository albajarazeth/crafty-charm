import React, {useState , useEffect}from 'react';
import { NavLink} from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';

import './Navigation.scss';

const tabs = [{
  route: "/",
  name: "Shop By",
},
{
  route: "/",
  name: "Sell",
},
{
  route: "/",
  name: "About",
},{
  route: "/",
  name: "Contact",
}]
const loggedOutTabs = [{
  route: "/",
  name: "Sign In",
},
{
  route: "/Register",
  name: "Register",
},
{
  route: "/",
  name: "Cart",
  icon: BsFillCartFill
}]

function Navigation(props) {
 return(
  <nav className="nav-container" id="nav-container">
    <div className="top-container">
      <a href="/" className="home-icon">
        <div className="site-title">{props.name}</div>
      </a>
      <div className="search">
        <input placeholder="What are you looking for?" type="text"></input>
        <button type="submit" className="searchButton">
          <AiOutlineSearch className="ai-search"/>
        </button>
      </div>
      <div className="link-container">
      {
      loggedOutTabs.map((tab, index) =>(
          <div className="navigation" key={`tab-${index}`}>
            <NavLink className="nav-routes" exact="true" activeclassname="selected" to={tab.route}>
              {tab.icon ? <tab.icon className="nav-icon"/> : tab.name}
            </NavLink>
          </div>
        ))
        }
    </div>
    </div>
    <div className="link-container">
      {
      tabs.map((tab, index) =>(
          <div className="navigation logged-in" key={`tab-${index}`}>
            <NavLink className="nav-routes" exact="true" activeclassname="selected" to={tab.route}>
              {tab.name}
            </NavLink>
          </div>
        ))
        }
    </div>
  </nav>
);

}
export default Navigation;
