import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { ConnexionComponent }   from './connexion/app.connexion.component';
import { MedecinsComponent }  from './medecins/app.medecins.component';
import { VisitesComponent }  from './visites/app.visites.component';
import { NavbarComponent }  from './navbar/app.navbar.component';
import { MentionsComponent }  from './mentions/app.mentions.component';
import {DataService} from './services/app.service.data';

//import { Sha1Service} from './services/app.service.crypto';

const appRoutes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'medecins', component: MedecinsComponent },
  { path: 'visites', component: VisitesComponent },
  { path: 'accueil',  component: NavbarComponent  },
  { path: 'mentions',  component: MentionsComponent  }

];


@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,ConnexionComponent,MedecinsComponent, VisitesComponent,NavbarComponent,MentionsComponent ],
  providers : [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }