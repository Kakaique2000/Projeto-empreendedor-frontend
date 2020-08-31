import { NgModule } from '@angular/core';
import { LoginComponent } from './signin/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [ ReactiveFormsModule, CommonModule, RouterModule, FormsModule]
})
export class HomeLoginModule{

}