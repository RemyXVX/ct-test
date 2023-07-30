import './global.css'
import header from './components/header';

const indexContainer = document.getElementById('app');
const headerContent = header()

indexContainer.appendChild(headerContent);
