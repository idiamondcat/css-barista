import './popup.scss';
import { Element } from '../../utils/types';
import reset from '../../utils/reset';

export default class Popup {
  constructor(private state: string, private clues?: number | null) {
    this.state = state;
    this.clues = clues;
  }
  public createPopup(): HTMLDivElement {
    const popup: HTMLDivElement = document.createElement('div');
    popup.className = 'popup-overlay';
    popup.innerHTML += `
      <section class="popup">
        <button class="popup__close-btn" type="button"></button>
        <div class="popup__wrapper">
            <h2 class="popup__title">${this.state === 'win' ? 'You Win!' : 'You Lose!'}</h2>
            <p class="popup__text">${this.clues ? 'You used ' + this.clues + ' hints' : ''}</p>
            <button class="popup__btn" type="button">try again</button>
        <div>
      </section>
      `;
    popup.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const { target } = e;
      if (target) {
        if ((target as HTMLElement).tagName === 'BUTTON') {
          if ((target as HTMLElement).classList.contains('popup__btn')) {
            reset();
            const overlay: Element<HTMLDivElement> = document.querySelector('.popup-overlay');
            if (overlay) overlay.remove();
          } else if ((target as HTMLElement).classList.contains('popup__close-btn')) {
            const overlay: Element<HTMLDivElement> = document.querySelector('.popup-overlay');
            if (overlay) overlay.remove();
          }
        }
      }
    });
    return popup;
  }
}
