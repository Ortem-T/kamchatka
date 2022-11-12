import React from 'react';
import styles from './Itinerary.module.css';
import image1 from '../../images/itinerary/image1.jpg';
import image2 from '../../images/itinerary/image2.jpg';
import image3 from '../../images/itinerary/image3.jpg';
import image4 from '../../images/itinerary/image4.jpg';

function Itinerary() {
  return (
    <section className={styles.itinerary}>
      <div className={styles.container}>
        <h2 className={styles.title}>На протяжении маршрута вас ожидает:</h2>
        <ul className={styles.itinerary_list}>
          <li className={styles.itinerary_item}>
            <img className={styles.itinerary_img} src={image1} alt='image1' />
            <div className={styles.itinerary_text}>
              <p className={styles.subtitle}>Аудиосопровождение</p>
              <p className={styles.text}>
                Новый способ увидеть и услышать, то место, где вы находитесь.
                С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.
              </p>
            </div>
          </li>
          <li className={styles.itinerary_item}>
            <img className={styles.itinerary_img} src={image2} alt='image2' />
            <div className={styles.itinerary_text}>
              <p className={styles.subtitle}>Разнообразное питание</p>
              <p className={styles.text}>
                Каждый обед мы готовим с большой любовью. Кормим вас традиционными
                камчатскими блюдами. Еда - залог хорошего отдыха!
              </p>
            </div>
          </li>
          <li className={styles.itinerary_item}>
            <img className={styles.itinerary_img} src={image3} alt='image3' />
            <div className={styles.itinerary_text}>
              <p className={styles.subtitle}>Безопасность на маршруте</p>
              <p className={styles.text}>
                Наша команда проводит инструктаж, рассказывает как правильно себя вести,
                как избежать опасных ситуаций.
              </p>
            </div>
          </li>
          <li className={styles.itinerary_item}>
            <img className={styles.itinerary_img} src={image4} alt='image4' />
            <div className={styles.itinerary_text}>
              <p className={styles.subtitle}>Потрясающие фото</p>
              <p className={styles.text}>
                Можете не переживать, что не успели сделать фото. Наш фотограф
                успевает везде и за всеми. У вас будут самые лучшие фото!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section >
  );
}

export default Itinerary;
