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
        this.getCardById = this.getCardById.bind(this);
        this.getCardByName = this.getCardById.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.getRandomQuote = this.getRandomQuote.bind(this);
        // this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
      }

    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.searchValue);
    }
    

    getCardById = (id) => {
        axios.get('https://api.magicthegathering.io/v1/cards/' + id)
            .then(function (response) {
                console.log(response);
                return response;
                //     response.data.card.imageUrl,
                //     response.data.card.name, 
                //     response.data.card.manaCost,
                //     response.data.card.cmc,
                //     response.data.card.colors,
                //     response.data.card.type,
                //     response.data.card.text,
                //     response.data.card.flavor,
                //     response.data.card.power,
                //     response.data.card.toughness);
            })
            .catch(function (error) {
                console.log(error);
                alert('an error');
            });
    }

    getCardbyName = (name) => {
        axios.get('https://api.magicthegathering.io/v1/cards?name=' + name)
            .then(function (response) {
                console.log(response);
                
            })
            .catch(function (error) {
                console.log(error);
                alert('an error');
            });
    };
  
    render() {
        return (
            <div className="Component">
                    <div class="main-view container">
                        <h1>Card Search</h1>
                        
                        <div id="card-search">
                            <form className="search-form" onSubmit={this.handleSubmit}>
                                <p>Retrieve card information via name or multiverse ID</p>
                                <input type="text" value={this.state.value}></input>                                           
                                <select>
                                    <option value="cardName">Search By Name</option>
                                    <option value="cardId">Search by Multiverse ID</option>                                   
                                </select>
                                <input type="submit" value="Search"></input>
                                </form>
                        
                                <div class="container result-container">
                                            <div class="row display-row">
                                                <div class="col-sm-6 card-display">
                                                    {/* <img src={{displayedCard.imageUrl}} alt=""> */}
                                                </div>
                                                <div class="col-sm-6 card-stat-display">
                                                    {/* <p><strong>Name:</strong> {{displayedCard.name}}</p> 
                                                    <p><strong>Mana Cost:</strong> {{displayedCard.manaCost}}</p>
                                                    <p><strong>Converted Mana Cost:</strong> {{displayedCard.cmc}}</p>
                                                    <p><strong>Colors:</strong> {{displayedCard.colors}}</p>
                                                    <p><strong>Type:</strong> {{displayedCard.type}}</p>
                                                    <p><strong>Text:</strong> {{displayedCard.text}}</p>
                                                    <p><strong>Flavor Text:</strong> <i> {{displayedCard.flavor}}</i></p>
                                                    <p><strong>power:</strong> {{displayedCard.power}}</p>
                                                    <p><strong>Toughness:</strong> {{displayedCard.toughness}}</p> */}
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