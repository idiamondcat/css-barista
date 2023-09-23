import levels from '../data/levels';
import { Element, ILevel, Params } from './utils/types';
import { Emitter } from './utils/emitter';
import { createGamefield, loadGamefield } from './components/gamefield/gamefield';
import { createEditor } from './components/editor/editor';
import { createViewer, loadViewer } from './components/viewer/viewer';
import { createSidebar, loadSidebar } from './components/sidebar/sidebar';
import { createFooter } from './components/footer/footer';
import { createPopup } from './components/popup/popup';
export default class App {
  public currLevel: number;
  public clueStates: string | null;
  public isClue: boolean;
  public clueCount: number;
  constructor() {
    this.currLevel = Number(localStorage.getItem(Params.currLevel)) || 0;
    this.clueStates = localStorage.getItem(Params.clueStates);
    this.isClue = false;
    this.clueCount = Number(localStorage.getItem(Params.clueCount)) || 0;
    this.createView();
  }
  private createView(): void {
    const body: Element<HTMLBodyElement> = document.querySelector('.app');
    const gamefieldCont: Element<HTMLDivElement> = document.querySelector('.container');
    const header: Element<HTMLHeadingElement> = document.querySelector('.header');
    const sidebarCont: Element<HTMLDivElement> = document.querySelector('.app__wrapper');
    const viewerCont: Element<HTMLDivElement> = document.querySelector('.content__functionality-wrapper');
    const footerCont: Element<HTMLDivElement> = document.querySelector('.left-part');
    const viewer: Element<Node> = createViewer();
    const gamefield: Element<Node> = createGamefield();
    const editor: Element<Node> = createEditor();
    const sidebar: Element<Node> = createSidebar();
    const footer: Element<Node> = createFooter();
    const popup: Element<Node> = createPopup();
    if (viewerCont) {
      viewerCont.append(editor, viewer);
      loadViewer(levels[this.currLevel]);
      if (gamefieldCont) {
        gamefieldCont.insertBefore(gamefield, viewerCont);
        loadGamefield(levels[this.currLevel]);
      }
    }
    if (sidebarCont) {
      sidebarCont.append(sidebar);
      loadSidebar(levels[this.currLevel]);
    }
    if (footerCont) {
      footerCont.append(footer);
    }
    if (body) {
      body.append(popup);
    }
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    const enter: Element<HTMLButtonElement> = document.querySelector('.editor__enter-btn');
    if (enter) {
      enter.addEventListener('click', (e: Event): void => {
        e.preventDefault();
        this.checkSelector();
      });
      if (input) {
        input.addEventListener('keyup', (evt: KeyboardEvent): void => {
          if (evt.code === 'Enter') enter.click();
        });
      }
    }
    const helpBtn: Element<HTMLButtonElement> = document.querySelector('.view__help-btn');
    if (helpBtn) {
      helpBtn.addEventListener('click', (e: Event): void => {
        e.preventDefault();
        this.isClue = true;
        this.clueCount += 1;
        localStorage.setItem(Params.clueCount, String(this.currLevel));
        Emitter.emit('help', levels[this.currLevel]);
      });
    }
    const resetBtn: Element<HTMLButtonElement> = document.querySelector('.level__reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', (e: Event): void => {
        e.preventDefault();
        this.reset();
      });
    }
    const popupBtn: Element<HTMLButtonElement> = document.querySelector('.popup__btn');
    if (popupBtn) {
      popupBtn.addEventListener('click', (e: Event): void => {
        e.preventDefault();
        this.reset();
      });
    }
    const closeBtn: Element<HTMLButtonElement> = document.querySelector('.popup__close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e: Event): void => {
        e.preventDefault();
        const overlay: Element<HTMLDivElement> = document.querySelector('.popup-overlay');
        if (overlay && !overlay.classList.contains('popup-overlay--off')) overlay.classList.add('popup-overlay--off');
      });
    }
    if (header) {
      header.addEventListener('click', (e: Event) => {
        const { target } = e;
        if (target) {
          if (
            (target as HTMLElement).tagName === 'BUTTON' &&
            (target as HTMLElement).classList.contains('header__burger-btn')
          ) {
            if ((sidebar as HTMLDivElement).classList.contains('level--active')) {
              (sidebar as HTMLDivElement).classList.remove('level--active');
            } else {
              (sidebar as HTMLDivElement).classList.add('level--active');
            }
          }
        }
      });
    }
    Emitter.on('changeLevel', (lvl: ILevel): void => {
      const i: number = levels.findIndex((el): boolean => el.title === lvl.title);
      this.currLevel = i;
      localStorage.setItem(Params.currLevel, String(this.currLevel));
    });
  }
  private checkSelector(): void {
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    if (input) {
      const inputVal: string = input.value.split(/\s+/).join('');
      if (inputVal !== '' && levels[this.currLevel].selector.includes(inputVal)) {
        if (this.currLevel < levels.length - 1) {
          this.currLevel += 1;
          localStorage.setItem(Params.currLevel, String(this.currLevel));
          Emitter.emit('checkSelector', levels[this.currLevel], this.currLevel - 1, this.isClue);
          input.value = '';
          this.isClue = false;
        } else {
          localStorage.setItem(Params.currLevel, String(this.currLevel));
          Emitter.emit('checkSelector', levels[this.currLevel], this.currLevel - 1, this.isClue);
          if (this.clueCount === 0) {
            Emitter.emit('win', 'win');
          } else {
            Emitter.emit('lose', 'lose', this.clueCount);
          }
        }
      } else {
        const codeWrapper: Element<HTMLDivElement> = document.querySelector('.content__functionality-wrapper');
        if (codeWrapper) {
          codeWrapper.classList.add('shake-horizontal');
          setTimeout((): void => {
            codeWrapper.classList.remove('shake-horizontal');
          }, 800);
        }
      }
    }
  }
  private reset(): void {
    localStorage.clear();
    this.currLevel = 0;
    this.clueCount = 0;
    this.clueStates = JSON.stringify(Array(10).fill('unknown'));
    localStorage.setItem(Params.clueStates, this.clueStates);
    Emitter.emit('reset', levels[this.currLevel]);
  }
}
