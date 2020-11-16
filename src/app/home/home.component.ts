import { Component, OnInit } from '@angular/core';
import { JobModel } from './job-list/job-list.models';
import { JobListService } from './job-list/job-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contractedSearchCard: boolean;
  jobs: JobModel[] = [];

  categorySelected: any;
  salarySelected: any;

  constructor(private serviceJob: JobListService) { }

  shrinkSearchCard(contracted: boolean) {
    console.log(contracted);

    this.contractedSearchCard = contracted;
  }

  ngOnInit() {
    this.searchJobs();
  }

  updateParams(param) {
    if (param.type === 'category') {
      this.categorySelected = param.data;
    } else {
      this.salarySelected = param.data;
    }

    console.log(this.categorySelected);
    console.log(this.salarySelected);
    this.searchJobs();
  }

  searchJobs() {
    this.serviceJob.getJobs(this.categorySelected, this.salarySelected)
      .subscribe((res: any) => {
        console.log(res);
        this.jobs = res['content'] as JobModel[];
        console.log(this.jobs);
      },
        erro => {
          console.log(erro);
        });
  }

}
