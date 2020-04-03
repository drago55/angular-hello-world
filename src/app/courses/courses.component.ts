import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myId = "testId"
  title = "List of courses";
  courses: string[] = [];

  greeting = "";

  public successClass="text-success";

  public isDisabled = true;

  public isSpecial = true;
  public hasError = false;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  };

  

  constructor(private corseService: CourseService) { }

  ngOnInit() {
    this.courses= this.corseService.findAllCourses();
  }

  onClick(){
    console.log("Welcome to codevolution");
    this.greeting = "Welcome to Codevolution";
  }

  logEvent(event){
    console.log(event);
  }

  logMessage(message){
    console.log(message);
  }

}
