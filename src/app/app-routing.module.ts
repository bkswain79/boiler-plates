import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "dashboard"},
  {path: "dashboard", component: DashboardComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "employee-detail/:id", component: EmployeeDetailComponent},
  {path: "employee-create", component: EmployeeCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
