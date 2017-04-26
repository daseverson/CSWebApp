import { Injectable } from '@angular/core';

export class SearchQuery {
  FirstName: string;
  LastName: string;
  DOB: Date;
  ZipCode: string;
  Program: string;
  LastFour: number;
  Phone: string;
}


const query: SearchQuery[] = [{
  'FirstName': '',
  'LastName': '',
  'DOB': new Date(),
  'ZipCode': '',
  'Program': '',
  'LastFour': null,
  'Phone': '',
}
];


@Injectable()
export class SearchService {
  getSearchQuery() {
    return query;
  }
  constructor() { }

}
