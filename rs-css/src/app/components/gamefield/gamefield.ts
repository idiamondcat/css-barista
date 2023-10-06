import './gamefield.scss';
import { Emitter } from '../../utils/emitter';
import { ILevel, Element, Params, States } from '../../utils/types';

export default class Gamefield {
  private clueCount: number;
  private currLevel: number;
  constructor(private lvl: ILevel, private lvls: ILevel[]) {
    this.lvl = lvl;
    this.lvls = lvls;
    this.clueCount = Number(localStorage.getItem(Params.clueCount)) || 0;
    this.currLevel = Number(localStorage.getItem(Params.currLevel)) || 1;
    Emitter.on('checkSelector', (lvl: ILevel): void => {
      this.lvl = lvl;
      this.loadGamefield();
    });
    Emitter.on('changeLevel', (lvl: ILevel): void => {
      this.lvl = lvl;
      this.loadGamefield();
    });
    Emitter.on(
      'reset',
      (lvl: ILevel, currLvl: number, clueCount: number, correctAnswers: number, lvls: ILevel[]): void => {
        this.lvl = lvl;
        this.currLevel = currLvl;
        this.clueCount = clueCount;
        this.lvls = lvls;
        this.loadGamefield();
      }
    );
    Emitter.on('init', (lvl: ILevel): void => {
      this.lvl = lvl;
      this.loadGamefield();
    });
  }
  public createGamefield(): HTMLElement {
    const gameFieldMain: Element<HTMLElement> = document.createElement('section');
    gameFieldMain.className = 'view content__view';
    gameFieldMain.innerHTML += `
      <h1 class="title view__title"></h1>
      <button class="view__help-btn">Help, I'm stuck!</button>
      <div class="view__gamefield">
        <div class="view__drinks-wrapper">
        </div>
        <div class="view__table"></div>
      </div>
    `;
    gameFieldMain.addEventListener('click', (e: Event) => {
      const { target } = e;
      if (target) {
        if ((target as HTMLElement).tagName === 'BUTTON') {
          if ((target as HTMLElement).classList.contains('view__help-btn')) {
            e.preventDefault();
            if (this.lvl.state === States.NotCompleted) {
              this.clueCount += 1;
              localStorage.setItem(Params.clueCount, String(this.clueCount));
              Emitter.emit('help', this.lvl.selector[0], this.clueCount);
            } else {
              console.log('This level is already completed: ' + this.lvl.state);
            }
          }
        }
      }
    });
    return gameFieldMain;
  }

  private loadGamefield(): void {
    const title: Element<HTMLElement> = document.querySelector('.title');
    const viewCont: Element<HTMLElement> = document.querySelector('.view__drinks-wrapper');
    if (title) title.innerText = this.lvl.title;
    if (viewCont) {
      viewCont.innerHTML = this.lvl.markup;
      const activeSelectors: NodeListOf<HTMLElement> = viewCont.querySelectorAll(`${this.lvl.selector[0]}`);
      if (activeSelectors) {
        activeSelectors.forEach((elem): void => {
          elem.classList.add('bounce-6');
        });
      }
    }
  }
}
