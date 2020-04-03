import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { DepartmetService } from '../../services/departmet.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  /**
   *  Green and blue class for list items 
   */
  private green = "list-group-item list-group-item-action list-group-item-success";
  private blue = "list-group-item list-group-item-action list-group-item-primary";

  public selectedId;

  departments = [];

  constructor(private router: Router, private departmentService : DepartmetService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
    this.route.paramMap.subscribe((params: ParamMap ) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
