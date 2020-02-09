/**
 *  This is the main entry of the application
 *
 */
import React from "react";
import "../../styles/Lading.css";
import { Router, Route } from "react-router";

export enum Visibility {
  Visibile,
  Invisible
}

export type Article = {
  author: string;
  title: string;
  description: string;
  content: string;
}

export type LandingState = {
  sideMenuVisibility: Visibility;
  content: Article[];
};




class Lading extends React.Component<LandingState, {}> {
  state: LandingState = {
    sideMenuVisibility: Visibility.Visibile,
    content: []
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

  getArticles = async () => {
    let date = new Date().toISOString().slice(0,10);
    let topic = 'travel';
    const API_KEY = 'aa2197669263422d9d2b829c3fbc797f';
    let url = `https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;
    let req = new Request(url);
    let data = await fetch(req)
        .then((response) => {
           return response;
        });
    return data;
  }

  processData = async () => {
    let data = await this.getArticles();
    let articlesArray = (await data.json()).articles;
    let articles: Article[] = [];

    for (let i = 0; i < articlesArray.length; i++) {
      let article: Article;
      let title = articlesArray[i].title;
      let author = articlesArray[i].author;
      let description = articlesArray[i].description;
      let content = articlesArray[i].content;
      article = {
        title: title,
        description: description,
        author: author,
        content: content
      }

      articles.push(article);
    }

    this.setState({content: articles});
  }

  /**
   * -> Add an event for resposive menu
   */
  componentDidMount() {
    this.updateDimensions();
    this.processData();
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

  generateArticleFormat = (article: Article) => {
    return (
      <div className="w3-container w3-white w3-margin w3-padding-large">
        <div className="w3-center">
          <h3>{article.title}</h3>
        </div>

        <div className="w3-justify">
          <p>
           {article.description}
          </p>
          <p>
            {article.content}
          </p>
          <p className="w3-clear"></p>
          <div className="w3-row w3-margin-bottom" id="demo1">
            <div className="w3-col l2 m3"></div>
            <div className="w3-col l10 m9">
              <h4>
                {article.author}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
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
          <p className="w3-large w3-text-red">
            Latest news on Travel topic:
          </p>
          <hr/>
          {this.state.content.map(article => this.generateArticleFormat(article))}
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
