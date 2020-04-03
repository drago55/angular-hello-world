import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './courses/course.service';
import { EmailService } from './services/email.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestService } from './services/test.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { DepartmetService } from './services/departmet.service';
import { DepartmentOverviewComponent } from './department/department-overview/department-overview.component';
import { DepartmentContactComponent } from './department/department-contact/department-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    EmailService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
