import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPollComponent } from './event-poll.component';

describe('EventPollComponent', () => {
  let component: EventPollComponent;
  let fixture: ComponentFixture<EventPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
