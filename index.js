import './global.css'
import header from './components/header';
import main from './components/main'

const indexContainer = document.getElementById('app');
const headerContent = header();
const mainContent = main();

indexContainer.appendChild(headerContent);
indexContainer.appendChild(mainContent);
