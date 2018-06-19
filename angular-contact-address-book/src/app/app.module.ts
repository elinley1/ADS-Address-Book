import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';
import { ContactsComponent }      from './contacts/contacts.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent,
    ContactDetailComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
