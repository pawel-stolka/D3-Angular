import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'test-d3',
  templateUrl: './testd3.component.html',
  styleUrls: ['./testd3.component.css']
})
export class Testd3Component implements OnInit {

  private d3: D3;
  private parentNativeElement: any;
  private data: Data[];

  constructor(element: ElementRef, d3Service: D3Service) { 
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    this.data = [
      { 
        name: 'paweł',
        status: 'ok'
      },
      { 
        name: 'gaweł',
        status: 'nu nu'
      }
    ]
    let data = this.data;

    if(this.parentNativeElement !== null)
    {
      d3ParentElement = d3.select(this.parentNativeElement);

      d3ParentElement
        .append("ul")
        .selectAll('li')
        .data(data)
        .enter()
        .append('li')
        .text(function (d) {
          return d.name + ': ' + d.status;
        })
    }
  }

}

export class Data {
  name: string;
  status: string;
}
