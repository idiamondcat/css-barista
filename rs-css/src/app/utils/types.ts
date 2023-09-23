export interface ILevel {
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
  currLevel = 'level',
  clueCount = 'cluecount',
  clueStates = 'clueStates',
}
