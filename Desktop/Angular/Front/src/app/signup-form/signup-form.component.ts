import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {UsernameValidator} from './username.validator'


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  
  submit(f)
  {
  console.log(f);
  }

  form = new FormGroup ({
    username: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(4),
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(4),
    ])
  });
  get username()
  {
    return this.form.get('username');
  }
  
  get password()
  {
   return this.form.get('password');
  }


  ngOnInit(): void {
  }

}
