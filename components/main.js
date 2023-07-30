import carousel from './carousel.js';
import accordion from './accordion.js';

const main = () => {
  const mainContainer = document.createElement('div');

  if (window.innerWidth <= 890) {
    const accordionElement = accordion();
    mainContainer.appendChild(accordionElement);
  } else {
    const carouselElement = carousel();
    mainContainer.appendChild(carouselElement);
  }

  return mainContainer;
};

export default main;
