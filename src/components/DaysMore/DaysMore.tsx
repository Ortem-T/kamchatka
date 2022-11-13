import React from 'react';
import styles from './DaysMore.module.css';
import geyser from '../../images/geyser.png';
// import DayOneSlider from '../DayOneSlider/DayOneSlider';

function DaysMore() {
  return (
    <section className={styles.days_more}>
      <div className={styles.container}>
        <div className={styles.day_seven}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 7. </span>
            Вертолетная экскурсия
            в Долину Гейзеров и кальдеру
            вулкана Узон / свободный день
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ»,
              крупнейшим оператором вертолётных туров на Камчатке.
              Выезд в аэропорт «Витязь –Аэро». К вашим услугам –
              современный аэропортовый комплекс, включающий в себя удобный зал ожидания,
              кафетерий, сувенирный магазин.
            </p>
            <p className={styles.paragraph}>
              Перелёт до Долины гейзеров занимает 1 час 10 минут.
              По пути, при благоприятных условиях, вы осмотрите два действующих вулкана
              – Карымский и Малый Семячик из окон вертолёта.
            </p>
            <p className={styles.paragraph}>
              Перелёт и посадка в кальдере Узон.
              Кальдера образовалась в результате обрушения стенок древнего вулкана
              около 40 тысяч лет назад, на её дне очень ярко проявляется
              гидротермальная деятельность. Сотни столбов пара вырываются
              здесь из жёлтых фумарольных полей. Осмотр термальных полей.
            </p>
          </div>
          <div className={styles.text_further}>
            <p className={styles.paragraph}>
              Перелёт и посадка в Налычевской долине. Купание в горячих источниках.
              Здесь же вам предложат обед - горячее, чай и камчатский морс. Трансфер в гостиницу.
            </p>
            <div className={styles.services}>
              <p className={styles.services_title}>Дополнительные услуги</p>
              <div className={styles.services_content}>
                <p className={styles.services_name}>Роуп Джамп</p>
                <p className={styles.services_description}>
                  Прыжки с высоты над водопадом. Записываться заранее.
                </p>
              </div>
              <div className={styles.services_content}>
                <p className={styles.services_name}>Ледянки</p>
                <p className={styles.services_description}>
                  Прыжки с высоты над водопадом. Записываться заранее.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.day_eight}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 8. </span>
            Отъезд с Камчатки. Трансфер в аэропорт
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Заезд на рынок, прощальное посещение «медведей»,
              фото на память. Возвращайтесь следующим летом!
            </p>
          </div>
        </div>
        {/* <div className={styles.day_one_slider}>
          <DayOneSlider />
        </div> */}
      </div>
      <div className={styles.geyser}>
        <img className={styles.geyser_img} src={geyser} alt='geyser' />
      </div>
    </section >
  );
}

export default DaysMore;
