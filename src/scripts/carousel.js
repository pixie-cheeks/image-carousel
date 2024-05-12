class ImageCarousel {
  constructor(reelElem, slideWidth) {
    this.reelElem = reelElem;
    this.slideWidth = slideWidth;
  }

  renderSlide(currentSlideNumber) {
    this.reelElem.setAttribute(
      'style',
      `left: ${this.slideWidth * (1 - currentSlideNumber)}px;`,
    );
  }
}

export default ImageCarousel;
