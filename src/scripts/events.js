import { showNextSlide, showPreviousSlide, showSelectedSlide } from './app';

const eventRegistry = [];
const registerListener = (selector, callback) => {
  eventRegistry.unshift({ selector, callback });
};

const eventDelegator = (event) => {
  const matchedListener = eventRegistry.find((listener) =>
    event.target.matches(listener.selector),
  );

  matchedListener.callback(event);
};

registerListener('*', () => {});

document
  .querySelector('.img-carousel')
  .addEventListener('click', eventDelegator);

registerListener('.img-carousel__arrow--left', showPreviousSlide);
registerListener('.img-carousel__arrow--right', showNextSlide);
registerListener('.navigation__dot', (e) => {
  showSelectedSlide(Number(e.target.dataset.number));
});
