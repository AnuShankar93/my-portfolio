import React from 'react';
import './header.css';
import Mobile from './mobile/Mobile';
import Web from './web/Web';

const Header = () => {
    return (
        <div className="header">
          <div className="logo"> Anu Shankar</div>
          <div className="menu">
            <div className="web-menu">
              <Web/>
            </div>
            <div className="mobile-menu">
              <Mobile/>
            </div>
          </div>
        </div>
    )
}

export default Header
