import { Component, OnInit} from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  login=window.sessionStorage.getItem("auth-user")
  role=JSON.parse(window.sessionStorage.getItem("auth-user")|| '{}')  
  rolee=this.role.role
  constructor( private router: Router) { this.redirect()}

  ngOnInit(): void {
  }
  redirect()
  
  {
    if (this.login==null)
        this.router.navigate(["/login"])
    if(this.rolee=="ROLE_USER")
        {
          this.router.navigate(["/user"])
        }
  }

}
