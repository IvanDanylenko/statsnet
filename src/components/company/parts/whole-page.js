import React from 'react';

const WholePage = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row header__first-row">
            <div className="col-sm-4">
              <a className="header__logos" href="file:///C:/">
                <span>Statsnet</span>
              </a>
            </div>
            <div className="col-sm-8 header__login hidden-xs">
              <div className="login-form  ">
                <div className="js-login-form-container">
                  <form
                    action="file:///C:/"
                    method="POST"
                    className="js-login-form"
                  >
                    <div
                      className="input-help input-help_left js-login-panel-error"
                      style={{ display: "none" }}
                    >
                      <span className="input-help__text js-error-text-container">
                        Вы указали неправильный логин или пароль
                  </span>
                    </div>
                    <div
                      className="captcha login-form__captcha js-captcha"
                      style={{ display: "none" }}
                    >
                      <input type="hidden" className="js-captcha-text" />
                      <img className="captcha__image js-captcha-image" />
                      <input
                        className="captcha__input custom-input custom-input_sm js-captcha-user-text"
                        placeholder="Текст с изображения"
                      />
                    </div>
                  </form>
                </div>
                <div className="js-logged-in" style={{ display: "none" }}>
                  <span className="login-form__logged">
                    <span>Вы вошли как</span>
                    <br />
                    <span className="login-form__logged-name js-user-name" />
                  </span>
                  <span className="js-login-continue-button">
                    Продолжить работу
              </span>
                </div>
              </div>
            </div>
            <div className="mobile-burger visible-xs-block js-burger">
              <span />
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu js-burger-content">
        <div className="mobile-navigation">
          <div className="navigation__item">
            <a href="file:///C:/features">Возможности</a>
          </div>
          <div className="navigation__item">
            <a href="file:///C:/integration">Интеграция</a>
          </div>
          <div className="navigation__item">
            <a href="file:///C:/about">О системе</a>
          </div>
          <div className="navigation__item">
            <a className="active" href="file:///C:/statistics">
              Статистика
        </a>
          </div>
          <div className="navigation__item">
            <a href="file:///C:/contacts">Контакты</a>
          </div>
          <div className="navigation__item"></div>
        </div>
        <div className="mobile-login">
          <div className="login-form  ">
            <div className="js-login-form-container">
              <form action="file:///C:/" method="POST" className="js-login-form">
                <div
                  className="input-help input-help_left js-login-panel-error"
                  style={{ display: "none" }}
                >
                  <span className="input-help__text js-error-text-container">
                    Вы указали неправильный логин или пароль
              </span>
                </div>
                <div
                  className="captcha login-form__captcha js-captcha"
                  style={{ display: "none" }}
                >
                  <input type="hidden" className="js-captcha-text" />
                  <img className="captcha__image js-captcha-image" />
                  <input
                    className="captcha__input custom-input custom-input_sm js-captcha-user-text"
                    placeholder="Текст с изображения"
                  />
                </div>
                <div className="login-form__group">
                  <input
                    className="custom-input custom-input_sm login-form__input"
                    placeholder="Логин"
                    name="username"
                    autoCorrect="off"
                    autoCapitalize="none"
                  />
                  <input
                    className="custom-input custom-input_sm login-form__input"
                    placeholder="Пароль"
                    type="password"
                    name="password"
                    autoCorrect="off"
                    autoCapitalize="none"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm login-form__btn"
                  >
                    <span>Войти</span>
                    <span className="loader hide js-login-loader" />
                  </button>
                </div>
              </form>
            </div>
            <div className="js-logged-in" style={{ display: "none" }}>
              <span className="login-form__logged">
                <span>Вы вошли как</span>
                <br />
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
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="#000" />
              </svg>
            </span>
          </button>
        </div>
        <div className="mobile-lang">
          <a
            className="language-switch language-switch_mobile-menu"
            data-lang="en"
            href="https://spark-interfax.com/"
          >
            IN ENGLISH
      </a>
        </div>
      </div>
      <div id="search-panel" className="search-panel">
        <div className="container ">
          <div className="search-panel__inner">
            <div className="search-panel__close">
              <button className="button-unstyled sp-icon-close-dark js-search-close" />
            </div>
            <div className="search-panel__form">
              <form
                action="file:///C:/search"
                autoComplete="off"
                className="search-form js-search-form"
                method="get"
              >
                <div className="search-form__group">
                  <div className="search-form__input-wrap">
                    <i className="search-form__input-icon sp-icon-magnifier-dark" />
                    <input
                      className="search-form__input autocomplete-enabled js-search-input"
                      type="text"
                      name="Query"
                      defaultValue
                      placeholder="Поиск компаний"
                      autoComplete="off"
                    />
                  </div>
                  <div className="search-form__buttons-wrap">
                    <input
                      className="btn btn-primary search-form__button js-search-submit"
                      type="submit"
                      defaultValue="Найти"
                      disabled
                    />
                  </div>
                </div>
                <div
                  className="autocomplete-suggestions"
                  style={{
                    position: "absolute",
                    display: "none",
                    maxHeight: 350,
                    zIndex: 9999
                  }}
                />
              </form>
              <div className="search-hint">
                <button className="btn btn-toggler btn-sm search-hint__btn js-search-hint-anchor open">
                  <span className="btn__text">Что можно искать</span>
                  <i className="btn-toggler__icon sp-icon-grey-angle" />
                </button>
                <div className="row js-search-hint-text ">
                  <div className="col-md-6">
                    Название компании, адрес, телефон, сайт, домен, ФИО
                    руководителя, совладельца, доверительного управляющего, ИНН,
                    ОГРН, ОКПО, БИК
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="promo-statistics"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <div className="promo-statistics__header">
          <div className="container relative">
            <ul
              className="breadcrumbs"
              itemScope
              itemType="http://schema.org/BreadcrumbList"
            >
              <li
                className="breadcrumbs__item-wrapper"
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
              >
                <meta itemProp="position" content={1} />
                <a
                  href="file:///C:/statistics"
                  className="breadcrumbs__item-val"
                  itemScope
                  itemType="http://schema.org/Thing"
                  itemProp="item"
                >
                  <span itemProp="name">Казахстан</span>
                </a>
              </li>
              <li
                className="breadcrumbs__item-wrapper js-breadcrumbs-level"
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
              >
                <meta itemProp="position" content={1} />
                <div className="breadcrumbs__item js-breadcrumbs-toggler-target">
                  <a
                    href="file:///C:/ru/statistics/region/45000000000"
                    className="breadcrumbs__item-val"
                    itemScope
                    itemType="http://schema.org/Thing"
                    itemProp="item"
                  >
                    <span itemProp="name">Алматы</span>
                  </a>
                </div>
              </li>
            </ul>
            <h1
              className="promo-statistics__title promo-statistics__title_company"
              itemProp="name"
            >
              АО Казпочта
        </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div
                className="tabs company-params-tabs js-company-info-tabs"
                style={{ position: "absolute", width: 923 }}
              >
                <div className="company-params-tabs__inner-wrapper">
                  <div className="company-params-tabs__inner">
                    <a className="tabs__item active" data-value="_contacts">
                      Контакты
                </a>
                    <a className="tabs__item" data-value="_details">
                      Реквизиты
                </a>
                    <a className="tabs__item" data-value="_founders">
                      Учредители
                </a>
                    <a className="tabs__item" data-value="_activity">
                      Виды деятельности
                </a>
                    <a className="tabs__item" data-value="_statistics">
                      Статистика
                </a>
                    <a className="tabs__item" data-value="_risks">
                      Риски
                </a>
                  </div>
                </div>
              </div>
              <div
                className="js-company-info-tabs-content"
                style={{ paddingTop: 54 }}
              >
                <h2 id="_contacts" className="promo-statistics__section-title">
                  Контакты
            </h2>
                <div className="company-characteristics">
                  <div className="company-characteristics__row">
                    <div className="company-characteristics__name">Телефон</div>
                    <div className="company-characteristics__value">
                      <a className="plug-value " data-popup="demo">
                        <span className="plug-value__text">+7</span>
                        <span>(░░░) ░░░ ░░</span>
                        <span className="plug-value__text">-</span>
                        <span>░░</span>
                      </a>
                    </div>
                  </div>
                  <div className="company-characteristics__row">
                    <div className="company-characteristics__name">
                      Эл. почта
                  <br />
                      (e-mail)
                </div>
                    <div className="company-characteristics__value">
                      <a className="plug-value " data-popup="demo">
                        <span>░░░</span>
                        <span className="plug-value__text">@</span>
                        <span>░░░.░░</span>
                      </a>
                    </div>
                  </div>
                  <div className="company-characteristics__row">
                    <div className="company-characteristics__name">Сайт</div>
                    <div className="company-characteristics__value">
                      <a className="plug-value " data-popup="demo">
                        <span className="plug-value__text">www.</span>
                        <span>░░░░.░░</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 id="_details" className="promo-statistics__section-title">
                    Реквизиты
              </h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Полное название организации
                  </div>
                      <div
                        className="company-characteristics__value"
                        itemProp="legalName"
                      >
                        ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "ГАЗПРОМ"
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Адрес</div>
                      <div
                        className="company-characteristics__value"
                        itemProp="address"
                      >
                        г. Москва, ул. Намёткина, д. 16
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Уставный капитал
                  </div>
                      <div className="company-characteristics__value">
                        <span className="js-replace-ruble ruble">
                          118&nbsp;367&nbsp;564&nbsp;500{" "}
                        </span>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКФС</div>
                      <div className="company-characteristics__value">
                        Смешанная российская собственность с долей федеральной
                        собственности
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКОПФ</div>
                      <div className="company-characteristics__value">
                        Публичные акционерные общества
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКОГУ</div>
                      <div className="company-characteristics__value">
                        Публичное акционерное общество "Газпром"
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ИНН</div>
                      <div
                        className="company-characteristics__value"
                        itemProp="taxID"
                      >
                        7736050003
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОГРН</div>
                      <div className="company-characteristics__value">
                        1027700070518
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">КПП</div>
                      <div className="company-characteristics__value">
                        772801001
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКАТО</div>
                      <div className="company-characteristics__value">
                        45293590000
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКПО</div>
                      <div className="company-characteristics__value">00040778</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКТМО</div>
                      <div className="company-characteristics__value">
                        45908000000
                  </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="promo-statistics__section-title">
                    Информация о компании
              </h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Статус компании
                  </div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          ░░░░░░░░░░░░░░
                    </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Руководитель
                  </div>
                      <a
                        className="company-characteristics__value "
                        data-popup="demo"
                      >
                        Миллер Алексей Борисович, председатель правления *
                  </a>
                    </div>
                    <div id="_founders" className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Учредители
                  </div>
                      <a
                        className="company-characteristics__value "
                        data-popup="demo"
                      >
                        РОСИМУЩЕСТВО **
                  </a>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Размер предприятия
                  </div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          ░░░░░░░░░░░░░░
                    </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Численность персонала
                  </div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          ░░░
                    </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Филиалы</div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          <span className="plug-value__plug">░░░░░░░░░░░░░░</span>
                        </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Выручка</div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          <span>░░░░░░░░</span>
                          <span className="plug-value__text">&nbsp;₽</span>
                        </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Чистая прибыль
                  </div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          <span>░░░░░░░░</span>
                          <span className="plug-value__text">&nbsp;₽</span>
                        </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Чистые активы
                  </div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          <span>░░░░░░░░</span>
                          <span className="plug-value__text">&nbsp;₽</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notes notes_bordered-top">
                  <div className="notes__item">
                    Данные без учета обновлений, доступных в системе СПАРК. <br />
                    Для получения актуальных данных –{" "}
                    <a data-popup="demo">
                      войдите в систему
                </a>
                    .
              </div>
                  <div className="notes__item">
                    Учредители, участники, акционеры с долей участия &gt;25%
              </div>
                </div>
                <div>
                  <h2 className="promo-statistics__section-title">
                    Сведения о государственной регистрации
              </h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Дата регистрации
                  </div>
                      <div className="company-characteristics__value">
                        02.08.2002
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Регистрирующий орган
                  </div>
                      <div className="company-characteristics__value">
                        Межрайонная инспекция ФНС России №46 по г.Москве
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Адрес регистрирующего органа
                  </div>
                      <div className="company-characteristics__value">
                        125373,Москва г,Походный проезд, домовладение 3, стр.2
                  </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">
                        Регистрирующий орган, в котором находится регистрационное
                        дело
                  </div>
                      <div className="company-characteristics__value">
                        Межрайонная инспекция Федеральной налоговой службы № 46 по
                        г. Москве
                  </div>
                    </div>
                  </div>
                </div>
                <h2 id="_activity" className="promo-statistics__section-title">
                  Виды деятельности
            </h2>
                <div className="okved-list">
                  <div className="okved-list__title">
                    Основной вид деятельности по ОКВЭД
              </div>
                  <div className="okved-list__items">
                    <div className="okved-list__item">
                      <div className="okved-list__code">46.71</div>
                      <div className="okved-list__name">
                        Торговля оптовая твердым, жидким и газообразным топливом и
                        подобными продуктами
                  </div>
                    </div>
                  </div>
                </div>
                <div className="okved-list">
                  <div className="okved-list__title">
                    Дополнительные виды деятельности
              </div>
                  <div className="okved-list__items">
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10</div>
                      <div className="okved-list__name">
                        Добыча сырой нефти и нефтяного (попутного) газа
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10.1</div>
                      <div className="okved-list__name">Добыча сырой нефти</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10.3</div>
                      <div className="okved-list__name">
                        Добыча нефтяного (попутного) газа
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.20</div>
                      <div className="okved-list__name">
                        Добыча природного газа и газового конденсата
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">09.10</div>
                      <div className="okved-list__name">
                        Предоставление услуг в области добычи нефти и природного
                        газа
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.2</div>
                      <div className="okved-list__name">
                        Производство и распределение газообразного топлива
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.21</div>
                      <div className="okved-list__name">Производство газа</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.22</div>
                      <div className="okved-list__name">
                        Распределение газообразного топлива по газораспределительным
                        сетям
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">41.20</div>
                      <div className="okved-list__name">
                        Строительство жилых и нежилых зданий
                  </div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">42.21</div>
                      <div className="okved-list__name">
                        Строительство инженерных коммуникаций для водоснабжения и
                        водоотведения, газоснабжения
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">42.22.1</div>
                      <div className="okved-list__name">
                        Строительство междугородних линий электропередачи и связи
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">43.13</div>
                      <div className="okved-list__name">Разведочное бурение</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">46.90</div>
                      <div className="okved-list__name">
                        Торговля оптовая неспециализированная
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">49.50.1</div>
                      <div className="okved-list__name">
                        Транспортирование по трубопроводам нефти и нефтепродуктов
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">49.50.2</div>
                      <div className="okved-list__name">
                        Транспортирование по трубопроводам газа и продуктов его
                        переработки
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">52.10.22</div>
                      <div className="okved-list__name">
                        Хранение и складирование газа и продуктов его переработки
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">64.99</div>
                      <div className="okved-list__name">
                        Предоставление прочих финансовых услуг, кроме услуг по
                        страхованию и пенсионному обеспечению, не включенных в
                        другие группировки
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">66.11.1</div>
                      <div className="okved-list__name">
                        Деятельность по организации торговли на финансовых рынках
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">66.19</div>
                      <div className="okved-list__name">
                        Деятельность вспомогательная прочая в сфере финансовых
                        услуг, кроме страхования и пенсионного обеспечения
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">70.10.2</div>
                      <div className="okved-list__name">
                        Деятельность по управлению холдинг-компаниями
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">70.22</div>
                      <div className="okved-list__name">
                        Консультирование по вопросам коммерческой деятельности и
                        управления
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.1</div>
                      <div className="okved-list__name">
                        Деятельность в области архитектуры, инженерных изысканий и
                        предоставление технических консультаций в этих областях
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.3</div>
                      <div className="okved-list__name">
                        Работы геолого-разведочные, геофизические и геохимические в
                        области изучения недр и воспроизводства минерально-сырьевой
                        базы
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.43</div>
                      <div className="okved-list__name">
                        Работы гидрографические изыскательские
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.45</div>
                      <div className="okved-list__name">
                        Инженерные изыскания в строительстве
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.5</div>
                      <div className="okved-list__name">
                        Деятельность в области гидрометеорологии и смежных с ней
                        областях, мониторинга состояния окружающей среды, ее
                        загрязнения
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.6</div>
                      <div className="okved-list__name">
                        Деятельность в области технического регулирования,
                        стандартизации, метрологии, аккредитации, каталогизации
                        продукции
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">72.19</div>
                      <div className="okved-list__name">
                        Научные исследования и разработки в области естественных и
                        технических наук прочие
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">84.22</div>
                      <div className="okved-list__name">
                        Деятельность, связанная с обеспечением военной безопасности
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">85.23</div>
                      <div className="okved-list__name">
                        Подготовка кадров высшей квалификации
                  </div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">85.42.9</div>
                      <div className="okved-list__name">
                        Деятельность по дополнительному профессиональному
                        образованию прочая, не включенная в другие группировки
                  </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-default btn-sm js-company-industry-toggle-btn js-company-industry-item-toggleable">
                  Показать все
            </button>
                {/* factoids */}
                <div className="factoids-block" id="_statistics">
                  <div className="factoids-block__item factoids-block__item_arbitr">
                    <h3 className="factoid__title">Арбитражные дела</h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">5003</div>
                      <div className="factoid__name">
                        судебные
                    <br /> дела
                  </div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">1288</div>
                      <div className="factoid__name">
                        в качестве
                    <br /> истца
                  </div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">2987</div>
                      <div className="factoid__name">
                        в качестве
                    <br /> ответчика
                  </div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">
                      Исполнительные
                  <br /> производства
                </h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">22</div>
                      <div className="factoid__name">текущие производства</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">831</div>
                      <div className="factoid__name">завершенные производства</div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">
                      Тендеры
                  <br /> и госзакупки
                </h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">779</div>
                      <div className="factoid__name">количество закупок</div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">
                      Существенные
                  <br /> события
                </h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">3043</div>
                      <div className="factoid__name">за всю историю компании</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">206</div>
                      <div className="factoid__name">за текущий год</div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">
                      Связи
                  <br />
                      компании
                </h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">122</div>
                      <div className="factoid__name">дочерние предприятия</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">21</div>
                      <div className="factoid__name">совладельцы</div>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 id="_risks" className="promo-statistics__section-title">
                    Риски и надежность компании
              </h2>
                  <div className="top-offset-15">
                    <h3>Индексы СПАРКА</h3>
                    <ul className="list-indices bottom-offset-10">
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ido" />
                          <a
                            className="plug-value list-indices__item-icon-text "
                            data-popup="demo"
                          >
                            ░░
                      </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИДО</div>
                          <a className="plug-value " data-popup="demo">
                            ░░░░░░░░
                      </a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс должной осмотрительности</h4>
                          <div>
                            Оценка, показывающая вероятность того, что компания
                            является «фирмой- однодневкой»
                      </div>
                        </div>
                      </li>
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ifr" />
                          <a
                            className="plug-value list-indices__item-icon-text "
                            data-popup="demo"
                          >
                            ░░
                      </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИФР</div>
                          <a className="plug-value " data-popup="demo">
                            ░░░░░░░░
                      </a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс финансового риска</h4>
                          <div>
                            Оценка вероятности неплатежеспособности компании
                      </div>
                        </div>
                      </li>
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ipd" />
                          <a
                            className="plug-value list-indices__item-icon-text "
                            data-popup="demo"
                          >
                            ░░
                      </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИПД</div>
                          <a className="plug-value " data-popup="demo">
                            ░░░░░░░░
                      </a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс платежной дисциплины</h4>
                          <div>
                            Показатель, отражающий своевременность оплаты компанией
                            счетов
                      </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bottom-offset-15">
                      Факторы риска <i className="sp-icon-risk-factors" />
                    </h3>
                    <a className="plug-value " data-popup="demo">
                      <span className="plug-value__plug">
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░░░░░░░░
                  </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container js-company-map-block">
          <h2 className="promo-statistics__section-title top-offset-50">
            Адрес: ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "ГАЗПРОМ"
      </h2>
          <div
            className="js-company-map"
            data-place-latitude=" 55.658785"
            data-place-longitude=" 37.556695"
            data-place-caption="ПАО ГАЗПРОМ"
            data-place-address="г. Москва, ул. Намёткина, д.  16"
            data-place-link='<a href="/moskva-cheremushki/pao-gazprom-inn-7736050003-ogrn-1027700070518-29a1661f45934247b58ec2207e493bdf">ПАО ГАЗПРОМ</a>'
            style={{ width: "100%", height: 400 }}
          ></div>
          <h2 className="promo-statistics__section-title">Описание</h2>
          <div className="company-description">
            <div className="company-description__text" itemProp="description">
              Компания ПАО ГАЗПРОМ, адрес: г. Москва, ул. Намёткина, д. 16
              зарегистрирована 02.08.2002. Организации присвоены ИНН 7736050003,
              ОГРН 1027700070518, КПП 772801001. Основным видом деятельности
              является торговля оптовая твердым, жидким и газообразным топливом и
              подобными продуктами, всего зарегистрировано 32 вида деятельности по
              ОКВЭД. Имеет связи с 122 компаниями.
          <br /> председатель правления - Миллер Алексей Борисович. Размер
              уставного капитала 118 367 564 500₽.
          <br /> Компания ПАО ГАЗПРОМ принимала участие в 779 тендерах. В
              отношении компании было возбуждено 853 исполнительных производства, из
              них текущих 22. ПАО ГАЗПРОМ участвовало в 5003 арбитражных делах: в
              1288 в качестве истца, и в 2987 в качестве ответчика.
          <br /> Реквизиты ПАО ГАЗПРОМ, юридический адрес, официальный сайт и
              выписка ЕГРЮЛ, а также 3043 существенных события доступны в системе
              СПАРК (демо-доступ бесплатно).
          <p />
            </div>
          </div>
          <div className="row">
            <div className="col-md-7"></div>
          </div>
        </div>
      </div>
      <div className="promo-statistics__section">
        <div className="container promo-statistics__section">
          <div className="rating-subjects">
            <div className="rating-subjects__left-column">
              <h2 className="promo-statistics__section-title">
                Компании похожие на ПАО ГАЗПРОМ
          </h2>
              <div className="raiting-list-wrap">
                <table className="raiting-list">
                  <colgroup width="1%"></colgroup>
                  <colgroup width="80%"></colgroup>
                  <colgroup width="20%"></colgroup>
                  <tbody>
                    <tr>
                      <td className="raiting-list__number">
                        <span>1</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-khoroshevski/ao-solid-tovarnye-rynki-inn-7714877093-ogrn-1127746504050-f7488be096f549ccbd7d797a03941014">
                          АО "СОЛИД-ТОВАРНЫЕ РЫНКИ"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span>ИНН</span>
                        <span className="nowrap">7714877093</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>2</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-sosenskoe/ooo-gazprom-mezhregiongaz-moskva-inn-5009033419-ogrn-1035002001594-57af4915dc1b44edb0a7adbdcc88244b">
                          ООО "ГАЗПРОМ МЕЖРЕГИОНГАЗ МОСКВА"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">5009033419</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>3</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-meshchanski/ooo-investneftetreid-inn-7729481489-ogrn-5157746030976-1719ba087f9d403abfc4e8a6e186aeb6">
                          ООО "ИНВЕСТНЕФТЕТРЕЙД"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">7729481489</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>4</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-basmanny/ooo-lukoil-aero-inn-7702354081-ogrn-1037702027670-d3ff32d70e324faead63361b3e73bad7">
                          ООО "ЛУКОЙЛ-АЭРО"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">7702354081</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>5</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-zamoskvoreche/ooo-lukoil-marinbunker-inn-9705083098-ogrn-1167847471230-8721db9c406546729672c8f67514c516">
                          ООО "ЛУКОЙЛ-МАРИНБУНКЕР"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">9705083098</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>6</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-zamoskvoreche/ooo-lukoil-rnp-treiding-inn-9705083130-ogrn-5167746424687-b6ea3e3697a94c95902297206e358f2f">
                          ООО "ЛУКОЙЛ-РНП-ТРЕЙДИНГ"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">9705083130</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>7</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-prospekt-vernadskogo/ooo-novatek-moskovskaya-oblast-inn-7729728577-ogrn-1127747267988-2807348d3cfe4c668d0995a307eb83db">
                          ООО "НОВАТЭК МОСКОВСКАЯ ОБЛАСТЬ"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">7729728577</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>8</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-khamovniki/ooo-omega-grupp-inn-7704362426-ogrn-1167746601615-621d4c7fe2e24aa6ac38c75958d427c6">
                          ООО "ОМЕГА ГРУПП"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">7704362426</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>9</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-donskoi/ooo-rn-bitum-inn-4014003383-ogrn-1024000764710-cc5b90c2e88040ca96f221cddc87212e">
                          ООО "РН-БИТУМ"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">4014003383</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="raiting-list__number">
                        <span>10</span>
                        <span>.</span>
                      </td>
                      <td>
                        <a href="file:///C:/moskva-donskoi/ooo-rn-bunker-inn-7705839398-ogrn-1087746526361-d14cf4220e5b44d1a363248923f92240">
                          ООО "РН-БУНКЕР"
                    </a>
                      </td>
                      <td className="raiting-list__code">
                        <span className="nowrap">7705839398</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WholePage;
