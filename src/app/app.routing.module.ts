import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-home/signin/login.component';
import { SignupComponent } from './login-home/signup/signup.component';
import { NewJobComponent } from './new-job/new-job.component';
import { ResetPasswordComponent } from './login-home/reset-password/reset-password';
import { NewPasswordComponent } from './login-home/new-senha/new-password';
import { MenuUsuarioComponent } from './home/menu-usuario/menu-usuario.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { LoggedGuard } from './login-home/logged.guard';

const routes: Routes = [
  { path: 'home',
   component: HomeComponent,
    data: { showSideMenu: true },
   canActivate: [LoggedGuard],
  },
  { path: 'register',
   component: SignupComponent,
  data: { showSideMenu: false },
  
  },
  { path: 'newjob',
   component: NewJobComponent,
   data: {showSideMenu:true},
   canActivate: [LoggedGuard],
  },
  { path: 'resetpassword',
   component: ResetPasswordComponent,
   data: {showSideMenu:false}
  },
  { path: '', 
  component: LoginComponent,
  data: {showSideMenu:false}
  },
  { path: 'reset-password', 
  component: NewPasswordComponent,
  data: {showSideMenu:false}
  },
  { path: 'editprofile', 
  component: MenuUsuarioComponent,
  data: {showSideMenu:true},
  canActivate: [LoggedGuard],
  },
  { path: 'newcompany', 
  component: NewCompanyComponent,
  data: {showSideMenu:true},
  canActivate: [LoggedGuard],
  },
  { path: 'myregister', 
  component: RegistrationsComponent,
  data: {showSideMenu:true},
  canActivate: [LoggedGuard],
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
