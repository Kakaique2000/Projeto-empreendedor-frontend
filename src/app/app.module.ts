import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
import { AsyncLoading } from 'src/shared/pipes/async-loading.pipe';
import { HomeLoginModule } from './login-home/home-login.module';
import { NewJobComponent } from './new-job/new-job.component';
import { NewJobModule } from './new-job/new-job.module';
import { HttpClient } from '@angular/common/http';
import { NovoUsarioComponent } from './novo-usuario/novo-usuario.component'
import {MatSelectModule} from '@angular/material/select'
import { LoginPageComponent } from './login-page/login-page.component'
import { RedefinirSenhaCmponent } from './redefinir-senha/redefinir-senha.component'
@NgModule({
  declarations: [
    DashboardComponent,
    LoginPageComponent,
    RedefinirSenhaCmponent,
    NovoUsarioComponent,
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    HomeLoginModule,
    BrowserAnimationsModule,
    NewJobModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
