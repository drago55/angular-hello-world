import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CoursesComponent } from './courses/courses.component';
import { TestComponent } from './test/test.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department/department-overview/department-overview.component';
import { DepartmentContactComponent } from './department/department-contact/department-contact.component';

const routes: Routes = [
      {path: 'departments' , component: DepartmentListComponent},
      { path: 'departments/:id' , 
        component: DepartmentDetailComponent,
        children: [
            {path: 'overview', component: DepartmentOverviewComponent},
            {path: 'contact', component: DepartmentContactComponent}
        ]
      },
      {path: 'employees' , component: EmployeeListComponent},
      {path: 'employee-details' , component: EmployeeListComponent},
      {path: 'courses' , component: CoursesComponent},
      {path: 'test' , component: TestComponent},
      {path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const routingComponents = [
  DepartmentListComponent, 
  EmployeeListComponent, 
  CoursesComponent,
  TestComponent,
  EmployeeDetailComponent,
  DepartmentListComponent,
  DepartmentDetailComponent,
  PageNotFoundComponent
];
