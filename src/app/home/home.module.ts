import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { SearchCardComponent } from './search-card/search-card.component';
import { SearchInputComponent } from './search-card/search-input/search-input.component';
import { SearchParamsComponent } from './search-card/search-params/search-params.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchParamsService } from './search-card/search-params/search-params.service';
import { JobListComponent } from './job-list/job-list.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { FilterByJob } from './filter-by-job.pipe';

@NgModule({
  declarations: [HomeComponent, SearchCardComponent, SearchInputComponent, SearchParamsComponent, JobListComponent, MenuUsuarioComponent, FilterByJob],
  imports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    CommonModule,
  ],
  providers: [
    SearchParamsService
  ]
})
export class HomeModule { }
