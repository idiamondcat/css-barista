import './viewer.scss';
import { Emitter } from '../../utils/emitter';
import { ILevel, Element } from '../../utils/types';

export function createViewer(): Node {
  const viewerField: Element<Node> = document.createElement('section');
  (viewerField as HTMLElement).className = 'viewer content__viewer';
  (viewerField as HTMLElement).innerHTML = `
    <header class="viewer__header">
        <span>HTML Viewer</span>
        <span>table.html</span>
    </header>
    <div class="workspace viewer__workspace">
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
        <p class="workspace__code"></p>
    </div>
    `;
  Emitter.on('checkSelector', (lvl: ILevel): void => {
    loadViewer(lvl);
  });
  Emitter.on('reset', (lvl: ILevel): void => {
    loadViewer(lvl);
  });
  Emitter.on('changeLevel', (lvl: ILevel): void => {
    loadViewer(lvl);
  });
  return viewerField;
}
export function loadViewer(level: ILevel): void {
  const htmlCode: Element<HTMLElement> = document.querySelector('.workspace__code');
  if (htmlCode) htmlCode.innerText = level.markup;
}
