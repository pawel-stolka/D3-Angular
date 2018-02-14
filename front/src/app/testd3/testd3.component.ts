import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { DataService } from '../data.service';
import { Data } from '../shared/data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'test-d3',
  templateUrl: './testd3.component.html',
  styleUrls: ['./testd3.component.css']
})
export class Testd3Component implements OnInit {

  private d3: D3;
  private parentNativeElement: any;
  private data: Data[] = []; // Observable<Data[]>;

  constructor(element: ElementRef, 
      d3Service: D3Service,
      private _dataService: DataService) { 
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  buttme() {
    var __d = this._dataService.get4()//getData()
    // this.data = __d;
    console.log(__d)
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    // this.data = [];
    // this._dataService.getData()// .getNormal()

    this._dataService.get4()
      .subscribe(data => {
        this.data = data
        console.log(data)
        console.log(this.data)
      })
      

    
    // .subscribe(data => console.log(data))

      // .subscribe(
      //   (data) => {
      //     console.log(data);
          
        
      // //     // this.data.push(JSON.stringify(data.json())) //= data.json()
      //   }
      // )
    // this.data = this._dataService._data
    // this._dataService.getData()
    // .subscribe(
    //   (data: Data[]) => {
    //     this.data != null 
    //       ? this.data = data
    //       : this.data = [{ name: "ps", status: "married", count: 1}]
    //     console.log('success ', data)
    //     this.data = this._dataService._data
    //   },
    //   (err) => { 
    //     this.data = [];
    //     console.log(`err: ${JSON.stringify(err)}`)
    //   }
    // )
    

    if(this.parentNativeElement !== null)
    {
      console.log(this.data)
      d3ParentElement = d3.select(this.parentNativeElement);

      d3ParentElement
        .append("ul")
        .selectAll('li')
        .data(this.data)
        .enter()
        .append('li')
        .text(function (d:Data) {
          return `${d.count} => ${d.name}: ${d.status}`;
        })
    } else {
      console.log('else')
    }
  }

}


