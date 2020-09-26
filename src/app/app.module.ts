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

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    HomeLoginModule,
    BrowserAnimationsModule,
    NewJobModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
