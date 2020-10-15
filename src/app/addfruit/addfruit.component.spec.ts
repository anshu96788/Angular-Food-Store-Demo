import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfruitComponent } from './addfruit.component';

describe('AddfruitComponent', () => {
  let component: AddfruitComponent;
  let fixture: ComponentFixture<AddfruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
