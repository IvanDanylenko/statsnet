import React, { Fragment } from 'react';

const Report = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="full-check-company">
          <h2 className="full-check-company__title">Полная проверка контрагентов в СПАРКе</h2>
          <div className="full-check-company__description">
            <ul className="horizontal-list">
              <li>Неоплаченные долги</li>
              <li>Арбитражные дела</li>
              <li>Связи</li>
              <li>Реорганизации и банкротства</li>
              <li>Прочие факторы риска</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-report-price" id="company-report-price">
        <div className="container">
          <h2 className="text-center">Полная информация о компании ПАО ГАЗПРОМ</h2>
          <div className="row company-report-price__items">
            <div className="col-lg-4">
              <div className="company-report-price__item">
                <div className="company-report-price__header">
                  <div className="company-report-price__title">СПАРК-Риски</div>
                  <div className="company-report-price__sub-title">Одностраничный отчет с&nbsp;самой важной информацией&nbsp;из СПАРК</div>
                </div>
                <div className="company-report-price__cost">
                  299<span>₽</span>
                </div>
                <div className="company-report-price__content">
                  <ul className="company-report-price__list">
                    <li className="company-report-price__list-item">Регистрационные данные компании</li>
                    <li className="company-report-price__list-item">Руководитель и основные владельцы</li>
                    <li className="company-report-price__list-item">Контактная информация</li>
                    <li className="company-report-price__list-item">Факторы риска</li>
                    <li className="company-report-price__list-item">Признаки хозяйственной деятельности</li>
                    <li className="company-report-price__list-item">Ключевые финансовые показатели в динамике</li>
                    <li className="company-report-price__list-item">Проверка по реестрам ФНС</li>
                  </ul>
                </div>
                <a href="/checkout/buy?subject=29a1661f-4593-4247-b58e-c2207e493bdf&type=2" className="btn btn-info btn-sm company-report-price__buy-btn">Купить</a>
                <a target="_blank" href="https://files.spark-interfax.ru/promo/files/SparkRisks.pdf" className="example-btn company-report-price__example-btn">
                  <span className="example-btn__text">Пример</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="company-report-price__item">
                <div className="company-report-price__header">
                  <div className="company-report-price__title">СПАРК-Профиль</div>
                  <div className="company-report-price__sub-title">Отчет с полной информацией из СПАРК</div>
                </div>
                <div className="relative">
                  <div className="company-report-price__cost">
                    999<span>₽</span>
                  </div>
                  <div className="company-report-price__monitoring-note">Включен мониторинг изменений&nbsp;на&nbsp;год</div>
                </div>
                <div className="company-report-price__content">
                  <ul className="company-report-price__list">
                    <li className="company-report-price__list-item">Регистрационные данные компании</li>
                    <li className="company-report-price__list-item">История изменения руководителей, наименования, адреса</li>
                    <li className="company-report-price__list-item">Полный список адресов, телефонов, сайтов</li>
                    <li className="company-report-price__list-item">Данные о совладельцах из различных источников</li>
                    <li className="company-report-price__list-item">Связанные компании</li>
                    <li className="company-report-price__list-item">Сведения о деятельности</li>
                    <li className="company-report-price__list-item">Финансовая отчетность за несколько лет</li>
                    <li className="company-report-price__list-item">Оценка финансового состояния</li>
                  </ul>
                </div>
                <a href="/checkout/buy?subject=29a1661f-4593-4247-b58e-c2207e493bdf&type=1" className="btn btn-info btn-sm company-report-price__buy-btn">Купить</a>
                <a target="_blank" href="https://files.spark-interfax.ru/promo/files/SparkProfile.pdf" className="example-btn company-report-price__example-btn">
                  <span className="example-btn__text">Пример</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="company-report-price__item">
                <div className="company-report-price__header">
                  <div className="company-report-price__title">Представителю компании</div>
                </div>
                <div className="company-report-price__cost company-report-price__cost_free">
                  Бесплатно
                  </div>
                <div className="company-report-price__content">
                  <ul className="company-report-price__list">
                    <li className="company-report-price__list-item">Отчет с полной информацией — СПАРК-ПРОФИЛЬ</li>
                    <li className="company-report-price__list-item">Добавление контактных данных: телефон, сайт, почта</li>
                    <li className="company-report-price__list-item">Добавление описания деятельности компании</li>
                    <li className="company-report-price__list-item">Загрузка логотипа</li>
                    <li className="company-report-price__list-item">Загрузка документов</li>
                  </ul>
                </div>
                <a href="/check-company" className="btn btn-info btn-sm company-report-price__buy-btn">Редактировать данные</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="spark-risks-panel">
          <i className="sp-icon-1c spark-risks-panel__logo" />
          <div className="spark-risks-panel__text">
            <div className="spark-risks-panel__title">
              СПАРК-Риски для 1С
              </div>
            <div className="spark-risks-panel__descr">Оценка надежности и мониторинг контрагентов</div>
          </div>
          <a className="btn btn-info btn-sm" href="/1cspark/">Узнать подробности</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Report;
