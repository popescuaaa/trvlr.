import React from 'react';
import { Article } from '../landing/services/newsService';

export type ArticleComponentProps = {
    artcile: Article;
}

class ArticleComponent extends React.Component<ArticleComponentProps, {}> {
   render() {
       return (
        <div className="w3-container w3-white w3-margin w3-padding-large">
        <div className="w3-center">
          <h3>{this.props.artcile.title}</h3>
        </div>
        <div className="w3-justify">
          <p>
           {this.props.artcile.description}
          </p>
          <p>
            {this.props.artcile.content}
          </p>
          <p className="w3-clear"></p>
          <div className="w3-row w3-margin-bottom" id="demo1">
            <div className="w3-col l2 m3"></div>
            <div className="w3-col l10 m9">
              <h4>
                {this.props.artcile.author}
              </h4>
            </div>
          </div>
        </div>
      </div>
       )
   }
}

export default ArticleComponent;