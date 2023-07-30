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
    const accordionImage = document.createElement('img');
    accordionImage.src = image;

    const existingImage = accordionBox.querySelector('img');
    if (existingImage) {
      existingImage.remove();
    }

    accordionBox.appendChild(accordionImage);
  };

  const toggleAccordion = (image, tab) => {
    if (window.innerWidth <= 640) {
      const isTabOpen = tab.classList.contains('active');

      // Close previously opened tab
      const activeTab = accordionBox.querySelector('.active');
      if (activeTab && activeTab !== tab) {
        activeTab.classList.remove('active');
        loadAccordionImage('');
      }

      // Toggle the clicked tab
      if (!isTabOpen) {
        tab.classList.add('active');
        loadAccordionImage(image);
      } else {
        tab.classList.remove('active');
        loadAccordionImage('');
      }
    } else {
      // For larger screens, simply load the image without accordion behavior
      loadAccordionImage(image);
    }
  };

  // Load the first tab's content on initial render
  toggleAccordion('./bt.tab1.png', tab1);

  return accordionBox;
};

export default accordion;
