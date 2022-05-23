import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

const USER_KEY = 'auth-user'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    form : any={
    email:"",
    password:""}
    res:any
    isSuccessful = false;
    roles: string[] = [];
  constructor(private http:HttpService, private router: Router) { }

  ngOnInit(): void {}

  
   
 
  getuserbyemail()
  { 
    //var email = ((<HTMLInputElement>document.getElementById("email")).value)
      this.http.getuserbyemail(this.form.email).subscribe(res=>{
      console.log(res);
      this.res=res
  })}
  connect()
  {
    this.getuserbyemail()
    var user={
      "email":this.res.email,
      "role":this.res.type,
      "username":this.res.username
    }
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    if (this.form.password==this.res.password)
    {
      if(this.res.type=="ROLE_ADMIN")
      {
        this.router.navigate(["/admin/reservation"])
      }
      else if (this.res.type=="ROLE_USER")
      {
        this.router.navigate(["/user"])
      }
      this.isSuccessful=true
    }
  }

}
