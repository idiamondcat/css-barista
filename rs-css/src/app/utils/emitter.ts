import { ILevel } from './types';

type Multi = string | number | boolean | ILevel | ILevel[];
type EventHandler<T extends Multi[]> = (...args: T) => void;
type Obj = Record<string, Set<Function>>;

export class Emitter {
  public static events: Obj = {};

  public static on<T extends Multi[]>(key: string, func: EventHandler<T>): void {
    const listeners = this.events[key] ?? new Set();
    listeners.add(func);
    this.events[key] = listeners;
  }

  public static emit<T extends Multi[]>(key: string, ...args: Multi[] | EventHandler<T>[]): void {
    const listeners = this.events[key] ?? new Set();
    for (const listener of listeners) {
      listener(...args);
    }
  }

  public static off<T extends Multi[]>(key: string, func: EventHandler<T>): void {
    if (!this.events[key]) return;
    const idx: number | null = this.events[key].has(func) ? Array.from(this.events[key]).indexOf(func) : null;
    if (idx && idx !== -1) Array.from(this.events[key]).splice(idx, 1);
  }
}
