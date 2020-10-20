import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IQualification, IDistance } from './search-params.models';

@Injectable()
export class SearchParamsService {

  constructor(private http: HttpClient) { }

  getQualificacoes() {
    return this.http.get<Array<IQualification>>(env.api + '/qualifications');
  }
  
  getDistancias() {
    return this.http.get<Array<IDistance>>(env.api + '/empregos/v1/distancias');
  }

}