import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ViewAllComplaintsComponent } from './Component/Manager/view-all-complaints/view-all-complaints.component';
import { ViewComplaintStatusComponent } from './Component/Customer/view-complaint-status/view-complaint-status.component';
import { ViewAssignedComplaintsComponent } from './Component/Engineer/view-assigned-complaints/view-assigned-complaints.component';
import { RaiseComplaintComponent } from './Component/Customer/raise-complaint/raise-complaint.component';
import { ComplaintsComponent } from './Component/Admin/complaints/complaints.component';
import { UsersComponent } from './Component/Admin/users/users.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import { AssignComplaintsComponent } from './Component/Manager/assign-complaints/assign-complaints.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"customerhome",component:RaiseComplaintComponent},
  {path:"adminhome",component:UsersComponent},
  {path:"viewcomplaints",component:ViewAllComplaintsComponent},
  {path:"viewallcomplaints",component:ComplaintsComponent},
  {path:"raiseComplaint",component:RaiseComplaintComponent},
  {path:"viewstatus",component:ViewComplaintStatusComponent},
  {path:"engineerhome",component:ViewAssignedComplaintsComponent},
  {path:"managerhome",component:ViewAllComplaintsComponent},
  {path:'assigncomplaint/:complaintId',component:AssignComplaintsComponent},
  {path:"changepassword",component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
