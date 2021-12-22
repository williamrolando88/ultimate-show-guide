import getAPI from './apiRequest';
import { getCommentsFromAPI, renderComments, appendComments } from './comments';
import closePopUP from './interactions';
import { createHTML, openPopUp } from './render';

// getAPI;
// createHTML;
// openPopUp;
// closePopUP;

const renderPopUp = async (url) => {
  const seriesInfo = await getAPI(url);
  const popUp = createHTML(seriesInfo);
  const renderedHTML = openPopUp(popUp);
  return renderedHTML;
};

/**
 * This function is called in openPopupWindow at index.js
 * @param {string} url -> take url of movie at selected index
 * @param {string} name -> take name of movie at selected index
 */

const popUpInteraction = async (url, name) => {
  const popUpWindow = await renderPopUp(url);
  closePopUP(popUpWindow);
  const commentInfo = await getCommentsFromAPI(name);
  const commentSpan = renderComments(commentInfo);
  appendComments(popUpWindow, commentSpan);
};

export default popUpInteraction;
