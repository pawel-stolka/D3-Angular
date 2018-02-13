import { Injectable, OnInit } from '@angular/core';
import { Data } from './testd3/testd3.component';

@Injectable()
export class DataService implements OnInit {
  private _data: Data[]
  
  ngOnInit() { }

  constructor() { }

  getData(): Data[] {
    return [
      { 
        name: 'paweł',
        status: 'ok'
      },
      { 
        name: 'gaweł',
        status: 'nu nu'
      },
      { 
        name: 'szaweł',
        status: 'u la la..!'
      }
    ]
  }
}
