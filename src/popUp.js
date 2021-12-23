import { getAPI, postComments } from './apiRequest.js';
import {
  getCommentsFromAPI,
  renderComments,
  appendComments,
} from './comments.js';
import closePopUP from './interactions.js';
import { createHTML, openPopUp } from './render.js';

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

  const username = popUpWindow.querySelector('#username');
  const message = popUpWindow.querySelector('#message');
  const commentBtn = popUpWindow.querySelector('.commentBtn');
  commentBtn.addEventListener('click', async () => {
    await postComments(name, username, message);
    username.value = '';
    message.value = '';
    const lastComment = await getCommentsFromAPI(name);
    const newCommentSpan = renderComments(lastComment.splice(-1));
    appendComments(popUpWindow, newCommentSpan);
  });
};

export default popUpInteraction;
