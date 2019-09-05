import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { ModalComponent } from './modal/modal.component';
import { PartenaireAddComponent } from './partenaire-add/partenaire-add.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'utilisateur',
    component: UtilisateurComponent
  },
  {
    path: 'partenaire-add',
    component: PartenaireAddComponent
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
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'depot',
    component: DepotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
