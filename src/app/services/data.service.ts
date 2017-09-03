import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { batch } from '../components/sorter-table/sorter-table.component'
@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getBatches(){
    return this.http.get('http://ec2-13-59-172-49.us-east-2.compute.amazonaws.com:9000/batch')
      .map(res => res.json());
  }
  addBatch(b: batch){
    return this.http.post('http://ec2-13-59-172-49.us-east-2.compute.amazonaws.com:9000/batch',{id: b.id, wanted : b.wanted})
  }

  getBatcheById(id : String){
    return this.http.get('http://ec2-13-59-172-49.us-east-2.compute.amazonaws.com:9000/batch/' + id)
      .map(res => res.json());
  }

  private extractData(res: Response) {
    console.log("body" + res.json)
    return  {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
}
