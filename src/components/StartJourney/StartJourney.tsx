import React from 'react';
import styles from './StartJourney.module.css';
import complexity from '../../images/complexity.svg';
import calendar from '../../images/calendar.svg';
import clock from '../../images/clock.svg';
import hotels from '../../images/hotels.svg';
import wing from '../../images/pngwing.png';

function StartJourney() {
  return (
    <section className={styles.start_journey}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>Путешествие на край света начинается</h2>
          <p className={styles.subtitle}>
            Ваша мечта осуществилась, вы приняли решение,
            и вам предстоит путешествие на край света.
          </p>
          <p className={styles.text}>
            Этот маршрут лучший вариант для тех, кто хочет ощутить,
            как живёт самая молодая земля нашей планеты, многое увидеть,
            испытать на себе и полюбить, увезти целый рюкзак незабываемых чувств и впечатлений.
            Каждый день вы будете выезжать на радиальные маршруты,
            а проживать в комфортабельных двухместных номерах.
          </p>
          <ul className={styles.options}>
            <li className={styles.options_item}>
              <img className={styles.options_img} src={complexity} alt='complexity' />
              <p className={styles.options_title}>Сложность</p>
              <p className={styles.options_text}>Для семейного отдыха</p>
            </li>
            <li className={styles.options_item}>
              <img className={styles.options_img} src={calendar} alt='complexity' />
              <p className={styles.options_title}>Период</p>
              <p className={styles.options_text}>Июль - сентябрь</p>
            </li>
            <li className={styles.options_item}>
              <img className={styles.options_img} src={clock} alt='complexity' />
              <p className={styles.options_title}>Длительность</p>
              <p className={styles.options_text}>7 дней / 6 ночей</p>
            </li>
            <li className={styles.options_item}>
              <img className={styles.options_img} src={hotels} alt='complexity' />
              <p className={styles.options_title}>Проживание</p>
              <p className={styles.options_text}>Отель, без палаток</p>
            </li>
          </ul>
          <div className={styles.quote}>
            <h2 className={styles.quote_title}>
              Камчатка – земля великолепной заснеженной природы,
              действующих вулканов и диких мест, где ещё не ступала нога человека.
            </h2>
            <q className={styles.quote_subtitle}>
              Когда мы подлетали к Камчатке, у меня захватило дух от увиденного.
              Это за гранью реальности. Невероятно!
            </q>
            <cite className={styles.quote_author}>
              Артем, <a className={styles.quote_author_link}
                href='https://t.me/fits454'
                target='_blank'
                rel='noopener noreferrer'>
                @fits454
              </a>
            </cite>
          </div>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Камчатка</p>
          </div>
          <div className={styles.wing}>
          <img className={styles.wing_img} src={wing} alt='wing' />
          </div>
        </div>
      </div>
    </section >
  );
}

export default StartJourney;
