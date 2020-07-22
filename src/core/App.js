import React from 'react';
import './App.css';
import Card from '../card/Card';
//import Header from './Header';
import Footer from './Footer';
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
  console.log(cards)

  return (
    <Router>
      <ScrollToTop>
        <div>
          {/*<Header/>*/}
          <Switch>
            <Route path="/card">
              {cards.map(c => <Card key={c.key} data={c.card} />)}
            </Route>
          </Switch>
          <Footer/>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

