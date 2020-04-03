import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  constructor() { }

  findAllCourses(): string []{
    return ["course1", "course2", "course3"];
  }

}
