import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUsuario } from '../home/search-card/search-params/search-params.models';
import { NewUser } from './signup/new-user';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { CookieService } from '../cookie.service';

   const API_URL = environment.api + '/auth/';
@Injectable({
    providedIn: 'root'
})
export class HomeLoginService {


    constructor(private http : HttpClient, private cookie : CookieService){}

     authenticate(email: string, password: string) {
        
        return this.http.post<any>(API_URL + 'login', {email, password}).pipe(
            tap(e  => {
                this.cookie.set("token",e.token,0.1)
            })
        )
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
        
        return this.http.post(API_URL + 'reset-password?',{},{params: params,responseType: 'text'});
    }

    novaSenha(token: string, password: string, passwordConfirmation: string) {
      return this.http.post(API_URL + 'reset-password/handle',{token,password,passwordConfirmation},{ responseType: 'text'});
    }
    
}