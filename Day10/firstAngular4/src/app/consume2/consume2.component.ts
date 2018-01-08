import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-consume2',
  templateUrl: './consume2.component.html',
  styleUrls: ['./consume2.component.css']
})
export class Consume2Component implements OnInit {

  constructor(private ds:DataServiceService) { 

    console.log("I am in Consume 2 compenent");
    console.log(ds.newsmakers);
    ds.newsmakers.push('top');
    console.log(ds.newsmakers);
  }

  ngOnInit() {
    this.getRemoteData_Local();
  }

  getRemoteData_Local(){
    console.log(this.ds.getRemoteData());
  }

}
