import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
    f={
      "date" :null,
      "cin":"",
      "email":"",
      "res":false
      }
    last:any
    youticket:any
    tabticket:any
    currentticket:any//getvalue reservation
    cuurentticket:any//cuurent ticket in use
  constructor(private http:HttpService,private notif:NotificationsService) { this.getallticket();
    this.getticket();
    this.getticketreservation()}

  ngOnInit(): void {
  }
  getallticket()
  {
     this.http.getallticket().subscribe(res=>{
      console.log(res);
    })
  }
  postticket()
  {
    this.http.postticket(this.f).subscribe(res=>{
      console.log("done");
      })
  }
  getticketbyid(id:number)
  {
    this.http.getticketbyid(id).subscribe(res=>{
      console.log("done");
      
    })
  }
  deleteticket(id:number)
  {
    this.http.deletticketbyid(id).subscribe(res=>{
      console.log("deleted");
      
    })
  }
  deleteall()
  {
    this.http.deletall().subscribe(res=>{
      console.log("all deleted");
      
    })
  }

  onSuccess(msg:string){
    this.notif.success('Success',msg,{
      position:['bottom','right'],
      timeOut:5000,
      animate:'fade',
      showProgressBar:true
    });
  }
  
  onError(msg:string){
    this.notif.error('Error',msg,{
      position:['bottom','right'],
      timeOut:4000,
      animate:'fade',
      showProgressBar:true
    });
    
  }

   async getValue() :Promise<void>{
     this.postticket() 
     await this.sleep(1000)
     this.sentmail()
     await this.sleep(300)
     var Valeur = prompt("Saisir le code : ", "");
     this.http.getticketbyemail(this.f.email).subscribe(res=>{
      this.currentticket=res
      if(this.currentticket.code==Valeur)
      {
        this.http.changeres(this.f.email).subscribe(res=>{
          console.log("updated");
        })
        alert("Identitque" );
      }
      else
      alert("non identique" );
     
      })
      await this.sleep(300)
      this.validation()
      this.clearfiel()
  }
  clearfiel()
  {
  ((<HTMLInputElement>document.getElementById("email")).value) ="";
  ((<HTMLInputElement>document.getElementById("cin")).value) ="";
  }

  sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  sentmail()
  {
    this.http.sendcode(this.f.email).subscribe(res=>{
      console.log(("done"));
    })
  }
  validation()
  {
    this.http.sendv(this.f.email).subscribe(res=>{
      console.log(("done"));
    })
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
  getticketreservation()
  {
    this.youticket=1
    this.http.getallticket().subscribe(res=>{
      this.tabticket=res
      for(let i=0;i<this.tabticket.length;i++){
        this.youticket++
      }
    })
  }
}

