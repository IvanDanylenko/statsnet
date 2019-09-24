import React from 'react';

class PromoStatistics extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  state = {
    position: 'relative'
  }

  componentDidMount() {
    document.querySelector('.app').addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const pos = this.myRef.current.getBoundingClientRect();
    console.log(pos);
    console.log(Math.abs(pos.y));
    if (Math.abs(pos.y) < 30) {
      if (pos.y < 0) {
        this.setState({ position: 'fixed' })
      } else {
        this.setState({ position: 'relative' })
      }
    }
  }

  render() {
    return (
      <div onScroll={this.handleScroll} className="promo-statistics" itemScope itemType="http://schema.org/Organization">
        <div className="promo-statistics__header">
          <div className="container relative">
            <ul className="breadcrumbs" itemScope itemType="http://schema.org/BreadcrumbList">
              <li className="breadcrumbs__item-wrapper" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <meta itemProp="position" content={1} />
                <a href="/statistics" className="breadcrumbs__item-val" itemScope itemType="http://schema.org/Thing" itemProp="item">
                  <span itemProp="name">Россия</span>
                </a>
              </li>
              <li className="breadcrumbs__item-wrapper js-breadcrumbs-level" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <meta itemProp="position" content={1} />
                <div className="breadcrumbs__item js-breadcrumbs-toggler-target">
                  <a href="/ru/statistics/region/45000000000" className="breadcrumbs__item-val" itemScope itemType="http://schema.org/Thing" itemProp="item">
                    <span itemProp="name">Москва</span>
                  </a>
                </div>
              </li>
              <li className="breadcrumbs__item-wrapper js-breadcrumbs-level" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <meta itemProp="position" content={2} />
                <div className="breadcrumbs__item js-breadcrumbs-toggler-target">
                  <a href="/ru/statistics/city/45293590000" className="breadcrumbs__item-val" itemScope itemType="http://schema.org/Thing" itemProp="item">
                    <span itemProp="name">Черемушки</span>
                  </a>
                </div>
              </li>
            </ul>
            <h1 className="promo-statistics__title promo-statistics__title_company" itemProp="name">ПАО ГАЗПРОМ</h1>
            <div className="top-offset-20">
              <div className="company-params">
                <div className="company-params__item">
                  <table className="company-params__table">
                    <tbody><tr>
                      <td className="company-params__value">2</td>
                      <td className="company-params__description"><span className="company-params__text-description">место по выручке <br />из 2067030  в Москве</span></td>
                    </tr>
                    </tbody></table>
                </div>
                <div className="company-params__item company-rating" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                  <table className="company-params__table relative rating-hint-container">
                    <tbody><tr>
                      <td className="company-params__value company-params__value_contrast" rowSpan={2} itemProp="ratingValue"><span>5</span>,0</td>
                      <td className="company-params__description">
                        <div className="rating-star"><i className="rating-star__active" style={{ width: '100%' }} /></div>
                      </td>
                    </tr>
                      <tr>
                        <td className="company-params__addition">
                          <meta itemProp="ratingCount" content={21} />
                          Оценка информационной<br /> открытости
                            <div className="rating-hint">
                            <div className="rating-hint__title">Оценка информационной открытости <span>5</span>,0</div>
                            <div>
                              Значение оценки информационной открытости является аналитическим показателем, рассчитываемым на основании публично доступной информации
                              о деятельности юридических лиц. Данная оценка является мнением Интерфакс и не дает каких-либо гарантий или заверений третьим лицам,
                              а также не является рекомендацией для покупки, владения или продажи ценных бумаг, принятия (или непринятия) каких-либо коммерческих
                              или иных решений.
                              </div>
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <a className="its-my-company-anchor js-scroll-to" href="#company-report-price">
                <i className="sp-icon-pencil its-my-company-anchor__icon" />
                <b>Ваша компания?</b>
                <br />
                Уточнить данные
                </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className={`tabs company-params-tabs js-company-info-tabs ${this.state.position}`}
                ref={this.myRef}>
                <div className="company-params-tabs__inner-wrapper">
                  <div className="company-params-tabs__inner">
                    <a className="tabs__item" data-value="_contacts">Контакты</a>
                    <a className="tabs__item" data-value="_details">Реквизиты</a>
                    <a className="tabs__item" data-value="_founders">Учредители</a>
                    <a className="tabs__item" data-value="_activity">Виды деятельности</a>
                    <a className="tabs__item" data-value="_statistics">Статистика</a>
                    <a className="tabs__item" data-value="_risks">Риски</a>
                  </div>
                </div>
              </div>
              <div className="js-company-info-tabs-content">
                <h2 id="_contacts" className="promo-statistics__section-title">Контакты</h2>
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
                    <div className="company-characteristics__name">Эл. почта<br />(e-mail)</div>
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
                  <h2 id="_details" className="promo-statistics__section-title">Реквизиты</h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Полное название организации</div>
                      <div className="company-characteristics__value" itemProp="legalName">ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "ГАЗПРОМ"</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Адрес</div>
                      <div className="company-characteristics__value" itemProp="address">г. Москва, ул. Намёткина, д.  16</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Уставный капитал</div>
                      <div className="company-characteristics__value"><span className="js-replace-ruble">118&nbsp;367&nbsp;564&nbsp;500 руб.</span></div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКФС</div>
                      <div className="company-characteristics__value">Смешанная российская собственность с долей федеральной собственности</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКОПФ</div>
                      <div className="company-characteristics__value">Публичные акционерные общества</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКОГУ</div>
                      <div className="company-characteristics__value">Публичное акционерное общество "Газпром"</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ИНН</div>
                      <div className="company-characteristics__value" itemProp="taxID">7736050003</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОГРН</div>
                      <div className="company-characteristics__value">1027700070518</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">КПП</div>
                      <div className="company-characteristics__value">772801001</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКАТО</div>
                      <div className="company-characteristics__value">45293590000</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКПО</div>
                      <div className="company-characteristics__value">00040778</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">ОКТМО</div>
                      <div className="company-characteristics__value">45908000000</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="promo-statistics__section-title">Информация о компании</h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Статус компании</div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          ░░░░░░░░░░░░░░
                          </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Руководитель</div>
                      <a className="company-characteristics__value " data-popup="demo">
                        Миллер Алексей Борисович, председатель правления *
                        </a>
                    </div>
                    <div id="_founders" className="company-characteristics__row">
                      <div className="company-characteristics__name">Учредители</div>
                      <a className="company-characteristics__value " data-popup="demo">
                        РОСИМУЩЕСТВО
                        **
                        </a>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Размер предприятия</div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          ░░░░░░░░░░░░░░
                          </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Численность персонала</div>
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
                      <div className="company-characteristics__name">Чистая прибыль</div>
                      <div className="company-characteristics__value">
                        <a className="plug-value " data-popup="demo">
                          <span>░░░░░░░░</span>
                          <span className="plug-value__text">&nbsp;₽</span>
                        </a>
                      </div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Чистые активы</div>
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
                  <div className="notes__item">Данные без учета обновлений, доступных в системе СПАРК. <br />Для получения актуальных данных – <a data-popup="demo">войдите в систему</a>.</div>
                  <div className="notes__item">Учредители, участники, акционеры с долей участия &gt;25%</div>
                </div>
                <div>
                  <h2 className="promo-statistics__section-title">Сведения о государственной регистрации</h2>
                  <div className="company-characteristics full-width">
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Дата регистрации</div>
                      <div className="company-characteristics__value">02.08.2002</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Регистрирующий орган</div>
                      <div className="company-characteristics__value">Межрайонная инспекция ФНС России №46 по г.Москве</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Адрес регистрирующего органа</div>
                      <div className="company-characteristics__value">125373,Москва г,Походный проезд, домовладение 3, стр.2</div>
                    </div>
                    <div className="company-characteristics__row">
                      <div className="company-characteristics__name">Регистрирующий орган, в котором находится регистрационное дело</div>
                      <div className="company-characteristics__value">Межрайонная инспекция Федеральной налоговой службы № 46 по г. Москве</div>
                    </div>
                  </div>
                </div>
                <h2 id="_activity" className="promo-statistics__section-title">Виды деятельности</h2>
                <div className="okved-list">
                  <div className="okved-list__title">Основной вид деятельности по ОКВЭД</div>
                  <div className="okved-list__items">
                    <div className="okved-list__item">
                      <div className="okved-list__code">46.71</div>
                      <div className="okved-list__name">Торговля оптовая твердым, жидким и газообразным топливом и подобными продуктами</div>
                    </div>
                  </div>
                </div>
                <div className="okved-list">
                  <div className="okved-list__title">Дополнительные виды деятельности</div>
                  <div className="okved-list__items">
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10</div>
                      <div className="okved-list__name">Добыча сырой нефти и нефтяного (попутного) газа</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10.1</div>
                      <div className="okved-list__name">Добыча сырой нефти</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.10.3</div>
                      <div className="okved-list__name">Добыча нефтяного (попутного) газа</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">06.20</div>
                      <div className="okved-list__name">Добыча природного газа и газового конденсата</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">09.10</div>
                      <div className="okved-list__name">Предоставление услуг в области добычи нефти и природного газа</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.2</div>
                      <div className="okved-list__name">Производство и распределение газообразного топлива</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.21</div>
                      <div className="okved-list__name">Производство газа</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">35.22</div>
                      <div className="okved-list__name">Распределение газообразного топлива по газораспределительным сетям</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">41.20</div>
                      <div className="okved-list__name">Строительство жилых и нежилых зданий</div>
                    </div>
                    <div className="okved-list__item ">
                      <div className="okved-list__code">42.21</div>
                      <div className="okved-list__name">Строительство инженерных коммуникаций для водоснабжения и водоотведения, газоснабжения</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">42.22.1</div>
                      <div className="okved-list__name">Строительство междугородних линий электропередачи и связи</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">43.13</div>
                      <div className="okved-list__name">Разведочное бурение</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">46.90</div>
                      <div className="okved-list__name">Торговля оптовая неспециализированная</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">49.50.1</div>
                      <div className="okved-list__name">Транспортирование по трубопроводам нефти и нефтепродуктов</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">49.50.2</div>
                      <div className="okved-list__name">Транспортирование по трубопроводам газа и продуктов его переработки</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">52.10.22</div>
                      <div className="okved-list__name">Хранение и складирование газа и продуктов его переработки</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">64.99</div>
                      <div className="okved-list__name">Предоставление прочих финансовых услуг, кроме услуг по страхованию и пенсионному обеспечению, не включенных в другие группировки</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">66.11.1</div>
                      <div className="okved-list__name">Деятельность по организации торговли на финансовых рынках</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">66.19</div>
                      <div className="okved-list__name">Деятельность вспомогательная прочая в сфере финансовых услуг, кроме страхования и пенсионного обеспечения</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">70.10.2</div>
                      <div className="okved-list__name">Деятельность по управлению холдинг-компаниями</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">70.22</div>
                      <div className="okved-list__name">Консультирование по вопросам коммерческой деятельности и управления</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.1</div>
                      <div className="okved-list__name">Деятельность в области архитектуры, инженерных изысканий и предоставление технических консультаций в этих областях</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.3</div>
                      <div className="okved-list__name">Работы геолого-разведочные, геофизические и геохимические в области изучения недр и воспроизводства минерально-сырьевой базы</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.43</div>
                      <div className="okved-list__name">Работы гидрографические изыскательские</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.45</div>
                      <div className="okved-list__name">Инженерные изыскания в строительстве</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.5</div>
                      <div className="okved-list__name">Деятельность в области гидрометеорологии и смежных с ней областях, мониторинга состояния окружающей среды, ее загрязнения</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">71.12.6</div>
                      <div className="okved-list__name">Деятельность в области технического регулирования, стандартизации, метрологии, аккредитации, каталогизации продукции</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">72.19</div>
                      <div className="okved-list__name">Научные исследования и разработки в области естественных и технических наук прочие</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">84.22</div>
                      <div className="okved-list__name">Деятельность, связанная с обеспечением военной безопасности</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">85.23</div>
                      <div className="okved-list__name">Подготовка кадров высшей квалификации</div>
                    </div>
                    <div className="okved-list__item  js-company-industry-item-toggleable hide">
                      <div className="okved-list__code">85.42.9</div>
                      <div className="okved-list__name">Деятельность по дополнительному профессиональному образованию прочая, не включенная в другие группировки</div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-default btn-sm js-company-industry-toggle-btn js-company-industry-item-toggleable">Показать все</button>
                {/* factoids */}
                <div className="factoids-block" id="_statistics">
                  <div className="factoids-block__item factoids-block__item_arbitr">
                    <h3 className="factoid__title">Арбитражные дела</h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">5003</div>
                      <div className="factoid__name">судебные<br /> дела</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">1288</div>
                      <div className="factoid__name">в качестве<br /> истца</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">2987</div>
                      <div className="factoid__name">в качестве<br /> ответчика</div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">Исполнительные<br /> производства</h3>
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
                    <h3 className="factoid__title">Тендеры<br /> и госзакупки</h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">779</div>
                      <div className="factoid__name">количество закупок</div>
                    </a>
                  </div>
                  <div className="factoids-block__item">
                    <h3 className="factoid__title">Существенные<br /> события</h3>
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
                    <h3 className="factoid__title">Связи<br />компании</h3>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">122</div>
                      <div className="factoid__name">дочерние предприятия</div>
                    </a>
                    <a className="factoid " data-popup="demo">
                      <div className="factoid__value">21</div>
                      <div className="factoid__name">совладельцы</div>
                    </a>
                  </div>
                  <div className="last-changes-block">
                    <div className="last-changes-block__item">
                      <h3 className="factoid__title">Последние изменения</h3>
                      <a className="factoid " data-popup="demo">
                        <div className="factoid__value">4797</div>
                        <div className="factoid__name">
                          <div className="nowrap">c 23.05.2019</div>
                          <div className="nowrap">по 22.09.2019</div>
                        </div>
                      </a>
                    </div>
                    <div className="last-changes-block__item">
                      Последние изменения могут содержать сообщения о признаках банкротства, ухудшении индексов компании, вхождении в негативные реестры, смене руководителей или владельцев, ходе судебных дел и прочих значимых событиях в жизни компании.
                      </div>
                  </div>
                </div>
                <div>
                  <h2 id="_risks" className="promo-statistics__section-title">Риски и надежность компании</h2>
                  <div className="top-offset-15">
                    <h3>Индексы СПАРКА</h3>
                    <ul className="list-indices bottom-offset-10">
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ido" />
                          <a className="plug-value list-indices__item-icon-text " data-popup="demo">
                            ░░
                            </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИДО</div>
                          <a className="plug-value " data-popup="demo">░░░░░░░░</a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс должной осмотрительности</h4>
                          <div>Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»</div>
                        </div>
                      </li>
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ifr" />
                          <a className="plug-value list-indices__item-icon-text " data-popup="demo">
                            ░░
                            </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИФР</div>
                          <a className="plug-value " data-popup="demo">░░░░░░░░</a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс финансового риска</h4>
                          <div>Оценка вероятности неплатежеспособности компании</div>
                        </div>
                      </li>
                      <li className="list-indices__item">
                        <div className="list-indices__item-icon">
                          <i className="sp-icon-ipd" />
                          <a className="plug-value list-indices__item-icon-text " data-popup="demo">
                            ░░
                            </a>
                        </div>
                        <div className="list-indices__item-name">
                          <div>ИПД</div>
                          <a className="plug-value " data-popup="demo">░░░░░░░░</a>
                        </div>
                        <div className="list-indices__item-description">
                          <h4>Индекс платежной дисциплины</h4>
                          <div>Показатель, отражающий своевременность оплаты компанией счетов</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bottom-offset-15">Факторы риска <i className="sp-icon-risk-factors" /></h3>
                    <a className="plug-value " data-popup="demo">
                      <span className="plug-value__plug">
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                        ░░░░░░░░
                        </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 .d-none .d-md-block statistics-sidebar">
              <div className="mobile-app-banner">
                <i className="sp-icon-mobile-app mobile-app-banner__img" />
                <h3 className="mobile-app-banner__title">Мобильное приложение</h3>
                <div className="mobile-app-banner__sub-title">Бесплатно узнайте больше о компаниях и ИП, где вы совершаете покупки</div>
                <ul className="mobile-app-banner__links list-unstyled">
                  <li>
                    <a href="https://itunes.apple.com/ru/app/id1447369915" target="_blank">
                      <i className="sp-icon-grey-app-store" />
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=ru.interfax.spark" target="_blank">
                      <i className="sp-icon-grey-google-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoStatistics;
