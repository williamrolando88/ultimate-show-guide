const getCommentsFromAPI = async (showID) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${showID}`);
  const userComments = await response.json();
  return userComments;
};

const renderComments = (arr) => {
  const commentHTML = arr.map((com) => {
    const { username, comment, creation_date: creationDate } = com;
    const commentHTML = document.createElement('span');
    commentHTML.textContent = `${creationDate} ${username}: ${comment}`;
    return commentHTML;
  });
  return commentHTML;
};

function appendComments(popUpWindow, commentSpan) {
  const commentCont = popUpWindow.querySelector('.commentCont');
  commentSpan.forEach((com) => {
    commentCont.appendChild(com);
  });
}

export { renderComments, getCommentsFromAPI, appendComments };