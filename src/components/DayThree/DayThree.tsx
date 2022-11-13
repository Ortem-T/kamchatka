import React from 'react';
import styles from './DayThree.module.css';
// import vach from '../../images/vach.png';
// import DayOneSlider from '../DayOneSlider/DayOneSlider';

function DayThree() {
  return (
    <section className={styles.day_three}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.select_day}>День 3. </span>
            Горные цирки и водопады вулкана Вачкажец
          </h2>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Вачкажец–горный массив и его окрестности, одно из красивейших мест
              первозданной камчатской природы. Небольшой пеший переход
              не успеет Вас утомить. А в награду за труд в конце пути открывается
              великолепный вид на горное озеро в чаше кратера старого потухшего вулкана,
              обрамленное пиками старых, невысоких гор.
            </p>
            <p className={styles.paragraph}>
              Выезд из гостиницы и переезд около 2 часов.
              Пеший переход около 5 км.в одну сторону к горным циркам вулкана Вачкажец,
              осмотр водопада. Обед.  Отдых. По прибытию в машину чай с шоколадом!
              Обратный переход по тому же пути.
            </p>
            <p className={styles.paragraph}>
              Продолжительность: 8 часов. Трансфер в гостиницу.
            </p>
          </div>
        </div>
        {/* <div className={styles.day_one_slider}>
          <DayOneSlider />
        </div> */}
      </div>
    </section >
  );
}

export default DayThree;
