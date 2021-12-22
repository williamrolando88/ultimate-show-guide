import getAPI from './apiRequest';
import closePopUP from './interactions';
import { createHTML, openPopUp } from './render';

getAPI;
createHTML;
openPopUp;
closePopUP;

const renderPopUp = async (url) => {
  const seriesInfo = await getAPI(url);
  const popUp = createHTML(seriesInfo);
  const renderedHTML = openPopUp(popUp);
  return renderedHTML;
};

const popUpInteraction = async (url, name) => {
  const popUpWindow = await renderPopUp(url);
  closePopUP(popUpWindow);
  console.log(name);
};

export default popUpInteraction;
