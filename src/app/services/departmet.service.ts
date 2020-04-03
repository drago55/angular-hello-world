import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmetService {

  departments = [

    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ]

  constructor() { }

  getAllDepartments(){
    return this.departments;
  }

  getOne(id: number){

    return this.departments.find(department => department.id == id)

  }
}
