import { Component, OnInit } from '@angular/core';
import { ComputedPlacement } from '@popperjs/core';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaintsList:any;
  status:any;
  key:string = "customerUserName";
  reverse:boolean=false;
  constructor(private complaintServ:ComplaintService){}
  
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
