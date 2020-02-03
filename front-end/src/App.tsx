import React from 'react';
import Card from './components/card/Card';
import Landing from './components/landing/Landing';
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

  state:AppState = {
    searchString: 'Roma'
  }

  handleSearchEvent = (event: any) => {
      this.setState({searchString: event.target.value});
      console.log(event.target.value);
  }

  searchBar = () => {
    return (
      <div className="search-zone">
        <input className="search-bar" type="text" onChange={this.handleSearchEvent} />
      </div>
    )
  }

  render() {
      return (
        <div className="app">
          <div className="landing-page">
            <Landing/>
          </div>
          {this.searchBar()}
          <div className="content">
            {
              cards
                .filter(item => item.destination === this.state.searchString)
                .map(item => {
                  return <Card destination={item.destination} cost={item.cost}></Card>
              })
            }
          </div>
        </div>
      );
    }
}
export default App;
