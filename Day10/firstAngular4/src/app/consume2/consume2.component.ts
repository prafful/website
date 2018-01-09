import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-consume2',
  templateUrl: './consume2.component.html',
  styleUrls: ['./consume2.component.css']
})
export class Consume2Component implements OnInit {

  user:User[];
  promiseUser:Promise<User[]>;
  observableUser:Observable<User[]>;

  constructor(private ds:DataServiceService) { 

    console.log("I am in Consume 2 compenent");
    console.log(ds.newsmakers);
    ds.newsmakers.push('top');
    console.log(ds.newsmakers);
  }

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData(){
    console.log(this.ds.getRemoteData());
    //promise call
    /*
    this.promiseUser = this.ds.getRemoteData();
    this.promiseUser.then(
      user => this.user = user
    );
    */

    //observable call
    
    this.observableUser = this.ds.getRemoteData();
    this.observableUser.subscribe(
                            user => this.user = user
                                  );

    console.log(this.user);
  }

}
