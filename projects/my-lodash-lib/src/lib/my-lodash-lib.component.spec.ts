import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLodashLibComponent } from './my-lodash-lib.component';

describe('MyLodashLibComponent', () => {
  let component: MyLodashLibComponent;
  let fixture: ComponentFixture<MyLodashLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLodashLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLodashLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
