import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { CarousselComponent} from './home/caroussel/caroussel.component';
import { AuthentificationComponent} from './authentification/authentification.component';
import { RegisterComponent } from './authentification/register/register.component';
import {CardsComponent} from './home/cards/cards.component';
import {ContactComponent } from './contact/contact.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {path: 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'reg', component : RegisterComponent },
  {path : 'auth', component : AuthentificationComponent},
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmodule = [HomeComponent, HeaderComponent, FooterComponent,
   AuthentificationComponent, RegisterComponent, CarousselComponent, CardsComponent,
  ContactComponent, AboutComponent];
