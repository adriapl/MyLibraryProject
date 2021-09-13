import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponentsLibComponent } from './my-shared-components-lib.component';

describe('MySharedComponentsLibComponent', () => {
  let component: MySharedComponentsLibComponent;
  let fixture: ComponentFixture<MySharedComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySharedComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
