import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-sorter-table',
  templateUrl: './sorter-table.component.html',
  styleUrls: ['./sorter-table.component.css']
})
export class SorterTableComponent implements OnInit {
  batches:batch[];
  batchSize : number = 1000;

  constructor(private dataService:DataService ){ }
    ngOnInit() {

    this.dataService.getBatches().subscribe((batches) => {
      //console.log(posts);
      this.batches = batches;
      if (this.batches.length > 10) {
        this.batches = this.batches.slice(0,10)
      }
    });

  }
  addBatch() {
    var b : batch= {id: guid(), wanted: this.batchSize, timestamp:1}
    this.batches.unshift(b)
    console.log("before add bach")
    this.dataService.addBatch(b).subscribe((batches) => {
      console.log("subscribe add bach")
    })  
    console.log("after add bach")
    
  }

  onClick(id : String){
   
  }
}
function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}
export interface batch {
  id : string, 
  wanted : number,
  timestamp : number
}
export interface batchDetails {
  persons : number, 
  adults : number,
  kids : number,
  kindergarten : number, 
  elementary : number,
  high : number
}