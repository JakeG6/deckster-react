import React, { Component } from 'react';
import axios from 'axios';

class CardSearch extends Component {
  
    constructor() {
        super();
        this.state = {
            searchValue: '',
            searchType: 'cardName',
            returnedCards: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.getCards = this.getCards.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
      }

    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.searchValue);
        event.preventDefault();
        this.getCards(this.state.searchValue);
    }

    getCards = (searchValue) => {
        if (this.state.searchType === 'cardName') {

            axios.get('https://api.magicthegathering.io/v1/cards?name=' + searchValue)
            .then(function (response) {
                console.log('calling api');
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
                alert('an error');
            });
            
        }
        else {
            axios.get('https://api.magicthegathering.io/v1/cards/' + searchValue)
            .then(function (response) {
                console.log(response);
                return response;
                
            })
            .catch(function (error) {
                console.log(error);
                alert('an error');
            });
        }
    }
    
    render() {
        return (
            <div className="Component">
                <div className="main-view container">
                        <h1>Card Search</h1>   
                        <div id="card-search">
                            <form className="search-form" onSubmit={this.handleSubmit}>
                                <p>Retrieve card information via name or multiverse ID</p>
                                <input type="text" value={this.state.searchValue} onChange={this.handleChange}></input>                                           
                                <select>
                                    <option value="cardName">Search By Name</option>
                                    <option value="cardId">Search by Multiverse ID</option>                                   
                                </select>
                                <input type="submit" value="Search"></input>
                            </form>
                        
                                <div className="container result-container">
                                            <div className="row display-row">
                                                <div className="col-sm-6 card-display">
                                                    {/* <img src={{displayedCard.imageUrl}} alt=""> */}
                                                </div>
                                                <div className="col-sm-6 card-stat-display">
                                                 
                                                </div>                
                                            </div>
                                </div>		    
                        </div>
                </div>
            </div>
        );
    }
}

export default CardSearch;