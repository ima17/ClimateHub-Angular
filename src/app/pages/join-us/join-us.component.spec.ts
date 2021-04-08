import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUSComponent } from './join-us.component';

describe('JoinUSComponent', () => {
  let component: JoinUSComponent;
  let fixture: ComponentFixture<JoinUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
