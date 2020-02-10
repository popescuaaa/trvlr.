/**
 *  This is the main entry of the application
 *  Must be splited into multiple components and 
 *  try to remove as much as posible the logic.
 *
 */
import React from "react";
import "../../styles/Lading.css";
import { newsProcessor, Article} from './services/newsService';
import SideMenu from '../menu/SideMenu';
import TopMenu from '../menu/TopMenu';

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
    this.setState({content: data});
  }

  /**
   * -> Add an event for resposive menu
   */
  componentDidMount() {
    this.updateDimensions();
    this.processData();
    window.addEventListener("resize", this.updateDimensions);
  }

  renderMenu = () => {
    if (this.state.sideMenuVisibility === Visibility.Visibile) {
      return <SideMenu/>
    } else {
      return <TopMenu/>;
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
