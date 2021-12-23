import { getComments } from './apiRequest';

const getCommentsFromAPI = async (showID) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${showID}`);
  const userComments = await response.json();
  if (response.ok) {
    return userComments;
  } return [{ username: 'Jane', creation_date: '2021-12-22', comment: 'Hello!' }];
};

/**
 * Renders comment span, called in popUpInteraction
 * @param {Array} arr -> passed in from return of getCommentsFromAPI(), called in popUpInteraction
 * @returns {HTML} -> span element that will append to commentCont in appendComments()
 */

const renderComments = (arr) => {
  const commentHTML = arr.map((com) => {
    const { username, comment, creation_date: creationDate } = com;
    const commentHTML = document.createElement('span');
    commentHTML.textContent = `${creationDate} ${username}: ${comment}`;
    return commentHTML;
  });
  return commentHTML;
};

/**
 * Appends comments to HTML, called in popUpInteraction
 * @param {HTML} popUpWindow -> parent node (section)
 * @param {HTML} commentSpan -> child element
 */

function appendComments(popUpWindow, commentSpan) {
  const commentCont = popUpWindow.querySelector('.commentCont');
  commentSpan.forEach((com) => {
    commentCont.appendChild(com);
  });
}

async function updateCommentNum(name, popUpWindow) {
  const commentsNum = await getComments(name);
  const numComments = popUpWindow.querySelector('.numComments');
  numComments.innerText = `(${commentsNum})`;
}

export {
  renderComments, getCommentsFromAPI, appendComments, updateCommentNum,
};