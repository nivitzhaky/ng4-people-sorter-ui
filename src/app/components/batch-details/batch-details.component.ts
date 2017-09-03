import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { batchDetails } from '../sorter-table/sorter-table.component';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'adults','kindergarten','elementary','high'];
  public doughnutChartData: number[] = [0,0,0,0];
  public doughnutChartType: string = 'doughnut';
  curBatch : batchDetails = null;
  showDetails : Boolean = false;


  constructor(private dataService:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id : string = this.route.snapshot.params["id"];
    let timer = Observable.timer(1, 1500);
    timer.subscribe(
        t => {
          this.fillBatch(id)
        }
    );
  }

  public fillBatch(id : String) {
    this.doughnutChartLabels = [ 'adults', 'kindergarten','elementary','high'];
    this.doughnutChartType = 'doughnut';
    this.dataService.getBatcheById(id).subscribe((batch) => {
      //console.log(posts);
      var b : batchDetails = batch;
      this.curBatch= batch;
      this.doughnutChartData = [ b.adults, b.elementary,b.kindergarten,b.high];
      this.showDetails = true;
    });

  }

}
