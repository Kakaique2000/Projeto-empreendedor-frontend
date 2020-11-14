import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobModel } from './job-list.models';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/cookie.service';

const API_URL = environment.api
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUdWxpcGEgU3RvcmUgRWNvbW1lcmNlIEFQSSIsInN1YiI6IjEiLCJpYXQiOjE2MDUzNzA3NDMsImV4cCI6MTYwNTQ1NzE0M30.sezWY45tDSUjZAVdPmkyt7_AtKNSmqgfBGP4xrfLPv0'

@Injectable({
    providedIn: 'root'
})


export class JobListService {
    public _url: string = "http://localhost:8080/jobs";
      

  constructor(private http: HttpClient, private cookie : CookieService) { }


  getJobs()   {

    const header = {
        'Authorization': 'Bearer '+ TOKEN
    }

    const headerToken = {                                                                                                                                                                                 
        headers: new HttpHeaders(header), 
      };

    return this.http.get<JobModel[]>(this._url, headerToken)

  }

}