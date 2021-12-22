const cardStructure = (serie) => ({
  tag: 'article',
  id: serie.id,
  class: ['serie', 'flex', 'flex-col'],
  children: [
    {
      tag: 'img',
      class: [],
      attribute: {
        src: serie.cover,
        alt: serie.name,
      },
    },
    {
      tag: 'div',
      class: [],
      children: [
        {
          tag: 'h2',
          class: [],
          textContent: serie.name,
        },
        {
          tag: 'div',
          class: ['flex', 'justify-between', 'items-baseline'],
          children: [
            {
              tag: 'i',
              class: ['fas', 'fa-heart', 'text-red-600'],
            },
            {
              tag: 'p',
              class: [],
              textContent: `${serie.likes} likes`,
            },
          ],
        },
      ],
    },
    {
      tag: 'button',
      class: ['bg-stone-300'],
      textContent: 'Comment',
    },
  ],
});

const cardNode = (element) => {
  const node = document.createElement(element.tag);
  if (element.id) {
    node.id = element.id;
  }
  if (element.class.length > 0) {
    node.classList.add(...element.class);
  }
  if (element.textContent) {
    node.textContent = element.textContent;
  }
  if (element.attribute) {
    Object.keys(element.attribute).forEach((key) => {
      node.setAttribute(key, element.attribute[key]);
    });
  }
  if (element.children) {
    element.children.forEach((children) => {
      node.appendChild(cardNode(children));
    });
  }
  return node;
};

export default function appendCards(cardsData) {
  const cardContainer = document.querySelector('#tv-series-container');
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  cardsData.forEach((data) => {
    cardContainer.appendChild(cardNode(cardStructure(data)));
  });
  return cardContainer;
}
