import React from 'react';
import '../../styles/Lading.css';

interface LandingState {
    screenWidth: number,
    screenHeight: number
}

class Lading extends React.Component<LandingState, {}>{

    state:LandingState = {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    }
    
    /**
     * Side menu for landing page 
     */
    sideMenu = () => {
        return (
            <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" id="main-sidebar"><br/>
            <button onClick={() => console.log('hello')} className="w3-button w3-hide-large w3-display-topleft" id="close-button">Close Menu</button>
            <div className="w3-container">
                <h3 className="w3-padding-64"><b><i className="fas fa-plane-departure"></i>GO<br/>Travel</b></h3>
            </div>
            <div className="w3-bar-block">
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">Home</button> 
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">About us</button> 
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">Services</button> 
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">Travel Blog</button> 
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">Login</button> 
                <button  onClick={() => console.log('hello')} className="w3-bar-item w3-button w3-hover-white">Contact</button>
            </div>
            </nav>
        )
    }

    /**
     * Responsive small screens menu icon
     */
    topMenuSmallScreens = () => {
        <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
            <button className="w3-button w3-red w3-margin-right" onClick={() => console.log("small menu")}>☰</button>
            <span>Company Name</span>
        </header>
    }


    render() {
        return (
            <div className="main">
                {this.sideMenu()}
            </div>
        )
    }
}
    
export default Lading;