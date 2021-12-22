import './styles.css';
import './images/DummyLogoTV.png';
// import { commentPopUp } from './popUp.js'
// import { openPopUp } from './openPopUs';
import getAPI from './apiRequest';
import { createHTML, openPopUp } from './render';
import closePopUP from './interactions';

// const commentBtn = document.querySelector('button').addEventListener('click', commentPopUp);

// const commentBtn = document.querySelector('button').addEventListener('click', openPopUp);
const url = 'https://api.tvmaze.com/lookup/shows?imdb=tt10919420';

const renderPopUp = async () => {
  const seriesInfo = await getAPI(url);
  const popUp = createHTML(seriesInfo);
  const renderedHTML = openPopUp(popUp);
  return renderedHTML;
};

const popUpInteraction = async () => {
  const popUpWindow = await renderPopUp();
  closePopUP(popUpWindow);
};

popUpInteraction();
