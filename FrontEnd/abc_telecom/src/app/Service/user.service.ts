import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserByUserName(userName:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"user/"+userName);
  }

  getAllUsers()
  {
    return this.http.get<any>(AppSettings.baseUrl+"allusers");
  }

  deleteUser(userName:any)  {
    return this.http.delete<any>(AppSettings.baseUrl+"deleteuser/"+userName);
  }

  getAllRoles()
  {
    return this.http.get<any>(AppSettings.baseUrl+"allroles");
  }

  updateUser(user:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"assignroletouser/"+user.userName+"/"+user.role.roleId);
  }

  getComplaintsByCustomer(userName:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"complaintsbycustomer"+"/"+userName);
  }

  getComplaintsByEngineer(engineerUserName:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"complaintsAssignedToEngineer/"+engineerUserName);
  }

  getEngineers(pincode:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"engineersByPincode/"+pincode);
  }

}
