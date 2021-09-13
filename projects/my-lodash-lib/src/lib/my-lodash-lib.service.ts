import { Injectable } from '@angular/core';
import concat from 'lodash.concat';

@Injectable({
  providedIn: 'root',
})
export class MyLodashLibService {
  constructor() {}

  doSomething(item1: number[] = [], item2: number) {
    console.log(concat(item1, item2));
  }
}
