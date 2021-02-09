import React from "react";
import Landing from "./components/landing/Landing";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="landing-page">
          <Landing />
        </div>
      </div>
    );
  }
}
export default App;
