import React from 'react';
import Card from './components/card/Card';
import Landing from './components/landing/Landing';
import Menu from './components/menu/Menu';
import './styles/App.css';

/**
 *  Test array for showing and testing the display properties
 * 
 */
const cards = [
  {
      destination: 'Madrid',
      cost: 300
  },
  {
      destination: 'Lisabona',
      cost: 200
  },
  {
      destination: 'London',
      cost: 400
  },
  {
      destination: 'Roma',
      cost: 125
  },
  {
    destination: 'Bucharest',
    cost: 20
  },
  {
    destination: 'Istambul',
    cost: 150
  }
];

type AppState = {
  searchString: string
}

class App extends React.Component {

  componentDidMount() {
   
  }
  
  state:AppState = {
    searchString: ''
  }

  handleSearchEvent = (event: any) => {
      this.setState({searchString: event.target.value});
  }

  searchBar = () => {
    return (
      <div className="search-zone">
      <div className="input-group mb-2  ">
        <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearchEvent}/>
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">Go</button>
        </div>
      </div>
      </div>
    )
  }

  render() {
      return (
        <div className="app">
          <div className="landing-page">
            <Landing/>
          </div>
        </div>
      );
    }
}
export default App;
