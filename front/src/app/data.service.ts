import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from './shared/data';


@Injectable()
export class DataService implements OnInit {
  private _data: Data[]
  
  ngOnInit() { }

  constructor(private _http: Http) { }

  getData(): Data[] {
    let result: Data[] = [],
        url = 'http://localhost:8800/getfile';
    this._http.get(url)
    .subscribe(res => {
      // todo
      console.log(res)
    })
    return result;
  }
}
