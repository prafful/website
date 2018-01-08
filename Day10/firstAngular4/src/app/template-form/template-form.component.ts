import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(){} 
  

  submitUserSkill = function(skill){
    console.log("Technology: " + skill.technologyName);
    console.log("Experience: " + skill.totalExperience);
    console.log("Status: " + skill.skillStatus);
  }

}
