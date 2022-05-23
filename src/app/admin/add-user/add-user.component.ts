import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form={
    username:"",
    email:"",
    password:"",
    type:"ROLE_USER"
  }
  constructor(private http:HttpService,private router: Router) { }

  ngOnInit(): void {
  }
adduser()
{
  this.http.postuser(this.form).subscribe(res=>{
    console.log("add sucessfully");
    
  })
  this.reloadPage()
  this.router.navigate(["/admin/utilisateur"])
}
reloadPage() {
  setTimeout(()=>{
    window.location.reload();
  }, 100);
}
}
