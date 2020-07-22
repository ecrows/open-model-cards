import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header(props) {
  return (
          <header className="header">
            <nav className="main">
                <div className="header-container">
                  <div className="inner left">
                    <div className="logo">
                      <Link to="/" className="logo-link">
                          Open Model Cards
                      </Link>
                    </div>
                  </div>
                    <div className="inner right">
                    <div className="links">
                      <ul className="link-list">
                            <li className="menu-item">
                              <Link to="/card">
                                Card
                              </Link>
                            </li>
                      </ul>
                    </div>
                    </div>
                  </div>
            </nav>
      </header>
  );
  }

export default Header;