import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdiscussionComponent } from './startdiscussion.component';

describe('StartdiscussionComponent', () => {
  let component: StartdiscussionComponent;
  let fixture: ComponentFixture<StartdiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartdiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
