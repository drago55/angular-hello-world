import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, ParamMap } from "@angular/router";
import { DepartmetService } from '../../services/departmet.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  private department = {};

  constructor(private route: ActivatedRoute, private departmentService :DepartmetService, private router : Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
  });
    this.department = this.departmentService.getOne(this.departmentId);
  }

  goPrevious(){

    let previousId = this.departmentId - 1;
    //this.router.navigate(['/departments', previousId]);
    this.router.navigate([previousId], {relativeTo: this.route});
    this.department = this.departmentService.getOne(this.departmentId);

  }

  goNext(){
    
    let nextId = this.departmentId + 1;
    console.log("Next clicked: " + nextId);
    this.router.navigate([nextId], {relativeTo: this.route});
   // this.router.navigate(['/departments', nextId]);
    this.department = this.departmentService.getOne(this.departmentId);
  }
  goToDepartmets(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

}
