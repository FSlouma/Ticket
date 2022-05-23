import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  URL="http://localhost:8081"

  //Api user
  getalluser()
  {
    return this.http.get(this.URL+"/apiuser/users")
  }
  getuserbyid(id:string)
  {
    return this.http.get(this.URL+"/apiuser/user/"+id)
  }
  postuser(data:object)
  {
    return this.http.post(this.URL+"/apiuser/adduser",data)
  }
  updateuserbyid(id:string,data:object)
  {
    return this.http.put(this.URL+"/apiuser/user/"+id,data)
  }
  deletuserbyid(id:string)
  {
    return this.http.delete(this.URL+"/apiuser/user/"+id)
  }
  //-
  getuserbyemail(email:string)
  {
    return this.http.get(this.URL+"/apiuser/userbyemail/"+email)
  }

  //Api Ticket
  getallticket()
  {
    return this.http.get(this.URL+"/apiticket/tickets")
  }
  getticketbyid(id:number)
  {
    return this.http.get(this.URL+"/apiticket/ticket/"+id)
  }
  postticket(data:object)
  {
    return this.http.post(this.URL+"/apiticket/addticket",data)
  }
  updateticketbyid(id:number,data:object)
  {
    return this.http.put(this.URL+"/apiticket/ticket/"+id,data)
  }
  deletticketbyid(id:number)
  {
    return this.http.delete(this.URL+"/apiticket/ticket/"+id)
  }
  deletall()
  {
    return this.http.delete(this.URL+"/apiticket/delticket")
  }
  //-
  getticketbyemail(email:string)
  {
    return this.http.get(this.URL+"/apiticket/ticketbyemail/"+email)
  }
  
  changeres(email:string)
  {
    return this.http.get(this.URL+"/apiticket/tickete/"+email)
  }

  //mail
  sendcode(email:string)
  {
    return this.http.get(this.URL+"/mail/send/"+email)
  }
  sendpassword(email:string)
  {
    return this.http.get(this.URL+"/mail/sent/"+email)
  }
  sendv(email:string)
  {
    return this.http.get(this.URL+"/mail/senv/"+email)
  }
//curent ticket
  nextticket(data :any)
  {
    return this.http.post(this.URL+"/apiservice/addservice",data)
  }
  getall()
  {
    return this.http.get(this.URL+"/apiservice/services")
  }

  
}
