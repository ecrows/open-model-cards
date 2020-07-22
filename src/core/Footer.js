import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
        <div className="footer">
          <div className="footnote">Powered by <a className="footerlink" href="https://github.com/ecrows/open-model-cards">Open Model Cards</a></div>
          <div className="license"><i>Open Model Cards is open source software licensed under The MIT License</i></div>
        </div>
    </div>
  );
}

export default Footer;