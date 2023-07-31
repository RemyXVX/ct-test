const accordion = () => {
  const accordionBox = document.createElement('div');
  accordionBox.className = 'bg-slate-600';

  const tab1 = document.createElement('div');
  tab1.textContent = 'MOUNTAIN 1';
  tab1.className = 'font-semibold cursor-pointer p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-200';
  tab1.addEventListener('click', () => {
    toggleAccordion('./bt.tab1.png', tab1);
  });

  const tab2 = document.createElement('div');
  tab2.textContent = 'MOUNTAIN 2';
  tab2.className = 'font-semibold cursor-pointer p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-200';
  tab2.addEventListener('click', () => {
    toggleAccordion('./bt.tab2.png', tab2);
  });

  accordionBox.appendChild(tab1);
  accordionBox.appendChild(tab2);

  const loadAccordionImage = (image) => {
    const container = document.createElement('div');
    container.className = 'relative'; 

    const accordionImage = document.createElement('img');
    accordionImage.src = image;
    accordionImage.className = 'w-full'; 

    const schedImage = document.createElement('img');
    schedImage.src = './sched.png';
    schedImage.className = 'scale-75 absolute top-0 left-0 h-full w-full object-fit'; 

    const existingContainer = accordionBox.querySelector('.relative');
    if (existingContainer) {
      existingContainer.remove();
    }

    container.appendChild(accordionImage);
    container.appendChild(schedImage);
    accordionBox.appendChild(container);
  };

  const toggleAccordion = (image, tab) => {
    if (window.innerWidth <= 800) {
      const isTabOpen = tab.classList.contains('active');

      const activeTab = accordionBox.querySelector('.active');
      if (activeTab && activeTab !== tab) {
        activeTab.classList.remove('active');
        loadAccordionImage('');
      }

      if (!isTabOpen) {
        tab.classList.add('active');
        loadAccordionImage(image);
      } else {
        tab.classList.remove('active');
        loadAccordionImage('');
      }
    } else {
      loadAccordionImage(image);
    }
  };

  toggleAccordion('./bt.tab1.png', tab1);

  return accordionBox;
};

export default accordion;
