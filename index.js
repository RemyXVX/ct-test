import './global.css'
import header from './components/header';
import main from './components/main'
import footer from './components/footer'

const indexContainer = document.getElementById('app');
const headerContent = header();
const mainContent = main();
const footerContent = footer();

indexContainer.appendChild(headerContent);
indexContainer.appendChild(mainContent);
indexContainer.appendChild(footerContent);
