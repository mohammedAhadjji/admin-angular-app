import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairComponent } from './commentair.component';

describe('CommentairComponent', () => {
  let component: CommentairComponent;
  let fixture: ComponentFixture<CommentairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
