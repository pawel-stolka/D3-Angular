import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewdataService {
  private _url = 'http://localhost:8800/getfile';//getfile';

  constructor(private http: Http) { }
  
  getUser() {
    var ret= this.http.get(this._url)
      .map((res: Response) => res.json())
    return ret
  }
}
