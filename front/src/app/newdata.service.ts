import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewdataService {
  private _url = 'http://localhost:8800/getfile';//getfile';

  constructor(private http: Http) { }
  
  getUser() {
    return this.http.get(this._url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
      // .map((res: Response) => res.json()).subscribe()      
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
