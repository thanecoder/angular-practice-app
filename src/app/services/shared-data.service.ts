import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public sharedData = {};

  constructor() { }

  getData(key:string){
    if(this.sharedData.hasOwnProperty(key)){
      return this.sharedData[key];
    }
    else{
      return {};
    }
  }

  setData(key:string,value:any){
    this.sharedData[key] = value;
  }

}
