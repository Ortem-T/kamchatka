import React from 'react';
import styles from './Days.module.css';
import birds from '../../images/birds.png';
import clouds from '../../images/clouds.png';
// import DayOneSlider from '../DayOneSlider/DayOneSlider';

function Days() {
  return (
    <section className={styles.days}>
      <div className={styles.container}>
        <div className={styles.day_four}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 4. </span>
            Экскурсия к подножию Авачинского вулкана
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Инструктаж по поведению группы в горах. Проверка снаряжения.
              Выезд на автомашине на вулканическое плато (высота 900 м)
              к подножию Авачинского вулкана (2 часа).
            </p>
            <p className={styles.paragraph}>
              Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию.
              Находится в седловине между Корякским и Авачинским вулканами,
              относительная высота 100-150 м, ширина - около 100 м и по длине она
              протягивается на 500 м., состоит из трех сросшихся блоков.
            </p>
            <p className={styles.paragraph}>
              Обед.  Поездка в Паратунку с купанием.
            </p>
            <p className={styles.paragraph}>
              Продолжительность – 8 часов. Трансфер в гостиницу.
            </p>
          </div>
        </div>
        <div className={styles.day_five}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 5. </span>
            Морская прогулка к острову Старичков
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Инструктаж по поведению группы при передвижении на плавсредствах,
              приему таблеток от морской болезни.
              <span className={styles.select_paragraph}> вас встретят с табличкой «ДРИМ ТУР».</span>
            </p>
            <p className={styles.paragraph}>
              Выезд на причал.  Морская прогулка по Авачинской бухте.
              Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы
              и Авачинского залива. Маршрут пролегает мимо бухты Тихая, острова
              Бабушкин камень, мыса Станицкого, камней «Три брата».
              Увлекательная возможность донной рыбалки на терпуга, ленка,
              камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.
            </p>
            <p className={styles.paragraph}>
              Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов.
              Трансфер в гостиницу.
            </p>
            <p className={styles.paragraph}>
              Продолжительность 6 часов.
            </p>
          </div>
        </div>
        <div className={styles.day_six}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 6. </span>
            Берег Тихого океана, экскурсия по городу
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Поездка на берег Тихого океана, в район Халактырского пляжа.
              Прогулка. Обед в городе. Обзорная экскурсия по
              г. Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок.
            </p>
            <p className={styles.paragraph}>
              Продолжительность -5 часов.  Трансфер в гостиницу.
            </p>
            <div className={styles.services}>
              <p className={styles.services_title}>Дополнительные услуги</p>
              <div className={styles.services_content}>
                <p className={styles.services_name}>Серфинг</p>
                <p className={styles.services_description}>
                  Прыжки с высоты над водопадом. Записываться заранее.
                </p>
              </div>
              <div className={styles.services_content}>
                <p className={styles.services_name}>SUP борды</p>
                <p className={styles.services_description}>
                  Прыжки с высоты над водопадом. Записываться заранее.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.birds}>
          <img className={styles.birds_img} src={birds} alt='birds' />
        </div>
        {/* <div className={styles.day_one_slider}>
          <DayOneSlider />
        </div> */}
      </div>
      <div className={styles.clouds}>
        <img className={styles.clouds_img} src={clouds} alt='clouds' />
      </div>
    </section >
  );
}

export default Days;
