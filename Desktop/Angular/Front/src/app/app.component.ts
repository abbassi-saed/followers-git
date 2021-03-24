import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;
  addCourse(){
    this.courses.push({id:5,title:"IOS"});
  }
  delete(course)
  {
    let index =this.courses.indexOf(course);
    this.courses.splice(index);
  }
  edit(course){
    course.title = "updated";
  }

  load()
  {
   this.courses = [
      {id:1,title:"Laravel"},
      {id:2,title:"Angular"},
      {id:3,title:"VeJs"},
      {id:4,title:"Synfony"},
      {id:5,title:"AdonisJS"},    
    ]
  }
  trackCourse(index,course)
  {
    return course ? course.id : undefined;
  }
}
