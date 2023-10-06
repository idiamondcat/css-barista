export interface ILevel {
  id: number;
  state: States.Clue | States.Completed | States.NotCompleted;
  title: string;
  selector: Selector;
  markup: string;
}
export type Selector = Array<string>;
export type Element<T> = T | null;
export interface IParams {
  parentElem: HTMLElement | null;
  markup: string;
  style: Array<string>;
}
export enum Params {
  levels = 'levels',
  currLevel = 'level',
  clueCount = 'cluecount',
  clueStates = 'clueStates',
  correctanswers = 'correctAnswers',
}
export enum States {
  Clue = 'clue',
  Completed = 'completed',
  NotCompleted = 'notcompleted',
}
