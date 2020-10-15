import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfinComponent } from './orderfin.component';

describe('OrderfinComponent', () => {
  let component: OrderfinComponent;
  let fixture: ComponentFixture<OrderfinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderfinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
