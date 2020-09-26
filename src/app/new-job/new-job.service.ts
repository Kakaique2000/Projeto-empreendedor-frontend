import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ICategoria } from './new-job.model';

@Injectable()
export class NewJobService {

  areas: any[] = [
    {
      id:1,
      type: 'Motorista'
    },
    {
      id:2,
      type: 'Pintor'
    },
    {
      id:3,
      type: 'Programador'
    }
  ]

  cities: any[] = [
    {
      id:1,
      city: 'São Paulo'
    },
    {
      id:2,
      city: 'Rio de Janeiro'
    },
    {
      id:3,
      city: 'Goias'
    }
  ]

  constructor(private http: HttpClient) { }

  getAreas() {
    return this.areas;
  }

  getCities() {
    return this.cities;
  }
  

}