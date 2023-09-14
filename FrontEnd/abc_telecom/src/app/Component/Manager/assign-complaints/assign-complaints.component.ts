import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-assign-complaints',
  templateUrl: './assign-complaints.component.html',
  styleUrls: ['./assign-complaints.component.css']
})
export class AssignComplaintsComponent implements OnInit{
  complaintId:any;
  complaintDetails:any;
  engineerList:any;


  constructor(private aroute:ActivatedRoute,
    private complaintServ:ComplaintService,
    private userServ:UserService,
    private route:Router){}
  
  ngOnInit(): void {
    this.aroute.params.subscribe(params=> this.complaintId = params['complaintId']);
    this.loadComplaintDetails(this.complaintId);
  }

  loadComplaintDetails(complaintId: any) {
    this.complaintServ.getComplaintById(complaintId).subscribe(res=>{
      console.log(res);
      if(res!=null)
      {
      this.complaintDetails=res;
      this.userServ.getEngineers(this.complaintDetails.pincode).subscribe(res=>{
        this.engineerList=res;
      })
      }
      else
      {
        alert("Details are not available");
      }

    })
  }
  assignToEngineer(complaintId:any,engineerUserName:any)
  {
    this.complaintServ.assignComplaintToEngineer(complaintId,engineerUserName).subscribe(res=>{
       if(res!=null)
       {
        alert("Assigned successfully");
        this.route.navigateByUrl("/managerhome");
       }
       else
       {
         alert("OOPs!Something went wrong.plz try again");
       }
    })
    
  }
}
 

