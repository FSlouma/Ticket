import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { UserComponent} from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import {AddUserComponent} from './admin/add-user/add-user.component';
const routes: Routes = [
  {path:'ticket',component :TicketComponent},
  {path:'login',component :LoginComponent},
  {path:'user',component :UserComponent},

  
  {path:'admin',component :AdminComponent},
  {path:'admin/utilisateur',component :UtilisateurComponent},
  {path:'admin/reservation',component :ReservationComponent},
  {path:'admin/adduser',component :AddUserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
