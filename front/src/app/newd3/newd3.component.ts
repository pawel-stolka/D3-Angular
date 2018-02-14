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
    console.log("ngOnInit()")
    this.loadData()
    .then(()=>{
      this.loadSvg()
    });
    
    // this.delay(1000);

    
  }

  loadSvg() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any,any,any,any> ;

    if (this.parentNativeElement !== null) {
      // console.log(this.parentNativeElement)
      console.log(this.serverData)
      console.log("loadSvg()")
      d3ParentElement = d3.select(this.parentNativeElement);

      d3ParentElement
        .append("ul")
        .selectAll('li')
        .data(this.serverData)
        .enter()
        .append('li')
        .attr("class", "bar")
        .style("width", function(d){return d.count * 10 + "px"})
        .style("outline", "1px solid black")
        .text(function (d: Data) {
          return `${d.count} => ${d.name}: ${d.status}`;
        })
        
    }
  }

  delay(ms: number) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise(resolve => this.loadData());
  }

  loadData() {
    return this.newDataService.getUser()
    .then(
      data => { 
        this.serverData = data
        console.log("loadData()")
        console.log(this.serverData)
      }
    )
     
  }
}


// this.serverData = [
      //   {
      //   "name": "paweł",
      //   "status": "ok",
      //   "count": 23
      //   },
      //   {
      //   "name": "gaweł",
      //   "status": "nope",
      //   "count": 32
      //   },
      //   {
      //   "name": "szaweł",
      //   "status": "u la la",
      //   "count": 51
      //   },
      //   {
      //   "name": "charles",
      //   "status": "yabadaba duuuu!",
      //   "count": 34
      //   },
      //   {
      //     "name": "charles2",
      //     "status": "yaba duuuu!",
      //     "count": 74
      //     }
      //   ]
