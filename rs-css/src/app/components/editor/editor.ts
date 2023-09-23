import './editor.scss';
import { Element, ILevel } from '../../utils/types';
import { Emitter } from '../../utils/emitter';

export function createEditor(): Node {
  const editorField: Element<Node> = document.createElement('section');
  if (editorField) {
    (editorField as HTMLElement).className = 'editor content__editor';
    (editorField as HTMLElement).innerHTML += `
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
  }
  Emitter.on('help', (lvl: ILevel): void => {
    help(lvl);
  });
  Emitter.on('reset', (): void => {
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    if (input) {
      input.value = '';
    }
  });
  Emitter.on('changeLevel', (): void => {
    const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
    if (input) {
      input.value = '';
    }
  });
  return editorField;
}
function help(level: ILevel): void {
  const text: string = level.selector[0];
  const input: Element<HTMLInputElement> = document.querySelector('.editor__entry-field');
  if (input) {
    input.value = '';
    let i: number = 0;
    A();
    function A(): void {
      if (i < text.length) {
        if (input) {
          input.value += text.charAt(i);
          i++;
          setTimeout(A, 100);
        }
      }
    }
    input.focus();
  }
}
