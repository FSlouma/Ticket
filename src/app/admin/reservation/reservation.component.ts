import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
export interface reservationdata {
  id_ticket: string;
  cin: string;
  email: string;
  code: string;
  res: string;
}
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  displayedColumns: string[] = ['id_ticket','cin','email', 'date','res','Actions'];
    dataSource: MatTableDataSource<reservationdata> | any;
    @ViewChild(MatPaginator) paginator: MatPaginator| any;
    @ViewChild(MatSort) sort: MatSort| any; 
    data={
      cin:"",
      email:""
    }
    listtickets=[]as any;
    listticketsinfo=[]as any;
    ticket : any
    login=window.sessionStorage.getItem("auth-user")
  constructor(private http:HttpService,private router: Router) {this.getallticket()
    this.redirect() }

  ngOnInit(): void {
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
  redirect()
  
  {
    if (this.login==null)
        this.router.navigate(["/login"])
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
supprimetous(){
  this.http.deletall().subscribe(res=>{
    console.log("suppression valider...");
    this.router.navigate(["/admin/reservation"])
    this.ngOnInit
  })
this.reloadPage()
 }

 reloadPage() {
  setTimeout(()=>{
    window.location.reload();
  }, 100);
}
}
