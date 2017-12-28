import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
      	<div className="Component">
            <div className="main-view container">
                <h1>Magic Made Easy</h1>
                <p>Deckster allows you to assemble and save your very own Magic: The Gathering
                    decks from 25 years of card history. Sign up today and see what Deckster can do for you.</p>
                
                <h1>Sign Up</h1>
                    
                <div className="container-fluid text-center signup-container"  >
                    <a href="/auth/facebook" className="btn btn-primary btn-lg facebook-signin">Continue with facebook</a> 
                    <a ng-click="loginWithFacebook()">signup or login with facebook</a>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;

