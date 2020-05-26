import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDatePickerComponent } from './generic-date-picker.component';

describe('GenericDatePickerComponent', () => {
  let component: GenericDatePickerComponent;
  let fixture: ComponentFixture<GenericDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
