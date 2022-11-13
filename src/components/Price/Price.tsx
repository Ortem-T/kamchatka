import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Price.module.css';
import ArrowImg from '../../images/arrow_black.svg';

function Price() {
  return (
    <section className={styles.price}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Стоимость участия</h2>
          <ul className={styles.price_list}>
            <li className={styles.price_item}>
              <p className={styles.price_text}>Базовый (для камчадал)</p>
              <p className={styles.price_cost}>79 000 руб</p>
            </li>
            <li className={styles.price_item}>
              <p className={styles.price_text}>Базовый + проживание</p>
              <p className={styles.price_cost}>99 000 руб</p>
            </li>
            <li className={styles.price_item}>
              <p className={styles.price_text}>Базовый + проживание + долина гейзеров</p>
              <p className={styles.price_cost}>179 000 руб</p>
            </li>
          </ul>
          <div className={styles.price_options}>
            <div className={styles.price_includ}>
              <p className={styles.includ_title}>В стоимость входит</p>
              <ul className={styles.includ_list}>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>встреча и проводы в аэропорту</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>питание: обеды во время экскурсий</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>услуги гида</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>
                    все транспортные услуги ( автобусы, джипы-вездеходы 4WD)
                  </p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>все указанные в программе экскурсии</p>
                </li>
              </ul>
            </div>
            <div className={styles.price_add}>
              <p className={styles.add_title}>За дополнительную плату</p>
              <ul className={styles.includ_list}>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>
                    вертолётная экскурсия в Долину Гейзеров и кальдеру Узона,
                    оплачивается в день вылета
                  </p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>дополнительные экскурсии и опции</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>размещение в гостинице</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>питание(кроме обедов во время экскурсий)</p>
                </li>
                <li className={styles.includ_item}>
                  <p className={styles.includ_text}>личные расходы</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.price_links}>
          <ul className={styles.links_list}>
            <li className={styles.links_item}>
              <Link to='/' className={styles.link}>
                <p className={styles.link_text}>Информация о бронях</p>
              </Link>
            </li>
            <li className={styles.links_item}>
              <Link to='/' className={styles.link}>
                <p className={styles.link_text}>Важная информация</p>
              </Link>
            </li>
            <li className={styles.links_item}>
              <Link to='/' className={styles.link}>
                <p className={styles.link_text}>Условия договора и возврата</p>
              </Link>
            </li>
            <li className={styles.links_item}>
              <Link to='/' className={`${styles.link} ${styles.link_arrow}`}>
                <p className={styles.link_text}>Отправить заявку</p>
                <img className={styles.link_arrow} src={ArrowImg} alt='Отправить заявку' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Price;
