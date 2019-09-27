import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from "../search-box";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Statsnet</a>
      </div>
      {window.location.pathname !== '/' ? <SearchBox /> : null}
      <nav>
        <ul>
          <li><Link to="/jurisdictions">Юрисдикции</Link></li>
          <li><Link to="/about">О проекте</Link></li>
          <li><Link to="/terms">Условия использования</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;