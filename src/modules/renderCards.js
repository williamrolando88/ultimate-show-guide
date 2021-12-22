function appendCards(nodes) {
  const cardContainer = document.querySelector('#tv-series-container');
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  nodes.forEach((node) => {
    cardContainer.appendChild(node);
  });
  return cardContainer;
}
