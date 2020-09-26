import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategoria } from './new-job.model';
import { NewJobService } from './new-job.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {

  areas: any[] = [];
  city: any[] = [];

  constructor(
    private router : Router, private newJobService: NewJobService) {  }

  ngOnInit() {
    this.areas = this.newJobService.getAreas();
    this.city = this.newJobService.getCities();
  }



  teste(){
    alert('Vaga Criada');
    this.routerTo();
  }

  routerTo() {
    this.router.navigateByUrl('home');
  }

}
