import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - app';
  name = "From App component";
  message = {};

  constructor(private testService: TestService){
    this.testService.eventEmiter.subscribe(data => this.message = data);
  }
  
}
