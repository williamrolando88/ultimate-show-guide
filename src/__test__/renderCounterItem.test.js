import { renderCounter } from '../modules/nodeCreation';

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

test('should change counter Items in DOM', () => {
  renderCounter(cardsData);
  expect(document.querySelector('#series-counter').textContent).toBe('2');
});
