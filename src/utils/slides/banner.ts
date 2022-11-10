import slideBanner1 from '../../images/banner/baner_slide1.jpg';
import slideBanner2 from '../../images/banner/baner_slide2.jpg';
import slideBanner3 from '../../images/banner/baner_slide3.jpg';
import slideBanner4 from '../../images/banner/baner_slide4.jpg';

interface Slide {
  id: number;
  title: string;
  src: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Халактырский пляж',
    src: slideBanner1,
  }, {
    id: 2,
    title: 'Ключевская сопка',
    src: slideBanner2,
  }, {
    id: 3,
    title: 'Здесь начинается Россия',
    src: slideBanner3,
  }, {
    id: 4,
    title: 'Долина Гейзеров',
    src: slideBanner4,
  },
];

export default slidesData;
