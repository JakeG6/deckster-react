import React, { Component } from 'react';
import router from './router';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        loggedIn: false
    };

}

  render() {
    return (
      <div className="App">      
          <div className="ourNav">            
            <div className="logo">Deckster</div>
            <div>
              <i className="fa fa-bars fa-3x" aria-hidden="true"></i> 
            </div>
            <ul id="links">
              <li><Link className="link" to="/"><p>Home</p></Link></li>
              <li><Link className="link" to="/cardSearch"><p>Card Search</p></Link></li>
              <li><Link className="link" to="/deckBuilder"><p>Deck Builder</p></Link></li>
              <li><Link className="link" to="/deckCollection"><p>Deck Collection</p></Link></li>                                                                     
            </ul>
          </div>

          { router }
        
      </div>
    );
  }
}

export default App;
