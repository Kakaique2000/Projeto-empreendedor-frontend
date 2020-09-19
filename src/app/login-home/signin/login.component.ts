import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { IUsuario } from 'src/app/home/search-card/search-params/search-params.models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    templateUrl :'./login.component.html'
})
export class LoginComponent implements OnInit{
    
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService : HomeLoginService,
                private router : Router) {  }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName:['', Validators.required],
            password:['', Validators.required]
        });

    }

    login() {
        /*
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.loginService.authenticate(userName, password)
        .subscribe(() => {
            console.log("ok");
        },
        erro => {
            alert(erro);
            this.loginForm.reset();
        })
        */
        this.router.navigateByUrl('home');
    }
    

    register(){
        
    }

}