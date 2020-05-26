import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailErrModalComponent } from './email-err-modal.component';

describe('EmailErrModalComponent', () => {
  let component: EmailErrModalComponent;
  let fixture: ComponentFixture<EmailErrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailErrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailErrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
