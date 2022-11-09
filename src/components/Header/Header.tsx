import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
// import Navigation from '../Navigation/Navigation';
// import BurgerNav from '../BurgerNav/BurgerNav'
// import burgerMenu from '../../images/burger.svg';
// import burgerMenuMain from '../../images/burger_main.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo} />
        <nav className='nav'>
          <Link to='/' className={styles.link}>
            Расписание тура
          </Link>
          <Link to='/' className={styles.link}>
            Как записаться
          </Link>
          <Link to='/' className={styles.link}>
            Команда
          </Link>
          <Link to='/feedback' className={styles.feedback_link}>
            Забронировать
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
