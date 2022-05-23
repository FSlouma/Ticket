import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

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
