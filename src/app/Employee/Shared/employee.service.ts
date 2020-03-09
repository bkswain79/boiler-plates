import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  getEmployees()
  {
    return this.http.get("https://localhost:44313/api/employee");
  }
  
}
