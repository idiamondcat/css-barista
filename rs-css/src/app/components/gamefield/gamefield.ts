import './gamefield.scss';
import { Emitter } from '../../utils/emitter';
import { ILevel, Element } from '../../utils/types';

export function createGamefield(): Node {
  const gameFieldMain: Element<Node> = document.createElement('section');
  if (gameFieldMain) {
    (gameFieldMain as HTMLElement).className = 'view content__view';
    (gameFieldMain as HTMLElement).innerHTML += `
            <h1 class="title view__title"></h1>
            <button class="view__help-btn">Help, I'm stuck!</button>
            <div class="view__gamefield">
                <div class="view__drinks-wrapper">
                </div>
                <div class="view__table"></div>
            </div>
        `;
    Emitter.on('checkSelector', (lvl: ILevel): void => {
      loadGamefield(lvl);
    });
    Emitter.on('changeLevel', (lvl: ILevel): void => {
      loadGamefield(lvl);
    });
    Emitter.on('reset', (lvl: ILevel): void => {
      loadGamefield(lvl);
    });
  }
  return gameFieldMain;
}
export function loadGamefield(level: ILevel): void {
  const title: Element<HTMLElement> = document.querySelector('.title');
  const viewCont: Element<HTMLElement> = document.querySelector('.view__drinks-wrapper');
  if (title) title.innerText = level.title;
  if (viewCont) {
    viewCont.innerHTML = level.markup;
    const activeSelectors: NodeListOf<HTMLElement> = viewCont.querySelectorAll(`${level.selector[0]}`);
    if (activeSelectors) {
      activeSelectors.forEach((elem): void => {
        elem.classList.add('bounce-6');
      });
    }
  }
}
