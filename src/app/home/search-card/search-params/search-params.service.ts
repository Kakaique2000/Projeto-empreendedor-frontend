import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ICategoria, IDistance } from './search-params.models';

@Injectable()
export class SearchParamsService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<Array<ICategoria>>(env.api + '/empregos/v1/categorias');
  }
  
  getDistancias() {
    return this.http.get<Array<IDistance>>(env.api + '/empregos/v1/distancias');
  }

}