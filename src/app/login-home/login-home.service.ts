import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUsuario } from '../home/search-card/search-params/search-params.models';
import { NewUser } from './signup/new-user';
import { environment } from 'src/environments/environment';

   const API_URL = environment.api + '/auth/';
@Injectable({
    providedIn: 'root'
})
export class HomeLoginService {


    constructor(private http : HttpClient){}

     authenticate(email: string, password: string) {
        
        return this.http.post(API_URL + 'login', {email, password});
    }

    signup(newUser: NewUser ) {        
        const firstName = newUser.firstName;
        const lastName = newUser.lastName;
        const email = newUser.email;
        const password = newUser.password;
        const gender = 'Masculino';
        const cpf = newUser.cpf;    
        const phone = '1234587'; 
        const recruiter = true;
        

        return this.http.post(API_URL + 'signup',
         {firstName, lastName,email, password, gender,cpf, phone, recruiter});
    }

    sendEmail(email: string) {
        const params = new HttpParams({
            fromObject: {
                email: email
            }
          });
        
        return this.http.post(API_URL + 'reset-password?',{},{params: params});
    }

    novaSenha(token: string, password: string, passwordConfirmation: string) {
      return this.http.post(API_URL + 'reset-password/handle',{token,password,passwordConfirmation});
    }


    
}