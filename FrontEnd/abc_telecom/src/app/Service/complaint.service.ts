import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) {}

  getAllComplaints()
  {
    return this.http.get<any>(AppSettings.baseUrl+"allComplaints");
  }

  getComplaintById(complaintId:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"complaint/"+complaintId);
  }

  saveNewComplaint(complaint:any)
  {
    return this.http.post<any>(AppSettings.baseUrl+"newComplaint",complaint); 
  }

  updateComplaint(complaint:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"updatecomplaintstatus/"+complaint.complaintId+"/"+complaint.status); 
  }

  assignComplaintToEngineer(complaintId:any,engineerUserName:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"assigncomplainttoengineer/"+complaintId+"/"+engineerUserName);
  }
}
