import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {

  constructor(
    private router : Router) {  }

  ngOnInit() {
  }

  teste(){
    alert('Vaga Criada')
    this.routerTo()
  }

  routerTo() {
    this.router.navigateByUrl('home');
  }

}
