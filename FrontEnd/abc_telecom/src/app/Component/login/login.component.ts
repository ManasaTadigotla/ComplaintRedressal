import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
enum UserRole
{
  CUSTOMER="CUSTOMER",MANAGER="MANAGER",ENGINEER="ENGINEER"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  msg: string = "";

  constructor(private router:Router,
    private logServ:UserService){}
  ngOnInit(): void {
    sessionStorage.clear();
  }

  CheckUserDetails()
  {
    if (this.userName == "admin" && this.password == "admin@123") {
      sessionStorage.setItem('user', this.userName.toString());
      this.router.navigate(['/adminhome']);
      //isNavbarVisiableAdmin:boolean=false;

    }
    else {
      this.logServ.getUserByUserName(this.userName).subscribe((res) => {
        console.log(res);
        const user = res;
        if (user) {
          if (user.userpassword == this.password) {     
            console.log(user);            
            sessionStorage.setItem("user", user.userName);    
            console.log(user.role.roleName); 
            //console.log(UserRole.CUSTOMER); 

           if(user.role!=null)
           {
            if (user.role.roleName==UserRole.CUSTOMER)
            {
              console.log(user.role.roleName); 
              sessionStorage.setItem("role",user.role.roleName);
            this.router.navigate(['/customerhome']);
          }
          else if(user.role.roleName==UserRole.ENGINEER)
          {
            this.router.navigate(['/engineerhome']);
          }
          else if(user.role.roleName==UserRole.MANAGER)
          {
            this.router.navigate(['/managerhome'])
          }
           } 
           else
           {
            console.log("No role is assigned");
            alert("Authorization failed");
           }       
           

          }
          else {            
            this.msg = ("Please check username/password");
          }
        }
        else {
          this.msg = "This is not registered username.plz register";
        }
      });
    }
  }
}
