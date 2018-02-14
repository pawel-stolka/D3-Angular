import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { NewdataService } from '../newdata.service';
import { Data } from '../shared/data';

@Component({
  selector: 'newd3',
  templateUrl: './newd3.component.html',
  styleUrls: ['./newd3.component.css']
})
export class Newd3Component implements OnInit {
  serverData = []
  private d3: D3;
  private parentNativeElement: any;
  private data: Data[]// = [];

  constructor(
    element: ElementRef,
    d3Service: D3Service,
    private newDataService: NewdataService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    this.loadData()
    // this.delay(1000);

    let d3 = this.d3;
    let d3ParentElement: Selection<any,any,any,any> ;

    if (this.parentNativeElement !== null) {
      // console.log(this.parentNativeElement)
      console.log(this.serverData)

      var bod = document.getElementsByName("ul");
      // bod[0].innerText()
      console.log(bod)
      
      

      d3ParentElement = d3.select(this.parentNativeElement);

      d3ParentElement
        .append("ul")
        .selectAll('li')
        .data(this.serverData)
        .enter()
        .append('li')
        .text(function (d: Data) {
          return `${d.count} => ${d.name}: ${d.status}`;
        })
    }
  }

  ngOnChange() {
    // let d3 = this.d3;
    // let d3ParentElement: Selection < any, any, any, any > ;

    // if (this.parentNativeElement !== null) {
    //   // console.log(this.parentNativeElement)
    //   console.log(this.serverData)
    //   d3ParentElement = d3.select(this.parentNativeElement);

    //   d3ParentElement
    //     .append("ul")
    //     .selectAll('li')
    //     .data(this.serverData)
    //     .enter()
    //     .append('li')
    //     .text(function (d: Data) {
    //       return `${d.count} => ${d.name}: ${d.status}`;
    //     })
    // }
  }

  loadSvg() {
    
  }

  delay(ms: number) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise(resolve => this.loadData());
  }

  loadData() {
    this.newDataService.getUser()
      .subscribe(data => {
        this.serverData = data
        console.log(this.serverData)
      })
  }
}
