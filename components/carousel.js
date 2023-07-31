const carousel = () => {
  const carouselBox = document.createElement('div');
  carouselBox.className = 'bg-slate-600';

  const tabs = document.createElement('div');
  tabs.className = 'flex mx-24';

  const tab1 = document.createElement('div');
  tab1.textContent = 'MOUNTAIN 1';
  tab1.className = 'font-semibold cursor-pointer p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-200';
  tab1.addEventListener('click', () => {
    loadCarouselImage('./bt.tab1.png');
  });

  const tab2 = document.createElement('div');
  tab2.textContent = 'MOUNTAIN 2';
  tab2.className = 'font-semibold cursor-pointer p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-200';
  tab2.addEventListener('click', () => {
    loadCarouselImage('./bt.tab2.png');
  });

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);

  carouselBox.appendChild(tabs);

  const loadCarouselImage = (image) => {
    const container = document.createElement('div');
    container.className = 'relative'; 

    const carouselImage = document.createElement('img');
    carouselImage.src = image;
    carouselImage.className = 'w-full h-auto'; 

    const schedImage = document.createElement('img');
    schedImage.src = './sched.png';
    schedImage.className = 'absolute top-20 left-36 opacity-98 h-auto w-auto'; 

    const existingContainer = carouselBox.querySelector('.relative');
    if (existingContainer) {
      existingContainer.remove();
    }

    container.appendChild(carouselImage);
    container.appendChild(schedImage);
    carouselBox.appendChild(container);
  };

  loadCarouselImage('./bt.tab1.png');

  return carouselBox;
};

export default carousel;