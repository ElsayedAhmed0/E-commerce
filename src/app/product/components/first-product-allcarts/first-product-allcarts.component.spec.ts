import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProductAllcartsComponent } from './first-product-allcarts.component';

describe('FirstProductAllcartsComponent', () => {
  let component: FirstProductAllcartsComponent;
  let fixture: ComponentFixture<FirstProductAllcartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstProductAllcartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstProductAllcartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
