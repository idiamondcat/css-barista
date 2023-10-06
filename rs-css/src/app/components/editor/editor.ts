import './editor.scss';
import { Element, ILevel, Params, States } from '../../utils/types';
import { Emitter } from '../../utils/emitter';
import Popup from '../popup/popup';

export default class Editor {
  private isClue: boolean;
  private correctAnswers: number;
  private clueCount: number;
  private currLevel: number;
  constructor(private lvl: ILevel, private lvls: ILevel[]) {
    this.lvl = lvl;
    this.lvls = lvls;
    this.currLevel = Number(localStorage.getItem(Params.currLevel)) || 1;
    this.isClue = false;
    this.clueCount = Number(localStorage.getItem(Params.clueCount)) || 0;
    this.correctAnswers = Number(localStorage.getItem(Params.correctanswers)) || 0;
    Emitter.on('help', (clue: string, clueCount: number): void => {
      this.clueCount = clueCount;
      this.help(clue);
    });
    Emitter.on(
      'reset',
      (lvl: ILevel, currLvl: number, clueCount: number, correctAnswers: number, lvls: ILevel[]): void => {
        const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
        this.isClue = false;
        this.lvl = lvl;
        this.currLevel = currLvl;
        this.clueCount = clueCount;
        this.correctAnswers = correctAnswers;
        this.lvls = lvls;
        if (input) {
          input.value = '';
        }
      }
    );
    Emitter.on('changeLevel', (lvl: ILevel): void => {
      this.lvl = lvl;
      this.currLevel = lvl.id;
      const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
      if (input) {
        input.value = '';
      }
    });
  }

  public createEditor(): HTMLElement {
    const editorField: Element<HTMLElement> = document.createElement('section');
    editorField.className = 'editor content__editor';
    editorField.innerHTML = `
    <header class="editor__header">
      <span>CSS Editor</span>
      <span>style.css</span>
    </header>
    <div class="workspace editor__workspace">
        <ul class="workspace__line-list">
            <li class="workspace__line-item">1</li>
            <li class="workspace__line-item">2</li>
            <li class="workspace__line-item">3</li>
            <li class="workspace__line-item">4</li>
            <li class="workspace__line-item">5</li>
            <li class="workspace__line-item">6</li>
            <li class="workspace__line-item">7</li>
            <li class="workspace__line-item">8</li>
            <li class="workspace__line-item">9</li>
            <li class="workspace__line-item">10</li>
            <li class="workspace__line-item">11</li>
            <li class="workspace__line-item">12</li>
            <li class="workspace__line-item">13</li>
            <li class="workspace__line-item">14</li>
            <li class="workspace__line-item">15</li>
            <li class="workspace__line-item">16</li>
            <li class="workspace__line-item">17</li>
            <li class="workspace__line-item">18</li>
            <li class="workspace__line-item">19</li>
            <li class="workspace__line-item">20</li>
        </ul>
        <label for="entry-field" class="editor__wrapper">
            <input id="entry-field" class="editor__entry-field" type="text" placeholder="Type a selector">
            <button type="button" class="editor__enter-btn">enter</button>
        </label>
    </div>
    `;
    editorField.addEventListener('click', (e: Event): void => {
      const { target } = e;
      if ((target as HTMLElement).tagName === 'BUTTON') {
        if ((target as HTMLElement).classList.contains('editor__enter-btn')) {
          e.preventDefault();
          this.newCheckSelector();
        }
      }
    });
    editorField.addEventListener('keyup', (e: KeyboardEvent): void => {
      if (e.code === 'Enter') {
        const editorBtn: Element<HTMLButtonElement> | null = document.querySelector('.editor__enter-btn');
        if (editorBtn) editorBtn.click();
      }
    });
    return editorField;
  }

  private help(clue: string): void {
    const text: string = clue;
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    if (input) {
      input.value = '';
      let i: number = 0;
      const spellText: () => void = (): void => {
        if (i < text.length) {
          if (input) {
            input.value += text.charAt(i);
            i++;
            setTimeout(spellText, 100);
          }
        }
      };
      spellText();
      this.isClue = true;
      input.focus();
    }
  }

  private newCheckSelector(): void {
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    let state: States;
    let prevLvl: ILevel;
    let notCompletedLvl: ILevel | undefined;
    if (input) {
      const inputVal: string = input.value.split(/\s+/).join('');
      if (inputVal !== '' && this.lvl.selector.includes(inputVal)) {
        this.correctAnswers += 1;
        localStorage.setItem(Params.correctanswers, String(this.correctAnswers));
        if (this.correctAnswers < this.lvls.length) {
          prevLvl = this.lvl;
          if (this.lvls[this.currLevel - 1].state === States.NotCompleted) {
            if (this.isClue === false) {
              state = States.Completed;
            } else {
              state = States.Clue;
            }
            this.lvls[this.currLevel - 1].state = state;
            localStorage.setItem(Params.levels, JSON.stringify(this.lvls));
            notCompletedLvl = this.lvls.find((elem) => elem.state === States.NotCompleted);
            if (notCompletedLvl) {
              this.currLevel = notCompletedLvl.id;
              this.lvl = this.lvls[this.currLevel - 1];
              localStorage.setItem(Params.currLevel, String(this.currLevel));
            }
            Emitter.emit('checkSelector', this.lvl, prevLvl, state);
          } else {
            notCompletedLvl = this.lvls.find((elem) => elem.state === States.NotCompleted);
            if (notCompletedLvl) {
              this.currLevel = notCompletedLvl.id;
              this.lvl = this.lvls[this.currLevel - 1];
              localStorage.setItem(Params.currLevel, String(this.currLevel));
            }
          }
          input.value = '';
          this.isClue = false;
        } else {
          if (this.clueCount === 0) {
            this.openPopup('win');
          } else {
            this.openPopup('lose', this.clueCount);
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

  private openPopup(res: string, clues?: number | null): void {
    const body: Element<HTMLBodyElement> = document.querySelector('.app');
    let popup: Element<HTMLElement>;
    if (clues) {
      popup = new Popup(res, clues).createPopup();
    } else {
      popup = new Popup(res).createPopup();
    }
    if (body) body.append(popup);
  }
}
