import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
import { AsyncLoading } from 'src/shared/pipes/async-loading.pipe';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component'

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    MenuUsuarioComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
