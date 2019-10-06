import React from 'react';
import SearchBox from '../search-box';
import './home-page.scss';

const HomePage = ({ history, location }) => {
  return (
    <section className="home-page">
      <div className="container">
        <div className="offer">
          <div className="row">
            <div className="col-lg-8">
              <h1>Поиск и проверка контрагентов</h1>
              <p>Statsnet – это сервис, разработанный для тех, кто хочет работать только с надёжными контрагентами. Проявите должную осмотрительность и проверяйте своих контрагентов по 37 факторам риска</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <SearchBox
                location={location}
                history={history} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="advantages--item">
                    <img src="/img/tools-dashboard.svg" alt="Tools dashboard" />
                    <h3>Оценка рисков</h3>
                    <p>
                      Уникальные аналитические показатели, позволяющие провести
                      экспресс-анализ компании и оценить ее благонадежность
                </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="advantages--item">
                    <img src="/img/inbox-down.svg" alt="Inbox down" />
                    <h3>Отчеты и выписки</h3>
                    <p>
                      Предоставляем отчеты и выписки из государственных реестров,
                      судов, правоохранительных органов, кредитных бюро.
                </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="advantages--item">
                    <img src="/img/user-check.svg" alt="User check" />
                    <h3>Проверка руководства</h3>
                    <p>Список совладельцев, иерархия владения и структура собственников, включая иностранных бенефициаров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
