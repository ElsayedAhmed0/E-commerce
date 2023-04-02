import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundProductAllCartsComponent } from './secound-product-all-carts.component';

describe('SecoundProductAllCartsComponent', () => {
  let component: SecoundProductAllCartsComponent;
  let fixture: ComponentFixture<SecoundProductAllCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundProductAllCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundProductAllCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
