import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{HttpClientModule} from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { StartLearnigComponent } from './start-learnig/start-learnig.component';
import { WebDevlopmentComponent } from './web-devlopment/web-devlopment.component';
import { CreateNewFormationSupportComponent } from './create-new-formation-support/create-new-formation-support.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SignUpComponent,
    MenuComponent,
    HomeComponent,
    StartLearnigComponent,
    WebDevlopmentComponent,
    CreateNewFormationSupportComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
