import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import {ListpartComponent } from './listpart/listpart.component';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'navetop',
    component: NavetopComponent
  }, {
    path: 'navside',
    component: NavsideComponent
  },
  {
    path: 'listpart',
    component: ListpartComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent
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
