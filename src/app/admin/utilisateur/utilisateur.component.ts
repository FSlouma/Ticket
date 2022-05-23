import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
export interface userdata {
  id_user: string;
  username: string;
  email: string;
  type: string;
}
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  displayedColumns: string[] = ['id','username','email', 'type','Actions'];
  dataSource: MatTableDataSource<userdata> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator| any;
  @ViewChild(MatSort) sort: MatSort| any; 
  data={
    username:"",
    email:"",
    password:"",
    type:""
  }
  listuserss=[]as any;
  listusersinfo=[]as any;
  user : any
  login=window.sessionStorage.getItem("auth-user")
  constructor(private http:HttpService,private router: Router) { this.getalluser()
    this.redirect()}

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  redirect()
  
  {
    if (this.login==null)
        this.router.navigate(["/login"])
  }
getalluser()
{
  this.http.getalluser().subscribe(res=>{
    console.log(res);
    this.listuserss=res
    for(let i=0;i<this.listuserss.length;i++){
      this.listusersinfo.push({"id":this.listuserss[i].id,"username":this.listuserss[i].username,"cin":this.listuserss[i].cin,"email":this.listuserss[i].email,"type":this.listuserss[i].type})   
    }
    console.log(this.listusersinfo);

    this.dataSource = new MatTableDataSource(this.listusersinfo);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  })
  this.listusersinfo.length=0
}
getticketById(id:string){
  this.http.getuserbyid(id).subscribe(res=>{
    console.log(res);
    this.user=res
  })

}
getuserbyemail(email:string)
{
  this.http.getuserbyemail(email).subscribe(res=>{
    this.user=res
  })
  this.http.deletuserbyid(this.user.id_user).subscribe(res=>{
    console.log("deleted");
    
  })
}
changepass(email:string)
{
  this.http.sendpassword(email).subscribe(res=>{
    console.log("success");
  })
}
supprimeticketbyid(id:string){
this.http.deletuserbyid(id).subscribe(res=>{
 console.log("suppression valider...");

})
this.reloadPage()
}
reloadPage() {
  setTimeout(()=>{
    window.location.reload();
  }, 100);
}
}
