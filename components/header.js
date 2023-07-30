const header = () => {
  const headerContainer = document.createElement('div')
  headerContainer.className = 'flex items-center justify-center flex-col pb-6';

  const wrapContent = document.createElement('div');
  wrapContent.className = 'flex items-center space-x-4';

  const imageElement = document.createElement('img');
  imageElement.src = './hist2.png';
  imageElement.className = 'w-64';

  const textElement = document.createElement('p');
  textElement.textContent =
  'Mount climbs encapsulate the essence of human exploration, resilience, and connection with nature. From the pursuit of personal achievement to the awe-inspiring beauty of untouched landscapes, mountaineering offers an experience unlike any other. As we continue to explore these majestic peaks, let us remember to approach them with respect, responsibility, and a deep appreciation for the wonders of our planets';
  textElement.className = 'text-center';

  wrapContent.appendChild(imageElement);
  wrapContent.appendChild(textElement);
  headerContainer.appendChild(wrapContent);

  return headerContainer;
}

export default header;