import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  methods = [
   {id:1,name: 'Email'},
    {id:2,name:'SMS'},
    {id:3,name:'Adress'},
    {id:4,name:'Tel'},
  ]
  submit(f)
  {
    console.log(f.value.contact.firstName);
  }

  ngOnInit(): void {
  }

}
