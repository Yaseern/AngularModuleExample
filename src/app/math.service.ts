import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  constructor() { }
  add(a:number,b:number):number{
    return a+b;
  }
}
