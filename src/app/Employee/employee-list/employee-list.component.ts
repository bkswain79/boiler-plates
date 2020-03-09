import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor( private employeeService: EmployeeService ) { }

  employees: any;

  ngOnInit() {

    this.employeeService.getEmployees().subscribe(
      (res: any) => {
        console.log (res);
        this.employees = res;;
      },
    );

    //this.employees = this.employeeService.getEmployees();

    //console.log(this.employees);

    // this.employeeService.getEmployees().subscribe((res:any) => {
    //   this.employees - res;
    // });

    

  }

}
