import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateNewFormationSupportComponent } from './create-new-formation-support/create-new-formation-support.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { StartLearnigComponent } from './start-learnig/start-learnig.component';
import { WebDevlopmentComponent } from './web-devlopment/web-devlopment.component';


const routes: Routes = [
  { path: 'Login', component:SingInComponent },
  { path:'Registre', component: SignUpComponent},
  {path:'',component:MenuComponent},
  {path:'Home',component:HomeComponent},
  {path:'StartLearning',component:StartLearnigComponent},
  {path:'Web Development',component:WebDevlopmentComponent},
  {path:'CreateNewFormationSupport',component:CreateNewFormationSupportComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
