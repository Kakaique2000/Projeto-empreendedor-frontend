import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-home/signin/login.component';
import { SignupComponent } from './login-home/signup/signup.component';
import { NewJobComponent } from './new-job/new-job.component';

const routes: Routes = [
  { path: 'home',
   component: HomeComponent
  },
  { path: 'register',
   component: SignupComponent
  },
  { path: 'newjob',
   component: NewJobComponent
  },
  { path: '', 
  component: LoginComponent
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
