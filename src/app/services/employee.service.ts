import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IEmployee } from '../model/IEmployee';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string= "/assets/emploees.json"

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server error.");
  }

}
