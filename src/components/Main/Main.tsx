import React from 'react';
import styles from './Main.module.css';
import track from '../../images/track.svg';
import point from '../../images/point.svg';
import Banner from '../Banner/Banner';
import StartJourney from '../StartJourney/StartJourney';
import DayOne from '../DayOne/DayOne';
import DayTwo from '../DayTwo/DayTwo';
import Itinerary from '../Itinerary/Itinerary';
import DayThree from '../DayThree/DayThree';
import Days from '../Days/Days';
import DaysMore from '../DaysMore/DaysMore';
import Price from '../Price/Price';
import Booking from '../Booking/Booking';

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.track}>
        <img className={styles.track_img} src={track} alt='track' />
      </div>
      <div className={styles.point1}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point2}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point3}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point4}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point5}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point6}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point7}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <div className={styles.point8}>
        <img className={styles.point1_img} src={point} alt='point' />
      </div>
      <Banner />
      <StartJourney />
      <DayOne />
      <DayTwo />
      <Itinerary />
      <DayThree />
      <Days />
      <DaysMore />
      <Price />
      <Booking />
    </main>
  );
}

export default Main;
