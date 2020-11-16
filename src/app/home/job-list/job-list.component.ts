import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from './job-list.models';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input() jobs: JobModel[] = [];

  constructor(private serviceJob: JobListService) { }

  ngOnInit() {}

}
