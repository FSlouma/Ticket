import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatSortModule} from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from '@angular/material/tabs';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { SidebaruserComponent } from './user/sidebaruser/sidebaruser.component';
import { TopbaruserComponent } from './user/topbaruser/topbaruser.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    UserComponent,
    LoginComponent,
    AdminComponent,
    TopbarComponent,
    SidebarComponent,
    ReservationComponent,
    UtilisateurComponent,
    SidebaruserComponent,
    TopbaruserComponent,
    DialogueComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    SimpleNotificationsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
