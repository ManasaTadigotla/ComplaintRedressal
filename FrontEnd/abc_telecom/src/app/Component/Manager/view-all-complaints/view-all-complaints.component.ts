import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-view-all-complaints',
  templateUrl: './view-all-complaints.component.html',
  styleUrls: ['./view-all-complaints.component.css']
})
export class ViewAllComplaintsComponent implements OnInit {

  complaintsList:any;
  status:any;
  key:string = "customerUserName";
  reverse:boolean=false;
  enableEdit = false;
  enableEditIndex = null;
  constructor(private complaintServ:ComplaintService,
    private route:Router){}
  
  ngOnInit(): void {
    this.loadAllComplaints();
  }

  loadAllComplaints()
  {
    this.complaintServ.getAllComplaints().subscribe(res=>{
      console.log(res);
      this.complaintsList=res;
    })
  }
  enableEditMethod(e:any, i:any,complaint:any) {
    // this.enableEdit = true;
    // this.enableEditIndex = i;
    console.log(complaint.complaintId);
   this.route.navigateByUrl("/assigncomplaint:"+complaint.complaintId);
   
    console.log(i, e);
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
