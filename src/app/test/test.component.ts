import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import { TestService } from '../services/test.service';


@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') fromAppComponent;

  @Output() public childEvent =  new EventEmitter();


  testingAngularPipes = "Angular pipes ";
  displayName = false;
  public name = "";
  colors = ["red", "blue", "orange", "green","yellow"]
  color = "red";
  date =  new Date();
  person = {
    firstName:"John",
    lastName: "Doe"
  }

  constructor(private testService :TestService) { }

  ngOnInit() {
  }

  fireEvent(){
    console.log("Firing event !")
    this.testService.eventEmiter.emit({
      name: "pero",
      lastName: "Peric"
    });
  }

}
