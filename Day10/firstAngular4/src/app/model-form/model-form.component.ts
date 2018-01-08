import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  skillForm;

  submitUserSkill = function(skill){
    console.log(skill);

  }

  constructor() { }

  ngOnInit() {

      this.skillForm = new FormGroup({
        tn:new FormControl("Angular 2", Validators.compose([
                                            Validators.required, 
                                            Validators.minLength(3),
                                 Validators.pattern('^[0-9]*$')
                                          ])),
        te:new FormControl("", this.experienceValidator),
        ss:new FormControl("Amateur")
      });

  }

  experienceValidator(control){
    if(control.value == 333){
      return {'te':true}
    }
  }

}
