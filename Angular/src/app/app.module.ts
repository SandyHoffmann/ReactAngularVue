import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,Routes,  RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes : Routes= [
  { path: '', component: ContactManagerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactManagerComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
