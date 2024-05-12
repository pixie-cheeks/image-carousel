import ImageCarousel from './carousel';
import NavigationCircles from './navigation';

let currentSlideNumber = 1;
const SLIDE_WIDTH = 600;
const reelElement = document.querySelector('.img-carousel__reel');
const numberOfSlides =
  Number(getComputedStyle(reelElement).width.replace('px', '')) / SLIDE_WIDTH;

const myCarousel = new ImageCarousel(reelElement, SLIDE_WIDTH);
const navigator = new NavigationCircles(
  document.querySelector('.img-carousel__navigation'),
  'navigation__dot--active',
);

const renderApp = () => {
  myCarousel.renderSlide(currentSlideNumber);
  navigator.renderSelectedCircle(currentSlideNumber);
};

const showNextSlide = () => {
  if (currentSlideNumber === numberOfSlides) {
    currentSlideNumber = 1;
  } else {
    currentSlideNumber += 1;
  }
  renderApp();
};

const showPreviousSlide = () => {
  if (currentSlideNumber === 1) {
    currentSlideNumber = numberOfSlides;
  } else {
    currentSlideNumber -= 1;
  }
  renderApp();
};

const showSelectedSlide = (slideNumber) => {
  currentSlideNumber = slideNumber;
  renderApp();
};

renderApp();

export { showNextSlide, showPreviousSlide, showSelectedSlide };
