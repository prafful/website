import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  myTask ="";

  tasks = ["Learn Angular 4", "Share the content", "Do a morning walk", "Get the car washed"];

  addTask = function(){
    console.log(this.myTask);
    this.tasks.push(this.myTask);
    this.myTask ="";
  }

  removeTask = function(received){
    console.log("removed " + this.tasks[received]);
    this.tasks.splice(received, 1);
  }


  constructor() { }

  ngOnInit() {
  }

}
