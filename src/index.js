import './index.css';
import ImageCarousel from './scripts/carousel';

const myCarousel = new ImageCarousel(
  document.querySelector('.img-carousel__arrow--left'),
  document.querySelector('.img-carousel__arrow--right'),
  document.querySelector('.img-carousel__reel'),
  600,
);
