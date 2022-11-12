import React from 'react';
import styles from './Main.module.css';
import Banner from '../Banner/Banner';
import StartJourney from '../StartJourney/StartJourney';
import DayOne from '../DayOne/DayOne';

function Main() {
  return (
    <main className={styles.main}>
      <Banner />
      <StartJourney />
      <DayOne />
    </main>
  );
}

export default Main;
