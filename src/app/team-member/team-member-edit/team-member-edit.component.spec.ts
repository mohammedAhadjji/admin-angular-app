import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberEditComponent } from './team-member-edit.component';

describe('TeamMemberEditComponent', () => {
  let component: TeamMemberEditComponent;
  let fixture: ComponentFixture<TeamMemberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
