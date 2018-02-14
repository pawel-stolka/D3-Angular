import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Data } from './shared/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Data2 } from './shared/data2';


@Injectable()
export class DataService implements OnInit {
  _data: Data[] = []// Observable<Data[]>
  private _url = 'http://localhost:8800/getfile';
  private _url2 = 'http://localhost:8800/getjson2';
  

  ngOnInit() {
    this.getData()
   }

  constructor(private _http: Http) { }

  get4() {
    return this._http.get(this._url)
                     .map((res: Response) => res.json())
  }

  getData(): Data[] {
    let result = []// Observable<Data[]>
      
    this._http.get(this._url)
              .map((res: Response) => res.json())
              // .map(this.mapPost)
              .catch(this.handleError)
    // .subscribe(res => {
    //   // todo
    //   // this._data = res
    //   console.log(res)
    //   this._data.push(res)
    //   result.push(res)
    //   console.log(this._data)

    //   // return result
    // })

/*
    this._http.get(this._url)
      .map((res: any) => {
        console.log(res.body)
        result.push(res.json())
        // this._data =
        // res.json()//.body// .json()
      })
      .subscribe(data => {
        console.log(data)
      })
      // .catch(this.handleError);
*/
    // this._http.get(this._url)
    //           .map(this.mapPost)
    //           .catch(this.handleError);

    // .subscribe(res => {
    //   // todo
    //   // this._data = res
    //   console.log(res)
    // })
    
    return result;
  }

  get2() {
    var ret = this._http.get(this._url2)
    .map((res) => {
      res.json()//.body// .json()
    })
    ret.subscribe(
      (data) => {
      
        console.log(data)//.text())
      })
  }

  getNormal() {
    var ret = this._http.get(this._url)
    ret.subscribe(
      (data: any) => this._data.push({
        name: data['name'],
        status: data['status'],
        count: data['count']
      })
    )
    // ret.subscribe(
    //   (resp) => {
    //     console.log(resp._body)
    //     this._data = resp._body
    //   }
    // )
    return ret
  }

  handleError(res: Response | any) : Observable<any> {
    return Observable.throw('error')
  }

  mapPost(res: Response | any) : Data[] {
    let post: Data[] = res.json()//._body;
    // this._data = post
    return post;
  }
}
