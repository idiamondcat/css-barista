import './header.scss';
import { Element } from '../../utils/types';

export default class Header {
  public createHeader(): HTMLElement {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
      <div class="header__container">
        <div class="header__logo-wrapper">
          <img class="logo header__logo" src="./img/logo.svg" alt="Logo">
          <div class="header__text-logo">
            <span class="header__large-text">CSS</span>
            <span class="header__small-text">barista</span>
          </div>
        </div>
        <button class="header__burger-btn header__burger-btn--hidden">
          <span class="header__btn-line"></span>
        </button>
      </div>
      `;
    header.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const { target } = e;
      const sidebar: Element<HTMLDivElement> | null = document.querySelector('.level');
      if (target) {
        if (
          (target as HTMLElement).tagName === 'BUTTON' &&
          (target as HTMLElement).classList.contains('header__burger-btn')
        ) {
          if (sidebar) {
            if (sidebar.classList.contains('level--active')) {
              sidebar.classList.remove('level--active');
            } else {
              sidebar.classList.add('level--active');
            }
          }
        }
      }
    });
    return header;
  }
}
