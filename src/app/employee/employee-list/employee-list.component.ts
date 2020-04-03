import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  private errorMsg;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
