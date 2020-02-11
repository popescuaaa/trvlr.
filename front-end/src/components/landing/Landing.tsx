import React from "react";
import "../../styles/Lading.css";
import { newsProcessor, Article} from './services/newsService';
import SideMenu from '../menu/SideMenu';
import TopMenu from '../menu/TopMenu';
import ArtcileComponent from '../article/Article';

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
    return <ArtcileComponent artcile={article}/>
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
