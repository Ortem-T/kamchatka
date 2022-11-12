import React from 'react';
import styles from './Main.module.css';
import Banner from '../Banner/Banner';
import StartJourney from '../StartJourney/StartJourney';

function Main() {
  return (
    <main className={styles.main}>
      <Banner />
      <StartJourney />
    </main>
  );
}

export default Main;
