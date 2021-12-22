import './styles.css';
import './images/DummyLogoTV.png';
import movieList from './modules/variables.js';
import renderSeries from './modules/renderNodes.js';
import popUpInteraction from './popUp.js';

// *Don't move it!
function openPopupWindow(cardsContainer) {
  const commentButtons = cardsContainer.querySelectorAll('button');
  commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      popUpInteraction(
        movieList[index].url,
        movieList[index].name.toLowerCase().split(' ').join('-'),
      );
    });
  });
}

(async function main() {
  const cardsContainer = await renderSeries(movieList);
  openPopupWindow(cardsContainer);

  const article = cardsContainer.querySelectorAll('article');
  const likes = cardsContainer.querySelectorAll('i');
  likes.forEach((like, index) => {
    like.addEventListener('click', () => {
      id = article[index].id;
    });
  });
})();
