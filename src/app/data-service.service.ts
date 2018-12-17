import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  listOfData  = [{id:1, name:'prod1', price:10},
  {id:2, name:'prod2', price:20},
  {id:3, name:'prod3', price:30}]
}
