import React from 'react';
import styles from './Main.module.css';
import Banner from '../Banner/Banner';

function Main() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}

export default Main;
