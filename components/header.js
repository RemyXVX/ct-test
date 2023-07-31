const header = () => {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'flex items-center justify-center flex-col pb-6 md:mx-36 md:mt-4';

  const wrapContent = document.createElement('div');
  wrapContent.className = 'flex items-center space-y-4 md:space-y-0 md:space-x-4';

  const imageElement = document.createElement('img');
  imageElement.src = './hist2.png';
  imageElement.className = 'w-32 mt-4 md:w-64';

  const textElement = document.createElement('p');
  textElement.textContent =
    'Mount climbs encapsulate the essence of human exploration, resilience, and connection with nature. From the pursuit of personal achievement to the awe-inspiring beauty of untouched landscapes, mountaineering offers an experience unlike any other. As we continue to explore these majestic peaks, let us remember to approach them with respect, responsibility, and a deep appreciation for the wonders of our planets';
  textElement.className = 'text-center md:text-xs text-sm'; 

  const updateHeaderContent = () => {
    if (window.innerWidth <= 800) {
      const scrollBox = document.createElement('div');
      scrollBox.className = 'md:text-xl max-h-32 overflow-y-scroll';

      scrollBox.appendChild(textElement);
      wrapContent.innerHTML = '';
      wrapContent.appendChild(imageElement);
      wrapContent.appendChild(scrollBox);
    } else {
      wrapContent.innerHTML = '';
      wrapContent.appendChild(imageElement);
      wrapContent.appendChild(textElement);
    }
  };

  updateHeaderContent();

  window.addEventListener('resize', () => {
    updateHeaderContent();
  });

  headerContainer.appendChild(wrapContent);

  return headerContainer;
}

export default header;
