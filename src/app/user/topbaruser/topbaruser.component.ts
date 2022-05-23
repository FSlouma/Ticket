import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbaruser',
  templateUrl: './topbaruser.component.html',
  styleUrls: ['./topbaruser.component.css']
})
export class TopbaruserComponent implements OnInit {

  login=JSON.parse(window.sessionStorage.getItem("auth-user")|| '{}')  
  username=this.login.username
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    window.sessionStorage.removeItem("auth-user")
    this.router.navigate(["/login"])
  }
}
