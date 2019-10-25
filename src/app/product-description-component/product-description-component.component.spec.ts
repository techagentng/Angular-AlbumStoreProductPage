import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionComponentComponent } from './product-description-component.component';

describe('ProductDescriptionComponentComponent', () => {
  let component: ProductDescriptionComponentComponent;
  let fixture: ComponentFixture<ProductDescriptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
