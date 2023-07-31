const footer = () => {
  const footerContainer = document.createElement('div');
  footerContainer.className = 'bg-slate-600 flex items-center py-2 md:py-4 md:px-36';
  const logo = document.createElement('img');
  logo.src = './logo-dark.png';
  logo.className = 'ml-4 md:ml-8';

  const crText = document.createElement('p');
  crText.textContent = 'COPYRIGHT 2016. ALL RIGHTS RESERVED.';
  crText.className = 'mr-4 md:mr-8 text-slate-500 italic text-xs font-bold'; // Adjust font size and styles

  const space = document.createElement('div');
  space.className = 'flex-1';

  footerContainer.appendChild(logo);
  footerContainer.appendChild(space);
  footerContainer.appendChild(crText);

  return footerContainer;
}

export default footer;