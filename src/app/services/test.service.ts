import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   eventEmiter :EventEmitter<any> =  new EventEmitter();

  constructor() { }
}
