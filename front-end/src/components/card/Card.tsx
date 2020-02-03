import React from 'react';
import '../../styles/Card.css';
type CardProps = {
    destination: string,
    cost: number
}

class Card extends React.Component<CardProps>{
    render() {
        return (
            <div className="card">
            <img className="card-img-top" src='../../../assets/greece.jpg' alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.destination}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">From {this.props.cost} $</a>
            </div>
          </div>
        )
    }
}

export default Card;