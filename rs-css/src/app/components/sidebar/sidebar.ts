import './sidebar.scss';
import { Emitter } from '../../utils/emitter';
import { ILevel, Element, Params } from '../../utils/types';
import levels from '../../../data/levels';

export function createSidebar(): Node {
  const sidebar: Node = document.createElement('aside');
  (sidebar as HTMLElement).className = 'level';
  (sidebar as HTMLElement).innerHTML = `
        <ul class="level__list">
            <li class="level__item">
                <span class="level__num">1</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">2</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">3</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">4</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">5</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">6</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">7</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">8</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">9</span><span class="level__indicator"></span>
            </li>
            <li class="level__item">
                <span class="level__num">10</span><span class="level__indicator"></span>
            </li>
        </ul>
        <button class="level__reset-btn">Reset Progress</button>
    `;
  Emitter.on('checkSelector', (lvl: ILevel, currLvl: number, isCLue: boolean): void => {
    checkClue(isCLue, currLvl);
    loadSidebar(lvl);
  });
  Emitter.on('reset', (lvl: ILevel): void => {
    const levelItems: NodeListOf<HTMLElement> = document.querySelectorAll('.level__item');
    const sidebar: Element<HTMLElement> = document.querySelector('.level');
    if (levelItems) {
      levelItems.forEach((elem: HTMLElement): void => {
        const indicator: Element<HTMLSpanElement> = elem.querySelector('.level__indicator');
        if (indicator) {
          indicator.classList.remove('clue');
          indicator.classList.remove('correct');
        }
      });
    }
    sidebar?.classList.remove('level--active');
    localStorage.removeItem(Params.clueStates);
    loadSidebar(lvl);
  });
  return sidebar;
}
export function loadSidebar(lvl: ILevel): void {
  const states: string | null = localStorage.getItem(Params.clueStates);
  const states2: string[] = states !== null ? JSON.parse(states) : Array(10).fill('unknown');
  const i: number = levels.findIndex((el): boolean => el.title === lvl.title);
  const levelItems: NodeListOf<HTMLElement> = document.querySelectorAll('.level__item');
  if (i !== -1) {
    if (levelItems) {
      levelItems.forEach((elem: HTMLElement, idx: number): void => {
        const indicator: Element<HTMLSpanElement> = elem.querySelector('.level__indicator');
        if (states2) {
          if (states2.length !== 0) {
            if (states2[idx] === 'clue') {
              indicator?.classList.add('clue');
            } else if (states2[idx] === 'correct') {
              indicator?.classList.add('correct');
            } else {
            }
          }
        }
        if (levelItems[idx].classList.contains('active')) levelItems[idx].classList.remove('active');
        if (idx === i) {
          levelItems[idx].classList.add('active');
        }
        elem.addEventListener('click', (e: Event): void => {
          const currActiveELem: Element<HTMLElement> = document.querySelector('.level__item.active');
          const sidebar: Element<HTMLElement> = document.querySelector('.level');
          e.preventDefault();
          Emitter.emit('changeLevel', levels[idx]);
          currActiveELem?.classList.remove('active');
          elem.classList.add('active');
          sidebar?.classList.remove('level--active');
        });
      });
    }
  }
}
function checkClue(clue: boolean, lvl: number): void {
  const stata: string | null = localStorage.getItem(Params.clueStates);
  const stata2: string[] = stata !== null ? JSON.parse(stata) : Array(10).fill('unknown');
  const activeItem: Element<HTMLElement> = document.querySelector('.level__item.active');
  if (activeItem) {
    const indicator: Element<HTMLSpanElement> = activeItem.querySelector('.level__indicator');
    if (indicator) {
      if (clue === true) {
        indicator.classList.add('clue');
        stata2[lvl] = 'clue';
        localStorage.setItem(Params.clueStates, JSON.stringify(stata2));
      } else if (clue === false) {
        indicator.classList.add('correct');
        stata2[lvl] = 'correct';
        localStorage.setItem(Params.clueStates, JSON.stringify(stata2));
      }
    }
  }
}
