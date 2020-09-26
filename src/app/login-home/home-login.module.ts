import { NgModule } from '@angular/core';
import { LoginComponent } from './signin/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [ HttpClientModule,ReactiveFormsModule, CommonModule, RouterModule, FormsModule]
})
export class HomeLoginModule{

}