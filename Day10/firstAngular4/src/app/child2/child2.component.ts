import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  myScore = [65,15,5,88,77];
  tasks = [
      {name:"veera", score: 25},
      {name:"malini", score: 35},
      {name:"surya", score: 30},
      {name:"saran", score: 20},
      {name:"khizar", score: 50}
  ];

  display = 5;
  age = 30;

  current_date = new Date(2018, 0, 4);
  salary = 80000; 

  friends = ["jagadeesh", "evanglin", "sivaranjani", "vaidynanthan", "vinith"];

  constructor() { }

  ngOnInit() {
  }

}
