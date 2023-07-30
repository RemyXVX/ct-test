const main = () => {
  const carouselBox = document.createElement('div');
  carouselBox.className = 'bg-slate-600';

  const tabs = document.createElement('div');
  tabs.className = 'flex';

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
    const carouselImage = document.createElement('img');
    carouselImage.src = image;

    const existingImage = carouselBox.querySelector('img');
    if (existingImage) {
      existingImage.remove();
    }

    carouselBox.appendChild(carouselImage);
  };

  loadCarouselImage('./bt.tab1.png');

  return carouselBox;
};

export default main;