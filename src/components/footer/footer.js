import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="menu">
          <a className="menu-item" href="#">О проекте</a>
          <a className="menu-item" href="#">Правовая информация</a>
          <a className="menu-item" href="#">Условия использования</a>
          <a className="menu-item" href="#">Политика конфиденциальности</a>
        </div>
        <div className="credits">
          <span>Copyright © 2019 Statsnet. All rights reserved.</span>
          <span style={{ whiteSpace: 'nowrap' }}>С 29 сентября 2019 года.</span>
          <span style={{ whiteSpace: 'nowrap' }}>
            Пишите: <a href="mailto:mail@statsnet.co">mail@statsnet.co</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;