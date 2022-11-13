import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Booking.module.css';
import facebook from '../../images/facebook_bl.svg';
import instagram from '../../images/instagram_bl.svg';
import vk from '../../images/vk_bl.svg';
import Form from '../Form/Form';

function Booking() {
  return (
    <section className={styles.booking}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Онлайн-заявка</h2>
          <ul className={styles.social}>
              <li>
                <a
                  href='https://ortem-t.github.io/russian-travel/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img className={styles.social_link} src={instagram} alt='instagram' />
                </a>
              </li>
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
                  <img className={styles.social_link} src={vk} alt='vk' />
                </a>
              </li>
            </ul>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Booking;
