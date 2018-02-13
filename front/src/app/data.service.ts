import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from './shared/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService implements OnInit {
  // private _data: Observable<Data[]>
  
  ngOnInit() { }

  constructor(private _http: Http) { }

  getData(): Observable<Data[]> {
    let result: Observable<Data[]>,
        url = 'http://localhost:8800/getfile';

    this._http.get(url)
              .map(this.mapPost)
              .catch(this.handleError);
    // .subscribe(res => {
    //   // todo
    //   // this._data = res
    //   console.log(res)
    // })
    return result;
  }

  handleError(res: Response | any) : Observable<any> {
    return Observable.throw('error')
  }

  mapPost(res: Response | any) : Data[] {
    let post: Data[] = res.json();
    return post;
  }
}
