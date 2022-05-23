import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { HttpService } from 'src/app/services/http.service';
export interface reservationdata {
  id_ticket: string;
  cin: string;
  email: string;
  code: string;
  res: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id_ticket','cin','email', 'date','res','Actions'];
  dataSource: MatTableDataSource<reservationdata> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator| any;
  @ViewChild(MatSort) sort: MatSort| any; 
  data={
    cin:"",
    email:""
  }
  data2={}
  cuurentticket :any
  last:any
  listtickets=[]as any;
  listticketsinfo=[]as any;
  ticket : any
    login=window.sessionStorage.getItem("auth-user")
    role=JSON.parse(window.sessionStorage.getItem("auth-user")|| '{}')  
    rolee=this.role.role
  constructor(private http:HttpService,private router: Router) {
    this.getallticket() ;this.redirect() ;this.getticket()}

  ngOnInit(): void {
  }
  redirect()
  
  {
    if (this.login==null)
        this.router.navigate(["/login"])
    if(this.rolee=="ROLE_ADMIN")
      {
        this.router.navigate(["/admin"])
      }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getallticket(){
    this.http.getallticket().subscribe(res=>{
      console.log(res);
      this.listtickets=res

      for(let i=0;i<this.listtickets.length;i++){
        this.listticketsinfo.push({"id_ticket":this.listtickets[i].id_ticket,"cin":this.listtickets[i].cin,"email":this.listtickets[i].email,"res":this.listtickets[i].res,"date":this.listtickets[i].date})   
      }
      console.log(this.listticketsinfo);

      this.dataSource = new MatTableDataSource(this.listticketsinfo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    })
    this.listticketsinfo.length=0
  }

  Ajouterticke(){
    this.http.postticket(this.data).subscribe(res=>{
      console.log("success add..");
 
    })
  
  
  }
  getticketById(id:number){
    this.http.getticketbyid(id).subscribe(res=>{
      console.log(res);
      this.ticket=res
    })
  
 }


supprimeticketbyid(id:number){
 this.http.deletticketbyid(id).subscribe(res=>{
   console.log("suppression valider...");

 })
}
nextticket()
{
  this.http.nextticket(this.data2).subscribe(res=>{
    console.log("next");
  })
  this.reloadPage()
}
getticket()
{
  this.last=0
  this.http.getall().subscribe(res=>{
    this.cuurentticket=res
    for(let i=0;i<this.cuurentticket.length;i++){
      this.last++
    }
  })
  
  console.log(this.last);
}
reloadPage() {
  setTimeout(()=>{
    window.location.reload();
  }, 100);
}
}

