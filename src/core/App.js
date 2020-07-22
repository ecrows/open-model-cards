import React from 'react';
import './App.css';
import Card from '../card/Card';
import HomePage from './HomePage';
//import Header from './Header';
import ScrollToTop from './ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function getFileBaseName(filePath) {
  return filePath.split('/').pop().split('.').shift()
}

function loadCards() {
  const requireContext = require.context('../models', false, /\.ya?ml$/);
  const cards = []
  requireContext.keys().forEach((key) => {
    const element = {}
    const obj = requireContext(key)
    const fileName = getFileBaseName(key)
    element["key"] = fileName
    element["card"] = obj
    cards.push(element)
  });
  return cards;
}

function App() {
  const cards = loadCards()

  return (
    <Router>
      <ScrollToTop>
        <div>
          {/*<Header/>*/}
          <Switch>
              {cards.map(c => 
                <Route path={"/" + c.key} key={c.key}>
                  <Card key={c.key} data={c.card} all_cards={cards} />
                </Route>
              )}
              <Route path="/">
                <HomePage cards={cards}/>
              </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

