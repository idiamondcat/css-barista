import { Emitter } from '../../utils/emitter';
import { Element, ILevel, Params, States } from '../../utils/types';

export default class LevelItem {
  constructor(private idx: number, private lvl: ILevel, private state: string) {
    this.idx = idx;
    this.state = state;
    this.lvl = lvl;
    Emitter.on('init', (lvl: ILevel) => {
      this.lvl = lvl;
      this.loadItem();
    });
    Emitter.on('checkSelector', (lvl: ILevel, prevlvl: ILevel, state: string): void => {
      this.lvl = lvl;
      if (this.idx === prevlvl.id) {
        const prevElem: Element<HTMLElement> = document.getElementById(`level_${this.idx}`);
        this.state = state;
        if (prevElem) {
          const indicator: Element<HTMLSpanElement> = prevElem.querySelector('.level__indicator');
          if (indicator) {
            if (this.state === States.Clue) {
              indicator.classList.add('clue');
            } else if (this.state === States.Completed) {
              indicator.classList.add('correct');
            }
          }
        }
      }
      this.loadItem();
    });
    Emitter.on('reset', (lvl: ILevel): void => {
      this.lvl = lvl;
      this.state = this.lvl.state;
      this.loadItem();
    });
  }
  public createLevelItem(): HTMLLIElement {
    const item: Element<HTMLLIElement> = document.createElement('li');
    item.classList.add('level__item');
    item.id = `level_${this.idx}`;
    item.innerHTML = `
      <span class="level__num">${this.idx}</span>
      <span class="level__indicator"></span>
    `;
    item.addEventListener('click', (e: Event): void => {
      e.preventDefault();
      const { target } = e;
      if (target) {
        const sidebar: Element<HTMLElement> = document.querySelector('.level');
        let thisItemLvl: ILevel | undefined;
        let levelsArr: ILevel[];
        const appLevels: string | null = localStorage.getItem(Params.levels) || null;
        if (appLevels) {
          levelsArr = JSON.parse(appLevels);
          thisItemLvl = levelsArr.find((elem) => elem.id === this.idx);
          this.loadItem(target as HTMLElement);
          localStorage.setItem(Params.currLevel, String(this.idx));
          if (thisItemLvl) {
            this.lvl = thisItemLvl;
            Emitter.emit('changeLevel', this.lvl);
          }
          if (sidebar) sidebar.classList.remove('level--active');
        }
      }
    });
    return item;
  }

  private loadItem(target?: HTMLElement): void {
    const currentLevel: number = Number(localStorage.getItem(Params.currLevel)) || 1;
    const currentLevelElem: Element<HTMLElement> = target || document.getElementById(`level_${this.idx}`);
    const prevCurrActiveELem: Element<HTMLElement> = document.querySelector('.level__item.active');
    if (currentLevelElem) {
      const indicator: Element<HTMLSpanElement> = currentLevelElem.querySelector('.level__indicator');
      if (indicator) {
        if (this.state === States.Clue) {
          indicator.classList.add('clue');
        } else if (this.state === States.Completed) {
          indicator.classList.add('correct');
        } else {
          indicator.classList.remove('clue');
          indicator.classList.remove('correct');
        }
      }
      if (!target) {
        if (currentLevel === this.idx) {
          if (prevCurrActiveELem) prevCurrActiveELem.classList.remove('active');
          currentLevelElem.classList.add('active');
        }
      } else {
        if (prevCurrActiveELem) prevCurrActiveELem.classList.remove('active');
        currentLevelElem.classList.add('active');
      }
    }
  }
}
