import { useRef } from 'react';
import Slider from 'react-slick';
import './MySlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../images/baner_slide1.jpg';
import slide2 from '../../images/baner_slide2.jpg';
import slide3 from '../../images/baner_slide3.jpg';
import slide4 from '../../images/baner_slide4.jpg';

function MySlider() {
  const customeSlider = useRef<Slider>(null);

  const settings = {
    className: 'center',
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
  };

  interface Slide {
    id: number;
    title: string;
    src: string;
  }

  const slidesData: Slide[] = [
    {
      id: 1,
      title: 'Халактырский пляж',
      src: slide1,
    }, {
      id: 2,
      title: 'Ключевская сопка',
      src: slide2,
    }, {
      id: 3,
      title: 'Здесь начинается Россия',
      src: slide3,
    }, {
      id: 4,
      title: 'Долина Гейзеров',
      src: slide4,
    },
  ];

  function next() {
    customeSlider.current?.slickNext();
  }

  function prev() {
    customeSlider.current?.slickPrev();
  }

  return (
    <div className="banner-slider">
      <Slider
        {...settings } ref={customeSlider}
      >
        {slidesData.map((slide) => <div className="slick-slide" key={slide.id}>
          <img className="slick-slide-image" src={slide.src} />
          <h3 className="slick-title">{slide.title}</h3>
        </div>)}
      </Slider>
      <div className="slick-slide-buttons">
        <button className="slick-slide-button button-prev" onClick={prev}>
        </button>
        <button className="slick-slide-button button-next" onClick={next}>
        </button>
      </div>
    </div>
  );
}

export default MySlider;
