import React from 'react';
import styles from './DayOne.module.css';
import DayOneSlider from '../DayOneSlider/DayOneSlider';

function DayOne() {
  return (
    <section className={styles.day_one}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 1. </span>
            Прибытие. Встреча в аэропорту и размещение
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              С высоты птичьего полета вы увидите знаменитые «домашние»  вулканы – Корякский,
              Авачинский и Козельский. У выхода в аэропорту
              <span className={styles.select_paragraph}> вас встретят с табличкой «ДРИМ ТУР».</span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.select_paragraph}>По пути в гостиницу сбор средств </span>
              с членов группы, инструктаж по программе этого дня
              (бассейн с термальной водой, шашлык, знакомство с группой,
              алкоголь, фейерверк не раньше 20:00).
            </p>
            <p className={styles.paragraph}>
              После выезд (вид транспорта зависит от величины группы)
              на базу отдыха в курортный поселок Паратунка.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.select_paragraph}>Вечером</span>,
              после прибытия на Камчатку всех участников (если рейсы разные),
              <span className={styles.select_paragraph}> общая встреча</span>,
              проверка снаряжения, обсуждение программы завтрашнего дня.
            </p>
          </div>
        </div>
        <div className={styles.day_one_slider}>
          <DayOneSlider />
        </div>
      </div>
    </section >
  );
}

export default DayOne;
