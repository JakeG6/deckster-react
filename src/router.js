import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Home'
import CardSearch from './CardSearch';
import DeckBuilder from './DeckBuilder';
import DeckCollection from './DeckCollection';

export default (
  <Switch>
    <Route component={ Home }      path="/" exact />
    <Route component={ CardSearch } path="/cardSearch"/>
    <Route component={ DeckBuilder }    path="/deckBuilder"/>
    <Route component={ DeckCollection }   path="/deckCollection"/>
  </Switch>
)