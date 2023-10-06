import { Element, ILevel, Params } from './utils/types';
import { Emitter } from './utils/emitter';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Gamefield from './components/gamefield/gamefield';
import Viewer from './components/viewer/viewer';
import Editor from './components/editor/editor';
import Footer from './components/footer/footer';
import levels from '../data/levels';

export default function init(): void {
  const currLevel: number = Number(localStorage.getItem(Params.currLevel)) || 1;
  let appLevels: string | null = localStorage.getItem(Params.levels) || null;
  let levelsArr: ILevel[];
  if (currLevel === 1) localStorage.setItem(Params.currLevel, JSON.stringify(currLevel));
  if (appLevels) {
    levelsArr = JSON.parse(appLevels);
    createView(levelsArr, currLevel);
  } else {
    localStorage.setItem(Params.levels, JSON.stringify(levels));
    appLevels = localStorage.getItem(Params.levels);
    if (appLevels) {
      levelsArr = JSON.parse(appLevels);
      createView(levelsArr, currLevel);
    }
  }
}

function createView(lvls: ILevel[], currentLvl: number): void {
  const body: Element<HTMLBodyElement> = document.querySelector('.app');
  const sidebarCont: Element<HTMLDivElement> = document.createElement('div');
  const gamefieldCont: Element<HTMLDivElement> = document.createElement('div');
  const viewerCont: Element<HTMLDivElement> = document.createElement('div');
  const leftPart: Element<HTMLDivElement> = document.createElement('div');
  const mainBlock: Element<HTMLElement> = document.createElement('main');
  const header: Element<HTMLElement> = new Header().createHeader();
  const footer: Element<HTMLElement> = new Footer().createFooter();
  const sidebar: Element<HTMLElement> = new SideBar(lvls[currentLvl - 1], lvls).createSideBar();
  const viewer: Element<HTMLElement> = new Viewer(lvls[currentLvl - 1], lvls).createViewer();
  const gamefield: Element<HTMLElement> = new Gamefield(lvls[currentLvl - 1], lvls).createGamefield();
  const editor: Element<HTMLElement> = new Editor(lvls[currentLvl - 1], lvls).createEditor();
  sidebarCont.className = 'app__wrapper';
  gamefieldCont.className = 'container';
  viewerCont.className = 'content__functionality-wrapper';
  leftPart.className = 'app__left-part';
  mainBlock.className = 'content app__content';
  viewerCont.append(editor, viewer);
  gamefieldCont.append(gamefield, viewerCont);
  sidebarCont.append(leftPart, sidebar);
  mainBlock.append(gamefieldCont);
  leftPart.append(header, mainBlock, footer);
  if (body) {
    body.append(sidebarCont);
  }
  Emitter.emit('init', lvls[currentLvl - 1], lvls);
}
