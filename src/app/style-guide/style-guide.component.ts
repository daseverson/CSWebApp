import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  data: { 'title': string; 'content': string; }[];

  constructor() {
    this.data = [
      {
        'title': 'Colors',
        'content': `test` },
      {
        'title': 'Headings',
        'content': `test` }
    ];


  }

  ngOnInit() {
  }

}
