import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { Router } from '@angular/router';

@Component({
    templateUrl :'./new-password.component.html'
})
export class NewPasswordComponent implements OnInit{
    
    novaSenhaForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService : HomeLoginService,
                private router : Router) {  }

    ngOnInit(): void {
        this.novaSenhaForm = this.formBuilder.group({
            senha:['', Validators.required],
            senhaConfirma:['', Validators.required]
        });

    }

    sendEmail() {
        const senha = this.novaSenhaForm.get('senha').value;
        const senhaConfirma = this.novaSenhaForm.get('senhaConfirma').value;
        const token : string = '20d670c2-27e5-4e86-8a55-9ecc5f5eee95';
    
        this.loginService.novaSenha(token,senha, senhaConfirma)
        .subscribe((res) => {
            console.log(res)
            alert(res);
        },
        erro => {
            console.error(erro);
            
        })
        
    }
    

}