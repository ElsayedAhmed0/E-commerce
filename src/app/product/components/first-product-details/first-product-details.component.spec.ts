import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProductDetailsComponent } from './first-product-details.component';

describe('FirstProductDetailsComponent', () => {
  let component: FirstProductDetailsComponent;
  let fixture: ComponentFixture<FirstProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
