import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchCardComponent } from './search-card/search-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(SearchCardComponent) child: SearchCardComponent;
  contractedSearchCard: boolean;

  constructor() { }

  shrinkSearchCard(contracted: boolean) {
    console.log(contracted);
    this.contractedSearchCard = contracted;
  }

  ngOnInit() {
  }

}
