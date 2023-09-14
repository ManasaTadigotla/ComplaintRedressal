import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {

  userInfo: any[]=[] ;
  p:number=0;
  userName:string="";
  key:string = "userName";
  reverse:boolean=false;
  //oldGenreName!:string;
  roleList:any;

  enableEdit = false;
  enableEditIndex = null;
  
  

  constructor(private userServ:UserService,
    private router: Router){}

  ngOnInit(): void {
   this.viewAll();
  }


  viewAll()
  {
    this.userServ.getAllUsers().subscribe(data=>{
      this.userInfo = data;
      console.log(data);
    });
    this.userServ.getAllRoles().subscribe(roles=>{
      console.log(roles);
      this.roleList=roles;
    })

  }
  deleteUser(userName:any)
  {
    this.userServ.deleteUser(userName).subscribe(res=>{
      if(res==1)
      {
        alert("User deleted");
         this.viewAll();
      }
    });
  }

  modifyUser(id:number,i:number)
  {
    console.log(i);

    //this.router.navigate(['/', id]);
  }

  viewOneEmp(id:number)
  {
    this.router.navigate(['/viewone', id]);
  }

 
  Sorting(key:any)
  {
    this.key = key;
    this.reverse= !this.reverse;
  }

 // firstName:string;
  SearchUser()
  {
    if(this.userName=="")
    {
      this.viewAll();
    }
    else
    {
      console.log(this.userName);
      this.userInfo = this.userInfo.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.userName);
      });
    }
  }

  enableEditMethod(e:any, i:any,user:any) {
    this.enableEdit = true;
    this.enableEditIndex = i;
   
    console.log(i, e);
  }

  cancelEdit()
  {
    this.viewAll();
    this.enableEdit=false;
    //console.log(this.oldName);
    //genre.name=this.oldName;
  }

  saveUser(user:any)
  {
    console.log(user.role.roleId);
    this.userServ.updateUser(user).subscribe(data=>{
      console.log(data);

      this.enableEdit=false;
    } );
  }

 

}
