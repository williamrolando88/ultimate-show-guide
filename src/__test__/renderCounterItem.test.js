const cardsData = [
  {
    name: 'mock-name-1',
    cover: 'mock-cover-1',
    id: 'mock-id-1',
  },
  {
    name: 'mock-name-2',
    cover: 'mock-cover-2',
    id: 'mock-id-2',
  },
];

document.body.innerHTML = `
  <div id="series-counter"></div>
`;

// const seriesCounter = document.createElement('div');
// seriesCounter.id = 'series-counter';
// seriesCounter.textContent = 'Current favourite series: (0)';

function renderCounter(array) {
  document.querySelector(
    '#series-counter',
  ).textContent = `Current favourite series: (${array.length})`;
}

test('should change counter Items in DOM', () => {
  renderCounter(cardsData);
  expect(document.querySelector('#series-counter').textContent).toBe(
    'Current favourite series: (2)',
  );
});

test('should return not null', () => {
  const element = document.querySelector('div');
  expect(element).not.toBeNull();
});
