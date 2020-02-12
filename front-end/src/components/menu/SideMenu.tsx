import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lading from '../landing/Landing';
import AboutUs from '../about-us/AboutUs';
import Offert from '../offert/Offert';

class SideMenu extends React.Component<{}, {}> {
   render() {
    return (
        <nav
          className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
          id="main-sidebar"
        >
          {/* App name */}
          <br />
          <div className="w3-container">
            <h3 className="w3-padding-64">
              <b>
                <i className="fas fa-plane-departure"></i>GO
                <br />
                Travel
              </b>
            </h3>
  
            {/* External links: TODO separate them from the menu in external function + align them */}
            <div className="w3-container ">
            <a href="#" className="w3-bar-item w3-button">
                <i className="fas fa-search"></i>
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fab fa-linkedin"></i>
              </a> 
            </div>
          </div>
  
          {/*
            The routing process for all the other entries of the program
          */}
        <Router>
          <div className="w3-bar-block">
          
            <button
              onClick={() => console.log("hello")}
              className="w3-bar-item w3-button w3-hover-white"
            >
             <Link to="/">Home</Link> 
            </button>
            <button
              onClick={() => console.log("hello")}
              className="w3-bar-item w3-button w3-hover-white"
            >
              <Link to="/about-us">About Us</Link>
            </button>
            <button
              onClick={() => console.log("hello")}
              className="w3-bar-item w3-button w3-hover-white"
            >
               <Link to="/services">Services</Link>
            </button>
            <button
              onClick={() => console.log("hello")}
              className="w3-bar-item w3-button w3-hover-white"
            >
              <Link to="/login">Login</Link> <i className="fas fa-male"></i>
            </button>
            <button
              onClick={() => console.log("hello")}
              className="w3-bar-item w3-button w3-hover-white"
            >
              <Link to="/">Contact</Link>
            </button>
            
          </div>
          <Switch>
          <Route exact path="/">
            <Lading />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/services">
            < Offert/>
          </Route>
          <Route path="/login">
            < Lading/>
          </Route>
          <Route path="/contact">
            < Lading/>
          </Route>
        </Switch>
          </Router>
        </nav>
      );
   }
}

export default SideMenu;