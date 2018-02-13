import { Injectable, OnInit } from '@angular/core';
import { Data } from './shared/data';


@Injectable()
export class DataService implements OnInit {
  private _data: Data[]
  
  ngOnInit() { }

  constructor() { }

  getData(): Data[] {
    return [
      { 
        name: 'paweł',
        status: 'ok',
        count: 23
      },
      { 
        name: 'gaweł',
        status: 'nu nu',
        count: 34
      },
      { 
        name: 'szaweł',
        status: 'u la la..!',
        count: 54
      }
    ]
  }
}
