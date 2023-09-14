import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {
  userName!:any;
  msg:string="";
  errorOrSuccess: string="";
  
constructor(private router:Router,
  private builder:FormBuilder,
  private complaintServ:ComplaintService){ }

  ngOnInit(): void {
    if(sessionStorage.getItem("user")!=null)
    {
      this.userName=sessionStorage.getItem("user");
    }
    else{
      alert("Plz login");
      this.router.navigateByUrl("/login");
    }
  }
  complaintForm=this.builder.group({
    subject:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    complaintType:this.builder.control('LANDLINE',Validators.required),
    pincode:this.builder.control('',Validators.required)
  })

  saveComplaint(complaintForm:any)
  {
    console.log(complaintForm.value);
    if(complaintForm.valid)
    {
      this.complaintServ.saveNewComplaint(complaintForm.value).subscribe(res=>{
        alert("Complaint is saved successfully...");
        if(res!=null)
        {
          this.errorOrSuccess="success"
          this.msg="Complaint is saved successfully...";
          
        }
        else
        {
          this.errorOrSuccess="error";
          this.msg="Complaint couldn't be saved.Plz try again..";
        }
      }
      )
    }
    else{
      this.errorOrSuccess="error";
      this.msg="Please enter valid details";
    }
  }

   
  
  


}
