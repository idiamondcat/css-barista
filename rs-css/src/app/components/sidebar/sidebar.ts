import './sidebar.scss';
import { Emitter } from '../../utils/emitter';
import { ILevel, Element, Params, States } from '../../utils/types';
import levels from '../../../data/levels';
import LevelItem from './level';
import reset from '../../utils/reset';

export default class SideBar {
  private currLevel: number;
  private clueCount: number;
  private correctAnswers: number;
  constructor(private lvl: ILevel, private lvls: ILevel[]) {
    this.lvl = lvl;
    this.lvls = lvls;
    this.currLevel = Number(localStorage.getItem(Params.currLevel)) || 1;
    this.clueCount = Number(localStorage.getItem(Params.clueCount)) || 0;
    this.correctAnswers = Number(localStorage.getItem(Params.correctanswers)) || 0;
    Emitter.on(
      'reset',
      (lvl: ILevel, currLvl: number, clueCount: number, correctAnswers: number, lvls: ILevel[]): void => {
        this.lvl = lvl;
        this.currLevel = currLvl;
        this.clueCount = clueCount;
        this.correctAnswers = correctAnswers;
        this.lvls = lvls;
      }
    );
  }

  public createSideBar(): HTMLElement {
    const sidebar: Element<HTMLElement> = document.createElement('aside');
    const levelList: HTMLUListElement = document.createElement('ul');
    const resetBtn: HTMLButtonElement = document.createElement('button');
    sidebar.className = 'level';
    levelList.className = 'level__list';
    resetBtn.className = 'level__reset-btn';
    resetBtn.innerText = 'Reset Progress';
    this.lvls.forEach((lvl, idx) => {
      const level = new LevelItem(idx + 1, lvl, lvl.state);
      levelList.append(level.createLevelItem());
    });
    sidebar.append(levelList, resetBtn);
    sidebar.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const { target } = e;
      if (target) {
        if ((target as HTMLElement).tagName === 'BUTTON') {
          if ((target as HTMLElement).classList.contains('level__reset-btn')) {
            reset();
          }
        }
      }
    });
    return sidebar;
  }
}
