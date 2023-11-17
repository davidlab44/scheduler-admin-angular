import { TestBed } from '@angular/core/testing';

import { BigQueryService } from './bigquery.service';

describe('BigqueryService', () => {
  let service: BigQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
