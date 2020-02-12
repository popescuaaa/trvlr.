import React from 'react';
class SideMenu extends React.Component<{}, {}> {


   socialMedia = () => {
     return (
      <div className="w3-container ">
      <a href="/" className="w3-bar-item w3-button">
          <i className="fas fa-search"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-linkedin"></i>
        </a> 
      </div>
     )
   }
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
            {this.socialMedia()}
          </div>
  
          {/*
            The routing process for all the other entries of the program
          */}
       
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
              About Us
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
   }
}

export default SideMenu;