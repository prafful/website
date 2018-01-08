import { Component, OnInit } from '@angular/core';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-consume1',
  templateUrl: './consume1.component.html',
  styleUrls: ['./consume1.component.css']
})
export class Consume1Component implements OnInit {

  constructor(private ds:DataServiceService) {

      console.log(ds.newsmakers);
      ds.newsmakers.push('lallan');
      console.log(ds.newsmakers);

   }

  ngOnInit() {
  }

}
