import { useRef } from 'react';
import Slider from 'react-slick';
import styles from './DayOneSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidesData from '../../utils/slides/banner';

function DayOneSlider() {
  const customeSlider = useRef<Slider>(null);

  const settings = {
    className: `${styles.custom}`,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
  };

  function next() {
    customeSlider.current?.slickNext();
  }

  function prev() {
    customeSlider.current?.slickPrev();
  }

  return (
    <div className={styles.banner_slider}>
      <Slider
        {...settings } ref={customeSlider}
      >
        {slidesData.map((slide) => <div className={styles.slick_slide} key={slide.id}>
          <img className={styles.slick_slide_image} src={slide.src} />
          <h3 className={styles.slick_title}>{slide.title}</h3>
        </div>)}
      </Slider>
      <div className={styles.slick_slide_buttons}>
        <button className={`${styles.slick_slide_button} ${styles.button_prev}`} onClick={prev}>
        </button>
        <button className={`${styles.slick_slide_button} ${styles.button_next}`} onClick={next}>
        </button>
      </div>
    </div>
  );
}

export default DayOneSlider;
