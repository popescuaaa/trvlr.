/**
 *  This is the main entry of the application
 *
 */
import React from "react";
import "../../styles/Lading.css";
import { Router, Route } from 'react-router';


export enum Visibility {
  Visibile,
  Invisible
}

export type LandingState = {
  sideMenuVisibility: Visibility;
};


class Lading extends React.Component<LandingState, {}> {
  state: LandingState = {
    sideMenuVisibility: Visibility.Visibile
  };

  /**
   * Performs an update to the state screenSize variable based
   * on window dimensions
   */
  updateDimensions = () => {
    if (window.innerWidth < 600 || window.innerHeight < 500) {
      this.setState({ sideMenuVisibility: Visibility.Invisible });
    } else {
      this.setState({ sideMenuVisibility: Visibility.Visibile });
    }
  };

  /**
   * -> Add an event for resposive menu
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Side menu for landing page
   */
  sideMenu = () => {
    return (
      <nav
        className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
        id="main-sidebar"
      >
        <br />
        <button
          onClick={() => console.log("hello")}
          className="w3-button w3-hide-large w3-display-topleft"
          id="close-button"
        >
          Close Menu
        </button>
        <div className="w3-container">
          <h3 className="w3-padding-64">
            <b>
              <i className="fas fa-plane-departure"></i>GO
              <br />
              Travel
            </b>
          </h3>
        </div>
        <div className="w3-bar-block">
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            Home
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            About us
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            Services
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            Travel Blog
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            Login <i className="fas fa-male"></i>
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            Contact
          </button>
        </div>
      </nav>
    );
  };

  /**
   * Responsive small screens menu icon
   */
  topMenuSmallScreens = () => {
    return (
      <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
        <button
          className="w3-button w3-hover-white w3-margin-right"
          onClick={() => console.log("hello")}
        >
          Login <i className="fas fa-male"></i>
        </button>
        <span>
          <b>
            <i className="fas fa-plane-departure"></i>GO Travel
          </b>
        </span>
      </header>
    );
  };

  renderMenu = () => {
    if (this.state.sideMenuVisibility === Visibility.Visibile) {
      return this.sideMenu();
    } else {
      return this.topMenuSmallScreens();
    }
  };

  renderPageContent = () => {
    return (
      <div className="w3-main">
        <div className="w3-container" id="motto">
          <h1 className="w3-jumbo">
            <b>
              <i className="fas fa-plane-departure"></i>GO Travel
            </b>
          </h1>
          <h1 className="w3-xxxlarge w3-text-red">
            <b>The new way. Your way.</b>
          </h1>
          <hr />     
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="main">
        {this.renderMenu()}
        {this.renderPageContent()}
      </div>
    );
  }
}

export default Lading;
