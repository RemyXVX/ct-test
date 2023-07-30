const footer = () => {
  const footerContainer = document.createElement('div');
  footerContainer.className = 'bg-slate-600 flex items-center';

  const logo = document.createElement('img');
  logo.src = './logo-dark.png';
  logo.className = 'ml-8';

  const crText = document.createElement('p');
  crText.textContent = 'COPYRIGHT 2016. ALL RIGHTS RESERVED.';
  crText.className = 'text-slate-500 italic text-xs mr-8 font-bold';

  const space = document.createElement('div');
  space.className = 'flex-1';

  footerContainer.appendChild(logo);
  footerContainer.appendChild(space);
  footerContainer.appendChild(crText);

  return footerContainer;
}

export default footer;