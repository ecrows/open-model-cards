import React from 'react';
import './App.css';
import Card from '../card/Card';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Header/>
          <Switch>
            <Route path="/card">
              <Card/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

