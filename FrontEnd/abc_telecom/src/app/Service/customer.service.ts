import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  addNewComplaint(customer:any,complaint:any)
  {
    return this.http.post<any>(AppSettings.baseUrl+"addComplaint"+"/"+customer,complaint);
  }
  getComplaints(custmerName:string)
  {
    return this.http.get<any>(AppSettings.baseUrl+"complaintsbycustomer"+custmerName);
  }

  

}
