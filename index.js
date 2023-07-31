import './global.css'
import header from './components/header';
import main from './components/main';
import footer from './components/footer';

const indexContainer = () => {
  const container = document.getElementById('app');
  const headerContent = header();
  const mainContent = main();
  const footerContent = footer();

  container.style.backgroundColor = 'white'; // Set the background color to pink

  container.appendChild(headerContent);
  container.appendChild(mainContent);
  container.appendChild(footerContent);
}

indexContainer();
