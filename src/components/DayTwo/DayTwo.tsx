import React from 'react';
import styles from './DayTwo.module.css';
import vilyuchinsky from '../../images/vilyuchinsky.png';
// import DayOneSlider from '../DayOneSlider/DayOneSlider';

function DayTwo() {
  return (
    <section className={styles.day_two}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 2. </span>
            Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Инструктаж перед поездкой (передвижение и поведение группы в лесу,
              общение с медведями, форма одежды), снаряжение,
              (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).
            </p>
            <p className={styles.paragraph}>
              Сбор участников на Роуп Джамп для прыжков с высоты
              над водопадом. Заранее решаем кто прыгает.
            </p>
          </div>
          <div className={styles.text_further}>
            <p className={styles.paragraph}>
              Выезд из отеля в 10.00. Переезд в верховья реки Паратунка
              к подножию вулкана Вилючинский. Обзорная пешеходная экскурсия
              к водопаду Вилючинский. Термос с чаем, шоколад. Возвращение назад.
            </p>
            <p className={styles.paragraph}>
              Обед. Купание в Верхне-Паратунских термальных источниках,
              расположенных на склоне сопки Горячая.
            </p>
            <p className={styles.paragraph}>
              Продолжительность – 6-8 часов. Трансфер в гостиницу.
            </p>
          </div>
        </div>
        <div className={styles.vilyuchinsky}>
          <img className={styles.vilyuchinsky_img} src={vilyuchinsky} alt='vilyuchinsky' />
        </div>
        {/* <div className={styles.day_one_slider}>
          <DayOneSlider />
        </div> */}
      </div>
    </section >
  );
}

export default DayTwo;
