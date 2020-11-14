import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ICategoria, NewJob, TypeJob, TypeSalary } from './new-job.model';
import { CompanyModel } from '../new-company/new-company.model';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class NewJobService {

  public _url: string = "http://localhost:8080/jobs/";
  public _urlCompanie: string = "http://localhost:8080/users/1/companies";
  

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

  constructor(private http: HttpClient, private cookie : CookieService) { }

  getAreas() {
    const header = {
      'Authorization': 'Bearer '+this.cookie.get("token")
  }

  const headerToken = {                                                                                                                                                                                 
      headers: new HttpHeaders(header), 
    };

  return this.http.get<TypeJob>(this._url+'occupations', headerToken)
  }

  getSalary() {
    const header = {
      'Authorization': 'Bearer '+this.cookie.get("token")
  }

  const headerToken = {                                                                                                                                                                                 
      headers: new HttpHeaders(header), 
    };

  return this.http.get<TypeSalary>(this._url+'salaries', headerToken)
  }

  createJob(newjob : NewJob) {
    const headertste = 'Bearer '+this.cookie.get("token")


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': headertste });
    let options = { headers: headers };

    const title = newjob.title;
    const description = newjob.description;
    const salary = newjob.salary;
    const occupation = newjob.occupation;
    const companyId = newjob.companyId;


    return this.http.post(this._url, {title, description, salary, occupation, companyId}, options);

  }

  getAllCompanies(){
    const header = {
      'Authorization': 'Bearer '+this.cookie.get("token")
  }

  const headerToken = {                                                                                                                                                                                 
      headers: new HttpHeaders(header), 
    };

  return this.http.get<CompanyModel[]>(this._urlCompanie, headerToken)
  }
  

}