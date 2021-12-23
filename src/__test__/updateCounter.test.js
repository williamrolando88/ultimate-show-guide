import { updateCounter } from "../comments";

document.body.innerHTML = `
  <div class="popUP">
  <div class="numComments"></div>
  </div>
`;

const popUpWindow = document.querySelector('.popUP');

test('if the counter updates', () => {
    updateCounter(popUpWindow, 2);
    expect(popUpWindow.querySelector('.numComments').textContent).toBe('(2)');
})