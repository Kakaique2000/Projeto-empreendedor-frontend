import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { SearchCardComponent } from './search-card/search-card.component';

@NgModule({
  declarations: [HomeComponent, SearchCardComponent],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
