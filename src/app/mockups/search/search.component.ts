import { Component, OnInit } from '@angular/core';
import { SearchQuery, SearchService } from 'app/mockups/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: SearchQuery[];

  constructor(service: SearchService) {
    this.query = service.getSearchQuery();

  }

  ngOnInit() {
  }

}
