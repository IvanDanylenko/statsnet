import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from "../search-box";
import './header.scss';

const Header = ({history}) => {
  let headerClasses = 'header ';
  let searchBox = null;
  if (window.location.pathname === '/') {
    headerClasses += 'header-home';
  } else {
    headerClasses += 'header-company';
    searchBox = <SearchBox history={history} />
  }
  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <Link to="/">Statsnet</Link>
          </div>
          { searchBox }
          <nav>
            <ul>
              <li>
                <a href="/about">О проекте</a>
              </li>
              <li>
                <a href="/opportunities">Возможности</a>
              </li>
              <li>
                <a href="/databases">Базы данных</a>
              </li>
              <li>
                <a href="/jurisdictions">Юрисдикции</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;