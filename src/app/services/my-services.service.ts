import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  public item:any;
  constructor() { }

  //localStorage

  getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }

  setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  }

  removeItem(key){
    localStorage.removeItem(key)
  }
}
