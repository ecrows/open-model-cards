/**
 * We use this to avoid custom webpack configuration,
 * but we can always change how we load yaml in future.
 */

/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import './App.css';
import Card from '../card/Card';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

import card from 'yaml-loader!../models/example_model.yml';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const exampleCard = Card({card})
  console.log(card);

  return (
    <Router>
      <ScrollToTop>
        <div>
          <Header/>
          <Switch>
            <Route path="/card">
              {exampleCard}
            </Route>
          </Switch>
          <Footer/>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

