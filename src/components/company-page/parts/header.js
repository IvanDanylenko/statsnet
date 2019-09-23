import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="row header__first-row">
            <div className="col-sm-4">
              <a className="header__logos" href="/">
                <div className="bottom-offset-5 d-none d-sm-block">
                  <i className="sp-icon-logo-interfax" />
                </div>
                <div>
                  <i className="sp-icon-logo" />
                </div>
              </a>
            </div>
            <div className="col-sm-8 header__login d-none d-sm-block">
              <div className="login-form  ">
                <div className="js-login-form-container">
                  <form action="/" method="POST" className="js-login-form">
                    <div className="input-help input-help_left js-login-panel-error" style={{ display: 'none' }}>
                      <span className="input-help__text js-error-text-container">Вы указали неправильный логин или пароль</span>
                    </div>
                    <div className="captcha login-form__captcha js-captcha" style={{ display: 'none' }}>
                      <input type="hidden" className="js-captcha-text" />
                      <img className="captcha__image js-captcha-image" />
                      <input className="captcha__input custom-input custom-input_sm js-captcha-user-text" placeholder="Текст с изображения" />
                    </div>
                    <div className="login-form__group">
                      <input className="custom-input custom-input_sm login-form__input" placeholder="Логин" name="username" autoCorrect="off" autoCapitalize="none" />
                      <input className="custom-input custom-input_sm login-form__input" placeholder="Пароль" type="password" name="password" autoCorrect="off" autoCapitalize="none" />
                      <button type="submit" className="btn btn-primary btn-sm login-form__btn">
                        <span>Войти</span>
                        <span className="loader hide js-login-loader" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="js-logged-in" style={{ display: 'none' }}>
                  <span className="login-form__logged">
                    <span>Вы вошли как</span><br />
                    <span className="login-form__logged-name js-user-name" />
                  </span>
                  <span className="js-login-continue-button">Продолжить работу</span>
                </div>
              </div>
            </div>
            <div className="mobile-burger visible-xs-block js-burger"><span /></div>
          </div>
          <div className="header__menu d-none d-sm-block">
            <div className="row">
              <div className="col-xs-8">
                <nav className="navigation">
                  <div className="navigation__inner">
                    <div className="navigation__item">
                      <a href="/features">Возможности</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/integration">Интеграция</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/about">О системе</a>
                    </div>
                    <div className="navigation__item">
                      <a className="active" href="/statistics">Статистика</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/contacts">Контакты</a>
                    </div>
                    <div className="navigation__item">
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xs-4">
                <div className="row header-toolbar">
                  <div className="col-sm-8">
                    <button className="btn btn-sm btn-toggler search-popup-link js-search-popup-link">
                      <i className="btn__icon sp-icon-magnifier" />
                      <span className="btn__text">Поиск компаний</span>
                      <span className="btn-toggler__icon">
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#000" />
                        </svg>
                      </span>
                    </button>                  </div>
                  <div className="col-sm-4 text-right">
                    <a className="language-switch" data-lang="en" href="https://spark-interfax.com">EN</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu js-burger-content">
        <div className="mobile-navigation">
          <div className="navigation__item">
            <a href="/features">Возможности</a>
          </div>
          <div className="navigation__item">
            <a href="/integration">Интеграция</a>
          </div>
          <div className="navigation__item">
            <a href="/about">О системе</a>
          </div>
          <div className="navigation__item">
            <a className="active" href="/statistics">Статистика</a>
          </div>
          <div className="navigation__item">
            <a href="/contacts">Контакты</a>
          </div>
          <div className="navigation__item">
          </div>
        </div>
        <div className="mobile-login">
          <div className="login-form  ">
            <div className="js-login-form-container">
              <form action="/" method="POST" className="js-login-form">
                <div className="input-help input-help_left js-login-panel-error" style={{ display: 'none' }}>
                  <span className="input-help__text js-error-text-container">Вы указали неправильный логин или пароль</span>
                </div>
                <div className="captcha login-form__captcha js-captcha" style={{ display: 'none' }}>
                  <input type="hidden" className="js-captcha-text" />
                  <img className="captcha__image js-captcha-image" />
                  <input className="captcha__input custom-input custom-input_sm js-captcha-user-text" placeholder="Текст с изображения" />
                </div>
                <div className="login-form__group">
                  <input className="custom-input custom-input_sm login-form__input" placeholder="Логин" name="username" autoCorrect="off" autoCapitalize="none" />
                  <input className="custom-input custom-input_sm login-form__input" placeholder="Пароль" type="password" name="password" autoCorrect="off" autoCapitalize="none" />
                  <button type="submit" className="btn btn-primary btn-sm login-form__btn">
                    <span>Войти</span>
                    <span className="loader hide js-login-loader" />
                  </button>
                </div>
              </form>
            </div>
            <div className="js-logged-in" style={{ display: 'none' }}>
              <span className="login-form__logged">
                <span>Вы вошли как</span><br />
                <span className="login-form__logged-name js-user-name" />
              </span>
              <span className="js-login-continue-button">Продолжить работу</span>
            </div>
          </div>
        </div>
        <div className="mobile-search">
          <button className="btn btn-sm btn-toggler search-popup-link js-search-popup-link">
            <i className="btn__icon sp-icon-magnifier" />
            <span className="btn__text">Поиск компаний</span>
            <span className="btn-toggler__icon">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#000" />
              </svg>
            </span>
          </button>
        </div>
        <div className="mobile-lang">
          <a className="language-switch language-switch_mobile-menu" data-lang="en" href="https://spark-interfax.com">IN ENGLISH</a>
        </div>
      </div>
      <div id="search-panel" className="search-panel">
        <div className="container ">
          <div className="search-panel__inner">
            <div className="search-panel__close">
              <button className="button-unstyled sp-icon-close-dark js-search-close" />
            </div>
            <div className="search-panel__form">
              <form action="/search" autoComplete="off" className="search-form js-search-form" method="get">    <div className="search-form__group">
                <div className="search-form__input-wrap">
                  <i className="search-form__input-icon sp-icon-magnifier-dark" />
                  <input className="search-form__input autocomplete-enabled js-search-input" type="text" name="Query" defaultValue placeholder="Поиск компаний" />
                </div>
                <div className="search-form__buttons-wrap">
                  <input className="btn btn-primary search-form__button js-search-submit" type="submit" defaultValue="Найти" />
                </div>
              </div>
              </form>
              <div className="search-hint">
                <button className="btn btn-toggler btn-sm search-hint__btn js-search-hint-anchor open">
                  <span className="btn__text">Что можно искать</span>
                  <i className="btn-toggler__icon sp-icon-grey-angle" />
                </button>
                <div className="row js-search-hint-text ">
                  <div className="col-md-6">
                    Название компании, адрес, телефон, сайт, домен, ФИО руководителя, совладельца, доверительного управляющего, ИНН, ОГРН, ОКПО, БИК
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
