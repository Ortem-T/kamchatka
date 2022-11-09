import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './Banner.module.css';
import ArrowImg from '../../images/arrow_baner.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'

function Banner() {

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Мечты о далекой Камчатке - близко</h1>
            <div className={styles.date}>
              <p className={styles.date_text}>23.06 - 04.07  DREAM TOUR</p>
            </div>
            <h2 className={styles.subtitle}>Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь.</h2>
            <Link to='/' className={styles.link}>
              <p className={styles.link_text}>Расписание тура</p>
              <img className={styles.link_arrow} src={ArrowImg} alt='Ссылка на расписание' />
            </Link>
            <ul className={styles.social}>
              <li>
                <a
                  href='https://ortem-t.github.io/russian-travel/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img className={styles.social_link} src={facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a
                  href='https://ortem-t.github.io/russian-travel/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img className={styles.social_link} src={instagram} alt='instagram' />
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;