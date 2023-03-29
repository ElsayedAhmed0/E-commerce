import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecProductComponent } from './sec-product.component';

describe('SecProductComponent', () => {
  let component: SecProductComponent;
  let fixture: ComponentFixture<SecProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
