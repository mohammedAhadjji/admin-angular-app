import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailToSubscriberComponent } from './email-to-subscriber.component';

describe('EmailToSubscriberComponent', () => {
  let component: EmailToSubscriberComponent;
  let fixture: ComponentFixture<EmailToSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailToSubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailToSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
