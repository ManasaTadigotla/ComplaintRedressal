import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-view-complaint-status',
  templateUrl: './view-complaint-status.component.html',
  styleUrls: ['./view-complaint-status.component.css']
})
export class ViewComplaintStatusComponent implements OnInit {

  complaintsList:any;
  status:any;
  key:string = "customerUserName";
  reverse:boolean=false;
  constructor(private userServ:UserService){}
  
  ngOnInit(): void {
    this.loadAllComplaints();
  }

  loadAllComplaints()
  {
    if(sessionStorage.getItem("user")!=null)
    {
      this.userServ.getComplaintsByCustomer(sessionStorage.getItem("user")).subscribe(res=>{
        console.log(res);
        this.complaintsList=res;
      })
  
    }
  }
    

  SearchComplaint()
  {
    if(this.status=="")
    {
      this.loadAllComplaints();
    }
    else
    {
      console.log(this.status);
      this.complaintsList = this.complaintsList.filter((c:any)=>{
        return c.status.toLocaleLowerCase().match(this.status);
      });
    }
  }

  Sorting(key:any)
  {
    this.key = key;
    this.reverse= !this.reverse;
  }
}


