import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterfaceService } from './services/token-interface.service';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { PartenaireService } from './services/partenaire.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavetopComponent,
    NavsideComponent,
    PartenaireListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,PartenaireService,PartenaireService
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
