import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
n1:number;
n2:number;
  constructor() { }
  getAns()
  {
    return(this.n1+this.n2);
  }
}
