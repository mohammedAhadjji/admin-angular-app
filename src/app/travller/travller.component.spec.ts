import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravllerComponent } from './travller.component';

describe('TravllerComponent', () => {
  let component: TravllerComponent;
  let fixture: ComponentFixture<TravllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
