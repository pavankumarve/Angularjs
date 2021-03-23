import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormdatacomponentComponent } from './formdatacomponent/formdatacomponent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path:'login' , component: LoginComponent},
  {path:'signup' , component: SignupComponent},
  {path:'users' , component: UsersComponent},
  {path:'formdatacomponent' , component: FormdatacomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
