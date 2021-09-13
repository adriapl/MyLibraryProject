import { TestBed } from '@angular/core/testing';

import { MyLodashLibService } from './my-lodash-lib.service';

describe('MyLodashLibService', () => {
  let service: MyLodashLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLodashLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
