const cardStructure = (serie) => ({
  tag: 'article',
  class: ['serie', 'flex', 'flex-col'],
  children: [
    {
      tag: 'img',
      class: [],
      attribute: {
        src: serie.cover,
        alt: serie.alt,
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
              textContent: '2 likes',
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

export { cardStructure, cardNode, appendCards };
