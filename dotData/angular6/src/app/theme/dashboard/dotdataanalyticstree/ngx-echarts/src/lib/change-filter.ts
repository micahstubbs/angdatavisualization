import { SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';


export class ChangeFilter {
  constructor(private _changes: SimpleChanges) { }

  static of(changes: SimpleChanges) {
    return new ChangeFilter(changes);
  }

  notEmpty<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      const value: T = this._changes[key].currentValue;

      if (value !== undefined && value !== null) {
        return of(value);
      }
    }
    return empty();
  }

  has<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      const value: T = this._changes[key].currentValue;
      return of(value);
    }
    return empty();
  }
}
