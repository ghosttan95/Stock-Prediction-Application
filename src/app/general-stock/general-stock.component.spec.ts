import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStockComponent } from './general-stock.component';

describe('GeneralStockComponent', () => {
  let component: GeneralStockComponent;
  let fixture: ComponentFixture<GeneralStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
