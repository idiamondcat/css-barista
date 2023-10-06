import { Emitter } from './emitter';
import { ILevel, Params, States } from './types';

export default function reset(): void {
  const lvls: string | null = localStorage.getItem(Params.levels);
  const currLevel: number = 1;
  const clueCount: number = 0;
  const correctAnswers: number = 0;
  localStorage.clear();
  localStorage.setItem(Params.currLevel, JSON.stringify(1));
  localStorage.setItem(Params.clueCount, JSON.stringify(0));
  localStorage.setItem(Params.correctanswers, JSON.stringify(0));
  if (lvls) {
    const lvlsArr: ILevel[] = JSON.parse(lvls);
    lvlsArr.map((elem) => (elem.state = States.NotCompleted));
    localStorage.setItem(Params.levels, JSON.stringify(lvlsArr));
    Emitter.emit('reset', lvlsArr[0], currLevel, clueCount, correctAnswers, lvlsArr);
  }
}
