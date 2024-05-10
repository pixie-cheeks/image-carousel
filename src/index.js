import 'normalize.css';
import './style.css';

class ImageCarousel {
  constructor(previousSlideElem, nextSlideElem, reelElem, slideWidth) {
    this.previousSlideElem = previousSlideElem;
    this.nextSlideElem = nextSlideElem;
    this.numberOfSlides =
      Number(getComputedStyle(reelElem).width.replace('px', '')) / slideWidth;
    this.reelElem = reelElem;
    this.slideWidth = slideWidth;
    this.currentSlideNumber = 1;
  }

  init() {
    this.bound = {
      showPreviousSlide: this.showPreviousSlide.bind(this),
      showNextSlide: this.showNextSlide.bind(this),
    };

    this.previousSlideElem.addEventListener(
      'click',
      this.bound.showPreviousSlide,
    );
    this.nextSlideElem.addEventListener('click', this.bound.showNextSlide);
  }

  showPreviousSlide() {
    if (this.currentSlideNumber === 1) {
      this.currentSlideNumber = this.numberOfSlides;
    } else {
      this.currentSlideNumber -= 1;
    }

    this.render();
  }

  showNextSlide() {
    if (this.currentSlideNumber === this.numberOfSlides) {
      this.currentSlideNumber = 1;
    } else {
      this.currentSlideNumber += 1;
    }
    this.render();
  }

  render() {
    this.reelElem.setAttribute(
      'style',
      `left: ${this.slideWidth * (1 - this.currentSlideNumber)}px;`,
    );
  }
}

const myCarousel = new ImageCarousel(
  document.querySelector('.img-carousel__arrow--left'),
  document.querySelector('.img-carousel__arrow--right'),
  document.querySelector('.img-carousel__reel'),
  600,
);

myCarousel.init();
