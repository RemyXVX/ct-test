import carousel from './carousel.js';
import accordion from './accordion.js';

const main = () => {
  const mainContainer = document.createElement('div');

  const updateMainContent = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 800) {
      const accordionElement = accordion();
      mainContainer.innerHTML = '';
      mainContainer.appendChild(accordionElement);
    } else {
      const carouselElement = carousel();
      mainContainer.innerHTML = '';
      mainContainer.appendChild(carouselElement);
    }
  };

  updateMainContent();

  window.addEventListener('resize', () => {
    updateMainContent();
  });

  return mainContainer;
};

export default main;
