import React from 'react';

class TopMenu extends React.Component<{}, {}> {
   render() {
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
   }
}

export default TopMenu;