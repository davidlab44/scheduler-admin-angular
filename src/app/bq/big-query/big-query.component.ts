import { Component, OnInit } from '@angular/core';
import { BigQueryService } from 'src/app/services/bigquery.service';

@Component({
  selector: 'app-bigquery',
  templateUrl: './big-query.component.html',
  styleUrls: ['./big-query.component.css'],
})
export class BigQueryComponent implements OnInit {
  constructor(private bigQueryService: BigQueryService) {}

  ngOnInit() {
    /*const query =
      'SELECT * FROM `bigquery-public-data.google_trends.austin_crime`';
    this.bigQueryService
      .runQuery(query)
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        console.error(error);
      });*/
  }
}
