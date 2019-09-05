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
  providers: [AuthService,PartenaireService,PartenaireService,
  /*{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterfaceService,
      multi: true
  }*/],
  bootstrap: [AppComponent],
  exports: [UtilisateurComponent,DepotComponent]
})
export class AppModule { }
