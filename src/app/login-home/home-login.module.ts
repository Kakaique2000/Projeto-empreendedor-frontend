import { NgModule } from '@angular/core';
import { LoginComponent } from './signin/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [HttpClientModule, ReactiveFormsModule, SharedModule, CommonModule, RouterModule, FormsModule,
        ]
})
export class HomeLoginModule {

}