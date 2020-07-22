import React from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";
import Footer from '../core/Footer';

function HomePage(props) {
  return (
    <div>
          <header className="homepage-header">
            <nav className="main">
                <div className="header-container">
                  <div className="inner left">
                    <div className="logo">
                      <Link to="/" className="logo-link">
                          Open Model Cards
                      </Link>
                    </div>
                  </div>
                  </div>
            </nav>
      </header>
      <main className="homepage-main">
        <div className="homepage-card-list">
          {props.cards.map(c => <div key={c.key}>
            <a href={"./" + c.key}>{c.card.title}</a>
          </div>)}
        </div>
      </main>
      <Footer/>
    </div>
  );
  }

export default HomePage;