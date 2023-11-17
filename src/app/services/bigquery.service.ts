import { Injectable } from '@angular/core';
import { BigQuery } from '@google-cloud/bigquery';

@Injectable({
  providedIn: 'root',
})
export class BigQueryService {
  /*private bigquery: any;
  //api_key = "AIzaSyCLGuYNR7m6Qf3lvVIe1-tBf-spLXyvfN4";
  constructor() {
    // Ruta al archivo JSON de credenciales
    const keyFilename =
      '/src/app/assets/metal-scholar-405314-1f14ae8b2f02.json';
    this.bigquery = new BigQuery({ keyFilename });
  }

  runQuery(query: string): Promise<any> {
    return this.bigquery.query(query);
  }*/
}
