import React from 'react';
import styles from './Main.module.css';
import track from '../../images/track.svg';
import point from '../../images/point.svg';
import Banner from '../Banner/Banner';
import StartJourney from '../StartJourney/StartJourney';
import DayOne from '../DayOne/DayOne';
import DayTwo from '../DayTwo/DayTwo';
import Itinerary from '../Itinerary/Itinerary';

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.track}>
        <img className={styles.track_img} src={track} alt='track' />
      </div>
      <div className={styles.point1}>
        <img className={styles.point1_img} src={point} alt='track' />
      </div>
      <div className={styles.point2}>
        <img className={styles.point1_img} src={point} alt='track' />
      </div>
      <Banner />
      <StartJourney />
      <DayOne />
      <DayTwo />
      <Itinerary />
    </main>
  );
}

export default Main;
