import './styles.css';
import './images/DummyLogoTV.png';
import movieList from './modules/variables.js';
import renderSeries from './modules/renderNodes.js';
import popUpInteraction from './popUp.js';
import { submitLike } from './modules/likesFetch.js';

// *Don't move it!
function openPopupWindow(cardsContainer) {
  const commentButtons = cardsContainer.querySelectorAll('button');
  commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      popUpInteraction(
        movieList[index].url,
        movieList[index].name
          .toLowerCase()
          .split(/[^A-Za-z0-9]/)
          .join('-'),
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
    like.addEventListener('click', async () => {
      await submitLike(article[index].id);
      main();
    });
  });
}());
