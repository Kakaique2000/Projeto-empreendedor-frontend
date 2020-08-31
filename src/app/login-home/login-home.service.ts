import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../home/search-card/search-params/search-params.models';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeLoginService {

    constructor(private http : HttpClient){}


    authenticate(userName: string, password: string) {
        
        return this.http.post(env.api + 'login/', {userName, password});
    }

    
}