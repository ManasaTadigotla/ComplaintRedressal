import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';
import { UserService } from 'src/app/Service/user.service';

enum complaintStautus{RAISERD,WIP,RESOLVED,ESCALATED};
@Component({
  selector: 'app-view-assigned-complaints',
  templateUrl: './view-assigned-complaints.component.html',
  styleUrls: ['./view-assigned-complaints.component.css']
})
export class ViewAssignedComplaintsComponent implements OnInit{

  complaintsInfo:any;
  enableEdit = false;
  enableEditIndex = null;
constructor(private userServ:UserService,
  private complaintServ:ComplaintService,private route: Router){}
  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints()
  {
    if(sessionStorage.getItem("user")!=null)
    {
      this.userServ.getComplaintsByEngineer(sessionStorage.getItem("user")).subscribe(res=>{
        console.log(res);
        this.complaintsInfo=res;
      })
    }
    else
    {
      alert("please login");
      this.route.navigateByUrl("/login");
    }
   
  }
  enableEditMethod(e:any, i:any,complaint:any) {
    this.enableEdit = true;
    this.enableEditIndex = i;
   
    console.log(i, e);
  }

  cancelEdit()
  {
    this.loadComplaints();
    this.enableEdit=false;
    //console.log(this.oldGenreName);
    //genre.name=this.oldGenreName;
  }

  saveComplaintStatus(complaint:any)
  {
    console.log(complaint.engineer.userName);
    console.log(complaint.status);
    this.complaintServ.updateComplaint(complaint).subscribe(data=>{
      console.log(data);
      this.enableEdit=false;
      this.loadComplaints();
      this.enableEditIndex=null;
      // if(data!=null)
      // {this.loadComplaints();
      //   alert("Status saved Successfully");
      //   //this.loadComplaints();
      // }
     
    } );
  } 
  
}
