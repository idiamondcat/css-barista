import './popup.scss';
import { Emitter } from '../../utils/emitter';
import { Element } from '../../utils/types';

export function createPopup(): Node {
  const popup: Node = document.createElement('div');
  if (popup) {
    (popup as HTMLDivElement).className = 'popup-overlay popup-overlay--off';
    (popup as HTMLDivElement).innerHTML += `
       <section class="popup">
        <button class="popup__close-btn"></button>
        <div class="popup__wrapper">
            <h2 class="popup__title"></h2>
            <p class="popup__text"></p>
            <button class="popup__btn">try again</button>
        <div>
       </section>
       `;
  }
  Emitter.on('win', (state: string): void => {
    changeState(state);
  });
  Emitter.on('lose', (state: string, clue: number): void => {
    changeState(state, clue);
  });
  Emitter.on('reset', (): void => {
    const overlay: Element<HTMLDivElement> = document.querySelector('.popup-overlay');
    if (overlay && !overlay.classList.contains('popup-overlay--off')) overlay.classList.add('popup-overlay--off');
  });
  return popup;
}
function changeState(state: string, clue?: number): void {
  const overlay: Element<HTMLDivElement> = document.querySelector('.popup-overlay');
  const title: Element<HTMLHeadingElement> = document.querySelector('.popup__title');
  const text: Element<HTMLParagraphElement> = document.querySelector('.popup__text');
  if (overlay) overlay.classList.remove('popup-overlay--off');
  if (state) {
    if (state === 'win') {
      if (title && text) {
        title.textContent = 'You Win!';
        text.textContent = "You didn't use any hints";
      }
    } else {
      if (title && text) {
        title.textContent = 'You Lose!';
        if (clue) {
          text.textContent = `You used ${clue} hints`;
        }
      }
    }
  }
}
