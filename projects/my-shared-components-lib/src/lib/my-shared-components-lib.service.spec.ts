import { TestBed } from '@angular/core/testing';

import { MySharedComponentsLibService } from './my-shared-components-lib.service';

describe('MySharedComponentsLibService', () => {
  let service: MySharedComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySharedComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
