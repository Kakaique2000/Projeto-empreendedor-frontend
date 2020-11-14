import { Component, OnInit } from '@angular/core';
import { JobModel } from './job-list.models';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: JobModel[] = [];
  
  constructor(private serviceJob: JobListService) { }

  ngOnInit() {
    this.serviceJob.getJobs()
        .subscribe((res : any) => {
          console.log(res)
          this.jobs = res['content'] as JobModel[]
         console.log(this.jobs)
        },
        erro => {
            console.log(erro);
        });
  }

}
