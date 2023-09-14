import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abc_telecom';

  isLoggedIn:boolean=false;
  isNotLoggedIn:boolean=!this.isLoggedIn;
  isNavbarVisiableCustomer:boolean=false;
  isNavbarVisiableEngineer:boolean=false;
  isNavbarVisiableManager:boolean=false;
  isHomeNavbarVisible:boolean=false;
  isNavbarVisiableAdmin:boolean=false;

  constructor(private router:Router){}

  ngDoCheck()
  {
      let currenturl = this.router.url; // it will give us, component link text which present in Address bar.
      //console.log(currenturl);
      if(sessionStorage.getItem("user")!=null)
      {
        console.log(sessionStorage.getItem("user"));
        this.isLoggedIn=true;
        this.isNotLoggedIn=false;
        console.log(currenturl);
      }


      if(currenturl=="/login"  || currenturl=="/register" )
      {
        this.isNavbarVisiableCustomer = false;
        this.isNavbarVisiableEngineer = false;
        this.isNavbarVisiableManager = false;
        this.isHomeNavbarVisible=false;
        this.isNavbarVisiableAdmin=false;

      }
      else if(currenturl=="/")
      {
        this.isNavbarVisiableCustomer = false;
        this.isNavbarVisiableManager = false;
        this.isNavbarVisiableEngineer=false;
        this.isHomeNavbarVisible=true;
        this.isNavbarVisiableAdmin=false;
      }
      else  if(currenturl=="/customerhome" || currenturl=="/raiseComplaint")
      {
        this.isNavbarVisiableCustomer=true;
        this.isNavbarVisiableManager = false;
        this.isNavbarVisiableEngineer=false;
        this.isHomeNavbarVisible = false;
        this.isNavbarVisiableAdmin=false;
      }
      else  if(currenturl=="/managerhome" || currenturl=="/assigncomplaint/:complaintId")
      {
        this.isNavbarVisiableEngineer = false;
        this.isNavbarVisiableManager = true;
        this.isNavbarVisiableCustomer=false;
        this.isHomeNavbarVisible = false;
        this.isNavbarVisiableAdmin=false;
        
      }
      else if(currenturl="/adminhome" || currenturl=="/viewcomplaints")
      {
        this.isNavbarVisiableAdmin=true;
        this.isNavbarVisiableEngineer = false;
        this.isNavbarVisiableManager = false;
        this.isNavbarVisiableCustomer=false;
        this.isHomeNavbarVisible = false;

      }
}
function(ngClassName:any)
{

}

}