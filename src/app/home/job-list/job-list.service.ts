import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobModel } from './job-list.models';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/cookie.service';

const API_URL = environment.api

@Injectable({
    providedIn: 'root'
})
export class JobListService {
    public _url: string = "http://localhost:8080/jobs";      

  constructor(private http: HttpClient, private cookie : CookieService) { }

  getJobs() {

    const header = {
        'Authorization': 'Bearer '+ this.cookie.get('token')
    }

    const headerToken = {                                                                                                                                                                                 
        headers: new HttpHeaders(header), 
      };

    return this.http.get<JobModel[]>(this._url, headerToken)

  }

}