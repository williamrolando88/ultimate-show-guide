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
          class: [
            'text-3xl',
            'font-rockwell',
            'text-center',
            'font-semibold',
            'my-4',
          ],
          textContent: serie.name,
        },
        {
          tag: 'div',
          class: ['flex', 'items-stretch', 'gap-4'],
          children: [
            {
              tag: 'button',
              class: [
                'grow',
                'bg-stone-300',
                'border',
                'border-stone-300',
                'rounded-md',
                'font-rockwell',
                'text-xl',
                'hover:bg-stone-100',
                'hover:shadow-md',
              ],
              textContent: 'Comment',
            },
            {
              tag: 'div',
              class: [
                'flex',
                'flex-col',
                'items-center',
                'border',
                'rounded-md',
                'p-2',
              ],
              children: [
                {
                  tag: 'i',
                  class: [
                    'fas',
                    'fa-heart',
                    'text-red-600',
                    'cursor-pointer',
                    'text-2xl',
                    'hover:scale-125',
                  ],
                },
                {
                  tag: 'p',
                  class: ['font-bold'],
                  textContent: `${serie.likes} likes`,
                },
              ],
            },
          ],
        },
      ],
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

export function renderCounter(array) {
  document.querySelector('#series-counter').textContent = array.length;
}

export function appendCards(cardsData) {
  const cardContainer = document.getElementById('tv-series-container');
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  cardsData.forEach((data) => {
    cardContainer.appendChild(cardNode(cardStructure(data)));
  });
  renderCounter(cardsData);
  return cardContainer;
}
