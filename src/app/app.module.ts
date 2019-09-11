import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterfaceService } from './services/token-interface.service';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { PartenaireService } from './services/partenaire.service';
import { ModalComponent } from './modal/modal.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PartenaireAddComponent } from './partenaire-add/partenaire-add.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepotComponent } from './depot/depot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { TransactionService } from './services/transaction.service';
import { UtilisateurService } from './services/utilisateur.service';
import { CompteService } from './services/compte.service';
import { DepotService } from './services/depot.service';
import { AuthGuard } from './auth.guard';
import { CompteComponent } from './compte/compte.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavetopComponent,
    NavsideComponent,
    PartenaireListComponent,
    ModalComponent,
    UtilisateurComponent,
    PartenaireAddComponent,
    TransactionComponent,
    DepotComponent,
    UtilisateurListComponent,
    PartDetailComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PartenaireService,
    CompteService,
    DepotService,
    TransactionService,
    UtilisateurService
  /*{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterfaceService,
      multi: true
  }*/],
  bootstrap: [AppComponent],
  exports: [
    UtilisateurComponent,
    DepotComponent,
    PartenaireAddComponent,
    PartenaireListComponent,
    TransactionComponent,
    UtilisateurListComponent
  ]
})
export class AppModule { }
