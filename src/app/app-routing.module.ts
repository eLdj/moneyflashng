import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'navetop',
    component: NavetopComponent
  }, 
  {
    path: 'navside',
    component: NavsideComponent
  },
  {
    path: 'partenaire-list',
    component:  PartenaireListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
