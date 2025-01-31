import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsEmailComponent } from './sittings-email.component';

describe('SittingsEmailComponent', () => {
  let component: SittingsEmailComponent;
  let fixture: ComponentFixture<SittingsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SittingsEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SittingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
