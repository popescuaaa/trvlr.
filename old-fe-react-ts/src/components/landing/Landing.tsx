import React from "react";
import "../../styles/Lading.css";
import { newsProcessor, Article } from "./services/newsService";
import TopMenu from "../menu/TopMenu";
import ArtcileComponent from "../article/Article";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export enum Visibility {
  Visibile,
  Invisible
}

export type LandingState = {
  sideMenuVisibility: Visibility;
  content: Article[];
};

class Lading extends React.Component<{}, LandingState> {
  state: LandingState = {
    sideMenuVisibility: Visibility.Visibile,
    content: []
  };

  updateDimensions = () => {
    if (window.innerWidth < 600 || window.innerHeight < 500) {
      this.setState({ sideMenuVisibility: Visibility.Invisible });
    } else {
      this.setState({ sideMenuVisibility: Visibility.Visibile });
    }
  };

  processData = async () => {
    let data: Article[] = await newsProcessor();
    this.setState({ content: data });
  };

  componentDidMount() {
    this.updateDimensions();
    this.processData();
    window.addEventListener("resize", this.updateDimensions);
  }

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
    );
  };

  menuEntries = () => {
    return (
      <Router>
        <div className="w3-bar-block">
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            <Link to="/home">Home</Link>
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
            <Link to="/user">User</Link> <i className="fas fa-male"></i>
          </button>
          <button
            onClick={() => console.log("hello")}
            className="w3-bar-item w3-button w3-hover-white"
          >
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </Router>
    );
  };

  sideMenu = () => {
    return (
      <nav
        className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
        id="main-sidebar"
      >
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
        {this.menuEntries()}
      </nav>
    );
  };

  renderMenu = () => {
    if (this.state.sideMenuVisibility === Visibility.Visibile) {
      return this.sideMenu();
    } else {
      return <TopMenu />;
    }
  };

  generateArticleFormat = (article: Article) => {
    return <ArtcileComponent artcile={article} />;
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
        <div className="w3-container">
          <p className="w3-large w3-text-red">Latest news on Travel topic:</p>
          <hr />
          {this.state.content.map(article =>
            this.generateArticleFormat(article)
          )}
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
