import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { CookieModule } from 'ngx-cookie';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CustomerComponent } from './Component/customer/customer.component';
import { RaiseComplaintComponent } from './Component/Customer/raise-complaint/raise-complaint.component';
//import { ViewComplaintStatusComponent } from './Component/Customer/view-complaint-status/view-complaint-status.component';
import { ViewAllComplaintsComponent } from './Component/Manager/view-all-complaints/view-all-complaints.component';
import { AssignComplaintsComponent } from './Component/Manager/assign-complaints/assign-complaints.component';
import { ViewAssignedComplaintsComponent } from './Component/Engineer/view-assigned-complaints/view-assigned-complaints.component';
import { UpdateComplaintStatusComponent } from './Component/Engineer/update-complaint-status/update-complaint-status.component';
//import { ViewComplaintsComponent } from './Component/Admin/view-complaints/view-complaints.component';
import { ViewComplaintStatusComponent } from './Component/Customer/view-complaint-status/view-complaint-status.component';
import { ComplaintsComponent } from './Component/Admin/complaints/complaints.component';
import { UsersComponent } from './Component/Admin/users/users.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
//import { VisewComplaintStatusComponent } from './Component/Customer/visew-complaint-status/visew-complaint-status.component';


@NgModule({
  declarations: [
    AppComponent,    
    RaiseComplaintComponent,    
    ViewAllComplaintsComponent,
    AssignComplaintsComponent,
    ViewAssignedComplaintsComponent,
    UpdateComplaintStatusComponent,
    ViewComplaintStatusComponent,
    ComplaintsComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent
  ],
  imports: [ 
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule, 
    BrowserAnimationsModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
