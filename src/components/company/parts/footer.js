import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="row footer__col-container">
              <div className="col-sm-4 footer__col">
                <div className="footer__col-inner">
                  <nav className="navigation navigation_footer">
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
                      <a href="/sources">Источники данных</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/articles">Публикации</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/events">События</a>
                    </div>
                    <div className="navigation__item">
                      <a className="active" href="/statistics">Статистика</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/contacts">Контакты</a>
                    </div>
                  </nav>
                  <nav className="navigation navigation_footer">
                    <div className="navigation__item">
                      <a href="/number-removal" target="_blank">Удаление личного номера</a>
                    </div>
                    <div className="navigation__item">
                      <a href="/restrictions" target="_blank">Ограничения использования</a>
                    </div>
                  </nav>
                  <div className="footer__section footer__section_bottom">
                    <div className="copyright">© Интерфакс, 2019</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 footer__col">
                <div className="footer__col-inner">
                  <div className="footer__section footer__section_border">
                    <p>Мобильные приложения</p>
                    <div className="stores">
                      <a href="https://itunes.apple.com/ru/app/id1447369915" className="stores__button stores__button_app-inverse" />
                      <a href="https://play.google.com/store/apps/details?id=ru.interfax.spark" className="stores__button stores__button_play-inverse" />
                    </div>
                  </div>
                  <div className="footer__section">
                    <div className="navigation navigation_footer">
                      <div className="navigation__item">
                        <a href="/Content/files/personal_policy.pdf" target="_blank" rel="nofollow">
                          Политика АО «Информационное агентство Интерфакс» об обработке персональных данных
                            </a>
                      </div>
                      <div className="navigation__item">
                        <a href="/ru/privacy-policy" target="_blank" rel="nofollow">
                          Политика конфиденциальности АО «Информационное агентство Интерфакс» для лиц, находящихся на территории ЕС
                            </a>
                      </div>
                      <div className="navigation__item">
                        <a href="/ru/requirements" target="_blank" rel="nofollow">
                          Технические требования для работы с системой СПАРК
                            </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer__section">
                    <div className="footer__muted-text">
                      <p>Сетевое издание Информационный ресурс СПАРК. Свидетельство о регистрации СМИ ЭЛ № ФС 77 - 67950 выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) 21.12.2016.</p>
                      <p>Учредитель: АО «Информационное агентство Интерфакс», главный редактор: Герасимов В.В.</p>
                      <p>Настоящий ресурс может содержать материалы 16+.</p>
                      <p>Телефон редакции: +7 (495) 787-43-43, e-mail: spark@interfax.ru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
