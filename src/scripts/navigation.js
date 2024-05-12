class NavigationCircles {
  constructor(containerElem, activeClass) {
    this.circles = Array.from(containerElem.children);
    this.activeClass = activeClass;
    this.currentCircle = null;
  }

  renderSelectedCircle(slideNumber) {
    if (this.currentCircle) {
      this.currentCircle.classList.remove(this.activeClass);
    }

    this.currentCircle = this.circles[slideNumber - 1];

    this.currentCircle.classList.add(this.activeClass);
  }
}

export default NavigationCircles;
