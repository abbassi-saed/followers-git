import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector : 'courses',
    template: `
    <h1> {{title}} </h1>
    
   
   
    `
})

export class CoursesComponent {
    // <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    // <p> {{email}}</p>
    // <button class="btn btn-primary" >Mon button</button>
    // isactive = false; [class.active]="isactive" 
    // <h1 [textContent] = "title"></h1>
    // <img [src] = "image" [alt] = "title" >
    // pour le style dynamique 
    // <h1 [style.background] = "isactive ? 'orange' : 'green'"> {{title}} </h1>
    // <div (click) = "onclickDiv()">
    // <button class="btn btn-primary" (click)="onClick($event)" >Mon button</button>
    // </div>
    isactive = true;
    title = " la liste de mes cours";
    // image ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    courses ;   
    
    email : string = "saed.abbassi99@gmail.com"
    // pour consommé un service 
    // constructor(coursesService : CoursesService) {        
    //     this.courses= coursesService.getCourses();
    // }
    // getTitel()
    // {
    //     return this.title;
    // }
    // onClick($event){
    //     $event.stopPropagation();
    //     console.log("button clicked",$event);
    // }
    // onclickDiv(){
    //     console.log('div clicked');
    // }
    // <input type="text" (keyup)="onKeyUp($event)">
    onKeyUp()
    {
        // if($event.keyCode === 13)
        // {
            console.log(this.email);
        // }
    }

};